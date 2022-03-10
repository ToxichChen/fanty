"use strict";
(globalThis["webpackChunkitrex"] = globalThis["webpackChunkitrex"] || []).push([["resources_js_hoc_LayoutProfileSettings_js"],{

/***/ "./resources/js/hoc/LayoutProfileSettings.js":
/*!***************************************************!*\
  !*** ./resources/js/hoc/LayoutProfileSettings.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/redux/useActionUsers */ "./resources/js/hooks/redux/useActionUsers.js");
/* harmony import */ var _hooks_redux_useActionAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/redux/useActionAlert */ "./resources/js/hooks/redux/useActionAlert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var LayoutProfileSettings = function LayoutProfileSettings(_ref) {
  var children = _ref.children;

  var _useActionUsers = (0,_hooks_redux_useActionUsers__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      profile = _useActionUsers.profile;

  var _useActionAlert = (0,_hooks_redux_useActionAlert__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      NotifyError = _useActionAlert.NotifyError;

  if (Object.keys(profile).length === 0) {
    NotifyError("Пожалуйста, перед началом игры авторизируйтесь!");
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
      to: "/formLogin"
    });
  }

  return children;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutProfileSettings);

/***/ })

}]);