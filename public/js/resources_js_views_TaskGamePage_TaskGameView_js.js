"use strict";
(globalThis["webpackChunkitrex"] = globalThis["webpackChunkitrex"] || []).push([["resources_js_views_TaskGamePage_TaskGameView_js"],{

/***/ "./resources/js/views/TaskGamePage/TaskGameView.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/TaskGamePage/TaskGameView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/components/index.js");
/* harmony import */ var _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/bg/bg-image.jpg */ "./resources/js/assets/bg/bg-image.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TaskGameView = function TaskGameView(_ref) {
  var title = _ref.title;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = title || '';
  }, [title]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.TaskGamePage, {
      title: "\u0410\u043D\u0434\u0440\u0435\u0439",
      text: "\u0422\u044B \u0446\u0435\u043B\u0443\u0435\u0448\u044C \u0435\u0451 \u0432 5 \u043C\u0435\u0441\u0442 \u043F\u043E \u0441\u0432\u043E\u0435\u043C\u0443 \u0432\u044B\u0431\u043E\u0440\u0443, \u0430 \u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043F\u043E\u0446\u0435\u043B\u0443\u0435\u043C \u0432 \u0442\u0435 \u0436\u0435 \u043C\u0435\u0441\u0442\u0430",
      img: _assets_bg_bg_image_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
      isTime: true,
      isTimeDuration: 20,
      level: "level4"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskGameView);

/***/ })

}]);