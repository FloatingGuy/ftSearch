(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1553:function(e,t,i){"use strict";i(696)},2134:function(e,t,i){"use strict";i.r(t);var n,s,r=i(33),o=i.n(r),a=i(1),l=i.n(a),c=i(23),u=i.n(c),p=i(25),m=(i(46),i(632)),h=i(42),f=i(815),d=i(0),v=i(16),y=i(8),T=i(2),g=i(5),b=i(3),_=i(652);function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach((function(t){l()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var D=[-1,-1,-1],F=d.g.L("朋友"),O=d.g.L("发布时间"),S=d.g.L("内容类型"),A={components:{uiDropdown:m.a,heightAnimate:h.a,"scroll-modal":f.a},data:function(){return{isAdvSearch:0,publishDisplayName:F,publishDisplayTime:O,publishUsername:"",isShow:!1,isTimeActived:!1,isTypeFilterActived:!1,renderOption:[],siftOptionTop:0,siftOptionLeft:0,snsContentType:[]}},computed:C(C({isNoSelected:function(){return this.publishDisplayName==F&&this.publishDisplayTime==O},isNameSelected:function(){return this.publishDisplayName!==F},isTimeSelected:function(){return this.publishDisplayTime!==O},isSnsTypeSelected:function(){return this.moment.snsContentTypeFilter},publishDisplayType:function(){var e=this,t=this.snsContentType.find((function(t){return t.value===e.moment.snsContentTypeFilter}));return t?t.tip:S}},Object(p.c)({moment:function(e){return e.result.moment}})),{},{snsContentTypeFilter:function(){return this.moment.snsContentTypeFilter||0}}),watch:{$route:function(e){e.name===T.h.view.INDEX&&(this._reset(),this.isShow=!1)},isTypeFilterActived:function(e){(Global.os.ios||Global.os.android)&&(e?d.a.$emit(b.b.TAG_TOUCH_ACTION,!0):d.a.$emit(b.b.TAG_TOUCH_ACTION,!1))}},created:function(){var e=this,t=this;y.b.onSelectContact((function(e){0==e.ret?(t.publishDisplayName=e.nickname||F,t.publishUsername=e.username||"",""==e.username?t.$store.commit({type:"result/updateMoment",tagInfoFromFilter:{},matchUserFromFilter:{}}):t.$store.commit({type:"result/updateMoment",tagInfoFromFilter:{tagText:d.b.query,tagType:T.q.SNSALBUM},matchUserFromFilter:{matchWord:t.publishDisplayName,userName:t.publishUsername}}),t.onSearchTap(),d.f.result.momentFilter({reportType:2,clickType:3})):t.$store.commit({type:"result/updateMoment",tagInfoFromFilter:{},matchUserFromFilter:{}})})),d.a.$on(b.b.RESET_MOMENT_FILTER,(function(){t._reset(!0)})),y.b.onInputChange((function(){n&&n.hide(),e.typeFilterHide()})),y.b.onInputConfirm((function(){n&&n.hide(),e.typeFilterHide()})),d.a.$on(b.b.SEARCH_DATA_RENDERED,(function(i){if(d.b.type==g.b.MOMENT)if(e._checkEmtyQueryWithTag())t.isShow=!1;else{t.isAdvSearch=!d.g.isArrayLength(t.$store.state.result.moment.tagList);var n=i.resultObj;if(n.data&&n.data.length||t.publishDisplayName!=F||t.publishDisplayTime!=O||e.moment.snsContentTypeFilter?(t.isShow=!0,d.f.result.momentFilter()):t.isShow=!1,n.data&&n.data.length){var s=n.data.find((function(e){return e.type===g.b.MOMENT}));s&&s.snsContentType&&s.snsContentType.length&&(e.snsContentType=s.snsContentType)}}else t.isShow=!1})),d.a.$on(b.b.REAL_SWITCH_TAB,this.typeFilterHide),d.a.$on(b.b.APP_VIEW_CHANGED,this.typeFilterHide),d.a.$on(b.b.BACK_BUTTON_CLICK,(function(i){if(n&&n.hide(),e.typeFilterHide(),t.isAdvSearch=!d.g.isArrayLength(t.$store.state.result.moment.tagList),t.isAdvSearch){if(t.$store.commit({type:"result/updateMoment",tagInfoFromFilter:i.tagInfo,matchUserFromFilter:i.matchUser,numConditions:[],snsContentTypeFilter:i.snsContentTypeFilter}),d.g.isArrayLength(i.numConditions)){var s=i.numConditions[0],r=new Date(1e3*s.from).getFullYear();if(s.to-s.from>2678400)t.publishDisplayTime="".concat(r,"年");else if(s.to-s.from>86400){var o=new Date(1e3*s.from).getMonth();t.publishDisplayTime="".concat(r,"年").concat(o+1,"月")}else{var a=new Date(1e3*s.from).getMonth(),l=new Date(1e3*s.from).getDate();t.publishDisplayTime="".concat(r,"年").concat(a+1,"月").concat(l,"日")}}else t.publishDisplayTime=O;t.publishDisplayName=i.matchUser&&i.matchUser.matchWord?i.matchUser.matchWord:F,t.publishUsername=i.matchUser&&i.matchUser.userName?i.matchUser.userName:""}})),t._initial()},methods:{_initial:function(){s=+new Date},_reset:function(){var e=this;s=+new Date,e.$store.commit({type:"result/updateMoment",tagInfoFromFilter:{},matchUserFromFilter:{},numConditions:[],snsContentTypeFilter:""}),e.isAdvSearch=!d.g.isArrayLength(e.$store.state.result.moment.tagList),e.publishDisplayName=F,e.publishDisplayTime=O,e.publishUsername=""},_showTimePicker:function(e){var t=this;t.isTimeActived=!0,n=Object(_.a)({id:s,defaultValue:D,className:"moment-picker",pickerRef:this.$refs.Picker,onClose:function(){t.isTimeActived=!1},onConfirm:function(i){var n;if(i&&-1!=i[0].value){var s,r,o=i[0].value,a=i[1].value,l=i[2].value;-1==a?(s=new Date(o,0).getTime()/1e3,r=(new Date(o+1,0).getTime()-1)/1e3):-1==l?(s=new Date(o,a).getTime()/1e3,r=(new Date(o,a+1).getTime()-1)/1e3):(s=new Date(o,a,l).getTime()/1e3,r=(new Date(o,a,l+1).getTime()-1)/1e3),n={from:s,to:r,field:1},t.publishDisplayTime=i[0].label+(-1==i[1].value?"":i[1].label)+(-1==i[2].value?"":i[2].label)}else t.publishDisplayTime=O;n?t.$store.commit({type:"result/updateMoment",numConditions:[n]}):t.$store.commit({type:"result/updateMoment",numConditions:[]}),e&&e(i),t.isTimeActived=!1,d.f.result.momentFilter({reportType:2,clickType:4})}});var i=document.querySelector(".moment-picker");i&&i.addEventListener("touchmove",(function(e){e.stopPropagation(),e.preventDefault()}))},_checkEmtyQueryWithTag:function(){try{var e=!d.g.isArrayLength(this.$store.state.result.moment.tagList),t=1===(this.$store.state.result.moment.tagList||[]).length&&this.$store.state.result.moment.tagList[0].tagName;return!e&&d.b.query.trim()===t&&(this.isShow=!1,this._reset(),!0)}catch(i){return!1}},onContactTap:function(){this.typeFilterHide(),d.i.selectContact({selected_user_name:this.publishUsername}),Object(v.g)(d.m.feature.advMoment.tapContactSort),d.f.result.momentFilter({reportType:2,clickType:1}),Object(v.g)(d.m.feature.momentContact)},onTimeTap:function(){var e=this;return o()(u.a.mark((function t(){var i,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e,n=e.isTypeFilterActived,i.typeFilterHide(),!n){t.next=6;break}return t.next=6,new Promise((function(e){setTimeout((function(){e()}),300)}));case 6:if(!i.$store.state.result.self.base.isLoading){t.next=8;break}return t.abrupt("return");case 8:e.isAdvSearch?i._showTimePicker((function(){i.onSearchTap()})):i._showTimePicker((function(){d.a.$emit(b.b.setQuery,{})})),Object(v.g)(d.m.feature.advMoment.tapTimeSort),d.f.result.momentFilter({reportType:2,clickType:2}),Object(v.g)(d.m.feature.momentTime);case 12:case"end":return t.stop()}}),t)})))()},onSearchTap:function(){this._checkEmtyQueryWithTag()&&this._reset(),d.b.setValue({sceneActionType:T.r.NORMAL}),d.b.query&&d.a.$emit(b.b.setQuery,{}),Object(v.g)(d.m.feature.advMoment.confirmSort)},tapSift:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.snsContentType,t=this,i=t.$refs.Picker,n=i.getElementsByClassName("sift__item-i-type");if(i){var s=i.getBoundingClientRect(),r=window.pageYOffset+s.top,o=s.height;t.siftOptionTop=Math.ceil(r+o)}n&&(t.siftOptionLeft=n.offsetLeft),this.isTypeFilterActived=!this.isTypeFilterActived,this.isTypeFilterActived?(t.renderOption=e,setTimeout((function(){t.$refs.dialog&&t.$refs.dialog.$el.focus()})),d.f.result.momentFilter({reportType:2,clickType:5,content:t.renderOption.map((function(e){return e.tip})).join(";")})):t.renderOption=[],t.renderOption},tapSingleSelection:function(e){var t=this;e.value!==this.moment.snsContentTypeFilter?t.$store.state.result.self.base.isLoading||(t.$store.commit({type:"result/updateMoment",snsContentTypeFilter:e.value}),this.isAdvSearch?t.onSearchTap():d.a.$emit(b.b.setQuery,{}),d.f.result.momentFilter({reportType:2,clickType:6,content:e.tip}),t.typeFilterHide()):t.typeFilterHide()},typeFilterHide:function(){this.isTypeFilterActived=!1,this.renderOption=[]},handleMaskHide:function(){this.typeFilterHide()},handleTouchmovePrevent:function(e){this.isTypeFilterActived&&(e.cancelable&&e.preventDefault(),e.stopPropagation())}}},k=(i(1553),i(4)),$=Object(k.a)(A,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[i("div",{staticClass:"moments-filter",class:{isPickerShow:e.isTimeActived,"moments-filter-touch-action-none":e.isTypeFilterActived}},[i("div",[i("div",{ref:"Picker",staticClass:"sift__box"},[i("span",{staticClass:"ui-aria-hidden"},[e._v("筛选器：")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isAdvSearch,expression:"isAdvSearch"}],staticClass:"sift__item",attrs:{"data-index":"0",role:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onContactTap.apply(null,arguments)},touchmove:e.handleTouchmovePrevent}},[i("ui-dropdown",{staticClass:"sift__item-i",attrs:{placeholder:e.publishDisplayName,value:e.isNameSelected?e.publishDisplayName:""}})],1),i("div",{staticClass:"sift__item",attrs:{role:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onTimeTap.apply(null,arguments)},touchmove:e.handleTouchmovePrevent}},[i("ui-dropdown",{staticClass:"sift__item-i",class:{selected:e.isTimeActived},attrs:{placeholder:e.publishDisplayTime,value:e.isTimeSelected?e.publishDisplayTime:""}})],1),e.snsContentType.length?i("div",{staticClass:"sift__item",attrs:{role:"button"},on:{click:function(t){return e.tapSift(e.snsContentType)},touchmove:e.handleTouchmovePrevent}},[i("ui-dropdown",{staticClass:"sift__item-i sift__item-i-type",class:{selected:e.isTypeFilterActived},attrs:{placeholder:e.publishDisplayType,value:e.isSnsTypeSelected?e.publishDisplayType:""}})],1):e._e()])])]),[e.renderOption&&e.renderOption.length?i("heightAnimate",{ref:"dialog",staticClass:"sift__multi moment-filter-sift__multi",class:{"moment-filter-sift__touch-action-none":e.isTypeFilterActived},style:e.M_os({top:e.siftOptionTop+"px"},{left:e.siftOptionLeft+"px"}),attrs:{"aria-modal":"true",tabindex:"-1"}},[i("scroll-modal",{staticClass:"sift__multi-w moment-filter-sift__touch-action-none"},e._l(e.renderOption,(function(t){return i("div",{key:t.tip,staticClass:"sift__multi-o moment-filter-sift__touch-action-none",attrs:{role:"button"},on:{click:function(i){return e.tapSingleSelection(t)}}},[i("div",{directives:[{name:"active",rawName:"v-active.stop",value:e.os.mobile,expression:"os.mobile",modifiers:{stop:!0}}],staticClass:"sift__multi-o-inner",class:{selected:t.value===e.snsContentTypeFilter,active__item:e.os.pc},attrs:{"aria-label":t.value===e.moment.snsContentTypeFilter?"已选定，"+t.tip:t.tip},on:{touchmove:function(e){e.preventDefault()}}},[e._v("\n            "+e._s(t.tip)+"\n          ")])])})),0)],1):e._e()],i("transition",{attrs:{name:"showMask"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.renderOption&&e.renderOption.length,expression:"renderOption && renderOption.length"}],staticClass:"weui-mask filter-mask",style:e.M_os({top:e.siftOptionTop+"px"},{background:"transparent"}),on:{touchmove:function(e){e.preventDefault()},click:function(t){return t.stopPropagation(),e.handleMaskHide.apply(null,arguments)}}})])],2)}),[],!1,null,null,null);t.default=$.exports},267:function(e,t,i){},364:function(e,t,i){},625:function(e,t,i){"use strict";i(267)},632:function(e,t,i){"use strict";var n={name:"UiDropdown",props:{value:{type:String,default:""},placeholder:{type:String,default:""},direction:{type:String,default:"down"},role:{type:String,default:"button"}}},s=(i(625),i(4)),r=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"active",rawName:"v-active.stop",modifiers:{stop:!0}}],staticClass:"ui-dropdown",attrs:{role:e.role,tabindex:"-1"}},[i("p",{staticClass:"wording",class:{placeholder:!e.value}},[e.$slots.default?[e._t("default")]:[e._v("\n      "+e._s(e.value?e.value:e.placeholder)+"\n    ")]],2),i("ui-arrow",{attrs:{direction:e.direction,align:"flex"}})],1)}),[],!1,null,"586742ec",null).exports;r.install=function(e){e.component(r.name,r)};t.a=r},652:function(e,t,i){"use strict";var n=i(24),s=i.n(n),r=i(0),o=i(46),a=i.n(o);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.canNoLimit,i=void 0===t?[1,1,1]:t,n=e.startYear,o=void 0===n?2012:n,l=(e.pickerRef,s()(i,3)),c=l[0],u=l[1],p=l[2],m=function(e){var t=e.year,i=e.month,n=void 0===i?12:i,s=[{label:r.g.L("不限"),value:-1,children:[{label:r.g.L("不限"),value:-1}]}];u||(s=[]);for(var o=n;o>0;o--)s.push({label:r.g.L("".concat(o,"月")),value:o-1,children:h({year:t,month:o})});return s},h=function(e){var t=e.year,i=e.month,n=new Date(t,i,0).getDate();t===(new Date).getFullYear()&&i===(new Date).getMonth()+1&&(n=(new Date).getDate());var s=[{label:r.g.L("不限"),value:-1}];p||(s=[]);for(var o=n;o>0;o--)s.push({label:r.g.L("".concat(o,"日")),value:o});return s},f=function(){var e=[{label:r.g.L("不限"),value:-1,children:[{label:r.g.L("不限"),value:-1,children:[{label:r.g.L("不限"),value:-1}]}]}];c||(e=[]);var t=(new Date).getFullYear();e.push({label:t+r.g.L("年","","picker"),value:t,children:m({year:t,month:(new Date).getMonth()+1})});for(var i=t-1;i>=o;i--)e.push({label:i+r.g.L("年","","picker"),value:i,children:m({year:i})});return e}(),d=a.a.picker(f,Object.assign({title:"请选择发布时间",closeText:"取消",container:"body"},!1,e));return d}},696:function(e,t,i){},747:function(e,t,i){"use strict";i(364)},815:function(e,t,i){"use strict";var n,s={data:function(){return{}},mixins:[],props:[],methods:{touchStart:function(e){n=e.changedTouches[0].pageY},touchMove:function(e){0===this.$el.scrollTop&&e.changedTouches[0].pageY>n&&e.preventDefault(),this.$el.scrollTop+this.$el.offsetHeight===this.$el.scrollHeight&&e.changedTouches[0].pageY<n&&e.preventDefault()}},created:function(){}},r=(i(747),i(4)),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scroll-node",on:{touchstart:e.touchStart,touchmove:function(t){return t.stopPropagation(),e.touchMove.apply(null,arguments)}}},[e._t("default")],2)}),[],!1,null,null,null);t.a=o.exports}}]);