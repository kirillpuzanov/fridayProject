(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{11:function(e,r,t){e.exports={header:"Header_header__2ih8R",header_nav:"Header_header_nav__3OrmJ",header_nav__link:"Header_header_nav__link__1ifim"}},16:function(e,r,t){e.exports={wrapper:"SingInForm_wrapper__3zhj5",click:"SingInForm_click__3WO8j",has_error:"SingInForm_has_error__3eIZw",title:"SingInForm_title__uV39D",footer:"SingInForm_footer__2ARSL"}},19:function(e,r,t){e.exports={reg:"Registration_reg__2MTkG",reg_title:"Registration_reg_title__243Ch",reg_form:"Registration_reg_form__3LWhs",reg_form__error:"Registration_reg_form__error__1LPSu","mdc-snackbar":"Registration_mdc-snackbar__2OJ2U","mdc-snackbar__dismiss":"Registration_mdc-snackbar__dismiss__1jfGC"}},22:function(e,r,t){},23:function(e,r,t){e.exports={error:"SetNewPassword_error__3tktq"}},29:function(e,r,t){e.exports={pnf:"pnf_pnf__2KgTX",pnf_error:"pnf_pnf_error__28Eus",pnf_descr:"pnf_pnf_descr__2rEup"}},30:function(e,r,t){e.exports={inputBase:"MyInput_inputBase__2TMXn",red:"MyInput_red__1pG1N"}},31:function(e,r,t){e.exports={btn:"MyBtn_btn__3_vFN",redBtn:"MyBtn_redBtn__1XT6N"}},32:function(e,r,t){e.exports={inputBase:"MyInputTest_inputBase__274cT",red:"MyInputTest_red__33Qh7"}},33:function(e,r,t){e.exports={btn:"MyBtnTest_btn__2P_lN",redBtn:"MyBtnTest_redBtn__3cebc"}},52:function(e,r,t){},59:function(e,r,t){},60:function(e,r,t){},84:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t(0),s=t(25),c=t.n(s),i=(t(59),t(60),t(6)),o=t(4),l=t(29),u=t.n(l),d=function(){return Object(n.jsxs)("section",{className:u.a.pnf,children:[Object(n.jsx)("div",{className:u.a.pnf_error,children:" 404 "}),Object(n.jsx)("p",{className:u.a.pnf_descr,children:"Sorry, Page not Found..."})]})},j=t(30),p=t.n(j);function b(e){return Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:e.error?"".concat(p.a.inputBase," ").concat(p.a.red):p.a.inputBase,onBlur:e.onBlur,type:e.type,value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress,placeholder:e.placeholder,name:e.name})})}var h=t(31),m=t.n(h);function O(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("button",{className:e.error?"".concat(m.a.redBtn," ").concat(m.a.btn):m.a.btn,onClick:e.onClick,disabled:e.disabled,type:e.type,children:[" ",e.name]})})}var f=t(19),_=t.n(f),v=(t(61),function(e){var r=e.email,t=e.password,a=e.repeatPass,s=e.error,c=e.errors,i=e.onChange,o=e.formSubmit,l=c.email,u=c.password,d=c.repeatPass,j=l||u||d;return Object(n.jsx)("section",{children:Object(n.jsxs)("main",{className:_.a.reg,children:[Object(n.jsx)("div",{className:_.a.reg_title,children:" Registration form"}),Object(n.jsxs)("form",{className:_.a.reg_form,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Enter your email:"}),Object(n.jsx)(b,{error:!!l,type:"email",value:r,onChange:i,placeholder:"email...",name:"email"}),l?Object(n.jsx)("div",{className:_.a.reg_form__error,children:l}):null]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Enter your password:"}),Object(n.jsx)(b,{error:!!u,type:"password",value:t,onChange:i,placeholder:"min 8 symbols..",name:"password"}),u?Object(n.jsx)("div",{className:_.a.reg_form__error,children:c.password}):null]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Repeat your password:"}),Object(n.jsx)(b,{error:!!d,type:"password",value:a,onChange:i,placeholder:"min 8 symbols...",name:"repeatPass"}),d?Object(n.jsx)("div",{className:_.a.reg_form__error,children:c.repeatPass}):null]}),s?Object(n.jsxs)("p",{className:_.a.reg_form__error,children:[" ",s," "]}):"",Object(n.jsx)("div",{children:Object(n.jsx)(O,{error:!!j,disabled:!!j,name:"Register",onClick:o})})]})]})})}),x=t(3),g=t(17),S=t(7),w=t.n(S),y=t(13),E=t(2),C=t(51),P=t.n(C).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),N=function(e,r){return P.post("auth/register",{email:e,password:r}).then((function(e){return e.data}))},R=function(e){return P.post("auth/login",e)},k=function(){return P.post("auth/me").then((function(e){return e.data}))},I=function(){return P.delete("auth/me").then((function(e){return e.data}))},T=function(e){return P.post("auth/forgot",Object(E.a)({},e))},A=function(e){return P.post("auth/set-new-password",Object(E.a)({},e))},B={profile:{}},L=function(e){return{type:"/PROFILE/SET-PROFILE",profile:e}},F={isAuth:!1,loading:!1,error:"",registerSuccess:!1,recoveryPassSuccess:!1,newPassSuccess:!1},M=function(e){return{type:"singIn/SET-IS-AUTH",isAuth:e}},Z=function(){return{type:"/REG/SET-REGISTER-SUCCESS"}},G=function(){return{type:"/REC/SET-RECOVERY-PASS-SUCCESS"}},U=function(){return{type:"/NEW-PASS/SET-NEW-PASS-SUCCESS"}},z=function(e){return{type:"/REG/SET-LOADING",loading:e}},V=function(e){return{type:"/SERVER-ERROR/SET-ERROR",error:e}},D=function(e){return function(){var r=Object(y.a)(w.a.mark((function r(t){var n,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,R(e);case 3:n=r.sent,t(M(!0)),t(L(n.data)),r.next=14;break;case 8:return r.prev=8,r.t0=r.catch(0),a=r.t0.response?r.t0.response.data.error:r.t0.message+",more details on the console",t(M(!1)),console.log(a),r.abrupt("return",a);case 14:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},K=function(){var e=Object(x.c)((function(e){return e.auth})),r=e.error,t=e.registerSuccess,a=Object(x.c)((function(e){return e.auth.isAuth})),s=Object(x.b)(),c=Object(g.a)({initialValues:{email:"",password:"",repeatPass:""},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?e.password.length<8?r.password="Password must be more than 8 characters...":e.password!==e.repeatPass&&(r.repeatPass="Passwords do not match"):r.email="Invalid email address":r.email="Required",r},onSubmit:function(e){var r,t;s((r=e.email,t=e.password,function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(z(!0)),e.prev=1,e.next=4,N(r,t);case 4:e.sent.addedUser&&n(Z()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(V(e.t0.response.data.error));case 11:n(z(!1));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()))}});return t?Object(n.jsx)(o.a,{to:fe}):a?Object(n.jsx)(o.a,{to:ve}):Object(n.jsx)(v,{email:c.values.email,password:c.values.password,repeatPass:c.values.repeatPass,error:r,errors:c.errors,onChange:c.handleChange,formSubmit:c.handleSubmit})},W=t(16),q=t.n(W),H=t(32),J=t.n(H);function $(e){return Object(n.jsx)("div",{children:Object(n.jsx)("input",{disabled:e.disable,className:e.error?"".concat(J.a.inputBase," ").concat(J.a.red):J.a.inputBase,onBlur:e.onBlur,type:e.type,value:e.value,onChange:e.onChange,onKeyPress:function(r){e.onKeyPress&&13===r.charCode&&e.onKeyPress()},placeholder:e.placeholder,name:e.name})})}var X=t(33),Y=t.n(X);function Q(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("button",{className:e.error?"".concat(Y.a.redBtn," ").concat(Y.a.btn):Y.a.btn,onClick:e.onClick,disabled:e.disabled,type:e.type,children:[" ",e.name]})})}var ee=t(11),re=t.n(ee),te=function(e){var r=e.email,t=e.password,a=e.errors,s=e.onChange,c=e.formSubmit,o=e.title,l=a.email,u=a.password,d=a.confirm,j=l||u;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:q.a.title,children:o}),Object(n.jsx)($,{type:"email",onChange:s,value:r,placeholder:"email",name:"email",error:!!l})," ",l?Object(n.jsx)("div",{className:q.a.has_error,children:l}):null,d?Object(n.jsx)("div",{className:q.a.has_error,children:d}):null,Object(n.jsx)($,{type:"password",onChange:s,value:t,placeholder:"password",error:!!u,name:"password"}),u?Object(n.jsx)("div",{className:q.a.has_error,children:u}):null,Object(n.jsxs)("div",{className:q.a.click,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:s}),"RememberMe"]}),j?null:Object(n.jsx)(Q,{name:"Login",type:"submit",onClick:c,disabled:!!j,error:!!j})]}),Object(n.jsxs)("div",{className:q.a.footer,children:[Object(n.jsx)("nav",{children:Object(n.jsx)(i.b,{to:_e,activeClassName:re.a.header_nav__link,children:"SingUp"})}),Object(n.jsx)("nav",{children:Object(n.jsx)(i.b,{to:ge,activeClassName:re.a.header_nav__link,children:"Forgot?"})})]})]})},ne=function(){var e=Object(x.b)(),r=Object(x.c)((function(e){return e.auth.isAuth})),t=Object(g.a)({initialValues:{email:"",password:"",rememberMe:!1,confirm:""},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?e.password?e.password.length<8&&(r.password="Must be more than 8 characters"):r.password="Required":r.email="Invalid email address":r.email="Required",e.confirm&&(r.confirm="Incorrect email or password"),r},onSubmit:function(){var r=Object(y.a)(w.a.mark((function r(t,n){var a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(D(t));case 2:a=r.sent,n.setFieldError("confirm","Incorrect email or password"),console.log(JSON.stringify(a)+"novoe");case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()});return r?Object(n.jsx)(o.a,{to:ve}):Object(n.jsx)("div",{className:q.a.wrapper,children:Object(n.jsx)("form",{onSubmit:t.handleSubmit,children:Object(n.jsx)(te,{title:"LOGIN FORM",onChange:t.handleChange,formSubmit:t.handleSubmit,email:t.values.email,password:t.values.password,errors:t.errors})})})},ae=t(52),se=t.n(ae),ce=t.p+"static/media/ava_default.17ad3620.jpg",ie=function(e){var r=e.profile;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:r.avatar?r.avatar:ce,alt:""})}),Object(n.jsxs)("div",{children:["Name : ",r.name]}),Object(n.jsxs)("div",{children:["Email : ",r.email]}),Object(n.jsxs)("div",{children:["Public Card Packs Count : ",r.publicCardPacksCount]})]})},oe=function(e){var r=e.profile,t=e.onLogOut;return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:se.a.profile,children:[Object(n.jsx)(ie,{profile:r}),Object(n.jsx)(O,{name:"LogOut",onClick:t})]})})},le=function(){var e=Object(x.c)((function(e){return e.auth.isAuth})),r=Object(x.c)((function(e){return e.profile.profile})),t=Object(x.b)();return e?Object(n.jsx)("section",{children:Object(n.jsx)(oe,{profile:r,onLogOut:function(){return t(function(){var e=Object(y.a)(w.a.mark((function e(r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:r(M(!1)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r(V(e.t0.response.data.error));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}())}})}):Object(n.jsx)(o.a,{to:fe})},ue=t(22),de=t.n(ue),je=function(e){var r=e.onChange,t=e.formSubmit,a=e.errors,s=e.email,c=e.error,i=a.email;return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:de.a.recPass,children:[Object(n.jsx)("h2",{className:de.a.recPass_title,children:" RecoveryPassword "}),Object(n.jsx)("p",{className:de.a.recPass_description,children:"\u0414\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email, \u043d\u0430 \u043d\u0435\u0433\u043e \u043f\u0440\u0438\u0434\u0435\u0442 \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0438\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c\u0438."}),Object(n.jsxs)("form",{className:de.a.recPass_form,children:[Object(n.jsx)(b,{type:"email",onChange:r,name:"email",value:s,placeholder:"your email...",error:!!i}),i?Object(n.jsx)("div",{children:i}):null,Object(n.jsx)(O,{name:"Send",onClick:t,error:!!i,disabled:!!i,type:"submit"}),c?Object(n.jsxs)("p",{className:de.a.reg_form__error,children:[" ",c," "]}):""]})]})})},pe=function(){var e=Object(x.c)((function(e){return e.auth})),r=e.error,t=e.recoveryPassSuccess,a=Object(x.b)(),s=Object(g.a)({initialValues:{email:""},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",r},onSubmit:function(e){var r={email:e.email,from:"kirillpuzanov@mail.ru",message:"<div style=\"background-color: lime; padding: 15px\">\n                        password recovery link: \n\t                    <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>\n\t                    </div>"};a(function(e){return function(){var r=Object(y.a)(w.a.mark((function r(t){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,T(e);case 3:t(G()),r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),t(V(r.t0.response.data.error));case 9:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}()}(r)),console.log(r)}});return t?Object(n.jsx)(o.a,{to:Se}):Object(n.jsx)("section",{children:Object(n.jsx)("div",{children:Object(n.jsx)(je,{email:s.values.email,onChange:s.handleChange,formSubmit:s.handleSubmit,errors:s.errors,error:r})})})},be=t(23),he=t.n(be),me=function(e){var r=e.onChange,t=e.formSubmit,a=e.errors,s=e.password,c=e.repeatPass,i=a.password,o=a.repeatPass,l=!!i||!!o;return Object(n.jsx)("section",{children:Object(n.jsx)("main",{className:he.a.newPass,children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h2",{className:he.a.newPass_title,children:" \u0421\u043c\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f "}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:he.a.newPass_descr,children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.. "}),Object(n.jsx)(b,{error:!!i,type:"password",value:s,onChange:r,placeholder:"min 8 symbols..",name:"password"}),i?Object(n.jsx)("div",{className:he.a.reg_form__error,children:a.password}):null]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.."}),Object(n.jsx)(b,{error:!!o,type:"password",value:c,onChange:r,placeholder:"min 8 symbols...",name:"repeatPass"}),o?Object(n.jsx)("div",{className:he.a.reg_form__error,children:a.repeatPass}):null]}),Object(n.jsx)("div",{children:Object(n.jsx)(O,{name:"Send",onClick:t,error:l,disabled:l,type:"submit"})})]})})})},Oe=function(){var e=Object(x.c)((function(e){return e.auth})),r=e.error,t=e.newPassSuccess,a=Object(x.b)(),s=Object(o.g)().token,c=Object(g.a)({initialValues:{password:"",repeatPass:""},validate:function(e){var r={};return e.password.length<8?r.password="Password must be more than 8 characters...":e.password!==e.repeatPass&&(r.repeatPass="Passwords do not match"),r},onSubmit:function(e){var r={password:e.password,resetPasswordToken:s};a(function(e){return function(){var r=Object(y.a)(w.a.mark((function r(t){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A(e);case 3:t(U()),r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),t(V(r.t0.response.data.error));case 9:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}()}(r)),console.log(r)}});return t?Object(n.jsx)(o.a,{to:fe}):Object(n.jsx)("section",{children:Object(n.jsx)("div",{children:Object(n.jsx)(me,{password:c.values.password,repeatPass:c.values.repeatPass,error:r,errors:c.errors,onChange:c.handleChange,formSubmit:c.handleSubmit})})})},fe="/",_e="/registration",ve="/profile",xe="/404",ge="/recoveryPass",Se="/new-pass",we=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:fe,component:ne}),Object(n.jsx)(o.b,{path:_e,component:K}),Object(n.jsx)(o.b,{path:ve,component:le}),Object(n.jsx)(o.b,{path:ge,component:pe}),Object(n.jsx)(o.b,{path:Se,component:Oe}),Object(n.jsx)(o.b,{path:xe,component:d}),Object(n.jsx)(o.a,{from:"*",to:xe})]})})},ye=function(e){return Object(n.jsx)("section",{className:re.a.header,children:Object(n.jsxs)("nav",{className:re.a.header_nav,children:[Object(n.jsx)(i.b,{to:fe,exact:!0,activeClassName:re.a.header_nav__link,children:"Sign In"}),Object(n.jsx)(i.b,{to:ge,activeClassName:re.a.header_nav__link,children:"Recovery password"}),Object(n.jsx)(i.b,{to:Se,activeClassName:re.a.header_nav__link,children:"Set new Password"}),Object(n.jsx)(i.b,{to:_e,activeClassName:re.a.header_nav__link,children:"Registration"}),Object(n.jsx)(i.b,{to:ve,activeClassName:re.a.header_nav__link,children:"Profile"}),Object(n.jsx)(i.b,{to:xe,activeClassName:re.a.header_nav__link,children:"404"})]})})},Ee=t.p+"static/media/loader.37f92040.svg",Ce={width:"60px",height:"60px",display:"block",margin:"0 auto"},Pe=function(){return Object(n.jsx)("img",{src:Ee,alt:"preloader",style:Ce})},Ne={isInitializing:!1,initializeError:""},Re=function(e){return{type:"/APP/SET-INITIALIZED",isInitializing:e}},ke=function(e){return{type:"/INITIALIZE/SET-ERROR",initialiseError:e}};var Ie=function(){var e=Object(x.c)((function(e){return e.app})).isInitializing,r=Object(x.b)();return Object(a.useEffect)((function(){r(function(){var e=Object(y.a)(w.a.mark((function e(r){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:t=e.sent,r(L(t)),r(M(!0)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response?e.t0.response.data.error:e.t0+" ... \u041e-\u043e\u0443 \u0437\u043e\u0432\u0438\u0442\u0435 \u0431\u043e\u0440\u043e\u0434\u0430\u0442\u044b\u0445 \u0441\u0435\u043d\u044c\u043e\u0440\u043e\u0432!!",r(ke(n));case 12:r(Re(!0));case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}())}),[]),e?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(ye,{}),Object(n.jsx)(we,{})]}):Object(n.jsx)(Pe,{})},Te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(r){var t=r.getCLS,n=r.getFID,a=r.getFCP,s=r.getLCP,c=r.getTTFB;t(e),n(e),a(e),s(e),c(e)}))},Ae=t(21),Be=t(53),Le=Object(Ae.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"singIn/SET-IS-AUTH":return Object(E.a)(Object(E.a)({},e),{},{isAuth:r.isAuth});case"/SERVER-ERROR/SET-ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:r.error});case"/REG/SET-REGISTER-SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{registerSuccess:!0});case"/REG/SET-LOADING":return Object(E.a)(Object(E.a)({},e),{},{loading:r.loading});case"/REC/SET-RECOVERY-PASS-SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{recoveryPassSuccess:!0});case"/NEW-PASS/SET-NEW-PASS-SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{newPassSuccess:!0});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"/PROFILE/SET-PROFILE":return Object(E.a)(Object(E.a)({},e),{},{profile:Object(E.a)({},r.profile)});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"/APP/SET-INITIALIZED":return Object(E.a)(Object(E.a)({},e),{},{isInitializing:r.isInitializing});case"/INITIALIZE/SET-ERROR":return Object(E.a)(Object(E.a)({},e),{},{initializeError:r.initialiseError});default:return e}}}),Fe=Object(Ae.d)(Le,Object(Ae.a)(Be.a));window.store=Fe,c.a.render(Object(n.jsx)(x.a,{store:Fe,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(Ie,{})})}),document.getElementById("root")),Te()}},[[84,1,2]]]);
//# sourceMappingURL=main.23ad77b8.chunk.js.map