(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1723:function(t,e,i){"use strict";i(948)},1727:function(t,e,i){"use strict";i(950)},1728:function(t,e,i){"use strict";i(952)},2179:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i(80),r=i(16),a={props:{text:{type:String,default:""}},methods:{checkShowDebugWord:function(){var t=n.d.getStore("isShowDebugWord");return this.text&&t},tap:function(){this.$showDialog({title:"DebugWord",desc:this.text,fz:14})}}},c=(i(1723),i(4)),o={components:{debugInfoBtn:Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.checkShowDebugWord()?e("div",{staticClass:"debug-btn",on:{click:this.tap}},[this._v("\n  DebugWord\n")]):this._e()}),[],!1,null,"4007ca28",null).exports,clientImage:i(82).a},mixins:[n.n],inject:["itemType"],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},imgWrpWidth:{type:Number,default:0}},methods:{onTapSticker:function(){var t=this;t.M_clickReport({actionType:n.h.STICKER},t.item),n.i.openSticker(Object.assign({position:t.pos,scene:n.b.scene,searchId:n.b.searchId},t.item,{data:t.data,clickId:t.$store.state.result.state.clickReportId,pageType:2})),t.M_storeClickInfo(),1==t.item.type?Object(r.f)(n.m.detail2.album):Object(r.f)(n.m.detail2.sticker)}}},u=(i(3453),Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"sticker-all__item",class:{active__mask:t.os.pc},attrs:{role:"button",title:"表情","data-report-id":t.M_itemReportId(t.item.reportId)},on:{click:t.onTapSticker}},[t.item.noNeedProcess?i("online-image",{staticClass:"sticker-all__item-inner",attrs:{url:t.item.thumb,mode:"sticker"}}):[t.item.type==t.itemType.album?[i("online-image",{staticClass:"sticker-all__item-inner",attrs:{url:t.item.productURL,mode:"sticker"}}),i("span",{staticClass:"album-tag"},[t._v(t._s(t._f("L")("专辑")))])]:i("client-image",{key:t.item.docID,staticClass:"sticker-all__item-inner",attrs:{item:t.item,type:t.data.type,mode:"sticker","img-wrp-width":t.imgWrpWidth}})],i("debugInfoBtn",{attrs:{text:t.item.debugWord}})],2)}),[],!1,null,"77cfaceb",null).exports),p={1:"normal",2:"normal",3:"normal",4:"normal"},l={components:{normal:u},mixins:[n.n],inject:["itemType"],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0},imgWrpWidth:{type:Number,default:0}},data:function(){return{componentType:p}}},d=(i(1727),Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.componentType[t.item.type]?i(t.componentType[t.item.type],t._b({tag:"component",attrs:{"data-id":t.M_exposeId()}},"component",t.$props,!1)):t._e()}),[],!1,null,null,null).exports),m=new(i(10).a)({album:1,sticker:2,single:3,custom:4,banner:5,christmas:6}),f=.2*(document.body.clientWidth-32),b={components:{hd:s.default,item:d},mixins:[n.n],provide:function(){return{itemType:m}},props:{d:{type:Object,default:function(){return{}}},typePos:{type:Number,default:0}},data:function(){return{itemType:m,imgWrpWidth:f}},computed:{stickers:function(){var t=Array.from(this.d.items);return t}},mounted:function(){}},y=(i(1728),Object(c.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stickers-all"},[t.d.title?i("hd",{attrs:{d:t.d,"type-pos":t.typePos}}):t._e(),i("div",{staticClass:"stickers-all__inner"},[i("div",{staticClass:"stickers-all__wrap"},t._l(t.stickers,(function(e,n){return i("item",{key:e.vueKey,attrs:{"data-back-report-id":t.M_genDocReportId({data:t.d,typePos:t.typePos,item:e,pos:n+1}),data:t.d,item:e,"type-pos":t.typePos,pos:n+1,"img-wrp-width":t.imgWrpWidth}})})),1)])],1)}),[],!1,null,null,null));e.default=y.exports},3453:function(t,e,i){"use strict";i(949)},948:function(t,e,i){},949:function(t,e,i){},950:function(t,e,i){},952:function(t,e,i){}}]);