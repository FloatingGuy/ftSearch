(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1258:function(t,e,n){},1969:function(t,e,n){"use strict";n(1258)},2298:function(t,e,n){"use strict";n.r(e);var i={created:function(){window.reportVueCreated("src/views/result/block/service-search/service-search-item/sub-item/living/action.vue")},name:"Action",mixins:[n(0).n],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},methods:{tap:function(t,e){var n="".concat(this.M_getClickZonePath(),".actions[").concat(e,"]");this.M_serviceSearchGo(t,n),this.M_handleInsert(),this.M_clickReport({clickZone:n,expand:this.M_getJumpSubScene(t),clickContent:t.title},t)}}},c=(n(1969),n(4)),o=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"action living-action"},[t.source.actions?n("ui-column",{attrs:{col:2,list:t.source.actions,fill:""},nativeOn:{mouseover:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,c=e.index;return[n("ui-link",{attrs:{title:i.title,"data-report-id":t.M_itemReportId(i,c+1)},nativeOn:{click:function(e){return e.stopPropagation(),t.tap(i,c)}}})]}}],null,!1,4288726306)}):t._e()],1)}),[],!1,null,"068a3278",null);e.default=o.exports}}]);