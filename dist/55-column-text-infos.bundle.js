(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1281:function(t,e,i){},2197:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i(581),s=i(3269),c={name:"ColumnTextInfos",components:{ServicesLinks:o.a,UiTextEllipsis:s.a},mixins:[n.n,n.l],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{renderTextObj:[]}},methods:{onTapLineAction:function(t,e,i){if(t){i&&i.stopPropagation();var n="".concat(this.M_getClickZonePath(),".textInfos[").concat(e,"].action");this.M_serviceSearchGo(t),this.M_clickReport({clickZone:n,clickContent:t.title||"",expand:this.M_getJumpSubScene(t)},t)}},onTapPanel:function(t){if(this.source.jumpInfo){t&&t.stopPropagation();var e="".concat(this.M_getClickZonePath(),".jumpInfo");this.M_serviceSearchGo(this.source,e),this.M_storeClickInfo(),this.M_clickReport({clickZone:e,expand:this.M_getJumpSubScene(this.source.jumpInfo)},this.source)}},onTapLink:function(t){var e=t.link,i=t.index,n="".concat(this.M_getClickZonePath(),".extraLinks[").concat(i,"]");this.M_serviceSearchGo(e,n),this.M_storeClickInfo(),this.M_clickReport({clickZone:n,expand:this.M_getJumpSubScene(e),clickContent:e.title},e)},onTapAction:function(){var t="".concat(this.M_getClickZonePath(),".action");this.M_serviceSearchGo(this.source.action,t),this.M_storeClickInfo(),this.M_clickReport({clickZone:t,expand:this.M_getJumpSubScene(this.source.action),clickContent:this.source.action.title},this.source.action)}}},a=(i(3229),i(4)),r=Object(a.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column-text-infos"},[i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!t.source.jumpInfo,expression:"!!source.jumpInfo",modifiers:{stop:!0}}],staticClass:"text-infos-grid active__link",attrs:{"data-report-id":t.M_itemReportId(t.source)},on:{click:t.onTapPanel}},[t._l(t.source.textInfos,(function(e,n){return[i("div",{key:e.title||Date.now()+1,staticClass:"text-infos-title",domProps:{innerHTML:t._s(t.xss(e.title||""))}}),i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.action,expression:"!!line.action",modifiers:{stop:!0}}],key:e.desc||Date.now()+2,staticClass:"text-infos-desc",class:e.linkStyle?"link-style":"active__link",attrs:{"data-report-id":t.M_itemReportId(e.action,n+1)},on:{click:function(i){return t.onTapLineAction(e.action,n)}}},[i("ui-text-ellipsis",{attrs:{content:e.desc,ellipsis:e.ellipsis||10,link:e.action&&e.action.title,fold:e.action&&e.action.fold,"need-auto-show-fold":e.action&&e.action.needAutoShowFold},on:{"tap:link":function(i){return t.onTapLineAction(e.action,n)}}}),e.tags?i("ui-tags",{attrs:{tags:e.tags}}):t._e()],1)]}))],2),t.source.action?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"text-infos-action active__link",attrs:{role:"button",tabindex:"-1","data-report-id":t.M_itemReportId(t.source.action)},on:{click:function(e){return e.stopPropagation(),t.onTapAction.apply(null,arguments)}}},[t._v(t._s(t.source.action.title))]):t._e(),t.source.extraLinks?i("services-links",{attrs:{links:t.source.extraLinks},on:{"tap:link":t.onTapLink}}):t._e()],1)}),[],!1,null,"e199979a",null);e.default=r.exports},288:function(t,e,i){},3229:function(t,e,i){"use strict";i(1281)},3268:function(t,e,i){"use strict";i(381)},3269:function(t,e,i){"use strict";var n={name:"UiTextEllipsis",props:{content:String,ellipsis:{type:Number,default:2},fold:{type:Number,default:0},link:String,showArrow:{type:Boolean,default:!1},needFold:{type:Boolean,default:!1},foldBtnReportId:{type:String,default:""},needAutoShowFold:{type:Boolean,default:!1}},data:function(){return{renderContent:this.content,hasEllipsis:!1,showFold:!0,isFolded:!0}},computed:{foldText:function(){return this.isFolded?this.link:"收起"}},watch:{content:function(){var t=this;this.renderContent=this.content,this.hasEllipsis=!1,this.$nextTick((function(){t.setEllipsis()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.setEllipsis()}))},methods:{setEllipsis:function(){var t=this,e=this.$refs.wrapper,i=this.$refs.content,n=parseInt(window.getComputedStyle(e).lineHeight)||21,o=this.ellipsis*n+10,s=i.innerText,c="";if(s.length<=2)this.$nextTick((function(){t.hasEllipsis=!1,t.showFold=!1,t.renderContent=i.innerText}));else{for(var a=1;a<s.length-1;a++){if(e.clientHeight<o){c=i.innerText,!0;break}i.innerText="".concat(s.slice(0,-a),"...")}i.innerText=s,this.$nextTick((function(){t.hasEllipsis=!0,t.renderContent=c,t.showFold=t.content!==t.renderContent}))}},onTapLink:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];this.$emit.apply(this,["tap:link"].concat(e))},onTapTrigger:function(){this.renderContent=this.content,this.hasEllipsis=!1,this.$emit("tap:fold",this.foldText),this.needFold?(this.isFolded||(this.hasEllipsis=!0,this.setEllipsis()),this.isFolded=!this.isFolded):this.showFold=!1}}},o=(i(3268),i(4)),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"ui-text-ellipsis"},[t.hasEllipsis?i("span",{key:t.content,ref:"content",domProps:{innerHTML:t._s(t.renderContent)}}):i("span",{ref:"content",domProps:{innerHTML:t._s(t.content)}}),t.fold&&t.link&&t.showFold?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-text-ellipsis-link",attrs:{role:"button",tabindex:"-1"},on:{click:function(e){return e.stopPropagation(),t.onTapTrigger.apply(null,arguments)}}},[i("span",[t._v(t._s(t.foldText))]),t.showArrow?i("ui-arrow",{attrs:{gap:"",direction:t.isFolded?"down":"up"}}):t._e()],1):t._e(),(t.needAutoShowFold?!t.fold&&t.link&&t.showFold:!t.fold&&t.link)?i("span",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-text-ellipsis-link",class:{"ui-text-ellipsis-link-no-content":!t.content},attrs:{role:"button",tabindex:"-1","data-report-id":t.foldBtnReportId?t.foldBtnReportId:""},on:{click:function(e){return e.stopPropagation(),t.onTapLink.apply(null,arguments)}}},[t._v(t._s(t.link))]):t._e(),t._t("default")],2)}),[],!1,null,"a3f63fca",null).exports;s.install=function(t){t.component(s.name,s)};e.a=s},3294:function(t,e,i){"use strict";i(288)},381:function(t,e,i){},581:function(t,e,i){"use strict";var n=i(0),o={name:"ServicesLinks",mixins:[n.l,n.n],props:{links:{type:Array,default:function(){return[]}}},methods:{onTap:function(t,e){this.$emit("tap:link",{link:t,index:e,itemPos:this.M_getItemPos(t.reportId)})}}},s=(i(3294),i(4)),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.links?i("div",{staticClass:"services-links"},[i("ui-column",{attrs:{col:2,list:t.links,fill:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,o=e.index;return[i("ui-link",{attrs:{title:n.title,desc:n.desc,"icon-url":n.iconUrl,"icon-max-size":"","data-report-id":t.M_itemReportId(n,o+1)},nativeOn:{click:function(e){return e.stopPropagation(),t.onTap(n,o)}},scopedSlots:t._u([{key:"between",fn:function(){return[n.recommendTag?i("ui-tags",{class:n.desc?"tags-with-desc":"",attrs:{flex:"",tags:n.recommendTag}}):t._e()]},proxy:!0}],null,!0)})]}}],null,!1,257302073)})],1):t._e()}),[],!1,null,"6b633e03",null);e.a=c.exports}}]);