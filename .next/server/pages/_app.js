(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de/common": [
		1545,
		545
	],
	"./de/common.json": [
		1545,
		545
	],
	"./en/common": [
		464,
		464
	],
	"./en/common.json": [
		464,
		464
	],
	"./ua/common": [
		950,
		950
	],
	"./ua/common.json": [
		950,
		950
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7919:
/***/ ((module) => {

"use strict";

module.exports = {
    locales: [
        'en',
        'de',
        'ua'
    ],
    defaultLocale: 'ua',
    localeDetection: false,
    pages: {
        '*': [
            'common'
        ]
    }
};


/***/ }),

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(7919);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(6239);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/redux/store.js + 1 modules
var store = __webpack_require__(8286);
// EXTERNAL MODULE: ./src/redux/reducer.js
var reducer = __webpack_require__(5699);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5657);
;// CONCATENATED MODULE: ./src/components/menu/NavMenu.js




const StyledLink = (0,react_.chakra)(react_.Link, {
    baseStyle: {
        p: 2,
        fontWeight: 'semibold',
        color: 'green.800',
        outline: 'none'
    }
});
const NavMenu = ({ t  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/shop",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: t('menu#shop')
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/cart",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: t('menu#cart')
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/user",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: t('menu#user')
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/shop_server",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: t('menu#shop_server')
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/user_static",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: t('menu#user_static')
                })
            })
        ]
    })
;
/* harmony default export */ const menu_NavMenu = (NavMenu);

;// CONCATENATED MODULE: ./src/components/menu/LangSwitcher.js




const LangSwitcher_StyledLink = (0,react_.chakra)(react_.Link, {
    baseStyle: {
        p: 1,
        fontWeight: 'bold'
    }
});
const LangSwitcher = ({ lang  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { pathname , asPath , query  } = router;
    const changeLanguage = (locale)=>{
        router.push({
            pathname,
            query
        }, asPath, {
            locale
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            lang === 'en' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "span",
                        color: "green.400",
                        fontWeight: "bold",
                        p: 1,
                        children: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('de')
                        ,
                        children: "DE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('ua')
                        ,
                        children: "UA"
                    })
                ]
            }),
            lang === 'de' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('en')
                        ,
                        children: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "span",
                        color: "green.400",
                        fontWeight: "bold",
                        p: 1,
                        children: "DE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('ua')
                        ,
                        children: "UA"
                    })
                ]
            }),
            lang === 'ua' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('en')
                        ,
                        children: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LangSwitcher_StyledLink, {
                        color: "green.800",
                        onClick: ()=>changeLanguage('de')
                        ,
                        children: "DE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "span",
                        color: "green.400",
                        fontWeight: "bold",
                        p: 1,
                        children: "UA"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const menu_LangSwitcher = (LangSwitcher);

;// CONCATENATED MODULE: ./src/components/menu/index.js



;// CONCATENATED MODULE: ./src/components/header.js








const Header = (props)=>{
    const { t , lang  } = useTranslation_default()('common');
    const { 0: display , 1: changeDisplay  } = (0,external_react_.useState)('none');
    const router = (0,router_namespaceObject.useRouter)();
    // hiding the menu after navigation
    (0,external_react_.useEffect)(()=>{
        router.events.on('routeChangeStart', ()=>changeDisplay('none')
        );
        return ()=>{
            router.events.off('routeChangeStart', ()=>changeDisplay('none')
            );
        };
    }, []);
    const toggleMenu = ()=>{
        changeDisplay(display === 'none' ? 'flex' : 'none');
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                shrink: 0,
                bg: "green.50",
                h: 12,
                align: "center",
                display: {
                    base: 'none',
                    md: 'flex',
                    lg: 'flex'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                    maxW: "container.xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        align: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mr: "auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu_NavMenu, {
                                    t: t
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                isExternal: true,
                                mr: 6,
                                href: "https://github.com/ljubik/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                    size: 22,
                                    color: "#4A5568"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mr: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu_LangSwitcher, {
                                    t: t,
                                    lang: lang
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                shrink: 0,
                bg: "green.50",
                h: 12,
                align: "center",
                display: {
                    base: 'flex',
                    md: 'none'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                    colorScheme: "green",
                    size: "sm",
                    ml: 2,
                    "aria-label": "Open Menu",
                    icon: display === 'none' ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseIcon, {}),
                    display: [
                        'flex',
                        'flex',
                        'none',
                        'none'
                    ],
                    onClick: toggleMenu
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                shrink: 0,
                position: "absolute",
                w: 250,
                h: "100vh",
                bg: "green.50",
                direction: "column",
                display: {
                    base: display,
                    md: 'none'
                },
                zIndex: 20,
                children: /*#__PURE__*/ jsx_runtime_.jsx(menu_NavMenu, {
                    t: t
                })
            })
        ]
    }));
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/footer.js



const Footer = ()=>{
    const { t  } = useTranslation_default()('common');
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        shrink: 0,
        bg: "gray.700",
        h: 16,
        align: "center",
        color: "white",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            maxW: "container.xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Center, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mr: 4,
                        children: "\xa9 2022"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mr: 4,
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mr: 4,
                        children: t('footer#app_text')
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mr: 4,
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                        href: "mailto:slaval@mail.ch",
                        children: "slaval@mail.ch"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/components/layout.js






const Layout = (props)=>{
    const { t  } = useTranslation_default()('common');
    const { children , title  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: t(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                direction: "column",
                h: "100vh",
                outline: "1px solid red",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                        maxW: "container.xl",
                        mb: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: external "focus-visible/dist/focus-visible"
const focus_visible_namespaceObject = require("focus-visible/dist/focus-visible");
;// CONCATENATED MODULE: ./src/pages/_app.js











class WrappedApp extends app["default"] {
    static getInitialProps = store/* wrapper.getInitialAppProps */.Y.getInitialAppProps((store)=>{
        return async ({ Component , ctx  })=>{
            var ref, ref1;
            // 1. Wait for all page actions to dispatch
            const pageProps = {
                ...Component.getInitialProps ? await Component.getInitialProps({
                    ...ctx,
                    store
                }) : {}
            };
            // 2.1 Stop the saga if on server
            if ((ctx.req || pageProps.navigateAfterSaga) && Component.getInitialProps) {
                store.dispatch(external_redux_saga_.END);
                await store.sagaTask.toPromise();
                // used in hydration reducer
                store.dispatch({
                    type: reducer/* SET_IS_SERVER */.U
                });
            }
            // 2.1 Stop the saga if on server and getServerSideProps is used
            const isServer = !((ref = ctx.req) === null || ref === void 0 ? void 0 : (ref1 = ref.url) === null || ref1 === void 0 ? void 0 : ref1.startsWith('/_next'));
            if (isServer && !Component.getInitialProps) {
                // used in hydration reducer
                store.dispatch({
                    type: reducer/* SET_IS_SERVER */.U
                });
            }
            // 3. Return props
            return {
                pageProps
            };
        };
    });
    render() {
        const { Component , pageProps  } = this.props;
        const { title  } = pageProps;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                        title: title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        }));
    }
}
const __Page_Next_Translate__ = store/* wrapper.withRedux */.Y.withRedux(WrappedApp);
/* harmony default export */ const _app = (appWithI18n_default()(__Page_Next_Translate__, {
    ...(i18n_default()),
    isLoader: true,
    skipInitialProps: false,
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default
        )
}));


/***/ }),

/***/ 4513:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 866:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [886,838,734,511,96,289,286], () => (__webpack_exec__(3310)));
module.exports = __webpack_exports__;

})();