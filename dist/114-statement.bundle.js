(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1346:function(t,e,n){},3082:function(t,e,n){"use strict";n.r(e);var i=n(32),o=n.n(i),a=n(0),r=n(1999),s=n(2063),c=n(2147),u=n(2553),l=n(2554),f=n(2150);r.a([c.a,u.a,l.a,f.a]);var p=null,h={name:"Histogram",mixins:[a.n,a.l],props:{info:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{itemInfo:function(){return this.info}},watch:{info:function(){this.drawLineChart()}},beforeDestroy:function(){p&&(p.dispose(),p=null)},mounted:function(){var t=this.$refs.chartContainer;(p=s.b(t))||(p=s.c(t,null,{renderer:"svg"}),t.removeAttribute("_echarts_instance_")),this.drawLineChart()},methods:{drawLineChart:function(){var t=this.itemInfo.legend,e=!1,n=[],i=o()(new Array(t.length)).map((function(){return[]}));this.itemInfo.list.forEach((function(t){n.push(t.period),i[0].push(t.income),i[1].push(t.profits),(t.income<0||t.profits<0)&&(e=!0)})),i.forEach((function(e,n){var i=Math.max.apply(Math,o()(e.map((function(t){return Math.abs(t)}))));t[n].unit=i>=1e8?"亿":"万",t[n].magnification=i>=1e8?1e8:1e4}));var a={type:"bar",label:{show:!0,distance:4,position:"top",color:"var(--FG-1)",fontSize:10},silent:!0,barGap:"45%",barWidth:24,animationDuration:500},r={Blue_120:"var(--BLUE_120)",Indigo_100:"var(--INDIGO)"},s=[];t.forEach((function(t,e){var n=Object.assign({name:"".concat(t.label,"(").concat(t.unit,")"),data:i[e].map((function(e,n){return{value:e,label:{position:e>=0?"top":"bottom",formatter:function(e){return(Math.round(e.value/t.magnification*10)/10).toFixed(1)}},itemStyle:{borderRadius:e>=0?[1,1,0,0]:[0,0,1,1]}}})),itemStyle:{borderRadius:1,color:r[t.color]}},a);s.push(n)}));var c={grid:{left:0,right:0,top:42,bottom:e?44:20},yAxis:{type:"value",min:function(t){return e?Math.floor(t.min):0},max:function(t){return Math.ceil(t.max)},show:!1},xAxis:[{type:"category",data:n,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"var(--FG-3)",width:.5},onZero:!1},axisLabel:{show:!0,color:"var(--FG-1)",fontSize:12},offset:e?22:0},{axisLine:{show:!!e,lineStyle:{color:"var(--FG-3)",width:.5}}}],legend:{show:!0,icon:"circle",left:0,top:0,itemGap:16,itemWidth:8,textStyle:{color:"var(--FG-1)"},selectedMode:!1},series:s};p.setOption(c,{notMerge:!0})},onTap:function(){this.M_serviceSearchGo(this.itemInfo),this.M_clickReport({},this.itemInfo)}}},m=(n(3665),n(4)),d=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"active",rawName:"v-active.stop",value:!!t.itemInfo.jumpInfo,expression:"!!itemInfo.jumpInfo",modifiers:{stop:!0}}],staticClass:"histogram active__mask",attrs:{"data-report-id":t.M_itemReportId(t.itemInfo)},on:{click:function(e){return e.stopPropagation(),t.onTap.apply(null,arguments)}}},[n("div",{ref:"chartContainer",staticClass:"chart-container"})])}),[],!1,null,"5d110c90",null);e.default=d.exports},3665:function(t,e,n){"use strict";n(1346)}}]);