(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,e,t){n.exports=t(214)},132:function(n,e){},134:function(n,e){},169:function(n,e){},170:function(n,e){},214:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(41),c=t.n(o),i=t(20),u=t(24),l=t(35),s=t(110),p=t(63),d=Object(l.b)({posts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_POSTS":return e.posts;case"ADD_COMMENT":return Object(p.a)(n).map(function(n){if(n.id===e.id){var t=n.comments,r=void 0===t?[]:t,a={body:e.text,time:e.time};return Object(s.a)({},n,{comments:[].concat(Object(p.a)(r),[a])})}return n});default:return n}}}),m=Object(l.c)(d),f=t(27),b=t.n(f),x=t(42),h=t(100),g=t(101),v=t(108),E=t(102),O=t(109),j=t(21),w=t(14),y=t(15);function k(){var n=Object(w.a)(["\n  display: inline-block;\n  \n  position: absolute;\n  right: 10px;\n  bottom: 4px;\n  font-size: 11px;\n  \n  color: rgba(0, 0, 0, .7)\n"]);return k=function(){return n},n}function S(){var n=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  \n  margin: 12px 30px;\n  padding: 16px 12px;\n  \n  background-color: #d4d4d9;\n  border-radius: 8px;\n  \n  b {\n    font-size: .8em;\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(w.a)(["\n  input {\n    height: 2em;\n    width: 100%;\n  }\n  \n  q {\n    display: inline-block;\n    margin: 0 0 20px;\n    padding-left: 12px;\n    font-size: 1.1em;\n    font-weight: 100;\n  }\n"]);return D=function(){return n},n}function M(){var n=Object(w.a)(["\n  position: relative;\n  \n  width: 120px;\n  left: calc(50% - 55px);\n  margin-top: 20px;\n  padding: 6px 10px;\n  \n  border: 1px solid #333;\n  border-radius: 8px;\n  background-color: white;\n  \n  transition: .15s ease-in;\n  \n  a {\n    color: #5997ac;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  \n  &:hover {\n    background-color: #5997ac;\n    \n    a {\n      color: white;\n    }\n  }\n"]);return M=function(){return n},n}function C(){var n=Object(w.a)(["\n  position: relative;\n  margin: 20px 10px;\n"]);return C=function(){return n},n}function P(){var n=Object(w.a)(["\n  position: relative;\n  width: 80%;\n  \n  margin: 10px auto;\n  padding: 20px 30px;\n  \n  border: 1px solid black;\n  border-left: 5px solid #5997ac;\n  border-radius: 4px;\n  box-shadow: 0 0 14px #999;\n  \n  background-color: white;\n"]);return P=function(){return n},n}function T(){var n=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  \n  width: 290px;\n  \n  margin: 10px 30px;\n  padding: 30px 20px;\n  \n  border: 1px solid black;\n  border-left: 5px solid cyan;\n  border-radius: 4px;\n  box-shadow: 0 0 14px #999;\n  \n  transition: .2s ease-in-out;\n  \n  text-align: center;  \n  cursor: pointer;\n  \n  &:hover {\n    transform: scale(1.04);\n    border-left: 6px solid tomato ;\n  }\n  \n  a {\n    width: 100%;\n    text-decoration: none;\n    transition: .3s ease-in;\n  }\n"]);return T=function(){return n},n}function A(){var n=Object(w.a)(["\n  padding-left: 0;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return A=function(){return n},n}function J(){var n=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px;\n"]);return J=function(){return n},n}function N(){var n=Object(w.a)(["\n  position: relative;\n  width: 75vw;\n  min-width: 500px;\n  \n  margin: 50px 0;\n  padding: 10px 0;\n  \n  background-color: white;\n  box-shadow: 0 0 22px #555;\n  border-radius: 4px;\n"]);return N=function(){return n},n}function _(){var n=Object(w.a)(["\n  body {\n    font-family: sans-serif;\n  \n    margin: -20px 0;\n    background-color: #c4c4c4;\n    display: flex;\n    justify-content: center\n  }\n"]);return _=function(){return n},n}var z=Object(y.a)(_()),I=y.b.section(N()),q=y.b.div(J()),B=y.b.ul(A()),F=y.b.div(T()),H=y.b.div(P()),L=y.b.div(C()),Y=y.b.button(M()),G=y.b.div(D()),K=y.b.p(S()),Q=y.b.code(k()),R=function(n){return n.map(function(n){return a.a.createElement(F,{key:n.id},a.a.createElement(u.b,{to:"/posts/post:".concat(n.id)},a.a.createElement("b",null,n.email),a.a.createElement("br",null),a.a.createElement("code",null,n.name)))})},U=Object(i.b)(function(n){return{posts:n.posts}})(function(n){var e=n.posts;return a.a.createElement(q,null,a.a.createElement("h2",null,"Postspage"),e.length>0?a.a.createElement(B,null,R(e)):a.a.createElement("div",null,"Loading posts ..."))}),V=t(107);var W=t(125);var X={addComment:function(n,e,t){return{type:"ADD_COMMENT",text:n,id:e,time:t}}},Z=Object(i.b)(function(n){return{posts:n.posts}},X)(function(n){var e=n.posts,t=n.id,o=n.addComment,c=Object(r.useState)(""),i=Object(V.a)(c,2),u=i[0],l=i[1];function s(n){l(n.target.value)}function p(n){n.preventDefault(),o(u,t,function(){var n=new Date,e=n.getDate(),t=n.getMonth();return n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()+" - "+["January","February","March","April","May","June","July","August","September","October","November","December"][t]+", "+e}()),l("")}return e.map(function(n){return n.id!==t?null:a.a.createElement(G,{key:n.id},a.a.createElement("h3",null,n.email),a.a.createElement("q",null,n.body),n.comments?n.comments.map(function(n){return a.a.createElement(K,{key:W.generate(3)},a.a.createElement("b",null,"Comment from ",a.a.createElement("i",null,"Your Name"),": "),a.a.createElement("code",null,n.body),a.a.createElement(Q,null,n.time))}):null,a.a.createElement("form",{onSubmit:p},a.a.createElement("input",{value:u,placeholder:"Add a comment",onChange:s})))})}),$=function(n){var e=+n.match.params.postId.replace(/[^-0-9]/gim,"");return a.a.createElement(H,null,a.a.createElement(L,null,a.a.createElement("h2",null,"Post #",e,":"),a.a.createElement(Z,{id:e}),a.a.createElement(Y,null,a.a.createElement(u.b,{to:"/"},"Back to home"))))},nn=function(){var n=Object(x.a)(b.a.mark(function n(){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/comments").then(function(n){return n.json()}).catch(function(n){return console.error("Oh no! Something went wrong: "+n)});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),en=function(n){function e(){return Object(h.a)(this,e),Object(v.a)(this,Object(E.a)(e).apply(this,arguments))}return Object(O.a)(e,n),Object(g.a)(e,[{key:"componentDidMount",value:function(){var n=Object(x.a)(b.a.mark(function n(){var e,t;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.setPosts,n.next=3,nn();case 3:(t=n.sent).length=40,e(t);case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,null),a.a.createElement(I,null,a.a.createElement(j.c,null,a.a.createElement(j.a,{exact:!0,path:"/",component:U}),a.a.createElement(j.a,{path:"/posts/post:postId/",component:$}))))}}]),e}(a.a.Component),tn={setPosts:function(n){return{type:"SET_POSTS",posts:n}}},rn=Object(i.b)(function(n){return{posts:n.posts}},tn)(en);c.a.render(a.a.createElement(i.a,{store:m},a.a.createElement(u.a,{basename:"/frontend-task-3"},a.a.createElement(rn,null))),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.6d0d10e1.chunk.js.map