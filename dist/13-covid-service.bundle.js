(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1245:function(e,t,n){},2285:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(581),c=n(0),o=n(565);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={created:function(){window.reportVueCreated("src/views/result/block/service-search/service-search-item/sub-item/covid-service/covid-service.vue")},name:"CovidService",components:{ServicesLinks:r.a,UiMenu:o.a},mixins:[c.n,c.l],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{showLink:!0}},computed:{menus:function(){var e,t=this;return null===(e=this.source.menu)||void 0===e?void 0:e.map((function(e,n){return u(u({},e),{},{itemReportId:t.M_itemReportId(e,n+1)})}))},extraLinks:function(){return this.source.extraLinks}},methods:{onTapLinkText:function(e){var t="".concat(this.M_getClickZonePath(),".link.text");this.showLink=!1,this.M_clickReport({clickZone:t,clickContent:e.text,expand:this.M_getJumpSubScene(e)},e)},onTapServiceLink:function(e){var t=e.link,n=e.index,i=e.itemPos,s="".concat(this.M_getClickZonePath(),".extraLinks[").concat(n,"]");this.M_serviceSearchGo(t),this.M_clickReport({clickZone:s,clickContent:t.title,expand:this.M_getJumpSubScene(t),itemPos:i},t)},onTapMenu:function(e){var t=e.menu,n=e.index,i="".concat(this.M_getClickZonePath(),".menu[").concat(n,"]");this.M_serviceSearchGo(t),this.M_clickReport({clickZone:i,clickContent:t.title,expand:this.M_getJumpSubScene(t)},t)}}},p=(n(2411),n(4)),m=Object(p.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"covid-wrap"},[e.menus?n("ui-menu",{staticClass:"menus",attrs:{source:e.menus,nowrap:e.source.isCompact,compact:e.source.isCompact},on:{"tap:menu":e.onTapMenu}}):e._e(),e.source.link&&e.showLink?n("p",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"link-text active__mask",attrs:{"data-report-id":e.M_itemReportId(e.source.link)},on:{click:function(t){return t.stopPropagation(),e.onTapLinkText(e.source.link)}}},[e._v(e._s(e.source.link.text))]):e._e(),e.extraLinks&&!e.showLink?n("services-links",{staticClass:"services-link",attrs:{links:e.extraLinks},on:{"tap:link":e.onTapServiceLink}}):e._e()],1)}),[],!1,null,"4e96fa43",null);t.default=m.exports},2411:function(e,t,n){"use strict";n(1245)},259:function(e,t,n){},288:function(e,t,n){},3294:function(e,t,n){"use strict";n(288)},561:function(e,t,n){"use strict";n(259)},565:function(e,t,n){"use strict";var i={name:"UiMenu",props:{source:{type:Array,default:function(){return[]}},nowrap:{type:Boolean,default:!1},compact:{type:Boolean,default:!1}},methods:{tap:function(e,t){this.$emit("tap:menu",{menu:e,index:t,target:this.$el})},menuItemClassName:function(e){var t=this.source.length%3||3;return{"ui-menu-item":!0,"ui-menu-item-end":!this.nowrap&&this.source.length-e-1<t}}}},s=(n(561),n(4)),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.source&&e.source.length?n("div",{staticClass:"ui-menu",class:{"ui-menu-nowrap":e.nowrap,"ui-menu-compact":e.compact}},e._l(e.source,(function(t,i){return n("a",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:"menu-item-"+i,class:e.menuItemClassName(i),attrs:{role:"button",tabindex:"-1","data-report-id":t.itemReportId},on:{touchstart:function(e){e.stopPropagation()},click:function(n){return n.stopPropagation(),e.tap(t,i)}}},[e.$scopedSlots.default?[e._t("default",null,{item:t,index:i})]:[t.iconUrl?n("ui-image",{staticClass:"ui-menu-icon",attrs:{url:t.iconUrl,mode:"plain"}}):e._e(),t.title?n("h4",{directives:[{name:"xss-html",rawName:"v-xss-html",value:t.title,expression:"item.title"}],staticClass:"ui-menu-item-title"}):e._e(),t.desc?n("p",{directives:[{name:"xss-html",rawName:"v-xss-html",value:t.desc,expression:"item.desc"}],staticClass:"ui-menu-item-desc",attrs:{"aria-hidden":"true"}}):e._e()]],2)})),0):e._e()}),[],!1,null,"3cdbbeb0",null).exports;r.install=function(e){e.component(r.name,r)};t.a=r},581:function(e,t,n){"use strict";var i=n(0),s={name:"ServicesLinks",mixins:[i.l,i.n],props:{links:{type:Array,default:function(){return[]}}},methods:{onTap:function(e,t){this.$emit("tap:link",{link:e,index:t,itemPos:this.M_getItemPos(e.reportId)})}}},r=(n(3294),n(4)),c=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.links?n("div",{staticClass:"services-links"},[n("ui-column",{attrs:{col:2,list:e.links,fill:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,s=t.index;return[n("ui-link",{attrs:{title:i.title,desc:i.desc,"icon-url":i.iconUrl,"icon-max-size":"","data-report-id":e.M_itemReportId(i,s+1)},nativeOn:{click:function(t){return t.stopPropagation(),e.onTap(i,s)}},scopedSlots:e._u([{key:"between",fn:function(){return[i.recommendTag?n("ui-tags",{class:i.desc?"tags-with-desc":"",attrs:{flex:"",tags:i.recommendTag}}):e._e()]},proxy:!0}],null,!0)})]}}],null,!1,257302073)})],1):e._e()}),[],!1,null,"6b633e03",null);t.a=c.exports}}]);