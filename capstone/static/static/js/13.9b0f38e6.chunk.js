(this.webpackJsonpbad_bank=this.webpackJsonpbad_bank||[]).push([[13],{241:function(e,a,t){"use strict";t.r(a);var s=t(4),n=t(0),i=t(261),c=t(313),l=t(311),r=t(315),o=t(255),d=t(259),b=t(260),j=t(37),u=t(267),m=t(310),p=t(30),h=t(3),x=t(10),O=t(1),w=b.b().shape({email:b.c().default("").email().required("Please enter a valid email"),password:b.c().default("").required("Please enter a valid password")});a.default=function(){var e=Object(n.useContext)(j.b).signin,a=Object(n.useState)({}),t=Object(s.a)(a,2),b=t[0],y=t[1],f=Object(x.g)();return Object(O.jsxs)(i.a,{className:"mx-auto w-50 mt-5",children:[b.open&&Object(O.jsx)(m.a,{variant:b.type,children:b.message}),Object(O.jsx)(i.a.Title,{className:"mb-5 pt-5 text-left display-4",children:"Login"}),Object(O.jsx)(i.a.Body,{className:"p-5",children:Object(O.jsx)(d.a,{validationSchema:w,onSubmit:function(a,t){!function(a,t){e(a).then((function(){t(),y({open:!0,type:"success",message:"Successfully signed in"}),f.push(h.e.data.path)})).catch((function(e){return y({open:!0,type:"danger",message:"Failed to login. Please check your credentials and try again."})})).finally((function(){setTimeout((function(){return y({})}),2500)}))}(a,t.resetForm)},initialValues:{email:"",password:""},children:function(e){var a=e.handleSubmit,t=e.handleChange,s=e.values,n=e.isValid,i=e.errors,d=e.dirty;return Object(O.jsxs)(c.a,{onSubmit:a,children:[Object(O.jsxs)(c.a.Group,{as:l.a,className:"my-2",children:[Object(O.jsx)(c.a.Label,{children:"Email"}),Object(O.jsxs)(r.a,{hasValidation:!0,children:[Object(O.jsx)(c.a.Control,{type:"text",name:"email",autoComplete:"email",placeholder:"john@doe.net",value:s.email,isInvalid:!!i.email,onChange:t}),Object(O.jsx)(c.a.Control.Feedback,{type:"invalid",children:Object(u.capitalize)(i.email)})]})]}),Object(O.jsxs)(c.a.Group,{as:l.a,className:"my-2",children:[Object(O.jsx)(c.a.Label,{children:"Password"}),Object(O.jsxs)(r.a,{hasValidation:!0,children:[Object(O.jsx)(r.a.Text,{className:!!i.password&&"text-danger border border-danger",children:"\ud83d\udd12"}),Object(O.jsx)(c.a.Control,{type:"password",name:"password",autoComplete:"new-password",value:s.password,placeholder:"**************",isInvalid:!!i.password,onChange:t}),Object(O.jsx)(c.a.Control.Feedback,{type:"invalid",children:Object(u.capitalize)(i.password)})]})]}),Object(O.jsx)(o.a,{type:"submit",disabled:!n||!d,className:"mt-5 w-25 mx-2 inline-block",children:"Login"})]})}})}),Object(O.jsx)(i.a.Footer,{className:"d-flex flex-row-reverse align-items-center",children:Object(O.jsx)(o.a,{variant:"primary",className:"w-50",as:p.b,to:h.e.create_account.path,children:"Don't have an account?"})})]})}}}]);
//# sourceMappingURL=13.9b0f38e6.chunk.js.map