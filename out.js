!function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function(n) {
            return e[n];
        }.bind(null, o));
        return r;
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "dist/", t(t.s = 455);
}({
    1: function(e, n) {
        e.exports = function(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    18: function(e, n) {
        function t(n) {
            return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
        }
        e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    30: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r;
        });
        var r = {
            GLOBAL: 3,
            VERTICAL: 14,
            BIZ_SPECIFIC: 19,
            S1S: 20,
            S1S_VERTICAL: 22,
            HOME_TOP_ENTRY: 42,
            HOME_TOP_MORE_ENTRY: 52,
            WXAPP: 201,
            GLOBAL_HISTORY: 101,
            GLOBAL_RECOMMEND: 102,
            GLOBAL_FESTIVAL: 131
        };
    },
    31: function(e, n, t) {
        "use strict";
        function r(e) {
            return "__Preload_Data_".concat(e, "__");
        }
        function o(e) {
            return delete window[r(e)], !0;
        }
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "a", function() {
            return o;
        });
    },
    455: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(18), o = t.n(r);
        function a() {
            var e = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var t = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" == n ? t : 3 & t | 8).toString(16);
            });
        }
        var i = t(30);
        function c(e) {
            try {
                return decodeURIComponent(e);
            } catch (n) {
                return e;
            }
        }
        var s = function() {
            var e = function(e) {
                for (var n = {}, t = e.split("&"), r = 0; r < t.length; r++) {
                    var o = t[r].split("=");
                    if (void 0 === n[o[0]]) try {
                        n[o[0]] = decodeURIComponent(o[1]);
                    } catch (i) {
                        n[o[0]] = o[1];
                    } else if ("string" == typeof n[o[0]]) {
                        var a = [ n[o[0]], o[1] ];
                        n[o[0]] = a;
                    } else n[o[0]].push(o[1]);
                }
                return n;
            }(window.location.search.substring(1));
            e.scene = +e.scene || i.a.S1S, e.sceneActionType = +e.sceneActionType || 0, 
            e.version = +e.version || 80010365, e.isPreload = +e.isPreload || 0;
            var n = (Array.isArray(e.scene) ? +e.scene.pop() : +e.scene) || 0, t = c(e.platform || "iOS").toLowerCase();
            "iphone" === t && (t = "ios");
            var r = function() {
                if (e.extParams) try {
                    var n = JSON.parse(c(e.extParams));
                    return "0:null::" === n.parentSearchID && (n.parentSearchID = ""), 
                    n.parentSearchID && (n.crossExtReqParams = n.crossExtReqParams || (e.crossExtReqParams ? JSON.parse(c(e.crossExtReqParams)) : "") || [], 
                    n.crossExtReqParams.push({
                        key: "parentSearchID",
                        textValue: n.parentSearchID
                    })), n;
                } catch (t) {
                    return {};
                }
                return {};
            }(), o = function() {
                if (e.thirdExtParam) try {
                    return JSON.parse(c(e.thirdExtParam));
                } catch (n) {
                    return null;
                }
                return null;
            }();
            function a(e) {
                return o && void 0 !== o[e] ? o[e] : void 0 !== r[e] ? r[e] : void 0;
            }
            function s(n) {
                return void 0 !== a(n) ? a(n) : void 0 !== e[n] ? e[n] : void 0;
            }
            var d = +s("type") || 0, u = function() {
                var e = s("crossExtReqParams");
                if (!Array.isArray(e)) try {
                    return JSON.parse(e);
                } catch (n) {
                    return [];
                }
                return e;
            }(), p = function() {
                if (r.parentSearchID) return r.parentSearchID;
                if (u) {
                    var e = u.filter(function(e) {
                        return "parentSearchID" === e.key && e.textValue;
                    })[0];
                    return e ? e.textValue : "";
                }
                return "";
            }(), l = function(e) {
                var n = e.split(":");
                return n.length ? +n[0] : 0;
            }(p), y = function() {
                if (void 0 !== e.isHomePage && void 0 === a("isHomePage")) {
                    var t = JSON.parse(e.isHomePage || 0) ? 1 : 0;
                    switch (n) {
                      case i.a.BIZ_SPECIFIC:
                        0 !== d && (t = 0);
                        break;

                      case i.a.VERTICAL:
                      case i.a.S1S_VERTICAL:
                      case i.a.HOME_TOP_MORE_ENTRY:
                      case i.a.HOME_TOP_ENTRY:
                      case i.a.WXAPP:
                        t = 0;
                        break;

                      case i.a.GLOBAL:
                    }
                    return t;
                }
                return JSON.parse(s("isHomePage") || 0) ? 1 : 0;
            }(), f = e.query || "", w = +e.wechatVersion || 0, S = {
                ios: "ios" === t,
                android: "android" === t,
                windows: "windows" === t,
                mac: "mac" === t,
                mobile: [ "ios", "android" ].includes(t),
                pc: [ "windows", "mac" ].includes(t),
                version: e.systemVersion
            }, h = {
                value: e.pass_key,
                validTime: e.pass_key_valid_time
            };
            return {
                queryString: e,
                query: f instanceof Array ? f[0] : f,
                lang: e.lang || "zh_CN",
                version: +e.version || 0,
                wechatVersion: w,
                scene: n,
                type: d,
                netType: e.netType,
                platform: t,
                os: S,
                crossExtReqParams: u || [],
                subType: +s("subType") || 0,
                isHomePage: y,
                parentSearchID: p,
                parentType: l,
                sugId: e.sugId || "",
                searchId: e.searchId || e.searchID || "",
                sessionId: e.sessionId || e.sessionid || "",
                subSessionId: e.subSessionId || "",
                sceneActionType: +e.sceneActionType || 1,
                returnQuery: "",
                isSupportAdIdInfo: "ios" === t && w >= 402660352 || "android" === t && w >= 671095856,
                adIdInfoKey: "ios" === t ? "AdCommonDeviceInfo" : "AdCommonDeviceId",
                isSupportHttpSearch: h.value && h.validTime,
                passKey: h,
                getBase: function() {
                    return {
                        searchId: this.searchId,
                        parentSearchID: this.parentSearchID,
                        parentType: this.parentType,
                        query: this.query,
                        scene: this.scene,
                        sessionId: this.sessionId,
                        subSessionId: this.subSessionId,
                        type: this.type,
                        subType: this.subType,
                        wechatVersion: this.wechatVersion,
                        version: this.version,
                        isHomePage: this.isHomePage,
                        returnQuery: this.returnQuery
                    };
                }
            };
        }();
        function d(e) {
            e.timeStamp || (e.timeStamp = Date.now()), function(e, n) {
                window.Report ? "function" == typeof window.Report[e] ? window.Report[e](n) : "Unknown action '".concat(e, "' for Report") : (window.__storeReportOptions__ || (window.__storeReportOptions__ = []), 
                window.__storeReportOptions__.push({
                    action: e,
                    option: n
                }));
            }("reportEventTrack", e);
        }
        function u(e) {
            var n = e.scene, t = e.type;
            return -1 !== [ i.a.GLOBAL, i.a.GLOBAL_HISTORY, i.a.GLOBAL_RECOMMEND, i.a.GLOBAL_FESTIVAL ].indexOf(+n) && 8 != t;
        }
        window.bridgeEventCallbacks = {};
        var p = {};
        document.addEventListener("WeixinJSBridgeReady", function() {
            console.warn("WeixinJSBridgeReady readyEventTime:".concat(Date.now(), ", typeof WeixinJSBridge:").concat(o()(window.WeixinJSBridge))), 
            d({
                actionType: 20
            });
        }, !1);
        var l = {
            hasWebSearchJSApi: function() {
                return "object" === o()(window.webSearchJSApi);
            },
            isReady: function() {
                return "object" == ("undefined" == typeof WeixinJSBridge ? "undefined" : o()(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke;
            },
            onReady: function(e) {
                this.isReady() ? e() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e), 
                document.attachEvent("onWeixinJSBridgeReady", e));
            },
            invoke: function(e, n, t) {
                console.warn("[preloadScript bridgeInvoke] ".concat(e));
                var r = this, o = a();
                return p[o] = 1, window.InExpMigrateGetSearchJSApi && [ "getSearchData" ].includes(e) && window.webSearchJSApi && "function" == typeof window.webSearchJSApi[e] ? (console.warn("[preloadScript invoke]通过webSearchJSApi调用".concat(e, "方法，参数为："), n), 
                window.webSearchJSApi[e](JSON.stringify(n)), o) : (r.onReady(function() {
                    p[o] && window.WeixinJSBridge && (WeixinJSBridge.invoke(e, n || {}, function(e) {
                        t && t(e);
                    }), r.delInvoke(o));
                }), o);
            },
            delInvoke: function(e) {
                delete p[e];
            },
            listen: function(e, n, t) {
                if (console.warn("[preloadScript bridgeListen] ".concat(e)), "onSearchDataReady" !== e || u(s)) {
                    if (n) {
                        var r = function(r) {
                            t || (window.bridgeEventCallbacks[e] || (window.bridgeEventCallbacks[e] = []), 
                            window.bridgeEventCallbacks[e].includes(n) || window.bridgeEventCallbacks[e].push(n)), 
                            "webSearchJSApi" === r ? window[e.replace(/:/g, "_")] = function(e) {
                                return n(e, r);
                            } : !window.__BRIDGE_EVENT_DID_LISTEN__ && window.WeixinJSBridge && WeixinJSBridge.on(e, function(e) {
                                return n(e, r);
                            });
                        };
                        this.hasWebSearchJSApi() && [ "onPermanentDataReady" ].includes(e) ? r("webSearchJSApi") : (this.hasWebSearchJSApi() && [ "onSearchDataReady", "onUiInit" ].includes(e) && r("webSearchJSApi"), 
                        this.onReady(function() {
                            r("WeixinJSBridge");
                        }));
                    }
                } else d({
                    actionType: 2e3
                });
            }
        }, y = {
            adCommonDeviceInfo: localStorage.getItem("websearch:adCommonDeviceInfo") || ""
        };
        var f = t(1), w = t.n(f), S = t(31);
        function h(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function g(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? h(Object(t), !0).forEach(function(n) {
                    w()(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        var v = null, m = "";
        l.listen("onSearchDataReady", function(e, n) {
            if (console.warn("[preloadScripts/preGetData] getResult from ".concat(n), e.requestId), 
            v && e.requestId === m) {
                var t = Date.now();
                e.isPreGetData = 1, window[Object(S.b)("resultData")] = e, v(e), 
                d({
                    offset: 0,
                    requestId: e.requestId,
                    actionType: 8,
                    timeStamp: t
                });
            }
        });
        var b = !1;
        function I(e, n) {
            for (var t in e = Object.assign({}, e), n) "number" == typeof e[t] ? e[t] = Number(n[t]) : "string" == typeof e[t] ? e[t] = String(n[t]) : e[t] = n[t];
            return e;
        }
        window.earlyBridgeEvents = [];
        var x = {
            onHisReady: "onSearchHistoryReady",
            onInputChange: "onSearchInputChange",
            onInputConfirm: "onSearchInputConfirm",
            onTabSwitch: "switchToTabSearch",
            onSearchOperate: "onSearchOperate",
            onTeachReady: "onTeachSearchDataReady",
            onInputFocus: "onFocusSearchInput",
            onSugReady: "onSearchSuggestionDataReady",
            onWebviewPause: "onWebviewPause",
            onWebviewResume: "onWebviewResume",
            onChatSearchDataReady: "onChatSearchDataReady",
            onClientNavAction: "onClientNavAction",
            onClientShadowClick: "onNavBarShadowManuallyHidden",
            onMusicStatusChanged: "onMusicStatusChanged",
            onSelectContact: "onSelectContact",
            onNewQuery: "onNewQuery",
            onNativeButtonClicked: "onNativeButtonClicked",
            onGetKeyboardHeight: "onGetKeyboardHeight",
            onWidgetChanged: "onSearchWAWidgetAttrChanged",
            onGetVertSearchEntriesData: "onGetVertSearchEntriesData",
            onPermanentDataReady: "onPermanentDataReady",
            onDeviceMotionFired: "onDeviceMotionFired",
            onImageReady: "onSearchImageListReady",
            onUiInit: "onUiInit",
            onCommonCgiReady: "onSearchWebQueryReady"
        };
        console.warn("Inter PreGetData.js"), s.os.mobile && function() {
            console.warn("pollingCheckBridgeReady");
            var e = !1, n = 0, t = setInterval(function() {
                if (l.isReady() && (clearInterval(t), !e)) {
                    var r;
                    try {
                        r = new Event("WeixinJSBridgeReady");
                    } catch (o) {
                        (r = document.createEvent("Event")).initEvent("WeixinJSBridgeReady");
                    }
                    document.dispatchEvent(r), d({
                        actionType: 3e3,
                        query: "".concat(n)
                    });
                }
                n++;
            }, 100);
            l.onReady(function() {
                e = !0;
            });
        }(), function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            console.warn("getAdIdInfo"), s.isSupportAdIdInfo ? new Promise(function(n) {
                var t = Date.now();
                l.invoke("getAdIdInfo", e, function(e) {
                    console.warn("[preload] getAdIdInfo res: time[".concat(Date.now() - t, "]"), e);
                    try {
                        if (e.devIdInfo) {
                            var r = JSON.parse(e.devIdInfo);
                            r.idfa = r.idfa || e.idfa || "", r.oaid = r.oaid || e.oaid || "", 
                            r.imei = r.imei || e.imei || "", y.adCommonDeviceInfo = JSON.stringify(r), 
                            localStorage.setItem("websearch:adCommonDeviceInfo", y.adCommonDeviceInfo);
                        }
                    } catch (o) {}
                    n();
                });
            }) : Promise.resolve();
        }(), function(e) {
            console.warn("setPreGetParams");
            try {
                window.webSearchJSApi ? window.webSearchJSApi.setPreGetParams(JSON.stringify(e)) : l.invoke("setPreGetParams", e);
            } catch (n) {}
        }({
            extReqParams: [ {
                key: "widgetVersion",
                uintValue: 1023022
            }, {
                key: "windowWidth",
                uintValue: window.innerWidth
            }, {
                key: "AdPassThroughInfo",
                textValue: window.navigator.userAgent
            }, {
                key: s.adIdInfoKey,
                textValue: y.adCommonDeviceInfo
            }, {
                key: "TemplateNightModeType",
                uintValue: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 1 : 0
            } ]
        }), console.warn("reportJsApiReady"), l.onReady(function() {
            l.invoke("log", {
                msg: "[wechatSearch preGetData bridgeReady] [time ".concat(Date.now(), "]"),
                level: "info"
            }), d({
                actionType: 2
            });
        });
        var R, O = "";
        if (R = {
            onUiInit: function(e, n) {
                console.warn("[preload] catchEarlyEvents onUiInit trigger, data:".concat(JSON.stringify(e))), 
                "webSearchJSApi" == n ? d({
                    actionType: 2011,
                    scene: e.scene
                }) : "WeixinJSBridge" == n && d({
                    actionType: 2012,
                    scene: e.scene
                }), e.preGetData && l.delInvoke(O);
            }
        }, console.warn("catchEarlyEvents"), Object.keys(x).forEach(function(e) {
            var n = x[e];
            l.listen(n, function(e, t) {
                var r = Date.now(), o = new Date(r);
                console.warn("提前收到".concat(o.getHours(), ":").concat(o.getMinutes(), ":").concat(o.getSeconds(), " 来自").concat(t, " ").concat(n, "事件，数据为"), e), 
                l.invoke("log", {
                    msg: "[wechatSearch preGetData catchEarlyEvents] [time ".concat(r, "] [eventName ").concat(n, "], ").concat(JSON.stringify(e)),
                    level: "info"
                }), window.earlyBridgeEvents.push({
                    eventName: n,
                    data: e,
                    ts: r
                }), R && "function" == typeof R[n] && R[n](e, t);
            }, !0);
        }), window.webSearchJSApi && "function" == typeof window.webSearchJSApi.getExpConfig) {
            try {
                var E = window.webSearchJSApi.getExpConfig(JSON.stringify({
                    key: "clicfg_websearch_migrate_jsapi_getdata"
                }));
                if (window.InExpMigrateGetSearchJSApi = 1 == JSON.parse(E).configResult, 
                window.InExpMigrateGetSearchJSApi && "function" == typeof window.webSearchJSApi.webViewUIReady) {
                    console.warn("[preload] call webViewUIReady"), d({
                        actionType: 2010
                    });
                    try {
                        window.webSearchJSApi.webViewUIReady("{}");
                    } catch (P) {
                        console.warn("[preload] call webViewUIReady fail", P);
                    }
                }
            } catch (P) {}
            window.InExpMigrateGetSearchJSApi;
        }
        O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!b) {
                var n = I(s, e), t = n.scene, r = n.type, o = n.query, i = n.pRequestId || n.queryString.pRequestId || a();
                if (o && u(n)) {
                    console.warn("[preloadScripts/preGetData] start getResult", t, r, o, i), 
                    d({
                        offset: 0,
                        requestId: i,
                        actionType: 3
                    });
                    var c = [ {
                        key: "netType",
                        textValue: n.netType
                    }, {
                        key: "subType",
                        uintValue: +n.subType,
                        textValue: n.subType ? "".concat(n.subType) : ""
                    }, {
                        key: "currentPage",
                        uintValue: 1
                    }, {
                        key: "requestId",
                        textValue: i
                    }, {
                        key: "widgetVersion",
                        uintValue: 1023022
                    }, {
                        key: "parentSearchID",
                        textValue: n.parentSearchID
                    }, {
                        key: "windowWidth",
                        uintValue: window.innerWidth
                    }, {
                        key: "AdPassThroughInfo",
                        textValue: window.navigator.userAgent
                    }, {
                        key: s.adIdInfoKey,
                        textValue: y.adCommonDeviceInfo
                    }, {
                        key: "TemplateNightModeType",
                        uintValue: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 1 : 0
                    } ].concat(n.crossExtReqParams), p = g(g({}, n.getBase()), {}, {
                        query: o || "",
                        offset: 0,
                        tagInfo: {},
                        type: n.type,
                        isHomePage: n.isHomePage,
                        subType: n.subType,
                        sceneActionType: n.sceneActionType,
                        matchUser: {},
                        numConditions: [],
                        extReqParams: c,
                        requestId: i,
                        fromTagSearch: n.queryString.fromTagSearch,
                        extClientParams: n.queryString.extClientParams,
                        sugId: n.sugId
                    });
                    console.warn("[preloadScripts/preGetData] req opiton", p);
                    var f = l.invoke("getSearchData", p);
                    return window[Object(S.b)("resultData")] = null, window[Object(S.b)("preGetArgs")] = p, 
                    window[Object(S.b)("preGetPromise")] = new Promise(function(e) {
                        v = e;
                    }), m = i, b = !0, f;
                }
                console.warn("[preloadScripts/preGetData] conditions not matched", t, r, o, i);
            }
        }();
    }
});