"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{545:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(87),c=n(689),a="moviesList_container__sCdf8",u="moviesList_item__HyE04",s="moviesList_link__aoUpD",o=n(184),i=function(t){var e=t.results,n=(0,c.TH)(),i=e.map((function(t){var e=t.id,c=t.title;return(0,o.jsx)("li",{className:u,children:(0,o.jsx)(r.rU,{className:s,to:"/movies/".concat(e),state:{from:n},children:(0,o.jsx)("p",{children:c})})},e)}));return(0,o.jsx)("div",{className:a,children:i})},f=i;i.defaultProps={results:[]}},539:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),o=n(87),i=n(236),f=n(686),p=n.n(f),l="movieSearchForm_searchBtn__V3NXY",v=n(184),h=function(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,c.Z)(n,2),a=r[0],u=r[1];return(0,v.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===a.trim().toLowerCase())return p().Notify.info("Enter correct search!");e(a),u("")},children:[(0,v.jsx)("input",{name:"search",value:a,onChange:function(t){var e=t.target.value;u(e)},placeholder:"Film name"}),(0,v.jsx)("button",{className:l,children:"Search"})]})},m=n(545),d=n(935),x="movies_searchContainer__XyjjT",_=function(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],a=e[1],f=(0,s.useState)(!1),p=(0,c.Z)(f,2),l=p[0],_=p[1],k=(0,o.lr)(),w=(0,c.Z)(k,2),b=w[0],Z=w[1],g=b.get("search");(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,i.bI)(g);case 4:e=t.sent,n=e.data,a(n.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();g&&t()}),[g]);return(0,v.jsxs)("div",{className:x,children:[l&&(0,v.jsx)(d.Z,{}),(0,v.jsx)(h,{onSubmit:function(t){Z({search:t})}}),n.length>0&&(0,v.jsx)(m.Z,{results:n})]})}},236:function(t,e,n){n.d(e,{Mc:function(){return v},R4:function(){return m},bI:function(){return h},np:function(){return d},wr:function(){return l}});var r=n(861),c=n(757),a=n.n(c),u=n(912),s="ef7abe5b40a07c080750148cf03b2668",o="https://api.themoviedb.org/3",i="".concat(o,"/trending/movie/week"),f="".concat(o,"/movie/"),p="".concat(o,"/search/movie"),l=function(){var t=(0,r.Z)(a().mark((function t(){var e,n=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(e,"?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,t.next=3,u.Z.get("".concat(p,"?api_key=").concat(s,"&query=").concat(e,"&page=").concat(n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(e,"/credits?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(e,"/reviews?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=539.9b2da0c5.chunk.js.map