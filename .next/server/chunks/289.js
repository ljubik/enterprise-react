"use strict";
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zX": () => (/* binding */ triggerUserInfo),
/* harmony export */   "EA": () => (/* binding */ user),
/* harmony export */   "DA": () => (/* binding */ userSagas)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9734);



const moduleName = 'user';
const GET_USER_TRIGGER = `${moduleName}/GET_USER_TRIGGER`;
const GET_USER_REQUEST = `${moduleName}/GET_USER_REQUEST`;
const GET_USER_SUCCESS = `${moduleName}/GET_USER_SUCCESS`;
const GET_USER_FAILURE = `${moduleName}/GET_USER_FAILURE`;
const triggerUserInfo = ()=>({
        type: GET_USER_TRIGGER
    })
;
const initialState = {
    loading: false,
    error: false,
    userInfo: false
};
function user(state = initialState, { type , result , error , payload  }) {
    switch(type){
        // this is only needed if you use getStaticProps like in pages/user_static.js
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:
            {
                if (payload.user.userInfo) {
                    return {
                        ...state,
                        ...payload.user
                    };
                }
                return state;
            }
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: result,
                error: false
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error
            };
        default:
            return state;
    }
}
const getUserInfoSaga = function*() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
        type: GET_USER_REQUEST
    });
    try {
        const { isOk , result , error  } = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getUserInfo */ .bG);
        if (isOk) {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_USER_SUCCESS,
                result
            });
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
                type: GET_USER_FAILURE,
                error
            });
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.cancel)();
        }
    } catch (error) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: GET_USER_FAILURE,
            error
        });
    }
};
const userSagas = function*() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(GET_USER_TRIGGER, getUserInfoSaga)
    ]);
};


/***/ })

};
;