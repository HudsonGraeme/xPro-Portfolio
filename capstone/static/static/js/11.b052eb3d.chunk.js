(this.webpackJsonpbad_bank=this.webpackJsonpbad_bank||[]).push([[11],{237:function(e,a,t){"use strict";t.r(a);var n=t(260),c=t(37),o=t(0),i=t(85),r=t(264),s=t(258),l=t.n(s),u=t(1);a.default=function(){var e=Object(o.useContext)(c.b).user,a=n.b().shape({account:n.c().required(),amount:n.a().typeError("Please enter a valid, non-negative number").min(.01,"Please enter a value above zero").max(Object(i.d)(e.balance)?e.balance+100:Number.POSITIVE_INFINITY,"Please enter a value below ".concat(l()(e.name),"'s maximum overdraft limit (").concat(Object(i.b)(-100),")")).required()});return Object(u.jsx)(r.a,{validationSchema:a,title:"Make a Withdrawal",transactionType:"Withdraw"})}},264:function(e,a,t){"use strict";var n=t(4),c=t(261),o=t(310),i=t(313),r=t(307),s=t(315),l=t(255),u=t(259),b=t(37),d=t(0),m=t(258),j=t.n(m),h=t(85),p=t(1);a.a=function(e){var a=e.title,t=e.transactionType,m=e.validationSchema,O=Object(d.useContext)(b.b),x=O.user,f=O.transact,v=Object(d.useState)({}),y=Object(n.a)(v,2),w=y[0],g=y[1];return Object(p.jsxs)(c.a,{className:"mx-auto w-50 mt-5 p-5",children:[w.open&&Object(p.jsx)(o.a,{variant:w.type,children:w.message}),Object(p.jsx)(c.a.Title,{className:"mb-5 text-left display-4",children:a}),Object(p.jsx)(c.a.Body,{children:Object(p.jsx)(u.a,{validationSchema:m,onSubmit:function(e,a){!function(e,a){f("Withdraw"===t?-e:e).then((function(){a(),"Withdraw"===t&&e>x.balance?g({open:!0,type:"warning",message:"Successfully completed your transaction, however your account is in overdraft. Please make a deposit at your earliest convenience."}):g({open:!0,type:"success",message:"Successfully completed your transaction."})})).catch((function(e){return g({open:!0,type:"danger",message:"Failed to complete your transaction. Please check your information and try again."})})).finally((function(){setTimeout((function(){return g({})}),2500)}))}(e.amount,a.resetForm)},initialValues:{account:x.email,amount:0},children:function(e){var a=e.handleSubmit,n=e.handleChange,c=e.values,o=e.dirty,u=e.isValid,b=e.errors;return Object(p.jsxs)(i.a,{onSubmit:a,children:[Object(p.jsx)(i.a.Group,{className:"my-2",children:Object(p.jsx)(r.a,{label:b.account?j()(b.account):"Account to ".concat(t," ").concat("Withdraw"===t?"from":"to"),className:!!b.account&&"text-danger font-weight-bold",children:Object(p.jsx)(i.a.Select,{className:"form-select mb-4",value:c.account,name:"account",disabled:!0,isInvalid:!!b.account,children:Object(p.jsx)("option",{value:x.email,children:"".concat(j()(x.first_name)," ").concat(j()(x.last_name)," (").concat(Object(h.d)(x.balance)?Object(h.b)(x.balance):"Balance Error",") ").concat(Object(h.d)(x.balance)&&parseFloat(x.balance)<=0?"***Overdraft***":"")},"option-account-".concat(x.username))})})}),Object(p.jsxs)(i.a.Group,{className:"my-2",children:[Object(p.jsx)(i.a.Label,{children:"Amount"}),Object(p.jsxs)(s.a,{hasValidation:!0,children:[Object(p.jsx)(s.a.Text,{id:"inputGroupPrepend",children:"$"}),Object(p.jsx)(i.a.Control,{type:"text",name:"amount",placeholder:"99.99",value:c.amount,onChange:n,isInvalid:!!b.amount}),Object(p.jsx)(i.a.Control.Feedback,{type:"invalid",children:j()(b.amount)})]})]}),Object(p.jsxs)(l.a,{type:"submit",className:"mt-5 w-50 mx-2 inline-block",disabled:!u||!o,children:["".concat(t," "),u&&Object(h.d)(c.amount)&&Object(h.b)(c.amount),u&&" ".concat("Withdraw"===t?"from":"into"," ").concat(j()(x.first_name),"'s account")]})]})}})})]})}}}]);
//# sourceMappingURL=11.b052eb3d.chunk.js.map