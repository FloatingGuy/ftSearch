(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1751:function(e,t,n){"use strict";n(975)},2243:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(15),s=n(11),r={mixins:[o.n],props:{data:{type:Object,default:function(){return{}}},isFixBottom:{type:Boolean,default:!1}},computed:{links:function(){return this.$props.data.items}},mounted:function(){var e=this;this.exposeTimeout=null,this.$nextTick((function(){o.a.$on(o.k.resultScroll,(function(){clearTimeout(e.exposeTimeout),e.exposeTimeout=setTimeout(e.expose,500)}))}))},methods:{expose:function(){if(this.$el){var e=window.innerHeight||document.documentElement.clientHeight,t=this.$el.getBoundingClientRect();if(Math.floor(t.top+t.height)<=e){var n={isexpose:1,searchid:o.b.searchId,query:o.b.query,ishomepage:o.b.isHomePage,sessionid:o.b.sessionId,scene:o.b.scene,pageNo:s.a.state.result.self.base.currentPage,content:this.links.map((function(e){return e.word})).join("|")};Object(i.e)(n)}}},onTap:function(e){this.M_go(Object.assign({},e,{jumpUrl:o.g.addParamsToURLSearch(o.g.object2params({query:o.b.query||"",searchId:o.b.searchId||"",sessionId:o.b.sessionId||""}),e.jumpUrl)})),this.M_clickReport({type:0,docId:"bottom-link",clickContent:e.word})}}},c=(n(1751),n(4)),a=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-links",class:{"fix-bottom":e.isFixBottom}},e._l(e.links,(function(t){return n("span",{directives:[{name:"active",rawName:"v-active"}],key:t.word,attrs:{role:"button"},on:{click:function(n){return n.stopPropagation(),e.onTap(t)}}},[e._v(e._s(t.word))])})),0)}),[],!1,null,"44e72f84",null);t.default=a.exports},975:function(e,t,n){}}]);