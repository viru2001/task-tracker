(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),s=n.n(c),i=n(21),o=n(112),u=(n(142),o.a.initializeApp({apiKey:"AIzaSyANnLNgmvdFz6kAfhz4PsSZ5JSFdreoi8U",authDomain:"task-manager-88105.firebaseapp.com",projectId:"task-manager-88105",storageBucket:"task-manager-88105.appspot.com",messagingSenderId:"723819818391",appId:"1:723819818391:web:4f294ffe65c331b284e8d2"})),l=u.auth(),d=u,j=n(4),b=a.a.createContext();function O(){return Object(r.useContext)(b)}function p(e){var t=e.children,n=Object(r.useState)(),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!0),u=Object(i.a)(o,2),d=u[0],O=u[1];Object(r.useEffect)((function(){return l.onAuthStateChanged((function(e){s(e),O(!1)}))}),[]);var p={currentUser:c,login:function(e,t){return l.signInWithEmailAndPassword(e,t)},signup:function(e,t){return l.createUserWithEmailAndPassword(e,t)},logout:function(){return l.signOut()},resetPassword:function(e){return l.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(j.jsx)(b.Provider,{value:p,children:!d&&t})}var h=n(33),x=n(19),f=n(63),m=n(115),v=["component"];function g(e){var t=e.component,n=Object(m.a)(e,v),r=O().currentUser;return Object(j.jsx)(x.b,Object(f.a)(Object(f.a)({},n),{},{render:function(e){return r?Object(j.jsx)(t,Object(f.a)({},e)):Object(j.jsx)(x.a,{to:"/task-tracker/signin"})}}))}var k,w,y,S,C=n(186),E=n(197),P=n(189),D=n(198),R=n(188),W=n(49),A=n.n(W),F=n(119),U=n(185),L=n(23),q=n(24),z=n(200),I=n(181),N=q.a.form(k||(k=Object(L.a)(["\n  width: 100%;\n  margin-top: 2vh;\n"]))),T=Object(q.a)(I.a)(w||(w=Object(L.a)(["\n    &&& {\n    margin : 2vh 0;\n    }\n"]))),B=Object(q.a)(z.a)(y||(y=Object(L.a)(["\n&&& {\n    margin : 1vh;\n    background-color : #f50057;\n}\n"]))),J=q.a.div(S||(S=Object(L.a)(["\n  margin-top: 8vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));function M(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),a=O(),c=a.currentUser,s=a.updatePassword,o=a.updateEmail,u=Object(r.useState)(""),l=Object(i.a)(u,2),d=l[0],b=l[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),m=f[0],v=f[1],g=Object(x.g)();return Object(j.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(J,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(A.a,{})}),Object(j.jsx)(F.a,{component:"h1",variant:"h5",children:"Update Profile"}),d&&Object(j.jsxs)(D.a,{severity:"error",children:[Object(j.jsx)(R.a,{children:"Error"}),d]}),Object(j.jsxs)(N,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==n.current.value)return b("Passwords do not match");var a=[];v(!0),b(""),e.current.value!==c.email&&a.push(o(e.current.value)),t.current.value&&a.push(s(t.current.value)),Promise.all(a).then((function(){g.push("/task-tracker")})).catch((function(){b("Failed to update profile")})).finally((function(){v(!1)}))},children:[Object(j.jsxs)(P.a,{container:!0,spacing:2,children:[Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e,defaultValue:c.email})}),Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t,placeholder:"leave blank to keep same"})}),Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n,placeholder:"leave blank to keep same"})})]}),Object(j.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:m,children:"Update"}),Object(j.jsx)(P.a,{container:!0,justifyContent:"flex-end",children:Object(j.jsx)(P.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker",variant:"body2",children:"Cancel"})})})]})]})]})}var K=n(18),V=n.n(K),Z=n(32),G=n(190),H=n(187),Q=n(191),X=n(192);function Y(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=O().login,a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],u=Object(r.useState)(!1),l=Object(i.a)(u,2),d=l[0],b=l[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),m=f[0],v=f[1],g=Object(x.g)();function k(){return(k=Object(Z.a)(V.a.mark((function r(a){return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,o(""),b(!0),r.next=6,n(e.current.value,t.current.value);case 6:g.push("/task-tracker"),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),o("Failed to log in");case 13:b(!1);case 14:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(J,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(A.a,{})}),Object(j.jsx)(F.a,{component:"h1",variant:"h5",children:"Sign in"}),s&&Object(j.jsxs)(D.a,{severity:"error",children:[Object(j.jsx)(R.a,{children:"Error"}),s]}),Object(j.jsxs)(N,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(j.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(j.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:m?"text":"password",id:"password",autoComplete:"current-password",inputRef:t,InputProps:{endAdornment:Object(j.jsx)(G.a,{position:"end",children:Object(j.jsx)(H.a,{"aria-label":"toggle password visibility",onClick:function(){return v(!m)},onMouseDown:function(){return v(!m)},children:m?Object(j.jsx)(Q.a,{}):Object(j.jsx)(X.a,{})})})}}),Object(j.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:d,children:"Sign In"}),Object(j.jsxs)(P.a,{container:!0,children:[Object(j.jsx)(P.a,{item:!0,xs:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/forgot-password",variant:"body2",children:"Forgot password?"})}),Object(j.jsx)(P.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}function $(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),a=O().signup,c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(r.useState)(!1),d=Object(i.a)(l,2),b=d[0],p=d[1],f=Object(x.g)();function m(){return(m=Object(Z.a)(V.a.mark((function r(c){return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){r.next=3;break}return r.abrupt("return",u("Passwords do not match"));case 3:return r.prev=3,u(""),p(!0),r.next=8,a(e.current.value,t.current.value);case 8:f.push("/task-tracker"),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(3),console.log(r.t0),u("Failed to create an account");case 15:p(!1);case 16:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(j.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(J,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(A.a,{})}),Object(j.jsx)(F.a,{component:"h1",variant:"h5",children:"Sign up"}),o&&Object(j.jsxs)(D.a,{severity:"error",children:[Object(j.jsx)(R.a,{children:"Error"}),o]}),Object(j.jsxs)(N,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(j.jsxs)(P.a,{container:!0,spacing:2,children:[Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e})}),Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t})}),Object(j.jsx)(P.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n})})]}),Object(j.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:b,children:"Sign Up"}),Object(j.jsx)(P.a,{container:!0,justifyContent:"flex-end",children:Object(j.jsx)(P.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}function _(){var e=Object(r.useRef)(),t=O().resetPassword,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),l=u[0],d=u[1],b=Object(r.useState)(""),p=Object(i.a)(b,2),x=p[0],f=p[1];function m(){return(m=Object(Z.a)(V.a.mark((function n(r){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,f(""),s(""),d(!0),n.next=7,t(e.current.value);case 7:f("check your inbox for further instructions"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),s("Failed to reset Password");case 14:d(!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(j.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(J,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(A.a,{})}),Object(j.jsx)(F.a,{component:"h1",variant:"h5",children:"Reset Password"}),c&&Object(j.jsxs)(D.a,{severity:"error",children:[Object(j.jsx)(R.a,{children:"Error"}),c]}),x&&Object(j.jsxs)(D.a,{severity:"success",children:[Object(j.jsx)(R.a,{children:"Success"}),x]}),Object(j.jsxs)(N,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(j.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(j.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:l,children:"Reset Password"}),Object(j.jsxs)(P.a,{container:!0,children:[Object(j.jsx)(P.a,{item:!0,xs:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signin",variant:"body2",children:"Sign In"})}),Object(j.jsx)(P.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}var ee,te,ne,re=n(194),ae=n(114),ce=n(202),se=n(110),ie=n.n(se),oe=n(193),ue=Object(q.a)(F.a)(ee||(ee=Object(L.a)(["\n  flex-grow : 1;\n"]))),le=q.a.p(te||(te=Object(L.a)(["\n    padding: 4%;\n"]))),de=Object(q.a)(oe.a)(ne||(ne=Object(L.a)(["\n    background: #b80751;\n"])));function je(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=O(),d=l.currentUser,b=l.logout,p=Object(x.g)();function f(){return(f=Object(Z.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.prev=1,e.next=4,b();case 4:p.pushState("/task-tracker/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)(C.a,{}),Object(j.jsx)(de,{position:"fixed",children:Object(j.jsxs)(re.a,{children:[Object(j.jsx)(ue,{align:"center",variant:"h6",color:"inherit",children:"Task Tracker"}),Object(j.jsx)(H.a,{"area-haspopup":"true",color:"inherit",onClick:function(e){a(e.currentTarget)},children:Object(j.jsx)(ie.a,{})}),Object(j.jsxs)(ae.a,{id:"menu-appbar","aria-controls":"fade-menu",keepMounted:!0,anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:function(){a(null)},children:[Object(j.jsxs)(le,{children:["Email : ",Object(j.jsxs)("strong",{children:[" ",d.email," "]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(ce.a,{component:h.b,to:"task-tracker/update-profile",children:"Update Profile"}),Object(j.jsx)(ce.a,{onClick:function(){return f.apply(this,arguments)},children:"Log Out"})]})]})}),o&&Object(j.jsxs)(D.a,{severity:"error",children:[Object(j.jsx)(R.a,{children:"Error"}),o]})]})}var be,Oe,pe,he,xe,fe,me,ve,ge,ke,we,ye=n(113),Se=n(111),Ce=n(25),Ee=n(195),Pe=Object(q.a)(E.a)(be||(be=Object(L.a)(["\n    width: 40vw;\n"]))),De=q.a.div(Oe||(Oe=Object(L.a)(["\n    display: grid;\n    grid-template-columns: repeat(2,auto);\n    margin-top: 15vh;\n    grid-gap : 2vw;\n    justify-content: center;\n    align-items: center;\n"]))),Re=Object(q.a)(I.a)(pe||(pe=Object(L.a)(["\n    margin-left : 2vw;\n    grid-column: 1/3;\n"]))),We=q.a.h2(he||(he=Object(L.a)(["\n     color: #3f51b5;\n    text-align: center;\n    margin-top: 10vh;\n"]))),Ae=q.a.table(xe||(xe=Object(L.a)(["\n    margin: 5vh auto;\n    border-collapse: collapse;\n    color: #3f51b5;\n    /* table-layout: fixed;\n    width: 100%; */\n"]))),Fe=q.a.thead(fe||(fe=Object(L.a)(["\n    border-bottom: solid 2px;\n"]))),Ue=q.a.tr(me||(me=Object(L.a)(["\n    border-bottom: solid 1px;\n"]))),Le=q.a.div(ve||(ve=Object(L.a)(["\n    max-width: 50vw;\n    word-wrap: break-word;\n"]))),qe=Object(q.a)(I.a)(ge||(ge=Object(L.a)(["\n      margin: 0 1vw;\n"]))),ze=q.a.div(ke||(ke=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),Ie=q.a.div(we||(we=Object(L.a)(["\ndisplay: flex;\nflex-direction: column;\ncolor : #50C878;\n"]))),Ne=n(68),Te=n.n(Ne);function Be(){var e=d.firestore().collection("users"),t=function(){var t=Object(Z.a)(V.a.mark((function t(){var n,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(v.uid).collection("tasks").get();case 2:return n=t.sent,r=n.docs.map((function(e){return Object(f.a)({id:e.id},e.data())})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){(function(){var e=Object(Z.a)(V.a.mark((function e(){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,b(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([]),u=Object(i.a)(o,2),l=u[0],b=u[1],p=Object(r.useState)(Te()().format("LLLL")),h=Object(i.a)(p,2),x=h[0],m=h[1],v=O().currentUser,g=function(){var t=Object(Z.a)(V.a.mark((function t(){var n,r,a,i,o;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.next=3,e.get();case 3:if(t.sent.docs.forEach((function(e){e.id===v.uid&&(n=!0)})),!n){t.next=13;break}return a=e.doc(v.uid).collection("tasks"),t.next=9,a.orderBy("id","desc").limit(1).get();case 9:i=t.sent,r=i.docs[0]?i.docs[0].data().id+1:1,t.next=16;break;case 13:return t.next=15,e.doc(v.uid).set({dummy:"dummy"});case 15:r=1;case 16:return o={id:r,taskName:c,isDone:!1,schedule:x.toString()},t.next=19,e.doc(v.uid).collection("tasks").doc().set(o);case 19:b([].concat(Object(ye.a)(l),[o])),s("");case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(Z.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(v.uid).collection("tasks").where("id","==",n).get();case 2:t.sent.docs[0].ref.update({isDone:!0}),b(l.map((function(e){return e.id===n&&(e.isDone=!0),e})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(Z.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(v.uid).collection("tasks").where("id","==",n).get();case 2:t.sent.docs[0].ref.update({isDone:!1}),b(l.map((function(e){return e.id===n&&(e.isDone=!1),e})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(Z.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(v.uid).collection("tasks").where("id","==",n).get();case 2:return t.next=4,t.sent.docs[0].ref.delete();case 4:b(l.filter((function(e){return e.id!==n})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(De,{children:[Object(j.jsx)(Pe,{label:"Enter task here",variant:"filled",value:c,onChange:function(e){s(e.target.value)}}),Object(j.jsx)(Ce.a,{utils:Se.a,children:Object(j.jsx)(Ee.a,{label:"Schedule",inputVariant:"outlined",value:x,onChange:function(e){m(Te()(e).format("LLLL"))}})}),Object(j.jsx)(Re,{variant:"contained",color:"primary",onClick:g,disabled:""===c,children:"ADD"})]}),l.length>0?Object(j.jsxs)(Ae,{children:[Object(j.jsx)(Fe,{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Task"}),Object(j.jsx)("th",{children:"Action"})]})}),l.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)(Ue,{children:[Object(j.jsx)("td",{children:Object(j.jsx)(Le,{children:e.isDone?Object(j.jsxs)(Ie,{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("s",{children:e.taskName})}),Object(j.jsx)("p",{children:Object(j.jsx)("s",{children:e.schedule})})]}):Object(j.jsxs)(ze,{children:[Object(j.jsx)("h3",{children:e.taskName}),Object(j.jsx)("p",{children:e.schedule})]})})}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[e.isDone?Object(j.jsx)(qe,{variant:"outlined",color:"default",size:"small",onClick:function(){return w(e.id)},children:"UNDONE"}):Object(j.jsx)(qe,{variant:"outlined",color:"default",size:"small",onClick:function(){return k(e.id)},children:"DONE"}),Object(j.jsx)(qe,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return y(e.id)},children:"DELETE"})]})})]})},e.id)}))]}):Object(j.jsx)(We,{children:" NO TASKS TO DO "})]})}function Je(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(je,{}),Object(j.jsx)(Be,{})]})}var Me=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(p,{children:Object(j.jsxs)(x.d,{children:[Object(j.jsx)(g,{exact:!0,path:"/task-tracker/",component:Je}),Object(j.jsx)(g,{exact:!0,path:"/task-tracker/update-profile",component:M}),Object(j.jsx)(x.b,{path:"/task-tracker/signup",component:$}),Object(j.jsx)(x.b,{path:"/task-tracker/signin",component:Y}),Object(j.jsx)(x.b,{path:"/task-tracker/forgot-password",component:_})]})})})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Me,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.400c8718.chunk.js.map