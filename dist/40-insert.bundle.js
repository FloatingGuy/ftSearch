(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1354:function(t,e,n){"use strict";n(985)},1753:function(t,e,n){"use strict";n(984)},1755:function(t,e,n){"use strict";n(986)},1761:function(t,e,n){"use strict";n(990)},1762:function(t,e,n){"use strict";n(991)},2169:function(t,e,n){"use strict";n.r(e);var s=n(39),r=n(42),o=n(3033),i=n(1),a=n.n(i),c=n(0),u=n(3),l=n(17),p={created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-star/stars.vue")},mixins:[s.a],inject:["makeReportInfo","vueKey"],props:{source:{type:Object,default:function(){return{}}},id:{type:String,default:""},pos:{type:Number,default:0}},data:function(){return{rankTitle:"",starsMove:"",isShowbtn:!1,rank:0,starsText:["非常差","差","一般","好","非常好"]}},computed:{title:function(){return this.rankTitle||this.source.title},confirmText:function(){return this.source.confirmText||"提交"},stars:function(){var t=this;return[0,0,0,0,0].map((function(e,n){return n<t.rank}))}},methods:{updateTitle:function(t){this.rankTitle=this.source.rank[t]},animateStar:function(){var t=this,e=t.$refs.wrap,n=t.$refs.stars;setTimeout((function(){var s=n.offsetWidth-e.offsetWidth,r="translate3d(".concat(s,"px, 0, 0)");t.starsMove=r}),0)},tapStar:function(t){var e=this;e.rank=t+1,e.updateTitle(t),e.animateStar(),e.isShowbtn=1,e.$emit("starchanged",{id:e.id,index:t})},tapBtn:function(){var t=this;if(t.rank>3){var e=t.makeReportInfo({reasons:[],rank:t.rank});c.i.commonCgi({cgiName:l.a.reportInserData,data:e})}c.a.$emit(u.b.csConfirm,{vueKey:t.vueKey,rank:t.rank})}}},d=(n(275),n(4)),f=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cs-test__star"},[n("div",{staticClass:"cs-test__star-bar line"},[n("div",{staticClass:"cs-test__star-title line__item"},[t._v("\n      "+t._s(t.title)+"\n    ")]),n("div",{ref:"wrap",staticClass:"cs-test__star-entities line__item no-wrap primary"},[n("div",{ref:"stars",staticClass:"cs-test__star-wrap",style:{transform:t.starsMove}},[t._l(t.starsText,(function(e,s){return n("div",{directives:[{name:"show",rawName:"v-show",value:s+1===t.rank,expression:"(index + 1 === rank)"}],key:"text_"+s,staticClass:"ui-aria-hidden",attrs:{role:"option","aria-live":"polite"}},[t._v(" "+t._s("已选择，"+e+(3!==s||4!==s?"，请选择原因":"")))])})),t._l(t.stars,(function(e,s){return n("svg-icon",{key:"icon_"+s,staticClass:"cs-test__star-entity expand-hotspot",class:{"cs-test__star-entity_solid":e},attrs:{name:"star","aria-label":t.starsText[s],role:"button"},nativeOn:{click:function(e){return t.tapStar(s)}}})}))],2)])]),n("transition",{attrs:{name:"star-btn"}},[t.isShowbtn?n("div",{staticClass:"cs-test__star-btn weui-btn weui-btn_mini weui-btn_primary",attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.tapBtn.apply(null,arguments)}}},[t._v("\n      "+t._s(t.confirmText)+"\n    ")]):t._e()])],1)}),[],!1,null,null,null).exports,h={inject:["makeReportInfo","vueKey"],props:{source:{type:Object,default:function(){return{}}},id:{type:String,default:""}},data:function(){return{reasons:this.source.reasons?this.source.reasons.map((function(t){return{selected:0,reason:t}})):[]}},created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-star/reasons.vue"),c.a.$on(u.b.csConfirm,this._handleCsConfirm)},destroyed:function(){c.a.$off(u.b.csConfirm,this._handleCsConfirm)},methods:{_handleCsConfirm:function(t){var e=t.vueKey,n=t.rank;if(e==this.vueKey&&n<=3){var s=this.makeReportInfo({reasons:this.reasons.map((function(t){return t.selected?t.reason:""})).filter((function(t){return t})),rank:n});c.i.commonCgi({cgiName:l.a.reportInserData,data:s})}},tap:function(t){this.reasons=this.reasons.map((function(e,n){return n==t?Object.assign({},e,{selected:!e.selected}):e}))}}},m=(n(276),{created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-star/cs-star.vue")},components:{stars:f,reasons:Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.reasons&&t.reasons.length?n("div",{staticClass:"cs__reasons"},[n("div",{ref:"inner",staticClass:"cs__reasons-inner"},t._l(t.reasons,(function(e,s){return n("div",{key:e.reason,staticClass:"cs__reason",class:{cs__reason_selected:e.selected},attrs:{role:"button","aria-label":(e.selected?"已选定，":"")+e.reason},on:{click:function(e){return e.stopPropagation(),t.tap(s)}}},[t._v("\n      "+t._s(e.reason)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null).exports,heightAnimate:r.a},props:{source:{type:Object,default:function(){return{}}}},data:function(){return{isShowReasons:!1}},computed:{template:function(){return this.source.templateContent}},methods:{handleReasons:function(t){this.isShowReasons=t<3},starChanged:function(t){var e=t.id,n=t.index;e===this.source.templateId&&this.handleReasons(n)}}}),v=(n(277),Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("stars",{attrs:{id:t.source.templateId,source:t.template,pos:t.source.pos},on:{starchanged:t.starChanged}}),t.isShowReasons?n("heightAnimate",[n("reasons",{attrs:{id:t.source.templateId,source:t.template}})],1):t._e()],1)}),[],!1,null,null,null).exports),_={created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-qa/cs-qa.vue")},inject:["makeReportInfo","vueKey"],props:{source:{type:Object,default:function(){return{}}}},computed:{template:function(){return this.source.templateContent}},methods:{tapOption:function(t,e){var n=this,s=n.makeReportInfo({reasons:[n.template.rank[e]]});c.i.commonCgi({cgiName:l.a.reportInserData,data:s}),t.currentTarget.className+=" cs-qa__option_selected",setTimeout((function(){c.a.$emit(u.b.csConfirm,{id:n.source.templateId,vueKey:n.vueKey})}),300)}}},b=(n(278),Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cs-qa"},[n("div",{staticClass:"cs-qa__title"},[t._v("\n    "+t._s(t.template.title)+"\n  ")]),n("div",{staticClass:"cs-qa__options"},[n("div",{staticClass:"cs-qa__option",attrs:{role:"button"},on:{click:function(e){return t.tapOption(e,0)}}},[n("svg-icon",{staticClass:"cs-qa__thumb",attrs:{name:"thumb_up"}}),n("div",{staticClass:"cs-qa__option-title"},[t._v("\n        "+t._s(t.template.rank[0])+"\n      ")])],1),n("div",{staticClass:"cs-middle-spacing"}),n("div",{staticClass:"cs-qa__option",attrs:{role:"button"},on:{click:function(e){return t.tapOption(e,1)}}},[n("svg-icon",{staticClass:"cs-qa__thumb",attrs:{name:"thumb_down"}}),n("div",{staticClass:"cs-qa__option-title"},[t._v("\n        "+t._s(t.template.rank[1])+"\n      ")])],1)])])}),[],!1,null,null,null).exports),w={created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-option/cs-option.vue")},inject:["makeReportInfo","vueKey"],props:{source:{type:Object,default:function(){return{}}}},data:function(){return{ranks:[]}},computed:{template:function(){return this.source.templateContent},rank:{get:function(){return this.ranks.length?this.ranks:this.template.rank.map((function(t){return{title:t,selected:!1}}))},set:function(t){var e=this.rank.slice(0,this.rank.length);e[t].selected=!e[t].selected,this.ranks=e}},chosen:function(){return this.rank.map((function(t){return t.selected?t.title:""})).filter((function(t){return t}))}},methods:{tapOption:function(t){this.rank=t},tapConfirm:function(){var t=this;if(t.chosen.length){var e=t.makeReportInfo({reasons:t.chosen});c.i.commonCgi({cgiName:l.a.reportInserData,data:e}),u.a.$emit(u.b.csConfirm,{id:t.source.templateId,vueKey:t.vueKey})}}}},y=(n(279),Object(d.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"cs-test__star"},[n("div",{staticClass:"cs-test__star-bar line"},[n("div",{staticClass:"cs-test__star-title line__item"},[n("p",[t._v(t._s(t.template.title))])])]),n("transition",{attrs:{name:"star-btn"}},[t.chosen.length?n("div",{staticClass:"cs-test__star-btn weui-btn weui-btn_mini weui-btn_primary",on:{click:t.tapConfirm}},[t._v("\n        "+t._s(t.template.confirmText)+"\n      ")]):t._e()])],1),n("div",{staticClass:"cs__reasons"},[n("div",{ref:"inner",staticClass:"cs__reasons-inner"},t._l(t.rank,(function(e,s){return n("div",{key:e.title,staticClass:"cs__reason",class:{cs__reason_selected:e.selected},on:{click:function(e){return t.tapOption(s)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),0)])])}),[],!1,null,null,null).exports),k={created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/feedback.vue")},props:{text:{type:String,default:"已反馈"}},data:function(){return{isShort:0}},computed:{styleClass:function(){return this.isShort?"cs-feedback_short":"cs-feedback_tall"}},mounted:function(){var t=this.$el.offsetHeight;this.isShort=t<100}},g=(n(280),Object(d.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cs-feedback",class:this.styleClass,attrs:{role:"option","aria-live":"polite"}},[e("div",{staticClass:"cs-feedback__inner"},[e("svg-icon",{staticClass:"cs-feedback__tick",attrs:{name:"tick","aria-hidden":"true"}}),e("div",{staticClass:"cs-feedback__text"},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)])}),[],!1,null,null,null).exports),x=n(25);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}var I={components:{csStar:v,csQa:b,csOption:y,feedback:g},mixins:[s.a],provide:function(){return{makeReportInfo:this.makeReportInfo,vueKey:this.source.vueKey}},props:{source:{type:Object,default:function(){return{}}},done:{type:Function,default:function(){}},item:{type:Object,default:function(){return{}}},type:{type:Number,default:0},subType:{type:Number,default:0}},data:function(){return{isShowReasons:!1,confirmed:!1,exposeFlag:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({template:function(){return this.source.templateContent}},Object(x.c)({requestId:function(t){return t.result.requestId||t.result.previousRid},clickInfo:function(t){return t.result.insert.clickInfo}})),created:function(){window.reportVueCreated("src/views/result/insert/crowdsourcing-test/cs-test.vue");u.a.$on(u.b.csConfirm,this._csConfirm),window.addEventListener("scroll",this._tryExpose,!1),u.a.$on(u.b.resultPageEnd,this._exposeSelf)},destroyed:function(){u.a.$off(u.b.csConfirm,this._csConfirm),window.removeEventListener("scroll",this._tryExpose),u.a.$off(u.b.resultPageEnd,this._exposeSelf)},mounted:function(){this._tryExpose()},methods:{_tryExpose:function(){c.g.isElemExpose(this.$el)&&this._exposeSelf()},_exposeSelf:function(){this.exposeFlag||(c.i.commonCgi({cgiName:l.a.reportInserData,data:this.makeReportInfo({reportType:"expose",rank:0})}),this.exposeFlag=!0)},_csConfirm:function(t){t.vueKey==this.source.vueKey&&this.showFeedback()},makeReportInfo:function(t){var e=this,n=e.clickInfo.data||{};return Object.assign({reportType:"click",reportLogId:18811,scene:c.b.scene,query:c.b.query,searchId:c.b.searchId,sessionId:c.b.sessionId,requestId:e.requestId,homepage:c.b.isHomePage?1:0,timestamp:+new Date,docID:e.item.docID||"",boxID:n.boxID||"",docPos:e.source.isInsert?0:e.clickInfo.pos||0,boxPos:e.source.isInsert?e.source.pos:e.clickInfo.typePos,pos:e.source.pos,realType:e.type,subType:e.subType,templateId:e.source.templateId,rank:0,reasons:e.template.reasons&&e.template.reasons.length?e.template.reasons:e.template.rank,insertEchoInfo:e.item.insertEchoInfo||""},t)},feedbackDone:function(){this.done()},showFeedback:function(){this.confirmed=!0}}},O=(n(281),Object(d.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cs-test"},["rank"==t.template.type?n("csStar",{attrs:{source:t.source}}):t._e(),"qa"==t.template.type?n("csQa",{attrs:{source:t.source}}):t._e(),"multi"==t.template.type?n("csOption",{attrs:{source:t.source}}):t._e(),n("transition",{attrs:{name:"cs-fb"},on:{"after-enter":t.feedbackDone}},[t.confirmed?n("feedback"):t._e()],1)],1)}),[],!1,null,null,null).exports),j=n(2);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R={created:function(){window.reportVueCreated("src/views/result/insert/popular-search/popular-search.vue")},mixins:[c.n,c.l],props:{source:{type:Object,default:function(){return{}}},done:{type:Function,default:function(){}}},computed:P(P({template:function(){return this.source.templateContent}},Object(x.c)({clickInfo:function(t){return t.result.insert.clickInfo}})),{},{reportWords:function(){return this.template.items.map((function(t){return t.word}))}}),mounted:function(){this.report({reportType:"expose"})},methods:{report:function(t){var e=this,n=Object.assign({reportType:"click",reportLogId:18821,scene:c.b.scene,query:c.b.query,searchId:c.b.searchId,sessionId:c.b.sessionId,timestamp:+new Date,docID:e.clickInfo.item.docID,docPos:e.source.pos,realType:e.clickInfo.data.real_type||e.clickInfo.data.type,subType:e.clickInfo.data.subType||0,word:e.reportWords,insertEchoInfo:e.clickInfo.item.insertEchoInfo||""},t);c.i.commonCgi({cgiName:l.a.reportInserData,data:n})},tap:function(t){var e=this.M_composeParentSid({t:j.p.POPULAR_SEARCH,s:c.b.searchId,did:t.docID,rid:this.$store.state.result.previousRid});this.M_checkSpecialSearchBeforeLaunchNewSearch({query:t.word,callback:function(){c.i.setInputBar({query:t.word,isInputChange:!1}),c.a.$emit(u.b.setQuery,{page:j.f.RESULT,query:t.word,tagInfo:{},searchId:"",extReqParams:{key:"parentSearchID",textValue:e}})},extParams:{crossExtReqParams:[{key:"parentSearchID",textValue:e}]}}),this.report({word:[t.word]})}}},T=(n(1753),Object(d.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"po-search"},[n("div",{staticClass:"po-search__title"},[t._v("\n    "+t._s(t.template.title)+"\n  ")]),n("div",{staticClass:"po-search__items heavy-links"},t._l(t.template.items,(function(e,s){return n("div",{key:e.word,staticClass:"heavy-link",on:{click:function(n){return t.tap(e,s)}}},[n("div",{staticClass:"heavy-link__inner"},[t._v("\n        "+t._s(e.word)+"\n      ")])])})),0)])}),[],!1,null,null,null).exports),$={created:function(){window.reportVueCreated("src/views/result/insert/negative-invite/pop.vue")},props:{data:{type:Object,default:function(){return{}}},done:{type:Function,default:function(){}},show:{type:Boolean,default:!1}},computed:{pop:function(){return this.data.pop}},methods:{hidePop:function(){this.$parent.showPop=!1},confirm:function(){this.hidePop(),this.$emit("confirm")},cancel:function(){this.hidePop()}}},S=(n(1354),{components:{pop:Object(d.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("half-screen",{attrs:{show:t.show,footer:{confirm:t.pop.confirm,cancel:t.pop.cancel}},on:{confirm:t.confirm,cancel:t.cancel},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"negative__pop-body"},[n("div",{staticClass:"negative__pop-title"},[t._v("\n        "+t._s(t.pop.title)+"\n      ")]),n("div",{staticClass:"negative__pop-desc"},[t._v("\n        "+t._s(t.pop.desc)+"\n      ")]),n("div",{staticClass:"negative__pop-img"})])]},proxy:!0}])})}),[],!1,null,null,null).exports,feedback:g},props:{source:{type:Object,default:function(){return{}}},done:{type:Function,default:function(){}}},data:function(){return{showPop:!1,showFeedback:!1}},computed:{data:function(){return this.source.templateContent}},created:function(){window.reportVueCreated("src/views/result/insert/negative-invite/negative.vue");u.a.$on(u.b.exposed,this._exposeReport)},methods:{_exposeReport:function(t){t.pos>=this.source.pos&&(this.talkToCgi(),u.a.$off(u.b.exposed,this._exposeReport))},hide:function(){this.done()},tap:function(){this.showPop=!0},popConfirm:function(){var t=this;t.showFeedback=!0,t.talkToCgi(2),setTimeout((function(){t.done()}),600)},talkToCgi:function(t){c.i.commonCgi({cgiName:this.data.pop&&this.data.pop.cgi||l.a.beTester,data:{type:t||1,clientTimeStamp:"".concat(+new Date),templateId:this.source.templateId}})}}}),D=(n(1755),Object(d.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"negative"},[n("div",{staticClass:"negative__normal"},[n("div",{staticClass:"negative__close",on:{click:t.hide}}),n("div",{staticClass:"negative__info"},[n("div",{staticClass:"negative__title"},[t._v("\n        "+t._s(t.data.title)+"\n      ")]),n("div",{staticClass:"negative__desc"},[t._v("\n        "+t._s(t.data.desc)+"\n      ")])]),n("div",{staticClass:"negative__button"},[n("div",{staticClass:"weui-btn weui-btn_primary",on:{click:t.tap}},[t._v("\n        "+t._s(t.data.button)+"\n      ")])])]),t.showFeedback?n("feedback",{attrs:{text:"已开启"}}):t._e(),n("pop",{attrs:{data:t.data,done:t.done,show:t.showPop},on:{confirm:t.popConfirm}})],1)}),[],!1,null,null,null).exports),L=n(24),q=n.n(L),A=n(32),N=n.n(A);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B={name:"OffscreenHintRows",props:{maxRows:{type:Number,default:1},maxItems:{type:Number,default:0},source:{type:Object,default:function(){return{}}}},data:function(){return{rows:[],canExpand:!1}},computed:{list:function(){return this.source.items||[]},showList:function(){return this.maxItems?this.list.slice(0,this.maxItems):this.list}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=0;this.rows=[],function n(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise((function(o){s>=t.maxRows||r>=t.showList.length?o(r):(t.rows.length<=s&&t.rows.push({words:[]}),t.rows[s].words.push(K(K({},t.showList[r]),{},{index:r})),t.$nextTick((function(){var i=t.$refs.row[s],a=t.$refs.words[s];if(i&&a){var c=i.clientWidth-30+12,u=c-24-8,l=a.scrollWidth;l<=c&&(e+=1),l<u?o(n(s,r+1)):l<=c?o(n(s+1,r+1)):(t.rows[s].words.pop(),o(n(s+1,r)))}})))}))}().then((function(n){for(var s=0;s<t.rows.length&&n<t.showList.length;s++)t.rows[s].words.push(K(K({},t.showList[n]),{},{index:n,ariaHidden:!0})),n+=1;t.canExpand=e<t.showList.length,t.$nextTick((function(){t.$emit("expose")}))}))},onExpand:function(){this.$emit("expand")}}},M=(n(2525),Object(d.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hac-offscreen-hint-rows",class:{"hac-offscreen-hint-rows--can-expand":t.canExpand}},[t._l(t.rows,(function(e,s){return n("div",{key:s,ref:"row",refInFor:!0,staticClass:"row"},[n("div",{ref:"words",refInFor:!0,staticClass:"words"},t._l(e.words,(function(e){return n("ui-link",{key:e.index,staticClass:"words__item",attrs:{title:e.word,"data-hint-id":e.word+"|"+e.index,"aria-hidden":e.ariaHidden?"true":void 0},nativeOn:{click:function(n){return n.stopPropagation(),t.$emit("tap",e,e.index)}}})})),1)])})),t.canExpand?n("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"expand-area active__opacity",attrs:{role:"presentation"},on:{click:t.onExpand}},[n("div",{staticClass:"expand-area__icon-wrap",attrs:{"aria-label":"展开",tabindex:"-1",role:"button"}},[n("ui-arrow",{attrs:{direction:"down",align:"flex",size:24}})],1)]):t._e()],2)}),[],!1,null,"d541f7fa",null).exports),V=n(29),H=n(50),W=n(8),z={name:"GridExpandable",components:{OffscreenHintRows:M},props:{maxRows:{type:Number,default:1},source:{type:Object,default:function(){return{}}}},data:function(){return{expanded:!1}},computed:{title:function(){return this.source.title||""},list:function(){return this.source.items||[]},showList:function(){return this.list.slice(0,8)},needExpand:function(){return!0!==this.source.forbidExpand&&this.showList.length>4},needRecordAction:function(){return!!this.source.needRecordAction},allowTwoLine:function(){return c.b.fontRatio>1}},created:function(){this.reportArrBase=this.getReportArrBase()},mounted:function(){var t=this,e=this.$refs.bdRef,n=!0;this.expose=new H.Expose((function(e){e.length>0&&(t.report(1,e.join(";")),n&&(n=!1,t.registerLeaveObserver()))}),{container:e,attr:"data-hint-id",ensureWithinContainer:!0}),this.needExpand||this.expose.analysis()},beforeDestroy:function(){var t;this.isToBeDestoried=!0,null===(t=this.expose)||void 0===t||t.destory(),this.expose=null,this.unregisterLeaveObserver()},methods:{onOffscreenExpose:function(){var t;this.needExpand&&(null===(t=this.expose)||void 0===t||t.analysis())},onExpand:function(){var t=this;this.expanded=!0,this.report(3),setTimeout((function(){var e;null===(e=t.expose)||void 0===e||e.analysis()}),300)},onTap:function(t,e){var n=this.M_composeParentSid({t:j.p.RECOMMEND_HINT_AFTER_CLICKING,s:c.b.searchId,did:[this.source.clickInfo&&this.source.clickInfo.item&&this.source.clickInfo.item.docID,this.source.clickInfo&&this.source.clickInfo.data&&(this.source.clickInfo.data.real_type||this.source.clickInfo.data.type),this.source.clickInfo&&this.source.clickInfo.data&&this.source.clickInfo.data.subType].join("#"),rid:this.$store.state.result.previousRid});this.report(2,"".concat(t.word,"|").concat(e)),this.M_checkSpecialSearchBeforeLaunchNewSearch({query:t.word,callback:function(){c.i.setInputBar({query:t.word,isInputChange:!1}),c.a.$emit(c.k.setQuery,{page:j.f.RESULT,query:t.word,tagInfo:{},searchId:"",extReqParams:{key:"parentSearchID",textValue:n}})},extParams:{crossExtReqParams:[{key:"parentSearchID",textValue:n}]},newSearchType:j.t.HINT_AFTER_CLICK,docId:t.word})},getReportArrBase:function(){return[c.b.searchId,c.b.sessionId,c.b.parentSearchID,c.b.query,c.b.scene,this.source.clickInfo&&this.source.clickInfo.item&&this.source.clickInfo.item.docID,0,"",this.source.clickInfo&&this.source.clickInfo.data&&(this.source.clickInfo.data.real_type||this.source.clickInfo.data.type),this.source.clickInfo&&this.source.clickInfo.data&&this.source.clickInfo.data.subType,0]},report:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.recordAction(t,e);var n=this.reportArrBase||this.getReportArrBase();c.f.reportCommonKv(V.a.hintAfterClicking,[].concat(N()(n.slice(0,6)),[t,e],N()(n.slice(8,10)),[Date.now(),this.source.requestId]))},recordAction:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(this.needRecordAction,this.source,this.needRecordAction){var n=Math.floor(Date.now()/1e3),s=e.split(";").map((function(e){var s=null==e?void 0:e.split("|"),r=q()(s,2),o=r[0];r[1];return{word:o,timestamp:n,type:t}}));s.length&&this.$store.commit("result/insert/updateHintActionsMap",s)}},registerLeaveObserver:function(){var t=this;this.isToBeDestoried||(this.observer=new IntersectionObserver((function(e){q()(e,1)[0].isIntersecting||t.reportLeave()}),{threshold:0,rootMargin:"-60px 0px 0px 0px"}),this.observer.observe(this.$el),W.b.onWebviewPause(this.reportLeave),this.$once("hook:beforeDestroy",this.reportLeave))},unregisterLeaveObserver:function(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this.observer=null,W.b.offWebviewPause(this.reportLeave)},reportLeave:function(){this.unregisterLeaveObserver(),this.leaveReported||(this.report(4),this.leaveReported=!0)}}},G=(n(3110),{name:"HacDoubleLineGridExpandable",components:{GridExpandable:Object(d.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-hint",class:{"recommend-hint--link-title-allow-two-line":t.allowTwoLine}},[t.title?n("div",{staticClass:"recommend-hint__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),n("div",{ref:"bdRef",staticClass:"recommend-hint__bd"},[t.needExpand&&!t.expanded?n("offscreen-hint-rows",{attrs:{source:t.source,"max-rows":t.maxRows,"max-items":8},on:{tap:t.onTap,expand:t.onExpand,expose:t.onOffscreenExpose}}):n("ui-column",{attrs:{col:2,list:t.showList,fill:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item,r=e.index;return[n("ui-link",{attrs:{title:s.word,"data-hint-id":s.word+"|"+r},nativeOn:{click:function(e){return e.stopPropagation(),t.onTap(s,r)}}})]}}])})],1)])}),[],!1,null,"a0c3d4ac",null).exports},props:{source:{type:Object,default:function(){return{}}}}}),Q={components:{HacDoubleLineGridExpandable:Object(d.a)(G,(function(){var t=this.$createElement;return(this._self._c||t)("grid-expandable",{attrs:{"max-rows":2,source:this.source}})}),[],!1,null,null,null).exports},props:{source:{type:Object,default:function(){return{}}}}},U=Object(d.a)(Q,(function(){var t=this.$createElement;return(this._self._c||t)("hac-double-line-grid-expandable",{attrs:{source:this.source}})}),[],!1,null,null,null).exports,J={components:{heightAnimate:r.a,csTest:O,popularSearch:T,negativeInvite:D,hintAfterClicking:U},mixins:[o.a],inject:["templates"],props:{source:{type:Object,default:function(){return{}}},show:{type:Boolean,default:!1},withoutEnter:{type:Boolean,default:!1},withoutLeave:{type:Boolean,default:!1}},data:function(){return{display:this.show,withoutLeavePrivate:!1}},created:function(){var t=this;c.a.$on(u.b.exposed,(function(e){e.pos>=t.source.pos&&(t.display=!0)})),c.a.$on(u.b.resultPageEnd,(function(){t.display=!0})),c.a.$on(u.b.getResult,(function(e){0==e.offset&&(t.withoutLeavePrivate=!0)}))},mounted:function(){this.source.immediateLazy&&(this.display=!0)},methods:{done:function(){var t=this;setTimeout((function(){t.$store.commit({type:"result/insert/removeInsert",index:t.source.pos})}),300)}}},X=(n(1761),Object(d.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("heightAnimate",{attrs:{duration:300,"without-enter":t.withoutEnter,"without-leave":t.withoutLeave||t.withoutLeavePrivate}},[t.M_getComponetFailReport(t.templates[t.source.type],t.source.type,"lazy.vue")?n(t.templates[t.source.type],{tag:"component",attrs:{source:t.source,done:t.done}}):t._e()],1):t._e()}),[],!1,null,null,null).exports),Y=n(45).a.types,Z={components:{lazy:X},mixins:[s.a],provide:function(){return{templates:Y,pos:this.pos}},props:{source:{type:Object,default:function(){return{}}}},data:function(){return{templates:Y}}},tt=(n(1762),Object(d.a)(Z,(function(){var t=this.$createElement;return(this._self._c||t)("lazy",{attrs:{source:this.source,show:!this.source.lazyload,"without-enter":!this.source.lazyload,"without-leave":!this.source.lazyUnload}})}),[],!1,null,null,null));e.default=tt.exports},2525:function(t,e,n){"use strict";n(988)},275:function(t,e,n){"use strict";n(977)},276:function(t,e,n){"use strict";n(978)},277:function(t,e,n){"use strict";n(979)},278:function(t,e,n){"use strict";n(980)},279:function(t,e,n){"use strict";n(981)},280:function(t,e,n){"use strict";n(982)},281:function(t,e,n){"use strict";n(983)},3033:function(t,e,n){"use strict";var s=n(22),r=n.n(s);e.a={methods:{M_getComponetFailReport:function(t,e,n){return void 0===t&&(console.warn("测试 M_getComponetFailReport"),r.a.info("".concat(n," [get componentFail], ").concat(e))),t}}}},3110:function(t,e,n){"use strict";n(989)},977:function(t,e,n){},978:function(t,e,n){},979:function(t,e,n){},980:function(t,e,n){},981:function(t,e,n){},982:function(t,e,n){},983:function(t,e,n){},984:function(t,e,n){},985:function(t,e,n){},986:function(t,e,n){},988:function(t,e,n){},989:function(t,e,n){},990:function(t,e,n){},991:function(t,e,n){}}]);