"use strict";
exports.id = 96;
exports.ids = [96];
exports.modules = {

/***/ 9096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pS": () => (/* binding */ triggerUserCart),
/* harmony export */   "Nu": () => (/* binding */ cart),
/* harmony export */   "Np": () => (/* binding */ cartSagas)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9734);


const moduleName = 'cart';
const GET_USER_CART_TRIGGER = `${moduleName}/GET_USER_CART_TRIGGER`;
const GET_USER_CART_REQUEST = `${moduleName}/GET_USER_CART_REQUEST`;
const GET_USER_CART_SUCCESS = `${moduleName}/GET_USER_CART_SUCCESS`;
const GET_USER_CART_FAILURE = `${moduleName}/GET_USER_CART_FAILURE`;
const triggerUserCart = (isServer)=>({
        type: GET_USER_CART_TRIGGER,
        isServer
    })
;
const initialState = {
    loading: false,
    error: false,
    userCart: false,
    productList: false
};
function cart(state = initialState, action) {
    const { type , productList , userCart , error  } = action;
    switch(type){
        case GET_USER_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case GET_USER_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                productList,
                userCart,
                error: false
            };
        case GET_USER_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error
            };
        default:
            return state;
    }
}
const getUserCartSaga = function*() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: GET_USER_CART_REQUEST
    });
    try {
        const [result1, result2] = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
            (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(utils_api__WEBPACK_IMPORTED_MODULE_1__/* .getProductList */ .jw),
            (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(utils_api__WEBPACK_IMPORTED_MODULE_1__/* .getUserCart */ .WK)
        ]);
        const isOk = (result1 === null || result1 === void 0 ? void 0 : result1.isOk) && (result2 === null || result2 === void 0 ? void 0 : result2.isOk);
        const error = (result2 === null || result2 === void 0 ? void 0 : result2.error) || (result1 === null || result1 === void 0 ? void 0 : result1.error);
        if (isOk) {
            const productList = result1 === null || result1 === void 0 ? void 0 : result1.result.reduce((result, { id , ...rest })=>({
                    ...result,
                    [id]: rest
                })
            , {});
            const userCart = result2 === null || result2 === void 0 ? void 0 : result2.result;
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_USER_CART_SUCCESS,
                productList,
                userCart
            });
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_USER_CART_FAILURE,
                error
            });
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.cancel)();
        }
    } catch (error) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: GET_USER_CART_FAILURE,
            error
        });
    }
};
const cartSagas = function*() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(GET_USER_CART_TRIGGER, getUserCartSaga)
    ]);
};


/***/ })

};
;