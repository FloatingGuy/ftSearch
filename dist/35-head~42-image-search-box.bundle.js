(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1738:function(t,e,s){"use strict";s(962)},238:function(t,e,s){},239:function(t,e,s){},241:function(t,e,s){},242:function(t,e,s){},243:function(t,e,s){},265:function(t,e,s){"use strict";s(243)},3135:function(t,e,s){"use strict";s(239)},466:function(t,e,s){"use strict";var i=s(39),n=s(478),r=s(467),a=s(0),o={components:{nagetive:r.a},mixins:[i.a],provide:function(){return{block:this.data,item:this.item,pos:this.pos,typePos:this.typePos}},props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},isAriaHidden:{type:Boolean,default:!0},source:{type:Object,default:function(){return{}}},rich:{type:[Boolean,Number],default:!1},single:{type:[Boolean],default:!1}},data:function(){return{tagColor:n.a}},computed:{show:function(){return!a.g.isObjectEmpty(this.source)||this.item.feedback},className:function(){return[this.rich?"source":"source-plain",this.single?"source_single":""]}},methods:{onTapLink:function(){this.$emit("tap:link",this.$props.source.link)}}},c=(s(265),s(4)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{class:t.className,attrs:{"aria-hidden":t.isAriaHidden}},[t.source.iconMask?s("div",{staticClass:"source__icon-mask",style:{webkitMaskImage:"url('"+t.source.iconMask+"')"}}):t.source.iconUrl?s("div",{directives:[{name:"image",rawName:"v-image:avatar",value:t.source.iconUrl,expression:"source.iconUrl",arg:"avatar"}],staticClass:"source__icon",attrs:{"aria-label":"图像"}}):t._e(),t.source.title?s("div",{staticClass:"source__title",attrs:{title:t.M_os("链接")},domProps:{innerHTML:t._s(t.xss(t.source.title))}}):t._e(),t.source.link?s("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"source__link",attrs:{title:t.M_os("链接")},on:{click:function(e){return e.stopPropagation(),t.onTapLink.apply(null,arguments)}}},[t._v("\n    "+t._s(t.source.link.text)+"\n  ")]):t._e(),t.source.prepend&&t.source.prepend.length?t._l(t.source.prepend,(function(e){return s("div",{key:e,staticClass:"source__text"},[t._v("\n      "+t._s(e)+"\n    ")])})):t._e(),t.source.dateTime?s("div",{staticClass:"source__text date"},[t._v("\n    "+t._s(t.source.dateTime)+"\n  ")]):t.source.date?s("div",{staticClass:"source__text date"},[t._v("\n    "+t._s(t._f("dateFormat")(t.source.date))+"\n  ")]):t._e(),t.source.text&&t.source.text.length?t._l(t.source.text,(function(e){return s("div",{key:e,staticClass:"source__text"},[t._v("\n      "+t._s(e)+"\n    ")])})):t._e(),t.source.tag?s("div",{staticClass:"source__rec"},[s("ui-tags",{staticClass:"source__rec-item",attrs:{tags:t.source.tag}}),t.item.feedback?s("nagetive",t._b({staticClass:"source__rec-item"},"nagetive",t.$props,!1)):t._e()],1):s("div",{staticClass:"source__rec"},[s("div",{staticClass:"source__rec-item"},[t._v("\n      "+t._s(t.source.hot)+"\n    ")]),t.item.feedback?s("nagetive",t._b({staticClass:"source__rec-item"},"nagetive",t.$props,!1)):t._e()],1)],2):t._e()}),[],!1,null,null,null);e.a=u.exports},467:function(t,e,s){"use strict";var i=s(1),n=s.n(i),r=s(39),a=s(3),o={mixins:[r.a],props:{data:{type:Object,default:function(){return{}}}},data:function(){return{reasons:[]}},computed:{renderReasons:{set:function(t){this.reasons=t},get:function(){return this.reasons.length?this.reasons:this.data.reasons}},showButton:function(){return this.renderReasons.some((function(t){return t.checked}))}},created:function(){window.reportVueCreated("src/components/global/source/negative/withReason.vue");var t=this;a.a.$on(a.b.negativeHide,(function(){t.renderReasons=[]}))},methods:{tapJump:function(){this.$emit("tapJump")},tapConfirm:function(){this.$emit("tapConfirm",this.renderReasons)},tapReason:function(t,e){this.renderReasons=this.renderReasons.map((function(t,s){return e==s?Object.assign({},t,{checked:t.checked?0:1}):t}))}}},c=(s(474),s(4)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"header line"},[s("div",{staticClass:"title line__item"},[s("p",{staticClass:"title__word"},[t._v("\n        "+t._s(t.data.title)+"\n      ")])]),s("div",{staticClass:"button line__item primary no-wrap"},[t.showButton?s("div",{staticClass:"weui-btn weui-btn_mini weui-btn_primary",on:{click:t.tapConfirm}},[t._v("\n        "+t._s(t.data.confirm.title)+"\n      ")]):t._e()])]),s("div",{staticClass:"reasons"},t._l(t.renderReasons,(function(e,i){return s("div",{key:e.wording,staticClass:"reason",class:{reason__checked:e.checked},on:{click:function(s){return t.tapReason(e,i)}}},[t._v("\n      "+t._s(e.wording)+"\n    ")])})),0),s("div",{staticClass:"jump",on:{click:t.tapJump}},[s("div",{staticClass:"jump-in"},[t._v("\n      "+t._s(t.data.complaint.title)+"\n    ")])])])}),[],!1,null,"d28ecc42",null).exports,l={created:function(){window.reportVueCreated("src/components/global/source/negative/plain.vue")},props:{data:{type:Object,default:function(){return{}}}},methods:{tap:function(){this.$emit("tapJump")}}},p=(s(3135),Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"n-plain active__item",on:{click:this.tap}},[this._v("\n  "+this._s(this.data.complaint.title)+"\n")])}),[],!1,null,"926be1a0",null).exports),d=new(s(10).a)({withReason:1,plain:2}),f={components:{withReason:u,plain:p},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{types:d}},methods:{tapJump:function(){var t=this.data.complaint;this.$emit("tapJump",t)},tapConfirm:function(t){this.$emit("tapConfirm",{confirm:this.data.confirm,feedback:{reasons:t,title:this.data.title}})}}},m=(s(476),Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.types[this.data.type],{tag:"component",attrs:{data:this.data},on:{tapJump:this.tapJump,tapConfirm:this.tapConfirm}})],1)}),[],!1,null,null,null).exports),h=s(8),v=s(17),_=s(0);function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={components:{pop:m},mixins:[r.a],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},needWords:{type:Boolean,default:!1}},computed:{feedback:function(){return this.item.feedback},popData:function(){if(!this.feedback)return!1;var t=(this.$store.state.result.self.resultObj.feedback||{})[this.feedback.id];return!!t&&Object.assign({},t,this.feedback)}},created:function(){a.a.$on(a.b.viewChange,this._hide)},destroyed:function(){a.a.$off(a.b.viewChange,this._hide)},methods:{_hide:function(){this.$refs&&this.$refs.popOver&&this.$refs.popOver.hide()},_makeUrlPamrams:function(){var t=this;return g(g({},t.base),{},{clientType:t.data.real_type||t.data.type,subType:t.data.subType||0,docID:t.item.docID||"",boxID:t.data.boxID||"",boxPos:t.typePos||0,docPos:t.pos||0,docUrl:t.item.jumpUrl||t.item.doc_url||t.item.weappUrl||""})},onHide:function(){a.a.$emit(a.b.negativeHide)},tap:function(){this._hide()},tapJump:function(t){if(this.needWords&&this.data.items.length&&t.jumpUrl&&!t.jumpUrl.includes("relatedWords")){var e=this.data.items.map((function(t){return t.word||""})).join("|");t.jumpUrl=this.M_composeUrl(t.jumpUrl,{relatedWords:e,query:_.b.query})}this.M_go({jumpUrl:this.M_composeUrl(t.jumpUrl,this._makeUrlPamrams())}),this._hide()},tapConfirm:function(t){var e=Object.assign(this._makeUrlPamrams(),{clientTimeStamp:"".concat(+new Date),feedback:t.feedback});h.a.commonCgi({cgiName:t.confirm.cgiName||v.a.negativeFeedBack,data:e}),this.$refs.popOver.hide(),a.a.$emit(a.b.showToast,{text:"已反馈"})}}},y=(s(477),Object(c.a)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.popData?s("PopOver",{ref:"popOver",staticClass:"negative__wrap expand-hotspot",attrs:{"class-name":"negative__outter"},on:{hide:t.onHide},nativeOn:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()},touchmove:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"trigger",fn:function(){return[s("svg-icon",{staticClass:"source__negative",attrs:{name:"negative_button","aria-hidden":"true"}})]},proxy:!0},{key:"content",fn:function(){return[s("pop",{attrs:{data:t.popData},on:{tapJump:t.tapJump,tapConfirm:t.tapConfirm}})]},proxy:!0}],null,!1,582450734)}):t._e()}),[],!1,null,null,null));e.a=y.exports},474:function(t,e,s){"use strict";s(238)},476:function(t,e,s){"use strict";s(241)},477:function(t,e,s){"use strict";s(242)},478:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var i=new(s(10).a)({blue:1,gold:2,gray:3,reading:4,green:5,red:6})},830:function(t,e,s){"use strict";var i=s(1),n=s.n(i);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var o={props:{list:{require:!0,default:function(){return[]},type:Array},rows:{type:Number,default:2}},data:function(){return{ellipsisSize:0,showSize:0,observer:null}},mounted:function(){this.observer=new ResizeObserver(this._initStatus),this.observer.observe(this.$refs.wordsInner)},beforeDestroy:function(){this.observer.unobserve(this.$refs.wordsInner)},methods:{_initStatus:function(){if(this.list.length<=this.rows)this.ellipsisSize=0,this.showSize=this.list.length,this.observer.unobserve(this.$refs.wordsInner);else{for(var t=this.$refs.wordsHidden.scrollWidth,e=this.$refs.wordsHidden.querySelectorAll(".wording"),s=[],i=[],n=0,r=t,a=0;a<this.rows;a++)for(r=t;r>0&&n<this.list.length;){var o=e[n],c=o.offsetWidth+parseFloat(getComputedStyle(o,null).getPropertyValue("margin-right"));if(s[n]=c,!(r>=c))break;i[n]=a,r-=c,n++}if(this.ellipsisSize=this.list.length-n,this.ellipsisSize)for(var u=this.$refs.more.offsetWidth;r<=u;)this.ellipsisSize++,r+=s[--n];this.showSize=n,this.$forceUpdate()}},toggleMore:function(t){var e=this;this.observer.unobserve(this.$refs.wordsInner),this.$nextTick((function(){e.showSize=e.list.length,e.ellipsisSize=0,e.$forceUpdate()})),this.$emit("toggleMore",{text:t.target.innerText})},tap:function(t,e){this.$emit("tapWord",a(a({},t),{},{index:e}))}}},c=(s(1738),s(4)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"words"},[s("div",{ref:"wordsInner",staticClass:"words_inner"},[t._l(t.list.slice(0,t.showSize),(function(e,i){return s("div",{directives:[{name:"active",rawName:"v-active"}],key:e.title,staticClass:"word ellipsis_1",class:{selected:e.selected},attrs:{role:"button","aria-label":(e.selected?"已选定，搜索，":"未选定，搜索，")+e.title},on:{click:function(s){return t.tap(e,i)}}},[s("svg-icon",{staticClass:"magnifier",attrs:{name:"magnifier"}}),s("span",[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ellipsisSize,expression:"ellipsisSize"},{name:"active",rawName:"v-active"}],staticClass:"word ellipsis_1 more",attrs:{role:"button"},on:{click:t.toggleMore}},[s("svg-icon",{staticClass:"magnifier",attrs:{name:"arrow"}}),s("span",[t._v("余下"+t._s(t.ellipsisSize)+"个")])],1)],2),s("div",{ref:"wordsHidden",staticClass:"words_inner",staticStyle:{height:"0",overflow:"hidden","margin-bottom":"0"},attrs:{"aria-hidden":"true"}},[t._l(t.list,(function(e){return s("div",{key:e.title,staticClass:"word ellipsis_1 wording"},[s("svg-icon",{staticClass:"magnifier",attrs:{name:"magnifier"}}),s("span",[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),s("div",{ref:"more",staticClass:"word ellipsis_1 more"},[s("svg-icon",{staticClass:"magnifier",attrs:{name:"arrow"}}),s("span",[t._v("余下"+t._s(t.ellipsisSize)+"个")])],1)],2)])}),[],!1,null,"7dcb604b",null);e.a=u.exports},962:function(t,e,s){}}]);