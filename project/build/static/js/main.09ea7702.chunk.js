(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){},198:function(e,t,a){},229:function(e,t){},231:function(e,t){},242:function(e,t){},244:function(e,t){},271:function(e,t){},273:function(e,t){},274:function(e,t){},279:function(e,t){},281:function(e,t){},300:function(e,t){},312:function(e,t){},315:function(e,t){},341:function(e,t,a){"use strict";a.r(t);var n,s=a(1),o=a.n(s),r=a(61),c=a.n(r),i=(a(173),a(174),a(175),a(21)),l=a(8),u=a(0),d=function(){return Object(u.jsx)("div",{className:"card m-5 w-50 mx-auto",children:Object(u.jsxs)("ul",{className:"list-group m-5",children:[Object(u.jsxs)("div",{className:"s18 text-light h3 m-2 p-3",children:[" \ud83d\udcbb crypto-text... ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})," A secure way to communicate "]}),Object(u.jsx)(i.b,{to:"/login",className:"list-group-item btn-primary bg-dark m-2",children:" Login "}),Object(u.jsx)(i.b,{to:"/register",className:"list-group-item btn-primary bg-dark m-2",children:" Register "})]})})},m=a(22),g=a(13),b=a(6),j=a(5),h=a.n(j),p=a(7),O=(a(30),a(198),function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),f=function(e){var t=Object(s.useState)({username:"",password:""}),a=Object(b.a)(t,2),n=a[0],o=a[1],r=function(e){var t=e.target.value,a=e.target.name;o(Object(g.a)(Object(g.a)({},n),{},Object(m.a)({},a,t)))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"container p-3 my-5 mx-auto bg-dark text-white w-50",action:"",onSubmit:function(t){t.preventDefault(),h.a.post("/login",n).then((function(t){t.data.token?(O(t.data.message),o({username:"",password:""}),localStorage.setItem("token",t.data.token),e.history.push("/dashboard")):O("user not logged in")})).catch((function(e){O(e.response.data.message)}))},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",className:"m-3",children:"Username: "}),Object(u.jsx)("input",{type:"text",name:"username",id:"username",onChange:r,value:n.username})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",className:"m-3",children:"Password: "}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:r,value:n.password})]}),Object(u.jsx)("button",{className:"btn btn-danger",type:"submit",children:" Login "})]}),Object(u.jsx)(p.a,{})]})},x=function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},v=function(e){var t=Object(s.useState)({name:"",username:"",email:"",password:""}),a=Object(b.a)(t,2),n=a[0],o=a[1],r=function(e){var t=e.target.value,a=e.target.name;o(Object(g.a)(Object(g.a)({},n),{},Object(m.a)({},a,t)))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"container p-3 my-4 mx-auto bg-dark text-white w-50",action:"",onSubmit:function(t){t.preventDefault(),console.log(n),h.a.post("/register",n).then((function(t){x(t.data.message),e.history.push("/login"),o({name:"",username:"",email:"",password:""})})).catch((function(e){x(e.response.data.message)}))},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"name",className:"m-3",children:"Name: "}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",onChange:r,value:n.name})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",className:"m-3",children:"Username: "}),Object(u.jsx)("input",{type:"text",name:"username",id:"username",onChange:r,value:n.username})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",className:"m-3",children:"Email: "}),Object(u.jsx)("input",{type:"text",name:"email",id:"email",onChange:r,value:n.email})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",className:"m-3",children:"Password: "}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:r,value:n.password})]}),Object(u.jsx)("button",{className:"btn btn-danger my-auto",type:"submit",children:" Register "})]}),Object(u.jsx)(p.a,{})]})},k=function(){return Object(u.jsx)("div",{className:"card m-5 w-50 mx-auto",children:Object(u.jsxs)("ul",{className:"list-group m-5",children:[Object(u.jsx)("div",{className:"s18 text-light h3 m-2 p-3",children:" \ud83d\udeb7 Oops...the page content cannot be loaded on direct access "}),Object(u.jsx)(i.b,{to:"/dashboard",className:"list-group-item btn-dark bg-dark m-2",children:" Return to dashboard. \ud83d\udcd6"}),Object(u.jsx)(i.b,{to:"/",className:"list-group-item btn-dark bg-dark m-2",children:" Return to home page. \ud83c\udf10 "})]})})},y=function(e){var t=Object(s.useState)(e.GroupData),a=Object(b.a)(t,2),n=a[0],o=a[1];Object(s.useEffect)((function(){h.a.get("/dashboard/groups",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){o(e.data.groups)})).catch((function(e){console.log(e)}))}),[]);return Object(u.jsx)("div",{className:"list-group scrollable ",children:n.map((function(t){return Object(u.jsxs)("div",{className:"list-group-item bg-light p-3 m-3",id:t._id,children:[Object(u.jsx)("div",{className:"text-dark text-center font-weight-bold h4",children:t.group_name}),Object(u.jsx)("button",{type:"button",className:"btn btn-block btn-dark",onClick:function(){return a=t,void e.history.push({pathname:"/group/edit",state:{groupdata:a}});var a},children:"Edit Group "}),Object(u.jsx)("button",{type:"button",className:"btn btn-block btn-dark",onClick:function(){return a=t,void e.history.push({pathname:"/group/message",state:{groupdata:a}});var a},children:"Send Message"})]},t._id)}))})},N=function(e){localStorage.getItem("token")||e.history.push("/login");var t=Object(s.useState)(null),a=Object(b.a)(t,2),n=a[0],o=a[1];return Object(s.useEffect)((function(){h.a.get("/dashboard/groups",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){o(e.data.groups);n.filter((function(e){return 0==e.users.length}));var t=n.filter((function(e){return 0!=e.users.length}));o(t)})).catch((function(e){var t;e&&e.response&&e.response.data&&e.response.data.message&&(t=e.response.data.message,p.b.dark(t,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}))}),[]),Object(u.jsxs)("div",{className:" container bg-dark pt-3 y-3 ",children:[Object(u.jsx)("div",{className:" pt-3 y-3 p-3 text-light s18 text-center font-weight-bold h2",children:"Groups"}),n&&Object(u.jsx)(y,{history:e.history,GroupData:n}),Object(u.jsx)(p.a,{})]})},C=function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},S=function(e){localStorage.getItem("token")||e.history.push("/login");var t=Object(s.useState)({name:""}),a=Object(b.a)(t,2),n=a[0],o=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"btn-danger p-3 mx-auto my-2 w-50",onClick:function(){localStorage.removeItem("token"),localStorage.getItem("token")||e.history.push("/login")},children:" Log out"}),Object(u.jsxs)("form",{className:"container p-3 my-3 bg-dark text-white w-50",action:"",onSubmit:function(e){e.preventDefault(),h.a.post("/chatroom/create",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){C(e.data.message),o({name:""})})).catch((function(e){C(e.response.data.message)}))},children:[Object(u.jsx)("input",{className:"p-1 m-2 w-50",type:"text",autoComplete:"off",name:"name",id:"name",placeholder:"Enter Chat-room name",onChange:function(e){var t=e.target.value,a=e.target.name;o(Object(g.a)(Object(g.a)({},n),{},Object(m.a)({},a,t)))},value:n.name}),Object(u.jsx)("button",{className:"btn btn-danger",type:"submit",children:" Create Chatroom "})]}),Object(u.jsx)("div",{className:"container p-3 my-3 bg-dark w-50",children:Object(u.jsx)(N,{history:e.history,className:"col"})}),Object(u.jsx)(p.a,{})]})},w=function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0})},_=function(e){var t=Object(l.f)(),a=Object(s.useState)(e.groups_data),n=Object(b.a)(a,2),o=n[0],r=n[1],c=Object(s.useState)(0),i=Object(b.a)(c,2),d=i[0],m=i[1],g=Object(s.useState)(),j=Object(b.a)(g,2),p=j[0],O=j[1];null==!o._id&&t.push("/dashboard");var f=o._id;Object(s.useEffect)((function(){h.a.get("/dashboard/message/authorize",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){O(e.data.user.username)})).catch((function(e){console.log(e.response.data.message)})),h.a.get("/dashboard/groups/details/".concat(f),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){r(e.data.details)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.message&&w(e.response.data.message),console.log(e)}))}),[d]);var x,v=o.users,k=o.admins;x=k.includes(p),k=v.filter((function(e){return k.includes(e)})),v=v.filter((function(e){return!k.includes(e)}));var y=function(e){var a=e;x||a==p?h.a.post("/chatroom/groups/remove",{username:a,group_id:f},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){m(!d),t.push("/dashboard")})).catch((function(e){w(e.response.data.message)})):w("Only admins can remove.")};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container w-50",children:[Object(u.jsxs)("ul",{className:"list-group mt-3",children:[Object(u.jsx)("div",{className:"list-group-item bg-dark text-light text-center",children:"Admins"}),k.map((function(e){return Object(u.jsxs)("div",{className:"list-group-item ",children:[Object(u.jsxs)("div",{children:[" ",e]}),Object(u.jsx)("button",{className:"m-3 btn btn-sm btn-dark",onClick:function(){return function(e){var t=e;x?h.a.post("/chatroom/groups/removeadmin",{username:t,group_id:f},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){m(!d)})).catch((function(e){w(e.response.data.message)})):w("Only admins can remove admin access.")}(e)},children:" Remove Admin "}),Object(u.jsx)("button",{className:"m-3 btn btn-sm btn-dark",onClick:function(){return y(e)},children:" Remove "})]},e)}))]}),Object(u.jsxs)("ul",{className:"list-group mt-3",children:[Object(u.jsx)("div",{className:"list-group-item bg-dark text-light text-center ",children:"Users"}),v.map((function(e){return Object(u.jsxs)("div",{className:"list-group-item ",children:[Object(u.jsxs)("div",{children:[" ",e]}),Object(u.jsx)("button",{className:"m-3 btn btn-sm btn-dark",onClick:function(){return y(e)},children:" Remove "}),Object(u.jsx)("button",{className:"m-3 btn btn-sm btn-dark",onClick:function(){return function(e){var t=e;x?h.a.post("/chatroom/groups/makeadmin",{username:t,group_id:f},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){m(!d)})).catch((function(e){w(e.response.data.message)})):w("Only admins can give admin access.")}(e)},children:" Make Admin "})]},e)}))]})]})})},B=function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},I=function(e){localStorage.getItem("token")||e.history.push("/login");var t=Object(s.useState)(""),a=Object(b.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)([]),c=Object(b.a)(r,2),i=c[0],l=c[1],d=Object(s.useState)(0),m=Object(b.a)(d,2),g=m[0],j=m[1];Object(s.useEffect)((function(){""!=n&&h.a.get("/search/users",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},params:{usernames:n}}).then((function(e){l(e.data.result)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.message&&B(e.response.data.message)}))}),[n,g]);var O=function(){if(e.history&&e.history.location&&e.location.state&&e.location.state.groupdata){var t=e.history.location.state.groupdata,a={username:n,group_id:t._id};h.a.post("/chatroom/groups/add",a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){j(!g)})).catch((function(e){B(e.response.data.message)}))}};return e.history&&e.history.location&&e.location.state&&e.location.state.groupdata?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container mt-3 mx-auto",children:[Object(u.jsx)("input",{autoComplete:"off",list:"search-suggest",type:"search",name:"username",id:"username",className:"w-50 m-2 p-2 form-select",value:n,onChange:function(e){""==e.target.value&&l([]),o(e.target.value)}}),Object(u.jsx)("datalist",{id:"search-suggest",className:"w-50 m-2",children:i.map((function(t){return Object(u.jsxs)("option",{className:"dropdown-item",value:t,onClick:function(){return O(e.group._id)},children:[" ",t," "]},t)}))}),Object(u.jsx)("button",{className:"btn btn-dark ",onClick:O,children:" add to group"})]}),Object(u.jsx)(_,{groups_data:e.history.location.state.groupdata}),Object(u.jsx)(p.a,{})]}):Object(u.jsx)(k,{})},A=a(168),z=a.n(A),F=a(226),P=function(e){p.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},E=function(e){var t;e.history&&e.history.location&&e.location.state&&e.location.state.groupdata&&(t=e.history.location.state.groupdata);var a=Object(s.useState)({message:"",key:""}),o=Object(b.a)(a,2),r=o[0],c=o[1],i=Object(s.useState)(0),l=Object(b.a)(i,2),d=l[0],j=l[1],O=Object(s.useRef)(null),f=Object(s.useRef)(null),x=Object(s.useRef)(null),v=Object(s.useState)([]),y=Object(b.a)(v,2),N=y[0],C=y[1],S=Object(s.useState)({}),w=Object(b.a)(S,2),_=w[0],B=w[1],I=Object(s.useState)([]),A=Object(b.a)(I,2),E=A[0],R=A[1];Object(s.useEffect)((function(){if(e.history&&e.history.location&&e.location.state&&e.location.state.groupdata)return h.a.get("/dashboard/message/authorize",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){B(e.data.user)})).catch((function(e){console.log(e.response.data.message)})),h.a.get("/dashboard/group/messages/".concat(t._id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){C(e.data.messages)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.message&&P(e.response.data.message),console.log(e)})),function(e){(n=z()())&&e&&n.emit("join",e)}(t),function(){!function(e){n.emit("leave",e),n&&n.disconnect()}(t)}}),[d]),function(e){if(!n)return!0;n.on("chat",(function(t){return e(null,t)}))}((function(e,t){e||(j(d+1),console.log(t))}));var H=function(e){var t=e.target.value,a=e.target.name;R(Object(g.a)(Object(g.a)({},E),{},Object(m.a)({},a,t)))},D=function(e,t){var a=e.target.name;if(E[a]===t.message_key)try{!function(e){p.b.info(e,{position:"top-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}(F.AES.decrypt(t.message_body,t.message_key).toString(F.enc.Utf8))}catch(n){P(n.message)}else P("Wrong Key!")},G=function(e){var t=e.target.value,a=e.target.name;c(Object(g.a)(Object(g.a)({},r),{},Object(m.a)({},a,t)))},L=function(){if(0!=r.message.length&&0!=r.key){var e=F.AES.encrypt(r.message,r.key).toString(),a=r.key;!function(e,t,a){h.a.post("/chatroom/groups/message",{Groupdata:e,user:t,inputFields:a},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){var a=t.data.messagedata;n.emit("chat",e,a)})).catch((function(e){}))}(t,_,{message:e,key:a}),c({message:"",key:""}),O.current.value="",f.current.value="",j(1+d)}else P("message or key cannot be empty")};return e.history&&e.history.location&&e.location.state&&e.location.state.groupdata?Object(u.jsxs)("div",{className:"container  bg-dark p-3 my-3 vertical-cente w-75",children:[Object(u.jsx)("div",{className:" s18 text-light text-center h4 p-2",children:t.group_name}),Object(u.jsx)("ul",{className:"list-group scrollable p-3",ref:x,children:N&&N.map((function(e){return Object(u.jsxs)("li",{className:"list-group-item m-1",children:[Object(u.jsx)("div",{className:" btn p-2 float-right",onClick:function(t){return function(e,t){t.username===_.username?h.a.post("/chatroom/groups/deletemessage",{msg_id:t._id},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){j(d+1)})).catch((function(e){P(e.response.data.message)})):P("only sender can delete message!")}(0,e)},children:" \u274c "}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"text-break",children:[e.username,"  \ud83d\udce7 : ",e.message_body," "]},e._id),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"float-right h6",children:["\ud83d\udd59 ",e.sent_at]}),Object(u.jsx)("input",{className:"m-3",type:"password",autoComplete:"off",id:e._id,name:e._id,onChange:H}),Object(u.jsx)("button",{className:"btn btn-dark",id:"decrypt-button",onClick:function(t){return D(t,e)},name:e._id,children:" Decrypt"})]},e._id)}))}),Object(u.jsx)("input",{className:"m-3 ",type:"text",autoComplete:"off",name:"message",id:"message",onChange:G,value:r.message,ref:O}),Object(u.jsx)("input",{className:"m-3",type:"text",autoComplete:"off",name:"key",id:"key",onChange:G,value:r.key,ref:f}),Object(u.jsx)("button",{className:"btn btn-danger",id:"send-button",onClick:function(){return L()},children:" send"}),Object(u.jsx)(p.a,{className:"text-break"})]}):Object(u.jsx)(k,{})},R=function(){return Object(u.jsx)("div",{className:"card m-5 w-50 mx-auto",children:Object(u.jsxs)("ul",{className:"list-group m-5",children:[Object(u.jsx)("div",{className:"s18 text-light h3 m-2 p-3",children:" \ud83d\udeb7 Oops...the page you are looking for does not exist! "}),Object(u.jsx)(i.b,{to:"/",className:"list-group-item btn-dark bg-dark m-2",children:" Return to home page. \ud83c\udf10 "})]})})};var H=function(e){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(u.jsx)(l.a,{exact:!0,path:"/login",component:f}),Object(u.jsx)(l.a,{exact:!0,path:"/register",component:v}),Object(u.jsx)(l.a,{exact:!0,path:"/dashboard",component:S}),Object(u.jsx)(l.a,{exact:!0,path:"/group/edit",component:I}),Object(u.jsx)(l.a,{exact:!0,path:"/group/message",component:E}),Object(u.jsx)(l.a,{component:R})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,342)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),o(e),r(e)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),D()}},[[341,1,2]]]);
//# sourceMappingURL=main.09ea7702.chunk.js.map