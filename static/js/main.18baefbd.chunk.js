(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),i=n(8),o=n(24),l=n(27),j=n.n(l),u=n(49),d=n(50),b=n(46),O=n(2);function m(e){var t=e.changeStatus,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(O.jsxs)(u.a,{className:"login",onSubmit:function(e){e.preventDefault(),s.trim()?(t(!0),localStorage.setItem("user",s.trim()),r("")):alert("Write your name")},children:[Object(O.jsx)(u.a.Label,{children:"Log in"}),Object(O.jsxs)(d.a,{className:"mb-3",children:[Object(O.jsx)(u.a.Control,{required:!0,value:s,placeholder:"User name",onChange:function(e){r(e.target.value)}}),Object(O.jsx)(b.a,{type:"submit",variant:"outline-secondary",id:"button-addon2",children:"log in"})]})]})}var h=n(13);function x(e){var t=e.changeStatus;return Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("div",{className:"name--logout",onClick:function(){t(!1),localStorage.removeItem("user")},children:Object(O.jsx)(h.b,{})}),Object(O.jsx)("div",{className:"name--label",children:localStorage.getItem("user")})]})}var f=n(48),g=n(20);function v(e){var t=e.todo;return Object(O.jsxs)("section",{className:"stat",children:[Object(O.jsxs)(f.a,{variant:"success",children:[Object(O.jsx)(h.a,{}),Object(O.jsx)("b",{children:t.filter((function(e){return e.isDone})).length})]}),Object(O.jsxs)(f.a,{style:{marginLeft:"30px"},variant:"warning",children:[Object(O.jsx)(g.a,{}),Object(O.jsx)("b",{children:t.filter((function(e){return!e.isDone})).length})]})]})}var S=n(47);function p(e){var t=e.data,n=e.changeStatus,a=e.deleteItem;return Object(O.jsxs)(f.a,{className:"todo",variant:t.isDone?"success":"warning",children:[Object(O.jsxs)("h5",{children:[t.title,Object(O.jsx)(S.a,{children:t.date})]}),Object(O.jsx)("div",{children:"Creator:".concat(t.name)}),Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsxs)("div",{onClick:n,children:[t.isDone?Object(O.jsx)(h.a,{}):Object(O.jsx)(g.a,{})," "]}),Object(O.jsxs)("div",{onClick:a,children:[" ",Object(O.jsx)(h.c,{})]})]})]})}n(42);var N=function(e,t,n,a,c,s){if(e.preventDefault(),c.trim()){var r=[].concat(Object(o.a)(a),[{title:c,id:a.length,date:j()().format("LTS"),name:t}]);s(""),n(r),localStorage.setItem("Todos",JSON.stringify(r))}else alert("Write task name")};var I=function(){var e=function(e){localStorage.setItem("Todos",JSON.stringify(e))},t=localStorage.getItem("user"),n=JSON.parse(localStorage.getItem("Todos")),c=Object(a.useState)(!1),s=Object(i.a)(c,2),r=s[0],l=s[1],j=Object(a.useState)([]),h=Object(i.a)(j,2),f=h[0],g=h[1],S=Object(a.useState)(""),I=Object(i.a)(S,2),y=I[0],k=I[1];return Object(a.useEffect)((function(){return null!==n?g(n):null}),[]),Object(a.useEffect)((function(){return null!==t?l(!0):null}),[]),console.log(t),Object(O.jsxs)(O.Fragment,{children:[r?Object(O.jsx)(x,{changeStatus:l}):Object(O.jsx)(m,{changeStatus:l}),Object(O.jsxs)("div",{className:r?"":"none",children:[Object(O.jsxs)(u.a,{className:"form",onSubmit:function(e){return N(e,t,g,f,y,k)},children:[Object(O.jsx)(u.a.Label,{children:"Add task"}),Object(O.jsxs)(d.a,{className:"mb-3",children:[Object(O.jsx)(u.a.Control,{required:!0,value:y,placeholder:"task name",onChange:function(e){return k(e.target.value)}}),Object(O.jsx)(b.a,{type:"submit",variant:"outline-secondary",id:"button-addon2",children:"Add"})]})]}),Object(O.jsx)("ul",{children:f.map((function(t){return Object(O.jsx)(p,{data:t,changeStatus:function(){f[t.id].isDone=!t.isDone,g(Object(o.a)(f)),e(f)},deleteItem:function(){var n=f.filter((function(e){return e.id!==t.id}));g(n),e(n)}},t.id)}))}),Object(O.jsx)(v,{todo:f})]})]})};n(43);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.18baefbd.chunk.js.map