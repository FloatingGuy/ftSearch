(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{244:function(t,e,i){},263:function(t,e,i){(function(e){var i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),u=Object.prototype.toString,h=Math.max,f=Math.min,d=function(){return c.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=r.test(t);return a||o.test(t)?s(t.slice(2),a?2:8):n.test(t)?NaN:+t}t.exports=function(t,e,i){var n,r,o,s,a,l,c=0,u=!1,_=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var i=n,o=r;return n=r=void 0,c=e,s=t.apply(o,i)}function y(t){return c=t,a=setTimeout(w,e),u?g(t):s}function b(t){var i=t-l;return void 0===l||i>=e||i<0||_&&t-c>=o}function w(){var t=d();if(b(t))return k(t);a=setTimeout(w,function(t){var i=e-(t-l);return _?f(i,o-(t-c)):i}(t))}function k(t){return a=void 0,v&&n?g(t):(n=r=void 0,s)}function I(){var t=d(),i=b(t);if(n=arguments,r=this,l=t,i){if(void 0===a)return y(l);if(_)return a=setTimeout(w,e),g(l)}return void 0===a&&(a=setTimeout(w,e)),s}return e=p(e)||0,m(i)&&(u=!!i.leading,o=(_="maxWait"in i)?h(p(i.maxWait)||0,e):o,v="trailing"in i?!!i.trailing:v),I.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=r=a=void 0},I.flush=function(){return void 0===a?s:k(d())},I}}).call(this,i(53))},3289:function(t,e,i){"use strict";i(244)},346:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i.n(n),o=i(24),s=i.n(o),a=i(809),l=i(2),c=i(0);function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var h={name:"ImageView",components:{UiScroll:a.a},mixins:[c.n,c.l,c.j],data:function(){return{isDarkMode:c.g.isDarkMode()}},computed:{imageUrls:function(){return this.itemInfo.lightImageUrl?[{reportId:this.itemInfo.reportId,jumpInfo:this.itemInfo.jumpInfo,lightImageUrl:this.itemInfo.lightImageUrl,darkImageUrl:this.itemInfo.darkImageUrl||this.itemInfo.lightImageUrl}]:[]}},watch:{imageUrls:{handler:function(){var t=this;this.$nextTick((function(){var e,i,n;null===(e=t.$refs)||void 0===e||null===(i=e.horScroll)||void 0===i||null===(n=i.$el)||void 0===n||n.scroll(0,0),c.a.$emit(c.k.resultExposeAnalysis)}))}}},created:function(){var t=this;c.g.watchMatchMediaColor((function(e){t.isDarkMode=e}))},methods:{onUiScrollEnd:function(t){var e,i=s()(t,1)[0],n=((null==i||null===(e=i.el)||void 0===e?void 0:e.dataset)||{}).scrollItemIndex,o=void 0===n?-1:n;if(+o>-1){var a=this.imageUrls[+o];this.M_clickReport({clickContent:"图片滑动"},function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({actionType:l.g.HOR_TOUCHMOVE},a))}},onTapImage:function(t){t.jumpInfo&&(this.M_go(t),this.M_clickReport({clickContent:"图片"},t))},onTapLink:function(t){this.M_go(t),this.M_clickReport({clickContent:t.title},t)}}},f=(i(3510),i(4)),d=Object(f.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemInfo.lightImageUrl?i("div",{staticClass:"image-view"},[i("ui-scroll",{directives:[{name:"arrow-scroll",rawName:"v-arrow-scroll"}],ref:"horScroll",staticClass:"image-list",attrs:{padding:0,items:t.imageUrls,wait:50,role:"listbox",start:0},on:{scrollEnd:t.onUiScrollEnd},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,r=e.index;return[i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"image-wrap",class:{active__absolute:n.jumpInfo},attrs:{"data-report-id":t.M_itemReportId(n.reportId,r+1),"data-expose-width-ratio":"0.001"},on:{click:function(e){return e.stopPropagation(),t.onTapImage(n)}}},[i("div",{directives:[{name:"image",rawName:"v-image.raw",value:t.isDarkMode?n.darkImageUrl:n.lightImageUrl,expression:"isDarkMode ? item.darkImageUrl : item.lightImageUrl",modifiers:{raw:!0}}],staticClass:"image-cont"})])]}}],null,!1,3513047143)}),t.itemInfo.link?i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"image-link active__mask",attrs:{role:"link","data-report-id":t.M_itemReportId(t.itemInfo.link.reportId)},on:{click:function(e){return e.stopPropagation(),t.onTapLink(t.itemInfo.link)}}},[t._v("\n    "+t._s(t.itemInfo.link.title)+"\n  ")]):t._e()],1):t._e()}),[],!1,null,"4ea18996",null);e.default=d.exports},3510:function(t,e,i){"use strict";i(400)},400:function(t,e,i){},809:function(t,e,i){"use strict";var n=i(1),r=i.n(n),o=i(33),s=i.n(o),a=i(23),l=i.n(a),c=i(263),u=i.n(c),h=i(34),f=i.n(h),d=i(35),m=i.n(d);function p(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v=function(){function t(e){f()(this,t);var i=Object.assign({container:".swiper",item:".item",activeClass:"active",threshold:50,duration:300,padding:0,decayFactor:1,useCapture:!1},e);this.$el=i.el||document,this.$container=this.$el.querySelector(i.container),this.itemSelector=i.item,this._start={},this._move={},this._end={},this._ignore=!1,this._offset=0,this._eventHandlers={},this._options=i,this._current=0,this._padding=this._options.padding,this.$container.style.marginLeft="".concat(this._padding,"px"),this._bind()}return m()(t,[{key:"on",value:function(t,e){if(this._eventHandlers[t])throw new Error("event ".concat(t," is already register"));if("function"!=typeof e)throw new Error("parameter callback must be a function");return this._eventHandlers[t]=e,this}},{key:"_getContainerWidth",value:function(){return this._getItemElements().reduce((function(t,e){return t+e.rect.width}),0)}},{key:"_getItemElements",value:function(){return[].map.call(this.$container.querySelectorAll(this.itemSelector),(function(t){return{el:t,rect:t.getBoundingClientRect()}}))}},{key:"_getItemElementsCount",value:function(){return this.$container.querySelectorAll(this.itemSelector).length}},{key:"_getItemElement",value:function(t){var e=this.$container.querySelector("".concat(this.itemSelector,":nth-child(").concat(t+1,")"));return e?{el:e,rect:e.getBoundingClientRect()}:null}},{key:"_bind",value:function(){var t=this._options.useCapture;this._startEventListener=this._startEventListener.bind(this),this._moveEventListener=this._moveEventListener.bind(this),this._endEventListener=this._endEventListener.bind(this),this.$el.addEventListener("touchstart",this._startEventListener,t),this.$el.addEventListener("touchmove",this._moveEventListener,t),this.$el.addEventListener("touchend",this._endEventListener,t)}},{key:"_startEventListener",value:function(t){this._start.x=t.changedTouches[0].pageX,this._start.y=t.changedTouches[0].pageY,this._ignore=!1,this.$container.style["-webkit-transition"]="none",this.$container.style.transition="none"}},{key:"_moveEventListener",value:function(t){if(this._move.x=t.changedTouches[0].pageX,this._move.y=t.changedTouches[0].pageY,this._ignore||Math.abs(this._start.x-this._move.x)/1<Math.abs(this._start.y-this._move.y))this._ignore=!0;else{var e=(this._move.x-this._start.x)*this._options.decayFactor,i=+(e-this._offset);i=e>=0?Math.min(e-this._offset,.6*this._getItemElement(0).rect.width):Math.max(e-this._offset,.6*-this._getItemElement(this._getItemElementsCount()-1).rect.width+Math.min(0,this.$el.offsetWidth-this._getContainerWidth()-2*this._padding));var n="translate3d(".concat(i,"px, 0, 0)");this.$container.style["-webkit-transform"]=n,this.$container.style.transform=n,this._eventHandlers.scroll&&this._eventHandlers.scroll.apply(this,t),t.preventDefault()}}},{key:"_endEventListener",value:function(t){if(this._ignore?(this._end.x=this._start.x,this._end.y=this._start.y):(this._end.x=t.changedTouches[0].pageX,this._end.y=t.changedTouches[0].pageY),this._getContainerWidth()<=this.$el.offsetWidth)return this._current=0,this._show(this._current),void(Math.abs(this._start.x-this._end.x)+Math.abs(this._start.y-this._end.y)>1&&t.preventDefault());var e=(this._end.x-this._start.x)*this._options.decayFactor;this._prev=this._current;var i=this._offset-e;this._current=this._getCurrentByOffset(i,{round:!0}),this._prev===this._current&&(e>this._options.threshold&&this._current>0?this._current-=1:e<-this._options.threshold&&this._current<this._getItemElementsCount()-1&&(this._current+=1)),this._show(this._current)}},{key:"_getCurrentByOffset",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.items||this._getItemElements(),r=i.round||!1,o=0,s=t,a=p(n);try{for(a.s();!(e=a.n()).done;){var l=e.value,c=l.rect.width;if(r){if((s-=c)<-c/2)break;if(o+=1,s<c/2)break}else if(o+=1,(s-=c)<0)break}}catch(u){a.e(u)}finally{a.f()}return o}},{key:"_show",value:function(t){var e=this,i=this._getItemElements();this._offset=i.slice(0,t).reduce((function(t,e){return t+e.rect.width}),0);var n=Math.max(this._getContainerWidth()-this.$el.offsetWidth+2*this._padding,0);this._offset>n&&(this._offset=n,this._current=this._getCurrentByOffset(n,{items:i}));var r="translate3d(-".concat(this._offset,"px, 0, 0)"),o="".concat(this._options.duration,"ms");this.$container.style["-webkit-transition"]=o,this.$container.style.transition=o,this.$container.style["-webkit-transform"]=r,this.$container.style.transform=r,clearTimeout(this._timeout),this._timeout=setTimeout((function(){(e._current!=e._prev||null!==e._timeout||e._goto>-1)&&(e._eventHandlers.swiped&&e._eventHandlers.swiped.apply(e,[e._prev,e._current]),e._goto=-1,e._timeout=null)}),this._options.duration)}},{key:"go",value:function(t){if(!(t<0||t>this._getItemElementsCount()-1||t===this._current))return 0===t?(this._current=0,this._prev=0):(this._current=t,this._prev=t-1),this._goto=t,this._show(this._current),this}},{key:"refresh",value:function(){this._current=this._getCurrentByOffset(this._offset,{round:!0}),this._show(this._current)}}]),t}();function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var y={name:"UiScroll",props:{items:{type:Array,default:function(){return[]}},snap:{type:Boolean,default:!1},start:{type:Number,default:0},scrollToCenter:{type:Boolean,default:!1},wait:{type:Number,default:300},padding:{type:Number,default:16},decayFactor:{type:Number,default:1},useCapture:{type:Boolean,default:!1}},watch:{start:function(t){this._isMounted&&this.scrollTo(t)},items:function(){this.snap&&this.scrollTo(0)}},created:function(){this.onScrollEnd=u()(this.onScrollEnd.bind(this),this.wait)},mounted:function(){var t=this;return s()(l.a.mark((function e(){var i,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t,t.$refs.scroll&&t.snap&&(n=t.$el.querySelector(".ui-scroll__wrapper"))&&(n.style.marginLeft="".concat(t.padding-4,"px")),t.$refs.scroll){e.next=4;break}return e.abrupt("return");case 4:if(!t.snap){e.next=13;break}return e.next=7,t.$nextTick();case 7:t.$refs.scroll.querySelector(".ui-scroll__item"),(r=new v({el:t.$refs.scroll,container:".ui-scroll__wrapper",item:".ui-scroll__item",padding:t.padding-4,decayFactor:t.decayFactor,useCapture:t.useCapture})).on("scroll",(function(e){return t.$emit("scroll",e)})),r.on("swiped",(function(t,e){i.onScrollEnd()})),t.swiper=r,t.scrollTo(t.start);case 13:t.scrollToCenter&&t.scrollTo(t.start);case 14:case"end":return e.stop()}}),e)})))()},methods:{refresh:function(){this.swiper&&this.swiper.refresh()},onScroll:function(t){this.$emit("scroll",t),this.onScrollEnd()},calcVisibility:function(){var t=this;if(!this.$refs.scroll||!this.$refs.items)return[];var e=this.$refs.scroll;return this.parentRect=e.getBoundingClientRect(),this.$refs.items.map((function(e){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({el:e},t.getVisibility(e))}))},onScrollEnd:function(){this.$emit("scrollEnd",this.calcVisibility())},getVisibility:function(t){if(!t)return{visible:!1,include:!1};var e=t.getBoundingClientRect(),i=this.parentRect,n=function(t,e){return parseFloat(t)<=parseFloat(e)+1},r=Boolean(n(i.left,e.left)&&n(e.right,i.right)&&n(i.top,e.top)&&n(e.bottom,i.bottom));return{visible:Boolean((n(i.left,e.right)&&n(e.right,i.right)||n(i.left,e.left)&&n(e.left,i.right))&&(n(i.top,e.bottom)&&n(e.bottom,i.bottom)||n(i.top,e.bottom)&&n(e.bottom,i.bottom))),include:r}},scrollTo:function(t){if(t=Math.max(Math.min(t,this.items.length-1),0),this.snap)this.swiper.go(t);else{var e=this.$refs.items[t].getBoundingClientRect(),i=e.left,n=e.width,r=this.$refs.scroll.getBoundingClientRect(),o=r.left,s=r.width,a=this.$refs.scroll.scrollLeft,l=i-o;this.$refs.scroll.scrollTo({left:this.scrollToCenter?l+a-(s-n)/2:l+a,top:0,behavior:"smooth"})}}}},b=(i(3289),i(4)),w=Object(b.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.snap?i("div",{ref:"scroll",staticClass:"ui-scroll ui-scroll-snap"},[i("div",{staticClass:"ui-scroll__wrapper"},t._l(t.items,(function(e,n){return i("div",{key:e.id||e.docId||e.docID||n+ +new Date,ref:"items",refInFor:!0,staticClass:"ui-scroll__item",attrs:{"data-scroll-item-index":n}},[t._t("default",null,{item:e,index:n})],2)})),0)]):i("div",{ref:"scroll",staticClass:"ui-scroll ui-scroll-smooth",on:{scroll:function(e){return e.stopPropagation(),e.preventDefault(),t.onScroll.apply(null,arguments)}}},[i("div",{staticClass:"ui-scroll__wrapper"},t._l(t.items,(function(e,n){return i("div",{key:e.id||e.docId||e.docID||n+ +new Date,ref:"items",refInFor:!0,staticClass:"ui-scroll__item",attrs:{"data-scroll-item-index":n}},[t._t("default",null,{item:e,index:n})],2)})),0)])}),[],!1,null,"f8361092",null).exports;w.install=function(t){t.component(w.name,w)};e.a=w}}]);