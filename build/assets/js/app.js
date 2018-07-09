/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/app.js","0"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _Header = __webpack_require__(/*! ./modules/Header */ "./src/js/modules/Header.js");
var _Hero = __webpack_require__(/*! ./modules/Hero */ "./src/js/modules/Hero.js");
var _EqualList = __webpack_require__(/*! ./modules/EqualList */ "./src/js/modules/EqualList.js");
var _Contacts = __webpack_require__(/*! ./modules/Contacts */ "./src/js/modules/Contacts.js"); // ================ BEGIN APP.JS ================ //

var callback = function callback() {
  var env = "development";
  if (env === 'development') console.log('main module loaded.');

  var contacts = null;
  new _Header.Header(document.querySelector('.header'));
  if (document.querySelector('.hero')) new _Hero.Hero(document.querySelector('.hero'));
  if (document.querySelector('.equal-list')) new _EqualList.EqualList(document.querySelector('.equal-list'));
  if (document.querySelector('.contacts')) {
    contacts = new _Contacts.Contacts(document.querySelector('.contacts'));
    window.googleMapsScriptLoaded = function () {
      contacts.googleMapsScriptLoaded();
    };
    contacts.appendMapScript();
  }
};

if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
// ================ END APP.JS ================ //

/***/ }),

/***/ "./src/js/modules/Contacts.js":
/*!************************************!*\
  !*** ./src/js/modules/Contacts.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Contacts = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /* global google */var
Contacts = /*#__PURE__*/function () {
  function Contacts(block) {_classCallCheck(this, Contacts);
    this.block = block;
    this.map = document.getElementById('map');
    this.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDNlBvo4iwNwENMDLv7R692NTXgEXM_a2I&callback=googleMapsScriptLoaded';
  }_createClass(Contacts, [{ key: "googleMapsScriptLoaded", value: function googleMapsScriptLoaded()

    {
      var center = { lat: +this.map.getAttribute('data-lat'), lng: +this.map.getAttribute('data-lng') };
      var map = new google.maps.Map(this.map, {
        center: center,
        zoom: 12 });

      new google.maps.Marker({ position: center, map: map });
    } }, { key: "appendMapScript", value: function appendMapScript()

    {
      var scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', this.src);
      document.body.appendChild(scriptEl);
    } }]);return Contacts;}();exports.Contacts = Contacts;

/***/ }),

/***/ "./src/js/modules/EqualList.js":
/*!*************************************!*\
  !*** ./src/js/modules/EqualList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.EqualList = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var EqualList =
function EqualList(block) {_classCallCheck(this, EqualList);
  this.block = block;
  // const blockName = this.block[0].getAttribute('class').split(' ')[0];
  var wrap = this.block.querySelectorAll('.equal-wrap');
  var maxHeight = -1;

  /** setEqualHeight */
  var setEqualHeight = function setEqualHeight() {
    Array.prototype.forEach.call(wrap, function (elem) {
      maxHeight = Math.max(maxHeight, elem.offsetHeight);
    });

    Array.prototype.forEach.call(wrap, function (elem) {
      var item = elem;
      item.style.height = "".concat(maxHeight, "px");
    });
  };

  setTimeout(function () {
    setEqualHeight();
  }, 200);
  window.addEventListener('resize', function () {
    setTimeout(function () {
      setEqualHeight();
    }, 200);
  });
};exports.EqualList = EqualList;

/***/ }),

/***/ "./src/js/modules/Header.js":
/*!**********************************!*\
  !*** ./src/js/modules/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Header = void 0;var _smoothScrollPolyfills = _interopRequireDefault(__webpack_require__(/*! smooth-scroll/dist/smooth-scroll.polyfills.min */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Header =
function Header(block) {var _this = this;_classCallCheck(this, Header);
  this.block = block;
  // const context = this;
  var blockName = this.block.getAttribute('class').split(' ')[0];

  var burger = this.block.querySelector(".".concat(blockName, "__burger"));
  var nav = this.block.querySelector(".".concat(blockName, "__wrap"));
  var links = this.block.querySelectorAll('.nav__link');
  var scrollPos = 0;
  var scrollPosHeader = 0;

  if (this.block.classList.contains("".concat(blockName, "--main"))) {
    new _smoothScrollPolyfills.default('.nav a[href*="#"]');
  }

  /** gerScrollPos */
  var gerScrollPos = function gerScrollPos() {
    scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  };

  /** smoothScroll */
  // const smoothScroll = elem => {
  //   const vpWidth = window.innerWidth;
  //   const selector = elem.getAttribute('href');
  //   const rect = document.querySelector(selector).getBoundingClientRect();
  //   let behavior = null;

  //   // if (vpWidth < 1280) {
  //   //   behavior = 'auto';
  //   // } else {
  //   //   behavior = 'smooth';
  //   // }

  //   // window.scroll({
  //   //   top: rect.top,
  //   //   left: 0,
  //   //   behavior
  //   // });
  // };

  /** isInViewport */
  var isInViewport = function isInViewport(section) {
    var elem = document.querySelector(section);
    var windowHeight = window.innerHeight;
    var distance = elem.getBoundingClientRect();
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var id = elem.getAttribute('id');

    if (scrolled < windowHeight / 3) {
      Array.prototype.forEach.call(links, function (link) {
        link.classList.remove('isCurrent');
      });
      links[0].classList.add('isCurrent');
    } else if (scrolled > distance.top + window.pageYOffset - windowHeight / 3 * 2) {
      Array.prototype.forEach.call(links, function (link) {
        link.classList.remove('isCurrent');
      });
      document.querySelector("a[href='#".concat(id, "']")).classList.add('isCurrent');
    }
  };

  /** toggleElements */
  var toggleElements = function toggleElements() {
    if (burger.classList.contains('isActive')) {
      burger.classList.remove('isActive');
      nav.classList.remove('isOpened');
      document.body.classList.remove('isFixed');
      window.scrollTo(0, scrollPos);
    } else {
      gerScrollPos();
      burger.classList.add('isActive');
      nav.classList.add('isOpened');
      document.body.classList.add('isFixed');
    }
  };

  window.addEventListener('scroll', function () {
    scrollPosHeader = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosHeader > 100) {
      _this.block.classList.add('isScrolled');
    } else {
      _this.block.classList.remove('isScrolled');
    }

    // isInViewport('.hero');
    if (_this.block.classList.contains("".concat(blockName, "--main"))) {
      isInViewport('.about');
      isInViewport('.production');
      isInViewport('.certificates');
      isInViewport('.catalogs');
      isInViewport('.leftovers');
      isInViewport('.objects');
      isInViewport('.contacts');
    }
  });

  burger.addEventListener('click', function () {
    toggleElements();
  });

  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (e) {
      if (_this.block.classList.contains("".concat(blockName, "--main"))) e.preventDefault();

      toggleElements();
      for (var i = 0; i < links.length; i += 1) {
        links[i].classList.remove('isCurrent');
      }
      // smoothScroll(link);
      link.classList.add('isCurrent');
    });
  });
};exports.Header = Header;

/***/ }),

/***/ "./src/js/modules/Hero.js":
/*!********************************!*\
  !*** ./src/js/modules/Hero.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Hero = void 0;var _glide = _interopRequireDefault(__webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Hero =
function Hero(block) {_classCallCheck(this, Hero);
  this.block = block;
  // const blockName = this.block.getAttribute('class').split(' ')[0];

  new _glide.default('.glide', {
    type: 'carousel',
    gap: 0 }).
  mount();
};exports.Hero = Hero;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map