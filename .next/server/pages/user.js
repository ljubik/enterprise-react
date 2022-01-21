"use strict";
(() => {
var exports = {};
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 2303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9289);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9140);
/* harmony import */ var components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8762);







const User = ()=>{
    const { userInfo , error  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ user  })=>user
    );
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('common');
    const { email , phone , name , address  } = userInfo;
    const formatFullname = `${(name === null || name === void 0 ? void 0 : name.firstname) || ''}  ${(name === null || name === void 0 ? void 0 : name.lastname) || ''}`;
    const formatAddress = `${(address === null || address === void 0 ? void 0 : address.zipcode) || ''}  ${(address === null || address === void 0 ? void 0 : address.city) || ''}, ${(address === null || address === void 0 ? void 0 : address.street) || ''}`;
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        message: error.message
    }));
    if (!userInfo) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
            as: "section",
            bg: "gray.100",
            py: "8",
            px: {
                base: '4',
                md: '8'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                maxW: "3xl",
                mx: "auto",
                bg: "white",
                rounded: {
                    md: 'lg'
                },
                shadow: "base",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_user__WEBPACK_IMPORTED_MODULE_5__/* .CardHeader */ .O, {
                        title: t('user#title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_user__WEBPACK_IMPORTED_MODULE_5__/* .Property */ .Z, {
                                label: t('user#name'),
                                value: formatFullname
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_user__WEBPACK_IMPORTED_MODULE_5__/* .Property */ .Z, {
                                label: t('user#email'),
                                value: email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_user__WEBPACK_IMPORTED_MODULE_5__/* .Property */ .Z, {
                                label: t('user#phone'),
                                value: phone
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_user__WEBPACK_IMPORTED_MODULE_5__/* .Property */ .Z, {
                                label: t('user#address'),
                                value: formatAddress
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
User.getInitialProps = async ({ store  })=>{
    store.dispatch((0,modules_user__WEBPACK_IMPORTED_MODULE_2__/* .triggerUserInfo */ .zX)());
    return {
        title: 'title#user_page'
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [734,289,961], () => (__webpack_exec__(2303)));
module.exports = __webpack_exports__;

})();