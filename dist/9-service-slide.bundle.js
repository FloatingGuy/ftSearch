(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1155:function(e,t,o){},1897:function(e,t,o){"use strict";o(1155)},308:function(e,t,o){},311:function(e,t,o){},528:function(e,t,o){"use strict";o.r(t);var r=o(18),i=o.n(r),n=o(1),s=o.n(n),a=o(0);function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d={created:function(){window.reportVueCreated("src/components/general/news-hot/service-slide.vue")},name:"ServiceSlide",components:{slide:o(598).a},mixins:[a.n,a.l],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{slideClass:function(){return["slide-".concat(this.source.slideType||6)]},boxItem:function(){var e=this;return{boxID:this.data.boxID,real_type:this.data.real_type,subType:this.data.subType,resultType:this.data.resultType,items:this.source.videos.map((function(t){return p(p({},t),{},{gradientPadding:12,subItemType:e.source.type,docID:e.item.docID})})),showType:this.source.slideType||6,zoneConfig:this.data.zoneConfig,type:this.data.type,expand:void 0===i()(this.source.expand)||this.source.expand}}}},l=(o(1897),o(4)),u=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"slide-vc",class:this.slideClass},[t("slide",this._b({attrs:{d:this.boxItem,"type-pos":this.typePos}},"slide",this.$props,!1))],1)}),[],!1,null,"4ae0e052",null);t.default=u.exports},563:function(e,t,o){"use strict";var r=o(1),i=o.n(r),n=o(0),s=(o(16),o(2)),a=o(5),c=o(25);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){i()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.a={mixins:[n.l,n.n],props:["type","typePos","data","hideArrow"],computed:d(d({},Object(c.c)({category:function(e){return e.result.unitData.category}})),{},{moreReportId:function(){return this.M_getReportId(this.data.moreInfo)||"more:more:".concat(n.g.getRandom(6))}}),methods:{_isMatchTab:function(e){var t=e.tabType;if(!t)return!1;if(!this.category||!this.category.length)return!1;var o=null;return this.category.some((function(e,r){return e.type==t&&(o={unit:e,index:r},!0)})),o},onTap:function(){var e=this,t=e.data.moreInfo||{},o=e._isMatchTab(t),r=t.isOpenSearchWebView,i=void 0!==r&&r,a=e.docId||"more",c=null;c=o?s.g.TAB_CHANGE:t.jumpUrl||e.data.moreUrl||e.data.moreWebUrl?s.g.H5:e.data.moreAction?s.g.WE_APP:t.jumpInfo?e.M_getJumpActionType(t.jumpInfo):s.g.VERTICAL,e.M_clickReport({businessType:e.data.real_type||e.data.type,docId:a,reportId:e.moreReportId,docPos:0,typePos:e.typePos,isHomePage:n.b.isHomePage,sceneActionType:n.b.sceneActionType,skipDocInfo:!0,actionType:c,docReportId:"".concat(a,":").concat(0)},e.data.moreInfo),i?e._normalHandler():o?e._jumpToTab(o):e._normalHandler()},_jumpToTab:function(e){var t=this,o=t.data.moreInfo||{};n.a.$emit(n.k.switchTab,{unit:e.unit,index:e.index,parentType:s.p.MORE,docID:o.moreID,newSearchType:s.t.MORE,reportDocId:t.docId||"more",businessType:t.data&&(t.data.real_type||t.data.type),mixerCommonContext:o.mixerCommonContext||""})},_normalHandler:function(){var e=this,t=e.data.moreInfo||{},o=t.jumpUrl||e.data.moreUrl||e.data.moreWebUrl||"",r=n.g.object2params({scene:n.b.scene,sessionid:n.b.sessionId});if(o)/\?/.test(o)?o=o.replace(/\?/,"?".concat(r,"&")):o+="?".concat(r),e.M_startDetail({jumpUrl:o,position:1,type:e.type,docID:"more",sessionId:n.b.sessionId||"",subSessionId:n.b.subSessionId||""});else if(e.data.moreAction)e.M_go({jumpType:s.l.WE_APP,userName:e.data.moreAction.username||e.data.moreAction.userName,relativeURL:e.data.moreAction.path||e.data.moreAction.weappUrl,appVersion:e.data.moreAction.appVersion,debugMode:e.data.moreAction.debugMode||0,docId:"More",subScene:n.g.genWeAppSubScene({adBuffer:"",clickId:(new Date).getTime(),type:e.data.type,subType:e.data.subType}),clickExtInfo:{isHomePage:n.b.isHomePage,h5version:n.b.version,clickId:(new Date).getTime(),businessType:e.data.type,subType:e.data.subType,isClickMore:!1}});else if(t.jumpInfo)e.M_go(t.jumpInfo);else{var i,c,p,d,l,u,m,y;e.M_openSearchWebView({actionType:3,extParams:encodeURIComponent(JSON.stringify({crossExtReqParams:[{key:"parentSearchID",textValue:e.M_composeParentSid({t:s.p.MORE,s:n.b.searchId,did:"more",rid:this.$store.state.result.previousRid})},{key:"subScene",uintValue:e.type===a.b.APP_ACC?1:0},{key:"cookies",textValue:e.$store.state.result.state.cookies}],subType:e.data.subType||"",isForbidHistory:!!n.b.forbidHistoryUtilChangeQuery})),jumpUrl:"",type:e.data.real_type||e.data.type,subType:e.data.subType,query:n.b.query,isMoreButton:!0,docID:"more",hideSearchBar:t.hideSearchBar,navBarColor:n.g.isDarkMode()?"#222222":"#FFFFFF",statusBarStyle:n.g.isDarkMode()?"white":"black",nativeConfig:{title:t.title||"搜一搜"},clickInfo:{item:{docID:"moreInfo"}},isHalfScreen:n.b.scene===s.e.SCENE_FINDERLIVE_HALF_SCREEN?1:null,navButtonConfig:n.b.scene===s.e.SCENE_FINDERLIVE_HALF_SCREEN?JSON.stringify({leftBarButtonType:"none"}):null}),n.f.reportJumpType({businessType:(null===(i=e.data)||void 0===i?void 0:i.real_type)||(null===(c=e.data)||void 0===c?void 0:c.type),subType:null===(p=e.data)||void 0===p?void 0:p.subType,pageType:s.o[null===(d=e.$route)||void 0===d?void 0:d.name],docId:e.docId||"more",clickId:null===(l=e.$store)||void 0===l||null===(u=l.state)||void 0===u||null===(m=u.result)||void 0===m||null===(y=m.state)||void 0===y?void 0:y.clickReportId,clickType:2,newSearchType:s.t.MORE})}}}}},572:function(e,t,o){"use strict";o(308)},587:function(e,t,o){"use strict";o(311)},598:function(e,t,o){"use strict";var r=o(0),i={components:{ca:o(617).a},mixins:[r.n,r.l],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},reportItem:{type:Object,default:function(){return{}}}},methods:{tap:function(e,t,o){var r=this;r.M_go(r.item),r.M_clickReport({clickZone:1,itemPos:o,reportItem:r.reportItem},r.item)},tapSource:function(e,t,o){this.M_go(e.jumpInfo),this.M_clickReport({clickZone:2,clickContent:e.title,itemPos:o,reportItem:this.reportItem},e)}}},n=o(4),s=Object(n.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("ca",this._b({attrs:{"tap-source-alone":"","parent-box-report-id":this.boxReportId,"parent-doc-report-id":this.docReportId},on:{tap:this.tap,tapSource:this.tapSource}},"ca",this.$props,!1))}),[],!1,null,null,null).exports,a={mixins:[o(563).a]},c=(o(572),Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"more active__opacity",attrs:{role:"button"},on:{click:this.onTap}},[t("div",{staticClass:"more-icon"},[t("ui-arrow",{attrs:{size:24}})],1),t("div",{staticClass:"more-title"},[this._v("\n    "+this._s(this.data.moreText)+"\n  ")])])}),[],!1,null,"d1c4a330",null).exports),p=o(3),d=o(14),l=o(10),u=new l.a({normal:1,first:2,onlyOneHor:3,onlyOneVerWithGaussianBlur:4,large:5,doubleRich:6}),m=window.innerWidth||document.documentElement.clientWidth,y=new l.a({normal:40,first:60,onlyOneHor:(m-32)/m*100,onlyOneVerWithGaussianBlur:100,large:60}),b={components:{vc:s,more:c},mixins:[r.n,r.l],props:{d:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{items:function(){return this.d.items},scrollWdith:function(){var e=this,t=y[u[e.d.showType||1]],o=0;[1,2,5].indexOf(e.d.showType)>=0&&(o=32);var r=e.items.length*t+(e.d.moreText?.7*t:0),i=e.d.zoneConfig;return"calc(".concat(r,"% + ").concat(i?r/100*16:o,"px)")},onlyOneHorItem:function(){return this.d.showType===u.onlyOneHor&&this.items&&this.items[0]?this.items[0]:null},isDoubleRich:function(){return this.d.showType===u.doubleRich}},methods:{_scroll:function(){p.a.$emit(p.b.resultExposeAnalysis)},scroll:d.a.debounce((function(){this._scroll()})),getItemWidth:function(){var e=this.$el.querySelector(".slide-item");return e?(e.getBoundingClientRect().width+parseFloat(getComputedStyle(e,null).getPropertyValue("margin-right")))*(1==+this.d.showType?2:1):234}}},f=(o(587),Object(n.a)(b,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"slide"},[e.onlyOneHorItem?o("div",{staticClass:"slide_only-one-hor"},[o("vc",e._b({attrs:{item:e.onlyOneHorItem,data:e.d,pos:1,"type-pos":e.typePos,"report-item":e.item,"parent-box-report-id":e.boxReportId,"parent-doc-report-id":e.docReportId}},"vc",e.$props,!1))],1):e.isDoubleRich?o("div",{staticClass:"double-rich"},e._l(e.items,(function(t,r){return o("vc",e._b({key:t.docID+"-"+r,staticClass:"vc-item",attrs:{item:t,data:e.d,pos:r+1,"type-pos":e.typePos,"report-item":e.item,"parent-box-report-id":e.boxReportId,"parent-doc-report-id":e.docReportId}},"vc",e.$props,!1))})),1):o("div",{directives:[{name:"arrow-scroll",rawName:"v-arrow-scroll",value:{step:e.getItemWidth},expression:"{ step: getItemWidth }"}],ref:"scroll",staticClass:"slide-scroll",on:{scroll:e.scroll}},[o("div",{staticClass:"slide-inner",style:{width:e.scrollWdith}},[e._l(e.items,(function(t,r){return o("div",{key:t.docID+"-"+r,staticClass:"slide-item",class:{"only-one":!e.d.moreText&&1===e.items.length}},[o("vc",e._b({attrs:{item:t,data:e.d,pos:r+1,"type-pos":e.typePos,"vc-comp-index":r,"report-item":e.item,"parent-box-report-id":e.boxReportId,"parent-doc-report-id":e.docReportId}},"vc",e.$props,!1))],1)})),e.d.moreText?o("div",{staticClass:"slide-item slide-item__more"},[o("more",{attrs:{type:e.d.type,data:e.d,"type-pos":e.typePos}})],1):e._e()],2)])])}),[],!1,null,"0a5b832a",null));t.a=f.exports}}]);