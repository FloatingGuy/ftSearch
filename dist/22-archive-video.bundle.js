(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1062:function(t,e,i){"use strict";i(336)},1108:function(t,e,i){},1842:function(t,e,i){"use strict";i(1108)},2211:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),o=i(46),a=i.n(o),r=i(8),c=i(0),l=i(466),p=i(3269),u=i(717),d=i(2);function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){n()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={components:{customSource:l.a,UiHalfScreenSheet:u.a,UiTextEllipsis:p.a},mixins:[c.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{allEpisodes:[],playBtnIntersect:!1}},computed:{ellipsisEpisodeList:function(){return this.item.episodes?this.item.episodes:[]},isShowEpisode:function(){return this.ellipsisEpisodeList.length},isShowEpisodeList:function(){return this.isShowEpisode&&0===this.item.episodeShowType},isShowVarietyEpisode:function(){return this.isShowEpisode&&2===this.item.episodeShowType},searchItemInnerClass:function(){return this.isShowEpisode?"is-show-episode":c.b.isVerticalSearch?"is-vertical-search":""},summaryFoldBtnReportId:function(){return"".concat(encodeURIComponent("全部"),":highlight_text:").concat(parseInt(1e7*Math.random()))}},watch:{"item.docID":function(){this.preFetchAllEpisodes()}},created:function(){this.preFetchAllEpisodes()},mounted:function(){if(this.item.playBtn&&this.item.playBtn.text&&this.item.infos&&this.item.infos.length){var t=document.querySelector(".archive-v__play-button"),e=document.querySelector(".archive-v__info-set-fake");t.getBoundingClientRect().left<e.getBoundingClientRect().right&&(t.getBoundingClientRect(),e.getBoundingClientRect(),this.playBtnIntersect=!0)}},methods:{onTap:function(t){var e=this;e.M_clickReport({clickZone:t.clickZone||0,actionType:e.item.userName?d.g.WE_APP:e.item.jumpUrl||e.item.itemUrl?d.g.H5:d.g.BIZ},t||e.item),e.M_startDetail({jumpUrl:e.item.jumpUrl||e.item.itemUrl})},onTapEpisode:function(t){var e=t.episode,i=t.isMore,s=t.isHalfScreenSheet,n=void 0!==s&&s,o=t.isQuick,a=void 0!==o&&o,r=t.reportTarget;i?(this.showAllEpisodes(),this.M_handleInsert(),this.M_clickReport({clickZone:this.isShowVarietyEpisode?3:1,clickContent:this.isShowEpisodeList?"展开":this.isShowVarietyEpisode?this.item.episodesTitle||"全部节目":"其他选集",actionType:d.g.CLICK_SHOW_DIALOG},r||e)):(this.M_go(e),this.M_handleInsert(),this.M_clickReport({clickZone:n?2:1,clickContent:a?"观看".concat(e.title,"集").concat(e.subTitle?e.subTitle:""):"".concat(e.title).concat(e.subTitle?e.subTitle:"")},e)),this.$emit("tap")},onTapEpisodeWrapper:function(t){var e,i,s=parseInt(null===(e=t.target)||void 0===e||null===(i=e.dataset)||void 0===i?void 0:i.episodeIndex);s>=0&&this.onTapEpisode({episode:this.allEpisodes[s],isHalfScreenSheet:!0,isMore:!1})},removePcScreenSheetScroll:function(){0},showAllEpisodes:function(){var t=this;if(this.allEpisodes.length)return this.$refs._allEpisodes.show(),void this.removePcScreenSheetScroll();var e=a.a.loading("加载中"),i={};try{i=JSON.parse(this.item.params)}catch(s){}r.a.getCommonCgiData({cgiName:this.item.cgiName,data:i}).then((function(i){var s=i.items,n=void 0===s?[]:s;n.length&&n[0].episodes&&n[0].episodes.length&&(t.allEpisodes=n[0].episodes,t.$refs._allEpisodes.show(),t.removePcScreenSheetScroll()),e.hide()})).catch((function(){e.hide()}))},preFetchAllEpisodes:function(){var t=this;if(this.isShowEpisode){this.allEpisodes=[];var e={};try{e=JSON.parse(this.item.params)}catch(i){}r.a.getCommonCgiData({cgiName:this.item.cgiName,data:e}).then((function(e){var i=e.items,s=void 0===i?[]:i;s.length&&s[0].episodes&&s[0].episodes.length&&(t.allEpisodes=s[0].episodes)})).catch((function(){}))}},onTapSummary:function(t){var e=t.title,i=t.text,s=t.reportId,n=void 0===s?"":s,o=t.clickZone,a=h(h({},this.item.summary),{},{pop:{resetHeader:!0,descList:['<em style="color: var(--FG-0); font-size: 15px;">'.concat(i,"</em>")],popTitle:e,type:11}});n&&(a.reportId=n),this.M_serviceSearchGo(a),this.M_clickReport(h(h({},a),{},{actionType:d.g.CLICK_SHOW_DIALOG,clickZone:o}),this.item.summary)}}},v=(i(1842),i(4)),_=Object(v.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"video_single_item expose_log_elem archive-video",attrs:{"data-id":t.M_exposeId(),"data-report-id":t.M_itemReportId(t.item.reportId,1)},on:{click:function(e){return t.onTap(t.item)}}},[i("div",{staticClass:"search_item_inner",class:t.searchItemInnerClass},[i("div",{staticClass:"archive-video-wrap"},[i("div",{directives:[{name:"image",rawName:"v-image:color",value:t.item.itemPic,expression:"item.itemPic",arg:"color"}],staticClass:"video_thumb_wrap archive-v__thumb",class:{video_thumb_wrap_vertical:2===t.item.style,"no-video-control":t.item.playBtn&&t.item.playBtn.text}}),i("div",{staticClass:"archive-v__info"},[i("div",{staticClass:"video_title-wrap"},[i("p",{staticClass:"video_title"},[t.item.titleTag&&t.item.titleTag.prepend?i("ui-tags",{staticClass:"video_title__prepend-tags",attrs:{"align-vertical":"",tags:t.item.titleTag.prepend}}):t._e(),i("span",{staticClass:"video_title__text",domProps:{innerHTML:t._s(t.xss(t.item.itemTitle))}}),t.item.titleTag&&t.item.titleTag.append?i("ui-tags",{staticClass:"video_title__append-tags",attrs:{"align-vertical":"",tags:t.item.titleTag.append}}):t._e()],1),t.item.playBtn&&t.item.playBtn.text?i("ui-button",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"archive-v__play-button ",attrs:{"data-report-id":t.M_itemReportId(t.item.playBtn),mini:""},nativeOn:{click:function(e){return e.stopPropagation(),t.onTap(Object.assign({},t.item.playBtn,{clickZone:5}))}}},[i("ui-image",{staticClass:"archive-v__play-button-icon",attrs:{url:t.item.playBtn.iconUrl,size:16}}),t._v("\n            "+t._s(t.item.playBtn.text)+"\n          ")],1):t._e()],1),i("div",{staticClass:"archive-v__info-set",style:{marginTop:t.item.playBtn&&t.item.playBtn.text&&!t.playBtnIntersect?"2px":"4px"}},[t._l(t.item.infos,(function(e,s){return i("p",{key:e,class:{"ellipsis-1":s===t.item.infos.length-1&&t.item.infos.length>3},domProps:{innerHTML:t._s(t.xss(e))}})})),t.item.infos&&t.item.infos.length?i("span",{staticClass:"archive-v__info-set-fake",domProps:{innerHTML:t._s(t.xss(t.item.infos[0]))}}):t._e()],2)])])]),t.item.summary&&t.item.summary.text?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"archive-summary active__mask",attrs:{"data-report-id":t.M_itemReportId(t.item.summary)},on:{click:function(e){return e.stopPropagation(),t.onTapSummary(Object.assign({},t.item.summary,{clickZone:6}))}}},[i("span",{staticClass:"archive-summary-title"},[t._v(t._s(t.item.summary.title))]),i("ui-text-ellipsis",{attrs:{content:t.item.summary.text,ellipsis:t.item.summary.ellipsis||2,link:t.item.summary.foldText||"全部","need-auto-show-fold":"","fold-btn-report-id":t.M_itemReportId(t.summaryFoldBtnReportId)},on:{"tap:link":function(e){return t.onTapSummary(Object.assign({},t.item.summary,{reportId:t.summaryFoldBtnReportId,clickZone:7}))}}})],1):t._e(),t.item.scheduleDesc?i("div",{staticClass:"archive-episode-time"},[i("ui-text-ellipsis",{attrs:{content:t.item.scheduleDesc,ellipsis:1}})],1):t._e(),t.isShowEpisodeList?i("div",{staticClass:"episode-wrapper"},[i("ui-column",{attrs:{list:t.ellipsisEpisodeList,col:5},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item,n=e.index;return[i("ui-button",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"episode-title",attrs:{"data-report-id":t.M_itemReportId(s,2+n)},nativeOn:{click:function(e){return e.stopPropagation(),t.onTapEpisode({episode:s,isMore:1===s.episodeType})}}},[i("div",{staticClass:"episode-item"},[i("div",[t._v("\n              "+t._s(0===s.episodeType?s.title:"…")+"\n            ")]),s.subTitle?i("div",{staticClass:"episode-item-desc"},[t._v("\n              "+t._s(s.subTitle)+"\n            ")]):t._e()])])]}}],null,!1,2276065126)})],1):t._e(),t.isShowVarietyEpisode?i("div",{staticClass:"variety-episode-wrapper"},[t._l(t.ellipsisEpisodeList,(function(e,s){return i("ui-link",{key:s,attrs:{title:e.title,desc:e.subTitle,"data-report-id":t.M_itemReportId(e.reportId,2+s)},nativeOn:{click:function(i){return i.stopPropagation(),t.onTapEpisode({episode:e,isMore:!1})}}})})),t.item.episodesPopLink?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:"more",staticClass:"all-variety-link active__opacity expand-hotspot",attrs:{"data-report-id":t.M_itemReportId(t.item.episodesPopLink.reportId,t.ellipsisEpisodeList.length+2)},on:{click:function(e){return e.stopPropagation(),t.onTapEpisode({reportTarget:t.item.episodesPopLink,isMore:!0})}}},[t._v("\n      "+t._s(t.item.episodesPopLink.title)+"\n    ")]):t._e()],2):t._e(),t.item.source&&t.item.source.title?i("customSource",{staticClass:"episodes-source",attrs:{source:t.item.source}}):t._e(),i("ui-half-screen-sheet",{ref:"_allEpisodes",attrs:{title:t.item.episodesTitle}},[t.item.scheduleDesc?i("div",{staticClass:"episodes-source-time"},[t._v("\n      "+t._s(t.item.scheduleDesc)+"\n    ")]):t._e(),t.isShowVarietyEpisode?i("div",{staticClass:"archive-pop-variety-episodes-wrapper"},t._l(t.allEpisodes,(function(e,s){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:s,staticClass:"variety-episode-item active__item",attrs:{"data-report-id":t.M_itemReportId(e.reportId,s+1)},on:{click:function(i){return i.stopPropagation(),t.onTapEpisode({episode:e,isHalfScreenSheet:!0,isMore:!1})}}},[i("div",{staticClass:"variety-episode-item__title"},[t._v(t._s(e.title))]),i("div",{staticClass:"variety-episode-item__subtitle"},[t._v(t._s(e.subTitle))])])})),0):i("div",{staticClass:"archive-pop-episodes-wrapper",on:{click:function(e){return e.stopPropagation(),t.onTapEpisodeWrapper.apply(null,arguments)}}},[i("ui-column",{attrs:{list:t.allEpisodes,col:5},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item,n=e.index;return[i("div",{staticClass:"episode-title",attrs:{role:"button","data-report-id":t.M_itemReportId(s.reportId,n+1),"data-episode-index":n}},[i("div",{staticClass:"episode-item"},[i("div",{staticClass:"episode-item"},[t._v("\n                "+t._s(s.title)+"\n              ")]),s.subTitle?i("div",{staticClass:"episode-item-desc"},[t._v("\n                "+t._s(s.subTitle)+"\n              ")]):t._e()])])]}}])})],1)])],1)}),[],!1,null,null,null);e.default=_.exports},238:function(t,e,i){},239:function(t,e,i){},241:function(t,e,i){},242:function(t,e,i){},243:function(t,e,i){},265:function(t,e,i){"use strict";i(243)},3135:function(t,e,i){"use strict";i(239)},3268:function(t,e,i){"use strict";i(381)},3269:function(t,e,i){"use strict";var s={name:"UiTextEllipsis",props:{content:String,ellipsis:{type:Number,default:2},fold:{type:Number,default:0},link:String,showArrow:{type:Boolean,default:!1},needFold:{type:Boolean,default:!1},foldBtnReportId:{type:String,default:""},needAutoShowFold:{type:Boolean,default:!1}},data:function(){return{renderContent:this.content,hasEllipsis:!1,showFold:!0,isFolded:!0}},computed:{foldText:function(){return this.isFolded?this.link:"收起"}},watch:{content:function(){var t=this;this.renderContent=this.content,this.hasEllipsis=!1,this.$nextTick((function(){t.setEllipsis()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.setEllipsis()}))},methods:{setEllipsis:function(){var t=this,e=this.$refs.wrapper,i=this.$refs.content,s=parseInt(window.getComputedStyle(e).lineHeight)||21,n=this.ellipsis*s+10,o=i.innerText,a="";if(o.length<=2)this.$nextTick((function(){t.hasEllipsis=!1,t.showFold=!1,t.renderContent=i.innerText}));else{for(var r=1;r<o.length-1;r++){if(e.clientHeight<n){a=i.innerText,!0;break}i.innerText="".concat(o.slice(0,-r),"...")}i.innerText=o,this.$nextTick((function(){t.hasEllipsis=!0,t.renderContent=a,t.showFold=t.content!==t.renderContent}))}},onTapLink:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];this.$emit.apply(this,["tap:link"].concat(e))},onTapTrigger:function(){this.renderContent=this.content,this.hasEllipsis=!1,this.$emit("tap:fold",this.foldText),this.needFold?(this.isFolded||(this.hasEllipsis=!0,this.setEllipsis()),this.isFolded=!this.isFolded):this.showFold=!1}}},n=(i(3268),i(4)),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"ui-text-ellipsis"},[t.hasEllipsis?i("span",{key:t.content,ref:"content",domProps:{innerHTML:t._s(t.renderContent)}}):i("span",{ref:"content",domProps:{innerHTML:t._s(t.content)}}),t.fold&&t.link&&t.showFold?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-text-ellipsis-link",attrs:{role:"button",tabindex:"-1"},on:{click:function(e){return e.stopPropagation(),t.onTapTrigger.apply(null,arguments)}}},[i("span",[t._v(t._s(t.foldText))]),t.showArrow?i("ui-arrow",{attrs:{gap:"",direction:t.isFolded?"down":"up"}}):t._e()],1):t._e(),(t.needAutoShowFold?!t.fold&&t.link&&t.showFold:!t.fold&&t.link)?i("span",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-text-ellipsis-link",class:{"ui-text-ellipsis-link-no-content":!t.content},attrs:{role:"button",tabindex:"-1","data-report-id":t.foldBtnReportId?t.foldBtnReportId:""},on:{click:function(e){return e.stopPropagation(),t.onTapLink.apply(null,arguments)}}},[t._v(t._s(t.link))]):t._e(),t._t("default")],2)}),[],!1,null,"a3f63fca",null).exports;o.install=function(t){t.component(o.name,o)};e.a=o},336:function(t,e,i){},381:function(t,e,i){},466:function(t,e,i){"use strict";var s=i(39),n=i(478),o=i(467),a=i(0),r={components:{nagetive:o.a},mixins:[s.a],provide:function(){return{block:this.data,item:this.item,pos:this.pos,typePos:this.typePos}},props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},isAriaHidden:{type:Boolean,default:!0},source:{type:Object,default:function(){return{}}},rich:{type:[Boolean,Number],default:!1},single:{type:[Boolean],default:!1}},data:function(){return{tagColor:n.a}},computed:{show:function(){return!a.g.isObjectEmpty(this.source)||this.item.feedback},className:function(){return[this.rich?"source":"source-plain",this.single?"source_single":""]}},methods:{onTapLink:function(){this.$emit("tap:link",this.$props.source.link)}}},c=(i(265),i(4)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{class:t.className,attrs:{"aria-hidden":t.isAriaHidden}},[t.source.iconMask?i("div",{staticClass:"source__icon-mask",style:{webkitMaskImage:"url('"+t.source.iconMask+"')"}}):t.source.iconUrl?i("div",{directives:[{name:"image",rawName:"v-image:avatar",value:t.source.iconUrl,expression:"source.iconUrl",arg:"avatar"}],staticClass:"source__icon",attrs:{"aria-label":"图像"}}):t._e(),t.source.title?i("div",{staticClass:"source__title",attrs:{title:t.M_os("链接")},domProps:{innerHTML:t._s(t.xss(t.source.title))}}):t._e(),t.source.link?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"source__link",attrs:{title:t.M_os("链接")},on:{click:function(e){return e.stopPropagation(),t.onTapLink.apply(null,arguments)}}},[t._v("\n    "+t._s(t.source.link.text)+"\n  ")]):t._e(),t.source.prepend&&t.source.prepend.length?t._l(t.source.prepend,(function(e){return i("div",{key:e,staticClass:"source__text"},[t._v("\n      "+t._s(e)+"\n    ")])})):t._e(),t.source.dateTime?i("div",{staticClass:"source__text date"},[t._v("\n    "+t._s(t.source.dateTime)+"\n  ")]):t.source.date?i("div",{staticClass:"source__text date"},[t._v("\n    "+t._s(t._f("dateFormat")(t.source.date))+"\n  ")]):t._e(),t.source.text&&t.source.text.length?t._l(t.source.text,(function(e){return i("div",{key:e,staticClass:"source__text"},[t._v("\n      "+t._s(e)+"\n    ")])})):t._e(),t.source.tag?i("div",{staticClass:"source__rec"},[i("ui-tags",{staticClass:"source__rec-item",attrs:{tags:t.source.tag}}),t.item.feedback?i("nagetive",t._b({staticClass:"source__rec-item"},"nagetive",t.$props,!1)):t._e()],1):i("div",{staticClass:"source__rec"},[i("div",{staticClass:"source__rec-item"},[t._v("\n      "+t._s(t.source.hot)+"\n    ")]),t.item.feedback?i("nagetive",t._b({staticClass:"source__rec-item"},"nagetive",t.$props,!1)):t._e()],1)],2):t._e()}),[],!1,null,null,null);e.a=l.exports},467:function(t,e,i){"use strict";var s=i(1),n=i.n(s),o=i(39),a=i(3),r={mixins:[o.a],props:{data:{type:Object,default:function(){return{}}}},data:function(){return{reasons:[]}},computed:{renderReasons:{set:function(t){this.reasons=t},get:function(){return this.reasons.length?this.reasons:this.data.reasons}},showButton:function(){return this.renderReasons.some((function(t){return t.checked}))}},created:function(){window.reportVueCreated("src/components/global/source/negative/withReason.vue");var t=this;a.a.$on(a.b.negativeHide,(function(){t.renderReasons=[]}))},methods:{tapJump:function(){this.$emit("tapJump")},tapConfirm:function(){this.$emit("tapConfirm",this.renderReasons)},tapReason:function(t,e){this.renderReasons=this.renderReasons.map((function(t,i){return e==i?Object.assign({},t,{checked:t.checked?0:1}):t}))}}},c=(i(474),i(4)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"header line"},[i("div",{staticClass:"title line__item"},[i("p",{staticClass:"title__word"},[t._v("\n        "+t._s(t.data.title)+"\n      ")])]),i("div",{staticClass:"button line__item primary no-wrap"},[t.showButton?i("div",{staticClass:"weui-btn weui-btn_mini weui-btn_primary",on:{click:t.tapConfirm}},[t._v("\n        "+t._s(t.data.confirm.title)+"\n      ")]):t._e()])]),i("div",{staticClass:"reasons"},t._l(t.renderReasons,(function(e,s){return i("div",{key:e.wording,staticClass:"reason",class:{reason__checked:e.checked},on:{click:function(i){return t.tapReason(e,s)}}},[t._v("\n      "+t._s(e.wording)+"\n    ")])})),0),i("div",{staticClass:"jump",on:{click:t.tapJump}},[i("div",{staticClass:"jump-in"},[t._v("\n      "+t._s(t.data.complaint.title)+"\n    ")])])])}),[],!1,null,"d28ecc42",null).exports,p={created:function(){window.reportVueCreated("src/components/global/source/negative/plain.vue")},props:{data:{type:Object,default:function(){return{}}}},methods:{tap:function(){this.$emit("tapJump")}}},u=(i(3135),Object(c.a)(p,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"n-plain active__item",on:{click:this.tap}},[this._v("\n  "+this._s(this.data.complaint.title)+"\n")])}),[],!1,null,"926be1a0",null).exports),d=new(i(10).a)({withReason:1,plain:2}),m={components:{withReason:l,plain:u},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{types:d}},methods:{tapJump:function(){var t=this.data.complaint;this.$emit("tapJump",t)},tapConfirm:function(t){this.$emit("tapConfirm",{confirm:this.data.confirm,feedback:{reasons:t,title:this.data.title}})}}},h=(i(476),Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.types[this.data.type],{tag:"component",attrs:{data:this.data},on:{tapJump:this.tapJump,tapConfirm:this.tapConfirm}})],1)}),[],!1,null,null,null).exports),f=i(8),v=i(17),_=i(0);function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){n()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b={components:{pop:h},mixins:[o.a],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},needWords:{type:Boolean,default:!1}},computed:{feedback:function(){return this.item.feedback},popData:function(){if(!this.feedback)return!1;var t=(this.$store.state.result.self.resultObj.feedback||{})[this.feedback.id];return!!t&&Object.assign({},t,this.feedback)}},created:function(){a.a.$on(a.b.viewChange,this._hide)},destroyed:function(){a.a.$off(a.b.viewChange,this._hide)},methods:{_hide:function(){this.$refs&&this.$refs.popOver&&this.$refs.popOver.hide()},_makeUrlPamrams:function(){var t=this;return y(y({},t.base),{},{clientType:t.data.real_type||t.data.type,subType:t.data.subType||0,docID:t.item.docID||"",boxID:t.data.boxID||"",boxPos:t.typePos||0,docPos:t.pos||0,docUrl:t.item.jumpUrl||t.item.doc_url||t.item.weappUrl||""})},onHide:function(){a.a.$emit(a.b.negativeHide)},tap:function(){this._hide()},tapJump:function(t){if(this.needWords&&this.data.items.length&&t.jumpUrl&&!t.jumpUrl.includes("relatedWords")){var e=this.data.items.map((function(t){return t.word||""})).join("|");t.jumpUrl=this.M_composeUrl(t.jumpUrl,{relatedWords:e,query:_.b.query})}this.M_go({jumpUrl:this.M_composeUrl(t.jumpUrl,this._makeUrlPamrams())}),this._hide()},tapConfirm:function(t){var e=Object.assign(this._makeUrlPamrams(),{clientTimeStamp:"".concat(+new Date),feedback:t.feedback});f.a.commonCgi({cgiName:t.confirm.cgiName||v.a.negativeFeedBack,data:e}),this.$refs.popOver.hide(),a.a.$emit(a.b.showToast,{text:"已反馈"})}}},k=(i(477),Object(c.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.popData?i("PopOver",{ref:"popOver",staticClass:"negative__wrap expand-hotspot",attrs:{"class-name":"negative__outter"},on:{hide:t.onHide},nativeOn:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()},touchmove:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"trigger",fn:function(){return[i("svg-icon",{staticClass:"source__negative",attrs:{name:"negative_button","aria-hidden":"true"}})]},proxy:!0},{key:"content",fn:function(){return[i("pop",{attrs:{data:t.popData},on:{tapJump:t.tapJump,tapConfirm:t.tapConfirm}})]},proxy:!0}],null,!1,582450734)}):t._e()}),[],!1,null,null,null));e.a=k.exports},474:function(t,e,i){"use strict";i(238)},476:function(t,e,i){"use strict";i(241)},477:function(t,e,i){"use strict";i(242)},478:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s=new(i(10).a)({blue:1,gold:2,gray:3,reading:4,green:5,red:6})},717:function(t,e,i){"use strict";var s={name:"UiHalfScreenSheet",props:{title:String,desc:String,footer:Object,noSafeAreaInsetBottom:{type:Boolean,default:!1}},methods:{show:function(){this.$refs._halfScreen.show()},hide:function(){this.$refs._halfScreen.hide()},onTapLink:function(){this.$emit("tap:link")}}},n=(i(1062),i(4)),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ui-half-screen",{ref:"_halfScreen",attrs:{"class-name":{"ui-half-screen-dialog-no-safe-area-inset-bottom":t.noSafeAreaInsetBottom},"can-scroll":"",header:{title:t.title,desc:t.desc,close:!0},footer:t.footer},on:{"tap:link":t.onTapLink,"tap:close":function(e){return t.$emit("tap:close")},"tap:mask":function(e){return t.$emit("tap:mask")},hide:function(e){return t.$emit("hide")}}},[i("div",{staticClass:"ui-half-screen-sheet-wrapper",class:{"ui-wrapper-with-footer":t.footer}},[t._t("default"),i("div",{staticClass:"ui-half-screen-sheet-end-line"})],2)])}),[],!1,null,"dad26306",null).exports;o.install=function(t){t.component(o.name,o)};e.a=o}}]);