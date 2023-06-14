(window.webpackJsonp=window.webpackJsonp||[]).push([[178,8],{1198:function(e,t,i){},247:function(e,t,i){},2668:function(e,t,i){"use strict";i(1198)},301:function(e,t,i){},3615:function(e,t,i){"use strict";i(301)},544:function(e,t,i){"use strict";i.r(t);var o=i(0),r={created:function(){window.reportVueCreated("src/components/general/rich-media-panel/rich-media-panel.vue")},name:"RichMediaPanel",components:{RichMedia:i(634).a},mixins:[o.n,o.l],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},source:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},methods:{}},s=(i(2668),i(4)),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"rich-media-panel"},[e.source.videos&&e.source.videos.length?i("ui-column",{attrs:{fill:"",list:e.source.videos,col:e.source.column||2,gap:e.source.gap||8},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item,r=t.index;return[i("rich-media",{attrs:{data:e.data,item:Object.assign({},o,{docID:e.item.docID}),"type-pos":e.typePos,pos:e.pos,"group-key":e.data.boxID,"item-pos":r+1,"emoji-supported":"","trans-bg":e.source.transBg,"bg-color":e.source.bgColor,"round-corner-size":e.source.roundCornerSize,"hide-control":e.source.hideControl,"aspect-ratio":e.source.aspectRatio}})]}}],null,!1,3755014349)}):e._e()],1)}),[],!1,null,"89a2ea2a",null);t.default=n.exports},562:function(e,t,i){"use strict";i(247)},613:function(e,t,i){"use strict";i.r(t);var o=i(0),r={props:{text:{type:String,default:""}},methods:{checkShowDebugWord:function(){var e=o.d.getStore("isShowDebugWord");return this.text&&e},tap:function(e){var t=e.currentTarget.classList;t.contains("show")?t.remove("show"):t.add("show")}}},s=(i(562),i(4)),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.checkShowDebugWord()?i("div",{staticClass:"debug-box",on:{click:function(t){return t.stopPropagation(),e.tap.apply(null,arguments)}}},[i("div",{staticClass:"inner",domProps:{innerHTML:e._s(e.xss(e.text))}})]):e._e()}),[],!1,null,"391a6019",null);t.default=n.exports},622:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var o=i(13),r=i(52);function s(e){var t,i=e.feedId,s=e.nonceId,d=e.encryptId;return i&&(a[(t={feedId:i,nonceId:s,encryptId:d}).feedId]||(a[t.feedId]=t,c.push(t))),{start:function(){n||(n=setTimeout((function(){c.length<=0||!r.a.isSupportPreloadFinderFeed||(c.map((function(e){return e.feedId})),o.a.preloadFinderFeed({items:c},(function(e){})),c=[]),n=0}),100))},cancel:function(){return function(e){var t=c.findIndex((function(t){return t.feedId==e}));-1!==t&&(c.splice(t,1),delete a[e])}(i)}}}var n=0,a={},c=[]},634:function(e,t,i){"use strict";var o=i(32),r=i.n(o),s=i(24),n=i.n(s),a=i(504),c=i(613),d=i(0),u=i(493),l=i(622),m={components:{videoPlayer:a.a,debugInfo:c.default},mixins:[d.l,d.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},itemPos:{type:Number},emojiSupported:{type:Boolean,default:!1},roundCornerBottomRight:{type:Boolean,default:!1},roundCornerBottomLeft:{type:Boolean,default:!1},groupKey:{type:String,default:""},aspectRatio:{type:Number,default:4/3},transBg:{type:Boolean,default:!1},bgColor:{type:String,default:""},roundCornerSize:{type:Number,default:4},hideControl:{type:Boolean,default:!1},intersectionThreshold:{type:Number,default:.7},showMediaInfo:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:function(){return{hideBadges:!1,sourceTitleMinWidth:Global.os.android?28*Math.min(d.b.fontRatio,1.4):28}},computed:{showSocialInfo:function(){return!!this.item.social&&!!this.item.social.avatars&&this.item.social.avatars.length>0},isLive:function(){return!!this.item.exportId&&!!this.item.nonceId}},mounted:function(){var e=this;if(!this.isLive&&!0!==this.item.disablePreload){var t=null;try{var i=JSON.parse(this.item.jumpInfo.extInfo),o=i.feedNonceId,s=i.encryptedObjectId,a=this.item.jumpInfo.feedId;a&&(t=Object(l.a)({feedId:a,nonceId:o,encryptId:s}),this.observer=new IntersectionObserver((function(i){1e3*n()(i,1)[0].intersectionRatio.toFixed(3)>=200&&(t&&t.start(),e.observer&&e.observer.disconnect())}),{threshold:.2}),this.observer.observe(this.$el))}catch(d){}}if(this.$refs.badges){var c=r()(this.$refs.badges.children).pop();c&&this.$refs.badges.getBoundingClientRect().right<c.getBoundingClientRect().right&&(this.hideBadges=!0)}window.addEventListener("resize",this.onResize)},beforeDestroy:function(){this.observer&&this.observer.disconnect(),window.removeEventListener("resize",this.onResize)},methods:{handleTitle:function(e){return this.emojiSupported?Object(u.decode)(e):e},onTap:function(){this.M_go(this.item.jumpInfo),this.M_clickReport({clickZone:1,clickContent:this.item.title,itemPos:this.M_getItemPos(this.item.reportId)},this.item),this.$emit("tap")},onResize:function(){var e=this;this.hideBadges=!1,this.$nextTick((function(){if(e.$refs.badges){var t=r()(e.$refs.badges.children).pop();t&&e.$refs.badges.getBoundingClientRect().right<t.getBoundingClientRect().right&&(e.hideBadges=!0)}}))}}},p=(i(3615),i(4)),f=Object(p.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.item.jumpInfo,expression:"!!item.jumpInfo",modifiers:{stop:!0}}],staticClass:"rich-media active__absolute",class:{"trans-bg":e.transBg},style:{backgroundColor:e.bgColor},attrs:{"data-id":e.M_exposeId(),"data-report-id":e.M_itemReportId(e.item.reportId,e.itemPos||e.pos),"data-finder-locate-id":e.item.docID+"&",role:"option"},on:{click:function(t){return t.stopPropagation(),e.onTap.apply(null,arguments)}}},[i("video-player",{attrs:{src:e.item.videoUrl,poster:e.item.image||e.item.imageUrl,"export-id":e.item.exportId,"nonce-id":e.item.nonceId,"like-num":e.item.likeNum,"is-hot":e.item.isHot,"left-bottom-text":e.item.leftBottomText||e.item.dateTime,"duration-at-left-bottom":e.item.duration,"lazy-init":!0,controls:e.hideControl?[]:["play","sound"],"mask-bottom-shadow":!0,"is-sound-control-interactive":!0,"round-corner-top-left":!0,"round-corner-top-right":!0,"round-corner-bottom-right":e.roundCornerBottomRight||e.transBg,"round-corner-bottom-left":e.roundCornerBottomLeft||e.transBg,"round-corner-size":e.roundCornerSize,"aspect-ratio":e.aspectRatio,"sound-control-position-relative-to-top-right":8,data:e.data,item:e.item,"type-pos":e.typePos,pos:e.pos,"parent-item-pos":e.pos+":"+e.M_getItemType(e.item.reportId),"group-key":e.groupKey,"play-successively-in-group":!!e.groupKey,"intersection-threshold":e.intersectionThreshold,"intersection-controllable":!e.disabled}},[e._t("mask")],2),e.showMediaInfo?i("div",{staticClass:"rich-media__info"},[e.showSocialInfo?i("div",{staticClass:"rich-media__social-info",attrs:{"aria-hidden":"true"}},[i("div",{staticClass:"rich-media__social-info__avatars"},e._l(e.item.social.avatars,(function(e,t){return i("ui-image",{key:t,staticClass:"rich-media__social-info__avatar",attrs:{url:e,size:28,mode:"avatar"}})})),1),e.item.social.title?i("div",{ref:"socialTitleRef",staticClass:"rich-media__social-info__title"},[e._v("\n        "+e._s(e.item.social.title)+"\n      ")]):e._e(),i("svg-icon",{attrs:{"class-name":"rich-media__social-info__mark",name:"like_outlined_medium"}})],1):e._e(),e.item.title&&e.item.postfixText?i("ui-clamp",{staticClass:"rich-media__title",attrs:{autoresize:"","max-lines":e.showSocialInfo?1:2,"raw-html":e.handleTitle(e.xss(e.item.title))}},[e.item.prefixIcon?i("ui-image",{staticClass:"rich-media__prefix-icon",attrs:{slot:"before",url:e.item.prefixIcon,size:16},slot:"before"}):e._e(),i("span",{staticStyle:{"margin-left":"4px"},attrs:{slot:"after"},slot:"after"},[e._v(e._s(e.item.postfixText))])],1):e.item.title?i("div",{staticClass:"rich-media__title",class:e.showSocialInfo?"ellipsis_1":"ellipsis_2"},[e.item.prefixIcon?i("ui-image",{staticClass:"rich-media__prefix-icon",attrs:{url:e.item.prefixIcon,size:16}}):e._e(),i("span",{domProps:{innerHTML:e._s(e.handleTitle(e.xss(e.item.title)))}})],1):e._e(),e.item.source&&e.item.source.title?i("div",{staticClass:"rich-media__source"},[e.item.source.iconUrl?i("ui-image",{staticClass:"rich-media__source__thumb",attrs:{url:e.item.source.iconUrl,size:16,mode:"avatar"}}):e._e(),i("div",{staticClass:"rich-media__source__title",style:{"min-width":e.sourceTitleMinWidth+"px"},domProps:{innerHTML:e._s(e.xss(e.item.source.title))}}),e.item.source.dateTime?i("p",{staticClass:"rich-media__source__desc",domProps:{innerHTML:e._s(e.xss(e.item.source.dateTime))}}):e._e(),e.item.source.mark&&e.item.source.mark.length>0&&!e.hideBadges?i("div",{ref:"badges",staticClass:"rich-media__source__badges"},e._l(e.item.source.mark,(function(e,t){return i("ui-image",{key:t,attrs:{url:e,size:14,mode:"raw"}})})),1):e._e(),e.item.duration?i("div",{staticClass:"rich-media__source__dateTime"},[e._v("\n        "+e._s(e.item.dateTime)+"\n      ")]):e._e()],1):e._e()],1):e._e(),e.item.debugWord?i("debug-info",{key:e.item.debugWord,attrs:{text:e.item.debugWord}}):e._e()],1)}),[],!1,null,"b95a67e0",null);t.a=f.exports}}]);