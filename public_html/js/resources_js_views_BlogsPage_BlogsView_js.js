(globalThis["webpackChunkitrex"] = globalThis["webpackChunkitrex"] || []).push([["resources_js_views_BlogsPage_BlogsView_js"],{

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "./resources/js/components/Blogs/Blogs.js":
/*!************************************************!*\
  !*** ./resources/js/components/Blogs/Blogs.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blogs_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blogs.styled */ "./resources/js/components/Blogs/Blogs.styled.js");
/* harmony import */ var _PageHome_HeaderPageHome_HeaderMenu_HeaderMenuPageHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome */ "./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome.js");
/* harmony import */ var _PageHome_FooterPageHome_FooterPageHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PageHome/FooterPageHome/FooterPageHome */ "./resources/js/components/PageHome/FooterPageHome/FooterPageHome.js");
/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Categories/Categories */ "./resources/js/components/Blogs/Categories/Categories.js");
/* harmony import */ var _BlogsPosts_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlogsPosts/Post */ "./resources/js/components/Blogs/BlogsPosts/Post.js");
/* harmony import */ var _BlogsTrends_Trend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BlogsTrends/Trend */ "./resources/js/components/Blogs/BlogsTrends/Trend.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Posts = function Posts(_ref) {
  var currentItems = _ref.currentItems;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: currentItems && currentItems.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BlogsPosts_Post__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: item
      }, index);
    })
  });
};

var PaginatedItems = function PaginatedItems(_ref2) {
  var itemsPerPage = _ref2.itemsPerPage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentItems = _useState2[0],
      setCurrentItems = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pageCount = _useState4[0],
      setPageCount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      itemOffset = _useState6[0],
      setItemOffset = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var endOffset = itemOffset + itemsPerPage;
    setCurrentItems(_constants__WEBPACK_IMPORTED_MODULE_8__.blogPostsArr.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_8__.blogPostsArr.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  var handlePageClick = function handlePageClick(event) {
    var newOffset = event.selected * itemsPerPage % _constants__WEBPACK_IMPORTED_MODULE_8__.blogPostsArr.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxPosts, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Posts, {
      currentItems: currentItems
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {
      nextLabel: "next >",
      onPageChange: handlePageClick,
      pageRangeDisplayed: 2,
      marginPagesDisplayed: 2,
      pageCount: pageCount,
      previousLabel: "< previous",
      pageClassName: "page-item",
      pageLinkClassName: "page-link",
      previousClassName: "page-item",
      previousLinkClassName: "page-link",
      nextClassName: "page-item",
      nextLinkClassName: "page-link",
      breakLabel: "...",
      breakClassName: "page-item",
      breakLinkClassName: "page-link",
      containerClassName: "pagination",
      activeClassName: "active",
      renderOnZeroPageCount: null
    })]
  });
};

var Blogs = function Blogs() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxBlogs, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PageHome_HeaderPageHome_HeaderMenu_HeaderMenuPageHome__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxWrapper, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxCenter, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(PaginatedItems, {
            itemsPerPage: 3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxOtherContent, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylBoxTrending, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Blogs_styled__WEBPACK_IMPORTED_MODULE_2__.StylTrendTitle, {
                children: "Trending"
              }), !!_constants__WEBPACK_IMPORTED_MODULE_8__.blogTrendsArr.length && _constants__WEBPACK_IMPORTED_MODULE_8__.blogTrendsArr.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BlogsTrends_Trend__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  item: item
                }, index);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PageHome_FooterPageHome_FooterPageHome__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);

/***/ }),

/***/ "./resources/js/components/Blogs/Blogs.styled.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Blogs/Blogs.styled.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxBlogs": () => (/* binding */ StylBoxBlogs),
/* harmony export */   "StylBoxCenter": () => (/* binding */ StylBoxCenter),
/* harmony export */   "StylBoxPosts": () => (/* binding */ StylBoxPosts),
/* harmony export */   "StylBoxOtherContent": () => (/* binding */ StylBoxOtherContent),
/* harmony export */   "StylBoxTrending": () => (/* binding */ StylBoxTrending),
/* harmony export */   "StylTrendTitle": () => (/* binding */ StylTrendTitle),
/* harmony export */   "StylBoxWrapper": () => (/* binding */ StylBoxWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_bg_bg_image_mobile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/bg/bg-image-mobile.jpg */ "./resources/js/assets/bg/bg-image-mobile.jpg");
/* harmony import */ var _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/bg/bg-image.jpg */ "./resources/js/assets/bg/bg-image.jpg");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StylBoxBlogs = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: ", ";\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-image: url(", ");\n  min-height: 100vh;\n  padding: 20px 0;\n\n  @media (min-width: 1024px) {\n    background-image: url(", ");\n  }\n"])), function (props) {
  return props.theme.palette.backgroundColor.second;
}, _assets_bg_bg_image_mobile_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]);
var StylBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  background-color: rgba(52, 22, 75, 0.8);\n  margin-top: 20px;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    padding: 20px 40px;\n  }\n"])));
var StylBoxCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-top: 40px;\n  max-width: 1170px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var StylBoxPosts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n  transition: all 0.2s ease;\n\n  @media (min-width: 768px) {\n    padding-right: 30px;\n  }\n"])));
var StylBoxOtherContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  display: flex;\n  flex-direction: column;\n\n  max-width: 600px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    max-width: 300px;\n  }\n"])));
var StylBoxTrending = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  max-width: 600px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    max-width: 300px;\n  }\n"])));
var StylTrendTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-align: center;\n  text-transform: uppercase;\n  font-style: italic;\n  margin-bottom: 40px;\n"])), function (props) {
  return props.theme.typography.textMedium.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});


/***/ }),

/***/ "./resources/js/components/Blogs/BlogsPosts/Post.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Blogs/BlogsPosts/Post.js ***!
  \**********************************************************/
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
/* harmony import */ var _Post_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post.styled */ "./resources/js/components/Blogs/BlogsPosts/Post.styled.js");
/* harmony import */ var _assets_icons_icon_double_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../assets/icons/icon-double-arrow.png */ "./resources/js/assets/icons/icon-double-arrow.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Post = function Post(_ref) {
  var item = _ref.item;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init({
      duration: 1000
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.Article, {
    "data-aos": "fade-right",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylWrapperImg, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylPostImg, {
        src: item.imgUrl,
        alt: "post img"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylDataPost, {
      children: item.data
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylTitlePost, {
      children: item.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylTextPost, {
      children: item.text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Post_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMorePost, {
      to: item.url,
      children: ["\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: _assets_icons_icon_double_arrow_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "double arrow"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./resources/js/components/Blogs/BlogsPosts/Post.styled.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Blogs/BlogsPosts/Post.styled.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article),
/* harmony export */   "StylPostImg": () => (/* binding */ StylPostImg),
/* harmony export */   "StylWrapperImg": () => (/* binding */ StylWrapperImg),
/* harmony export */   "StylTitlePost": () => (/* binding */ StylTitlePost),
/* harmony export */   "StylDataPost": () => (/* binding */ StylDataPost),
/* harmony export */   "StylTextPost": () => (/* binding */ StylTextPost),
/* harmony export */   "StylLinkMorePost": () => (/* binding */ StylLinkMorePost)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Article = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 800px;\n  width: 100%;\n  margin-bottom: 60px;\n"])));
var StylWrapperImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  max-height: 350px;\n  background-color: #9d9d9d;\n  position: relative;\n  padding-bottom: 45%;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 5px 0 black, 0.5;\n  transition: all 0.5s ease;\n  border-radius: 8px;\n"])));
var StylPostImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  object-position: center;\n  object-fit: cover;\n  border-radius: 8px;\n"])));
var StylTitlePost = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  margin-bottom: 40px;\n"])), function (props) {
  return props.theme.typography.textLarge.main;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylDataPost = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  return props.theme.typography.textMedium.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylTextPost = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  line-height: 1.6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-clamp: 3;\n  box-orient: vertical;\n  margin-bottom: 10px;\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.main;
});
var StylLinkMorePost = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  font-style: italic;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n\n  & > img {\n    margin-left: 10px;\n    transition: all 0.2s ease;\n  }\n\n  @media (min-width: 1024px) {\n    &:hover {\n      color: ", ";\n    }\n\n    &:active {\n      & > img {\n        transform: translateX(10px);\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.text.primary;
});


/***/ }),

/***/ "./resources/js/components/Blogs/BlogsTrends/Trend.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Blogs/BlogsTrends/Trend.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _Trend_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trend.styled */ "./resources/js/components/Blogs/BlogsTrends/Trend.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Trend = function Trend(_ref) {
  var item = _ref.item;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init({
      duration: 1000
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: item.url,
    style: {
      textDecoration: 'none'
    },
    "data-aos": "fade-right",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Trend_styled__WEBPACK_IMPORTED_MODULE_3__.StylTrendBox, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trend_styled__WEBPACK_IMPORTED_MODULE_3__.StylImgTrend, {
        src: item.imgUrl,
        alt: "trend img"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Trend_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxInfo, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trend_styled__WEBPACK_IMPORTED_MODULE_3__.StylDataTrend, {
          children: item.data
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trend_styled__WEBPACK_IMPORTED_MODULE_3__.StylTitleTrend, {
          children: item.title
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trend);

/***/ }),

/***/ "./resources/js/components/Blogs/BlogsTrends/Trend.styled.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Blogs/BlogsTrends/Trend.styled.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylTrendBox": () => (/* binding */ StylTrendBox),
/* harmony export */   "StylImgTrend": () => (/* binding */ StylImgTrend),
/* harmony export */   "StylDataTrend": () => (/* binding */ StylDataTrend),
/* harmony export */   "StylBoxInfo": () => (/* binding */ StylBoxInfo),
/* harmony export */   "StylTitleTrend": () => (/* binding */ StylTitleTrend)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylTrendBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 38px;\n\n  max-width: 600px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    max-width: 260px;\n  }\n"])));
var StylImgTrend = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 8px;\n  margin-right: 20px;\n"])));
var StylDataTrend = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  margin-bottom: 7px;\n"])), function (props) {
  return props.theme.typography.textSmall.main;
}, function (props) {
  return props.theme.typography.textWeigth.main;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.main;
});
var StylTitleTrend = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  line-height: 1.5;\n"])), function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylBoxInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));


/***/ }),

/***/ "./resources/js/components/Blogs/Categories/Categories.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Blogs/Categories/Categories.js ***!
  \****************************************************************/
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
/* harmony import */ var _Categories_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories.styled */ "./resources/js/components/Blogs/Categories/Categories.styled.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/js/constants/index.js");
/* harmony import */ var _assets_icons_icon_double_arrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/icons/icon-double-arrow.png */ "./resources/js/assets/icons/icon-double-arrow.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Categories = function Categories() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init({
      duration: 1000
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Categories_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxCategories, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Categories_styled__WEBPACK_IMPORTED_MODULE_3__.StylTitleCategories, {
      children: "Categories"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Categories_styled__WEBPACK_IMPORTED_MODULE_3__.StylListCategories, {
      children: !!_constants__WEBPACK_IMPORTED_MODULE_4__.blogsCategoriesListArr.length && _constants__WEBPACK_IMPORTED_MODULE_4__.blogsCategoriesListArr.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Categories_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemCategories, {
          "data-aos": "fade-right",
          children: [item.title, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: _assets_icons_icon_double_arrow_png__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "double arrow"
          })]
        }, index);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./resources/js/components/Blogs/Categories/Categories.styled.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Blogs/Categories/Categories.styled.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxCategories": () => (/* binding */ StylBoxCategories),
/* harmony export */   "StylTitleCategories": () => (/* binding */ StylTitleCategories),
/* harmony export */   "StylListCategories": () => (/* binding */ StylListCategories),
/* harmony export */   "StylItemCategories": () => (/* binding */ StylItemCategories)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylBoxCategories = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 55px 38px 25px;\n  background-color: ", ";\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    max-width: 300px;\n  }\n"])), function (props) {
  return props.theme.palette.backgroundColor.primary;
});
var StylTitleCategories = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-transform: uppercase;\n  margin-bottom: 48px;\n"])), function (props) {
  return props.theme.typography.textMedium.primary;
}, function (props) {
  return props.theme.typography.textWeigth.second;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
});
var StylListCategories = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var StylItemCategories = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  color: ", ";\n  transition: all 0.2s ease;\n\n  & > img {\n    top: 1px;\n    margin-left: 5px;\n    position: relative;\n    visibility: hidden;\n  }\n\n  @media (min-width: 1024px) {\n    &:hover {\n      color: ", ";\n\n      & > img {\n        visibility: visible;\n        animation: 0.5s ease-in doubleArrow;\n      }\n    }\n  }\n\n  @keyframes doubleArrow {\n    0% {\n      opacity: 0.2;\n      left: 30px;\n    }\n    100% {\n      opacity: 1;\n      left: 0;\n    }\n  }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.second;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.main;
}, function (props) {
  return props.theme.palette.text.light;
});


/***/ }),

/***/ "./resources/js/components/PageHome/FooterPageHome/FooterPageHome.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/PageHome/FooterPageHome/FooterPageHome.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Router */ "./resources/js/Router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _HeaderPageHome_AddMenuNav_AddMenuNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../HeaderPageHome/AddMenuNav/AddMenuNav */ "./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.js");
/* harmony import */ var _HeaderPageHome_HeaderFollowUs_HeaderFollowUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../HeaderPageHome/HeaderFollowUs/HeaderFollowUs */ "./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.js");
/* harmony import */ var _FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterPageHome.styled */ "./resources/js/components/PageHome/FooterPageHome/FooterPageHome.styled.js");
/* harmony import */ var _common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../common/BasicBoxes/BasicBoxes.styled */ "./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/logo.png */ "./resources/js/assets/logo.png");
/* harmony import */ var _hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/redux/useActionUsers */ "./resources/js/hooks/redux/useActionUsers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var FooterPageHome = function FooterPageHome() {
  var _useActionUsers = (0,_hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      profile = _useActionUsers.profile,
      userLogout = _useActionUsers.userLogout;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenAdditional = _useState2[0],
      setOpenAdditiona = _useState2[1];

  var handleAdditionalMenu = function handleAdditionalMenu() {
    setOpenAdditiona(!isOpenAdditional);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylBoxFooterPageHome, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_5__.StylBoxContainerMaxWidth, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_5__.StylBoxFlexColumnCenter, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylImgLogoMagin, {
          src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
          alt: "logo"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylMenuFooterPageHome, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.home,
                children: "\u0414\u043E\u043C\u043E\u0439"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              isAddMenu: true,
              onClick: handleAdditionalMenu,
              children: ["\u0418\u0433\u0440\u044B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HeaderPageHome_AddMenuNav_AddMenuNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
                typeMenu: false,
                visibleContent: isOpenAdditional,
                handleContent: handleAdditionalMenu
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.musicFromSex,
                children: "\u041C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u0441\u0435\u043A\u0441\u0430"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.blogs.main,
                children: "\u0411\u043B\u043E\u0433"
              })
            })
          }), Object.keys(profile).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.formLogin,
                children: "\u041B\u043E\u0433\u0438\u043D"
              })
            })
          }), " ", Object.keys(profile).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.formRegister,
                children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
              })
            })
          }), " ", Object.keys(profile).length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.profileUser,
                children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
              })
            })
          }), Object.keys(profile).length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylItemMenuFooter, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylLinkMenuFooter, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
                to: _Router__WEBPACK_IMPORTED_MODULE_1__.routes.profileUser,
                onClick: userLogout,
                children: "\u0412\u044B\u0439\u0442\u0438"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HeaderPageHome_HeaderFollowUs_HeaderFollowUs__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPageHome_styled__WEBPACK_IMPORTED_MODULE_4__.StylCopyrightFooter, {
          children: "ColorLib 2018 @ All rights reserved"
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterPageHome);

/***/ }),

/***/ "./resources/js/components/PageHome/FooterPageHome/FooterPageHome.styled.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PageHome/FooterPageHome/FooterPageHome.styled.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxFooterPageHome": () => (/* binding */ StylBoxFooterPageHome),
/* harmony export */   "StylImgLogoMagin": () => (/* binding */ StylImgLogoMagin),
/* harmony export */   "StylCopyrightFooter": () => (/* binding */ StylCopyrightFooter),
/* harmony export */   "StylItemMenuFooter": () => (/* binding */ StylItemMenuFooter),
/* harmony export */   "StylLinkMenuFooter": () => (/* binding */ StylLinkMenuFooter),
/* harmony export */   "StylMenuFooterPageHome": () => (/* binding */ StylMenuFooterPageHome)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _HeaderPageHome_HeaderMenu_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HeaderPageHome/HeaderMenu/HeaderMenu.styled */ "./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenu.styled.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StylBoxFooterPageHome = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: linear-gradient(\n        ", "\n    );\n    padding: 60px 15px 25px;\n"])), function (props) {
  return props.theme.palette.backgroundGradien.primary;
});
var StylImgLogoMagin = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_HeaderPageHome_HeaderMenu_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_0__.StylImgLogo)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    max-width: 200px;\n    max-height: 40px;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 62px;\n"])));
var StylCopyrightFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    text-align: center;\n    opacity: 0.2;\n"])), function (props) {
  return props.theme.typography.textSmall.main;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.main;
});
var StylItemMenuFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: relative;\n    text-align: center;\n    padding: 10px;\n"])));
var StylLinkMenuFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_HeaderPageHome_HeaderMenu_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_0__.StylLinkMainNav)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: relative;\n    margin-right: 20px;\n    font-size: 18px;\n    white-space: nowrap;\n\n    ", "\n"])), function (props) {
  return props.isAddMenu && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            &:after {\n                content: \"\";\n                position: absolute;\n                left: 90%;\n                top: 30%;\n                display: block;\n                width: 5px;\n                height: 5px;\n                border-top: 2px solid ", ";\n                border-right: 2px solid ", ";\n\n                transform: rotate(135deg) translateY(-50%);\n                transition: all 0.2s ease;\n            }\n\n            @media (min-width: 1024px) {\n                &:hover {\n                    &:after {\n                        border-color: ", ";\n                    }\n                }\n\n                &:active {\n                    &:after {\n                        border-bottom: 2px solid\n                            ", ";\n                        border-left: 2px solid\n                            ", ";\n                        border-top: 2px solid transparent;\n                        border-right: 2px solid transparent;\n                    }\n                }\n            }\n        "])), function (props) {
    return props.theme.palette.main;
  }, function (props) {
    return props.theme.palette.main;
  }, function (props) {
    return props.theme.palette.border.main;
  }, function (props) {
    return props.theme.palette.border.main;
  }, function (props) {
    return props.theme.palette.border.main;
  });
});
var StylMenuFooterPageHome = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-self: center;\n    padding-bottom: 20px;\n\n    @media (min-width: 768px) {\n        justify-content: center;\n    }\n"])));


/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddMenuNav.styled */ "./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var AddMenuNav = function AddMenuNav(_ref) {
  var typeMenu = _ref.typeMenu,
      visibleContent = _ref.visibleContent,
      handleContent = _ref.handleContent;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.BoxAddMenu, {
    typeMenu: typeMenu,
    isShow: visibleContent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylItemAddMenu, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylLinkAddMenu, {
        onClick: handleContent,
        children: "\u0427\u0435\u0440\u043D\u043E\u0435 \u0438 \u0431\u0435\u043B\u043E\u0435"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylItemAddMenu, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylLinkAddMenu, {
        onClick: handleContent,
        children: "\u0420\u043E\u043B\u0435\u0432\u044B\u0435 \u0438\u0433\u0440\u044B"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylItemAddMenu, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddMenuNav_styled__WEBPACK_IMPORTED_MODULE_1__.StylLinkAddMenu, {
        onClick: handleContent,
        children: "\u0421\u0435\u043A\u0441 \u0444\u0430\u043D\u0442\u044B"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddMenuNav);

/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.styled.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.styled.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxAddMenu": () => (/* binding */ BoxAddMenu),
/* harmony export */   "StylItemAddMenu": () => (/* binding */ StylItemAddMenu),
/* harmony export */   "StylLinkAddMenu": () => (/* binding */ StylLinkAddMenu)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var BoxAddMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    animation: ", ";\n    opacity: ", ";\n    z-index: ", ";\n    visibility: ", ";\n    display: flex;\n    top: 30px;\n    left: 10px;\n    width: 200px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 20px 10px;\n    border-radius: 8px;\n    list-style: none;\n    transition: all 0.5s ease;\n\n    @keyframes slideIn {\n        0% {\n            height: 0px;\n        }\n        100% {\n            height: 135px;\n        }\n    }\n\n    @keyframes slideOut {\n        0% {\n            height: 135px;\n        }\n        100% {\n            height: 0;\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.isShow ? "1s slideIn" : "0.5s slideOut";
}, function (props) {
  return props.isShow ? "1" : "0";
}, function (props) {
  return props.isShow ? "1" : "-1";
}, function (props) {
  return props.isShow ? "visible" : "hidden";
}, function (props) {
  return props.typeMenu ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                  background-color: ", ";\n              "])), function (props) {
    return props.theme.palette.backgroundColor.dark;
  }) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                  background-image: linear-gradient(\n                      ", "\n                  );\n              "])), function (props) {
    return props.theme.palette.backgroundGradien.primary;
  });
});
var StylItemAddMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 0 10px;\n    width: 100%;\n    white-space: nowrap;\n    text-align: left;\n\n    &:not(:last-child) {\n        margin-bottom: 20px;\n    }\n"])));
var StylLinkAddMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    text-decoration: none;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    width: 100%;\n    transition: all 0.2s ease;\n\n    @media (min-width: 1024px) {\n        &:hover {\n            color: ", ";\n        }\n    }\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.main;
}, function (props) {
  return props.theme.palette.text.primary;
});


/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/BasicBoxes/BasicBoxes.styled */ "./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js");
/* harmony import */ var _HeaderFollowUs_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderFollowUs.styled */ "./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.styled.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../constants */ "./resources/js/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var HeaderFollowUs = function HeaderFollowUs(_ref) {
  var isFollow = _ref.isFollow;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__.StylBoxContainerMaxWidth, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_HeaderFollowUs_styled__WEBPACK_IMPORTED_MODULE_1__.StylBoxFollowUs, {
      isFollow: isFollow,
      children: [isFollow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HeaderFollowUs_styled__WEBPACK_IMPORTED_MODULE_1__.StylFollowUsPageHome, {
        children: "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0430\u0441:"
      }), _constants__WEBPACK_IMPORTED_MODULE_2__.linkFollowsArr.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HeaderFollowUs_styled__WEBPACK_IMPORTED_MODULE_1__.StylIconPageHome, {
          className: item
        }, index);
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFollowUs);

/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.styled.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs.styled.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxFollowUs": () => (/* binding */ StylBoxFollowUs),
/* harmony export */   "StylFollowUsPageHome": () => (/* binding */ StylFollowUsPageHome),
/* harmony export */   "StylIconPageHome": () => (/* binding */ StylIconPageHome)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/BasicBoxes/BasicBoxes.styled */ "./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StylBoxFollowUs = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__.StylBoxFlexRowFlexEnd)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    justify-content: ", ";\n    margin-bottom: ", ";\n"])), function (props) {
  return props.isFollow ? "" : "center";
}, function (props) {
  return props.isFollow ? "" : "40px";
});
var StylFollowUsPageHome = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    letter-spacing: 1.1px;\n    margin-right: 12px;\n"])), function (props) {
  return props.theme.typography.textMedium.main;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.main;
});
var StylIconPageHome = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    cursor: pointer;\n    top: -7px;\n    padding: 10px;\n    margin-right: 12px;\n    color: ", ";\n    font-size: ", ";\n    border-radius: 50%;\n    transition: all 0.2s ease;\n\n    @media (min-width: 1024px) {\n        &:hover {\n            background-color: ", ";\n        }\n\n        &:active {\n            transform: scale(1.1);\n        }\n    }\n"])), function (props) {
  return props.theme.palette.icon.light;
}, function (props) {
  return props.theme.typography.textSmall.main;
}, function (props) {
  return props.theme.palette.border.main;
});


/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenu.styled.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenu.styled.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylImgLogo": () => (/* binding */ StylImgLogo),
/* harmony export */   "StylBtnMenuNavPageHome": () => (/* binding */ StylBtnMenuNavPageHome),
/* harmony export */   "StylBoxNavMenuPageHome": () => (/* binding */ StylBoxNavMenuPageHome),
/* harmony export */   "StylBoxMainMenuPageHome": () => (/* binding */ StylBoxMainMenuPageHome),
/* harmony export */   "StylItemMainNav": () => (/* binding */ StylItemMainNav),
/* harmony export */   "StylLinkMainNav": () => (/* binding */ StylLinkMainNav)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/BasicBoxes/BasicBoxes.styled */ "./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js");
/* harmony import */ var _assets_icons_icon_burger_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../assets/icons/icon-burger-menu.svg */ "./resources/js/assets/icons/icon-burger-menu.svg");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StylImgLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: 120px;\n    height: 20px;\n    align-self: center;\n    object-fit: contain;\n\n    @media (min-width: 768px) {\n        min-width: 170px;\n        min-height: 30px;\n    }\n"])));
var StylBtnMenuNavPageHome = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    text-decoration: none;\n    position: relative;\n    width: 40px;\n    height: 30px;\n    border-radius: 8px;\n    transition: all 0.2s ease;\n\n    transform: ", ";\n\n    &::after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        width: 20px;\n        height: 15px;\n        top: 50%;\n        left: 25%;\n        transform: translateY(-50%);\n        background-image: url(", ");\n        background-repeat: no-repeat;\n        background-size: contain;\n        z-index: 1;\n    }\n\n    @media (min-width: 1024px) {\n        display: none;\n    }\n"])), function (props) {
  return props.open && "rotate(90deg)";
}, _assets_icons_icon_burger_menu_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
var StylBoxNavMenuPageHome = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_common_BasicBoxes_BasicBoxes_styled__WEBPACK_IMPORTED_MODULE_0__.StylBoxFlexRowSpaceBetween)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    max-width: 1440px;\n    width: 100%;\n    margin: 0 auto;\n    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);\n    background-color: ", ";\n    border-radius: 8px;\n    padding: 20px;\n    z-index: 2;\n"])), function (props) {
  return props.theme.palette.backgroundColor.dark;
});
var StylBoxMainMenuPageHome = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: calc(100% - 10px);\n    left: ", ";\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    list-style: none;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    transition: all 0.2s ease-in-out;\n    animation: ", ";\n\n    @media (min-width: 1024px) {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        position: static;\n    }\n\n    @media (min-width: 1024px) {\n        width: auto;\n    }\n\n    @keyframes slidein {\n        0% {\n            left: -120%;\n        }\n        100% {\n            left: 0;\n        }\n    }\n\n    @keyframes slideout {\n        0% {\n            left: 0;\n        }\n        100% {\n            left: -120%;\n        }\n    }\n"])), function (props) {
  return props.open ? "0" : "-120%";
}, function (props) {
  return props.theme.palette.backgroundColor.dark;
}, function (props) {
  return props.open ? "1s slidein" : "0.5s slideout";
});
var StylItemMainNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n\n    @media (min-width: 1024px) {\n        width: auto;\n    }\n"])));
var StylLinkMainNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: flex;\n    position: relative;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n    text-align: left;\n    text-transform: capitalize;\n    width: 100%;\n    padding: 10px 15px;\n    transition: all 0.2s ease;\n\n    & > a {\n        text-decoration: none;\n        white-space: nowrap;\n        transition: all 0.2s ease;\n        width: 100%;\n        color: ", ";\n    }\n\n    &:visited {\n        color: ", ";\n    }\n\n    @media (min-width: 768px) {\n        text-align: center;\n    }\n\n    @media (min-width: 1024px) {\n        width: auto;\n\n        &:hover {\n            color: ", ";\n            & > a {\n                color: ", ";\n            }\n        }\n\n        &:active {\n            & > a {\n                transform: scale(1.1);\n            }\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.theme.typography.textSmall.primary;
}, function (props) {
  return props.theme.typography.textWeigth.primary;
}, function (props) {
  return props.theme.typography.textFamily.main;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.text.light;
}, function (props) {
  return props.theme.palette.text.primary;
}, function (props) {
  return props.theme.palette.text.primary;
}, function (props) {
  return props.isAddMenu && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            &:after {\n                content: \"\";\n                position: absolute;\n                left: 90%;\n                top: 30%;\n                display: block;\n                width: 5px;\n                height: 5px;\n                border-top: 2px solid ", ";\n                border-right: 2px solid ", ";\n\n                transform: rotate(135deg) translateY(-50%);\n                transition: all 0.2s ease;\n            }\n\n            @media (min-width: 1024px) {\n                &:hover {\n                    &:after {\n                        border-color: ", ";\n                    }\n                }\n\n                &:active {\n                    &:after {\n                        border-bottom: 2px solid\n                            ", ";\n                        border-left: 2px solid\n                            ", ";\n                        border-top: 2px solid transparent;\n                        border-right: 2px solid transparent;\n                    }\n                }\n            }\n        "])), function (props) {
    return props.theme.palette.main;
  }, function (props) {
    return props.theme.palette.main;
  }, function (props) {
    return props.theme.palette.border.main;
  }, function (props) {
    return props.theme.palette.border.main;
  }, function (props) {
    return props.theme.palette.border.main;
  });
});


/***/ }),

/***/ "./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../assets/logo.png */ "./resources/js/assets/logo.png");
/* harmony import */ var _AddMenuNav_AddMenuNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../AddMenuNav/AddMenuNav */ "./resources/js/components/PageHome/HeaderPageHome/AddMenuNav/AddMenuNav.js");
/* harmony import */ var _HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderMenu.styled */ "./resources/js/components/PageHome/HeaderPageHome/HeaderMenu/HeaderMenu.styled.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../Router */ "./resources/js/Router.js");
/* harmony import */ var _hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/redux/useActionUsers */ "./resources/js/hooks/redux/useActionUsers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var HeaderMenuPageHome = function HeaderMenuPageHome() {
  var _useActionUsers = (0,_hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      profile = _useActionUsers.profile,
      userLogout = _useActionUsers.userLogout;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenMainMenu = _useState2[0],
      setOpenMainMenu = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpenAdditional = _useState4[0],
      setOpenAdditiona = _useState4[1];

  var handleAdditionalMenu = function handleAdditionalMenu() {
    setOpenAdditiona(!isOpenAdditional);
  };

  var handleMenu = function handleMenu() {
    setOpenMainMenu(!isOpenMainMenu);
  };

  var profileRequest = function profileRequest() {
    handleMenu();
    userLogout();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxNavMenuPageHome, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylImgLogo, {
      src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylBtnMenuNavPageHome, {
      type: "button",
      onClick: handleMenu,
      open: isOpenMainMenu
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylBoxMainMenuPageHome, {
      open: isOpenMainMenu,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.home,
            children: "\u0414\u043E\u043C\u043E\u0439"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleAdditionalMenu,
          isAddMenu: true,
          children: ["\u0418\u0433\u0440\u044B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AddMenuNav_AddMenuNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
            typeMenu: true,
            visibleContent: isOpenAdditional,
            handleContent: handleAdditionalMenu
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.musicFromSex,
            children: "\u041C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u0441\u0435\u043A\u0441\u0430"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.blogs.main,
            children: "\u0411\u043B\u043E\u0433"
          })
        })
      }), Object.keys(profile).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.formLogin,
            children: "\u041B\u043E\u0433\u0438\u043D"
          })
        })
      }), " ", Object.keys(profile).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.formRegister,
            children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
          })
        })
      }), " ", Object.keys(profile).length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: handleMenu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.profileUser,
            children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
          })
        })
      }), Object.keys(profile).length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylItemMainNav, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderMenu_styled__WEBPACK_IMPORTED_MODULE_3__.StylLinkMainNav, {
          onClick: profileRequest,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
            to: _Router__WEBPACK_IMPORTED_MODULE_4__.routes.home,
            children: "\u0412\u044B\u0439\u0442\u0438"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderMenuPageHome);

/***/ }),

/***/ "./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/common/BasicBoxes/BasicBoxes.styled.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylBoxContainerMaxWidth": () => (/* binding */ StylBoxContainerMaxWidth),
/* harmony export */   "StylBoxFlexColumnSpaceBetween": () => (/* binding */ StylBoxFlexColumnSpaceBetween),
/* harmony export */   "StylBoxFlexRowSpaceBetween": () => (/* binding */ StylBoxFlexRowSpaceBetween),
/* harmony export */   "StylBoxFlexColumnCenter": () => (/* binding */ StylBoxFlexColumnCenter),
/* harmony export */   "StylBoxFlexColumnFlexStart": () => (/* binding */ StylBoxFlexColumnFlexStart),
/* harmony export */   "StylBoxFlexRowFlexEnd": () => (/* binding */ StylBoxFlexRowFlexEnd),
/* harmony export */   "StylBoxFlexRowFlexStart": () => (/* binding */ StylBoxFlexRowFlexStart)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StylBoxContainerMaxWidth = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 2;\n"])));
var StylBoxFlexColumnSpaceBetween = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n"])));
var StylBoxFlexRowSpaceBetween = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n"])));
var StylBoxFlexColumnCenter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));
var StylBoxFlexColumnFlexStart = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));
var StylBoxFlexRowFlexStart = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n"])));
var StylBoxFlexRowFlexEnd = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: flex-end;\n"])));


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
  var ChangeTitle = function ChangeTitle(title) {
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

/***/ "./resources/js/views/BlogsPage/BlogsView.js":
/*!***************************************************!*\
  !*** ./resources/js/views/BlogsPage/BlogsView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Blogs_Blogs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/Blogs/Blogs.js */ "./resources/js/components/Blogs/Blogs.js");
/* harmony import */ var _hooks_useChangeTitlePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks/useChangeTitlePage */ "./resources/js/hooks/useChangeTitlePage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BlogsView = function BlogsView(_ref) {
  var title = _ref.title;

  var _useChangeTitlePage = (0,_hooks_useChangeTitlePage__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      ChangeTitle = _useChangeTitlePage.ChangeTitle;

  ChangeTitle(title);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Blogs_Blogs_js__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogsView);

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

/***/ "./resources/js/assets/icons/icon-burger-menu.svg":
/*!********************************************************!*\
  !*** ./resources/js/assets/icons/icon-burger-menu.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-burger-menu.svg?7ff26e29fdada3a03a934a5d6d3ec983");

/***/ }),

/***/ "./resources/js/assets/icons/icon-double-arrow.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/icons/icon-double-arrow.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-double-arrow.png?9b6e42359088b515fb676eaae3135c4d");

/***/ }),

/***/ "./resources/js/assets/logo.png":
/*!**************************************!*\
  !*** ./resources/js/assets/logo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?bdc4e60e92ce1a83e11d5a3817834b02");

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

/***/ }),

/***/ "./node_modules/react-paginate/dist/react-paginate.js":
/*!************************************************************!*\
  !*** ./node_modules/react-paginate/dist/react-paginate.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,(function(__WEBPACK_EXTERNAL_MODULE__98__){return(()=>{var __webpack_modules__={759:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r,o=a(98),_=a.n(o),n=a(697),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,o=e.breakHandler,n=e.getEventListener,i=a||"break";return _().createElement("li",{className:i},_().createElement("a",s({className:r,role:"button",tabIndex:"0",onKeyPress:o},n(o)),t))};l.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=l;const c=p;var d,u;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"BreakView","/home/yoan/work/oss/react-paginate/react_components/BreakView.js"),d.register(p,"default","/home/yoan/work/oss/react-paginate/react_components/BreakView.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},770:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r,o=a(98),_=a.n(o),n=a(697),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,o=e.selected,n=e.activeClassName,i=e.activeLinkClassName,l=e.getEventListener,p=e.pageSelectedHandler,c=e.href,d=e.extraAriaContext,u=e.pageLabelBuilder,f=e.rel,g=e.ariaLabel||"Page "+r+(d?" "+d:""),P=null;return o&&(P="page",g=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+n:n,void 0!==a?void 0!==i&&(a=a+" "+i):a=i),_().createElement("li",{className:t},_().createElement("a",s({rel:f,role:c?void 0:"button",className:a,href:c,tabIndex:o?"-1":"0","aria-label":g,"aria-current":P,onKeyPress:p},l(p)),u(r)))};l.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var p=l;const c=p;var d,u;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"PageView","/home/yoan/work/oss/react-paginate/react_components/PageView.js"),d.register(p,"default","/home/yoan/work/oss/react-paginate/react_components/PageView.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},214:(module,__webpack_exports__,__nested_webpack_require_3517__)=>{"use strict";__nested_webpack_require_3517__.d(__webpack_exports__,{Z:()=>PaginationBoxView});var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_3517__(98),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_3517__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_3517__(697),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_3517__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_PageView__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_3517__(770),_BreakView__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_3517__(759),_utils__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_3517__(923),enterModule;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_extends.apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var a,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}module=__nested_webpack_require_3517__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PaginationBoxView=function(_Component){_inherits(PaginationBoxView,_Component);var _super=_createSuper(PaginationBoxView);function PaginationBoxView(e){var t,a;return _classCallCheck(this,PaginationBoxView),_defineProperty(_assertThisInitialized(t=_super.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),_defineProperty(_assertThisInitialized(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),_defineProperty(_assertThisInitialized(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),_defineProperty(_assertThisInitialized(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),_defineProperty(_assertThisInitialized(t),"getEventListener",(function(e){return _defineProperty({},t.props.eventListener,e)})),_defineProperty(_assertThisInitialized(t),"handleClick",(function(e,a,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},_=o.isPrevious,n=void 0!==_&&_,i=o.isNext,s=void 0!==i&&i,l=o.isBreak,p=void 0!==l&&l,c=o.isActive,d=void 0!==c&&c;e.preventDefault?e.preventDefault():e.returnValue=!1;var u=t.state.selected,f=t.props.onClick,g=r;if(f){var P=f({index:a,selected:u,nextSelectedPage:r,event:e,isPrevious:n,isNext:s,isBreak:p,isActive:d});if(!1===P)return;Number.isInteger(P)&&(g=P)}void 0!==g&&t.handlePageChange(g)})),_defineProperty(_assertThisInitialized(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),_defineProperty(_assertThisInitialized(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),_defineProperty(_assertThisInitialized(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),_defineProperty(_assertThisInitialized(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,o=r.nextPageRel,_=r.prevPageRel,n=r.selectedPageRel;return a-1===e?_:a===e?n:a+1===e?o:void 0})),_defineProperty(_assertThisInitialized(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,o=a.pageCount,_=a.marginPagesDisplayed,n=a.breakLabel,i=a.breakClassName,s=a.breakLinkClassName,l=t.state.selected;if(o<=r)for(var p=0;p<o;p++)e.push(t.getPageElement(p));else{var c=r/2,d=r-c;l>o-r/2?c=r-(d=o-l):l<r/2&&(d=r-(c=l));var u,f,g=function(e){return t.getPageElement(e)},P=[];for(u=0;u<o;u++){var E=u+1;E<=_||E>o-_||u>=l-c&&u<=l+(0===l&&r>1?d-1:d)?P.push({type:"page",index:u,display:g(u)}):n&&P.length>0&&P[P.length-1].display!==f&&(r>0||_>0)&&(f=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BreakView__WEBPACK_IMPORTED_MODULE_3__.Z,{key:u,breakLabel:n,breakClassName:i,breakLinkClassName:s,breakHandler:t.handleBreakClick.bind(null,u),getEventListener:t.getEventListener}),P.push({type:"break",index:u,display:f}))}P.forEach((function(t,a){var r=t;"break"===t.type&&P[a-1]&&"page"===P[a-1].type&&P[a+1]&&"page"===P[a+1].type&&P[a+1].index-P[a-1].index<=2&&(r={type:"page",index:t.index,display:g(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return _createClass(PaginationBoxView,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,o=e.pageCount,_=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),void 0!==t&&t>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(o-1,").")),void 0!==_&&_>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(_," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,o=t.hrefAllControls;if(a)return o||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,o=a.pageLinkClassName,_=a.activeClassName,n=a.activeLinkClassName,i=a.extraAriaContext,s=a.pageLabelBuilder;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView__WEBPACK_IMPORTED_MODULE_2__.Z,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:o,activeClassName:_,activeLinkClassName:n,extraAriaContext:i,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:s,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,a=t.disabledClassName,r=t.disabledLinkClassName,o=t.pageCount,_=t.className,n=t.containerClassName,i=t.previousLabel,s=t.previousClassName,l=t.previousLinkClassName,p=t.previousAriaLabel,c=t.prevRel,d=t.nextLabel,u=t.nextClassName,f=t.nextLinkClassName,g=t.nextAriaLabel,P=t.nextRel,E=this.state.selected,b=0===E,y=E===o-1,v="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(s)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),C="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(u)).concat(y?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),O="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(l)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),m="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(f)).concat(y?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),L=b?"true":"false",h=y?"true":"false";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:_||n},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:v},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:O,href:this.getElementHref(E-1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":L,"aria-label":p,rel:c},this.getEventListener(this.handlePreviousPage)),i)),this.pagination(),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:C},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:m,href:this.getElementHref(E+1),tabIndex:y?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":h,"aria-label":g,rel:P},this.getEventListener(this.handleNextPage)),d)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PaginationBoxView}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;_defineProperty(PaginationBoxView,"propTypes",{pageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired,pageRangeDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,marginPagesDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,previousLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,previousAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,nextAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().node]),hrefBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,hrefAllControls:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,onPageChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPageActive:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,initialPage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,forcePage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,disableInitialCallback:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,activeLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,extraAriaContext:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,eventListener:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,renderOnZeroPageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,selectedPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}),_defineProperty(PaginationBoxView,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PaginationBoxView,"PaginationBoxView","/home/yoan/work/oss/react-paginate/react_components/PaginationBoxView.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},351:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r,o=a(214);e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _=o.Z;const n=_;var i,s;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(_,"default","/home/yoan/work/oss/react-paginate/react_components/index.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},923:(e,t,a)=>{"use strict";var r,o,_;function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}a.d(t,{m:()=>n}),e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(n,"classNameIfDefined","/home/yoan/work/oss/react-paginate/react_components/utils.js"),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)},703:(e,t,a)=>{"use strict";var r=a(414);function o(){}function _(){}_.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,_,n){if(n!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:o};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__98__}},__webpack_module_cache__={};function __nested_webpack_require_21573__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](a,a.exports,__nested_webpack_require_21573__),a.loaded=!0,a.exports}__nested_webpack_require_21573__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __nested_webpack_require_21573__.d(t,{a:t}),t},__nested_webpack_require_21573__.d=(e,t)=>{for(var a in t)__nested_webpack_require_21573__.o(t,a)&&!__nested_webpack_require_21573__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__nested_webpack_require_21573__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__nested_webpack_require_21573__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__nested_webpack_require_21573__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__nested_webpack_require_21573__(351);return __webpack_exports__})()}));
//# sourceMappingURL=react-paginate.js.map

/***/ })

}]);