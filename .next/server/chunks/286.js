"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 5699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ SET_IS_SERVER),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4511);
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9289);
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9096);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);





const SET_IS_SERVER = 'SET_IS_SERVER';
// this is to set a flag for initial server renders
function serverCheck(state = {
    isServer: false
}, action) {
    const { type  } = action;
    switch(type){
        case SET_IS_SERVER:
            {
                return {
                    ...state,
                    isServer: true
                };
            }
        default:
            return state;
    }
}
//We hydrate only if this is the initial server render
function hydrate(state = {}, action) {
    const { type  } = action;
    switch(type){
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.HYDRATE:
            {
                if (action.payload.serverCheck.isServer) {
                    return {
                        ...state,
                        ...action.payload
                    };
                }
                return state;
            }
        default:
            return state;
    }
}
const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    serverCheck,
    shop: _modules_shop__WEBPACK_IMPORTED_MODULE_1__/* .shop */ .Ri,
    user: _modules_user__WEBPACK_IMPORTED_MODULE_2__/* .user */ .EA,
    cart: _modules_cart__WEBPACK_IMPORTED_MODULE_3__/* .cart */ .Nu
});
function rootReducer(state, action) {
    const intermediateState = combinedReducer(state, action);
    return hydrate(intermediateState, action);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);


/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// UNUSED EXPORTS: makeStore

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/redux/reducer.js
var reducer = __webpack_require__(5699);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/modules/shop.js
var shop = __webpack_require__(4511);
// EXTERNAL MODULE: ./src/modules/user.js
var user = __webpack_require__(9289);
// EXTERNAL MODULE: ./src/modules/cart.js
var cart = __webpack_require__(9096);
;// CONCATENATED MODULE: ./src/redux/saga.js




const rootSaga = function*() {
    yield (0,effects_.all)([
        (0,shop/* shopSagas */.pl)(),
        (0,user/* userSagas */.DA)(),
        (0,cart/* cartSagas */.Np)()
    ]);
};
/* harmony default export */ const saga = (rootSaga);

;// CONCATENATED MODULE: ./src/redux/store.js





const bindMiddleware = (middleware)=>{
    if (false) {}
    return (0,external_redux_.applyMiddleware)(...middleware);
};
const makeStore = (context)=>{
    const sagaMiddleware = external_redux_saga_default()();
    const store = (0,external_redux_.createStore)(reducer/* default */.Z, bindMiddleware([
        sagaMiddleware
    ]));
    store.sagaTask = sagaMiddleware.run(saga);
    return store;
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
    debug: false
});


/***/ })

};
;