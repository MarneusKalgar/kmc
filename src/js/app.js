// ================ BEGIN APP.JS ================ //
import Header from './modules/Header';
import Hero from './modules/Hero';

const callback = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') console.log('main module loaded.');

  new Header(document.querySelector('.header'));
  new Hero(document.querySelector('.hero'));
};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
// ================ END APP.JS ================ //
