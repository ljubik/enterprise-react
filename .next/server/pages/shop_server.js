"use strict";
(() => {
var exports = {};
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modules_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4511);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7822);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8286);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8762);










const columns = {
    base: 2,
    md: 3,
    lg: 4,
    xl: 5
};
const ShopServer = ({ isServer  })=>{
    const { productList , error  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ shop  })=>shop
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    // if this is the initial page load (isServer), dispatch the action in getServerSideProps
    //otherwise in useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isServer) {
            dispatch((0,modules_shop__WEBPACK_IMPORTED_MODULE_3__/* .triggerProductList */ .GM)(10));
        }
    }, []);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        message: error.message
    }));
    if (!productList) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        maxW: "7xl",
        mx: "auto",
        py: {
            base: '6',
            md: '8',
            lg: '12'
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
            columns: columns,
            columnGap: {
                base: '4',
                md: '6'
            },
            rowGap: {
                base: '16',
                md: '20'
            },
            children: productList.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shop__WEBPACK_IMPORTED_MODULE_5__/* .ProductCard */ .I, {
                    product: product
                }, product.id)
            )
        })
    }));
};
const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_6__/* .wrapper.getServerSideProps */ .Y.getServerSideProps((store)=>async ({ req  })=>{
        // we only run the call on the server is this is the initial first page load.
        // otherwise we use useEffect hook
        const isServer = !req.url.startsWith('/_next');
        if (isServer) {
            store.dispatch((0,modules_shop__WEBPACK_IMPORTED_MODULE_3__/* .triggerProductList */ .GM)(10));
            store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_7__.END);
            await store.sagaTask.toPromise();
        }
        return {
            props: {
                isServer,
                title: 'title#shop_page'
            }
        };
    }
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopServer);


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

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

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
var __webpack_exports__ = __webpack_require__.X(0, [734,511,96,289,286,230], () => (__webpack_exec__(419)));
module.exports = __webpack_exports__;

})();