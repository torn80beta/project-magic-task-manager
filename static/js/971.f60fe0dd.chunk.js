"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{4971:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var c=t(1413),s=t(2387),n=t(9434),l=t(188),i=t(1634),r=t(1),o=t(9439),d=t(2791),m=t(7689),h=t(184),u=function(e){var a=e.title,t=e.id,c=e.closeModal,s=(0,n.v9)(l.JP),i=(0,d.useState)(""),u=(0,o.Z)(i,2),p=u[0],x=u[1],j=(0,d.useState)(a||""),N=(0,o.Z)(j,2),f=N[0],v=N[1],g=(0,m.UO)().boardName;return(0,h.jsxs)("form",{className:"columnForm",onSubmit:function(e){var s=e.target.elements.title.value;if(e.preventDefault(),""!==s){if(!a||!t)return console.log("Add column"),console.log(g),console.log(s),void c();console.log("Edit column ".concat(t)),console.log(t),console.log(s),c(),c()}else x("Required")},children:[(0,h.jsxs)("p",{className:"columnTitle theme-".concat(s),children:[a?"Edit":"Add"," column"]}),(0,h.jsxs)("div",{className:"columnInputWrapper",children:[(0,h.jsx)("input",{type:"text",name:"title",placeholder:"Title",className:"titleInput theme-".concat(s),value:f,onChange:function(e){return v(e.target.value)}}),p&&(0,h.jsx)("p",{className:"errorMessage theme-".concat(s),children:p})]}),(0,h.jsxs)("button",{className:"columnButton theme-".concat(s),type:"submit",children:[(0,h.jsx)("span",{className:"columnIcon theme-".concat(s),children:(0,h.jsx)(r.Z,{id:"plus",width:14,height:14})}),a?"Edit":"Add"]})]})},p=t(5705),x=t(9710),j=t(1951),N=t(9513),f=t.n(N),v=function(e){var a=e.getDeadline,t=(0,d.useState)(new Date),c=(0,o.Z)(t,2),s=c[0],i=c[1],m=(0,n.v9)(l.JP),u=(0,d.forwardRef)((function(e,a){e._;var t,c=e.onClick;return(0,h.jsxs)("button",{type:"button",className:"button-custom-input theme-".concat(m),onClick:c,ref:a,children:[(0,h.jsx)("span",{className:"input-custom-text",children:(t=s,(0,x.Z)(t)?"Today, ".concat((0,j.default)(t,"MMMM d")):(0,j.default)(t,"EEEE, MMMM d"))}),(0,h.jsx)(r.Z,{id:"chevron-down",width:18,height:18})]})}));return(0,h.jsx)("div",{children:(0,h.jsx)(f(),{selected:s,onChange:function(e){a(e),i(e)},minDate:new Date,calendarStartDay:1,customInput:(0,h.jsx)(u,{}),calendarClassName:"theme-".concat(m)})})},g=function(e){var a=e.columnId,t=void 0===a?null:a,c=e.taskId,s=void 0===c?null:c,i=e.closeModal,m=e.data,u=(m=void 0===m?{}:m).title,x=m.description,j=m.labelColor,N=(m.deadline,(0,d.useState)("")),f=(0,o.Z)(N,2),g=f[0],b=f[1],y=function(e){b(e),console.log(g)},w=(0,n.v9)(l.JP);return(0,h.jsx)(p.J9,{initialValues:{title:u||"",desc:x||"",priority:j||"without"},validate:function(e){var a={};return e.title||(a.title="Required"),e.desc||(a.desc="Required"),a},onSubmit:function(e,a){var c=a.setSubmitting;if(!t&&s)c(!1),i();else{if(s||!t)return c(!1),void i();c(!1),i()}},children:function(e){var a=e.values,c=e.errors,n=e.touched,l=e.handleChange,i=e.handleBlur,o=e.handleSubmit,d=e.isSubmitting;return(0,h.jsxs)("form",{className:"add-form theme-".concat(w),onSubmit:o,children:[(0,h.jsx)("p",{className:"add-form-title theme-".concat(w),children:t&&s?"Edit card":"Add card"}),(0,h.jsxs)("div",{className:"add-form-wrap",children:[(0,h.jsxs)("div",{className:"add-form-email-wrap",children:[(0,h.jsx)("input",{className:"add-form-input email theme-".concat(w),type:"text",name:"title",placeholder:"Title",onChange:l,onBlur:i,value:a.title}),(0,h.jsx)("p",{className:"add-form-input-error theme-".concat(w),children:c.title&&n.title&&c.title})]}),(0,h.jsxs)("div",{className:"add-form-desc-wrap",children:[(0,h.jsx)("textarea",{className:"add-form-input desc theme-".concat(w),rows:7,name:"desc",placeholder:"Description",onChange:l,onBlur:i,value:a.desc}),(0,h.jsx)("p",{className:"add-form-input-error theme-".concat(w),children:c.desc&&n.desc&&c.desc})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"add-form-group-title theme-".concat(w),children:"Label color"}),(0,h.jsxs)("div",{className:"add-form-radio-group",role:"group","aria-labelledby":"priority-group",children:[(0,h.jsxs)("label",{className:"add-form-radio low",children:[(0,h.jsx)(p.gN,{className:"visually-hidden",type:"radio",name:"priority",value:"low"}),(0,h.jsx)("span",{className:"outer-circle"}),(0,h.jsx)("span",{className:"inner-circle"})]}),(0,h.jsxs)("label",{className:"add-form-radio medium",children:[(0,h.jsx)(p.gN,{className:"visually-hidden",type:"radio",name:"priority",value:"medium"}),(0,h.jsx)("span",{className:"outer-circle"}),(0,h.jsx)("span",{className:"inner-circle"})]}),(0,h.jsxs)("label",{className:"add-form-radio high",children:[(0,h.jsx)(p.gN,{className:"visually-hidden",type:"radio",name:"priority",value:"high"}),(0,h.jsx)("span",{className:"outer-circle"}),(0,h.jsx)("span",{className:"inner-circle"})]}),(0,h.jsxs)("label",{className:"add-form-radio without",children:[(0,h.jsx)(p.gN,{className:"visually-hidden",type:"radio",name:"priority",value:"without"}),(0,h.jsx)("span",{className:"outer-circle theme-".concat(w)}),(0,h.jsx)("span",{className:"inner-circle theme-".concat(w)})]})]})]})}),(0,h.jsxs)("div",{className:"add-form-deadline",children:[(0,h.jsx)("p",{className:"add-form-deadline-title theme-".concat(w),children:"Deadline"}),(0,h.jsx)(v,{getDeadline:y})]}),(0,h.jsxs)("button",{className:"add-form-submit theme-".concat(w),type:"submit",disabled:d,children:[(0,h.jsx)("div",{className:"add-form-icon-wrap theme-".concat(w),children:(0,h.jsx)(r.Z,{id:"plus",width:14,height:14})}),t&&s?"Edit":"Add"]})]})]})}})},b=t(1807),y=function(e){var a=e._id,t=e.title,c=e.description,i=e.labelColor,m=e.deadLine,u=e.columnId,p=(0,d.useState)(i),x=(0,o.Z)(p,2),j=x[0],N=x[1],f=(0,n.v9)(l.JP);(0,d.useEffect)((function(){N(i)}),[i]);var v=new Date(m),y=v.getFullYear(),w=String(v.getMonth()+1).padStart(2,"0"),_=String(v.getDate()).padStart(2,"0"),P=new Date,Z=function(e){var a=e.split("/"),t=parseInt(a[0],10),c=parseInt(a[1],10)-1,s=parseInt(a[2],10);return new Date(s,c,t)}(m),C=P.toDateString()===Z.toDateString();return(0,h.jsx)("div",{className:"cardWrapper theme-".concat(f,"  priorityClass-").concat(j),priority:i,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:"cardTitle theme-".concat(f),children:t}),(0,h.jsx)("p",{className:"cardDescription theme-".concat(f),children:(0,h.jsx)(b.default,{className:"cardDescription",text:c,length:100})}),(0,h.jsx)("hr",{className:"cardLine theme-".concat(f)}),(0,h.jsxs)("div",{className:"topWrapper theme-".concat(f),children:[(0,h.jsxs)("div",{className:"cardPriority theme-".concat(f),children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:"cardSubtitle theme-".concat(f),children:"Priority"}),(0,h.jsxs)("p",{className:"cardSubtext theme-".concat(f),children:[(0,h.jsx)("span",{className:"cardPrimaryIcon theme-".concat(f," priorityClass-").concat(j),priority:i}),i]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:"cardSubtitle theme-".concat(f),children:"Deadline"}),(0,h.jsx)("p",{className:"cardSubtextDeadline theme-".concat(f),children:"".concat(_,"\\").concat(w,"\\").concat(y)})]})]}),(0,h.jsxs)("div",{className:"IconWrapper theme-".concat(f),children:[C&&(0,h.jsx)("span",{className:"cardIcon theme-".concat(f),children:(0,h.jsx)(r.Z,{id:"bell",width:16,height:16})}),(0,h.jsx)("span",{className:"cardIcon theme-".concat(f),children:(0,h.jsx)(r.Z,{id:"arrow-circle-broken-right",width:16,height:16})}),(0,h.jsx)(s.Z,{data:(0,h.jsx)("span",{className:"cardIcon theme-".concat(f),children:(0,h.jsx)(r.Z,{id:"pencil",width:16,height:16})}),children:(0,h.jsx)(g,{columnId:u,taskId:a,data:{title:t,description:c,labelColor:i,deadLine:m}})}),(0,h.jsx)("span",{className:"cardIcon theme-".concat(f),children:(0,h.jsx)(r.Z,{className:"cardIcon theme-".concat(f),id:"trash",width:16,height:16})})]})]})]})})},w=t(1425),_=function(e){var a=e._id,t=e.name,o=(0,n.v9)(l.JP),m=(0,n.v9)(w.eo);console.log("columnsList:",m);var p=m[m.findIndex((function(e){return e._id===a}))].tasks;console.log("cards:",p);var x=(0,n.v9)(i.LY),j="all"===x?p:p.filter((function(e){return e.labelColor.includes(x)}));return console.log("filteredCards:",j),(0,h.jsxs)("li",{className:"column theme-".concat(o),children:[(0,h.jsxs)("div",{className:"column_header theme-".concat(o),children:[(0,h.jsx)("h2",{className:"column_headerTitle theme-".concat(o),children:t}),(0,h.jsxs)("div",{className:"column_buttonWrap theme-".concat(o),children:[(0,h.jsx)(s.Z,{data:(0,h.jsx)("span",{className:"column_buttonIcon theme-".concat(o),children:(0,h.jsx)(r.Z,{id:"pencil",width:"16",height:"16"})}),children:(0,h.jsx)(u,{title:t,id:a})}),(0,h.jsx)("button",{className:"column_buttonBox theme-".concat(o),onClick:function(){return e=a,void(0===p.length?console.log("Column deleted ".concat(e)):console.log("The column must be empty"));var e},children:(0,h.jsx)("span",{className:"column_buttonIcon theme-".concat(o),children:(0,h.jsx)(r.Z,{id:"trash",width:"16",height:"16"})})})]})]}),(0,h.jsx)("ul",{className:"cardsWrap theme-".concat(o),children:j.map((function(e){return(0,d.createElement)(y,(0,c.Z)((0,c.Z)({},(0,c.Z)((0,c.Z)({},e),{},{columnId:a})),{},{key:e._id}))}))}),(0,h.jsx)(s.Z,{data:(0,h.jsxs)("span",{className:"column_buttonAdd theme-".concat(o),children:[(0,h.jsx)("span",{className:"column_buttonAddIcon theme-".concat(o),children:(0,h.jsx)(r.Z,{id:"plus",width:"14",height:"14"})}),"Add another card"]}),children:(0,h.jsx)(g,{columnId:a})})]})},P=function(){var e=(0,n.I0)(),a=(0,n.v9)(l.JP),t=(0,n.v9)(i.LY),c=function(a){e((0,i.M6)(a.target.value))};return(0,d.useEffect)((function(){document.querySelector("[value=".concat(t,"]")).setAttribute("checked",!0)}),[t]),(0,h.jsxs)("div",{className:"theme-".concat(a," filterPopup"),children:[(0,h.jsx)("h2",{className:"filterPopup_header theme-".concat(a),children:"Filters"}),(0,h.jsxs)("form",{className:"filterPopup_radioButtons theme-".concat(a),children:[(0,h.jsxs)("div",{className:"filterPopup_lineDiv theme-".concat(a),children:[(0,h.jsx)("h3",{className:"filterPopup_title theme-".concat(a),children:"Label color"}),(0,h.jsxs)("label",{className:"filterPopup_showAllBtn theme-".concat(a),children:[(0,h.jsx)("input",{className:"filterPopup_showAllBtnInput",type:"radio",value:"all",name:"priority",onChange:c}),"Show all"]})]}),(0,h.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,h.jsx)("input",{type:"radio",value:"without",name:"priority",onChange:c}),(0,h.jsx)("span",{className:"filterPopup_without grey"}),(0,h.jsx)("span",{children:"Without priority"})]}),(0,h.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,h.jsx)("input",{type:"radio",value:"low",name:"priority",onChange:c}),(0,h.jsx)("span",{className:"filterPopup_without blue"}),(0,h.jsx)("span",{children:" Low"})]}),(0,h.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,h.jsx)("input",{type:"radio",value:"medium",name:"priority",onChange:c}),(0,h.jsx)("span",{className:"filterPopup_without pink"}),(0,h.jsx)("span",{children:" Medium"})]}),(0,h.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,h.jsx)("input",{type:"radio",value:"high",name:"priority",onChange:c}),(0,h.jsx)("span",{className:"filterPopup_without green"}),(0,h.jsx)("span",{children:"High"})]})]})]})},Z=function(){var e=(0,n.v9)(l.JP),a=(0,n.v9)(w.eo);return(0,h.jsxs)("div",{className:"theme-".concat(e," screenPage"),children:[(0,h.jsxs)("div",{className:"screenPage_header theme-".concat(e),children:[(0,h.jsx)("h1",{className:"screenPage_title theme-".concat(e)}),(0,h.jsx)(s.Z,{data:(0,h.jsxs)("span",{className:"screenPage_filter theme-".concat(e),children:[(0,h.jsx)(r.Z,{id:"filter",width:16,height:16}),(0,h.jsx)("span",{className:"screenPage_filterText theme-".concat(e),children:"Filter"})]}),children:(0,h.jsx)(P,{})})]}),(0,h.jsxs)("div",{className:"screenPage_canvas theme-".concat(e),children:[(0,h.jsx)("ul",{className:"screenPage_columns theme-".concat(e),children:a.map((function(e){return(0,d.createElement)(_,(0,c.Z)((0,c.Z)({},e),{},{key:e._id}))}))}),(0,h.jsx)(s.Z,{data:(0,h.jsxs)("span",{className:"screenPage_addButton theme-".concat(e),children:[(0,h.jsx)("span",{className:"screenPage_addButtonPlus theme-".concat(e),children:(0,h.jsx)(r.Z,{id:"plus",width:14,height:14})}),(0,h.jsx)("span",{className:"screenPage_addButtonText theme-".concat(e),children:"Add another column"})]}),children:(0,h.jsx)(u,{})})]})]})}},2387:function(e,a,t){t.d(a,{Z:function(){return m}});var c=t(9439),s=t(2791),n=t(7948),l=t.n(n),i=t(1),r=t(188),o=t(9434),d=t(184);l().setAppElement("#root");var m=function(e){var a,t=s.useState(!1),n=(0,c.Z)(t,2),m=n[0],h=n[1],u=e.children,p=e.data,x=(0,o.v9)(r.JP);function j(){h(!1)}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"open-modal-button theme-".concat(x),onClick:function(){h(!0)},children:p}),(0,d.jsxs)(l(),{isOpen:m,onAfterOpen:function(){},onRequestClose:j,className:"modal theme-".concat(x),overlayClassName:"modal-overlay theme-".concat(x),contentLabel:"modal",children:[(0,d.jsx)("button",{className:"close-modal-button theme-".concat(x),onClick:j,children:(0,d.jsx)(i.Z,{id:"x-close",width:18,height:18})}),(a=u,s.cloneElement(a,{closeModal:j}))]})]})}}}]);
//# sourceMappingURL=971.f60fe0dd.chunk.js.map