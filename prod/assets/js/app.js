!function(e){function t(t){for(var n,i,a=t[0],s=t[1],l=t[2],d=0,f=[];d<a.length;d++)i=a[d],c[i]&&f.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},c={1:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;r.push([8,0]),o()}([function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Contacts=void 0;var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.block=t,this.map=document.getElementById("map"),this.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNlBvo4iwNwENMDLv7R692NTXgEXM_a2I&callback=googleMapsScriptLoaded"}var t,o,c;return t=e,(o=[{key:"googleMapsScriptLoaded",value:function(){var e={lat:+this.map.getAttribute("data-lat"),lng:+this.map.getAttribute("data-lng")},t=new google.maps.Map(this.map,{center:e,zoom:12});new google.maps.Marker({position:e,map:t})}},{key:"appendMapScript",value:function(){var e=document.createElement("script");e.setAttribute("src",this.src),document.body.appendChild(e)}}])&&n(t.prototype,o),c&&n(t,c),e}();t.Contacts=c},function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var c=function(){function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.block=t;var n=this.block.getAttribute("class").split(" ")[0];this.inner=this.block.querySelector(".".concat(n,"__inner")),this.img=this.block.querySelector("img");var c=this.block.querySelector(".".concat(n,"__close")),r=this.block.querySelector(".".concat(n,"__backdrop"));c.addEventListener("click",function(){o.hide()}),r.addEventListener("click",function(){o.hide()})}var t,o,c;return t=e,(o=[{key:"show",value:function(){this.block.classList.add("isVisible"),document.body.style.overflow="hidden"}},{key:"hide",value:function(){this.block.classList.remove("isVisible"),this.img.setAttribute("src",""),document.body.style.overflow="auto"}},{key:"openImageModal",value:function(e){this.img.setAttribute("src","".concat(e,".jpg"))}}])&&n(t.prototype,o),c&&n(t,c),e}();t.Modal=c},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Certificates=void 0;t.Certificates=function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.block=t;var n=this.block.getAttribute("class").split(" ")[0],c=this.block.querySelectorAll(".".concat(n,"__btn"));Array.prototype.forEach.call(c,function(e){e.addEventListener("click",function(){var t,c;t=e.querySelector(".".concat(n,"__img")).getAttribute("src"),c=t.slice(0,t.length-10),console.log(c),o.openImageModal(c),o.show()})})}},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var n,c=(n=o(3))&&n.__esModule?n:{default:n};t.Hero=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.block=t,new c.default(".glide",{type:"carousel",gap:0}).mount()}},,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var n,c=(n=o(6))&&n.__esModule?n:{default:n};t.Header=function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.block=t;var n=this.block.getAttribute("class").split(" ")[0],r=this.block.querySelector(".".concat(n,"__burger")),i=this.block.querySelector(".".concat(n,"__wrap")),a=this.block.querySelectorAll(".nav__link"),s=0;this.block.classList.contains("".concat(n,"--main"))&&new c.default('.nav a[href*="#"]');var l=function(e){var t=document.querySelector(e),o=window.innerHeight,n=t.getBoundingClientRect(),c=window.pageYOffset||document.documentElement.scrollTop,r=t.getAttribute("id");c<o/3?(Array.prototype.forEach.call(a,function(e){e.classList.remove("isCurrent")}),a[0].classList.add("isCurrent")):c>n.top+window.pageYOffset-o/3*2&&(Array.prototype.forEach.call(a,function(e){e.classList.remove("isCurrent")}),document.querySelector("a[href='#".concat(r,"']")).classList.add("isCurrent"))},u=function(){r.classList.contains("isActive")?(r.classList.remove("isActive"),i.classList.remove("isOpened"),document.body.classList.remove("isFixed"),window.scrollTo(0,s)):(s=window.pageYOffset||document.documentElement.scrollTop,r.classList.add("isActive"),i.classList.add("isOpened"),document.body.classList.add("isFixed"))};window.addEventListener("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>100?o.block.classList.add("isScrolled"):o.block.classList.remove("isScrolled"),o.block.classList.contains("".concat(n,"--main"))&&(l(".about"),l(".production"),l(".certificates"),l(".catalogs"),l(".leftovers"),l(".objects"),l(".contacts"))}),r.addEventListener("click",function(){u()}),Array.prototype.forEach.call(a,function(e){e.addEventListener("click",function(t){o.block.classList.contains("".concat(n,"--main"))&&t.preventDefault(),u();for(var c=0;c<a.length;c+=1)a[c].classList.remove("isCurrent");e.classList.add("isCurrent")})})}},function(e,t,o){"use strict";var n=o(7),c=o(4),r=o(2),i=o(1),a=o(0),s=function(){var e=null,t=new i.Modal(document.querySelector(".modal"));new n.Header(document.querySelector(".header")),document.querySelector(".hero")&&new c.Hero(document.querySelector(".hero")),document.querySelector(".certificates")&&new r.Certificates(document.querySelector(".certificates"),t),document.querySelector(".contacts")&&(e=new a.Contacts(document.querySelector(".contacts")),window.googleMapsScriptLoaded=function(){e.googleMapsScriptLoaded()},e.appendMapScript())};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?s():document.addEventListener("DOMContentLoaded",s)}]);
//# sourceMappingURL=app.js.map