(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1259:function(t,e,n){},1970:function(t,e,n){"use strict";n(1259)},2299:function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(203),i=n(27),r={created:function(){window.reportVueCreated("src/views/result/block/service-search/service-search-item/sub-item/living/auth.vue")},name:"Auth",components:{myServicesBar:o.a},mixins:[s.n],props:{source:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{showPop:!0}},computed:{pop:function(){return this.source.pop?Object.assign({from:i.b.result},this.source.pop):null}},methods:{_showPop:function(){var t=this.$refs.pop;t&&(t.showPop=!0)},tapLink:function(){this.M_handleInsert(!0),this.pop?this._showPop():this.M_serviceSearchGo(this.source)}}},u=(n(1970),n(4)),c=Object(u.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"auth",on:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("my-services-bar",{attrs:{info:this.source},on:{"tap:link":this.tapLink}})],1)}),[],!1,null,"cbb6f98e",null);e.default=c.exports}}]);