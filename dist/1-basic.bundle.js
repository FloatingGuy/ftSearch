(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1133:function(e,t,s){"use strict";s(1146)},1146:function(e,t,s){},282:function(e,t,s){},521:function(e,t,s){"use strict";s.r(t);var i=s(1),o=s.n(i),r=s(0),a=s(504),c=s(549),n={VIDEO:1,LIVE_BROADCAST:2},u={created:function(){window.reportVueCreated("src/components/general/news-hot/basic.vue")},name:"Basic",components:{VideoPlayer:a.a,UiVideo:c.a},mixins:[r.n,r.l,r.j],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{cardType:n,innerRatio:!1}},computed:{hasVideo:function(){return this.source.videoInfo&&this.source.videoInfo.playUrl},cardType12:function(){return!!this.source.cardType&&(this.source.cardType===n.VIDEO||this.source.cardType===n.LIVE_BROADCAST)}},watch:o()({},"source.cardType",{handler:function(e){var t=this;if(this.source.cardType)if(1==e){var s=new Image;s.src=this.source.thumbUrl,s.onload=function(){var e=s.height/s.width;e<3/3.5?t.innerRatio=.56:e>3.5/3&&(t.innerRatio=1.17)}}else if(2==e){var i=new Image;i.src=this.source.thumbUrl,i.onload=function(){var e=i.height/i.width;e<3/4?t.innerRatio=.54:e>4/3&&(t.innerRatio=1.17)}}},immediate:!0}),methods:{onTap:function(){if(this.M_go(this.source.jumpInfo||this.source),this.cardType12){var e=this.data.items[0]&&this.data.items[0].title||this.source.subTitle;this.M_clickReport({clickZone:this.isService?"".concat(this.M_getClickZonePath()):1,clickContent:e||""},this.source)}else this.M_clickReport({clickZone:this.isService?"".concat(this.M_getClickZonePath()):1,clickContent:this.data.items[0]&&this.data.items[0].title||this.source.subTitle||""},this.source)},onTapSource:function(){this.source.cardType;if(this.cardType12){var e=this.source.source;this.M_go(e.jumpInfo||this.source.jumpInfo||this.source),this.M_clickReport({clickZone:this.isService?"".concat(this.M_getClickZonePath(),".source"):2,clickContent:e.title||""})}else this.M_go(this.source.jumpInfo||this.source),this.M_clickReport()}}},l=(s(1133),s(4)),d=Object(l.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"news-hot active__absolute",class:{"reset-style-1":1===e.source.subItemStyle},attrs:{"data-report-id":e.M_itemReportId(e.source.reportId)},on:{click:function(t){return t.stopPropagation(),e.onTap.apply(null,arguments)}}},[e.source.thumbUrl&&!e.hasVideo&&e.source.cardType?s("video-player",{attrs:{role:"option","aspect-ratio":.536,poster:e.source.thumbUrl,"export-id":e.source.exportId,"nonce-id":e.source.nonceId,tag:e.source.banner&&e.source.banner[0]&&{title:e.source.banner[0].title,type:e.source.banner[0].type},"live-stream-ended":!!e.source.liveEndTips,"live-stream-ended-text":e.source.liveEndTips,"round-corner":!0,data:e.data,item:e.item,"type-pos":e.typePos,pos:e.pos}},[e.source.liveWatchNum?s("div",{staticClass:"watch-wrap"},[s("svg-icon",{attrs:{"class-name":"watch-icon",name:"watch"}}),s("div",{staticClass:"live-watch-num"},[e._v("\n        "+e._s(e.source.liveWatchNum)+"\n      ")])],1):e._e(),e.source.cardType&&e.source.cardType===e.cardType.VIDEO?s("svg-icon",{staticClass:"video-play-icon",attrs:{name:"video_play_circle"}}):e._e(),e.source.likeNum?s("div",{staticClass:"video-like-num"},[s("svg-icon",{staticClass:"like-icon",attrs:{name:"like"}}),e._v("\n      "+e._s(e.source.likeNum)+"\n    ")],1):e._e(),1===e.source.style?s("div",{staticClass:"card-inner"},[e.source.subTitle?s("p",{staticClass:"news-sub-title ellipsis_2",domProps:{innerHTML:e._s(e.xss(e.source.subTitle))}}):e._e(),e.source.desc?s("p",{staticClass:"news-sub-desc",domProps:{innerHTML:e._s(e.xss(e.source.desc))}}):e._e(),s("ui-source",{directives:[{name:"active",rawName:"v-active.stop",value:e.cardType12,expression:"cardType12",modifiers:{stop:!0}}],staticClass:"news-hot-source",class:{"video-number-live":e.cardType12},attrs:{title:e.source.source.title,tags:e.source.tags,"icon-url":e.source.cardType&&e.source.source.iconUrl},nativeOn:{click:function(t){return t.stopPropagation(),e.onTapSource.apply(null,arguments)}},scopedSlots:e._u([{key:"after-text",fn:function(){return[e.cardType12?s("ui-tag",{attrs:{type:8}}):e._e(),s("span",{staticClass:"source-date-time"},[e._v(e._s(e.source.source.dateTime))]),e._l(e.source.recommendTag,(function(t){return s("ui-tag",e._b({key:t.title,attrs:{"no-bg":""}},"ui-tag",t,!1))}))]},proxy:!0}],null,!1,2359351883)})],1):e._e()],1):e._e(),!e.source.thumbUrl||e.hasVideo||e.source.cardType?e._e():s("div",{directives:[{name:"image",rawName:"v-image",value:e.source.thumbUrl,expression:"source.thumbUrl"}],staticClass:"news-thumbUrl news-media",attrs:{role:"option"}},[1===e.source.style?s("div",{staticClass:"card-inner"},[e.source.subTitle?s("p",{staticClass:"news-sub-title ellipsis_2",domProps:{innerHTML:e._s(e.xss(e.source.subTitle))}}):e._e(),e.source.desc?s("p",{staticClass:"news-sub-desc",domProps:{innerHTML:e._s(e.xss(e.source.desc))}}):e._e(),s("ui-source",{directives:[{name:"active",rawName:"v-active.stop",value:e.cardType12,expression:"cardType12",modifiers:{stop:!0}}],staticClass:"news-hot-source",class:{"video-number-live":e.cardType12},attrs:{title:e.source.source.title,tags:e.source.tags,"icon-url":e.source.cardType&&e.source.source.iconUrl},nativeOn:{click:function(t){return t.stopPropagation(),e.onTapSource.apply(null,arguments)}},scopedSlots:e._u([{key:"after-text",fn:function(){return[e.cardType12?s("ui-tag",{attrs:{type:8}}):e._e(),s("span",{staticClass:"source-date-time"},[e._v(e._s(e.source.source.dateTime))]),e._l(e.source.recommendTag,(function(t){return s("ui-tag",e._b({key:t.title,attrs:{"no-bg":""}},"ui-tag",t,!1))}))]},proxy:!0}],null,!1,2359351883)})],1):e._e()]),e.hasVideo?s("div",{staticClass:"news-video news-media",attrs:{"aria-hidden":"true"}},[s("ui-video",{staticClass:"video-common",attrs:{image:e.source.videoInfo.thumbUrl,time:e.source.videoInfo.duration,"no-active":""}})],1):e._e(),e.source.style?e._e():s("div",{staticClass:"grey-wrap",attrs:{role:"option",title:"链接"}},[!e.source.thumbUrl&&e.source.subTitle?s("div",{staticClass:"new-no-thumb-bg"},[s("div",{staticClass:"news-sub-title-wrap"},[e.source.subTitle?s("p",{staticClass:"news-sub-title ellipsis_2",domProps:{innerHTML:e._s(e.xss(e.source.subTitle))}}):e._e()])]):e.source.subTitle?s("div",{staticClass:"news-title-flex-wrapper"},[s("p",{staticClass:"news-sub-title ellipsis_2",domProps:{innerHTML:e._s(e.xss(e.source.subTitle))}})]):e._e(),e.source.desc?s("p",{staticClass:"news-sub-desc",domProps:{innerHTML:e._s(e.xss(e.source.desc))}}):e._e(),s("ui-source",{directives:[{name:"active",rawName:"v-active.stop",value:e.cardType12,expression:"cardType12",modifiers:{stop:!0}}],staticClass:"news-hot-source",class:{"video-number-live":e.cardType12},attrs:{title:e.source.source.title,tags:e.source.tags,"icon-url":e.source.cardType&&e.source.source.iconUrl},nativeOn:{click:function(t){return t.stopPropagation(),e.onTapSource.apply(null,arguments)}},scopedSlots:e._u([{key:"after-text",fn:function(){return[e.cardType12?s("ui-tag",{attrs:{type:8}}):e._e(),s("span",{staticClass:"source-date-time"},[e._v(e._s(e.source.source.dateTime))]),e._l(e.source.recommendTag,(function(t){return s("ui-tag",e._b({key:t.title,attrs:{"no-bg":""}},"ui-tag",t,!1))}))]},proxy:!0}],null,!1,2359351883)})],1)],1)}),[],!1,null,"36989386",null);t.default=d.exports},548:function(e,t,s){"use strict";s(282)},549:function(e,t,s){"use strict";var i={name:"UiVideo",props:{image:String,time:[String,Number],like:Boolean,noActive:Boolean,top:Boolean,ratio:Number},data:function(){return{renderHeight:0}},mounted:function(){var e=this,t=function(){e.renderHeight=e.$refs._img.$el.clientWidth/(e.ratio||1)||100};t(),window.addEventListener("resize",t),this.$on("hook:beforeDestroy",(function(){window.removeEventListener("resize",t)}))},methods:{onTap:function(e){this.noActive||this.$emit("tap",e)}}},o=(s(548),s(4)),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"active",rawName:"v-active.stop",value:!e.noActive,expression:"!noActive",modifiers:{stop:!0}}],staticClass:"ui-video",on:{click:e.onTap}},[e.image?s("ui-image",{ref:"_img",staticClass:"ui-video-image",style:e.ratio?{height:e.renderHeight+"px"}:null,attrs:{url:e.image,mode:"color"}}):e._e(),s("div",{staticClass:"ui-video-mask"},[e.$slots.default?[e._t("default")]:[e.time?s("div",{staticClass:"ui-video-time",attrs:{role:"option"}},[e.like?s("svg-icon",{attrs:{"class-name":"icon-like",name:"like_outlined_medium",role:"option","aria-label":",点赞"}}):e._e(),s("div",{class:{"ui-time-with-top":e.top}},[e._v(e._s(e.time))]),e.top?s("ui-icon",{attrs:{name:"top",role:"option","aria-label":",置顶"}}):e._e()],1):e._e()]],2),s("ui-icon",{staticClass:"ui-video-icon-button",attrs:{name:"play-o",role:"button","aria-label":".播放"}})],1)}),[],!1,null,"5651b63c",null).exports;r.install=function(e){e.component(r.name,r)};t.a=r}}]);