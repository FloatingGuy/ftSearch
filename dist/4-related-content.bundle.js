(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1148:function(t,e,n){},1891:function(t,e,n){"use strict";n(1148)},524:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(0),c=n(25);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var a={name:"RelatedContent",mixins:[o.n,o.l],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(c.c)({isLoading:function(t){return t.result.self.base.isLoading}})),mounted:function(){this.calculateButtonHeight()},methods:{tap:function(t,e){if(!this.isLoading){var n=e+1;this.M_clickReport({clickZone:1,clickContent:n+t.title},t),this.M_go(t.jumpInfo||t)}},calculateButtonHeight:function(){var t=0,e=this.$refs.relatedLinkButton;e.forEach((function(e){e.offsetHeight>t&&(t=e.offsetHeight)}));e.forEach((function(e){e.style.height="".concat(t,"px")}))}}},u=(n(1891),n(4)),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"related-content"},[n("div",{staticClass:"related__box heavy-links"},t._l(t.source.button,(function(e,r){return n("div",{key:t.item.docID+r,staticClass:"expose_log_elem heavy-link",class:1===t.source.button.length?"single-link":"",attrs:{"data-word":e.title,"data-report-id":t.M_itemReportId(e.reportId,r+1)},on:{click:function(n){return t.tap(e,r)}}},[n("div",{ref:"relatedLinkButton",refInFor:!0,staticClass:"heavy-link__inner heavy-link__inner-with-tag"},[n("p",{staticClass:"heavy-link__text ellipsis_2"},[t._v("\n          "+t._s(e.title)+"\n        ")])])])})),0)])}),[],!1,null,"8bdc96dc",null);e.default=l.exports}}]);