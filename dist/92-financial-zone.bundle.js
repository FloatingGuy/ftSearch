(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{2545:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),c=n(84),a=n(20),i=n(1),u=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d,p,m=new(n(10).a)({basicInfo:1,performanceCall:2,statement:3}),f={};Object.assign(f,l({},(d=n(292),p={},d.keys().forEach((function(e){var t=d(e).default.name;t&&(p[t]=d(e).default)})),p)));var h={created:function(){window.reportVueCreated("src/views/result/block/financial-zone/financial-item.vue")},name:"FinancialItem",components:l({basicInfo:function(){var e=__chunk_ctrl__.startImport("components/basic-info");return n.e(218).then(n.bind(null,2555)).then((function(t){return __chunk_ctrl__.afterImport(e,"components/basic-info","65-basic-info"),t}))},performanceCall:function(){var e=__chunk_ctrl__.startImport("components/performance-call");return n.e(290).then(n.bind(null,2558)).then((function(t){return __chunk_ctrl__.afterImport(e,"components/performance-call","93-performance-call"),t}))},statement:function(){var e=__chunk_ctrl__.startImport("components/statement");return Promise.all([n.e(327),n.e(328),n.e(332),n.e(331)]).then(n.bind(null,3082)).then((function(t){return __chunk_ctrl__.afterImport(e,"components/statement","114-statement"),t}))}},f),mixins:[r.l,r.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},injectServiceItemCtx:{type:Boolean,default:!1},sourceIndex:{type:Number,default:0},marketIndex:{type:Number,default:0}},data:function(){return{subItemHeaderTypes:a.e,ComponentTypeEnum:m,Util:r.g}},computed:{renderSource:function(){var e;return null===(e=this.item.cpList)||void 0===e?void 0:e[this.sourceIndex]},renderMarket:function(){var e,t;return null===(e=this.renderSource)||void 0===e||null===(t=e.markets)||void 0===t?void 0:t[this.marketIndex]},header:function(){var e,t;return(null===(e=this.renderSource)||void 0===e?void 0:e.header)||(null===(t=this.renderMarket)||void 0===t?void 0:t.header)||{}}},methods:{handleChangeMarket:function(e){this.$emit("change-market",e)}}},v=(n(3076),n(4)),_=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.Util.isObjectEmpty(e.renderMarket)?e._e():n("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"financial-item",attrs:{"data-id":e.M_exposeId(),"data-back-report-id":e.M_docReportId()}},[e.renderSource?n(e.subItemHeaderTypes[e.header.type||0],e._b({tag:"component",staticClass:"sub-item-header",attrs:{header:e.header}},"component",e.$props,!1),[n(e.ComponentTypeEnum[e.renderMarket&&e.renderMarket.type||e.item.type],e._b({tag:"component",staticClass:"sub-item",attrs:{info:e.renderMarket},on:{"change-market":e.handleChangeMarket}},"component",e.$props,!1))],1):e._e()],1)}),[],!1,null,"5e24fafc",null).exports,b={created:function(){window.reportVueCreated("src/views/result/block/financial-zone/financial-zone.vue")},components:{blockSource:c.default,blockItem:_},mixins:[r.n,r.l],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){return{sourceIndex:0,marketIndex:0}},computed:{currSource:function(){var e;return(null===(e=this.d.sourceList)||void 0===e?void 0:e[this.sourceIndex])||this.source||{}},canSourceChange:function(){var e;return(null===(e=this.d.sourceList)||void 0===e?void 0:e.length)>1}},methods:{handleChangeMarket:function(e){this.marketIndex=e},onTapSource:function(){if(this.canSourceChange){this.M_clickReport({clickContent:this.currSource.title});var e=this;this.$store.commit({type:"updateActionSheet",title:"选择服务提供方",sheets:e.d.sourceList,className:"financial-zone-action-sheet",clickCallback:function(t){var n;e.sourceIndex=t.pos-1,e.M_clickReport({clickZone:"actionSheet",clickContent:null===(n=e.currSource)||void 0===n?void 0:n.title,actionType:o.g.CONFIRM_CHANGE_CODE})}})}else this.M_clickSourceReport()}}},k=(n(3230),Object(v.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search_block financial-zone"},[e._l(e.d.items,(function(t,r){return[n("blockItem",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:t.vueKey,attrs:{data:e.d,item:t,"type-pos":e.typePos,pos:r+1,"source-index":e.sourceIndex,"market-index":e.marketIndex,"inject-service-item-ctx":""},on:{"change-market":e.handleChangeMarket}})]})),e.currSource?n("blockSource",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],class:{active__mask:!!e.canSourceChange},attrs:{d:e.d,source:e.currSource},nativeOn:{click:function(t){return t.stopPropagation(),e.onTapSource.apply(null,arguments)}},scopedSlots:e._u([{key:"extra-info",fn:function(){return[e.canSourceChange?n("ui-arrow",{attrs:{direction:"down",align:"flex",gap:""}}):e._e()]},proxy:!0}],null,!1,2726327974)}):e._e()],2)}),[],!1,null,"a45752d6",null));t.default=k.exports},3076:function(e,t,n){"use strict";n(923)},3230:function(e,t,n){"use strict";n(924)},923:function(e,t,n){},924:function(e,t,n){}}]);