(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1332:function(t,e,i){},1333:function(t,e,i){},2045:function(t,e,i){"use strict";i(1332)},2046:function(t,e,i){"use strict";i(1333)},2200:function(t,e,i){"use strict";i.r(e);var n=i(490),o=i(39),r=i(459),a={created:function(){window.reportVueCreated("src/basic-components/packages/ui-hot-topic/src/component.vue")},name:"UiHotTopic",props:{iconUrl:String,title:String,role:{type:String,default:"link"}},data:function(){return{}},computed:{},methods:{}},c=(i(2045),i(4)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-hot-topic",attrs:{role:t.role}},[t.iconUrl?i("ui-image",{staticClass:"ui-hot-topic-icon",attrs:{url:t.iconUrl,size:20,mode:"plain"}}):t._e(),t.title?i("div",{staticClass:"ui-hot-topic-title"},[t._v(t._s(t.title))]):t._e()],1)}),[],!1,null,"1645efbe",null).exports;s.install=function(t){t.component(s.name,s)};var u=s,l={created:function(){window.reportVueCreated("src/views/result/block/official-zone/components/zone-block/hot-topic.vue")},name:"HotTopic",components:{blockTitle:n.a,UiHotTopic:u},mixins:[o.a,r.a],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},methods:{onTapHotTopic:function(t){this.M_go(t),this.M_clickReport({clickZone:1,clickContent:t.title}),this.$emit("tap")}}},p=(i(2046),Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ui-zone-block",{staticClass:"hot-topic",class:{active__item:t.M_canHeaderJump},attrs:{"data-id":t.M_exposeId()}},[i("block-title",t._b({},"block-title",t.$props,!1)),i("div",{staticClass:"topic-wrapper"},t._l(t.item.subItem,(function(e){return i("ui-hot-topic",{key:e.title,attrs:{title:e.title,"icon-url":e.iconUrl},nativeOn:{click:function(i){return i.stopPropagation(),t.onTapHotTopic(e)}}})})),1)],1)}),[],!1,null,"14f07536",null));e.default=p.exports},284:function(t,e,i){},459:function(t,e,i){"use strict";var n={methods:{ozJump:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;e.M_confirm_go(t.dialog,t)}},computed:{M_canHeaderJump:function(){return!!this.item.header&&!!(this.item.header.jumpUrl||this.item.header.weappUrl||this.item.header.jumpInfo)}}};e.a=n},488:function(t,e,i){"use strict";i(284)},490:function(t,e,i){"use strict";var n=i(0),o={name:"BlockTitle",components:{UiSectionTitle:i(64).a},mixins:[n.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},computed:{header:function(){return this.item.header||{}},subHeader:function(){return this.header.iconUrl||this.header.sub||this.item.headerText},canJump:function(){return!!(this.header.jumpUrl||this.header.weappUrl||this.header.jumpInfo)},moreText:function(){return this.header.moreText||n.g.L("更多")}},methods:{onTap:function(t,e,i){this.canJump&&(t.stopPropagation(),this.M_go(this.header),this.M_clickReport({clickZone:e,clickContent:i}),this.$emit("tap"))}}},r=(i(488),i(4)),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.header?i("ui-section-title",{attrs:{"can-jump":t.canJump&&!!t.subHeader},nativeOn:{click:function(e){return t.onTap(e,1,t.header.title)}},scopedSlots:t._u([t.canJump||t.subHeader?{key:"after",fn:function(){return[t.subHeader?i("div",{staticClass:"header-title-after"},[t.header.sub?i("div",[t._v(t._s(t.header.sub))]):t._e(),t.header.iconUrl?i("ui-image",{attrs:{size:12,url:t.header.iconUrl}}):t._e(),t.item.headerText?t._t("headerText"):t._e()],2):i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"header-more active__mask",on:{click:function(e){return t.onTap(e,3,"更多")}}},[t._v("\n      "+t._s(t.moreText)+"\n      "),i("ui-arrow")],1)]},proxy:!0}:null],null,!0)},[t._v("\n  "+t._s(t.header.title)+"\n  ")]):t._e()}),[],!1,null,"6f6c5df4",null);e.a=a.exports}}]);