(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(45)},44:function(e,t){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),s=n(8),u=n(10),l=n(13),i=n(17),p=n(23),m=function(e,t){return console.log("init comms"),{type:"ADD_COMMENT",text:e,id:t}},d=Object(l.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"SET_POSTS":return t.posts;case"ADD_COMMENT":console.log("adding comms");var n=Object(p.a)(e);return n.map(function(e){if(e.id===t.id){var n=Object(i.a)({},e);if(n.comments){var r=Object(p.a)(n.comments).push(t.text);return Object(i.a)({},n,{comments:r})}return Object(i.a)({},n,{comments:[t.text]})}return e}),n;default:return e}}}),f=Object(l.c)(d),h=n(11),b=n.n(h),E=n(16),v=n(26),O=n(27),j=n(31),g=n(28),y=n(32),w=n(9);var k=Object(s.b)(function(e){return{posts:e.posts}})(function(e){var t=e.posts;return a.a.createElement("div",null,a.a.createElement("h3",null,"Postspage"),t.length>0?a.a.createElement("ul",null,function(e){return e.map(function(e){return a.a.createElement(u.b,{key:e.id,to:"/posts/post:".concat(e.id)},a.a.createElement("li",null,e.name))})}(t)):a.a.createElement("div",null,"Loading posts ..."))}),x=n(30);var S={addCommentToPost:m},P=Object(s.b)(function(e){return{posts:e.posts}},S)(function(e){var t=e.posts,n=e.id,o=Object(r.useState)(""),c=Object(x.a)(o,2),s=c[0],u=c[1];function l(e){u(e.target.value)}function i(e){e.preventDefault(),console.log(m(s,n)),m(s,n),u("")}return console.log("render post"),t.map(function(e){return e.id!==n?null:a.a.createElement("div",{key:e.id},a.a.createElement("h3",null,e.name),a.a.createElement("p",null,e.body),e.comments?e.comments.map(function(e){return a.a.createElement("p",null,e)}):null,a.a.createElement("form",{onSubmit:i},a.a.createElement("input",{value:s,placeholder:"Add a comment",onChange:l})))})}),T=function(e){var t=e.match.params.postId.replace(/[^-0-9]/gim,"");return a.a.createElement("div",null,a.a.createElement("h2",null,"Hello! Here's post"),a.a.createElement(P,{id:+t}),a.a.createElement(u.b,{to:"/"},"Back to home"))},D=function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()}).catch(function(e){return console.error("Oh no! Something went wrong: "+e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=(n(44),function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setPosts,e.next=3,D();case 3:(n=e.sent).length=40,t(n);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"PostApp"},a.a.createElement(w.c,null,a.a.createElement(w.a,{exact:!0,path:"/",component:k}),a.a.createElement(w.a,{path:"/posts/post:postId/",component:T})))}}]),t}(a.a.Component)),M={setPosts:function(e){return{type:"SET_POSTS",posts:e}}},A=Object(s.b)(function(e){return{posts:e.posts}},M)(C);c.a.render(a.a.createElement(s.a,{store:f},a.a.createElement(u.a,null,a.a.createElement(A,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3f65206c.chunk.js.map