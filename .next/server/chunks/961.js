"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 8762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMessage = ({ message  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        status: "error",
        mt: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AlertIcon, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AlertTitle, {
                mr: 2,
                children: "Something went wrong"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AlertDescription, {
                children: message
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 9140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ user_CardHeader),
  "Z": () => (/* reexport */ user_Property)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/user/CardHeader.js


const CardHeader = (props)=>{
    const { title  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        align: "center",
        justify: "space-between",
        px: "6",
        py: "4",
        borderBottomWidth: "1px",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
            fontSize: "lg",
            children: title
        })
    }));
};
/* harmony default export */ const user_CardHeader = (CardHeader);

;// CONCATENATED MODULE: ./src/components/user/Property.js


const Property = (props)=>{
    const { label , value  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "dl",
        direction: {
            base: 'column',
            sm: 'row'
        },
        px: "6",
        py: "4",
        _even: {
            bg: 'gray.50'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "dt",
                minWidth: "180px",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "dd",
                fontWeight: "semibold",
                children: value
            })
        ]
    }));
};
/* harmony default export */ const user_Property = (Property);

;// CONCATENATED MODULE: ./src/components/user/index.js




/***/ })

};
;