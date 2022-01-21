"use strict";
exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 4511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ triggerProductList),
/* harmony export */   "mt": () => (/* binding */ triggerProductSearch),
/* harmony export */   "Ck": () => (/* binding */ clearProductSearch),
/* harmony export */   "Ri": () => (/* binding */ shop),
/* harmony export */   "pl": () => (/* binding */ shopSagas)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9734);


const moduleName = 'shop';
const GET_PRODUCT_LIST_TRIGGER = `${moduleName}/GET_PRODUCT_LIST_TRIGGER`;
const GET_PRODUCT_LIST_REQUEST = `${moduleName}/GET_PRODUCT_LIST_REQUEST`;
const GET_PRODUCT_LIST_SUCCESS = `${moduleName}/GET_PRODUCT_LIST_SUCCESS`;
const GET_PRODUCT_LIST_FAILURE = `${moduleName}/GET_PRODUCT_LIST_FAILURE`;
const SEARCH_PRODUCT_LIST_TRIGGER = `${moduleName}/SEARCH_PRODUCT_LIST_TRIGGER`;
const SEARCH_PRODUCT_LIST_SUCCESS = `${moduleName}/SEARCH_PRODUCT_LIST_SUCCESS`;
const SEARCH_PRODUCT_LIST_FAILURE = `${moduleName}/SEARCH_PRODUCT_LIST_FAILURE`;
const CLEAR_SEARCH = `${moduleName}/CLEAR_SEARCH`;
const triggerProductList = (limit)=>({
        type: GET_PRODUCT_LIST_TRIGGER,
        limit
    })
;
const triggerProductSearch = (searchString)=>({
        type: SEARCH_PRODUCT_LIST_TRIGGER,
        searchString
    })
;
const clearProductSearch = ()=>({
        type: CLEAR_SEARCH
    })
;
const initialState = {
    loading: false,
    error: false,
    productList: false,
    searchString: false,
    productListFiltered: []
};
function shop(state = initialState, { type , result , searchString , error  }) {
    switch(type){
        case GET_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                searchString: false,
                loading: true,
                error: false
            };
        case GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                productList: result,
                productListFiltered: result,
                error: false
            };
        case GET_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error
            };
        case SEARCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productListFiltered: result,
                searchString,
                error: false
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                productListFiltered: state.productList,
                searchString: false
            };
        default:
            return state;
    }
}
const searchProductSaga = function*({ searchString  }) {
    try {
        const productList = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.select)((state)=>state.shop.productList
        );
        const result = productList.filter((el)=>el.title.includes(searchString)
        );
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: SEARCH_PRODUCT_LIST_SUCCESS,
            result,
            searchString
        });
    } catch (error) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: SEARCH_PRODUCT_LIST_FAILURE,
            error
        });
    }
};
const getProductListSaga = function*({ limit  }) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: GET_PRODUCT_LIST_REQUEST
    });
    try {
        const { isOk , result , error  } = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(utils_api__WEBPACK_IMPORTED_MODULE_1__/* .getProductList */ .jw, limit);
        if (isOk) {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_PRODUCT_LIST_SUCCESS,
                result
            });
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_PRODUCT_LIST_FAILURE,
                error
            });
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.cancel)();
        }
    } catch (error) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: GET_PRODUCT_LIST_FAILURE,
            error
        });
    }
};
const shopSagas = function*() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(GET_PRODUCT_LIST_TRIGGER, getProductListSaga),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(SEARCH_PRODUCT_LIST_TRIGGER, searchProductSaga), 
    ]);
};


/***/ })

};
;