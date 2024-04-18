(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(44),n=a.n(s),l=(a(59),a(7)),r=(a(60),a(61),a(62),a(11)),o=a(0),i=function(e){var t=Object(c.useRef)();return Object(o.jsx)("header",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(r.b,{className:"navbar-brand",to:"/",children:"CRUD APP"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("form",{className:"d-flex",onChange:function(a){a.preventDefault();var c=t.current.value;e.parentCallback(c)},children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",ref:t}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})},d=a(9),j=a.n(d),b=a(16),m=a(46),u=a.n(m),x=a(33),p=a.n(x),h=a(34),O=a.n(h),f=Object(c.createContext)(""),g=Object(c.createContext)(""),v=Object(c.createContext)(""),w=function(e){var t=e.children,a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),d=Object(l.a)(i,2),j=d[0],b=d[1],m=Object(c.useState)(""),u=Object(l.a)(m,2),x=u[0],p=u[1];return Object(o.jsx)(f.Provider,{value:{udata:n,setUdata:r},children:Object(o.jsx)(g.Provider,{value:{updata:j,setUPdata:b},children:Object(o.jsx)(v.Provider,{value:{dltdata:x,setDLTdata:p},children:t})})})},y=function(e){e.myprop;var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useContext)(f),d=i.udata,m=(i.setUdata,Object(c.useContext)(g)),x=m.updata,h=(m.setUPdata,Object(c.useContext)(v)),w=h.dltdata,y=h.setDLTdata,N=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),422!==t.status&&a?(n(a),console.log("get data")):console.log("error ");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){N()}),[]);var C=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/deleteuser/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),422!==a.status&&c?(console.log("user deleted"),y(c),N()):console.log("error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[d?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:d.name}),"  added succesfully!",Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",x?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:x.name}),"  updated succesfully!",Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",w?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"alert alert-danger alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:w.name}),"  deleted succesfully!",Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"add_btn mt-2 mb-2",children:Object(o.jsx)(r.b,{to:"/register",className:"btn btn-primary",children:"Add data"})}),Object(o.jsxs)("table",{class:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"table-dark",children:[Object(o.jsx)("th",{scope:"col",children:"id"}),Object(o.jsx)("th",{scope:"col",children:"Username"}),Object(o.jsx)("th",{scope:"col",children:"Age"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Job"}),Object(o.jsx)("th",{scope:"col",children:"Number"}),Object(o.jsx)("th",{scope:"col"})]})}),Object(o.jsx)("tbody",{children:s.map((function(t,a){var c=e.myprop,s=t.name,n=t.age,l=t.work;t.mobile;if(c=c.toLowerCase(),console.log(c,"tr"),s&&n&&l&&(console.log(c+" jhbf ,"+s,s.indexOf(c)),s===c||!c||0===s.indexOf(c)||0===l.indexOf(c)||0===n.indexOf(c)))return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:a+1}),Object(o.jsx)("td",{children:t.name}),Object(o.jsx)("td",{children:t.age}),Object(o.jsx)("td",{children:t.email}),Object(o.jsx)("td",{children:t.work}),Object(o.jsx)("td",{children:t.mobile}),Object(o.jsxs)("td",{className:"d-flex justify-content-between",children:[Object(o.jsxs)(r.b,{to:"view/".concat(t._id),children:[" ",Object(o.jsx)("button",{className:"btn btn-success",children:Object(o.jsx)(u.a,{})})]}),Object(o.jsxs)(r.b,{to:"edit/".concat(t._id),children:["  ",Object(o.jsx)("button",{className:"btn btn-primary",children:Object(o.jsx)(p.a,{})})]}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return C(t._id)},children:Object(o.jsx)(O.a,{})})]})]})})}))})]})]})})]})},N=a(8),C=a(26),k=a(6),P=function(){var e=Object(c.useContext)(f),t=(e.udata,e.setUdata,Object(k.f)(),Object(c.useState)({name:"",email:"",age:"",mobile:"",work:"",add:"",desc:""})),a=Object(l.a)(t,2),s=a[0],n=a[1],i=function(e){console.log(e.target);var t=e.target,a=t.name,c=t.value;n((function(e){return console.log(s),Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},a,c))}))},d=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,n,l,r,o,i,d,b;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.name,c=s.email,n=s.work,l=s.add,r=s.mobile,o=s.desc,i=s.age,console.log(a,c),e.next=4,fetch("/register1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:c,work:n,add:l,mobile:r,desc:o,age:i})});case 4:return d=e.sent,e.next=7,d.json();case 7:b=e.sent,console.log(b);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(r.b,{to:"/",children:"home"}),Object(o.jsx)("form",{className:"mt-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Name"}),Object(o.jsx)("input",{type:"text",value:s.name,onChange:i,name:"name",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"email"}),Object(o.jsx)("input",{type:"email",value:s.email,onChange:i,name:"email",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"age"}),Object(o.jsx)("input",{type:"text",value:s.age,onChange:i,name:"age",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Mobile"}),Object(o.jsx)("input",{type:"number",value:s.mobile,onChange:i,name:"mobile",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Work"}),Object(o.jsx)("input",{type:"text",value:s.work,onChange:i,name:"work",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Address"}),Object(o.jsx)("input",{type:"text",value:s.add,onChange:i,name:"add",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-12 col-md-12 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Description"}),Object(o.jsx)("textarea",{name:"desc",value:s.desc,onChange:i,className:"form-control",id:"",cols:"30",rows:"5"})]}),Object(o.jsx)("button",{type:"submit",onClick:d,class:"btn btn-primary",children:"Submit"})]})})]})},I=function(){var e=Object(c.useContext)(g),t=(e.updata,e.setUPdata),a=Object(k.f)(""),s=Object(c.useState)({name:"",email:"",age:"",mobile:"",work:"",add:"",desc:""}),n=Object(l.a)(s,2),i=n[0],d=n[1],m=function(e){console.log(e.target.value);var t=e.target,a=t.name,c=t.value;d((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},a,c))}))},u=Object(k.g)("").id;console.log(u);var x=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getuser/".concat(u),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a,"getuser id"),console.log(a.age),422!==t.status&&a?(d(a),console.log("get data")):console.log("error ");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){x()}),[]);var p=function(){var e=Object(b.a)(j.a.mark((function e(c){var s,n,l,r,o,d,b,m,x;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=i.name,n=i.email,l=i.work,r=i.add,o=i.mobile,d=i.desc,b=i.age,e.next=4,fetch("/updateuser/".concat(u),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,work:l,add:r,mobile:o,desc:d,age:b})});case 4:return m=e.sent,e.next=7,m.json();case 7:x=e.sent,console.log(x),422!==m.status&&x?(a.push("/"),t(x)):alert("fill the data");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(r.b,{to:"/",children:"home2"}),Object(o.jsx)("form",{className:"mt-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Name"}),Object(o.jsx)("input",{type:"text",value:i.name,onChange:m,name:"name",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"email"}),Object(o.jsx)("input",{type:"email",value:i.email,onChange:m,name:"email",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"age"}),Object(o.jsx)("input",{type:"text",value:i.age,onChange:m,name:"age",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Mobile"}),Object(o.jsx)("input",{type:"number",value:i.mobile,onChange:m,name:"mobile",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Work"}),Object(o.jsx)("input",{type:"text",value:i.work,onChange:m,name:"work",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Address"}),Object(o.jsx)("input",{type:"text",value:i.add,onChange:m,name:"add",class:"form-control",id:"exampleInputPassword1"})]}),Object(o.jsxs)("div",{class:"mb-3 col-lg-12 col-md-12 col-12",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Description"}),Object(o.jsx)("textarea",{name:"desc",value:i.desc,onChange:m,className:"form-control",id:"",cols:"30",rows:"5"})]}),Object(o.jsx)("button",{type:"submit",onClick:p,class:"btn btn-primary",children:"Submit"})]})})]})},S=a(110),E=a(112),T=a(48),D=a.n(T),_=a(49),U=a.n(_),A=a(50),F=a.n(A),H=a(51),J=a.n(H),L=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1];console.log(a);var n=Object(k.g)("").id;console.log(n);var i=Object(k.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getuser/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),422!==t.status&&a?(s(a),console.log("get data")):console.log("error ");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);var m=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/deleteuser/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),422!==a.status&&c?(console.log("user deleted"),i.push("/")):console.log("error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container mt-3",children:[Object(o.jsx)("h1",{style:{fontWeight:400},children:"Welcome Harsh Pathak"}),Object(o.jsx)(S.a,{sx:{maxWidth:600},children:Object(o.jsxs)(E.a,{children:[Object(o.jsxs)("div",{className:"add_btn",children:[Object(o.jsxs)(r.b,{to:"/edit/".concat(a._id),children:["  ",Object(o.jsx)("button",{className:"btn btn-primary mx-2",children:Object(o.jsx)(p.a,{})})]}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return m(a._id)},children:Object(o.jsx)(O.a,{})})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"left_view col-lg-6 col-md-6 col-12",children:[Object(o.jsx)("img",{src:"/profile.png",style:{width:50},alt:"profile"}),Object(o.jsxs)("h3",{className:"mt-3",children:["Name: ",Object(o.jsx)("span",{children:a.name})]}),Object(o.jsxs)("h3",{className:"mt-3",children:["Age: ",Object(o.jsx)("span",{children:a.age})]}),Object(o.jsxs)("p",{className:"mt-3",children:[Object(o.jsx)(D.a,{}),"Email: ",Object(o.jsx)("span",{children:a.email})]}),Object(o.jsxs)("p",{className:"mt-3",children:[Object(o.jsx)(U.a,{}),"Occuption: ",Object(o.jsx)("span",{children:a.work})]})]}),Object(o.jsxs)("div",{className:"right_view  col-lg-6 col-md-6 col-12",children:[Object(o.jsxs)("p",{className:"mt-5",children:[Object(o.jsx)(F.a,{}),"mobile: ",Object(o.jsxs)("span",{children:["+91 ",a.mobile]})]}),Object(o.jsxs)("p",{className:"mt-3",children:[Object(o.jsx)(J.a,{}),"location: ",Object(o.jsx)("span",{children:a.add})]}),Object(o.jsxs)("p",{className:"mt-3",children:["Description: ",Object(o.jsx)("span",{children:a.desc})]})]})]})]})})]})},W=a(52),G=a.n(W);var M=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=(t[1],Object(c.useState)("")),n=Object(l.a)(s,2),r=n[0],d=n[1],j=G()({render:function(){return Object(o.jsx)(y,{myprop:r,mode:a})}});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{parentCallback:d}),Object(o.jsx)("script",{children:console.log(r)}),Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(k.a,{exact:!0,path:"/register",component:P}),Object(o.jsx)(k.a,{exact:!0,path:"/edit/:id",component:I}),Object(o.jsx)(k.a,{exact:!0,path:"/view/:id",component:L})]})]})};n.a.render(Object(o.jsx)(w,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(M,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.01b8d622.chunk.js.map