(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{1090:function(e,t,i){},1091:function(e,t,i){},1092:function(e,t,i){},1093:function(e,t,i){},1094:function(e,t,i){},1095:function(e,t,i){},1096:function(e,t,i){},1822:function(e,t,i){"use strict";i(1091)},1824:function(e,t,i){"use strict";i(1093)},1826:function(e,t,i){"use strict";i(1095)},282:function(e,t,i){},3301:function(e,t,i){"use strict";var a=i(1),n=i.n(a),s={inject:{getImgClass:{default:function(){return function(){return""}}},baseRem:{default:90}},props:{mediaList:{type:Array,default:function(){return[]}},mediaPicMaxlength:{type:Number,default:4},mediaTitle:{type:String,default:""},objectType:{type:Number,default:0},mediaJumpInfo:{type:Object}},data:function(){return{singleImageClass:"",singleImageStyle:{}}},computed:{mediaData:function(){var e=this;if(1==e.mediaList.length)return e.mediaList[0];var t=e.mediaList.slice(0,this.mediaPicMaxlength);return e.mediaList.length>this.mediaPicMaxlength&&(t[t.length-1].tagText="共".concat(e.mediaList.length,"图")),t}},mounted:function(){var e=this;if(!(1!==this.mediaList.length||this.mediaData.width&&this.mediaData.height)){var t=new Image;t.src=this.mediaData.thumb,t.onload=function(){var i=t.width,a=t.height;if(i===a)e.singleImageClass="moment__image_square";else{var s,m=i>a;e.singleImageClass="moment__image_".concat(m?"horizontal":"vertical");var o=e.baseRem/16,d=m?a/i:i/a;e.singleImageStyle=(s={width:"".concat(m?o:o*d,"rem"),height:"".concat(m?o*d:o,"rem")},n()(s,m?"minHeight":"minWidth","".concat(o*(9/16),"rem")),n()(s,"maxWidth","33.3333%"),s)}}}},methods:{tap:function(e,t){if(this.mediaJumpInfo){e.stopPropagation();var i=null;if(e&&e.target){var a=e.target.getBoundingClientRect(),n=a.top,s=(a.right,a.bottom,a.left);i={width:a.width,height:a.height,y:n+(window.pageYOffset||document.documentElement.scrollTop),x:s}}this.$emit("tap:media",{snsImageIndex:t,cardFrame:i})}}}},m=(i(3679),i(4)),o=Object(m.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"moment__img"},[1==e.mediaList.length?i("div",{staticClass:"moment__img_single",attrs:{"data-report-id":e.mediaData.dataReportId}},[i("span",{on:{click:function(t){return e.tap(t,0)}}},[i("ui-image",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],class:e.singleImageClass||e.getImgClass(e.mediaData),style:e.singleImageStyle,attrs:{url:e.mediaData.thumb}})],1)]):e._e(),e.mediaList.length>1?i("div",{staticClass:"moment__img_multi"},e._l(e.mediaData,(function(t,a){return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],key:t.url,staticClass:"moment__img-suqare",style:"max-width: calc((100% - 12px) / "+e.mediaPicMaxlength+")",attrs:{"data-report-id":t.dataReportId},on:{click:function(t){return e.tap(t,a)}}},[t.tagText?i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],staticClass:"moment__img-suqare-with-text active__absolute",on:{click:function(t){return t.stopPropagation(),e.$emit("tap:mediaMore")}}},[i("ui-image",{staticClass:"moment__img-suqare-inner",attrs:{url:t.thumb}}),i("div",{staticClass:"moment__img-tag"},[e._v("\n          "+e._s(t.tagText)+"\n        ")])],1):i("ui-image",{staticClass:"moment__img-suqare-inner",attrs:{url:t.thumb}})],1)})),0):e._e()])}),[],!1,null,"11042a16",null).exports,d={created:function(){window.reportVueCreated("src/basic-components/packages/ui-moment/src/medias/moment-only-title.vue")},inject:["momentType"],props:{mediaList:{type:Array,default:function(){return[]}},mediaTitle:{type:String,default:""},objectType:{type:Number,default:0},mediaJumpInfo:{type:Object}},computed:{iconName:function(){var e=this;switch(e.objectType){case e.momentType.music:case e.momentType.richMusic:return"music";case e.momentType.video:case e.momentType.streamVideo:return"recorder";default:return"link"}}},methods:{tap:function(e){this.mediaJumpInfo&&(e.stopPropagation(),this.$emit("tap:media"))}}},c=(i(1822),Object(m.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return this.mediaTitle?t("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!this.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],staticClass:"media__title",on:{click:this.tap}},[t("ui-icon",{staticClass:"media__title-icon",class:"media__title-icon-"+this.iconName,attrs:{"aria-hidden":"true",name:this.iconName}}),t("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:this.mediaTitle,expression:"mediaTitle"}],staticClass:"media__title-text"})],1):this._e()}),[],!1,null,null,null).exports),r={components:{UiVideo:i(549).a},inject:["getImgClass"],props:{mediaList:{type:Array,default:function(){return[]}},mediaTitle:{type:String,default:""},objectType:{type:Number,default:0},mediaJumpInfo:{type:Object}},computed:{mediaData:function(){return this.mediaList[0]}},methods:{tap:function(e){if(this.mediaJumpInfo){e.stopPropagation();var t=null;if(e&&e.target){var i=e.target.getBoundingClientRect(),a=i.top,n=(i.right,i.bottom,i.left);t={width:i.width,height:i.height,y:a+(window.pageYOffset||document.documentElement.scrollTop),x:n}}this.$emit("tap:media",{cardFrame:t})}}}},l=(i(3318),Object(m.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"moment__video"},[i("ui-video",{class:e.getImgClass(e.mediaData),attrs:{"no-active":!e.mediaJumpInfo,image:e.mediaData.thumb,like:!!e.mediaData.likeNum,time:e.mediaData.likeNum,"data-report-id":e.mediaData.dataReportId},on:{tap:e.tap}})],1)}),[],!1,null,"27f1c801",null).exports),u={NONE:0,OPEN:1},p={inject:["getImgClass"],props:{mediaList:{type:Array,default:function(){return[]}},mediaTitle:{type:String,default:""},objectType:{type:Number,default:0},mediaJumpInfo:{type:Object}},data:function(){return{finderLiveStatus:u}},computed:{mediaData:function(){return this.mediaList[0]}},methods:{tap:function(e){this.mediaJumpInfo&&(e.stopPropagation(),this.$emit("tap:media"))}}},f=(i(1824),Object(m.a)(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"moment__live"},[i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],staticClass:"moment__live-img",class:{open:e.mediaData.finderLiveStatus,none:!e.mediaData.finderLiveStatus},attrs:{"data-report-id":e.mediaData.dataReportId},on:{click:e.tap}},[i("ui-image",{class:e.getImgClass(e.mediaData),attrs:{url:e.mediaData.thumb,mode:"color"}}),e.mediaData.finderLiveStatus?i("ui-tag",{staticClass:"moment__live-open",attrs:{title:"直播中",type:15}}):i("div",{staticClass:"moment__live-none"},[i("div",{staticClass:"moment__live-none-info"},[i("div",{staticClass:"moment__live-none-icon-wrap"},[i("ui-image",{staticClass:"moment__live-none-icon",attrs:{size:12,url:"https://res.wx.qq.com/a/fed_upload/5ee04c45-4526-4b14-910f-44ab4f61386f/live_icon.svg"}})],1),i("span",{staticClass:"moment__live-none-text"},[e._v("直播已结束")])])])],1)])}),[],!1,null,null,null).exports),h={inject:["momentType"],props:{mediaList:{type:Array,default:function(){return[]}},mediaTitle:{type:String,default:""},mediaPicUrl:{type:String,default:""},objectType:{type:Number,default:0},mediaJumpInfo:{type:Object}},computed:{iconName:function(){var e=this;switch(e.objectType){case e.momentType.video:case e.momentType.streamVideo:return"video";case e.momentType.articleVideo:return"play-o";case e.momentType.link:default:return""}},mediaData:function(){return this.mediaList&&this.mediaList.length&&this.mediaList[0]||{}}},methods:{tap:function(e){this.mediaJumpInfo&&(e.stopPropagation(),this.$emit("tap:media"))}}},v=(i(3319),Object(m.a)(h,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.mediaTitle?i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],staticClass:"media__block",attrs:{"data-report-id":e.mediaData.dataReportId},on:{click:e.tap}},[i("div",{staticClass:"media__block-pic_wrapper"},[i("ui-image",{staticClass:"media__block-pic",attrs:{url:e.mediaData.thumb||"https://res.wx.qq.com/t/fed_upload/e3fc6c06-5c1b-4e1d-a020-4f5c14c35d1d/outlined_link_24x24_30black.svg",size:e.mediaData.thumb?40:24,overlay:""}}),e.iconName?i("ui-icon",{class:"media__title-icon-"+e.iconName,attrs:{"aria-hidden":"true",name:e.iconName}}):e._e()],1),i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.mediaTitle,expression:"mediaTitle"}],staticClass:"media__block-text"})]):e._e()}),[],!1,null,"2f5de287",null).exports),_={inject:["momentType"],props:{mediaList:{type:Array,default:function(){return[]}},mediaTitle:{type:String,default:""},mediaPicUrl:{type:String,default:""},objectType:{type:Number,default:0},mediaMusicTitle:{type:String,default:""},mediaMusicDesc:{type:String,default:""},mediaJumpInfo:{type:Object}},data:function(){return{defaultWidth:80,scaleFactor:1}},computed:{blockWidth:function(){return Math.floor(this.defaultWidth*this.scaleFactor)}},mounted:function(){this.resetFontSize()},methods:{resetFontSize:function(){var e=document.createElement("div");e.style="font-size:12px;",document.body.appendChild(e);var t=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"));document.body.removeChild(e),this.scaleFactor=t/12},tap:function(e){this.mediaJumpInfo&&(e.stopPropagation(),this.$emit("tap:media"))}}},g=(i(1826),Object(m.a)(_,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!e.mediaJumpInfo,expression:"!!mediaJumpInfo",modifiers:{stop:!0}}],staticClass:"media__music",style:{width:e.blockWidth+"%"},on:{click:e.tap}},[i("div",{staticClass:"content-layer"},[e.mediaPicUrl?i("ui-image",{staticClass:"media__music-pic",attrs:{url:e.mediaPicUrl,size:64,mode:"music"}}):e._e(),i("div",{staticClass:"media__music-content"},[i("div",{staticClass:"media__music-content__text"},[e.mediaMusicTitle?i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.mediaMusicTitle,expression:"mediaMusicTitle"}],staticClass:"media__music-title"}):e._e(),e.mediaMusicDesc?i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.mediaMusicDesc,expression:"mediaMusicDesc"}],staticClass:"media__music-author"}):e._e()]),i("ui-image",{staticClass:"media__music-content__icon",attrs:{url:"https://res.wx.qq.com/t/fed_upload/2831c65a-165d-4ade-9017-e5654793882e/play_icon修改.svg",size:24}})],1)],1),i("div",{staticClass:"filter-layer",style:{backgroundImage:"url('"+e.mediaPicUrl+"')"}}),i("div",{staticClass:"gradient-layer"})])}),[],!1,null,"0d0386da",null).exports),y=i(493),b={img:1,text:2,link:3,music:4,video:5,commodity:9,sticker:10,commodity12:12,coupon:13,tvShow:14,littleVideo:15,streamVideo:18,articleVideo:19,note:26,finderVideo:28,weappSinglePage:30,live:34,finderLongVideo:36,richMusic:42,tingAudio:47},C={name:"UiMoment",components:{momentImage:o,momentWithMediaTitle:c,momentVideo:l,momentLive:f,momentBlock:v,momentMusic:g},provide:function(){return{momentType:b,getImgClass:this.getImgClass}},props:{thumb:{type:String,default:""},nickName:{type:String,default:""},dateTime:{type:String,default:""},content:{type:String,default:""},objectType:{type:Number,default:0},address:{type:String,default:""},mediaTitle:{type:String,default:""},mediaSource:{type:String,default:""},mediaList:{type:Array,default:function(){return[]}},mediaPicUrl:{type:String,default:""},mediaPicMaxlength:{type:Number,default:4},mediaMusicTitle:{type:String,default:""},mediaMusicDesc:{type:String,default:""},thumbSize:{type:Number,default:40},contratest:{type:Boolean,default:!1},jumpInfo:{type:Object},hideHeader:{type:Boolean}},data:function(){return{}},computed:{componentEnum:function(){var e;return e={},n()(e,b.img,"momentImage"),n()(e,b.link,"momentBlock"),n()(e,b.commodity,"momentWithMediaTitle"),n()(e,b.sticker,"momentBlock"),n()(e,b.commodity12,"momentWithMediaTitle"),n()(e,b.coupon,"momentWithMediaTitle"),n()(e,b.note,"momentBlock"),n()(e,b.video,"momentBlock"),n()(e,b.streamVideo,"momentBlock"),n()(e,b.articleVideo,"momentBlock"),n()(e,b.music,"momentMusic"),n()(e,b.richMusic,"momentMusic"),n()(e,b.tingAudio,"momentMusic"),n()(e,b.littleVideo,"momentVideo"),n()(e,b.finderVideo,"momentVideo"),n()(e,b.finderLongVideo,"momentVideo"),n()(e,b.live,"momentLive"),n()(e,b.weappSinglePage,"momentBlock"),e},renderContent:function(){return this._handleText(this.content.replace(/\s+/g," "))},showMedia:function(){return this.mediaList&&this.mediaList.length||this.mediaTitle},defaultThumbSize:function(){return 40==this.thumbSize?24:20}},created:function(){},methods:{_getMediaComponent:function(){return this.componentEnum[this.objectType]||"momentImage"},_handleText:function(e){if(e)return Object(y.decode)(e);switch(this.objectType){case b.link:case b.music:e="";break;case b.video:case b.littleVideo:e="";break;case b.sticker:e="分享了一套表情";break;case b.commodity:case b.commodity12:e="分享了一件商品";break;case b.coupon:e="分享了一张卡券";break;case b.tvShow:e="正在看一个节目"}return e||""},getImgClass:function(e){return e.height==e.width?"moment__image_square":e.height>e.width?"moment__image_vertical":"moment__image_horizontal"},tapMedia:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$emit("tap:media",e)}}},x=(i(3682),Object(m.a)(C,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"moment"},[e.hideHeader?e._e():i("div",{staticClass:"moment__thumb-wrapper",style:{width:e.thumbSize/16+"rem",height:e.thumbSize/16+"rem"}},[i("ui-image",{staticClass:"moment__thumb",attrs:{url:e.thumb,size:e.thumbSize,mode:"avatar","allow-empty":""}})],1),i("div",{staticClass:"moment__main"},[e.hideHeader?e._e():i("div",{staticClass:"moment__head",attrs:{role:"option"}},[e.$slots.head?e._t("head"):[i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.nickName,expression:"nickName"}],staticClass:"moment__nick"}),i("span",{staticClass:"ui-aria-hidden"},[e._v("发布于")]),e.dateTime?i("div",{staticClass:"moment__time"},[e._v("\n          "+e._s(e.dateTime)+"\n        ")]):e._e()]],2),i("div",{staticClass:"moment__content"},[i("div",{staticClass:"moment__title",attrs:{role:"option"}},[e._t("contentBefore"),i("span",{domProps:{innerHTML:e._s(e.renderContent)}})],2),e.showMedia?i("div",{staticClass:"moment__media"},[i(e._getMediaComponent(),{tag:"components",attrs:{"object-type":e.objectType,"media-title":e.mediaTitle,"media-list":e.mediaList,"media-pic-url":e.mediaPicUrl,"media-pic-maxlength":e.mediaPicMaxlength,"media-music-title":e.mediaMusicTitle,"media-music-desc":e.mediaMusicDesc,"media-jump-info":e.jumpInfo},on:{"tap:media":e.tapMedia,"tap:mediaMore":function(t){return e.$emit("tap:mediaMore")}}})],1):e._e()]),e.address||e.mediaSource?i("div",{staticClass:"moment__tail",attrs:{role:"option"}},[e.address?i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.address,expression:"address"}],staticClass:"moment__addr"}):e._e(),e.mediaSource?i("div",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.mediaSource,expression:"mediaSource"}],staticClass:"moment__source"}):e._e()]):e._e()])])}),[],!1,null,"ec5ece28",null).exports);x.install=function(e){e.component(x.name,x)};t.a=x},3318:function(e,t,i){"use strict";i(1092)},3319:function(e,t,i){"use strict";i(1094)},3679:function(e,t,i){"use strict";i(1090)},3682:function(e,t,i){"use strict";i(1096)},548:function(e,t,i){"use strict";i(282)},549:function(e,t,i){"use strict";var a={name:"UiVideo",props:{image:String,time:[String,Number],like:Boolean,noActive:Boolean,top:Boolean,ratio:Number},data:function(){return{renderHeight:0}},mounted:function(){var e=this,t=function(){e.renderHeight=e.$refs._img.$el.clientWidth/(e.ratio||1)||100};t(),window.addEventListener("resize",t),this.$on("hook:beforeDestroy",(function(){window.removeEventListener("resize",t)}))},methods:{onTap:function(e){this.noActive||this.$emit("tap",e)}}},n=(i(548),i(4)),s=Object(n.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!e.noActive,expression:"!noActive",modifiers:{stop:!0}}],staticClass:"ui-video",on:{click:e.onTap}},[e.image?i("ui-image",{ref:"_img",staticClass:"ui-video-image",style:e.ratio?{height:e.renderHeight+"px"}:null,attrs:{url:e.image,mode:"color"}}):e._e(),i("div",{staticClass:"ui-video-mask"},[e.$slots.default?[e._t("default")]:[e.time?i("div",{staticClass:"ui-video-time",attrs:{role:"option"}},[e.like?i("svg-icon",{attrs:{"class-name":"icon-like",name:"like_outlined_medium",role:"option","aria-label":",点赞"}}):e._e(),i("div",{class:{"ui-time-with-top":e.top}},[e._v(e._s(e.time))]),e.top?i("ui-icon",{attrs:{name:"top",role:"option","aria-label":",置顶"}}):e._e()],1):e._e()]],2),i("ui-icon",{staticClass:"ui-video-icon-button",attrs:{name:"play-o",role:"button","aria-label":".播放"}})],1)}),[],!1,null,"5651b63c",null).exports;s.install=function(e){e.component(s.name,s)};t.a=s}}]);