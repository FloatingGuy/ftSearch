(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1345:function(t,e,n){},2558:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(0),o=n(10),r=n(3),u=n(28),l=n(2),c=new o.a({WaitingStart:1,OnLiving:2,Ended:3}),p={created:function(){window.reportVueCreated("src/views/result/block/financial-zone/components/performance-call.vue")},name:"PerformanceCall",mixins:[s.n,s.l],props:{info:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{StatusEnum:c}},computed:{itemInfo:function(){return this.info},list:function(){var t=this.itemInfo,e=t.list,n=t.title,i=t.date,a=t.jumpInfo,s=t.status;return e||[{title:n,date:i,jumpInfo:a,status:s}]}},methods:{onTap:function(t){var e=t.status===c.WaitingStart;e?r.a.$emit(r.b.showToast,{text:"暂未开始",action:u.a.pure}):this.M_serviceSearchGo(t),this.M_clickReport({clickContent:t.title,actionType:e?l.g.CLICK_SHOW_DIALOG:null},t)},getStatusText:function(t){var e;return(e={},a()(e,c.WaitingStart,"未开始"),a()(e,c.OnLiving,"直播中"),a()(e,c.Ended,"回放"),e)[t]||""}}},f=(n(3662),n(4)),d=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"performance-call"},[1==t.list.length&&t.list[0]&&t.list[0].status!==t.StatusEnum.Ended?t._l(t.list,(function(e,i){return n("li",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],key:i,staticClass:"call-info active__mask",attrs:{"data-report-id":t.M_itemReportId(e,i+1)},on:{click:function(n){return n.stopPropagation(),t.onTap(e)}}},[e.title?n("span",{staticClass:"title"},[t._v(t._s(e.title))]):t._e(),e.date&&e.status==t.StatusEnum.WaitingStart?n("span",{staticClass:"date"},[t._v(t._s(e.date))]):t._e(),e.status?n("span",{staticClass:"status",staticStyle:{"flex-shrink":"0"}},[t._v(t._s(t.getStatusText(e.status)))]):t._e()])})):n("ui-column",{class:{"only-one":1==t.list.length},attrs:{col:t.list.length>1?2:1,list:t.list,fill:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,a=e.index;return[n("ui-link",{attrs:{title:i.title,"data-report-id":t.M_itemReportId(i,a+1)},nativeOn:{click:function(e){return e.stopPropagation(),t.onTap(i)}}})]}}])})],2)}),[],!1,null,"29cf4ab7",null);e.default=d.exports},3662:function(t,e,n){"use strict";n(1345)}}]);