(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1260:function(t,e,n){},1971:function(t,e,n){"use strict";n(1260)},2300:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(8),o={name:"NoAcc",mixins:[i.n,i.l],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},methods:{tapButton:function(){var t=this.source.cgi,e=void 0===t?{}:t,n="".concat(this.M_getClickZonePath(),".button");this.M_serviceSearchGo(this.source),this.M_handleInsert(),e&&e.name&&s.a.commonCgi({cgiName:e.name,data:e.params}),this.M_clickReport({clickZone:n,expand:this.M_getJumpSubScene(this.source),clickContent:this.source.button},this.source)}}},a=(n(1971),n(4)),c=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"no",attrs:{"data-report-id":t.M_itemReportId(t.source.reportId)},on:{click:function(e){return e.stopPropagation(),t.tapButton.apply(null,arguments)}}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"title"},[t._v("\n      "+t._s(t.source.title)+"\n    ")]),n("div",{staticClass:"button"},[n("a",{staticClass:"weui-btn weui-btn_primary",attrs:{role:"button",tabindex:"-1"},on:{touchstart:function(t){t.stopPropagation()}}},[t._v("\n        "+t._s(t.source.button)+"\n      ")])])])])}),[],!1,null,"47e61652",null);e.default=c.exports}}]);