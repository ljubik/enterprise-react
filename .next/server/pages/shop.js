"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 3943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4511);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7822);
/* harmony import */ var components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8762);







const columns = {
    base: 2,
    md: 3,
    lg: 4,
    xl: 5
};
const Shop = ()=>{
    const { productListFiltered , productList , error  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ shop  })=>shop
    );
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        message: error.message
    }));
    if (!productList) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: 6,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shop__WEBPACK_IMPORTED_MODULE_4__/* .SearchBox */ .R, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                maxW: "7xl",
                mx: "auto",
                py: {
                    base: '6',
                    md: '8',
                    lg: '12'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {
                    columns: columns,
                    columnGap: {
                        base: '4',
                        md: '6'
                    },
                    rowGap: {
                        base: '16',
                        md: '20'
                    },
                    children: productListFiltered.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shop__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {
                            product: product
                        }, product.id)
                    )
                })
            })
        ]
    }));
};
Shop.getInitialProps = async ({ store  })=>{
    store.dispatch((0,modules_shop__WEBPACK_IMPORTED_MODULE_2__/* .triggerProductList */ .GM)(10));
    return {
        navigateAfterSaga: false,
        title: 'title#shop_page'
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4409:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

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
var __webpack_exports__ = __webpack_require__.X(0, [734,511,230], () => (__webpack_exec__(3943)));
module.exports = __webpack_exports__;

})();