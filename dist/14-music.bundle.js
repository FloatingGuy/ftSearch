(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1101:function(t,i,e){},2256:function(t,i,e){"use strict";e.r(i);var a=e(1),n=e.n(a),s=e(0),o=e(16),c=e(3);function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,a)}return e}function m(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(i){n()(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var l={mixins:[s.n],props:{data:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0},typePos:{type:Number,default:0}},data:function(){return{playing:!1}},computed:{musicID:function(){var t=this.item.playJumpInfo;if(!t)return this.item.docID;try{return JSON.parse(t.apiParams).musicId}catch(i){return this.item.docID}},socialTag:function(){return this.item.social_tag?{title:this.item.social_tag,noBg:!0,type:5}:null}},watch:{musicID:{handler:function(t){t==s.b.musicSnsId?this.playing=!0:this.playing=!1},immediate:!0}},mounted:function(){c.a.$on(c.b.onCurrentPlayingMusicChange,this.onCurrentPlayingMusicChange)},beforeDestroy:function(){c.a.$off(c.b.onCurrentPlayingMusicChange,this.onCurrentPlayingMusicChange)},methods:{_playInLocal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoop:0,showUi:0},i=[this.item.objectXmlDesc];s.i.setXml({data:i,append:!1}),s.i.clickMusic({isLoop:t.isLoop,needStartMusicUI:t.showUi,snsid:this.item.docID,objectXmlDesc:this.item.objectXmlDesc})},_newPlayInLocal:function(){var t=Object.assign({},this.item.playJumpInfo),i=t.apiParams?JSON.parse(t.apiParams):{};t.apiParams=JSON.stringify(Object.assign(i,{sceneNote:"".concat(s.b.searchId,":").concat(s.b.isHomePage,":").concat(this.item.docID)})),this.M_go(t)},_openMusicPage:function(){if(this.item.jumpInfo){var t=Object.assign({},this.item.jumpInfo),i=t.apiParams?JSON.parse(t.apiParams):{};t.apiParams=JSON.stringify(Object.assign(i,{sceneNote:"".concat(s.b.searchId,":").concat(s.b.isHomePage,":").concat(this.item.docID)})),this.M_go(t)}else this.M_go(this.item)},onTapPlay:function(){this.item.playJumpInfo?this._newPlayInLocal():this.item.playUrl?this._playInLocal():this._openMusicPage(),this.M_clickReport({clickZone:1,clickContent:"播放"},m(m({},this.item.playJumpInfo||{}),{},{playing:this.playing})),Object(o.f)(s.m.detail2.musicButton)},onTapJump:function(){this.M_storeClickInfo(),this._openMusicPage(),this.M_clickReport({clickZone:0},this.item),Object(o.f)(s.m.detail2.music)},onTapBtn:function(){this.M_clickReport({clickZone:2,clickContent:this.item.button.text||this.item.button.title},this.item.button),this.M_go(this.item.button.jumpInfo)},onTapMic:function(){this.M_clickReport({clickZone:2,clickContent:"K歌"},this.item.kg_jumpInfo),this.M_go(this.item.kg_jumpInfo)},onCurrentPlayingMusicChange:function(t){var i=t.musicId;this.playing=this.musicID===i}}},p=(e(3128),e(4)),u=Object(p.a)(l,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"active",rawName:"v-active"}],staticClass:"expose_log_elem music",attrs:{"data-id":t.item.docID,role:"","data-report-id":t.M_itemReportId(t.item)},on:{click:t.onTapJump}},[t.item.albumPic?e("online-image",{staticClass:"music__thumb",attrs:{url:t.item.albumPic,mode:"music"}}):t._e(),e("div",{staticClass:"music__bd"},[e("div",{staticClass:"music__info"},[e("div",{staticClass:"music__title ellipsis_2"},[t.item.titleTag&&t.item.titleTag.prepend?e("ui-tags",{staticStyle:{"margin-right":"4px"},attrs:{"align-vertical":"",tags:t.item.titleTag.prepend,"aria-hidden":"true"}}):t._e(),e("span",{staticStyle:{"margin-right":"4px"},attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.name))}}),t.item.titleTag&&t.item.titleTag.append?e("ui-tags",{attrs:{"align-vertical":"",tags:t.item.titleTag.append,"aria-hidden":"true"}}):t._e()],1),e("div",{staticClass:"music__artist"},[t.item.songTag?e("ui-tags",{staticStyle:{"margin-right":"4px","vertical-align":"middle"},attrs:{"align-vertical":"",tags:t.item.songTag,"aria-hidden":"true"}}):t._e(),e("span",{attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.singerName))}})],1),t.item.match_lyric||t.item.bottomTag?e("div",{staticClass:"music__bottom"},[t.item.match_lyric?e("div",{attrs:{role:"option"},domProps:{innerHTML:t._s(t.xss(t.item.match_lyric))}}):t.item.bottomTag&&t.item.bottomTag.length?e("ui-tags",{attrs:{"align-vertical":"",tags:t.item.bottomTag}}):t._e()],1):t._e(),t.item.top_tag?e("ui-source",{attrs:{title:t.item.top_tag}}):t._e()],1),t.item.button||t.item.kg_jumpInfo||t.item.playJumpInfo||t.item.playUrl?e("div",{staticClass:"music__opts"},[e("div",{staticClass:"music__opt"},[t.item.button?["观看MV"===t.item.button.text||"观看MV"===t.item.button.title?e("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"music__opt active__opacity",attrs:{"aria-label":"观看MV",role:"button","data-report-id":t.M_itemReportId(t.item.button)},on:{click:function(i){return i.stopPropagation(),t.onTapBtn.apply(null,arguments)}}},[e("svg-icon",{staticClass:"music__icon-mv",attrs:{name:"mv"}})],1):t.item.button.text||t.item.button.title?e("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"music__text-button active__mask",attrs:{"aria-label":t.item.button.text||t.item.button.title,role:"button","data-report-id":t.M_itemReportId(t.item.button)},on:{click:function(i){return i.stopPropagation(),t.onTapBtn.apply(null,arguments)}}},[t._v("\n            "+t._s(t.item.button.text||t.item.button.title)+"\n          ")]):t._e()]:[t.item.kg_jumpInfo?e("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"music__opt active__opacity",attrs:{"aria-label":"K歌",role:"button","data-report-id":t.M_itemReportId(t.item.kg_jumpInfo)},on:{click:function(i){return i.stopPropagation(),t.onTapMic.apply(null,arguments)}}},[e("svg-icon",{staticClass:"music__icon-mic",attrs:{name:"mic"}})],1):t._e(),t.item.playJumpInfo||t.item.playUrl?e("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"music__opt active__opacity",attrs:{"aria-label":t.playing?"暂停":"播放",role:"button","data-report-id":t.M_itemReportId(t.item.playJumpInfo)},on:{click:function(i){return i.stopPropagation(),t.onTapPlay.apply(null,arguments)}}},[e("svg-icon",{staticClass:"music__icon-play",attrs:{name:t.playing?"pause-o":"play-o"}})],1):t._e()]],2)]):t._e()])],1)}),[],!1,null,"2b3edca1",null);i.default=u.exports},3128:function(t,i,e){"use strict";e(1101)}}]);