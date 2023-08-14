"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26,907],{7907:function(e,s,r){r.r(s),r.d(s,{default:function(){return P}});var a=r(5861),t=r(9439),n=r(4687),o=r.n(n),i=r(2791),c=r(9434),m=r(5705),l=r(9655),d=r(6727),u=d.Ry().shape({email:d.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9._%+-]+@[a-zA-Z\u0430-\u044f\u0410-\u042f0-9.-]+\.[a-zA-Z\u0430-\u044f\u0410-\u042f]{2,}$/,"Invalid email format").required("Email is required"),password:d.Z_().trim().matches(/^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,"Invalid password format").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),_=r(1087),h=r(1),p="loginForm_formContainer__oo9nh",g="loginForm_formNav__+UHha",x="loginForm_register__T0KTt",f="loginForm_forgetPass__GoPW9",w="loginForm_login__ov0uC",v="loginForm_inputContainer__o1zlG",j="loginForm_password__2FwjM",N="loginForm_passwordEye__MGAoG",y="loginForm_logInButton__xNZDc",Z="loginForm_errmes__p36mi",F=r(5733),b=r(184),P=function(){var e=(0,c.I0)(),s=(0,i.useState)(!1),r=(0,t.Z)(s,2),n=r[0],d=r[1],P=function(){var s=(0,a.Z)(o().mark((function s(r,a){var t,n,i;return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.resetForm,s.prev=1,s.next=4,e((0,F.pH)(r));case 4:n=s.sent,(i=n.payload)&&i.accessToken?t():l.Am.error("Incorrect email or password provided"),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(1),console.log(s.t0.message);case 12:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e,r){return s.apply(this,arguments)}}();return(0,b.jsx)(m.J9,{onSubmit:P,initialValues:{email:"",password:""},validationSchema:u,children:(0,b.jsxs)(m.l0,{className:p,children:[(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)(_.rU,{className:x,to:"register",underline:"none",children:"Registration"}),(0,b.jsx)(_.rU,{className:w,to:"login",underline:"none",children:"Log In"})]}),(0,b.jsxs)("div",{className:v,children:[(0,b.jsx)(m.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,b.jsx)(m.Bc,{className:Z,name:"email",component:"div"}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)(m.gN,{name:"password",type:n?"text":"password",placeholder:"Confirm a password"}),(0,b.jsx)(m.Bc,{className:Z,name:"password",component:"div"}),(0,b.jsx)("span",{className:N,onClick:function(){d(!n)},children:n?(0,b.jsx)(h.Z,{id:"eye-off",width:"18",height:"18"}):(0,b.jsx)(h.Z,{id:"eye",width:"18",height:"18"})})]})," ",(0,b.jsx)(_.rU,{className:f,to:"forgetPassword",children:"Forget password"})]}),(0,b.jsx)("button",{className:y,type:"submit",children:"Log In Now"})]})})}},9026:function(e,s,r){r.r(s),r.d(s,{default:function(){return V}});var a=r(7689),t=r(5861),n=r(9439),o=r(4687),i=r.n(o),c=r(2791),m=r(9434),l=r(5705),d=r(9655),u=r(6727),_=u.Ry().shape({name:u.Z_().trim().min(2,"Name must be at least 2 characters").max(15,"Name must be at most 15 characters").required("Name is required"),email:u.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9._%+-]+@[a-zA-Z\u0430-\u044f\u0410-\u042f0-9.-]+\.[a-zA-Z\u0430-\u044f\u0410-\u042f]{2,}$/,"Invalid email format").required("Email is required"),password:u.Z_().trim().matches(/^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,"Invalid password format").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),h=r(1087),p=r(1),g="registerForm_formContainer__qazKf",x="registerForm_formNav__r5N+g",f="registerForm_register__-qbHt",w="registerForm_login__F0xNw",v="registerForm_inputContainer__fgvAe",j="registerForm_password__M74nK",N="registerForm_passwordEye__q-RMR",y="registerForm_registerButton__eA4sZ",Z="registerForm_errmes__bbQBu",F=r(5733),b=r(184),P=function(){var e=(0,c.useState)(!1),s=(0,n.Z)(e,2),r=s[0],a=s[1],o=(0,m.I0)(),u=function(){var e=(0,t.Z)(i().mark((function e(s,r){var a,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.resetForm,e.prev=1,e.next=4,o((0,F.a$)(s));case 4:t=e.sent,t.payload.user?(d.Am.success("Welcome to Task Pro! Your registration was successful"),a()):d.Am.error("Oops! Something went wrong during registration. Please double-check your information and try again"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(s,r){return e.apply(this,arguments)}}();return(0,b.jsx)(l.J9,{onSubmit:u,initialValues:{name:"",email:"",password:""},validationSchema:_,children:(0,b.jsxs)(l.l0,{className:g,children:[(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)(h.rU,{className:f,to:"register",underline:"none",children:"Registration"}),(0,b.jsx)(h.rU,{className:w,to:"login",underline:"none",children:"Log In"})]}),(0,b.jsxs)("div",{className:v,children:[(0,b.jsx)(l.gN,{name:"name",type:"text",placeholder:"Enter your name"}),(0,b.jsx)(l.Bc,{className:Z,name:"name",component:"p"}),(0,b.jsx)(l.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,b.jsx)(l.Bc,{className:Z,name:"email",component:"div"}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)(l.gN,{name:"password",type:r?"text":"password",placeholder:"Create a password"}),(0,b.jsx)(l.Bc,{className:Z,name:"password",component:"div"}),(0,b.jsx)("span",{className:N,onClick:function(){a(!r)},children:r?(0,b.jsx)(p.Z,{id:"eye-off",width:"18",height:"18"}):(0,b.jsx)(p.Z,{id:"eye",width:"18",height:"18"})})]})]}),(0,b.jsx)("button",{className:y,type:"submit",children:"Register Now"})]})})},k=r(7907),A=u.Ry().shape({email:u.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9._%+-]+@[a-zA-Z\u0430-\u044f\u0410-\u042f0-9.-]+\.[a-zA-Z\u0430-\u044f\u0410-\u042f]{2,}$/,"Invalid email format").required("Email is required")}),I="forgetPass_formContainer__cDYnV",C="forgetPass_formNav__mZD3D",q="forgetPass_register__COWzd",z="forgetPass_login__xSfdd",S="forgetPass_inputContainer__7I+bv",B="forgetPass_logInButton__zJsNH",E="forgetPass_errmes__ZEMoa",R=function(){var e=(0,m.I0)(),s=function(){var s=(0,t.Z)(i().mark((function s(r,a){var t,n;return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.resetForm,s.prev=1,s.next=4,e((0,F.o9)(r));case 4:n=s.sent,n.payload.message?(d.Am.info("Password recovery: Check your email for instructions"),t()):d.Am.error("Invalid email address"),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(1),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e,r){return s.apply(this,arguments)}}();return(0,b.jsx)(l.J9,{onSubmit:s,initialValues:{email:""},validationSchema:A,children:(0,b.jsxs)(l.l0,{className:I,children:[(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)(h.OL,{className:q,to:"register",underline:"none",children:"Registration"}),(0,b.jsx)(h.OL,{className:z,to:"login",underline:"none",children:"Log In"})]}),(0,b.jsxs)("div",{className:S,children:[(0,b.jsx)(l.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,b.jsx)(l.Bc,{className:E,name:"email",component:"div"})]}),(0,b.jsx)("button",{className:B,type:"submit",children:"Send letter"})]})})},$="auth_welcomeBackground__l057L",L=u.Ry().shape({password:u.Z_().trim().matches(/^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,"Invalid password format").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),T="resetePassword_formContainer__iX8mw",U="resetePassword_inputContainer__xAKNN",G="resetePassword_password__F0raR",H="resetePassword_passwordEye__TcH-c",J="resetePassword_logInButton__98xNG",M="resetePassword_errmes__FGzA0",O=function(){var e=(0,h.lr)(),s=(0,n.Z)(e,1)[0].get("verificationToken"),r=(0,m.I0)(),o=(0,c.useState)(!1),d=(0,n.Z)(o,2),u=d[0],_=d[1],g=(0,c.useState)(!1),x=(0,n.Z)(g,2),f=x[0],w=x[1],v=function(){var e=(0,t.Z)(i().mark((function e(a,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.resetForm,r((0,F.c0)({user:a,verificationToken:s})),n(),_(!0);case 4:case"end":return e.stop()}}),e)})));return function(s,r){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[!s&&""===s&&(0,b.jsx)(a.Fg,{to:"/"}),u&&(0,b.jsx)(a.Fg,{to:"/"}),(0,b.jsx)(l.J9,{onSubmit:v,initialValues:{password:""},validationSchema:L,children:(0,b.jsxs)(l.l0,{className:T,children:[(0,b.jsx)("div",{className:U,children:(0,b.jsxs)("div",{className:G,children:[(0,b.jsx)(l.gN,{name:"password",type:f?"text":"password",placeholder:"Confirm a password"}),(0,b.jsx)(l.Bc,{className:M,name:"password",component:"div"}),(0,b.jsx)("span",{className:H,onClick:function(){w(!f)},children:f?(0,b.jsx)(p.Z,{id:"eye-off",width:"18",height:"18"}):(0,b.jsx)(p.Z,{id:"eye",width:"18",height:"18"})})]})}),(0,b.jsx)("button",{className:J,type:"submit",children:"Log In Now"})]})})]})},V=function(){var e=(0,a.UO)().id;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:$,children:["register"===e&&(0,b.jsx)(P,{}),"login"===e&&(0,b.jsx)(k.default,{}),"forgetPassword"===e&&(0,b.jsx)(R,{}),"resetePassword"===e&&(0,b.jsx)(O,{})]})})}}}]);
//# sourceMappingURL=26.117e8a2e.chunk.js.map