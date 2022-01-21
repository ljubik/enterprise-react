"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 9734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jw": () => (/* binding */ getProductList),
  "WK": () => (/* binding */ getUserCart),
  "bG": () => (/* binding */ getUserInfo)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(9103);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);
;// CONCATENATED MODULE: ./src/config/consts.js
const API_URL = 'https://fakestoreapi.com';
const NETWORK_TIMEOUT = 10000;

;// CONCATENATED MODULE: ./src/utils/makeRequest.js
// wrapper around axios to add some unification and error handling



const fetchData = async (options)=>{
    try {
        const result = await external_axios_default()(options);
        return {
            isOk: true,
            result: result.data
        };
    } catch (error) {
        if (error.response) {
            return {
                isOk: false,
                error: {
                    message: error.message,
                    status: error.response.status
                }
            };
        } else if (error.request) {
            return {
                isOk: false,
                error: {
                    message: error.message
                }
            };
        } else {
            return {
                isOk: false,
                error: {
                    message: error.message
                }
            };
        }
    }
};
const makeRequest = ({ url: fullUrl , method , queryParams , bodyObj  })=>{
    const { url , query  } = external_query_string_default().parseUrl(fullUrl);
    const newQueryString = external_query_string_default().stringify({
        ...query,
        ...queryParams
    });
    const newURL = newQueryString ? `${url}?${newQueryString}` : url;
    return fetchData({
        url: newURL,
        method,
        data: bodyObj ? JSON.stringify(bodyObj) : null,
        timeout: NETWORK_TIMEOUT
    });
};
/* harmony default export */ const utils_makeRequest = (makeRequest);

;// CONCATENATED MODULE: ./src/utils/api.js


const getProductList = (limit)=>utils_makeRequest({
        url: limit ? `${API_URL}/products?limit=${limit}` : `${API_URL}/products`,
        method: 'GET'
    })
;
const getUserInfo = ()=>utils_makeRequest({
        url: `${API_URL}/users/1`,
        method: 'GET'
    })
;
const getUserCart = ()=>utils_makeRequest({
        url: `${API_URL}/carts/1`,
        method: 'GET'
    })
;


/***/ })

};
;