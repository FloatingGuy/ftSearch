(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1141:function(t,e,a){},1885:function(t,e,a){"use strict";a(1141)},2273:function(t,e,a){"use strict";a.r(e);var s=a(480),i=a(0),o={created:function(){window.reportVueCreated("src/views/result/block/basic-block/components/channel-activity-cross-line/cacl.vue")},components:{"v-mask":s.a},mixins:[i.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{tags:function(){return this.item.recommendTag?this.item.recommendTag:this.item.source?this.item.source.tag:null}},methods:{tap:function(){this.M_go(this.item.jumpInfo||this.item),this.M_clickReport({clickZone:0})},tapSource:function(){this.M_go(this.item.source.jumpInfo||this.item.source),this.M_clickReport({clickZone:1})}}},n=(a(1885),a(4)),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"cross-line__ca active__item",attrs:{"data-id":t.M_exposeId()},on:{click:t.tap}},[a("div",{staticClass:"ca-thumb"},[a("ui-image",{staticClass:"ca-thumb-image",attrs:{url:t.item.imageData&&t.item.imageData.url||t.item.image}}),a("v-mask",{attrs:{text:t.item.likeNum||t.item.duration,like:!!t.item.likeNum}})],1),a("div",{staticClass:"ca-info"},[a("p",{staticClass:"info-title ellipsis_2",domProps:{innerHTML:t._s(t.xss(t.item.title))}}),t.item.source?a("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"vc-source active__opacity",class:{"vc-source_with-tag":t.item.source.tag},on:{click:function(e){return e.stopPropagation(),t.tapSource(t.item.source)}}},[a("ui-image",{staticClass:"vc-source__thumb",attrs:{url:t.item.source.iconUrl,size:20,overlay:""}}),a("div",[a("div",{staticClass:"vc-source__title"},[a("p",{staticClass:"vc-source__text",domProps:{innerHTML:t._s(t.item.source.title)}}),t.item.source.mark&&t.item.source.mark.length?a("div",{staticClass:"badges"},t._l(t.item.source.mark,(function(t){return a("ui-image",{key:t,staticClass:"badge",attrs:{url:t,size:16,overlay:""}})})),1):t._e()])]),t.item.dateTime?a("div",{staticClass:"vc-source__time"},[t._v("\n        "+t._s(t.item.dateTime)+"\n      ")]):t._e()],1):t._e(),t.item.social&&t.item.social.title?a("div",{staticClass:"social__box"},[t.item.social.avatars?a("div",{staticClass:"avatars"},t._l(t.item.social.avatars,(function(t){return a("ui-image",{key:t,staticClass:"social__avatar",attrs:{url:t,size:16}})})),1):t._e(),a("div",{staticClass:"social__title ellipsis_2"},[t._v("\n        "+t._s(t.item.social.title)+"\n      ")])]):t.tags?a("div",{staticClass:"vc__tag"},t._l(t.tags,(function(t){return a("ui-tag",{key:JSON.stringify(t),attrs:{title:t.title,type:t.type}})})),1):t._e()])])}),[],!1,null,"0fb9cbc5",null);e.default=c.exports},248:function(t,e,a){},249:function(t,e,a){},3205:function(t,e,a){"use strict";a(248)},480:function(t,e,a){"use strict";var s=a(493),i=a(0),o={mixins:[i.l,i.n],props:{useUiSource:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:Number,default:32},iconUrl:{type:String,default:"https://res.wx.qq.com/a/fed_upload/658e7c8d-708d-499b-8d41-4cca1d510d03/play.svg"},ts:{type:Number,default:0},liveWatch:{type:Boolean,default:!1},like:{type:Boolean,default:!1},isHot:{type:Boolean,default:!1},duration:{type:Boolean,default:!1},durationAtLeftBottom:{type:String,default:""},isTop:{type:Boolean,default:!1},noIcon:{type:Boolean,default:!1},dateTime:{type:String,default:""},tag:{type:Object,default:function(){}},tags:{type:Array,default:function(){return[]}},liveEnd:{type:Boolean,default:!1},tapSourceAlone:{type:Boolean,default:!1},tapTextAlone:{type:Boolean,default:!1},title:{type:String,default:""},desc:{type:String,default:""},descList:{type:Array,default:function(){return[]}},source:{type:Object,default:function(){return{}}},friendInfo:{type:Object,default:function(){return{}}},showGradient:{type:Boolean,default:!1},gradientPadding:{type:[Number,String],default:8},maskType:{type:Number,default:1},tagDate:{type:String,default:""},tagTitle:{type:String,default:""},specialShadow:{type:Boolean,default:!1},hotComment:{type:Object,default:function(){return null}},textWithBg:{type:Boolean,default:!1}},computed:{maskTypeText:function(){return{1:"视频",2:"文章"}[this.maskType]},showAdvancedSpecialShadow:function(){return(!!this.dateTime||!!this.source||!!this.ts||this.text)&&(!!this.friendInfo&&!!this.friendInfo.avatars&&this.friendInfo.avatars.length>0||!!this.title||!!this.desc)&&!this.hasHotComment},hasHotComment:function(){var t,e;return!(null===(t=this.hotComment)||void 0===t||null===(e=t.content)||void 0===e||!e.trim())}},methods:{decodeEmoji:function(t){if(t){var e=t.replace(/\\n/gi," ");return Object(s.decode)(e)}return""},tapSource:function(t){this.$emit("tap:source",t,this.M_getItemPos(t))},tapHotComment:function(t){var e;null!==(e=this.hotComment)&&void 0!==e&&e.jumpInfo&&(t.stopPropagation(),this.M_go(this.hotComment.jumpInfo),this.M_clickReport({clickZone:1,itemPos:this.M_getItemPos(this.hotComment),reportItem:this.reportItem},this.hotComment))}}},n=(a(3205),a(484),a(4)),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play-mask",attrs:{role:"option"}},[t.tag?a("ui-tag",{staticClass:"mask-tag",attrs:{title:t.tag.title,type:t.tag.type}}):t._e(),t.tags?a("ui-tags",{staticClass:"mask-tag",attrs:{tags:t.tags}}):t._e(),a("div",{staticClass:"mask-tag scene-tag"},[t.tagDate?a("div",{staticClass:"scene-tag__date"},[a("span",[t._v(t._s(t.tagDate))])]):t._e(),t.tagTitle?a("div",{staticClass:"scene-tag__title"},[a("span",[t._v(t._s(t.tagTitle))])]):t._e()]),a("div",{staticClass:"extra-wrap",class:{"linear-gradient":t.showGradient&&!t.specialShadow},style:{padding:"number"==typeof t.gradientPadding?t.gradientPadding+"px":""+t.gradientPadding}},[t.specialShadow?a("div",{class:{"special-shadow":!0,"special-shadow--advanced":t.showAdvancedSpecialShadow,"special-shadow--hot-comment":t.hasHotComment}}):t._e(),t.hasHotComment?a("ui-clamp",{directives:[{name:"active",rawName:"v-active.stop",value:!!t.hotComment.jumpInfo,expression:"!!hotComment.jumpInfo",modifiers:{stop:!0}}],class:{"hot-comment":!0,active__opacity:!!t.hotComment.jumpInfo},attrs:{autoresize:"","max-lines":2,"raw-html":t.decodeEmoji(t.hotComment.content),"aria-label":t.hotComment.content,"data-report-id":t.M_itemReportId(t.hotComment,1)},nativeOn:{click:function(e){return t.tapHotComment.apply(null,arguments)}},scopedSlots:t._u([{key:"before",fn:function(){return[a("span",{staticClass:"hot-comment__item-wrap"},[a("span",{staticClass:"hot-comment__label"},[t._v(t._s(t.hotComment.label))])])]},proxy:!0},{key:"after",fn:function(){return[a("span",{staticClass:"hot-comment__item-wrap"},[a("span",{staticClass:"hot-comment__like"},[a("online-image",{staticClass:"icon-like",attrs:{url:"https://res.wx.qq.com/t/fed_upload/59ee2753-a126-4495-bd1e-daccbdc285bf/like2_outlined.svg"}}),a("span",{staticClass:"ui-aria-hidden"},[t._v(", 获得")]),a("span",[t._v(t._s(t.hotComment.likeNum))]),a("span",{staticClass:"ui-aria-hidden"},[t._v("个赞")])],1)])]},proxy:!0}],null,!1,151505576)},[a("span",{staticClass:"hot-comment__content"})]):[t.friendInfo&&t.friendInfo.avatars&&t.friendInfo.avatars.length>0?a("div",{staticClass:"social",attrs:{"aria-hidden":"true"}},[a("div",{staticClass:"social__avatars"},t._l(t.friendInfo.avatars,(function(t){return a("ui-image",{key:t,staticClass:"social__avatar",attrs:{url:t,size:28,mode:"avatar"}})})),1),t.friendInfo.text?a("div",{staticClass:"social__title"},[t._v("\n          "+t._s(t.friendInfo.text)+"\n        ")]):t._e(),t.friendInfo.afterText?a("div",{staticClass:"social__after-text"},[t._v("\n          "+t._s(t.friendInfo.afterText)+"\n        ")]):t._e(),a("online-image",{staticClass:"social__mark",attrs:{url:"https://res.wx.qq.com/t/fed_upload/947ffded-fd95-4cf1-853c-1f052774f6aa/like_outlined_medium.svg"}})],1):t._e(),t.title?a("div",{staticClass:"vc-title",domProps:{innerHTML:t._s(t.xss(t.title))}}):t._e(),t.desc?a("div",{staticClass:"vc-desc",domProps:{innerHTML:t._s(t.xss(t.desc))}}):t._e(),t.descList?a("div",{staticClass:"vc__desc--list"},t._l(t.descList,(function(e,s){return a("span",{key:e+s,staticClass:"pr-8"},[t._v("\n          "+t._s(e)+"\n          "),a("span",{staticClass:"ui-aria-hidden"},[t._v(",")])])})),0):t._e(),t.durationAtLeftBottom?a("div",{staticClass:"play-mask__text",attrs:{role:"option"}},[a("span",{staticClass:"ui-aria-hidden"},[t._v("时长：")]),a("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.durationAtLeftBottom))])]):t.dateTime?a("div",{staticClass:"datetime"},[t._v("\n        "+t._s(t.dateTime)+"\n      ")]):!t.useUiSource&&t.source?a("div",{directives:[{name:"active",rawName:"v-active.stop",value:t.tapSourceAlone,expression:"tapSourceAlone",modifiers:{stop:!0}}],staticClass:"vc-source",class:{"vc-source_with-tag":t.source.tag,active__opacity:t.source.jumpInfo&&t.tapSourceAlone},attrs:{"data-report-id":t.M_itemReportId(t.source)},on:{click:function(e){return e.stopPropagation(),t.tapSource(t.source)}}},[t.source.iconUrl?a("ui-image",{staticClass:"vc-source__thumb",attrs:{url:t.source.iconUrl,size:20,mode:"avatar",overlay:""}}):t._e(),t.source.title||t.source.mark?a("div",{staticClass:"vc-source-title-box"},[a("div",{staticClass:"vc-source__title"},[a("p",{staticClass:"vc-source__text",domProps:{innerHTML:t._s(t.xss(t.source.title))}}),a("div",{staticClass:"badges"},t._l(t.source.mark,(function(t){return a("ui-image",{key:t,attrs:{url:t,size:14,mode:"raw"}})})),1),a("p",{staticClass:"vc-source__dateTime",domProps:{innerHTML:t._s(t.xss(t.source.dateTime))}})])]):t._e()],1):t.source?a("ui-source",t._b({directives:[{name:"active",rawName:"v-active.stop",value:!!t.source.jumpInfo,expression:"!!source.jumpInfo",modifiers:{stop:!0}}],attrs:{"data-report-id":t.M_itemReportId(t.source)},nativeOn:{click:function(e){return e.stopPropagation(),t.tapSource(t.source)}},scopedSlots:t._u([{key:"after-text",fn:function(){},proxy:!0}])},"ui-source",t.source,!1)):t._e(),a("div",{staticClass:"extra-info-gap"}),t.ts||t.text?a("span",{directives:[{name:"active",rawName:"v-active.stop",value:t.tapTextAlone,expression:"tapTextAlone",modifiers:{stop:!0}}],staticClass:"play-mask__bg active__opacity"},[t.like?a("span",{staticClass:"play-mask__text",class:{"play-mask__text_with-bg":t.textWithBg},attrs:{role:"option"}},[t.isHot?a("online-image",{staticClass:"icon-like",attrs:{url:"https://res.wx.qq.com/t/fed_upload/1f3fb4f3-6753-466e-9a75-eef436716497/fire.svg"}}):a("online-image",{staticClass:"icon-like",attrs:{url:"https://res.wx.qq.com/t/fed_upload/b9567c10-5a84-47b5-ae89-8c71aedb8c92/like_outlined_medium.svg"}}),a("span",{staticClass:"ui-aria-hidden"},[t._v("，点赞：")]),a("span",[t._v(t._s(t.text))])],1):a("span",{staticClass:"play-mask__text",class:{"play-mask__text_with-bg":t.textWithBg},attrs:{role:"option"}},[t.durationAtLeftBottom?t._e():[t.ts||t.duration||t.text.toString().indexOf(":")>-1?a("span",{staticClass:"ui-aria-hidden"},[t._v("，时长：")]):t._e(),t.liveWatch?a("span",{staticClass:"ui-aria-hidden"},[t._v(t._s("，"+t.text))]):t._e(),t.ts?a("span",[t._v(t._s(t._f("mmss")(t.ts)))]):a("span",{attrs:{"aria-hidden":t.liveWatch}},[t._v(t._s(t.text))])],t.isTop?a("online-image",{staticClass:"icon-top",attrs:{url:"https://res.wx.qq.com/t/fed_upload/d649fe44-ec25-474b-bcc0-2281a0105218/top.svg"}}):t._e()],2)]):t._e(),a("span",{staticClass:"ui-aria-hidden"},[t._v(t._s(","+t.maskTypeText+"。"))])]],2),t.noIcon?t._e():a("div",{staticClass:"play-icon-wrapper"},[a("ui-image",{staticClass:"play-icon",attrs:{"aria-label":"播放",url:t.iconUrl,size:t.size,type:"img"}})],1),t.liveEnd?a("div",{staticClass:"live-end-tip"},[a("ui-image",{staticClass:"live-end-icon",attrs:{url:"https://res.wx.qq.com/a/fed_upload/4e09c767-7238-4dab-bb48-8da245eeb470/live_icon.svg",size:20}}),a("span",[t._v("直播已结束")])],1):t._e()],1)}),[],!1,null,"2e6b8585",null);e.a=c.exports},484:function(t,e,a){"use strict";a(249)}}]);