(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1476:function(t,e,i){"use strict";i(497)},2094:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(16),s=i(15),r=i(29),o=i(467),c=i(10),u=i(565),l=new c.a({personal:2,organization:1}),p={created:function(){window.reportVueCreated("src/components/office-account/biz.vue")},components:{negative:o.a,UiMenu:u.a},mixins:[n.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{bizVerifyType:l}},computed:{externalInfo:function(){var t={};try{var e=this.item.externalInfo;t="Object"==n.g.getType(e)?e:JSON.parse(this.item.externalInfo)}catch(i){}return t},bottomInfo:function(){var t=this;return t.item.extraHighlight?t.item.extraHighlight:t.item.bizVerifyType===l.organization&&t.externalInfo&&t.externalInfo.VerifySource&&t.externalInfo.VerifySource.Description?t.externalInfo.VerifySource.Description:""},withBottomComponent:function(){return this.item.links&&this.item.links.length||this.item.actions&&this.item.actions.length||this.item.menus&&this.item.menus.length}},methods:{tap:function(){var t=this.item;t.type=this.data.type,t.query=n.b.query,t.searchId=n.b.searchId,t.extraParams="search_type=1&docid=".concat(decodeURIComponent(this.item.docID),"&scene=").concat(n.b.scene),t.bizuin=this.item.bizuin||this.item.docID,Object(a.e)(n.m.detail.result.searchItem1),this.M_clickReport({clickZone:1,actionType:3001},this.item),this.M_jump(t)},tapAction:function(t){var e=t.menu;this.M_go(e),this.M_handleInsert(),this.M_clickReport({clickZone:4,clickContent:e.title})},tapMenu:function(t){this.M_go(t),this.M_handleInsert(),this.M_clickReport({clickZone:3,clickContent:t.word||t.title},t)},tapLink:function(t,e){t.url&&(t.jumpUrl=t.url),this.M_go(t),this.M_handleInsert(),this.M_clickReport({clickZone:2,expand:e+1},t),Object(s.d)(r.a.bizMenu,["","","",0,0,7,0,0,0]),Object(a.e)(n.m.detail.result.bizMenu)},getSignature:function(){var t=this;return t.item.bizVerifyType===l.personal&&t.externalInfo&&t.externalInfo.PersonVerifyInfo&&t.externalInfo.PersonVerifyInfo.VerifyDesc?this.xss(t.externalInfo.PersonVerifyInfo.VerifyDesc):this.xss(this.item.signatureHighlight||this.item.signature)}}},m=(i(941),i(1476),i(4)),d=Object(m.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"data-report-id":t.M_docReportId()}},[i("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"biz expose_log_elem",class:{"biz-with-bottom-component":t.withBottomComponent},attrs:{"data-id":t.M_exposeId(),"data-report-id":t.M_itemReportId(t.item.reportId)},on:{click:t.tap}},[i("div",{staticClass:"search_item_inner search_item_inner_clear",attrs:{role:"button"}},[i("div",{directives:[{name:"image",rawName:"v-image:avatar",value:t.item.iconUrl,expression:"item.iconUrl",arg:"avatar"}],staticClass:"biz__thumb"}),i("div",{staticClass:"biz_account_content"},[i("div",{staticClass:"biz__title"},[i("div",{staticClass:"biz__title__text",domProps:{innerHTML:t._s(t.xss(t.item.nickNameHighlight||t.item.nickName))}}),i("ui-tags",{staticClass:"biz__title__tag",attrs:{flex:"",tags:t.item.tags,"aria-hidden":"true"}}),i("div",{staticClass:"biz__title-right__wrapper",attrs:{"aria-hidden":"true"}},[t.item.recommendTag&&t.item.recommendTag.length?i("ui-tags",{attrs:{flex:"",tags:t.item.recommendTag}}):t.item.extraInfo?i("div",{style:{marginLeft:"6px"},attrs:{"aria-hidden":"true"}},[i("p",[t._v(t._s(t.item.extraInfo))])]):t._e()],1)],1),i("p",{staticClass:"biz__tips ellipsis_2",attrs:{"aria-hidden":"true"},domProps:{innerHTML:t._s(t.getSignature())}}),t.bottomInfo?i("div",{staticClass:"line biz__line",attrs:{"aria-hidden":"true"}},[i("div",{staticClass:"line__item primary biz__extra-highlight",domProps:{innerHTML:t._s(t.xss(t.bottomInfo))}})]):t._e(),t.item.feedback?i("div",{staticClass:"biz__negative",attrs:{"aria-hidden":"true"}},[i("negative",t._b({},"negative",t.$props,!1))],1):t._e()])]),t.item.links&&t.item.links.length?i("div",{staticClass:"links biz__links"},t._l(t.item.links,(function(e,n){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:e.word,staticClass:"link",attrs:{"data-index":n,role:"button","data-report-id":t.M_itemReportId(e.reportId,n+1)},on:{click:function(i){return i.stopPropagation(),t.tapLink(e,n)},touchstart:function(t){t.stopPropagation()}}},[i("div",{staticClass:"biz__link-flex"},[i("span",{staticClass:"biz__link-text"},[t._v(t._s(e.word))]),e.userName?i("svg-icon",{staticClass:"biz__link-icon",attrs:{name:"mini_pram"}}):t._e()],1)])})),0):t._e(),i("div",{staticStyle:{clear:"both"}}),t.item.actions?i("div",{staticClass:"actions-wrapper"},[i("ui-menu",{staticClass:"action",attrs:{source:t.item.actions},on:{"tap:menu":t.tapAction},scopedSlots:t._u([1===t.item.actions.length?{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"single-action-box",attrs:{role:"button"}},[n.iconUrl?i("ui-image",{staticClass:"action-icon",attrs:{url:n.iconUrl,size:20}}):t._e(),i("span",[t._v(t._s(n.title))])],1)]}}:null],null,!0)})],1):t._e(),t.item.menus?i("div",{staticClass:"menus-wrapper"},[i("ui-column",{attrs:{col:2,list:t.item.menus},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,a=e.index;return[i("ui-link",{attrs:{title:n.word,role:"button","data-report-id":t.M_itemReportId(n.reportId,a+1)},nativeOn:{click:function(e){return e.stopPropagation(),t.tapMenu(n,a)}}})]}}],null,!1,737361724)})],1):t._e()])])}),[],!1,null,"2ecab764",null);e.default=d.exports},238:function(t,e,i){},239:function(t,e,i){},241:function(t,e,i){},242:function(t,e,i){},259:function(t,e,i){},3135:function(t,e,i){"use strict";i(239)},467:function(t,e,i){"use strict";var n=i(1),a=i.n(n),s=i(39),r=i(3),o={mixins:[s.a],props:{data:{type:Object,default:function(){return{}}}},data:function(){return{reasons:[]}},computed:{renderReasons:{set:function(t){this.reasons=t},get:function(){return this.reasons.length?this.reasons:this.data.reasons}},showButton:function(){return this.renderReasons.some((function(t){return t.checked}))}},created:function(){window.reportVueCreated("src/components/global/source/negative/withReason.vue");var t=this;r.a.$on(r.b.negativeHide,(function(){t.renderReasons=[]}))},methods:{tapJump:function(){this.$emit("tapJump")},tapConfirm:function(){this.$emit("tapConfirm",this.renderReasons)},tapReason:function(t,e){this.renderReasons=this.renderReasons.map((function(t,i){return e==i?Object.assign({},t,{checked:t.checked?0:1}):t}))}}},c=(i(474),i(4)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"header line"},[i("div",{staticClass:"title line__item"},[i("p",{staticClass:"title__word"},[t._v("\n        "+t._s(t.data.title)+"\n      ")])]),i("div",{staticClass:"button line__item primary no-wrap"},[t.showButton?i("div",{staticClass:"weui-btn weui-btn_mini weui-btn_primary",on:{click:t.tapConfirm}},[t._v("\n        "+t._s(t.data.confirm.title)+"\n      ")]):t._e()])]),i("div",{staticClass:"reasons"},t._l(t.renderReasons,(function(e,n){return i("div",{key:e.wording,staticClass:"reason",class:{reason__checked:e.checked},on:{click:function(i){return t.tapReason(e,n)}}},[t._v("\n      "+t._s(e.wording)+"\n    ")])})),0),i("div",{staticClass:"jump",on:{click:t.tapJump}},[i("div",{staticClass:"jump-in"},[t._v("\n      "+t._s(t.data.complaint.title)+"\n    ")])])])}),[],!1,null,"d28ecc42",null).exports,l={created:function(){window.reportVueCreated("src/components/global/source/negative/plain.vue")},props:{data:{type:Object,default:function(){return{}}}},methods:{tap:function(){this.$emit("tapJump")}}},p=(i(3135),Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"n-plain active__item",on:{click:this.tap}},[this._v("\n  "+this._s(this.data.complaint.title)+"\n")])}),[],!1,null,"926be1a0",null).exports),m=new(i(10).a)({withReason:1,plain:2}),d={components:{withReason:u,plain:p},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{types:m}},methods:{tapJump:function(){var t=this.data.complaint;this.$emit("tapJump",t)},tapConfirm:function(t){this.$emit("tapConfirm",{confirm:this.data.confirm,feedback:{reasons:t,title:this.data.title}})}}},f=(i(476),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.types[this.data.type],{tag:"component",attrs:{data:this.data},on:{tapJump:this.tapJump,tapConfirm:this.tapConfirm}})],1)}),[],!1,null,null,null).exports),h=i(8),_=i(17),v=i(0);function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){a()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y={components:{pop:f},mixins:[s.a],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},needWords:{type:Boolean,default:!1}},computed:{feedback:function(){return this.item.feedback},popData:function(){if(!this.feedback)return!1;var t=(this.$store.state.result.self.resultObj.feedback||{})[this.feedback.id];return!!t&&Object.assign({},t,this.feedback)}},created:function(){r.a.$on(r.b.viewChange,this._hide)},destroyed:function(){r.a.$off(r.b.viewChange,this._hide)},methods:{_hide:function(){this.$refs&&this.$refs.popOver&&this.$refs.popOver.hide()},_makeUrlPamrams:function(){var t=this;return g(g({},t.base),{},{clientType:t.data.real_type||t.data.type,subType:t.data.subType||0,docID:t.item.docID||"",boxID:t.data.boxID||"",boxPos:t.typePos||0,docPos:t.pos||0,docUrl:t.item.jumpUrl||t.item.doc_url||t.item.weappUrl||""})},onHide:function(){r.a.$emit(r.b.negativeHide)},tap:function(){this._hide()},tapJump:function(t){if(this.needWords&&this.data.items.length&&t.jumpUrl&&!t.jumpUrl.includes("relatedWords")){var e=this.data.items.map((function(t){return t.word||""})).join("|");t.jumpUrl=this.M_composeUrl(t.jumpUrl,{relatedWords:e,query:v.b.query})}this.M_go({jumpUrl:this.M_composeUrl(t.jumpUrl,this._makeUrlPamrams())}),this._hide()},tapConfirm:function(t){var e=Object.assign(this._makeUrlPamrams(),{clientTimeStamp:"".concat(+new Date),feedback:t.feedback});h.a.commonCgi({cgiName:t.confirm.cgiName||_.a.negativeFeedBack,data:e}),this.$refs.popOver.hide(),r.a.$emit(r.b.showToast,{text:"已反馈"})}}},k=(i(477),Object(c.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.popData?i("PopOver",{ref:"popOver",staticClass:"negative__wrap expand-hotspot",attrs:{"class-name":"negative__outter"},on:{hide:t.onHide},nativeOn:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()},touchmove:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"trigger",fn:function(){return[i("svg-icon",{staticClass:"source__negative",attrs:{name:"negative_button","aria-hidden":"true"}})]},proxy:!0},{key:"content",fn:function(){return[i("pop",{attrs:{data:t.popData},on:{tapJump:t.tapJump,tapConfirm:t.tapConfirm}})]},proxy:!0}],null,!1,582450734)}):t._e()}),[],!1,null,null,null));e.a=k.exports},474:function(t,e,i){"use strict";i(238)},476:function(t,e,i){"use strict";i(241)},477:function(t,e,i){"use strict";i(242)},496:function(t,e,i){},497:function(t,e,i){},561:function(t,e,i){"use strict";i(259)},565:function(t,e,i){"use strict";var n={name:"UiMenu",props:{source:{type:Array,default:function(){return[]}},nowrap:{type:Boolean,default:!1},compact:{type:Boolean,default:!1}},methods:{tap:function(t,e){this.$emit("tap:menu",{menu:t,index:e,target:this.$el})},menuItemClassName:function(t){var e=this.source.length%3||3;return{"ui-menu-item":!0,"ui-menu-item-end":!this.nowrap&&this.source.length-t-1<e}}}},a=(i(561),i(4)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.source&&t.source.length?i("div",{staticClass:"ui-menu",class:{"ui-menu-nowrap":t.nowrap,"ui-menu-compact":t.compact}},t._l(t.source,(function(e,n){return i("a",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:"menu-item-"+n,class:t.menuItemClassName(n),attrs:{role:"button",tabindex:"-1","data-report-id":e.itemReportId},on:{touchstart:function(t){t.stopPropagation()},click:function(i){return i.stopPropagation(),t.tap(e,n)}}},[t.$scopedSlots.default?[t._t("default",null,{item:e,index:n})]:[e.iconUrl?i("ui-image",{staticClass:"ui-menu-icon",attrs:{url:e.iconUrl,mode:"plain"}}):t._e(),e.title?i("h4",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.title,expression:"item.title"}],staticClass:"ui-menu-item-title"}):t._e(),e.desc?i("p",{directives:[{name:"xss-html",rawName:"v-xss-html",value:e.desc,expression:"item.desc"}],staticClass:"ui-menu-item-desc",attrs:{"aria-hidden":"true"}}):t._e()]],2)})),0):t._e()}),[],!1,null,"3cdbbeb0",null).exports;s.install=function(t){t.component(s.name,s)};e.a=s},941:function(t,e,i){"use strict";i(496)}}]);