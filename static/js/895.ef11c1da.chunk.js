"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[895,907],{7907:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var r=a(9439),i=a(2791),t=a(9434),n=a(5705),o=a(6727),m=o.Ry().shape({email:o.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9._%+-]+@[a-zA-Z\u0430-\u044f\u0410-\u042f0-9.-]+\.[a-zA-Z\u0430-\u044f\u0410-\u042f]{2,}$/,"Invalid email format").required("Email is required"),password:o.Z_().trim().matches(/^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,"Invalid password format").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),l=a(1087),c=a(1),d="loginForm_formContainer__oo9nh",_="loginForm_formNav__+UHha",u="loginForm_register__T0KTt",h="loginForm_login__ov0uC",g="loginForm_inputContainer__o1zlG",p="loginForm_password__2FwjM",x="loginForm_passwordEye__MGAoG",j="loginForm_logInButton__xNZDc",w="loginForm_errmes__p36mi",N=a(6599),f=a(184),v=function(){var e=(0,t.I0)(),s=(0,i.useState)(!1),a=(0,r.Z)(s,2),o=a[0],v=a[1];return(0,f.jsx)(n.J9,{onSubmit:function(s,a){var r=a.resetForm;e((0,N.pH)(s)),r()},initialValues:{email:"",password:""},validationSchema:m,children:(0,f.jsxs)(n.l0,{className:d,children:[(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)(l.rU,{className:u,to:"register",underline:"none",children:"Registration"}),(0,f.jsx)(l.rU,{className:h,to:"login",underline:"none",children:"Log In"})]}),(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)(n.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,f.jsx)(n.Bc,{className:w,name:"email",component:"div"}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)(n.gN,{name:"password",type:o?"text":"password",placeholder:"Confirm a password"}),(0,f.jsx)(n.Bc,{className:w,name:"password",component:"div"}),(0,f.jsx)("span",{className:x,onClick:function(){v(!o)},children:o?(0,f.jsx)(c.Z,{id:"eye-off",width:"18",height:"18"}):(0,f.jsx)(c.Z,{id:"eye",width:"18",height:"18"})})]})]}),(0,f.jsx)("button",{className:j,type:"submit",children:"Log In Now"})]})})}},5895:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var r=a(7689),i=a(9439),t=a(2791),n=a(9434),o=a(5705),m=a(6727),l=m.Ry().shape({name:m.Z_().trim().min(2,"Name must be at least 2 characters").max(15,"Name must be at most 15 characters").required("Name is required"),email:m.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9._%+-]+@[a-zA-Z\u0430-\u044f\u0410-\u042f0-9.-]+\.[a-zA-Z\u0430-\u044f\u0410-\u042f]{2,}$/,"Invalid email format").required("Email is required"),password:m.Z_().trim().matches(/^[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\]^_`{|}~]+$/,"Invalid password format").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),c=a(1087),d=a(1),_="registerForm_formContainer__qazKf",u="registerForm_formNav__r5N+g",h="registerForm_register__-qbHt",g="registerForm_login__F0xNw",p="registerForm_inputContainer__fgvAe",x="registerForm_password__M74nK",j="registerForm_passwordEye__q-RMR",w="registerForm_registerButton__eA4sZ",N="registerForm_errmes__bbQBu",f=a(6599),v=a(184),F=function(){var e=(0,t.useState)(!1),s=(0,i.Z)(e,2),a=s[0],r=s[1],m=(0,n.I0)();return(0,v.jsx)(o.J9,{onSubmit:function(e,s){var a=s.resetForm;m((0,f.a$)(e)),a()},initialValues:{name:"",email:"",password:""},validationSchema:l,children:(0,v.jsxs)(o.l0,{className:_,children:[(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)(c.rU,{className:h,to:"register",underline:"none",children:"Registration"}),(0,v.jsx)(c.rU,{className:g,to:"login",underline:"none",children:"Log In"})]}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)(o.gN,{name:"name",type:"text",placeholder:"Enter your name"}),(0,v.jsx)(o.Bc,{className:N,name:"name",component:"p"}),(0,v.jsx)(o.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,v.jsx)(o.Bc,{className:N,name:"email",component:"div"}),(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)(o.gN,{name:"password",type:a?"text":"password",placeholder:"Create a password"}),(0,v.jsx)(o.Bc,{className:N,name:"password",component:"div"}),(0,v.jsx)("span",{className:j,onClick:function(){r(!a)},children:a?(0,v.jsx)(d.Z,{id:"eye-off",width:"18",height:"18"}):(0,v.jsx)(d.Z,{id:"eye",width:"18",height:"18"})})]})]}),(0,v.jsx)("button",{className:w,type:"submit",children:"Register Now"})]})})},Z=a(7907),y="auth_welcomeBackground__l057L",b=function(){var e=(0,r.UO)().id;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:y,children:["register"===e&&(0,v.jsx)(F,{}),"login"===e&&(0,v.jsx)(Z.default,{})]})})}}}]);
//# sourceMappingURL=895.ef11c1da.chunk.js.map