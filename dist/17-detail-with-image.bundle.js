(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1249:function(e,t,i){},1961:function(e,t,i){"use strict";i(1249)},2288:function(e,t,i){"use strict";i.r(t);var s={created:function(){window.reportVueCreated("src/views/result/block/service-search/service-search-item/sub-item/detail-with-image/detail-with-image.vue")},name:"DetailWithImage",mixins:[i(0).n],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{renderItem:function(){return this.source&&this.source.detailWithImageItem},renderItems:function(){return this.source&&this.source.detailWithImageItem&&[this.source.detailWithImageItem]||this.source&&this.source.detailWithImageItems},renderDescItems:function(){return this.source&&this.source.descItems}},methods:{isRenderItemCanClick:function(e){var t=this.renderItems[e];return!!(t.jumpInfo||t.jumpUrl||t.userName||t.jumpType)},onTapAction:function(){var e="".concat(this.M_getClickZonePath(),".action");this.M_serviceSearchGo(this.renderItem.action,e),this.M_storeClickInfo(),this.M_clickReport({clickZone:e,clickContent:this.renderItem.action.title||"",expand:this.M_getJumpSubScene(this.renderItem.action)},this.renderItem.action)},onTapDetailItem:function(e,t){if(this.isRenderItemCanClick(e)){t.stopPropagation();var i="".concat(this.M_getClickZonePath(),".detail-item").concat(e);this.M_serviceSearchGo(this.renderItems[e],i),this.M_storeClickInfo(),this.M_clickReport({clickZone:i,clickContent:this.renderItems[e].title||"",expand:this.M_getJumpSubScene(this.renderItems[e])},this.renderItems[e])}},onTapDescItem:function(e){var t="".concat(this.M_getClickZonePath(),".desc-item").concat(e);this.M_serviceSearchGo(this.renderDescItems[e],t),this.M_storeClickInfo(),this.M_clickReport({clickZone:t,clickContent:this.renderDescItems[e].title||"",expand:this.M_getJumpSubScene(this.renderDescItems[e])},this.renderDescItems[e])},onTapMore:function(){var e="".concat(this.M_getClickZonePath(),".more");this.M_serviceSearchGo(this.source.more,e),this.M_storeClickInfo(),this.M_clickReport({clickZone:e,clickContent:this.source.more.title||"",expand:this.M_getJumpSubScene(this.source.more)},this.source.more)}}},r=(i(1961),i(4)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.renderItems,(function(t,s){return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:e.isRenderItemCanClick(s),expression:"isRenderItemCanClick(index)",modifiers:{stop:!0}}],key:s,staticClass:"detail-with-image active__item",attrs:{"data-report-id":e.M_itemReportId(t.reportId,s+1)},on:{click:function(t){return e.onTapDetailItem(s,t)}}},[t.imageUrl?i("div",{staticClass:"dwi-image-wrapper"},[i("div",{directives:[{name:"image",rawName:"v-image",value:t.imageUrl,expression:"renderItem.imageUrl"}],staticClass:"dwi-image",style:{width:(t.imageWidth||"160")+"px",height:(t.imageHeight||"auto")+"px"}})]):e._e(),i("div",{staticClass:"dwi-image-text-wrapper"},[i("div",{attrs:{role:"button",tabindex:"-1"}},[i("div",{staticClass:"dwi-image-title-wrap",attrs:{"align-vertical":""}},[t.title?i("div",{staticClass:"title",domProps:{innerHTML:e._s(e.xss(t.title))}}):e._e(),t.title?i("span",{staticClass:"ui-aria-hidden"},[e._v(",")]):e._e(),t.tag?i("div",{staticClass:"center-tag"},[i("ui-tags",{attrs:{tags:t.tag}}),i("span",{staticClass:"ui-aria-hidden"},[e._v(".")])],1):e._e()]),t.infos?[e._l(t.infos,(function(t,s){return[i("div",{key:s,staticClass:"desc",style:{webkitLineClamp:t.style&&t.style.ellipsis?t.style.ellipsis:1,paddingTop:t.style&&t.style.top?t.style.top+"px":0,paddingBottom:t.style&&t.style.bottom?t.style.bottom+"px":0},domProps:{innerHTML:e._s(e.xss(t.content))}}),i("span",{key:s+",",staticClass:"ui-aria-hidden"},[e._v(".")])]}))]:e._e(),t.desc?i("div",{staticClass:"desc",domProps:{innerHTML:e._s(e.xss(t.desc))}}):e._e(),t.desc?i("span",{staticClass:"ui-aria-hidden"},[e._v(",")]):e._e(),t.price?i("div",{staticClass:"desc",domProps:{innerHTML:e._s(e.xss(t.price))}}):e._e()],2),t.action?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"action active__link",attrs:{role:"button",tabindex:"-1","data-report-id":e.M_itemReportId(t.action.reportId)},on:{click:function(t){return t.stopPropagation(),e.onTapAction.apply(null,arguments)}}},[e._v(e._s(t.action.title))]):e._e()])])})),e.renderDescItems?i("div",{staticClass:"desc-item-wrap"},e._l(e.renderDescItems,(function(t,s){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:s,staticClass:"desc-item active__item",attrs:{"data-report-id":e.M_itemReportId(t.reportId,s+1)},on:{click:function(t){return t.stopPropagation(),e.onTapDescItem(s)}}},[i("div",{staticClass:"desc-title",domProps:{innerHTML:e._s(e.xss(t.title))}}),e._l(t.infos,(function(t,s){return i("div",{key:s,staticClass:"desc",style:{webkitLineClamp:t.style&&t.style.ellipsis?t.style.ellipsis:1,paddingTop:t.style&&t.style.top?t.style.top+"px":0,paddingBottom:t.style&&t.style.bottom?t.style.bottom+"px":0},domProps:{innerHTML:e._s(e.xss(t.content))}})}))],2)})),0):e._e(),e.source.more?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"more-box active__item active__opacity",attrs:{role:"button",tabindex:"-1","data-report-id":e.M_itemReportId(e.source.more.reportId)},on:{click:function(t){return t.stopPropagation(),e.onTapMore.apply(null,arguments)}}},[e._v("\n    "+e._s(e.source.more.title)+"\n  ")]):e._e()],2)}),[],!1,null,"037c142e",null);t.default=a.exports}}]);