"use strict";
exports.id = 230;
exports.ids = [230];
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

/***/ 7822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ shop_ProductCard),
  "R": () => (/* reexport */ shop_SearchBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/shop/Rating.js



const Rating = (props)=>{
    const { rating =0 , max =5 , size ='md'  } = props;
    const color = 'gray.300';
    const activeColor = 'green.500';
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
        spacing: "0.5",
        children: Array.from({
            length: max
        }).map((_, index)=>index + 1
        ).map((index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: fa_.FaStar,
                fontSize: size,
                color: index <= rating ? activeColor : color
            }, index)
        )
    }));
};
/* harmony default export */ const shop_Rating = (Rating);

;// CONCATENATED MODULE: ./src/components/shop/ProductCard.js




const ProductCard = (props)=>{
    const { t  } = useTranslation_default()('common');
    const { product  } = props;
    const { title , image , price , rating  } = product;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: (0,react_.useBreakpointValue)({
            base: '4',
            md: '5'
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                    ratio: 4 / 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: image,
                        alt: title,
                        draggable: "false",
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {}),
                        borderRadius: (0,react_.useBreakpointValue)({
                            base: 'md',
                            md: 'xl'
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                direction: "column",
                mb: 'auto !important',
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontWeight: "medium",
                    color: "gray.700",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "span",
                fontWeight: "medium",
                color: "gray.700",
                children: t('shop#price', {
                    price
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(shop_Rating, {
                        rating: rating === null || rating === void 0 ? void 0 : rating.rate,
                        size: "sm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "sm",
                        color: "gray.600",
                        children: t('shop#rating_count', {
                            count: rating.count
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                align: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    colorScheme: "green",
                    isFullWidth: true,
                    children: t('shop#add_to_cart')
                })
            })
        ]
    }));
};
/* harmony default export */ const shop_ProductCard = (ProductCard);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
// EXTERNAL MODULE: ./src/modules/shop.js
var shop = __webpack_require__(4511);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./src/components/shop/SearchBox.js








const SearchBox = ()=>{
    const { t  } = useTranslation_default()('common');
    const { searchString  } = (0,external_react_redux_.useSelector)(({ shop  })=>shop
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { handleSubmit , register , reset , formState: { errors , isSubmitting  } ,  } = (0,external_react_hook_form_.useForm)();
    const onSubmit = (values)=>{
        dispatch((0,shop/* triggerProductSearch */.mt)(values.search));
    };
    const clearSearch = ()=>{
        dispatch((0,shop/* clearProductSearch */.Ck)());
        reset();
    };
    // this is useful when we change the language
    (0,external_react_.useEffect)(()=>{
        if (!searchString) {
            reset();
        }
    }, [
        searchString
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isInvalid: errors.search,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        htmlFor: "search",
                        children: t('search#title_text')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchIcon, {
                                    color: "gray.300"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                id: "search",
                                placeholder: t('search#placeholder'),
                                ...register('search', {
                                    minLength: {
                                        value: 3,
                                        message: t('search#error_min_lenght')
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        children: errors.search && errors.search.message
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                mb: 6,
                mt: 4,
                colorScheme: "green",
                isLoading: isSubmitting,
                type: "submit",
                children: t('search#submit_button')
            }),
            searchString && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                p: 2,
                bg: "gray.100",
                align: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mr: 2,
                        children: t('search#result_text')
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "semibold",
                        mr: "auto",
                        children: searchString
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.CloseButton, {
                        onClick: clearSearch
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shop_SearchBox = (SearchBox);

;// CONCATENATED MODULE: ./src/components/shop/index.js




/***/ })

};
;