(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1219:function(t,e,i){},1220:function(t,e,i){},1221:function(t,e,i){},1567:function(t,e,i){"use strict";var n=i(0),r=i(10),s=i(2),a=i(809),o=new r.a({divideEqually:1}),c={components:{UiScroll:a.a},mixins:[n.n,n.l],props:{list:{type:Array,default:function(){return[]}},selTabIndex:{type:Number,default:0},showType:{type:Number,default:0}},data:function(){return{useIndexSelected:!1}},computed:{tabWrapperClass:function(){return{"tabs-divide-equally":this.showType==o.divideEqually}}},created:function(){this.list.some((function(t){return t.selected}))||(this.useIndexSelected=!0)},methods:{onTapTab:function(t,e){this.$emit("tap",{tab:t,tabIndex:e,itemPos:this.M_getItemPos(t),list:this.list})},onScrollEnd:function(){n.a.$emit(n.k.resultExposeAnalysis),this.M_clickReport({clickContent:"横向滑动",actionType:s.g.HOR_TOUCHMOVE})}}},l=(i(3097),i(4)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list&&t.list.length?i("ui-scroll",{directives:[{name:"arrow-scroll",rawName:"v-arrow-scroll"}],staticClass:"tabs-wrapper",class:t.tabWrapperClass,attrs:{padding:16,items:t.list,wait:300,role:"listbox"},on:{scrollEnd:t.onScrollEnd},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,r=e.index;return[i("ui-button",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:""+(n.label||n.name)+n.value||r,staticClass:"tab",class:{selected:n.selected||t.useIndexSelected&&t.selTabIndex==r},attrs:{mini:"","data-report-id":t.M_itemReportId(n,r+1)},nativeOn:{click:function(e){return e.stopPropagation(),t.onTapTab(n,r)}}},[t._v("\n      "+t._s(n.label||n.name)+"\n    ")])]}}],null,!1,270097654)}):t._e()}),[],!1,null,"3bf95122",null);e.a=u.exports},244:function(t,e,i){},3097:function(t,e,i){"use strict";i(338)},3179:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i.n(n),s=i(0),a=i(3),o=i(28),c=i(2),l=i(1567),u=i(32),h=i.n(u),d=i(9),f=i(17);function p(t){return"bj"===t||"nq"===t}function m(t){return 0==+t||1==+t||"sh"===t||"sz"===t}function v(t){return 2==+t||"hk"===t}function g(t){return 3==+t||"us"===t}function y(t){return"uk"===t}function _(t){return"p"===t||"pt"===t}function b(t){return/^ZS/.test(t)||"INDEX"===t||/^FT/.test(t)}function k(t){return"ZS-ZQ"===t}function w(t){return"GP-A-CYB"===t}function C(t){return"GP-A-KCB"===t}function T(t){return["FJ","FJ-CX","KJ","LOF","ETF","QDII-LOF/ETF"].includes(t)}function x(t){return"ZQ-NHG"===t}function O(t){return"ZS-FT_DE"===t||"FT_DE"===t}function S(t){return"FU_SGXS"===t}function I(t){return"ZS-JW"===t}var P={name:"Basic",components:{MiniTextTag:i(552).a},mixins:[s.n,s.l],props:{quote:{type:Object,default:function(){return{}}},indicator:{type:Array,default:function(){return[]}},trading:{type:Object}},data:function(){return{divideColumn:2}},computed:{isMaskShow:function(){return d.a.$mask.isShow},relmarkets:function(){return this.quote.relationMarket},market:function(){return this.quote.market},stockType:function(){return this.quote.stockType},indicatorList:function(){var t=this,e=this.indicator.map((function(e){if(!parseFloat(e.value))return e.formattedVal="--",e;return["今开","最高","最低"].includes(e.label)&&(e.class=t.valToClass(e.value-t.quote.close)),"成交额"==e.label&&((m(t.market)||b(t.stockType)||_(t.market))&&(e.formattedVal=1e4*e.value),e.formattedVal=s.g.bigNumberToText({number:e.formattedVal||e.value})),"总市值"==e.label&&(e.formattedVal=s.g.bigNumberToText({number:1e8*+e.value})),"市盈"==e.label&&e.value<0&&(e.formattedVal="亏损"),e})),i=h()(new Array(this.divideColumn)).map((function(){return[]}));return e.forEach((function(e,n){i[n%t.divideColumn].push(e)})),i},currMarket:function(){var t=this,e={};return this.relmarkets.some((function(i){return i.value===t.quote.market&&(e=i,!0)})),e}},watch:{isMaskShow:function(t){t?this.M_clickReport({actionType:c.g.CLICK_SHOW_DIALOG,clickContent:this.currMarket.label},this.currMarket):this.hidePopOver()}},created:function(){a.a.$on(a.b.viewChange,this.hidePopOver),f.b.onWebviewPause(this.hidePopOver)},destroyed:function(){a.a.$off(a.b.viewChange,this.hidePopOver),f.b.offWebviewPause(this.hidePopOver)},methods:{valToClass:s.g.valToClass,valToSymbol:function(t){return t<=0?"".concat(t):"+".concat(t)},onTapMarket:function(t){this.hidePopOver(),this.currMarket.value!==t.value&&(this.$emit("change-market",t.value),this.M_clickReport({actionType:c.g.CONFIRM_CHANGE_CODE,clickContent:t.label,itemPos:"0:".concat(this.M_getItemType(t))},t))},hidePopOver:function(){var t=this.$refs.popoverRef;t&&t.hide&&t.hide()}}},E=(i(3649),i(4)),j=Object(E.a)(P,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"basic-info"},[i("div",{staticClass:"title"},[i("div",{staticClass:"text"},[i("span",[t._v(t._s(t.quote.market.toUpperCase()))]),i("span",[t._v(t._s(t.quote.code))]),i("span",[t._v(" "+t._s(t.quote.name))])]),t.relmarkets&&t.relmarkets.length>1?i("PopOver",{ref:"popoverRef",staticClass:"market-pop-over",attrs:{"mask-style":{backgroundColor:"transparent"},"class-name":"negative_wrap_prop"},nativeOn:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()},touchmove:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"trigger",fn:function(){return[i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"current-market active__mask",attrs:{"data-report-id":t.M_itemReportId(t.currMarket.reportId)}},[i("span",[t._v(t._s(t.currMarket.label))]),i("ui-arrow",{attrs:{gap:"",direction:t.isMaskShow?"up":"down",align:"flex"}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("div",{staticClass:"pop-over-content"},t._l(t.relmarkets,(function(e,n){return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:n,staticClass:"relative-market active__mask",on:{click:function(i){return i.stopPropagation(),t.onTapMarket(e,n)}}},[t._v(t._s(e.label))])})),0)]},proxy:!0}],null,!1,2155038159)}):t._e()],1),i("div",{staticClass:"desc"},[i("span",{style:{"flex-shrink":0}},[t._v(t._s(t.quote.updateTime.replace(/\-/g,"/")))]),i("span",{staticClass:"ellipsis_1"},[t._v(t._s(t.quote.season||"北京时间"))]),i("span",{staticClass:"ellipsis_1"},[t._v(t._s(t.quote.status))])]),t.quote.delay?i("div",{staticClass:"delay"},[t._v("\n    "+t._s(t.quote.delay)+"\n  ")]):t._e(),i("div",{staticClass:"current",class:t.valToClass(t.quote.changePrice)},[i("span",{staticClass:"new"},[t._v(t._s(t.quote.new))]),i("span",[t._v(t._s(t.quote.currencyName))]),i("span",[t._v(t._s(t.valToSymbol(t.quote.changePrice)))]),i("span",[t._v(t._s(t.valToSymbol(t.quote.changePct))+"%")])]),t.indicatorList&&t.indicatorList.length?i("div",{staticClass:"indicator-list"},t._l(t.indicatorList,(function(e,n){return i("div",{key:n,staticClass:"indicator-column"},t._l(e,(function(e,n){return i("div",{key:n,staticClass:"indicator-item"},[i("div",{staticClass:"label",class:{"label-with-sup":e.Superscript}},[i("span",[t._v(t._s(e.label))]),e.Superscript?i("sup",[e.Superscript?i("mini-text-tag",{attrs:{text:e.Superscript,"font-size":8,"bg-color":"transparent","fg-color":"var(--FG-1)","padding-l-r":0,"padding-t-b":0}}):t._e()],1):t._e()]),i("div",{staticClass:"value",class:e.class},[t._v(t._s(e.formattedVal||e.value))])])})),0)})),0):t._e(),t.trading&&t.trading.label?i("div",{staticClass:"trading"},[t.trading.volume>0?[i("div",{staticClass:"trading-indicator"},[i("span",{staticClass:"label"},[t._v(t._s(t.trading.label))]),i("div",{class:t.valToClass(t.trading.changePrice)},[i("span",[t._v(t._s(t.trading.new))]),i("span",[t._v(t._s(t.valToSymbol(t.trading.changePrice)))]),i("span",[t._v(t._s(t.valToSymbol(t.trading.changePct))+"%")])])]),i("div",{staticClass:"ellipsis_1"},[t.trading.updateTime?i("span",[t._v(t._s(t.trading.updateTime.split(" ")[1]))]):t._e(),i("span",{staticClass:"pl-4"},[t._v(t._s(t.trading.season))])])]:i("span",[t._v("暂无对盘成交数据")])],2):t._e()])}),[],!1,null,"0a234ee9",null).exports,M=i(1335);function $(t){return t?{xAxis:"rgba(255,255,255,0.5)",yAxis:"rgba(255,255,255,0.5)",tip:"rgba(255,255,255,0.5)",defaultGray:"rgba(255,255,255,0.5)",maxMin:"rgba(255,255,255,0.5)",maxMinLine:"rgba(255,255,255,0.5)",hline:"rgba(255,255,255,0.15)",vline:"rgba(255,255,255,0.15)"}:{xAxis:"rgba(0,0,0,0.55)",yAxis:"rgba(0,0,0,0.55)",tip:"rgba(0,0,0,0.55)",defaultGray:"rgba(0,0,0,0.55)",maxMin:"rgba(0,0,0,0.55)",maxMinLine:"rgba(0,0,0,0.55)",hline:"rgba(0,0,0,0.15)",vline:"rgba(0,0,0,0.15)"}}function D(t,e){return C(t)?"股":p(e)||m(e)||_(e)?"手":v(e)||g(e)||y(e)||"ft"===e?"股":""}function q(t,e){return I(t)?[332,425,60,86]:p(e)||m(e)||_(e)?[242,310,60,86,267,272,345]:v(e)?[332,425,60,86]:g(e)?[391,495,60,86]:y(e)||O(t)?[511,645,60,86]:S(t)?[1187,1495,60,86]:void 0}function A(t,e){return C(e)?1:function(t){return"ZQ-KZZ"===t}(e)?10:p(t)||m(t)?100:1}function L(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw s}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function N(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function B(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?N(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var R={2:"day",3:"week",4:"month"},H={components:{mins:M.mins,kline:M.kline},props:{chartType:Number,width:Number,height:Number,market:String,stockType:String,quote:Object,chartData:Object,isDarkMode:Boolean},data:function(){return{options:null,defaultOptions:(t={gap:!1,lastestPrice:!1,remindPrice:!1,ds:!1,zx:!1,minsIndicator:"volume",doubleIndicators:!1,mainIndicator:"ma",firstIndicator:"volume",secondIndicator:"macd",yangKStyle:{id:"solid",name:"实心阳线"},auctionMode:"close",maTypes:[5,10,20,0,0],emaTypes:[12,50,0,0,0,0,0,0,0,0],volumeTypes:[5,10,20,0,0],cjeTypes:[5,10,20,0,0],macdParams:{short:12,long:26,m:9},dmiParams:{n:14,m:6},cciParams:{n:14},wrParams:{n1:10,n2:6},bollParams:{deviation:20,width:2},kdjParams:{n1:9,n2:3,n3:3},rsiParams:{n1:6,n2:12,n3:24},chartRatio:100,indicatorCount:1},{hideIndicator:!0,disableInteract:!0,wxSearchStyle:!0,setting:t,minsIndicator:t.minsIndicator})};var t},computed:{fixNum:function(){var t,e,i,n,r;return(null===(t=this.quote)||void 0===t||null===(e=t.new)||void 0===e||null===(i=e.split("."))||void 0===i||null===(n=i[1])||void 0===n?void 0:n.length)||(r=this.market,["us","sh","sz"].includes(r)?2:["hk"].includes(r)?3:2)}},watch:{chartData:function(){this.render()},isDarkMode:function(){var t=this;this.options=null,this.$nextTick((function(){t.render()}))}},mounted:function(){this.render()},methods:{render:function(){switch(this.chartType){case 0:this.renderMins();break;case 1:this.renderFMins();break;case 2:case 3:case 4:this.renderKline()}},renderMins:function(){var t,e,i=null===(t=this.chartData)||void 0===t||null===(e=t.minute)||void 0===e?void 0:e.detail;if(null!=i&&i.length){var n,r,s=0,a=A(this.market,this.stockType),o=null==i?void 0:i.map((function(t){var e=+t.price,i=0==+t.volume?0:t.volume-s,n=+t.volume*a;return s=+t.volume,{time:t.time,price:e,volume:i,amount:e*i*a,totalVolume:n}})),c=q(this.stockType,this.market);this.options={ready:!0,data:{items:o,preClose:+this.quote.close},options:Object.assign({},this.defaultOptions,{skin:this.isDarkMode?"dark":"plain",type:"mins",layout:"mins-portrait",fixNum:this.fixNum,stockUnit:D(this.stockType,this.market),labels:(n=this.stockType,r=this.market,w(n)||C(n)||x(n)||k(n)?["09:30","11:30/13:00","15:30"]:I(n)?["09:30","12:00/13:00","16:00"]:p(r)||m(r)||_(r)?["09:30","11:30/13:00","15:00"]:v(r)?["09:30","12:00/13:00","16:00"]:g(r)?["09:30","12:45","16:00"]:y(r)?["08:00","12:15","16:30"]:O(n)?["09:00","13:15","17:30"]:S(n)?["17:00","5:15/9:00","16:30"]:void 0),count:C(this.stockType)||w(this.stockType)?c[4]:x(this.stockType)||k(this.stockType)?c[5]:c[0],kch:C(this.stockType)?[c[0],c[4]]:null,chy:w(this.stockType)?[c[0],c[4]]:null,useIndicators:["volume","macd","rsi"],isHKIndex:v(this.market)&&b(this.stockType),isHKOrZsOrFundOrNhg:v(this.market)||b(this.stockType)||T(this.stockType)||x(this.stockType),customColor:B({chart:{priceLine:"#10aeff",avgPriceLine:"#ffc300",fill:["rgba(16,174,255,0.3)","rgba(16,174,255,0.0001)"]}},$()),customDarkColor:B({chart:{priceLine:"#10aeff",avgPriceLine:"#ffc300",fill:["rgba(16,174,255,0.3)","rgba(16,174,255,0.0001)"]}},$(!0))})}}},renderFMins:function(){var t,e,i,n=null===(t=this.chartData)||void 0===t||null===(e=t.fiveDayMinute)||void 0===e?void 0:e.detail;if(null!=n&&n.length){var r,s=h()(n).reverse(),a=this.stockType,o=this.market,c=A(o,a),l=q(this.stockType,this.market),u=[],d=[],f=L(s);try{for(f.s();!(r=f.n()).done;){var w=r.value;d.push("".concat(w.date.slice(4,6),"/").concat(w.date.slice(6)));for(var C=0,I=w.data,P=0,E=I.length;P<E;P++){var j=I[P];if(j){var M=!1;if(x(a)||k(a)?M=P<=120&&P%4==0||P>123&&P%4==0||271===P:p(o)||m(o)||_(o)?M=P<=120&&P%4==0||P>123&&P%4==0||241===P:v(o)?M=P<=150&&P%4==0||P>=151&&(P+1)%4==0||330===P:g(o)?M=P%4==0||390===P:y(o)||O(a)?M=P%4==0||510===P:S(a)&&(M=P<=735&&P%4==0||735===P||P>=736&&P%4==0||1186===P),M){var F=+j.price,N=0==+j.volume?0:j.volume-C,R=+j.volume*c;C=+j.volume,u.push({time:j.time,price:F,volume:N,amount:F*N*c,totalVolume:R})}}}}}catch(V){f.e(V)}finally{f.f()}var H=x(this.stockType)||k(this.stockType);this.options={ready:!0,data:{items:u,preClose:+(null==s||null===(i=s[0])||void 0===i?void 0:i.preClose)},options:Object.assign({},this.defaultOptions,{skin:this.isDarkMode?"dark":"plain",type:"fmins",layout:"mins-portrait",fixNum:this.fixNum,stockUnit:D(this.stockType,this.market),labels:d,count:H?l[6]:l[1],daysConf:{multiDays:!0,eachDayCount:(H?l[6]:l[1])/5},useIndicators:["volume","macd","rsi"],isHKIndex:v(this.market)&&b(this.stockType),isHKOrZsOrFundOrNhg:v(this.market)||b(this.stockType)||T(this.stockType)||x(this.stockType),customColor:B({chart:{priceLine:"#10aeff",avgPriceLine:"#ffc300",fill:["rgba(16,174,255,0.3)","rgba(16,174,255,0.0001)"]}},$()),customDarkColor:B({chart:{priceLine:"#10aeff",avgPriceLine:"#ffc300",fill:["rgba(16,174,255,0.3)","rgba(16,174,255,0.0001)"]}},$(!0))})}}},renderKline:function(){var t,e,i=null===(t=this.chartData)||void 0===t||null===(e=t.kline)||void 0===e?void 0:e.detail;if(null!=i&&i.length){for(var n=[],r=0,s=i.length;r<s;r++){var a=i[r],o=i[r-1];n.push({time:a.date,open:+a.open,close:+a.close,high:+a.high,low:+a.low,volume:+a.volume,preClose:o?+o.close:+this.chartData.preClose})}this.options={ready:!0,data:n,options:Object.assign({},this.defaultOptions,{skin:this.isDarkMode?"dark":"plain",type:R[this.chartType],layout:"kline-portrait",fixNum:this.fixNum,stockUnit:D(this.stockType,this.market),count:60,useIndicators:["volume","kdj","wr"],mainIndicator:"ma",currIndicator:"volume",setting:{indicatorCount:1,maTypes:[5,10,20],volumeTypes:[5,10,20]},customColor:B({rise:"#FA5151",drop:"#07C160",ma:["#FA9D3B","#10AEFF","#6467F0"]},$()),customDarkColor:B({rise:"#FA5151",drop:"#07C160",ma:["#FA9D3B","#10AEFF","#6467F0"]},$(!0))})}}}}},V=(i(3186),Object(E.a)(H,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{width:t.width+"px",height:t.height+"px"}},[t.options?i({0:"mins",1:"mins",2:"kline",3:"kline",4:"kline"}[t.chartType],{tag:"component",attrs:{type:{0:"mins",1:"fmins"}[t.chartType],width:t.width,height:t.height,options:t.options}}):t._e()],1)}),[],!1,null,"7fc80478",null).exports);function W(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function K(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?W(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var Z={name:"HqStock",components:{Tabs:l.a,Basic:j,HqChart:V},mixins:[s.l,s.n,s.j],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{width:0,chartType:0,selTabIndex:0,isDarkMode:s.g.isDarkMode(),loading:!1}},computed:{quote:function(){return this.itemInfo.quote},chartData:function(){return this.itemInfo.chartData}},watch:{chartType:function(){this.refresh()}},created:function(){var t=this;s.g.watchMatchMediaColor((function(e){t.isDarkMode=e}))},mounted:function(){var t;this.width=null===(t=this.$refs.hqStock)||void 0===t?void 0:t.clientWidth},methods:{onTap:function(){var t=this.itemInfo.jumpInfo;t&&(this.M_go(t),this.M_clickReport({},t))},chooseTab:function(t){var e=t.tab,i=t.tabIndex,n=t.itemPos;e.tabIndex==this.selTabIndex||this.loading||(this.chartType=e.value,this.selTabIndex=i,this.M_clickReport({clickContent:e.name,actionType:c.g.CLICK_CHOOSE,itemPos:n},e))},refresh:function(t){var e=this;this.loading=!0;var i=this.itemInfo.cgi,n={cgiName:i.name,data:K(K({},i.params),{},{data:JSON.stringify({market:t||this.itemInfo.quote.market,chartType:this.chartType})}),target:this,refreshType:"box"};s.i.getServiceCommCgiData(n,{reload:3}).then((function(t){t.errCode&&0!==t.errCode?a.a.$emit(a.b.showToast,{action:o.a.pure,text:"系统繁忙，请稍后再试"}):(e.loading=!1,e.$emit("replace-items",t.data.items))}))}}},U=(i(3187),Object(E.a)(Z,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!t.itemInfo.jumpInfo,expression:"!!itemInfo.jumpInfo",modifiers:{stop:!0}}],ref:"hqStock",staticClass:"hq-stock active__mask",attrs:{"data-report-id":t.M_itemReportId(t.itemInfo.jumpInfo)},on:{click:function(e){return e.stopPropagation(),t.onTap.apply(null,arguments)}}},[i("basic",{attrs:{quote:t.itemInfo.quote,indicator:t.itemInfo.indicator,trading:t.itemInfo.beforeOrAfterTrading},on:{"change-market":t.refresh}}),i("tabs",{attrs:{list:t.itemInfo.tab,"sel-tab-index":t.selTabIndex,"show-type":1},on:{tap:t.chooseTab}}),t.chartData?i("div",{staticClass:"hq-chart"},[!t.loading&&t.chartData?i("hq-chart",{attrs:{width:t.width,height:200,"chart-type":t.chartType,market:t.quote.market,"stock-type":t.quote.stockType,quote:t.quote,"chart-data":t.chartData,"is-dark-mode":t.isDarkMode}}):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[i("ui-loading-animation",{staticClass:"pr-4",attrs:{width:20,height:20}}),i("span",[t._v("正在加载")])],1)],1):t._e()],1)}),[],!1,null,"78ec27bf",null));e.default=U.exports},3186:function(t,e,i){"use strict";i(1220)},3187:function(t,e,i){"use strict";i(1221)},3289:function(t,e,i){"use strict";i(244)},338:function(t,e,i){},3649:function(t,e,i){"use strict";i(1219)},552:function(t,e,i){"use strict";var n=i(0),r={props:{text:{type:String,default:""},fontSize:{type:Number,default:10},bgColor:{type:String,default:"red"},fgColor:{type:String,default:"white"},paddingLR:{type:Number,default:5},paddingTB:{type:Number,default:2}},computed:{renderFontSize:function(){return 2*Math.round(this.fontSize*n.b.fontRatio)}},watch:{text:function(){var t=this;this.$nextTick((function(){t.updateBBox()}))}},mounted:function(){this.updateBBox()},methods:{updateBBox:function(){var t=this.$refs,e=t.svgRef,i=t.textRef,n=t.rectRef;if(e&&i&&n){var r=i.getBoundingClientRect(),s=Math.round(r.width),a=Math.round(r.height),o=2*this.paddingLR+s+2*this.paddingLR;o%2!=0&&(o+=o%2);var c=2*this.paddingTB+a+2*this.paddingTB;c%2!=0&&(c+=c%2),e.setAttribute("width",o/2),e.setAttribute("height",c/2),e.setAttribute("viewBox","0 0 ".concat(o," ").concat(c)),n.setAttribute("x",1),n.setAttribute("width",o-2),n.setAttribute("height",c),n.setAttribute("rx",c/2),n.setAttribute("fill",this.bgColor),i.setAttribute("x",2*this.paddingLR),i.setAttribute("y",c/2+2),i.setAttribute("fill",this.fgColor)}}}},s=i(4),a=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{ref:"svgRef"},[e("rect",{ref:"rectRef"}),e("text",{ref:"textRef",attrs:{"font-family":"'PingFang SC','Helvetica Neue'","font-size":this.renderFontSize,"font-weight":"700","dominant-baseline":"middle",x:"0",y:"0"}},[this._v(this._s(this.text))])])}),[],!1,null,null,null);e.a=a.exports},809:function(t,e,i){"use strict";var n=i(1),r=i.n(n),s=i(33),a=i.n(s),o=i(23),c=i.n(o),l=i(263),u=i.n(l),h=i(34),d=i.n(h),f=i(35),p=i.n(f);function m(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw s}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var g=function(){function t(e){d()(this,t);var i=Object.assign({container:".swiper",item:".item",activeClass:"active",threshold:50,duration:300,padding:0,decayFactor:1,useCapture:!1},e);this.$el=i.el||document,this.$container=this.$el.querySelector(i.container),this.itemSelector=i.item,this._start={},this._move={},this._end={},this._ignore=!1,this._offset=0,this._eventHandlers={},this._options=i,this._current=0,this._padding=this._options.padding,this.$container.style.marginLeft="".concat(this._padding,"px"),this._bind()}return p()(t,[{key:"on",value:function(t,e){if(this._eventHandlers[t])throw new Error("event ".concat(t," is already register"));if("function"!=typeof e)throw new Error("parameter callback must be a function");return this._eventHandlers[t]=e,this}},{key:"_getContainerWidth",value:function(){return this._getItemElements().reduce((function(t,e){return t+e.rect.width}),0)}},{key:"_getItemElements",value:function(){return[].map.call(this.$container.querySelectorAll(this.itemSelector),(function(t){return{el:t,rect:t.getBoundingClientRect()}}))}},{key:"_getItemElementsCount",value:function(){return this.$container.querySelectorAll(this.itemSelector).length}},{key:"_getItemElement",value:function(t){var e=this.$container.querySelector("".concat(this.itemSelector,":nth-child(").concat(t+1,")"));return e?{el:e,rect:e.getBoundingClientRect()}:null}},{key:"_bind",value:function(){var t=this._options.useCapture;this._startEventListener=this._startEventListener.bind(this),this._moveEventListener=this._moveEventListener.bind(this),this._endEventListener=this._endEventListener.bind(this),this.$el.addEventListener("touchstart",this._startEventListener,t),this.$el.addEventListener("touchmove",this._moveEventListener,t),this.$el.addEventListener("touchend",this._endEventListener,t)}},{key:"_startEventListener",value:function(t){this._start.x=t.changedTouches[0].pageX,this._start.y=t.changedTouches[0].pageY,this._ignore=!1,this.$container.style["-webkit-transition"]="none",this.$container.style.transition="none"}},{key:"_moveEventListener",value:function(t){if(this._move.x=t.changedTouches[0].pageX,this._move.y=t.changedTouches[0].pageY,this._ignore||Math.abs(this._start.x-this._move.x)/1<Math.abs(this._start.y-this._move.y))this._ignore=!0;else{var e=(this._move.x-this._start.x)*this._options.decayFactor,i=+(e-this._offset);i=e>=0?Math.min(e-this._offset,.6*this._getItemElement(0).rect.width):Math.max(e-this._offset,.6*-this._getItemElement(this._getItemElementsCount()-1).rect.width+Math.min(0,this.$el.offsetWidth-this._getContainerWidth()-2*this._padding));var n="translate3d(".concat(i,"px, 0, 0)");this.$container.style["-webkit-transform"]=n,this.$container.style.transform=n,this._eventHandlers.scroll&&this._eventHandlers.scroll.apply(this,t),t.preventDefault()}}},{key:"_endEventListener",value:function(t){if(this._ignore?(this._end.x=this._start.x,this._end.y=this._start.y):(this._end.x=t.changedTouches[0].pageX,this._end.y=t.changedTouches[0].pageY),this._getContainerWidth()<=this.$el.offsetWidth)return this._current=0,this._show(this._current),void(Math.abs(this._start.x-this._end.x)+Math.abs(this._start.y-this._end.y)>1&&t.preventDefault());var e=(this._end.x-this._start.x)*this._options.decayFactor;this._prev=this._current;var i=this._offset-e;this._current=this._getCurrentByOffset(i,{round:!0}),this._prev===this._current&&(e>this._options.threshold&&this._current>0?this._current-=1:e<-this._options.threshold&&this._current<this._getItemElementsCount()-1&&(this._current+=1)),this._show(this._current)}},{key:"_getCurrentByOffset",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.items||this._getItemElements(),r=i.round||!1,s=0,a=t,o=m(n);try{for(o.s();!(e=o.n()).done;){var c=e.value,l=c.rect.width;if(r){if((a-=l)<-l/2)break;if(s+=1,a<l/2)break}else if(s+=1,(a-=l)<0)break}}catch(u){o.e(u)}finally{o.f()}return s}},{key:"_show",value:function(t){var e=this,i=this._getItemElements();this._offset=i.slice(0,t).reduce((function(t,e){return t+e.rect.width}),0);var n=Math.max(this._getContainerWidth()-this.$el.offsetWidth+2*this._padding,0);this._offset>n&&(this._offset=n,this._current=this._getCurrentByOffset(n,{items:i}));var r="translate3d(-".concat(this._offset,"px, 0, 0)"),s="".concat(this._options.duration,"ms");this.$container.style["-webkit-transition"]=s,this.$container.style.transition=s,this.$container.style["-webkit-transform"]=r,this.$container.style.transform=r,clearTimeout(this._timeout),this._timeout=setTimeout((function(){(e._current!=e._prev||null!==e._timeout||e._goto>-1)&&(e._eventHandlers.swiped&&e._eventHandlers.swiped.apply(e,[e._prev,e._current]),e._goto=-1,e._timeout=null)}),this._options.duration)}},{key:"go",value:function(t){if(!(t<0||t>this._getItemElementsCount()-1||t===this._current))return 0===t?(this._current=0,this._prev=0):(this._current=t,this._prev=t-1),this._goto=t,this._show(this._current),this}},{key:"refresh",value:function(){this._current=this._getCurrentByOffset(this._offset,{round:!0}),this._show(this._current)}}]),t}();function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var _={name:"UiScroll",props:{items:{type:Array,default:function(){return[]}},snap:{type:Boolean,default:!1},start:{type:Number,default:0},scrollToCenter:{type:Boolean,default:!1},wait:{type:Number,default:300},padding:{type:Number,default:16},decayFactor:{type:Number,default:1},useCapture:{type:Boolean,default:!1}},watch:{start:function(t){this._isMounted&&this.scrollTo(t)},items:function(){this.snap&&this.scrollTo(0)}},created:function(){this.onScrollEnd=u()(this.onScrollEnd.bind(this),this.wait)},mounted:function(){var t=this;return a()(c.a.mark((function e(){var i,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t,t.$refs.scroll&&t.snap&&(n=t.$el.querySelector(".ui-scroll__wrapper"))&&(n.style.marginLeft="".concat(t.padding-4,"px")),t.$refs.scroll){e.next=4;break}return e.abrupt("return");case 4:if(!t.snap){e.next=13;break}return e.next=7,t.$nextTick();case 7:t.$refs.scroll.querySelector(".ui-scroll__item"),(r=new g({el:t.$refs.scroll,container:".ui-scroll__wrapper",item:".ui-scroll__item",padding:t.padding-4,decayFactor:t.decayFactor,useCapture:t.useCapture})).on("scroll",(function(e){return t.$emit("scroll",e)})),r.on("swiped",(function(t,e){i.onScrollEnd()})),t.swiper=r,t.scrollTo(t.start);case 13:t.scrollToCenter&&t.scrollTo(t.start);case 14:case"end":return e.stop()}}),e)})))()},methods:{refresh:function(){this.swiper&&this.swiper.refresh()},onScroll:function(t){this.$emit("scroll",t),this.onScrollEnd()},calcVisibility:function(){var t=this;if(!this.$refs.scroll||!this.$refs.items)return[];var e=this.$refs.scroll;return this.parentRect=e.getBoundingClientRect(),this.$refs.items.map((function(e){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({el:e},t.getVisibility(e))}))},onScrollEnd:function(){this.$emit("scrollEnd",this.calcVisibility())},getVisibility:function(t){if(!t)return{visible:!1,include:!1};var e=t.getBoundingClientRect(),i=this.parentRect,n=function(t,e){return parseFloat(t)<=parseFloat(e)+1},r=Boolean(n(i.left,e.left)&&n(e.right,i.right)&&n(i.top,e.top)&&n(e.bottom,i.bottom));return{visible:Boolean((n(i.left,e.right)&&n(e.right,i.right)||n(i.left,e.left)&&n(e.left,i.right))&&(n(i.top,e.bottom)&&n(e.bottom,i.bottom)||n(i.top,e.bottom)&&n(e.bottom,i.bottom))),include:r}},scrollTo:function(t){if(t=Math.max(Math.min(t,this.items.length-1),0),this.snap)this.swiper.go(t);else{var e=this.$refs.items[t].getBoundingClientRect(),i=e.left,n=e.width,r=this.$refs.scroll.getBoundingClientRect(),s=r.left,a=r.width,o=this.$refs.scroll.scrollLeft,c=i-s;this.$refs.scroll.scrollTo({left:this.scrollToCenter?c+o-(a-n)/2:c+o,top:0,behavior:"smooth"})}}}},b=(i(3289),i(4)),k=Object(b.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.snap?i("div",{ref:"scroll",staticClass:"ui-scroll ui-scroll-snap"},[i("div",{staticClass:"ui-scroll__wrapper"},t._l(t.items,(function(e,n){return i("div",{key:e.id||e.docId||e.docID||n+ +new Date,ref:"items",refInFor:!0,staticClass:"ui-scroll__item",attrs:{"data-scroll-item-index":n}},[t._t("default",null,{item:e,index:n})],2)})),0)]):i("div",{ref:"scroll",staticClass:"ui-scroll ui-scroll-smooth",on:{scroll:function(e){return e.stopPropagation(),e.preventDefault(),t.onScroll.apply(null,arguments)}}},[i("div",{staticClass:"ui-scroll__wrapper"},t._l(t.items,(function(e,n){return i("div",{key:e.id||e.docId||e.docID||n+ +new Date,ref:"items",refInFor:!0,staticClass:"ui-scroll__item",attrs:{"data-scroll-item-index":n}},[t._t("default",null,{item:e,index:n})],2)})),0)])}),[],!1,null,"f8361092",null).exports;k.install=function(t){t.component(k.name,k)};e.a=k}}]);