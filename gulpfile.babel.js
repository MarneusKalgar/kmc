import glob from 'glob';
import path from 'path';
import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import bourbon from 'bourbon';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfigDev from './webpack.config.dev';

const $ = gulpLoadPlugins();
const $css = gulpLoadPlugins({
  pattern: ['postcss-*', 'autoprefixer', 'cssnano'],
  replaceString: /^postcss-/
});

const AUTOPREFIXER_BROWSERS = ['last 2 versions', 'ie >= 11', 'Android >= 30'];
const POSTCSS_PROCESSORS_DEV = [$css.presetEnv({ browsers: AUTOPREFIXER_BROWSERS })];
const POSTCSS_PROCESSORS_PROD = [$css.presetEnv({ browsers: AUTOPREFIXER_BROWSERS }), $css.cssnano()];

const PATH = {
  src: {
    html: 'src/pug/pages/*.pug',
    js: 'src/js/app.js',
    styles: 'src/sass/app.scss',
    img: 'src/img/**/*',
    fonts: 'src/fonts/**/*'
  },
  build: {
    html: 'build/',
    js: 'build/assets/js/',
    styles: 'build/assets/css/',
    img: 'build/assets/img/',
    fonts: 'build/assets/fonts/'
  },
  prod: {
    html: 'prod/',
    js: 'prod/assets/js/',
    styles: 'prod/assets/css/',
    img: 'prod/assets/img/',
    fonts: 'prod/assets/fonts/'
  },
  watch: {
    html: 'src/pug/**/*',
    js: 'src/js/**/*',
    styles: 'src/sass/**/*',
    img: 'src/img/**/*',
    fonts: 'src/fonts/**/*'
  },
  clean: 'build/*'
};

const PUG_CONFIG = {
  pretty: '  ',
  locals: {
    __pages: glob
      .sync(PATH.src.html, {
        nodir: true,
        nonull: false
      })
      .map(filename => path.parse(filename).name)
  }
};

const JS_PLUMBER_CONFIG = {
  errorHandler: $.notify.onError(err => ({
    title: 'Webpack',
    message: err.message
  }))
};

const SASS_CONFIG = {
  includePaths: ['styles'].concat(bourbon.includePaths),
  outputStyle: 'expanded'
};

/** CLEAN */
gulp.task('clean:build', () => del(PATH.clean, { dot: true }));
gulp.task('clean:cache', cb => $.cache.clearAll(cb));

gulp.task('clean', ['clean:build', 'clean:cache']);

/** SERVE */
gulp.task('serve', () =>
  browserSync({
    server: ['build'],
    notify: false,
    open: false,
    tunnel: false,
    host: 'markup',
    port: 9000,
    logPrefix: 'browserSync'
  })
);

/** BUILD HTML */
gulp.task('build:html', () => {
  gulp
    .src(PATH.src.html)
    .pipe($.plumber())
    .pipe($.if('*.pug', $.pug(PUG_CONFIG)))
    .pipe($.changed(PATH.build.html, { hasChanged: $.changed.compareSha1Digest }))
    .pipe($.if(!browserSync.active, $.size({ title: 'html', showFiles: true })))
    .pipe(gulp.dest(PATH.build.html))
    .pipe(browserSync.stream());
});

/** BUILD JS */
gulp.task('build:js', () => {
  gulp
    .src(PATH.src.js)
    .pipe($.plumber(JS_PLUMBER_CONFIG))
    .pipe(webpackStream({ config: webpackConfigDev }, webpack))
    .pipe(gulp.dest(PATH.build.js))
    .pipe(browserSync.stream());
});

/** BUILD STYLES */
gulp.task('build:styles', () => {
  gulp
    .src(PATH.src.styles)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.if('*.{sass,scss}', $.sass(SASS_CONFIG).on('error', $.sass.logError)))
    .pipe($.if('*.css', $.postcss(POSTCSS_PROCESSORS_DEV)))
    .pipe($.sourcemaps.write('./'))
    .pipe($.changed(PATH.build.styles, { hasChanged: $.changed.compareSha1Digest }))
    .pipe($.if(!browserSync.active, $.size({ title: 'styles' })))
    .pipe(gulp.dest(PATH.build.styles))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

/** BUILD IMG */
gulp.task('build:img', () => {
  gulp
    .src(PATH.src.img)
    // .pipe($.changed(PATH.build.img, { hasChanged: $.changed.compareSha1Digest }))
    .pipe($.cache($.imagemin()))
    .pipe($.size({ title: 'img', showFiles: true }))
    .pipe(gulp.dest(PATH.build.img));
});

/** BUILD FONTS */
gulp.task('build:fonts', () => {
  gulp
    .src(PATH.src.fonts)
    .pipe($.changed(PATH.build.fonts, { hasChanged: $.changed.compareSha1Digest }))
    .pipe($.size({ title: 'fonts', showFiles: true }))
    .pipe(gulp.dest(PATH.build.fonts));
});

/** BUILD ALL*/
gulp.task('build', ['build:html', 'build:js', 'build:styles', 'build:fonts', 'build:img']);

/** BUILD DEV */
gulp.task('dev', ['build', 'serve', 'watch']);

/** WATCH */
gulp.task('watch', () => {
  gulp.watch(PATH.watch.html, ['build:html']);
  gulp.watch(PATH.watch.styles, ['build:styles']);
  gulp.watch(PATH.watch.js, ['build:js']);
  gulp.watch(PATH.watch.img, ['build:img']);
  gulp.watch(PATH.watch.fonts, ['build:fonts']);
});

/** PROD HTML */
gulp.task('prod:html', () => {
  gulp
    .src(PATH.src.html)
    .pipe($.if('*.pug', $.pug(PUG_CONFIG)))
    .pipe(gulp.dest(PATH.prod.html));
});

/** PROD JS */
gulp.task('prod:js', () => {
  gulp
    .src(PATH.src.js)
    .pipe($.plumber(JS_PLUMBER_CONFIG))
    .pipe(webpackStream({ config: webpackConfigDev }, webpack))
    .pipe(gulp.dest(PATH.prod.js));
});

/** PROD STYLES */
gulp.task('prod:styles', () => {
  gulp
    .src(PATH.src.styles)
    .pipe($.if('*.{sass,scss}', $.sass(SASS_CONFIG).on('error', $.sass.logError)))
    .pipe($.if('*.css', $.postcss(POSTCSS_PROCESSORS_PROD)))
    .pipe(gulp.dest(PATH.prod.styles));
});

/** PROD IMG */
gulp.task('prod:img', () => {
  gulp
    .src(PATH.src.img)
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest(PATH.prod.img));
});

/** PROD FONTS */
gulp.task('prod:fonts', () => {
  gulp.src(PATH.src.fonts).pipe(gulp.dest(PATH.prod.fonts));
});

/** PROD ALL */
gulp.task('prod', ['prod:html', 'prod:js', 'prod:styles', 'prod:fonts', 'prod:img']);
