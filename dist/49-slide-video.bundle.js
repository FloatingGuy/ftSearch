(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1276:function(e,t,i){},1277:function(e,t,i){},1985:function(e,t,i){"use strict";i(1276)},2216:function(e,t,i){"use strict";i.r(t);var o=i(0),r=i(3),s=i(10),c={created:function(){window.reportVueCreated("src/views/result/block/service-search/common/slide-more.vue")},name:"SlideMore",mixins:[o.n,o.l],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},source:{type:Object,default:function(){return{}}}},methods:{onTap:function(e){var t="".concat(this.M_getClickZonePath(),".moreInfo");this.M_serviceSearchGo(e),this.M_clickReport({clickZone:t,clickContent:e.moreText,expand:this.M_getJumpSubScene(e),reportId:e.reportId})}}},n=(i(1985),i(4)),a=Object(n.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"more active__opacity",attrs:{role:"button","data-report-id":e.M_itemReportId(e.source.moreInfo.reportId)},on:{click:function(t){return t.stopPropagation(),e.onTap(e.source.moreInfo)}}},[i("div",{staticClass:"more-icon"},[i("ui-arrow",{attrs:{size:24}})],1),i("div",{staticClass:"more-title"},[e._v("\n    "+e._s(e.source.moreInfo.moreText)+"\n  ")])])}),[],!1,null,"732b481e",null).exports,l=i(617),d=new s.a({normal:1,first:2,double:3}),u=new s.a({normal:40,first:60,double:50}),p={name:"SlideVideo",components:{slideMore:a,videoCard:l.a},mixins:[o.n,o.l],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},source:{type:Object,default:function(){return{}}}},computed:{videos:function(){return this.source.videos},showDouble:function(){return 2==this.videos.length},isFinderSearch:function(){return o.b.isFinderSearch},scrollWdith:function(){if(this.isFinderSearch){var e=this.videos.length+(this.source.live?1:0),t=.6*Math.min(window.innerWidth||document.documentElement.clientWidth,616),i=e*t,o=8*e,r=this.source.moreInfo?.34*t:0;return"".concat(i+o+r,"px")}var s=this.showDouble?d.double:this.source.showType||d.normal,c=u[d[s]],n=this.videos.length*c,a=this.source.moreInfo?.7*c:0;return"".concat(n+a,"%")}},methods:{onTapVideoCard:function(e,t,i){var o="".concat(this.M_getClickZonePath(),".videos[").concat(this.source.live?t-2:t-1,"]");this.M_serviceSearchGo(e),this.M_clickReport({clickZone:o,clickContent:e.title,expand:this.M_getJumpSubScene(e),itemPos:i},e)},onTapLiveCard:function(e,t,i){var o="".concat(this.M_getClickZonePath(),".live");this.M_serviceSearchGo(e),this.M_clickReport({clickZone:o,clickContent:e.title,expand:this.M_getJumpSubScene(e),itemPos:i},e)},scroll:function(){this.scrollTimer&&(clearTimeout(this.scrollTimer),this.scrollTimer=0),this.scrollTimer=setTimeout((function(){r.a.$emit(r.b.resultExposeAnalysis)}),300)},getItemWidth:function(){var e=this.$el.querySelector(".slide-item");return 2*(e.scrollWidth+parseFloat(getComputedStyle(e).getPropertyValue("margin-right")))}}},m=(i(3169),Object(n.a)(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide slide-vc",class:{double:e.showDouble}},[i("div",{directives:[{name:"arrow-scroll",rawName:"v-arrow-scroll",value:{step:e.getItemWidth},expression:"{ step: getItemWidth }"}],ref:"scroll",staticClass:"slide-scroll",on:{scroll:e.scroll}},[i("div",{staticClass:"slide-inner",style:{width:e.scrollWdith}},[e.source.live?i("div",{staticClass:"slide-item",class:{"clear-bg":e.isFinderSearch}},[i("video-card",{attrs:{"tap-source-alone":"",item:Object.assign({},{subItemType:e.source.type},e.source.live,{docID:e.item.docID,gradientPadding:"8px 12px",noPlayIcon:!0}),"block-title":e.source.title,"parent-doc-report-id":e.item.reportId,data:e.data,pos:1,"type-pos":e.typePos},on:{tap:e.onTapLiveCard}})],1):e._e(),e._l(e.videos,(function(t,o){return i("div",{key:t.docID,staticClass:"slide-item",class:{"clear-bg":e.isFinderSearch}},[i("video-card",{attrs:{"tap-source-alone":"",item:Object.assign({},{subItemType:e.source.type},t,{docID:e.item.docID,gradientPadding:"8px 12px"}),"block-title":e.source.title,"parent-doc-report-id":e.item.reportId,data:e.data,pos:o+1+(e.source.live?1:0),"type-pos":e.typePos},on:{tap:e.onTapVideoCard}})],1)})),e.source.moreInfo?i("div",{staticClass:"slide-item slide-item__more",class:{"slide-item__more-fix":e.isFinderSearch}},[i("slide-more",e._b({},"slide-more",e.$props,!1))],1):e._e()],2)])])}),[],!1,null,"aad0a6a8",null));t.default=m.exports},3169:function(e,t,i){"use strict";i(1277)}}]);