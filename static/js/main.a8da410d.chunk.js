(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),s=n.n(c),i=n(15),o=n(107),l=(n(140),n(150),o.a.initializeApp({apiKey:"AIzaSyANnLNgmvdFz6kAfhz4PsSZ5JSFdreoi8U",authDomain:"task-manager-88105.firebaseapp.com",projectId:"task-manager-88105",storageBucket:"task-manager-88105.appspot.com",messagingSenderId:"723819818391",appId:"1:723819818391:web:4f294ffe65c331b284e8d2"})),u=l.auth(),d=l,j=n(3),b=a.a.createContext();function p(){return Object(r.useContext)(b)}function O(e){var t=e.children,n=Object(r.useState)(),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!0),l=Object(i.a)(o,2),d=l[0],p=l[1];Object(r.useEffect)((function(){return u.onAuthStateChanged((function(e){s(e),p(!1)}))}),[]);var O={currentUser:c,login:function(e,t){return u.signInWithEmailAndPassword(e,t)},signup:function(e,t){return u.createUserWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},resetPassword:function(e){return u.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(j.jsx)(b.Provider,{value:O,children:!d&&t})}var h=n(30),x=n(19),f=n(54),m=n(118),v=["component"];function g(e){var t=e.component,n=Object(m.a)(e,v),r=p().currentUser;return Object(j.jsx)(x.b,Object(f.a)(Object(f.a)({},n),{},{render:function(e){return r?Object(j.jsx)(t,Object(f.a)({},e)):Object(j.jsx)(x.a,{to:"/task-tracker/signin"})}}))}var k,w,y,S,C=n(187),P=n(203),E=n(190),R=n(205),D=n(189),F=n(50),W=n.n(F),A=n(84),T=n(186),L=n(16),U=n(17),I=n(208),N=n(183),q=U.a.form(k||(k=Object(L.a)(["\n  width: 100%;\n  margin-top: 2vh;\n"]))),z=Object(U.a)(N.a)(w||(w=Object(L.a)(["\n    &&& {\n    margin : 2vh 0;\n    }\n"]))),B=Object(U.a)(I.a)(y||(y=Object(L.a)(["\n&&& {\n    margin : 1vh;\n    background-color : #f50057;\n}\n"]))),M=U.a.div(S||(S=Object(L.a)(["\n  margin-top: 8vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));function J(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),a=p(),c=a.currentUser,s=a.updatePassword,o=a.updateEmail,l=Object(r.useState)(""),u=Object(i.a)(l,2),d=u[0],b=u[1],O=Object(r.useState)(!1),f=Object(i.a)(O,2),m=f[0],v=f[1],g=Object(x.g)();return Object(j.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(M,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(A.a,{component:"h1",variant:"h5",children:"Update Profile"}),d&&Object(j.jsxs)(R.a,{severity:"error",children:[Object(j.jsx)(D.a,{children:"Error"}),d]}),Object(j.jsxs)(q,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==n.current.value)return b("Passwords do not match");var a=[];v(!0),b(""),e.current.value!==c.email&&a.push(o(e.current.value)),t.current.value&&a.push(s(t.current.value)),Promise.all(a).then((function(){g.push("/task-tracker")})).catch((function(){b("Failed to update profile")})).finally((function(){v(!1)}))},children:[Object(j.jsxs)(E.a,{container:!0,spacing:2,children:[Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e,defaultValue:c.email})}),Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t,placeholder:"leave blank to keep same"})}),Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n,placeholder:"leave blank to keep same"})})]}),Object(j.jsx)(z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:m,children:"Update"}),Object(j.jsx)(E.a,{container:!0,justifyContent:"flex-end",children:Object(j.jsx)(E.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker",variant:"body2",children:"Cancel"})})})]})]})]})}var K=n(13),V=n.n(K),Y=n(25),Z=n(191),G=n(188),H=n(192),Q=n(193);function X(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=p().login,a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),d=u[0],b=u[1],O=Object(r.useState)(!1),f=Object(i.a)(O,2),m=f[0],v=f[1],g=Object(x.g)();function k(){return(k=Object(Y.a)(V.a.mark((function r(a){return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,o(""),b(!0),r.next=6,n(e.current.value,t.current.value);case 6:g.push("/task-tracker"),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),o("Failed to log in");case 13:b(!1);case 14:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(M,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign in"}),s&&Object(j.jsxs)(R.a,{severity:"error",children:[Object(j.jsx)(D.a,{children:"Error"}),s]}),Object(j.jsxs)(q,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(j.jsx)(P.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(j.jsx)(P.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:m?"text":"password",id:"password",autoComplete:"current-password",inputRef:t,InputProps:{endAdornment:Object(j.jsx)(Z.a,{position:"end",children:Object(j.jsx)(G.a,{"aria-label":"toggle password visibility",onClick:function(){return v(!m)},onMouseDown:function(){return v(!m)},children:m?Object(j.jsx)(H.a,{}):Object(j.jsx)(Q.a,{})})})}}),Object(j.jsx)(z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:d,children:"Sign In"}),Object(j.jsxs)(E.a,{container:!0,children:[Object(j.jsx)(E.a,{item:!0,xs:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/forgot-password",variant:"body2",children:"Forgot password?"})}),Object(j.jsx)(E.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}function $(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),a=p().signup,c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(r.useState)(!1),d=Object(i.a)(u,2),b=d[0],O=d[1],f=Object(x.g)();function m(){return(m=Object(Y.a)(V.a.mark((function r(c){return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){r.next=3;break}return r.abrupt("return",l("Passwords do not match"));case 3:return r.prev=3,l(""),O(!0),r.next=8,a(e.current.value,t.current.value);case 8:f.push("/task-tracker"),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(3),console.log(r.t0),l("Failed to create an account");case 15:O(!1);case 16:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(j.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(M,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign up"}),o&&Object(j.jsxs)(R.a,{severity:"error",children:[Object(j.jsx)(D.a,{children:"Error"}),o]}),Object(j.jsxs)(q,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(j.jsxs)(E.a,{container:!0,spacing:2,children:[Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e})}),Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t})}),Object(j.jsx)(E.a,{item:!0,xs:12,children:Object(j.jsx)(P.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n})})]}),Object(j.jsx)(z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:b,children:"Sign Up"}),Object(j.jsx)(E.a,{container:!0,justifyContent:"flex-end",children:Object(j.jsx)(E.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}function _(){var e=Object(r.useRef)(),t=p().resetPassword,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),u=l[0],d=l[1],b=Object(r.useState)(""),O=Object(i.a)(b,2),x=O[0],f=O[1];function m(){return(m=Object(Y.a)(V.a.mark((function n(r){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,f(""),s(""),d(!0),n.next=7,t(e.current.value);case 7:f("check your inbox for further instructions"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),s("Failed to reset Password");case 14:d(!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(j.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(C.a,{}),Object(j.jsxs)(M,{children:[Object(j.jsx)(B,{children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(A.a,{component:"h1",variant:"h5",children:"Reset Password"}),c&&Object(j.jsxs)(R.a,{severity:"error",children:[Object(j.jsx)(D.a,{children:"Error"}),c]}),x&&Object(j.jsxs)(R.a,{severity:"success",children:[Object(j.jsx)(D.a,{children:"Success"}),x]}),Object(j.jsxs)(q,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(j.jsx)(P.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(j.jsx)(z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:u,children:"Reset Password"}),Object(j.jsxs)(E.a,{container:!0,children:[Object(j.jsx)(E.a,{item:!0,xs:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signin",variant:"body2",children:"Sign In"})}),Object(j.jsx)(E.a,{item:!0,children:Object(j.jsx)(h.b,{to:"/task-tracker/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}var ee,te,ne,re=n(195),ae=n(117),ce=n(210),se=n(114),ie=n.n(se),oe=n(194),le=Object(U.a)(A.a)(ee||(ee=Object(L.a)(["\n  flex-grow : 1;\n"]))),ue=U.a.p(te||(te=Object(L.a)(["\n    padding: 4%;\n"]))),de=Object(U.a)(oe.a)(ne||(ne=Object(L.a)(["\n    background: #b80751;\n"])));function je(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],u=p(),d=u.currentUser,b=u.logout,O=Object(x.g)();function f(){return(f=Object(Y.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.prev=1,e.next=4,b();case 4:O.pushState("/task-tracker/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)(C.a,{}),Object(j.jsx)(de,{position:"fixed",children:Object(j.jsxs)(re.a,{children:[Object(j.jsx)(le,{align:"center",variant:"h6",color:"inherit",children:"Task Tracker"}),Object(j.jsx)(G.a,{"area-haspopup":"true",color:"inherit",onClick:function(e){a(e.currentTarget)},children:Object(j.jsx)(ie.a,{})}),Object(j.jsxs)(ae.a,{id:"menu-appbar","aria-controls":"fade-menu",keepMounted:!0,anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:function(){a(null)},children:[Object(j.jsxs)(ue,{children:["Email : ",Object(j.jsxs)("strong",{children:[" ",d.email," "]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(ce.a,{component:h.b,to:"/task-tracker/update-profile",children:"Update Profile"}),Object(j.jsx)(ce.a,{onClick:function(){return f.apply(this,arguments)},children:"Log Out"})]})]})}),o&&Object(j.jsxs)(R.a,{severity:"error",children:[Object(j.jsx)(D.a,{children:"Error"}),o]})]})}var be,pe,Oe,he,xe,fe,me,ve,ge,ke,we,ye,Se,Ce,Pe,Ee=n(116),Re=n(115),De=n(22),Fe=n(201),We=n(196),Ae=n(204),Te=U.a.div(be||(be=Object(L.a)(["\n width:70%;\n margin: 0 auto;\n color: #fff; \n"]))),Le=n(6),Ue=Object(Le.a)({root:{color:"#FFFFFF"}})(A.a);function Ie(e){return Object(j.jsxs)(Ae.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(Ae.a,{width:"100%",mr:1,children:Object(j.jsx)(We.a,Object(f.a)({variant:"determinate"},e))}),Object(j.jsx)(Ae.a,{minWidth:35,children:Object(j.jsx)(Ue,{variant:"body2",children:"".concat(Math.round(e.value),"%")})})]})}function Ne(e){return Object(j.jsx)(Te,{children:Object(j.jsx)(Ie,{value:e.value})})}var qe=Object(U.a)(P.a)(pe||(pe=Object(L.a)(["\n    width: 40vw;\n"]))),ze=U.a.div(Oe||(Oe=Object(L.a)(["\n    display: grid;\n    grid-template-columns: repeat(2,auto);\n    margin-top: 15vh;\n    grid-gap : 2vw;\n    justify-content: center;\n    align-items: center;\n"]))),Be=Object(U.a)(N.a)(he||(he=Object(L.a)(["\n    margin-left : 2vw;\n    grid-column: 1/3;\n"]))),Me=U.a.h2(xe||(xe=Object(L.a)(["\n     color: #3f51b5;\n    text-align: center;\n    margin-top: 10vh;\n"]))),Je=U.a.table(fe||(fe=Object(L.a)(["\n    margin: 5vh auto;\n    border-collapse: collapse;\n    color: #3f51b5;\n    /* table-layout: fixed;\n    width: 100%; */\n"]))),Ke=U.a.thead(me||(me=Object(L.a)(["\n    border-bottom: solid 2px;\n"]))),Ve=U.a.tr(ve||(ve=Object(L.a)(["\n    border-bottom: solid 1px;\n"]))),Ye=U.a.div(ge||(ge=Object(L.a)(["\n    max-width: 50vw;\n    word-wrap: break-word;\n"]))),Ze=Object(U.a)(N.a)(ke||(ke=Object(L.a)(["\n      margin: 0 1vw;\n"]))),Ge=U.a.div(we||(we=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),He=U.a.div(ye||(ye=Object(L.a)(["\ndisplay: flex;\nflex-direction: column;\ncolor : #50C878;\n"]))),Qe=U.a.footer(Se||(Se=Object(L.a)(["\n   background-color: #b80751;\n   color: #fff;\n   display: grid;\n   padding: 2vw;\n   grid-template-columns: 60vw 30vw;\n    align-items: center;\n \n"]))),Xe=(U.a.div(Ce||(Ce=Object(L.a)(["\n/* display: flex;\nflex-direction: column; */\n"]))),U.a.div(Pe||(Pe=Object(L.a)(["\nflex: 1 0 auto;\n\n"])))),$e=n(68),_e=n.n($e),et=n(207),tt=n(198),nt=n(197),rt=n(200),at=n(199);function ct(){var e=d.firestore().collection("users"),t=function(){var t=Object(Y.a)(V.a.mark((function t(){var n,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).collection("tasks").orderBy("id").get();case 2:return n=t.sent,r=n.docs.map((function(e){return Object(f.a)({id:e.id},e.data())})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(Y.a)(V.a.mark((function t(){var n,r,a,c,s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).get();case 2:return n=t.sent,r=n.data(),a=r.level,c=r.progress,s=r.totalTasks,console.log(a,c,s),t.abrupt("return",{prevLev:a,prevProgress:c,prevTotalTasks:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=function(){var e=Object(Y.a)(V.a.mark((function e(){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,O(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(Y.a)(V.a.mark((function e(){var t,r,a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,r=t.prevLev,a=t.prevProgress,c=t.prevTotalTasks,U(c),E(r),y(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),e()}),[]);var a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),b=u[0],O=u[1],h=Object(r.useState)(_e()().format("LLLL")),x=Object(i.a)(h,2),m=x[0],v=x[1],g=Object(r.useState)(0),k=Object(i.a)(g,2),w=k[0],y=k[1],S=Object(r.useState)(0),C=Object(i.a)(S,2),P=C[0],E=C[1],R=Object(r.useState)(!1),D=Object(i.a)(R,2),F=D[0],W=D[1],A=Object(r.useState)(0),T=Object(i.a)(A,2),L=T[0],U=T[1],I=p().currentUser,q=function(){var t=Object(Y.a)(V.a.mark((function t(){var n,r,a,c,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.next=3,e.get();case 3:if(t.sent.docs.forEach((function(e){e.id===I.uid&&(n=!0)})),!n){t.next=13;break}return a=e.doc(I.uid).collection("tasks"),t.next=9,a.orderBy("id","desc").limit(1).get();case 9:c=t.sent,r=c.docs[0]?c.docs[0].data().id+1:1,t.next=16;break;case 13:return t.next=15,e.doc(I.uid).set({level:0,progress:0,totalTasks:0});case 15:r=1;case 16:return i={id:r,taskName:s,isDone:!1,schedule:m.toString()},t.next=19,e.doc(I.uid).collection("tasks").doc().set(i);case 19:O([].concat(Object(Ee.a)(b),[i])),o("");case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(Y.a)(V.a.mark((function t(n){var r,a,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).collection("tasks").where("id","==",n).get();case 2:return t.sent.docs[0].ref.update({isDone:!0}),r=P,a=w,80===w?(E((function(e){return r=e+1})),y(0),a=0):y((function(e){return a=e+20})),U((function(e){return c=e+1})),t.next=9,e.doc(I.uid).update({level:r,progress:a,totalTasks:c});case 9:U(c),O(b.map((function(e){return e.id===n&&(e.isDone=!0),e})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(Y.a)(V.a.mark((function t(n){var r,a,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).collection("tasks").where("id","==",n).get();case 2:return t.sent.docs[0].ref.update({isDone:!1}),r=P,a=w,0===w?E((function(e){return 1===e?(r=0,a=80,y(80),r):0===e&&20===w||0===e&&0===w?(r=0,a=0,y(0),r):(r=e-1,a=80,y(80),r)})):y((function(e){return a=e-20})),U((function(e){return c=e<=0?0:e-1})),t.next=9,e.doc(I.uid).update({level:r,progress:a,totalTasks:c});case 9:U(c),O(b.map((function(e){return e.id===n&&(e.isDone=!1),e})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(Y.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).collection("tasks").where("id","==",n).get();case 2:return t.next=4,t.sent.docs[0].ref.delete();case 4:O(b.filter((function(e){return e.id!==n})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){W(!1)},K=function(){var t=Object(Y.a)(V.a.mark((function t(){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(I.uid).update({level:0,progress:0,totalTasks:0});case 2:U(0),E(0),y(0),W(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(Xe,{children:[Object(j.jsxs)(ze,{children:[Object(j.jsx)(qe,{label:"Enter task here",variant:"filled",value:s,onChange:function(e){o(e.target.value)}}),Object(j.jsx)(De.a,{utils:Re.a,children:Object(j.jsx)(Fe.a,{label:"Schedule",inputVariant:"outlined",value:m,onChange:function(e){v(_e()(e).format("LLLL"))}})}),Object(j.jsx)(Be,{variant:"contained",color:"primary",onClick:q,disabled:""===s,children:"ADD"})]}),b.length>0?Object(j.jsxs)(Je,{children:[Object(j.jsx)(Ke,{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Task"}),Object(j.jsx)("th",{children:"Action"})]})}),b.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)(Ve,{children:[Object(j.jsx)("td",{children:Object(j.jsx)(Ye,{children:e.isDone?Object(j.jsxs)(He,{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("s",{children:e.taskName})}),Object(j.jsx)("p",{children:Object(j.jsx)("s",{children:e.schedule})})]}):Object(j.jsxs)(Ge,{children:[Object(j.jsx)("h3",{children:e.taskName}),Object(j.jsx)("p",{children:e.schedule})]})})}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[e.isDone?Object(j.jsx)(Ze,{variant:"outlined",color:"default",size:"small",onClick:function(){return B(e.id)},children:"UNDONE"}):Object(j.jsx)(Ze,{variant:"outlined",color:"default",size:"small",onClick:function(){return z(e.id)},children:"DONE"}),Object(j.jsx)(Ze,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return M(e.id)},children:"DELETE"})]})})]})},e.id)}))]}):Object(j.jsx)(Me,{children:" NO TASKS TO DO "})]}),Object(j.jsxs)(Qe,{children:[Object(j.jsxs)("h3",{style:{textAlign:"center"},children:["Level ",P]}),Object(j.jsxs)("h3",{children:["Total Tasks Completed : ",L]}),Object(j.jsx)(Ne,{value:w}),Object(j.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){W(!0)},children:"Reset Stats"})]}),Object(j.jsxs)(et.a,{open:F,onClose:J,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(j.jsx)(at.a,{id:"alert-dialog-title",children:"Reset Level"}),Object(j.jsx)(nt.a,{children:Object(j.jsx)(rt.a,{id:"alert-dialog-description",children:"Are you sure ? this will reset your levels and total tasks done"})}),Object(j.jsxs)(tt.a,{children:[Object(j.jsx)(N.a,{onClick:J,color:"primary",children:"No"}),Object(j.jsx)(N.a,{onClick:K,color:"secondary",children:"Yes"})]})]})]})}function st(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(je,{}),Object(j.jsx)(ct,{})]})}var it=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(O,{children:Object(j.jsxs)(x.d,{children:[Object(j.jsx)(g,{exact:!0,path:"/task-tracker",component:st}),Object(j.jsx)(g,{path:"/task-tracker/update-profile",component:J}),Object(j.jsx)(x.b,{path:"/task-tracker/signup",component:$}),Object(j.jsx)(x.b,{path:"/task-tracker/signin",component:X}),Object(j.jsx)(x.b,{path:"/task-tracker/forgot-password",component:_})]})})})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(it,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.a8da410d.chunk.js.map