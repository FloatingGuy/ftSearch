(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1140:function(t,i,e){},1884:function(t,i,e){"use strict";e(1140)},2272:function(t,i,e){"use strict";e.r(i);var a=e(2),s=e(0),n=e(3),r={created:function(){window.reportVueCreated("src/views/result/block/basic-block/components/movie-list/movie-list.vue")},components:{UiAvatarsRow:e(600).a},mixins:[s.n,s.l],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{}},computed:{className:function(){return""},friendInfo:function(){return this.item.friendInfo||{}},avatarList:function(){return(this.friendInfo.avatars||[]).slice(0,3)}},methods:{onTap:function(){var t=this.item,i=this.M_composeParentSid({t:t.parentType,did:t.docID,s:s.b.searchId,rid:this.$store.state.result.previousRid});this.M_clickReport({docId:this.item.docID,pos:this.pos,typePos:this.typePos,clickZone:1}),this.M_checkSpecialSearchBeforeLaunchNewSearch({query:t.title,callback:function(){s.i.setInputBar({query:t.title,isInputChange:!1}),n.a.$emit(n.b.GOTO,{page:a.f.RESULT,query:t.word,searchId:"",extReqParams:{key:"parentSearchID",textValue:i}})},extParams:{crossExtReqParams:[{key:"parentSearchID",textValue:i}]}})},onTapBtn:function(t){this.M_clickReport({docId:this.item.docID,pos:this.pos,typePos:this.typePos,clickZone:2}),this.M_go(t)}}},o=(e(1884),e(4)),c=Object(o.a)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"active__item movie-list",class:t.className,attrs:{"data-id":t.item.docID},on:{click:t.onTap}},[e("div",{staticClass:"search_item_inner"},[e("div",{staticClass:"movie-list__ranks"},[e("div",{staticClass:"movie-list__rank"},[t._v(t._s(t.item.rank))]),t.item.rankDiff>0?e("div",{staticClass:"movie-list__rank-diff up"},[e("i",{staticClass:"icon-up"}),e("span",[t._v(t._s(t.item.rankDiff))])]):t.item.rankDiff<0?e("div",{staticClass:"movie-list__rank-diff down"},[e("i",{staticClass:"icon-down"}),e("span",[t._v(t._s(-t.item.rankDiff))])]):e("div",{staticClass:"movie-list__rank-diff"},[e("i",{staticClass:"icon-plain"})])]),e("ui-article",{attrs:{thumb:t.item.thumbUrl,title:t.item.title,desc:t.item.info},scopedSlots:t._u([{key:"inner-oprs",fn:function(){return[e("div",{staticClass:"movie-list__index"},[t._v(t._s(t.item.weixinIndex))])]},proxy:!0},{key:"title-desc-spacing",fn:function(){return[t.avatarList.length&&t.friendInfo.text?e("ui-avatars-row",{attrs:{list:t.avatarList,direction:"left"}},[t.friendInfo.text?e("span",[t._v(t._s(t.friendInfo.text))]):t._e()]):t._e()]},proxy:!0}])})],1)])}),[],!1,null,"3cd70778",null);i.default=c.exports},306:function(t,i,e){},588:function(t,i,e){"use strict";e(306)},600:function(t,i,e){"use strict";var a={name:"UiAvatarsRow",props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"left"},wrap:{type:Boolean,default:!1}},data:function(){return{}}},s=(e(588),e(4)),n=Object(s.a)(a,(function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"ui-avatars-row",class:{"ui-avatars-row_right":"right"===this.direction,"ui-avatars-row_wrap":this.wrap}},[this._l(this.list,(function(t,e){return i("li",{directives:[{name:"load-background",rawName:"v-load-background:avatar",value:t,expression:"avatar",arg:"avatar"}],key:e,staticClass:"ui-avatar"})})),i("li",{staticClass:"ui-extra"},[this._t("default")],2)],2)}),[],!1,null,"767492ae",null).exports;n.install=function(t){t.component(n.name,n)};i.a=n}}]);