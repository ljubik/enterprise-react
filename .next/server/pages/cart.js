"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
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

/***/ 8868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/modules/cart.js
var cart = __webpack_require__(9096);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./src/components/cart/CartProductMeta.js




const CartProductMeta = (props)=>{
    const { t  } = useTranslation_default()('common');
    const { isGiftWrapping , image , name  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        direction: "row",
        spacing: "5",
        width: "full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                rounded: "lg",
                width: "100px",
                fit: "cover",
                src: image,
                alt: name,
                draggable: "false",
                loading: "lazy"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                pt: "4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                        spacing: "0.5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "medium",
                            children: name
                        })
                    }),
                    isGiftWrapping && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        spacing: "1",
                        mt: "3",
                        color: "gray.600",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                as: fi_namespaceObject.FiGift,
                                boxSize: "4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                fontSize: "sm",
                                textDecoration: "underline",
                                children: t('cart#add_gift')
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const cart_CartProductMeta = (CartProductMeta);

;// CONCATENATED MODULE: ./src/components/cart/CartItem.js




const QuantitySelect = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Select, {
        maxW: "64px",
        "aria-label": "Select quantity",
        focusBorderColor: "blue.500",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "1",
                children: "1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "2",
                children: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "3",
                children: "3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "4",
                children: "4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "5",
                children: "5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "6",
                children: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: "7",
                children: "7"
            })
        ]
    }));
};
const CartItem = (props)=>{
    const { t  } = useTranslation_default()('common');
    const { quantity , item: { title , image , price  } ,  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: {
            base: 'column',
            md: 'row'
        },
        justify: "space-between",
        align: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(cart_CartProductMeta, {
                name: title,
                image: image,
                isGiftWrapping: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                width: "full",
                ml: 5,
                justify: "space-between",
                display: {
                    base: 'none',
                    md: 'flex'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(QuantitySelect, {
                        value: quantity,
                        onChange: ()=>{}
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "span",
                        fontWeight: "medium",
                        color: "gray.700",
                        children: t('shop#price', {
                            price
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.CloseButton, {
                        "aria-label": `Delete ${title} from cart`,
                        onClick: ()=>{}
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                mt: "4",
                align: "center",
                width: "full",
                justify: "space-between",
                display: {
                    base: 'flex',
                    md: 'none'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                        fontSize: "sm",
                        textDecor: "underline",
                        children: "Delete"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(QuantitySelect, {
                        value: quantity,
                        onChange: ()=>{}
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "span",
                        fontWeight: "medium",
                        color: "gray.700",
                        children: t('shop#price', {
                            price
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const cart_CartItem = (CartItem);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/cart/CartOrderSummary.js




const OrderSummaryItem = (props)=>{
    const { label , value , children  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        justify: "space-between",
        fontSize: "sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: "medium",
                color: "gray.600",
                children: label
            }),
            value ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: "medium",
                children: value
            }) : children
        ]
    }));
};
const CartOrderSummary = ({ priceTotal  })=>{
    const { t  } = useTranslation_default()('common');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "8",
        borderWidth: "1px",
        rounded: "lg",
        padding: "8",
        width: "full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                size: "md",
                children: [
                    " ",
                    t('cart#order_summary')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                spacing: "6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(OrderSummaryItem, {
                        label: t('cart#subtotal'),
                        value: t('shop#price', {
                            price: priceTotal
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OrderSummaryItem, {
                        label: t('cart#shipping_tax'),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: "#",
                            textDecor: "underline",
                            children: t('cart#calculate_shipping')
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OrderSummaryItem, {
                        label: t('cart#coupon_code'),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: "#",
                            textDecor: "underline",
                            children: t('cart#add_coupon')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        justify: "space-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "lg",
                                fontWeight: "semibold",
                                children: t('cart#total')
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "xl",
                                fontWeight: "extrabold",
                                children: t('shop#price', {
                                    price: priceTotal
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "blue",
                size: "lg",
                fontSize: "md",
                rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowRight, {}),
                children: t('cart#checkout')
            })
        ]
    }));
};
/* harmony default export */ const cart_CartOrderSummary = (CartOrderSummary);

;// CONCATENATED MODULE: ./src/components/cart/index.js



// EXTERNAL MODULE: ./src/components/ErrorMessage.js
var ErrorMessage = __webpack_require__(8762);
;// CONCATENATED MODULE: ./src/pages/cart.js







const Cart = ()=>{
    const { userCart , productList , error  } = (0,external_react_redux_.useSelector)(({ cart  })=>cart
    );
    const { t  } = useTranslation_default()('common');
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
        message: error.message
    }));
    if (!userCart) return null;
    const cartData = userCart === null || userCart === void 0 ? void 0 : userCart.products;
    const productCount = cartData === null || cartData === void 0 ? void 0 : cartData.length;
    const priceTotal = cartData ? cartData.reduce((sum, item)=>sum + productList[item.productId].price
    , 0) : null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        maxW: {
            base: '3xl',
            lg: '7xl'
        },
        mx: "auto",
        px: {
            base: '8',
            md: '12'
        },
        py: {
            base: '8',
            md: '12'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            direction: {
                base: 'column',
                lg: 'row'
            },
            align: {
                lg: 'flex-start'
            },
            spacing: {
                base: '8',
                md: '16'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    spacing: {
                        base: '8',
                        md: '10'
                    },
                    flex: "2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            fontSize: "2xl",
                            fontWeight: "extrabold",
                            children: t('cart#product_count', {
                                productCount
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            spacing: "6",
                            children: cartData.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(cart_CartItem, {
                                    quantity: item.quantity,
                                    item: productList[item.productId]
                                }, item.productId)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    direction: "column",
                    align: "center",
                    flex: "1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(cart_CartOrderSummary, {
                        priceTotal: priceTotal
                    })
                })
            ]
        })
    }));
};
Cart.getInitialProps = async ({ store  })=>{
    store.dispatch((0,cart/* triggerUserCart */.pS)());
    return {
        navigateAfterSaga: false,
        title: 'title#cart_page'
    };
};
/* harmony default export */ const pages_cart = (Cart);


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
var __webpack_exports__ = __webpack_require__.X(0, [734,96], () => (__webpack_exec__(8868)));
module.exports = __webpack_exports__;

})();