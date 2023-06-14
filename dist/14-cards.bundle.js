(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1692:function(t,e,i){"use strict";i(897)},2038:function(t,e,i){"use strict";i(893)},2178:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),r=i(10),a=i(5),o=i(80),c=i(633),l=i(0),u={name:"Slide",mixins:[l.l,l.n],props:{filter:{type:Object,default:function(){return{}}}},computed:{options:function(){return this.filter.options||[]}},watch:{filter:function(){this.alignSelectedOption(!0)}},mounted:function(){this.alignSelectedOption()},methods:{tap:function(t){t.selected||this.$emit("change",t)},alignSelectedOption:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$nextTick((function(){var i=t.$refs.options,n=t.$refs.wrap,s=n.clientWidth,r=i.find((function(t){return t.classList.contains("selected")})),a=r.offsetLeft-(s-r.offsetWidth)/2;null!=t._lastScrollLeft&&t._lastScrollLeft===a||(t._lastScrollLeft=a,n.scrollTo({left:a,behavior:e?"smooth":"auto"}))}))},getStep:function(){var t=this.$refs.wrap.offsetWidth;return t>100?t-88:t}}},p=(i(2495),i(4)),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block-multi-filter-slide"},[t.filter.title?i("div",{staticClass:"block-multi-filter-slide__title"},[t._v(t._s(t.filter.title))]):t._e(),i("div",{staticClass:"block-multi-filter-slide__main"},[i("div",{directives:[{name:"arrow-scroll",rawName:"v-arrow-scroll",value:{step:t.getStep},expression:"{ step: getStep }"}],ref:"wrap",staticClass:"block-multi-filter-slide__inner"},t._l(t.options,(function(e,n){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:n+"-"+e.paramKey+"-"+e.paramValue,ref:"options",refInFor:!0,staticClass:"block-multi-filter-slide__option",class:{selected:!!e.selected},attrs:{role:"button"},on:{click:function(i){return t.tap(e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),0)])])}),[],!1,null,"10d4d850",null).exports,m=i(2),f=i(3),h=i(28);function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y,_,g,O=new r.a({slide:1}),k={name:"BlockMultiFilter",components:{slide:d},mixins:[l.l,l.n],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){var t;return{filterTypes:O,filters:JSON.parse(JSON.stringify((null===(t=this.d.multiFilter)||void 0===t?void 0:t.filters)||[]))}},watch:{d:function(){var t;this.filters=JSON.parse(JSON.stringify((null===(t=this.d.multiFilter)||void 0===t?void 0:t.filters)||[]))}},methods:{getFilterOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[];return this.filters.forEach((function(i){i.options.forEach((function(i){i.selected&&e.push(t?{paramKey:i.paramKey,paramValue:i.paramValue}:{key:i.paramKey,textValue:i.paramValue})}))})),e},onFilterChange:function(t,e,i){var n,s=this;this.$set(this.filters,i,b(b({},e),{},{options:e.options.map((function(e){return b(b({},e),{},{selected:e.paramValue===t.paramValue})}))})),null!==(n=this.d.multiFilter)&&void 0!==n&&n.cgi?(f.a.$emit(l.k.showToast,{action:h.a.loading,text:"加载中"}),l.i.getServiceCommCgiData({cgiName:this.d.multiFilter.cgi.name,data:b(b({},this.d.multiFilter.cgi.params),{},{data:JSON.stringify(this.getFilterOptions(!0))}),target:this,refreshType:"box"}).then((function(t){f.a.$emit(l.k.hideToast),t.errCode&&0!==t.errCode?f.a.$emit(l.k.showToast,{action:h.a.pure,text:"系统繁忙，请稍后再试"}):s.$emit("replace-items",t.data)}))):(l.f.reportSearchStay({eventId:m.h.searchEventType.EXIT,pageType:m.h.pageType.RESULT,exitType:m.h.exitType.OTHER,exitSubType:m.h.exitSubType.FILTER}),f.a.$emit(l.k.setQuery,{page:m.f.RESULT,searchId:l.b.searchId,extReqParams:{key:"parentSearchID",textValue:this.M_composeParentSid({t:m.p.FILTER,s:l.b.searchId,did:t.title||"",rid:this.$store.state.result.previousRid})},filter:this.getFilterOptions()})),this.M_clickReport({clickContent:t.title||"",skipDocInfo:!0,actionType:m.g.CLICK_CHOOSE},e)}}},C=(i(2038),Object(p.a)(k,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block-advance-filter"},[t._l(t.filters,(function(e,n){return[i(t.filterTypes[e.type],{key:n,tag:"component",attrs:{filter:e,"data-report-id":t.M_itemReportId(e,n+1)},on:{change:function(i){return t.onFilterChange(i,e,n)}}})]}))],2)}),[],!1,null,"4a286b7c",null).exports),T={name:"Empty",mixins:[l.n],props:{emptyText:String}},w=(i(3048),Object(p.a)(T,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"cards-empty",attrs:{role:"option"},domProps:{innerHTML:this._s(this.xss(this.emptyText))}})}),[],!1,null,"f3e17322",null).exports),x=i(3033),P=i(617),E=(i(215),{components:{ca:P.a},mixins:[l.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},disableAutoPlay:{type:Boolean,default:!1}},data:function(){return{observer:null}},mounted:function(){this.observer=new IntersectionObserver(this.handleObserve,{threshold:0}),this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.unobserve(this.$el),this.observer.disconnect()},methods:{tap:function(){this.M_go(this.item),this.M_clickReport({clickZone:1},this.item)},handleObserve:function(t){var e=this;t.forEach((function(t){var i=t.isIntersecting;e.$set(e.item,"isInView",i)}))}}}),S=(i(1692),Object(p.a)(E,(function(){var t=this.$createElement;return(this._self._c||t)("ca",this._b({on:{tap:this.tap}},"ca",this.$props,!1))}),[],!1,null,null,null).exports),I=new r.a(s()({},a.b.DOUBLE_CARD_CHANNEL_ACTIVITY,"ca")),R={components:{ca:S},mixins:[l.l,l.n,x.a],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){return{types:I}},computed:{isVerticalSearch:function(){return l.b.isVerticalSearch},isFinderInnerSearch:function(){return l.b.isFinderSearch}}},j=(i(3434),Object(p.a)(R,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"double-rich":!0,"double-rich_vertical":t.isVerticalSearch,"finder-search":t.isFinderInnerSearch}},t._l(t.d.items,(function(e,n){return i("div",{key:e.docID,staticClass:"item search_list_item",class:{"item-video":t.d.type==t.types.vi},attrs:{"data-id":e.docID+"&"+t.d.type,"data-report-id":t.M_genDocReportId({data:t.d,typePos:t.typePos,item:e,pos:n+1})}},[t.M_getComponetFailReport(t.types[t.d.type],t.d.type,"double.vue")?i(t.types[t.d.type],{tag:"component",attrs:{item:e,data:t.d,pos:n+1,"type-pos":t.typePos}}):t._e()],1)})),0)}),[],!1,null,"d706145e",null).exports),D={name:"Image",components:{playMask:i(480).a},mixins:[l.l,l.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},methods:{onTap:function(){this.M_go(this.item),this.M_clickReport({clickContent:this.xssFilter(this.item.title)},this.item)}}},M=(i(3049),Object(p.a)(D,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"cards-image active__mask",attrs:{"data-report-id":t.M_itemReportId(t.item)},on:{click:function(e){return e.stopPropagation(),t.onTap.apply(null,arguments)}}},[i("div",{staticClass:"image"},[i("div",{directives:[{name:"image",rawName:"v-image",value:t.item.image,expression:"item.image"}],staticClass:"image__inner"}),t.item.maskText||t.item.maskIcon?i("play-mask",{attrs:{text:t.item.maskText,source:t.item.maskLeftText?{title:t.item.maskLeftText}:void 0,"icon-url":t.item.maskIcon,"show-gradient":!!(t.item.maskText||t.item.maskLeftText||t.item.duration||t.item.annotation),"use-ui-source":"","text-with-bg":""}}):t._e()],1),i("div",{staticClass:"title ellipsis_2"},[t.item.titleTag&&t.item.titleTag.prepend?i("ui-tags",{staticClass:"title__prepend-tags",attrs:{"align-vertical":"",tags:t.item.titleTag.prepend}}):t._e(),i("span",{attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.title))}}),t.item.titleTag&&t.item.titleTag.append?i("ui-tags",{staticClass:"title__append-tags",attrs:{"align-vertical":"",tags:t.item.titleTag.append}}):t._e()],1),t.item.desc&&t.item.desc.length?i("div",{staticClass:"desc ellipsis_2"},t._l(t.item.desc,(function(e,n){return i("span",{key:n,attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(e))}})})),0):t._e(),t.item.recommendTag?i("ui-tags",{staticClass:"recommend-tag",attrs:{flex:"",tags:t.item.recommendTag}}):t._e()],1)}),[],!1,null,"7ba54d64",null).exports),L={name:"Book",mixins:[l.l,l.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{itemsLessThan3:function(){var t;return((null===(t=this.data.items)||void 0===t?void 0:t.length)||0)<3}},methods:{onTap:function(){this.M_go(this.item),this.M_clickReport({clickZone:8,clickContent:this.xssFilter(this.item.title)},this.item)}}},$=(i(3050),Object(p.a)(L,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"cards-book active__mask",class:{"cards-book--items-lt-3":t.itemsLessThan3},attrs:{"data-report-id":t.M_itemReportId(t.item)},on:{click:function(e){return e.stopPropagation(),t.onTap.apply(null,arguments)}}},[i("div",{staticClass:"image"},[i("div",{directives:[{name:"image",rawName:"v-image",value:t.item.coverUrl,expression:"item.coverUrl"}],staticClass:"image__inner"})]),i("div",{staticClass:"title ellipsis_2"},[i("span",{attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.title))}})]),t.item.author?i("div",{staticClass:"desc ellipsis_2",attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.author))}}):t._e(),t.item.recommendTag?i("ui-tags",{staticClass:"recommend-tag",attrs:{flex:"",tags:t.item.recommendTag}}):t._e()],1)}),[],!1,null,"290c8b2b",null).exports),N=(y={},s()(y,a.b.TREBLE_CARD,"comp-image"),s()(y,a.b.WEREAD_COLUMNS_CARD,"book"),y),F=(_={},s()(_,a.b.TREBLE_CARD,{gap:[8,12],col:3}),s()(_,a.b.WEREAD_COLUMNS_CARD,{gap:[16,12],maxCol:3}),_),A={name:"Columns",components:{compImage:M,book:$},mixins:[l.l,l.n],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){return{types:N}},computed:{list:function(){return this.d.items||[]},columnProps:function(){var t=F[this.d.type]||{};return{gap:t.gap,col:t.col||t.maxCol&&Math.min(this.list.length,t.maxCol)||3}}}},V=(i(3150),Object(p.a)(A,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns-card",class:{"columns-card--with-source":!(!t.d.source||!t.d.source.title)}},[t.list&&t.list.length?i("ui-column",t._b({attrs:{list:t.list},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,s=e.index;return[i(t.types[t.d.type],{tag:"component",attrs:{"data-id":n.docID+"&"+t.d.type,"data-back-report-id":t.M_genDocReportId({data:t.d,typePos:t.typePos,item:n,pos:s+1}),item:n,data:t.d,pos:s+1,"type-pos":t.typePos}})]}}],null,!1,2612221693)},"ui-column",t.columnProps,!1)):t._e()],1)}),[],!1,null,"f29e7b70",null).exports),H=i(84);function B(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function U(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var W=new r.a((g={},s()(g,a.b.DOUBLE_CARD,"double"),s()(g,a.b.TREBLE_CARD,"columns"),s()(g,a.b.DOUBLE_CARD_CHANNEL_ACTIVITY,"double"),s()(g,a.b.WEREAD_COLUMNS_CARD,"columns"),g)),J={components:{blockSource:H.default,CardsEmpty:w,BlockMultiFilter:C,hd:o.default,tabs:c.a,double:j,columns:V},mixins:[l.l,l.n,x.a],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){return{types:W,data:this.d}},computed:{isVerticalSearch:function(){return l.b.isVerticalSearch},isChannelActivity:function(){return this.data.type===a.b.DOUBLE_CARD_CHANNEL_ACTIVITY}},watch:{d:{handler:function(t){this.data=t}}},methods:{onReplaceItems:function(t){var e=this;this.data=U(U(U({},this.data),t),{},{title:this.data.title}),setTimeout((function(){f.a.$emit(l.k.exposeByList,e.data.items.map((function(t){return"".concat(t.docID,"&").concat(e.data.type)}))),f.a.$emit(l.k.exposeAnalysis)}))}}},K=(i(3052),Object(p.a)(J,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{cards:!0,cards_vertical:t.isVerticalSearch,cards_channel_activity:t.isChannelActivity}},[t.data.title?i("hd",{attrs:{d:t.data,"type-pos":t.typePos}}):t._e(),t.data.tabs?i("tabs",{attrs:{d:t.data,"type-pos":t.typePos,tabs:t.data.tabs,filters:t.data.boxExtraInfo&&t.data.boxExtraInfo.filters}}):t._e(),t.data.multiFilter?i("block-multi-filter",{attrs:{d:t.data,"type-pos":t.typePos},on:{"replace-items":t.onReplaceItems}}):t._e(),t.data.items&&0===t.data.items.length&&t.data.emptyText?i("cards-empty",{attrs:{"empty-text":t.data.emptyText}}):t.M_getComponetFailReport(t.types[t.data.type],t.data.type,"cards.vue")?i(t.types[t.data.type],t._b({tag:"component"},"component",Object.assign({},t.$props,{d:t.data}),!1)):t._e(),t.d.source&&t.d.source.title?i("blockSource",{attrs:{d:t.d,source:t.d.source},nativeOn:{click:function(e){return e.stopPropagation(),t.M_clickSourceReport.apply(null,arguments)}}}):t._e()],1)}),[],!1,null,"6a89f7b8",null));e.default=K.exports},2495:function(t,e,i){"use strict";i(892)},3033:function(t,e,i){"use strict";var n=i(22),s=i.n(n);e.a={methods:{M_getComponetFailReport:function(t,e,i){return void 0===t&&(console.warn("测试 M_getComponetFailReport"),s.a.info("".concat(i," [get componentFail], ").concat(e))),t}}}},3048:function(t,e,i){"use strict";i(894)},3049:function(t,e,i){"use strict";i(899)},3050:function(t,e,i){"use strict";i(900)},3052:function(t,e,i){"use strict";i(902)},3150:function(t,e,i){"use strict";i(901)},328:function(t,e,i){},329:function(t,e,i){},3434:function(t,e,i){"use strict";i(898)},623:function(t,e,i){"use strict";i(328)},624:function(t,e,i){"use strict";i(329)},633:function(t,e,i){"use strict";var n=i(9),s=i(0),r=i(2);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=t.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop,s=Math.floor(i.top+n+e),r=window.innerHeight||document.documentElement.clientHeight;return s>n?(document.body.style.minHeight="".concat(n+r,"px"),Promise.resolve()):(document.body.style.minHeight="".concat(s+r,"px"),window.scrollTo({top:s,behavior:"instant"}),new Promise((function(e,i){var n=null,r=null,a=function(){var t=window.pageYOffset||document.documentElement.scrollTop;return Math.abs(t-s)<1},o=function(){n&&window.removeEventListener("scroll",n)},c=function(){clearTimeout(r),o(),e()},l=function(){o(),i()},u=function(){clearTimeout(r),r=setTimeout(l,1e3)};a()?c():(u(),n=function(){u(),a()&&c()},window.addEventListener("scroll",n),t.getBoundingClientRect())})))}var o={created:function(){window.reportVueCreated("src/views/result/block/block-title/block-title-tabs.vue")},mixins:[s.l,s.n],props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0},tabs:{type:Array,required:!0},filters:{type:Array,default:function(){return[]}}},computed:{filterOptions:function(){return this.filters&&this.filters.length?this.filters[0].options:[]},currentFilterOption:function(){return this.filterOptions.find((function(t){return t.selected}))||{}},isMaskShow:function(){return n.a.$mask.isShow}},watch:{isMaskShow:function(t){if(t){var e="".concat(this.currentFilterOption.title,":filter_option:").concat(s.g.getRandom(6));this.M_clickReport({clickZone:0,clickContent:e,skipDocInfo:!0},{actionType:r.g.CLICK_SHOW_DIALOG,reportId:e,itemPos:"0:filter_option"})}else this.hidePopover()},$route:function(t){"result"!==t.name&&this.hidePopover()}},beforeDestroy:function(){this.hidePopover()},methods:{onTapTab:function(t,e){var i=this;this.hidePopover(),this.tabs.find((function(t){return t.selected}))!=t&&a(this.$el.parentElement).then((function(){var n="".concat(t.title,":tab:").concat(s.g.getRandom(6));i.M_clickReport({clickZone:0,clickContent:n,skipDocInfo:!0},{actionType:r.g.CLICK_COMMON,reportId:n,itemPos:"".concat(e+1,":tab")});var a=i.M_composeParentSid({t:r.p.SWITCH_TAB,s:s.b.searchId,did:t.title,rid:i.$store.state.result.previousRid});i.$store.dispatch("result/tabs/switchTab",{selectedTab:t,selectedOption:i.currentFilterOption,block:i.d,parentSearchID:a}),i.$emit("tap:tab",t,e)}))},changeFilterOption:function(t,e){var i=this;this.hidePopover();var n=this.tabs.find((function(t){return t.selected}));t!=this.currentFilterOption&&a(this.$el.parentElement).then((function(){var a=t.reportId;i.M_clickReport({clickZone:0,clickContent:a,skipDocInfo:!0},{actionType:r.g.VERTICAL,reportId:a,itemPos:"".concat(e+1,":filter_option")});var o=i.M_composeParentSid({t:r.p.FILTER,s:s.b.searchId,did:t.title,rid:i.$store.state.result.previousRid});i.$store.dispatch("result/tabs/switchTab",{selectedTab:n,selectedOption:t,block:i.d,parentSearchID:o}),i.$emit("tap:filter",t,e)}))},hidePopover:function(){this.$refs.negativePop&&this.$refs.negativePop.hide()}}},c=(i(623),i(624),i(4)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block-title-tabs"},[t._l(t.tabs,(function(e,n){return i("div",{directives:[{name:"active",rawName:"v-active"}],key:e.title,staticClass:"block-title-tab",class:{selected:e.selected},on:{click:function(i){return t.onTapTab(e,n)}}},[i("div",{staticClass:"block-title-tab-inner"},[t._v(t._s(e.title))])])})),t.filterOptions.length?i("div",{staticClass:"block-title-filter"},[i("pop-over",{ref:"negativePop",staticClass:"negative_wrap",attrs:{"mask-style":{backgroundColor:"transparent"},"class-name":"negative_wrap_prop","spacing-v":8,"spacing-h":16},scopedSlots:t._u([{key:"trigger",fn:function(){return[i("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"block-title-filter-title active__mask"},[i("div",{staticClass:"block-title-filter-title-text",class:{selected:t.currentFilterOption!=t.filterOptions[0]}},[t._v(t._s(t.currentFilterOption.title))]),i("ui-arrow",{staticClass:"block-title-filter-arrow",attrs:{direction:t.isMaskShow?"up":"down",align:"flex",size:"big"}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("div",t._l(t.filterOptions,(function(e,n){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:e.paramValue,staticClass:"negative_wrap_content active__absolute",on:{click:function(i){return i.stopPropagation(),t.changeFilterOption(e,n)},touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v(t._s(e.title))])})),0)]},proxy:!0}],null,!1,557169647)})],1):t._e()],2)}),[],!1,null,"5d0dc874",null);e.a=l.exports},892:function(t,e,i){},893:function(t,e,i){},894:function(t,e,i){},897:function(t,e,i){},898:function(t,e,i){},899:function(t,e,i){},900:function(t,e,i){},901:function(t,e,i){},902:function(t,e,i){}}]);