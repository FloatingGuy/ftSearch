(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1102:function(t,e,i){},1103:function(t,e,i){},1104:function(t,e,i){},2191:function(t,e,i){"use strict";i.r(e);var n=i(0),r=i(1),s=i.n(r);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={name:"Header",mixins:[n.l,n.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},paddingTop:{type:Number,default:16},paddingBottom:{type:Number,default:16},isNewCommonStyle:{type:Boolean},isVerticalSearchCard:{type:Boolean},isAllSearchFirstCard:{type:Boolean}},data:function(){return{visibleAvatarCount:1}},computed:{readInfoStyle:function(){return{padding:"".concat(this.paddingTop,"px 16px ").concat(this.paddingBottom,"px")}},readInfoClass:function(){return{"read-info--first-card-style":!!this.isAllSearchFirstCard,"read-info--vertical-card-style":!!this.isVerticalSearchCard}},descListClass:function(){var t;return{"desc-list--space-between":this.showInlineFriendInfo||2===(null===(t=this.item.descList)||void 0===t?void 0:t.length)&&this.isNewCommonStyle}},avatarList:function(){var t;return(null===(t=this.item.friendInfo)||void 0===t?void 0:t.avatars)||[]},visibleAvatarList:function(){return this.avatarList.slice(0,this.visibleAvatarCount)},hasFriendInfo:function(){var t,e;return!(null===(t=this.item.friendInfo)||void 0===t||null===(e=t.avatars)||void 0===e||!e.length)},hasFriendText:function(){var t;return!(null===(t=this.item.friendInfo)||void 0===t||!t.text)},showInlineFriendInfo:function(){var t,e=(null===(t=this.item.descList)||void 0===t?void 0:t.length)||0;return this.hasFriendInfo&&1===e||(this.hasFriendInfo||this.hasFriendText)&&this.isNewCommonStyle},authorInfos:function(){return(this.item.authorInfos||[]).filter((function(t){var e;return null===(e=t.desc)||void 0===e?void 0:e.trim()}))},textInfos:function(){return(this.item.textInfos||[]).map((function(t){var e;return o(o({},t),{},{desc:null===(e=t.desc)||void 0===e?void 0:e.replace(/\s+/g," ").trim()})}))}},watch:{avatarList:{handler:function(){var t=this;this.visibleAvatarCount=1,this.$nextTick((function(){t.onAdjustAvatarList()}))},immediate:!0}},methods:{onTap:function(t){t.jumpInfo&&(this.M_go(t.jumpInfo),this.M_clickReport({clickZone:1,clickContent:t.title},t))},onTapButton:function(t){t.jumpInfo&&(this.M_go(t.jumpInfo),this.M_clickReport({clickZone:2,clickContent:t.title},t))},onAdjustAvatarList:function(){if(this.avatarList.length>0&&this.showInlineFriendInfo){var t,e,i=this.$refs,n=i.container,r=i.avatar,s=i.text,a=i.desc,o=(null==n?void 0:n.clientWidth)||0,c=(null==r||null===(t=r[0])||void 0===t?void 0:t.clientWidth)||0,l=(null==s?void 0:s.clientWidth)||0,u=(null==a||null===(e=a[0])||void 0===e?void 0:e.clientWidth)||0;o>0&&c>0&&(this.visibleAvatarCount=Math.max(1,Math.floor((o-(l>0?l+4:0)-(u>0?u+12:0))/(c+4))))}}}},l=(i(3060),i(4)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"read-info active__item",class:t.readInfoClass,style:t.readInfoStyle,attrs:{"data-report-id":t.M_itemReportId(t.item.reportId,1)},on:{click:function(e){return e.stopPropagation(),t.onTap(t.item)}}},[t.item.coverUrl?i("div",{directives:[{name:"image",rawName:"v-image",value:t.item.coverUrl,expression:"item.coverUrl"}],staticClass:"read-info__cover"}):t._e(),i("div",{staticClass:"read-info__main"},[i("div",{staticClass:"read-info__main-content"},[i("div",{staticClass:"read-info-basic"},[i("div",{staticClass:"read-info-basic__main"},[i("div",{staticClass:"read-info-basic__main__author"},[i("div",{staticClass:"author__info"},[i("div",{staticClass:"title"},[i("span",{staticClass:"title__text",attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.title))}}),t.item.titleTags&&t.item.titleTags.append&&t.item.titleTags.append.length?i("ui-tags",{staticClass:"title__tags",attrs:{tags:t.item.titleTags.append}}):t._e()],1),t._l(t.authorInfos,(function(e,n){var r;return i("div",{key:n,staticClass:"author",class:(r={},r["ellipsis_"+e.ellipsis]=e.ellipsis>1,r),attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(e.desc))}})}))],2),t.item.subButton?i("div",{staticClass:"subbutton"},[i("ui-button",{staticClass:"subbutton_item",attrs:{type:0===t.item.subButton.buttonType?9:t.item.subButton.buttonType,"data-report-id":t.M_itemReportId(t.item.subButton.reportId,2)},on:{tap:function(e){return e.stopPropagation(),t.onTapButton(t.item.subButton)}}},[t._v("\n                "+t._s(t.item.subButton.title)+"\n              ")])],1):t._e()]),t._l(t.textInfos,(function(e,n){return i("div",{key:n,class:"text ellipsis_"+(e.ellipsis||1),attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(e.desc))}})})),t.item.descList&&t.item.descList.length>0?i("div",{ref:"container",staticClass:"desc-list",class:t.descListClass},[t._l(t.item.descList,(function(e,n){return i("div",{key:n,ref:"desc",refInFor:!0,staticClass:"desc-list__item"},[t._v(t._s(e)+"\n            ")])})),t.showInlineFriendInfo?i("div",{staticClass:"avatars-group avatars-group--inline",attrs:{"data-report-id":t.M_itemReportId(t.item.friendInfo.reportId,3)},on:{click:function(e){return t.M_clickReport({clickZone:3,clickContent:t.item.friendInfo.text},t.item.friendInfo)}}},[i("span",{ref:"text"},[t._v(t._s(t.item.friendInfo.text))]),t._l(t.visibleAvatarList,(function(t,e){return i("div",{directives:[{name:"image",rawName:"v-image:avatar",value:t,expression:"src",arg:"avatar"}],key:e,ref:"avatar",refInFor:!0,staticClass:"avatar"})}))],2):t._e()],2):t._e()],2),t.item.button?i("div",{staticClass:"read-info-basic__button-wrap"},[i("ui-button",{staticClass:"read-info-basic__button",attrs:{type:t.item.button.buttonType,"data-report-id":t.M_itemReportId(t.item.button.reportId,2)},on:{tap:function(e){return e.stopPropagation(),t.onTapButton(t.item.button)}}},[t._v("\n            "+t._s(t.item.button.title)+"\n          ")])],1):t._e()])])])])}),[],!1,null,"3b92d6e8",null).exports;function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={name:"SubItem",mixins:[n.l,n.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},paddingTop:{type:Number,default:16},paddingBottom:{type:Number,default:16},topLineStyle:{type:String,validator:function(t){return!t||["solid","dashed"].includes(t)}},subItem:{type:Object}},computed:{subItemHeaderClass:function(){return{"sub-item-header--solid-line":"solid"===this.topLineStyle,"sub-item-header--dashed-line":"dashed"===this.topLineStyle,active__item:!!this.subItem.header.jumpInfo}},subItemHeaderStyle:function(){return{padding:"".concat(this.paddingTop,"px 16px ").concat(this.paddingBottom,"px")}},textInfos:function(){return(this.subItem.textInfos||[]).map((function(t){var e;return p(p({},t),{},{desc:null===(e=t.desc)||void 0===e?void 0:e.replace(/\s+/g," ").trim()})}))}},methods:{onTapSection:function(t,e){if(t.jumpInfo){var i=(e||t).reportId,n=i.indexOf("简介")>=0?5:i.indexOf("精彩点评")>=0?6:i.indexOf("点评人数")>=0?7:0;this.M_go(t.jumpInfo),this.M_clickReport({clickZone:n,clickContent:t.title},e||t)}}}},f=(i(3059),Object(l.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"sub-item-header",class:t.subItemHeaderClass,style:t.subItemHeaderStyle,attrs:{"data-report-id":t.M_itemReportId(t.subItem.reportId,1)},on:{click:function(e){return e.stopPropagation(),t.onTapSection(t.subItem.header,t.subItem)}}},[i("div",{staticClass:"header-item"},[i("div",{staticClass:"header-title"},[i("span",{attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.subItem.header.title))}})]),t.subItem.header.jumpInfo&&t.subItem.header.moreText?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"header-button active__mask",attrs:{role:"button","data-report-id":t.M_itemReportId(t.subItem.header.reportId,2)},on:{click:function(e){return e.stopPropagation(),t.onTapSection(t.subItem.header)}}},[i("span",[t._v(t._s(t.subItem.header.moreText))]),t.subItem.header.moreText?i("ui-arrow",{attrs:{gap:"",align:"flex"}}):t._e()],1):t._e()]),t._l(t.textInfos,(function(e,n){return i("ui-clamp",{key:n,staticClass:"sub-item-text",attrs:{autoresize:"","max-lines":e.ellipsis,"raw-html":t.xss(e.desc),role:"option"},scopedSlots:t._u([e.avatarUrl?{key:"before",fn:function(){return[i("div",{directives:[{name:"image",rawName:"v-image:avatar",value:e.avatarUrl,expression:"textInfo.avatarUrl",arg:"avatar"}],staticClass:"sub-item-text__avatar"})]},proxy:!0}:null],null,!0)})}))],2)}),[],!1,null,"0f501ee6",null).exports),v=2,b=4,h=5,_={name:"Fiction",components:{FictionHeader:u,FictionSubItem:f},mixins:[n.l,n.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{isNewCommonStyle:function(){return this.item.style===v||this.item.style===b||this.item.style===h},isVerticalSearchCard:function(){return this.item.style===v},isAllSearchFirstCard:function(){return this.item.style===b},subItems:function(){return this.item.subItems||[]}}},y=(i(3056),Object(l.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"expose_log_elem read",attrs:{"data-id":t.M_exposeId()}},[i("fiction-header",t._b({attrs:{"is-new-common-style":t.isNewCommonStyle,"is-vertical-search-card":t.isVerticalSearchCard,"is-all-search-first-card":t.isAllSearchFirstCard,"padding-top":t.isAllSearchFirstCard||t.isVerticalSearchCard?16:12,"padding-bottom":t.item.subItems&&0!==t.item.subItems.length||t.data.source&&t.data.source.title?12:16,"parent-item-pos":"1:list"}},"fiction-header",t.$props,!1)),t._l(t.item.subItems,(function(e,n){return i("fiction-sub-item",t._b({key:n,attrs:{"sub-item":e,"padding-top":12,"padding-bottom":t.isVerticalSearchCard&&n===t.item.subItems.length-1?16:12,"top-line-style":t.isAllSearchFirstCard?"solid":"dashed","parent-item-pos":n+2+":list"}},"fiction-sub-item",t.$props,!1))}))],2)}),[],!1,null,"3732b140",null));e.default=y.exports},3056:function(t,e,i){"use strict";i(1104)},3059:function(t,e,i){"use strict";i(1103)},3060:function(t,e,i){"use strict";i(1102)}}]);