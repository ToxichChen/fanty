(globalThis["webpackChunkitrex"] = globalThis["webpackChunkitrex"] || []).push([["resources_js_views_SettingsGamePage_SettingsGameView_js"],{

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "./resources/js/components/Loader/MiniLoader.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Loader/MiniLoader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.styled */ "./resources/js/components/Loader/Loader.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var MiniLoader = function MiniLoader() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Loader_styled__WEBPACK_IMPORTED_MODULE_0__.StylBoxCenterSpinerMini, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Loader_styled__WEBPACK_IMPORTED_MODULE_0__.StylSpiner, {
      viewBox: "0 0 100 100",
      height: "150px",
      width: "150px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
        id: "clip",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          clipPath: "url(#clip2)",
          d: "M 77.831872,66.390587 77.287049,66.429503 77.209217,66.779746 77.325965,67.168906 76.119571,68.297468 75.107757,67.324569 V 67.168906 L 74.40727,67.324569 73.823531,68.025056 73.16196,68.842291 73.317624,69.737357 73.045212,70.788088 71.060499,71.683154 70.360012,70.827004 H 69.114703 V 70.593508 L 68.764459,70.632424 68.842291,71.021583 68.063972,71.683154 H 67.791561 L 67.519149,72.578221 V 73.16196 L 67.052158,73.35654 66.157091,72.850632 65.456605,73.006296 64.600454,72.772801 V 72.461473 L 63.432976,72.733885 63.160564,73.784615 62.070918,74.874261 59.580298,75.535832 59.346803,75.691496 58.801979,75.535832 57.478838,76.002823 57.011846,76.664394 55.9222,77.092469 54.949302,77.792956 53.470496,78.104284 52.225186,78.065368 50.473969,78.1432 49.267575,77.559461 46.738039,76.975722 43.352353,76.158487 40.667153,75.496916 40.12233,75.613664 38.838104,74.874261 37.981954,75.185589 37.125803,75.496916 37.164719,76.002823 37.865206,76.664394 V 77.014638 L 38.87702,77.676208 37.125803,77.209217 36.347484,76.664394 33.545537,75.107757 33.156378,74.679681 30.821421,72.889548 30.782505,73.16196 30.120935,72.383641 27.591399,70.087601 26.774164,68.492048 24.984031,66.857578 24.906199,66.079259 23.349562,63.783219 22.88257,61.409347 22.143168,60.125121 V 59.307887 L 21.131353,57.478838 20.508698,53.470496 20.236287,53.198085 20.58653,49.812398 V 47.555274 L 21.170269,43.780428 21.481597,43.352353 21.792924,41.095229 22.726907,39.577507 22.687991,38.87702 23.816553,37.709542 24.633788,36.425316 25.178611,34.401688 26.073677,32.300227 27.163323,30.74359 28.447549,30.276598 V 29.887439 L 29.342616,29.692859 29.731775,29.3037 29.848523,27.630315 30.626842,26.929828 32.84505,24.984031 35.14109,23.427394 37.865206,22.454495 39.499675,21.909672 40.900649,21.63726 41.717883,21.053521 42.107043,21.014605 43.85826,20.275203 47.243946,20.080623 49.345407,20.391951 49.69565,20.236287 50.512885,21.170269 H 51.874943 L 52.925673,21.325933 53.470496,20.703278 54.560142,20.002791 55.649789,19.652548 55.961116,20.002791 58.840895,20.897858 60.436449,21.209185 61.214767,20.936774 63.004901,22.259915 64.172379,22.804739 66.507335,23.583057 67.947224,25.139695 70.087601,26.423921 71.644238,28.214054 75.068841,32.027815 76.158487,34.28494 77.248133,36.347484 78.610191,39.460759 79.310678,42.184875 79.271762,43.585848 79.466342,45.29815 79.38851,48.683836 79.855501,51.096624 79.660921,51.641447 78.99935,57.867997 79.777669,59.813794 79.622005,61.059104 78.493443,63.666471 78.532359,64.055631 79.933333,65.028529 H 80.594904 L 81.567802,65.378773 H 83.396851 L 81.87913,64.600454 81.645634,63.744303 82.112625,63.082732 82.385037,63.238396 82.92986,62.032002 83.863842,60.942356 83.747094,60.125121 84.758909,60.086205 85.264816,60.164037 85.809639,60.553197 86.66579,61.020188 87.016033,60.786692 87.054949,60.280785 86.354462,59.619214 85.770723,59.969458 85.459396,60.202953 85.070236,59.85271 84.836741,60.047289 83.669263,59.502466 83.902758,59.074391 84.291918,58.763064 84.214086,56.622687 83.163355,55.338461 81.567802,54.637974 81.87913,54.209899 H 82.346121 L 82.813112,51.252288 83.046608,50.979876 82.92986,49.617819 83.630347,48.8395 83.863842,47.59419 84.291918,47.321778 84.603245,47.633106 85.109152,47.321778 84.992404,46.854787 84.719993,46.54346 H 84.447581 L 84.253002,46.387796 84.097338,47.282862 83.824926,47.516358 V 46.582376 L 83.007692,46.193216 82.073709,44.364167 81.801298,44.286335 81.178643,40.667153 80.166828,37.748458 79.155014,35.53025 78.104284,33.312041 76.781142,31.40516 75.65258,29.731775 74.601849,28.25297 72.578221,26.151509 71.566406,24.945115 71.332911,25.139695 69.23145,23.116066 68.920123,23.310646 67.207822,22.337747 65.651184,20.820026 64.016715,20.197371 63.549724,19.73038 62.693573,19.691464 62.109834,19.224472 61.175852,18.796397 59.113307,18.368322 57.984745,17.590003 56.700519,17.23976 56.038948,17.395423 53.62616,16.928432 51.213372,16.500357 49.968062,17.200844 47.282862,17.278676 46.193216,17.706751 43.118857,17.901331 39.849919,19.029893 H 39.344011 L 39.149432,19.34122 36.697728,20.353035 35.180006,21.403765 34.557351,21.481597 34.129276,22.143168 31.521908,23.621973 H 31.171665 L 30.587926,24.283544 29.692859,24.945115 28.992372,24.906199 27.708147,25.412106 27.591399,25.76235 25.956929,27.163323 24.906199,27.474651 23.388478,27.046576 23.310646,28.369717 23.07715,28.992372 23.310646,29.459364 23.777637,29.653943 23.816553,31.210581 22.687991,32.922882 22.143168,33.428789 21.987504,34.246024 H 21.325933 L 20.858942,35.102174 20.703278,35.257838 20.469782,36.347484 20.041707,36.853391 20.508698,37.670626 20.236287,38.332197 19.73038,38.293281 19.613632,38.68244 19.963875,38.87702 18.718565,39.538591 17.823499,40.783901 18.251574,42.068127 18.640733,43.352353 18.562902,44.169587 18.368322,45.142486 18.523986,45.687309 17.706751,48.177929 17.862415,48.683836 17.512171,49.462155 17.590003,53.470496 17.940247,55.883284 18.523986,57.245342 18.757481,57.089678 19.263388,58.763064 19.068809,58.801979 19.302304,59.46355 18.913145,59.268971 18.757481,60.475365 19.146641,62.109834 19.963875,62.421161 20.353035,63.549724 22.298831,66.312755 23.388478,68.219636 24.555956,70.321097 26.540668,71.877734 27.085492,72.150146 27.280071,73.084128 27.708147,73.317624 28.719961,74.21269 30.510094,75.65258 32.105647,76.586562 35.024342,78.610191 35.257838,78.376695 38.526777,79.816585 39.966666,80.63382 40.939565,80.555988 41.756799,81.100811 42.457286,80.906231 44.013924,81.87913 45.414897,81.762382 46.504544,82.190457 47.983349,82.423953 49.072995,82.385037 49.189743,82.5407 51.018792,81.801298 52.419766,81.918045 54.988218,81.061895 56.155696,81.295391 56.817267,80.828399 58.685232,80.166828 63.666471,78.571275 65.767932,78.454527 67.98614,76.353067 69.192534,75.185589 69.153618,75.65258 69.464946,75.963907 70.126517,76.119571 70.515676,75.691496 70.47676,75.068841 70.321097,74.679681 69.62061,74.640765 70.243265,74.173774 71.410743,73.239792 71.488575,72.539305 71.177247,72.383641 71.138331,71.605322 73.239792,70.710256 73.862447,71.410743 74.835345,71.527491 75.691496,71.332911 76.041739,71.138331 76.50873,71.449659 76.781142,71.255079 76.236319,70.67134 76.391983,69.581694 76.469814,68.803375 76.119571,68.219636 77.403797,67.207822 H 77.831872 L 78.065368,66.974326 78.104284,66.74083 Z"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        clipPath: "url(#clip)",
        d: "M 67.757283,59.202113 C 62.675098,69.009189 50.604962,72.839469 40.797887,67.757283 30.990811,62.675098 27.160531,50.604962 32.242717,40.797887 37.324902,30.990811 49.395038,27.160531 59.202113,32.242717 69.009189,37.324902 72.839469,49.395038 67.757283,59.202113"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniLoader);

/***/ }),

/***/ "./resources/js/components/ModalWindow/ModalSettings.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/ModalWindow/ModalSettings.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../SettingsGame/SettingsGame.styled */ "./resources/js/components/SettingsGame/SettingsGame.styled.js");
/* harmony import */ var _SettingsGame_VipStatusSettings_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled */ "./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled.js");
/* harmony import */ var _ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalSettings.styled */ "./resources/js/components/ModalWindow/ModalSettings.styled.js");
/* harmony import */ var _assets_icons_icon_man_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/icons/icon-man.svg */ "./resources/js/assets/icons/icon-man.svg");
/* harmony import */ var _assets_icons_icon_girl_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/icons/icon-girl.svg */ "./resources/js/assets/icons/icon-girl.svg");
/* harmony import */ var _SettingsGame_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SettingsGame/CheckBox/CheckBox */ "./resources/js/components/SettingsGame/CheckBox/CheckBox.js");
/* harmony import */ var _SettingsGame_RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../SettingsGame/RadioBox/RadioBox */ "./resources/js/components/SettingsGame/RadioBox/RadioBox.js");
/* harmony import */ var _hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useActionsWithRedux */ "./resources/js/hooks/useActionsWithRedux.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var ModalSettings = function ModalSettings(_ref) {
  var visible = _ref.visible,
      switchVisible = _ref.switchVisible,
      item = _ref.item;

  var _useActionsWithRedux = (0,_hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      profile = _useActionsWithRedux.profile;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylModalSettings, {
    isVisible: visible,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylBtnCardSettings, {
      type: "button",
      onClick: switchVisible,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
        className: "fas fa-times"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylTitleModalSettings, {
      children: item.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylVipStatusModal, {
      isVip: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_VipStatusSettings_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__.StylVipText, {
        isLowWidth: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
          children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B "
        }), " \u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_VipStatusSettings_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__.StylBtnVip, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "fas fa-gem"
        }), " \u041F\u043E\u043B\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043E\u0442 159 \u0440\u0443\u0431"]
      })]
    }), item.has_sex_difference ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperAllSettings, {
      isColumn: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperAllSettings, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperCenterContent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylImgModal, {
            src: _assets_icons_icon_man_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: "man"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylTextModal, {
            children: "\u041C\u0443\u0436\u0447\u0438\u043D\u0430"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperCenterContent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylImgModal, {
            src: _assets_icons_icon_girl_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
            alt: "girl"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylTextModal, {
            children: "\u0416\u0435\u043D\u0449\u0438\u043D\u0430"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperAllSettings, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylOptionsAddedWrapper, {
          children: item.is_finish ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: item,
            optionsBasic: item.subsettings,
            subsettings: item.is_premium === 1 && profile.response.is_premium === 0
          }) : item.subsettings.map(function (elem, index) {
            if (elem.sex === 1) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
                elem: elem,
                premium: item.is_premium === 1 && profile.response.is_premium === 0
              }, index);
            }

            return false;
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylOptionsAddedWrapper, {
          children: item.is_finish ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: item,
            optionsBasic: item.subsettings,
            subsettings: item.is_premium === 1 && profile.response.is_premium === 0
          }) : item.subsettings.map(function (elem, index) {
            if (elem.sex === 2) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
                elem: elem,
                premium: item.is_premium === 1 && profile.response.is_premium === 0
              }, index);
            }

            return false;
          })
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylWrapperAllSettings, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_0__.StylOptionsAddedWrapper, {
        isFullWidth: true,
        children: item.is_finish ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: item,
          optionsBasic: item.subsettings,
          subsettings: item.is_premium === 1 && profile.response.is_premium === 0
        }) : item.subsettings.map(function (elem, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SettingsGame_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
            elem: elem,
            premium: item.is_premium === 1 && profile.response.is_premium === 0
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalSettings_styled__WEBPACK_IMPORTED_MODULE_2__.StylBtnSaveAndClose, {
      onClick: switchVisible,
      children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalSettings);

/***/ }),

/***/ "./resources/js/components/ModalWindow/ModalSettings.styled.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ModalWindow/ModalSettings.styled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylModalSettings": () => (/* binding */ StylModalSettings),
/* harmony export */   "StylTitleModalSettings": () => (/* binding */ StylTitleModalSettings),
/* harmony export */   "StylBtnSaveAndClose": () => (/* binding */ StylBtnSaveAndClose),
/* harmony export */   "StylImgModal": () => (/* binding */ StylImgModal),
/* harmony export */   "StylTextModal": () => (/* binding */ StylTextModal)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylModalSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  display: ", ";\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  max-width: 850px;\n  width: 100%;\n  background: rgba(42, 46, 66, 0.97);\n  border-radius: 31px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 25px;\n  z-index: 100;\n"])), function (props) {
  return props.isVisible ? 'flex !important' : 'none !important';
});
var StylTitleModalSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n"])), function (props) {
  return props.theme.typography.textLarge.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylBtnSaveAndClose = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: block;\n  padding: 5px 10px;\n  align-self: flex-end;\n  border: 3px solid #555abf;\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    from(#32325d),\n    color-stop(90.87%, #555abf)\n  );\n  background: linear-gradient(180deg, #32325d 0, #555abf 90.87%);\n  box-shadow: 0 2px 10px #257cff;\n  border-radius: 69px;\n  height: 50px;\n  color: #fff;\n  text-decoration: none;\n"])));
var StylImgModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-right: 10px;\n"])));
var StylTextModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});


/***/ }),

/***/ "./resources/js/components/SettingsGame/CheckBox/CheckBox.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/SettingsGame/CheckBox/CheckBox.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckBox.styled */ "./resources/js/components/SettingsGame/CheckBox/CheckBox.styled.js");
/* harmony import */ var _hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActionsWithRedux */ "./resources/js/hooks/useActionsWithRedux.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Checkbox = function Checkbox(_ref) {
  var elem = _ref.elem,
      premium = _ref.premium;

  var _useActionsWithRedux = (0,_hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      settingsGameTask = _useActionsWithRedux.settingsGameTask;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCheck = _useState2[0],
      setCheck = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHiddenInfo = _useState4[0],
      setHiddenInfo = _useState4[1];

  var handleCheckboxChange = function handleCheckboxChange(event) {
    setCheck(event.target.checked);
    settingsGameTask(elem);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylLabel, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.CheckboxContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.HiddenCheckbox, {
        checked: isCheck,
        onChange: handleCheckboxChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.StyledCheckbox, {
        checked: premium ? "a" : isCheck,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
            points: "20 6 9 17 4 12"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylTextLabel, {
      children: elem.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylBoxAddInfoTask, {
      type: "button",
      onClick: function onClick() {
        return setHiddenInfo(!isHiddenInfo);
      },
      onFocus: function onFocus() {
        return setHiddenInfo(true);
      },
      onBlur: function onBlur() {
        return setHiddenInfo(false);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
        className: "fas fa-question"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CheckBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylBoxInfo, {
        isHidden: isHiddenInfo,
        children: elem.description
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./resources/js/components/SettingsGame/CheckBox/CheckBox.styled.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/CheckBox/CheckBox.styled.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxAddInfoTask": () => (/* binding */ StylBoxAddInfoTask),
/* harmony export */   "StylBoxInfo": () => (/* binding */ StylBoxInfo),
/* harmony export */   "CheckboxContainer": () => (/* binding */ CheckboxContainer),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "HiddenCheckbox": () => (/* binding */ HiddenCheckbox),
/* harmony export */   "StyledCheckbox": () => (/* binding */ StyledCheckbox),
/* harmony export */   "StylLabel": () => (/* binding */ StylLabel),
/* harmony export */   "StylTextLabel": () => (/* binding */ StylTextLabel)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_icons_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../assets/icons/icon-close.svg */ "./resources/js/assets/icons/icon-close.svg");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CheckboxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: middle;\n"])));
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    fill: none;\n    stroke: white;\n    stroke-width: 2px;\n"])));
var HiddenCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.attrs({
  type: "checkbox"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 0;\n    clip: rect(0 0 0 0);\n    clippath: inset(50%);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n"])));
var StyledCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: ", ";\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    background: url(", "),\n        ", ";\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center center;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    transition: all 150ms;\n\n    ", ":focus + & {\n        box-shadow: 0 0 0 3px #00a6cb;\n    }\n\n    ", " {\n        visibility: ", ";\n    }\n"])), function (props) {
  return props.checked === "a" && "none";
}, function (props) {
  return props.checked === "a" && _assets_icons_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
}, function (props) {
  return props.checked === true ? "linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%)" : props.checked === "a" ? "red" : "transparent";
}, function (props) {
  return props.theme.palette.main;
}, HiddenCheckbox, Icon, function (props) {
  return props.checked === true ? "visible" : "hidden";
});
var StylLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 20px;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n"])));
var StylTextLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    width: 100%;\n    margin-left: 8px;\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylBoxInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: calc(100% + 10px);\n    right: calc(-100% - 35px);\n    max-width: 200px;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    background-color: rgba(58, 58, 58, 0.8);\n    text-align: center;\n    border-radius: 8px;\n    padding: 10px;\n    letter-spacing: 1.2px;\n    visibility: ", ";\n    transition: all 0.2s ease;\n"])), function (props) {
  return props.theme.typography.textSmall.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.isHidden ? "visible" : "hidden";
});
var StylBoxAddInfoTask = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 20px;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    background-color: ", ";\n    border: none;\n    outline: none;\n    border-radius: 50%;\n\n    & > i {\n        font-size: 10px;\n        color: ", ";\n    }\n\n    @media (min-width: 1024px) {\n        &:hover {\n            ", " {\n                visibility: visible;\n            }\n        }\n    }\n"])), function (props) {
  return props.theme.palette.backgroundColor.second;
}, function (props) {
  return props.theme.palette.icon.light;
}, StylBoxInfo);


/***/ }),

/***/ "./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../SettingsGame.styled */ "./resources/js/components/SettingsGame/SettingsGame.styled.js");
/* harmony import */ var _SettingGameOptions_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingGameOptions.styled */ "./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.styled.js");
/* harmony import */ var _ModalWindow_ModalSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../ModalWindow/ModalSettings */ "./resources/js/components/ModalWindow/ModalSettings.js");
/* harmony import */ var _RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../RadioBox/RadioBox */ "./resources/js/components/SettingsGame/RadioBox/RadioBox.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./resources/js/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SettingGameOptions = function SettingGameOptions(_ref) {
  var item = _ref.item;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init({
      duration: 1000
    });
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowModal = _useState4[0],
      setShowModal = _useState4[1];

  var showAnotherOption = function showAnotherOption() {
    setShowOption(!isShowOption);
  };

  var handleModal = function handleModal() {
    setShowModal(!isShowModal);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxSettingsGame, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingGameOptions_styled__WEBPACK_IMPORTED_MODULE_4__.StylBtnOpenSetting, {
      onClick: showAnotherOption,
      isShow: isShowOption,
      children: [item.title, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
        className: "fas fa-chevron-right"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingGameOptions_styled__WEBPACK_IMPORTED_MODULE_4__.StylWrapperSettings, {
      isShow: isShowOption,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RadioBox_RadioBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        optionsBasic: _constants__WEBPACK_IMPORTED_MODULE_7__.optionsBasic,
        item: item
      }), item.is_premium === 1 && "Доступно в полной версии игры", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.BtnMoreSettings, {
        type: "button",
        onClick: handleModal,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "fas fa-cog"
        }), item.is_premium === 0 ? "Настройки" : "Смотреть настройки"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalWindow_ModalSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
      visible: isShowModal,
      switchVisible: handleModal,
      item: item
    })]
  }, item.id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingGameOptions);

/***/ }),

/***/ "./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.styled.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.styled.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBtnOpenSetting": () => (/* binding */ StylBtnOpenSetting),
/* harmony export */   "StylWrapperSettings": () => (/* binding */ StylWrapperSettings)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylBtnOpenSetting = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    margin-bottom: 18px;\n\n    & > i {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        margin-left: 10px;\n        font-size: 12px;\n        background: linear-gradient(180deg, #555abf 0, #32325d 90.87%);\n        transition: all 0.2s ease;\n        transform: rotate(", ");\n    }\n\n    ", "\n"])), function (props) {
  return props.theme.typography.textMedium.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.isShow ? "90deg" : "0";
}, function (props) {
  return props.isOpen && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            & > i {\n                transform: rotate(90deg);\n            }\n        "])));
});
var StylWrapperSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: ", ";\n    flex-direction: column;\n    align-items: flex-start;\n\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    @media (min-width: 1024px) {\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n"])), function (props) {
  return props.isShow ? "flex" : "none";
}, function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});


/***/ }),

/***/ "./resources/js/components/SettingsGame/RadioBox/RadioBox.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/SettingsGame/RadioBox/RadioBox.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RadioBox_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioBox.styled */ "./resources/js/components/SettingsGame/RadioBox/RadioBox.styled.js");
/* harmony import */ var _CheckBox_CheckBox_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../CheckBox/CheckBox.styled */ "./resources/js/components/SettingsGame/CheckBox/CheckBox.styled.js");
/* harmony import */ var _hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useActionsWithRedux */ "./resources/js/hooks/useActionsWithRedux.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var RadioBox = function RadioBox(_ref) {
  var item = _ref.item,
      optionsBasic = _ref.optionsBasic,
      subsettings = _ref.subsettings;

  var _useActionsWithRedux = (0,_hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      settingsGameTask = _useActionsWithRedux.settingsGameTask;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsBasic[0].title),
      _useState2 = _slicedToArray(_useState, 2),
      isSelect = _useState2[0],
      setSelect = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHiddenInfo = _useState4[0],
      setHiddenInfo = _useState4[1];

  var handleSelectChange = function handleSelectChange(e, elem) {
    var value = e.currentTarget.value;
    setSelect(value);
    subsettings && settingsGameTask(elem);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RadioBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylBoxWrapperOptions, {
      isVip: subsettings ? "red" : item.is_premium === 0 ? true : false,
      children: optionsBasic.map(function (elem) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_RadioBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylWrapperRadioBtn, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RadioBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylRadioSetting, {
            id: elem.title,
            type: "radio",
            name: "radio",
            checked: isSelect === elem.title,
            value: elem.title,
            onChange: handleSelectChange,
            isVip: subsettings
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RadioBox_styled__WEBPACK_IMPORTED_MODULE_1__.StylLabelRadio, {
            htmlFor: elem.title,
            isVip: subsettings
          }), elem.title, subsettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_CheckBox_CheckBox_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxAddInfoTask, {
            type: "button",
            onClick: function onClick() {
              return setHiddenInfo(!isHiddenInfo);
            },
            onFocus: function onFocus() {
              return setHiddenInfo(true);
            },
            onBlur: function onBlur() {
              return setHiddenInfo(false);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
              className: "fas fa-question"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CheckBox_CheckBox_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxInfo, {
              isHidden: isHiddenInfo,
              children: elem.description
            })]
          })]
        }, elem.title);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioBox);

/***/ }),

/***/ "./resources/js/components/SettingsGame/RadioBox/RadioBox.styled.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/RadioBox/RadioBox.styled.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxWrapperOptions": () => (/* binding */ StylBoxWrapperOptions),
/* harmony export */   "StylRadioSetting": () => (/* binding */ StylRadioSetting),
/* harmony export */   "StylWrapperRadioBtn": () => (/* binding */ StylWrapperRadioBtn),
/* harmony export */   "StylLabelRadio": () => (/* binding */ StylLabelRadio)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylBoxWrapperOptions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex-direction: column;\n\n    display: ", ";\n\n    ", "\n"])), function (props) {
  return props.isVip ? "flex" : "none";
}, function (props) {
  return props.isVip && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            display: flex;\n        "])));
});
var StylLabelRadio = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 4px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #151924;\n    transition: all 0.2s ease;\n\n    &::after {\n        display: block;\n        color: white;\n        width: 12px;\n        height: 12px;\n        margin: 4px;\n    }\n\n    ", "\n"])), function (props) {
  return props.isVip && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            pointer-events: none;\n            width: 20px;\n            height: 20px;\n            border: 4px solid #191c2b;\n            border-radius: 50%;\n            background: red !important;\n        "])));
});
var StylWrapperRadioBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15px;\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylRadioSetting = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: relative;\n    opacity: 0;\n    z-index: 1;\n    cursor: pointer;\n    width: 25px;\n    height: 25px;\n    margin-right: 10px;\n\n    ", "\n\n    &:hover ~ ", " {\n        background: #ccc;\n    }\n\n    &:checked + ", " {\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background: linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%);\n        }\n    }\n\n    &:checked + ", " {\n        width: 20px;\n        height: 20px;\n        border: 4px solid #191c2b;\n        border-radius: 50%;\n        background: linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%);\n    }\n"])), function (props) {
  return props.isVip && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            pointer-events: none;\n\n            &:checked + ", " {\n                background: red;\n            }\n\n            &:checked + ", " {\n                &::after {\n                    background: red;\n                }\n            }\n        "])), StylLabelRadio, StylWrapperRadioBtn);
}, StylLabelRadio, StylWrapperRadioBtn, StylLabelRadio);


/***/ }),

/***/ "./resources/js/components/SettingsGame/SettingsGame.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/SettingsGame/SettingsGame.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GameOptions_SettingGameOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameOptions/SettingGameOptions */ "./resources/js/components/SettingsGame/GameOptions/SettingGameOptions.js");
/* harmony import */ var _SettingsGameFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsGameFooter */ "./resources/js/components/SettingsGame/SettingsGameFooter.js");
/* harmony import */ var _TaskGame_TaskGamePage_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../TaskGame/TaskGamePage.styled */ "./resources/js/components/TaskGame/TaskGamePage.styled.js");
/* harmony import */ var _SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsGame.styled */ "./resources/js/components/SettingsGame/SettingsGame.styled.js");
/* harmony import */ var _hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useActionsWithRedux */ "./resources/js/hooks/useActionsWithRedux.js");
/* harmony import */ var _Loader_MiniLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Loader/MiniLoader */ "./resources/js/components/Loader/MiniLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SettingsGame = function SettingsGame() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      isChangeMan = _useState2[0],
      setChangeMan = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      isChangeFemale = _useState4[0],
      setChangeFemala = _useState4[1];

  var _useActionsWithRedux = (0,_hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      getAllSettings = _useActionsWithRedux.getAllSettings,
      loadingSettings = _useActionsWithRedux.loadingSettings,
      settings = _useActionsWithRedux.settings;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    settings(id);
  }, [id, settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_TaskGame_TaskGamePage_styled__WEBPACK_IMPORTED_MODULE_3__.SectionTaskGame, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylBoxFeaturesGame, {
      "data-aos": "fade-right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylWrapperAllSettings, {
        children: loadingSettings ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Loader_MiniLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : getAllSettings.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_GameOptions_SettingGameOptions__WEBPACK_IMPORTED_MODULE_1__["default"], {
            item: item
          }, item.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylWrapperAllSettings, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylBoxSettingsGame, {
          "data-aos": "fade-right",
          "data-aos-duration": "2000",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylTitleUserSettings, {
            children: "\u041C\u0443\u0436\u0447\u0438\u043Da"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylWrapperInput, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
              className: "fas fa-male"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylInputUserSettings, {
              type: "text",
              onChange: function onChange(e) {
                return setChangeMan(e.target.value);
              },
              value: isChangeMan
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylBoxSettingsGame, {
          "data-aos": "fade-right",
          "data-aos-duration": "2000",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylTitleUserSettings, {
            children: "\u0416\u0435\u043D\u0449\u0438\u043Da"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylWrapperInput, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
              className: "fas fa-female"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_4__.StylInputUserSettings, {
              type: "text",
              onChange: function onChange(e) {
                return setChangeFemala(e.target.value);
              },
              value: isChangeFemale
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SettingsGameFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
      man: isChangeMan,
      female: isChangeFemale
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsGame);

/***/ }),

/***/ "./resources/js/components/SettingsGame/SettingsGame.styled.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/SettingsGame/SettingsGame.styled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylWrapperCenterContent": () => (/* binding */ StylWrapperCenterContent),
/* harmony export */   "StylBoxFlexStartColumn": () => (/* binding */ StylBoxFlexStartColumn),
/* harmony export */   "StylOptionsAddedWrapper": () => (/* binding */ StylOptionsAddedWrapper),
/* harmony export */   "StylVipStatusModal": () => (/* binding */ StylVipStatusModal),
/* harmony export */   "StylWrapperInput": () => (/* binding */ StylWrapperInput),
/* harmony export */   "StylInputUserSettings": () => (/* binding */ StylInputUserSettings),
/* harmony export */   "StylTitleUserSettings": () => (/* binding */ StylTitleUserSettings),
/* harmony export */   "StylBoxCenterCard": () => (/* binding */ StylBoxCenterCard),
/* harmony export */   "StylBtnCardSettings": () => (/* binding */ StylBtnCardSettings),
/* harmony export */   "StylCardSettingsText": () => (/* binding */ StylCardSettingsText),
/* harmony export */   "StylCardSettingsTitle": () => (/* binding */ StylCardSettingsTitle),
/* harmony export */   "StylWrapperCard": () => (/* binding */ StylWrapperCard),
/* harmony export */   "StylBoxFeaturesGame": () => (/* binding */ StylBoxFeaturesGame),
/* harmony export */   "StylBtnStartGame": () => (/* binding */ StylBtnStartGame),
/* harmony export */   "StylBoxSettingsGame": () => (/* binding */ StylBoxSettingsGame),
/* harmony export */   "BtnMoreSettings": () => (/* binding */ BtnMoreSettings),
/* harmony export */   "StylWrapperAllSettings": () => (/* binding */ StylWrapperAllSettings),
/* harmony export */   "StylBtnFooterSettings": () => (/* binding */ StylBtnFooterSettings),
/* harmony export */   "StylBoxFooterSettings": () => (/* binding */ StylBoxFooterSettings),
/* harmony export */   "StylSectionDiscount": () => (/* binding */ StylSectionDiscount),
/* harmony export */   "StylBoxWrapperCards": () => (/* binding */ StylBoxWrapperCards),
/* harmony export */   "StylImgCardSettings": () => (/* binding */ StylImgCardSettings),
/* harmony export */   "StylBtnStartGameFooter": () => (/* binding */ StylBtnStartGameFooter),
/* harmony export */   "StylBtnFooterSettingsComplexity": () => (/* binding */ StylBtnFooterSettingsComplexity)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StylBoxFeaturesGame = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    max-width: 1140px;\n    width: 100%;\n    border-radius: 40px;\n    padding: 25px;\n    background: rgba(25, 28, 43, 0.95);\n    margin-bottom: 20px;\n"])));
var StylBtnStartGame = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\n    padding: 15px 60px;\n    border-radius: 100px;\n    align-self: center;\n    margin-bottom: 30px;\n    border: 3px solid #982926;\n    background: linear-gradient(180deg, #bd2726 0, #982926 90.87%);\n    transition: all 0.2s ease;\n\n    @media (min-width: 768px) {\n        width: auto;\n    }\n\n    @media (min-width: 1024px) {\n        &:hover {\n            box-shadow: 0 0 10px 2px #982926;\n        }\n\n        &:active {\n            transform: scale(1.1);\n        }\n    }\n"])), function (props) {
  return props.theme.typography.textMedium.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylBoxSettingsGame = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 20px;\n    max-width: 100;\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 20px;\n\n    @media (min-width: 1024px) {\n        padding: 30px 20px 20px 40px;\n        width: 49%;\n        margin-bottom: 20px;\n    }\n"])));
var BtnMoreSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: relative;\n    cursor: pointer;\n    max-width: 190px;\n    width: 100%;\n    padding: 0 25px;\n\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    border: 3px solid #555abf;\n    background: -webkit-gradient(\n        linear,\n        left top,\n        left bottom,\n        from(#32325d),\n        color-stop(90.87%, #555abf)\n    );\n    background: -o-linear-gradient(top, #32325d 0, #555abf 90.87%);\n    background: linear-gradient(180deg, #32325d 0, #555abf 90.87%);\n    -webkit-box-shadow: 0 2px 10px #257cff;\n    box-shadow: 0 2px 10px #257cff;\n    border-radius: 69px;\n    height: 50px;\n    color: #fff;\n    text-decoration: none;\n\n    & > i {\n        position: absolute;\n        left: 25px;\n        top: 16px;\n        transition: all 0.2s ease;\n    }\n\n    @media (min-width: 768px) {\n        margin-bottom: 30px;\n    }\n\n    @media (min-width: 1024px) {\n        &:hover {\n            & > i {\n                transform: rotate(45deg);\n            }\n        }\n    }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylWrapperAllSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: ", ";\n    flex-direction: column;\n    margin-bottom: 20px;\n    width: 100%;\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n        flex-wrap: wrap;\n    }\n\n    @media (min-width: 1024px) {\n        flex-direction: ", ";\n        justify-content: space-between;\n        align-items: flex-start;\n    }\n"])), function (props) {
  return props.isColumn ? "column" : "row";
}, function (props) {
  return props.isColumn ? "column" : "row";
});
var StylBtnFooterSettings = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\n    background: linear-gradient(180deg, #f77 0, #f32d2d 90.87%);\n    box-shadow: 0 2px 10px #f53131;\n    padding: 15px 20px;\n    border-radius: 100px;\n    border: 3px solid #f32d2d;\n    margin-bottom: 20px;\n    transition: all 0.2s ease;\n\n    & > i {\n        color: ", ";\n        margin-right: 10px;\n        font-size: 20px;\n        transition: all 0.2s ease;\n    }\n\n    @media (min-width: 768px) {\n        margin-bottom: 0;\n        width: auto;\n        justify-content: flex-start;\n\n        &:not(:last-child) {\n            margin-right: 15px;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        &:hover {\n            background: linear-gradient(0deg, #f77 0, #f32d2d 90.87%);\n\n            & > i {\n                transform: rotate(45deg);\n            }\n        }\n\n        &:active {\n            transform: scale(1.1);\n        }\n    }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.main;
});
var StylBtnFooterSettingsComplexity = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(StylBtnFooterSettings)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border: 3px solid #005734;\n    background: #00a44f;\n    background: -webkit-gradient(\n        linear,\n        left top,\n        left bottom,\n        from(#00a44f),\n        color-stop(90.87%, #005734)\n    );\n    background: -o-linear-gradient(top, #00a44f 0, #005734 90.87%);\n    background: linear-gradient(180deg, #00a44f 0, #005734 90.87%);\n    -webkit-box-shadow: 0 2px 10px #005734;\n    box-shadow: 0 2px 10px #005734;\n\n    @media (min-width: 1024px) {\n        &:hover {\n            background: linear-gradient(0deg, #005734 0, #00a44f 90.87%);\n\n            & > i {\n                transform: rotate(45deg);\n            }\n        }\n    }\n"])));
var StylBoxFooterSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1140px;\n    width: 100%;\n    border-radius: 40px;\n    padding: 25px;\n    background: rgba(25, 28, 43, 0.95);\n"])));
var StylSectionDiscount = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    text-align: center;\n    margin-bottom: ", ";\n\n    & > span {\n        color: #f32d2d;\n        margin-left: 5px;\n    }\n"])), function (props) {
  return props.isVip ? "none" : "block";
}, function (props) {
  return props.theme.typography.textLarge.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.primary;
}, function (props) {
  return props.isMargin && "40px";
});
var StylWrapperCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: relative;\n    display: ", ";\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-width: 100%;\n    width: 100%;\n    padding: 45px 45px 30px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    background: no-repeat rgba(19, 43, 59, 0.7);\n    border-radius: 32px;\n\n    &:nth-child(1) {\n        width: 100%;\n        max-width: 100%;\n    }\n\n    &:nth-child(2n) {\n        background: no-repeat rgba(22, 40, 68, 0.7);\n    }\n\n    @media (min-width: 600px) {\n        max-width: 48%;\n    }\n\n    @media (min-width: 1200px) {\n        max-width: 350px;\n\n        &:nth-child(1) {\n            width: 350px;\n            max-width: 100%;\n        }\n    }\n"])), function (props) {
  return props.isVisible ? "flex" : "none";
});
var StylCardSettingsTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    margin-bottom: 10px;\n    text-align: center;\n\n    & > span {\n        font-size: ", ";\n    }\n"])), function (props) {
  return props.theme.typography.textMedium.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.theme.typography.textLarge.main;
});
var StylCardSettingsText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    line-height: 1.5;\n    text-align: center;\n    margin-bottom: 10px;\n"])), function (props) {
  return props.isSmall ? props.theme.typography.textSmall.main : props.theme.typography.textMedium.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylBtnCardSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: absolute;\n    display: block;\n    width: 32px;\n    height: 32px;\n    top: 15px;\n    right: 20px;\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    background-color: #162844;\n    color: #fff;\n"])));
var StylBoxWrapperCards = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    max-width: 1140px;\n    width: 100%;\n    flex-wrap: wrap;\n    padding: 10px;\n"])));
var StylBoxCenterCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    & > i {\n        font-size: 20px;\n        max-width: 65px;\n        width: 100%;\n\n        color: #fff;\n        padding: 20px;\n        border: 1px solid #fff;\n        border-radius: 50%;\n\n        &:first-child {\n            margin-right: 10px;\n        }\n    }\n"])));
var StylImgCardSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    padding: 0;\n    background-color: transparent;\n    border: 2px solid #fff;\n"])));
var StylTitleUserSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    margin-bottom: 10px;\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylWrapperInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    position: relative;\n    padding: 0 25px 0 55px;\n    margin-bottom: 15px;\n    border-radius: 100px;\n    height: 50px;\n    max-width: 100%;\n    width: 100%;\n    background-color: transparent;\n    border: 1px solid #fff;\n    margin-bottom: 10px;\n    transition: all 0.2s ease;\n\n    & > i {\n        position: absolute;\n        top: 30%;\n        left: 5%;\n        font-size: 20px;\n        color: #fff;\n    }\n\n    @media (min-width: 768px) {\n        max-width: 245px;\n\n        & > i {\n            left: 10%;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        &:hover {\n            border-color: ", ";\n        }\n\n        &:active,\n        &:focus {\n            border-color: ", ";\n        }\n    }\n"])), function (props) {
  return props.theme.palette.text.primary;
}, function (props) {
  return props.theme.palette.text.dark;
});
var StylInputUserSettings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    position: relative;\n    font-size: 14px;\n    color: #fff;\n    font-weight: 600;\n    height: 50px;\n    max-width: 100%;\n    width: 100%;\n    background-color: transparent;\n    outline: none;\n    border: none;\n"])));
var StylVipStatusModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    display: ", ";\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 40px;\n    border-radius: 20px;\n    margin-top: 30px;\n    margin-bottom: 10px;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.1);\n"])), function (props) {
  return props.isVip ? "none" : "flex";
});
var StylOptionsAddedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: ", ";\n    padding: 25px;\n    margin-bottom: 10px;\n    border-radius: 20px;\n    background-color: rgba(255, 255, 255, 0.1);\n    z-index: 10;\n\n    @media (min-width: 768px) {\n        padding: ", ";\n    }\n"])), function (props) {
  return props.isFullWidth ? "100%" : "49%";
}, function (props) {
  return props.isPadding ? "65px 55px 50px 45px" : "15px";
});
var StylBtnStartGameFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(StylBtnStartGame)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-bottom: 0;\n"])));
var StylBoxFlexStartColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n\n    @media (min-width: 768px) {\n        width: auto;\n        flex-direction: row;\n    }\n"])));
var StylWrapperCenterContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(StylOptionsAddedWrapper)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    margin-top: 10px;\n"])));


/***/ }),

/***/ "./resources/js/components/SettingsGame/SettingsGameFooter.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/SettingsGame/SettingsGameFooter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsGame.styled */ "./resources/js/components/SettingsGame/SettingsGame.styled.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Router */ "./resources/js/Router.js");
/* harmony import */ var _hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useActionsWithRedux */ "./resources/js/hooks/useActionsWithRedux.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var SettingsGameFooter = function SettingsGameFooter(_ref) {
  var man = _ref.man,
      female = _ref.female;

  var _useActionsWithRedux = (0,_hooks_useActionsWithRedux__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      sendSettingsGame = _useActionsWithRedux.sendSettingsGame,
      sendPlayersGame = _useActionsWithRedux.sendPlayersGame;

  var sendDataSettingsGame = function sendDataSettingsGame() {
    sendSettingsGame();
    sendPlayersGame(man, female);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init({
      duration: 1000
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxFooterSettings, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxFlexStartColumn, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.StylBtnFooterSettings, {
        to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.home,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
          className: "fas fa-sign-out-alt"
        }), "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0438\u0433\u0440\u044B"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SettingsGame_styled__WEBPACK_IMPORTED_MODULE_3__.StylBtnFooterSettingsComplexity, {
      to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.settingsGame.complexity,
      onClick: sendDataSettingsGame,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
        className: "fas fa-align-left"
      }), "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0439"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsGameFooter);

/***/ }),

/***/ "./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsGameVipStatus.styled */ "./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var SettingsGameVipStatus = function SettingsGameVipStatus(_ref) {
  var vip = _ref.vip;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__.StylWrapperVip, {
    isVip: vip,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__.StylVipText, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B "
      }), " \u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_SettingsGameVipStatus_styled__WEBPACK_IMPORTED_MODULE_1__.StylBtnVip, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "fas fa-gem"
      }), " \u041F\u043E\u043B\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043E\u0442 159 \u0440\u0443\u0431"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsGameVipStatus);

/***/ }),

/***/ "./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylWrapperVip": () => (/* binding */ StylWrapperVip),
/* harmony export */   "StylVipText": () => (/* binding */ StylVipText),
/* harmony export */   "StylBtnVip": () => (/* binding */ StylBtnVip)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylWrapperVip = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: ", ";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: #191c2b;\n  padding: 15px;\n  z-index: 1;\n\n  @media (min-width: 1024px) {\n    padding: 5px;\n  }\n"])), function (props) {
  return props.isVip ? 'none' : 'flex';
});
var StylVipText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  letter-spacing: 1.5px;\n  line-height: 1.5;\n  margin-bottom: 14px;\n  text-align: center;\n\n  max-width: ", ";\n  @media (min-width: 768px) {\n    margin-right: 60px;\n    margin-bottom: 0;\n  }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.isLowWidth && '440px';
});
var StylBtnVip = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  font-weight: 700;\n  font-size: 11px;\n  color: #fff;\n  padding: 10px 24px;\n  border-radius: 45px;\n  background: 0 0;\n  border: 2px solid #ffd545;\n  -webkit-box-shadow: inset 0 0 20px 6px #b48c07;\n  box-shadow: inset 0 0 20px 6px #b48c07;\n  transition: all 0.2s ease;\n\n  & > i {\n    postion: relative;\n    margin-right: 10px;\n  }\n\n  @media (min-width: 1024px) {\n    &:hover {\n      box-shadow: inset 0 0 9px 6px #b48c077d;\n    }\n  }\n"])));


/***/ }),

/***/ "./resources/js/components/TaskGame/TaskGamePage.styled.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/TaskGame/TaskGamePage.styled.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxReview": () => (/* binding */ StylBoxReview),
/* harmony export */   "BtnReview": () => (/* binding */ BtnReview),
/* harmony export */   "StylLinkSettings": () => (/* binding */ StylLinkSettings),
/* harmony export */   "StylTimeTask": () => (/* binding */ StylTimeTask),
/* harmony export */   "SectionTaskGame": () => (/* binding */ SectionTaskGame),
/* harmony export */   "StylBoxContentTask": () => (/* binding */ StylBoxContentTask),
/* harmony export */   "StylBoxTaskBtnsPeople": () => (/* binding */ StylBoxTaskBtnsPeople),
/* harmony export */   "StylBtnTask": () => (/* binding */ StylBtnTask),
/* harmony export */   "StylBoxTask": () => (/* binding */ StylBoxTask),
/* harmony export */   "StylTitleTask": () => (/* binding */ StylTitleTask),
/* harmony export */   "StylTextTask": () => (/* binding */ StylTextTask),
/* harmony export */   "StylImgTask": () => (/* binding */ StylImgTask),
/* harmony export */   "StylBoxFeatures": () => (/* binding */ StylBoxFeatures)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/bg/bg-image.jpg */ "./resources/js/assets/bg/bg-image.jpg");
/* harmony import */ var _assets_bg_bg_image_mobile_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/bg/bg-image-mobile.jpg */ "./resources/js/assets/bg/bg-image-mobile.jpg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SectionTaskGame = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(", ");\n  padding: 130px 0;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n  box-shadow: 0 0 0 1000px inset rgba(0, 0, 0, 0.5);\n\n  @media (min-width: 1024px) {\n    padding: 50px 20px;\n    background-size: cover;\n    background-image: url(", ");\n  }\n"])), _assets_bg_bg_image_mobile_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var StylBoxContentTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 800px;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: all 0.2s ease;\n  width: 100%;\n"])));
var StylBoxTaskBtnsPeople = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  background-color: ", ";\n\n  @media (min-width: 500px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.theme.palette.backgroundColor.main;
});
var StylBtnTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  background-color: ", ";\n  border: none;\n  outline: none;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n\n  &:last-child {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n\n  & > i {\n    margin-right: 5px;\n    transition: all 0.2s ease;\n  }\n\n  @media (min-width: 500px) {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n\n  @media (min-width: 1024px) {\n    &:active {\n      transform: scale(1.1);\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.isType === 'level2' ? props.theme.palette.backgroundBtn.second : props.isType === 'level3' ? props.theme.palette.error.btn : props.isType === 'task' ? props.theme.palette.backgroundBtn.primary : props.theme.palette.backgroundBtn.dark;
}, function (props) {
  return props.isPreLastBtn && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 0;\n      border-radius: 5px;\n\n      @media (min-width: 500px) {\n        margin-right: 0;\n      }\n\n      @media (min-width: 1024px) {\n        margin-right: 0;\n        &:hover {\n          & > i {\n            transform: translateY(-5px);\n          }\n        }\n      }\n    "])));
}, function (props) {
  return props.isLastBtn && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-radius: 5pxx;\n\n      @media (min-width: 1024px) {\n        &:hover {\n          & > i {\n            transform: translateY(5px);\n          }\n        }\n      }\n    "])));
});
var StylBoxTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-item: center;\n  justify-content: center;\n  padding: 50px 20px;\n"])));
var StylTitleTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  margin-bottom: 20px;\n  text-align: center;\n"])), function (props) {
  return props.theme.typography.textMedium.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylTextTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 600px;\n  width: 100%;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  margin-bottom: 15px;\n  text-align: center;\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
});
var StylImgTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  max-width: 500px;\n  width: 100%;\n  object-fit: cover;\n  filter: blur(4px);\n  margin: 0 auto;\n  margin-bottom: 20px;\n"])));
var StylBoxFeatures = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: rgba(58, 58, 58, 0.8);\n\n  @media (min-width: 500px) {\n    flex-direction: row;\n  }\n"])));
var StylTimeTask = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].i(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  border-radius: 50%;\n  color: ", ";\n  background-color: ", ";\n  box-shadow: 0 0 10px 2px ", ";\n"])), function (props) {
  return props.isTime ? 'flex' : 'none';
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.theme.palette.error.icon;
}, function (props) {
  return props.theme.palette.error.icon;
});
var StylLinkSettings = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  background-color: ", ";\n  text-decoration: none;\n  border: none;\n  outline: none;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n\n  & > i {\n    margin-right: 5px;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 500px) {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n\n  @media (min-width: 1024px) {\n    &:hover {\n      & > i {\n        animation: ", ";\n      }\n    }\n\n    &:active {\n      transform: scale(1.1);\n    }\n  }\n\n  ", "\n\n  @keyframes rotating {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.theme.palette.backgroundBtn.dark;
}, function (props) {
  return props.isDontRoll ? 'none' : 'rotating 1.5s linear infinite';
}, function (props) {
  return props.isGameTo && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      background-color: ", ";\n\n      & > i {\n        position: relative;\n        margin-left: 5px;\n        top: 1px;\n        transition: all 0.2s ease;\n      }\n\n      @media (min-width: 1024px) {\n        &:hover {\n          & > i {\n            animation: none;\n            transform: translateX(5px);\n          }\n        }\n      }\n    "])), function (props) {
    return props.theme.palette.backgroundBtn.primary;
  });
});
var StylBoxReview = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: flex-end;\n  margin-top: 15px;\n"])));
var BtnReview = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  pointer-events: ", ";\n  opacity: ", ";\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  &:first-child {\n    margin-right: 10px;\n  }\n\n  & > i {\n    color: ", ";\n    font-size: 20px;\n    transition: all 0.2s ease;\n  }\n\n  @media (min-width: 1024px) {\n    &:hover {\n      & > i {\n        color: ", ";\n      }\n    }\n\n    &:active {\n      transform: scale(1.1);\n    }\n  }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.isClick && 'none';
}, function (props) {
  return props.isClick ? '0.5' : '1';
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.text.primary;
});


/***/ }),

/***/ "./resources/js/hooks/useChangeTitlePage.js":
/*!**************************************************!*\
  !*** ./resources/js/hooks/useChangeTitlePage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var useChangeTitlePage = function useChangeTitlePage() {
  var ChangeTitle = function ChangeTitle(_ref) {
    var title = _ref.title;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      document.title = title;
    }, [title]);
  };

  return {
    ChangeTitle: ChangeTitle
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChangeTitlePage);

/***/ }),

/***/ "./resources/js/views/SettingsGamePage/SettingsGameView.js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/SettingsGamePage/SettingsGameView.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useChangeTitlePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../hooks/useChangeTitlePage */ "./resources/js/hooks/useChangeTitlePage.js");
/* harmony import */ var _components_SettingsGame_SettingsGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/SettingsGame/SettingsGame */ "./resources/js/components/SettingsGame/SettingsGame.js");
/* harmony import */ var _components_SettingsGame_VipStatusSettings_SettingsGameVipStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus */ "./resources/js/components/SettingsGame/VipStatusSettings/SettingsGameVipStatus.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var SettingsGameView = function SettingsGameView(_ref) {
  var title = _ref.title;

  var _useChangeTitlePage = (0,_hooks_useChangeTitlePage__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      ChangeTitlePage = _useChangeTitlePage.ChangeTitlePage;

  ChangeTitlePage(title);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SettingsGame_VipStatusSettings_SettingsGameVipStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
      vip: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SettingsGame_SettingsGame__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsGameView);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translateZ(0)}[data-aos=fade-up]{transform:translate3d(0,100px,0)}[data-aos=fade-down]{transform:translate3d(0,-100px,0)}[data-aos=fade-right]{transform:translate3d(-100px,0,0)}[data-aos=fade-left]{transform:translate3d(100px,0,0)}[data-aos=fade-up-right]{transform:translate3d(-100px,100px,0)}[data-aos=fade-up-left]{transform:translate3d(100px,100px,0)}[data-aos=fade-down-right]{transform:translate3d(-100px,-100px,0)}[data-aos=fade-down-left]{transform:translate3d(100px,-100px,0)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translateZ(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translate3d(0,100px,0) scale(.6)}[data-aos=zoom-in-down]{transform:translate3d(0,-100px,0) scale(.6)}[data-aos=zoom-in-right]{transform:translate3d(-100px,0,0) scale(.6)}[data-aos=zoom-in-left]{transform:translate3d(100px,0,0) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translate3d(0,100px,0) scale(1.2)}[data-aos=zoom-out-down]{transform:translate3d(0,-100px,0) scale(1.2)}[data-aos=zoom-out-right]{transform:translate3d(-100px,0,0) scale(1.2)}[data-aos=zoom-out-left]{transform:translate3d(100px,0,0) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translateZ(0)}[data-aos=slide-up]{transform:translate3d(0,100%,0)}[data-aos=slide-down]{transform:translate3d(0,-100%,0)}[data-aos=slide-right]{transform:translate3d(-100%,0,0)}[data-aos=slide-left]{transform:translate3d(100%,0,0)}[data-aos^=flip][data-aos^=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/bg/bg-image-mobile.jpg":
/*!****************************************************!*\
  !*** ./resources/js/assets/bg/bg-image-mobile.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bg-image-mobile.jpg?5f7d7180ab1f07f0b482ad2f3c0c61e9");

/***/ }),

/***/ "./resources/js/assets/bg/bg-image.jpg":
/*!*********************************************!*\
  !*** ./resources/js/assets/bg/bg-image.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bg-image.jpg?acf3c9aba9be476f04d37e76aad7be7b");

/***/ }),

/***/ "./resources/js/assets/icons/icon-girl.svg":
/*!*************************************************!*\
  !*** ./resources/js/assets/icons/icon-girl.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-girl.svg?863a9114028389ae5013e7bd9f65c718");

/***/ }),

/***/ "./resources/js/assets/icons/icon-man.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/icons/icon-man.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-man.svg?5926d18e6da2942d3682f31cdbecb0fc");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./aos.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);