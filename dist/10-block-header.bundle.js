(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1238:function(t,e,o){},2283:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),a=o(69),i=o(0);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var s={name:"BlockHeader",components:{blockHeader:a.a},mixins:[i.l,i.n],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},handler:{type:Object,default:function(){return{}}}},computed:{itemInfo:function(){return this.source||this.item}},methods:{prefixParam:function(t){return p(p({},t),{},{docPos:this.pos,pos:this.pos,typePos:this.typePos,docId:this.item.docID,docReportId:this.docReportId})},onTap:function(t){this.handler.tap(this.prefixParam(t))},onTapMore:function(t){this.handler.tapMore(this.prefixParam(t))},onTapAction:function(t){this.handler.tapAction(this.prefixParam(t))},onTapNotice:function(t){this.handler.tapNotice(this.prefixParam(t))},onTapButton:function(t){this.handler.tapButton(this.prefixParam(t))},onReport:function(t){this.handler.tapReport(this.prefixParam(t))},onReplaceItems:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;this.handler.tapReplaceItems(t,e,o)}}},u=(o(3263),o(4)),f=Object(u.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block-header",t._b({staticClass:"sub-item-block-header",class:{"is-zone-header":t.item.isZoneHeader,"with-zone-config":t.data.zoneConfig},on:{tap:t.onTap,"tap:more":t.onTapMore,"tap:action":t.onTapAction,"tap:notice":t.onTapNotice,"tap:button":t.onTapButton,report:t.onReport,"replace-items":t.onReplaceItems}},"block-header",{d:Object.assign({},t.data,{header:t.itemInfo.blockHd}),typePos:t.typePos,parentDocReportId:t.docReportId},!1))}),[],!1,null,"704b2732",null);e.default=f.exports},3263:function(t,e,o){"use strict";o(1238)}}]);