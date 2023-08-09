"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{4971:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var n=t(1413),s=t(9439),c=t(3433),l=t(5861),i=t(4687),r=t.n(i),o=t(2387),d=t(9434),m=t(188),h=t(1634),u=t(1),p=t(2791),x=t(7689),j=t(4238),f=t(184),N=function(e){var a=e.title,t=e.id,n=e.closeModal,c=(0,d.v9)(m.JP),l=(0,p.useState)(""),i=(0,s.Z)(l,2),r=i[0],o=i[1],h=(0,p.useState)(a||""),N=(0,s.Z)(h,2),v=N[0],b=N[1],g=(0,x.UO)().boardName,w=(0,d.I0)();return(0,f.jsxs)("form",{className:"columnForm",onSubmit:function(e){var s=e.target.elements.title.value;if(e.preventDefault(),""!==s)return a&&t?void(s!==a?(w((0,j.hr)({name:s,id:t})),n(),n()):n()):(w((0,j.Kq)({idBoard:g,newColumn:s})),void n());o("Required")},children:[(0,f.jsxs)("p",{className:"columnTitle theme-".concat(c),children:[a?"Edit":"Add"," column"]}),(0,f.jsxs)("div",{className:"columnInputWrapper",children:[(0,f.jsx)("input",{type:"text",name:"title",placeholder:"Title",className:"titleInput theme-".concat(c),value:v,onChange:function(e){return b(e.target.value)}}),r&&(0,f.jsx)("p",{className:"errorMessage theme-".concat(c),children:r})]}),(0,f.jsxs)("button",{className:"columnButton theme-".concat(c),type:"submit",children:[(0,f.jsx)("span",{className:"columnIcon theme-".concat(c),children:(0,f.jsx)(u.Z,{id:"plus",width:14,height:14})}),a?"Edit":"Add"]})]})},v=t(5705),b=t(9710),g=t(1951),w=t(9513),_=t.n(w),Z=function(e){var a=e.getDeadline,t=(0,p.useState)(new Date),n=(0,s.Z)(t,2),c=n[0],l=n[1],i=(0,d.v9)(m.JP),r=(0,p.forwardRef)((function(e,a){e._;var t,n=e.onClick;return(0,f.jsxs)("button",{type:"button",className:"button-custom-input theme-".concat(i),onClick:n,ref:a,children:[(0,f.jsx)("span",{className:"input-custom-text",children:(t=c,(0,b.Z)(t)?"Today, ".concat((0,g.default)(t,"MMMM d")):(0,g.default)(t,"EEEE, MMMM d"))}),(0,f.jsx)(u.Z,{id:"chevron-down",width:18,height:18})]})}));return(0,f.jsx)("div",{children:(0,f.jsx)(_(),{selected:c,onChange:function(e){a(e),l(e)},minDate:new Date,calendarStartDay:1,customInput:(0,f.jsx)(r,{}),calendarClassName:"theme-".concat(i)})})},y=function(e){var a=e.columnId,t=void 0===a?null:a,n=e.taskId,s=void 0===n?null:n,c=e.closeModal,l=e.data,i=(l=void 0===l?{}:l).title,r=l.description,o=l.labelColor,h=(l.deadLine,(0,d.v9)(m.JP)),p=(0,d.I0)();return(0,f.jsx)(v.J9,{initialValues:{columnId:t,_id:s,description:r,title:i||"",labelColor:o||"without",deadLine:"2023-08-03T17:01:27.257+00:00"},validate:function(e){var a={};return e.title||(a.title="Required"),e.description||(a.description="Required"),a},onSubmit:function(e,a){var n=a.setSubmitting;if(!t&&s)p((0,j.XV)(e)),n(!1),c();else{if(s||!t)return void console.log("Oops! Something went wrong :(");p((0,j.Pb)(e)),n(!1),c()}},children:function(e){var a=e.values,n=e.errors,c=e.touched,l=e.handleChange,i=e.handleBlur,r=e.handleSubmit,o=e.isSubmitting;return(0,f.jsxs)("form",{className:"add-form theme-".concat(h),onSubmit:r,children:[(0,f.jsx)("p",{className:"add-form-title theme-".concat(h),children:t&&s?"Edit card":"Add card"}),(0,f.jsxs)("div",{className:"add-form-wrap",children:[(0,f.jsxs)("div",{className:"add-form-email-wrap",children:[(0,f.jsx)("input",{className:"add-form-input email theme-".concat(h),type:"text",name:"title",placeholder:"Title",onChange:l,onBlur:i,value:a.title}),(0,f.jsx)("p",{className:"add-form-input-error theme-".concat(h),children:n.title&&c.title&&n.title})]}),(0,f.jsxs)("div",{className:"add-form-desc-wrap",children:[(0,f.jsx)("textarea",{className:"add-form-input desc theme-".concat(h),rows:7,name:"description",placeholder:"Description",onChange:l,onBlur:i,value:a.description}),(0,f.jsx)("p",{className:"add-form-input-error theme-".concat(h),children:n.desc&&c.desc&&n.desc})]}),(0,f.jsx)("div",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"add-form-group-title theme-".concat(h),children:"Label color"}),(0,f.jsxs)("div",{className:"add-form-radio-group",role:"group","aria-labelledby":"labelColor-group",children:[(0,f.jsxs)("label",{className:"add-form-radio low",children:[(0,f.jsx)(v.gN,{className:"visually-hidden",type:"radio",name:"labelColor",value:"low"}),(0,f.jsx)("span",{className:"outer-circle"}),(0,f.jsx)("span",{className:"inner-circle"})]}),(0,f.jsxs)("label",{className:"add-form-radio medium",children:[(0,f.jsx)(v.gN,{className:"visually-hidden",type:"radio",name:"labelColor",value:"medium"}),(0,f.jsx)("span",{className:"outer-circle"}),(0,f.jsx)("span",{className:"inner-circle"})]}),(0,f.jsxs)("label",{className:"add-form-radio high",children:[(0,f.jsx)(v.gN,{className:"visually-hidden",type:"radio",name:"labelColor",value:"high"}),(0,f.jsx)("span",{className:"outer-circle"}),(0,f.jsx)("span",{className:"inner-circle"})]}),(0,f.jsxs)("label",{className:"add-form-radio without",children:[(0,f.jsx)(v.gN,{className:"visually-hidden",type:"radio",name:"labelColor",value:"without"}),(0,f.jsx)("span",{className:"outer-circle theme-".concat(h)}),(0,f.jsx)("span",{className:"inner-circle theme-".concat(h)})]})]})]})}),(0,f.jsxs)("div",{className:"add-form-deadline",children:[(0,f.jsx)("p",{className:"add-form-deadline-title theme-".concat(h),children:"Deadline"}),(0,f.jsx)(Z,{})]}),(0,f.jsxs)("button",{className:"add-form-submit theme-".concat(h),type:"submit",disabled:o,children:[(0,f.jsx)("div",{className:"add-form-icon-wrap theme-".concat(h),children:(0,f.jsx)(u.Z,{id:"plus",width:14,height:14})}),t&&s?"Edit":"Add"]})]})]})}})},P=t(1807),I=t(2313),C=function(e){var a=e._id,t=e.title,c=e.description,l=e.labelColor,i=e.deadLine,r=e.index,h=(0,p.useState)(l),x=(0,s.Z)(h,2),N=x[0],v=x[1],b=(0,d.v9)(m.JP),g=(0,d.I0)();(0,p.useEffect)((function(){v(l)}),[l]);var w=new Date(i),_=w.getFullYear(),Z=String(w.getMonth()+1).padStart(2,"0"),C=String(w.getDate()).padStart(2,"0"),k=new Date,S=function(e){var a=e.split("/"),t=parseInt(a[0],10),n=parseInt(a[1],10)-1,s=parseInt(a[2],10);return new Date(s,n,t)}(i),D=k.toDateString()===S.toDateString();return(0,f.jsx)(I._l,{draggableId:a,index:r,children:function(e){return(0,f.jsx)("div",(0,n.Z)((0,n.Z)((0,n.Z)({className:"cardWrapper theme-".concat(b,"  priorityClass-").concat(N),priority:l,ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:"cardTitle theme-".concat(b),children:t}),(0,f.jsx)("p",{className:"cardDescriptionWrapper theme-".concat(b),children:(0,f.jsx)(P.default,{className:"cardDescription theme-".concat(b),text:c,length:100})}),(0,f.jsx)("hr",{className:"cardLine theme-".concat(b)}),(0,f.jsxs)("div",{className:"topWrapper theme-".concat(b),children:[(0,f.jsxs)("div",{className:"cardPriority theme-".concat(b),children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{className:"cardSubtitle theme-".concat(b),children:"Priority"}),(0,f.jsxs)("p",{className:"cardSubtextPrimary theme-".concat(b),children:[(0,f.jsx)("span",{className:"cardBellPrimary theme-".concat(b," priorityClass-").concat(N),priority:l}),l]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{className:"cardSubtitle theme-".concat(b),children:"Deadline"}),(0,f.jsx)("p",{className:"cardSubtextDeadline theme-".concat(b),children:"".concat(C,"\\").concat(Z,"\\").concat(_)})]})]}),(0,f.jsxs)("div",{className:"IconWrapper theme-".concat(b),children:[D&&(0,f.jsx)("span",{className:"cardIcon theme-".concat(b),children:(0,f.jsx)(u.Z,{id:"bell",width:16,height:16})}),(0,f.jsx)("span",{className:"cardIcon theme-".concat(b),children:(0,f.jsx)(u.Z,{id:"arrow-circle-broken-right",width:16,height:16})}),(0,f.jsx)(o.Z,{data:(0,f.jsx)("span",{className:"cardIcon theme-".concat(b),children:(0,f.jsx)(u.Z,{id:"pencil",width:16,height:16})}),children:(0,f.jsx)(y,{taskId:a,data:{title:t,description:c,labelColor:l,deadLine:i}})}),(0,f.jsx)("span",{type:"button",onClick:function(){return g((0,j.rY)(a))},className:"cardIcon theme-".concat(b),children:(0,f.jsx)(u.Z,{className:"cardIcon theme-".concat(b),id:"trash",width:16,height:16})})]})]})]})}))}},a)},k=t(1425),S=function(e){var a=e._id,t=e.name,s=(0,d.v9)(m.JP),c=(0,d.v9)(k.eo),l=c[c.findIndex((function(e){return e._id===a}))].tasks,i=(0,d.v9)(h.LY),r=(0,d.I0)(),x="all"===i?l:l.filter((function(e){return e.labelColor.includes(i)}));return(0,f.jsxs)("li",{className:"column theme-".concat(s),children:[(0,f.jsxs)("div",{className:"column_header theme-".concat(s),children:[(0,f.jsx)("h2",{className:"column_headerTitle theme-".concat(s),children:t}),(0,f.jsxs)("div",{className:"column_buttonWrap theme-".concat(s),children:[(0,f.jsx)(o.Z,{data:(0,f.jsx)("span",{className:"column_buttonIcon theme-".concat(s),children:(0,f.jsx)(u.Z,{id:"pencil",width:"16",height:"16"})}),children:(0,f.jsx)(N,{title:t,id:a})}),(0,f.jsx)("button",{className:"column_buttonBox theme-".concat(s),onClick:function(){return function(e){0===l.length?r((0,j.HV)(e)):console.log("The column must be empty")}(a)},children:(0,f.jsx)("span",{className:"column_buttonIcon theme-".concat(s),children:(0,f.jsx)(u.Z,{id:"trash",width:"16",height:"16"})})})]})]}),(0,f.jsx)(I.bK,{droppableId:a,children:function(e){return(0,f.jsxs)("ul",(0,n.Z)((0,n.Z)({className:"cardsWrap theme-".concat(s)},e.droppableProps),{},{ref:e.innerRef,children:[x.map((function(e,a){return(0,p.createElement)(C,(0,n.Z)((0,n.Z)({},(0,n.Z)((0,n.Z)({},e),{},{taskId:e._id})),{},{index:a,key:e._id}))})),e.placeholder]}))}},a),(0,f.jsx)(o.Z,{data:(0,f.jsxs)("span",{className:"column_buttonAdd theme-".concat(s),children:[(0,f.jsx)("span",{className:"column_buttonAddIcon theme-".concat(s),children:(0,f.jsx)(u.Z,{id:"plus",width:"14",height:"14"})}),"Add another card"]}),children:(0,f.jsx)(y,{columnId:a})})]})},D=function(){var e=(0,d.I0)(),a=(0,d.v9)(m.JP),t=(0,d.v9)(h.LY),n=function(a){e((0,h.M6)(a.target.value))};return(0,p.useEffect)((function(){document.querySelector("[value=".concat(t,"]")).setAttribute("checked",!0)}),[t]),(0,f.jsxs)("div",{className:"theme-".concat(a," filterPopup"),children:[(0,f.jsx)("h2",{className:"filterPopup_header theme-".concat(a),children:"Filters"}),(0,f.jsxs)("form",{className:"filterPopup_radioButtons theme-".concat(a),children:[(0,f.jsxs)("div",{className:"filterPopup_lineDiv theme-".concat(a),children:[(0,f.jsx)("h3",{className:"filterPopup_title theme-".concat(a),children:"Label color"}),(0,f.jsxs)("label",{className:"filterPopup_showAllBtn theme-".concat(a),children:[(0,f.jsx)("input",{className:"filterPopup_showAllBtnInput",type:"radio",value:"all",name:"priority",onChange:n}),"Show all"]})]}),(0,f.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,f.jsx)("input",{type:"radio",value:"without",name:"priority",onChange:n}),(0,f.jsx)("span",{className:"filterPopup_without grey"}),(0,f.jsx)("span",{children:"Without priority"})]}),(0,f.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,f.jsx)("input",{type:"radio",value:"low",name:"priority",onChange:n}),(0,f.jsx)("span",{className:"filterPopup_without blue"}),(0,f.jsx)("span",{children:" Low"})]}),(0,f.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,f.jsx)("input",{type:"radio",value:"medium",name:"priority",onChange:n}),(0,f.jsx)("span",{className:"filterPopup_without pink"}),(0,f.jsx)("span",{children:" Medium"})]}),(0,f.jsxs)("label",{className:"filterPopup_label theme-".concat(a),children:[(0,f.jsx)("input",{type:"radio",value:"high",name:"priority",onChange:n}),(0,f.jsx)("span",{className:"filterPopup_without green"}),(0,f.jsx)("span",{children:"High"})]})]})]})},E=function(){var e=(0,d.v9)(m.JP),a=(0,d.I0)(),t=(0,d.v9)(k.eo),i=function(){var e=(0,l.Z)(r().mark((function e(l){var i,o,d,m,h,u,p,x;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.destination){e.next=2;break}return e.abrupt("return");case 2:i=t.findIndex((function(e){return e._id===l.source.droppableId})),o=t.findIndex((function(e){return e._id===l.destination.droppableId})),d=(0,c.Z)(t[i].tasks),m=(0,c.Z)(t[o].tasks),h=d.splice(l.source.index,1),u=(0,s.Z)(h,1),p=u[0],i===o?d.splice(l.destination.index,0,p):m.splice(l.destination.index,0,p),(x=(0,c.Z)(t))[i]=(0,n.Z)((0,n.Z)({},x[i]),{},{tasks:d}),i!==o&&(x[o]=(0,n.Z)((0,n.Z)({},x[o]),{},{tasks:m})),a((0,k.XV)(x)),a((0,j.P7)({id:p._id,columnId:l.destination.droppableId,indexTo:l.destination.index,indexFrom:l.source.index}));case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"theme-".concat(e," screenPage"),children:[(0,f.jsxs)("div",{className:"screenPage_header theme-".concat(e),children:[(0,f.jsx)("h1",{className:"screenPage_title theme-".concat(e)}),(0,f.jsx)(o.Z,{data:(0,f.jsxs)("span",{className:"screenPage_filter theme-".concat(e),children:[(0,f.jsx)(u.Z,{id:"filter",width:16,height:16}),(0,f.jsx)("span",{className:"screenPage_filterText theme-".concat(e),children:"Filter"})]}),children:(0,f.jsx)(D,{})})]}),(0,f.jsxs)("div",{className:"screenPage_canvas theme-".concat(e),children:[(0,f.jsx)("ul",{className:"screenPage_columns theme-".concat(e),children:(0,f.jsx)(I.Z5,{onDragEnd:i,children:t.map((function(e){return(0,p.createElement)(S,(0,n.Z)((0,n.Z)({},e),{},{key:e._id}))}))})}),(0,f.jsx)(o.Z,{data:(0,f.jsxs)("span",{className:"screenPage_addButton theme-".concat(e),children:[(0,f.jsx)("span",{className:"screenPage_addButtonPlus theme-".concat(e),children:(0,f.jsx)(u.Z,{id:"plus",width:14,height:14})}),(0,f.jsx)("span",{className:"screenPage_addButtonText theme-".concat(e),children:"Add another column"})]}),children:(0,f.jsx)(N,{})})]})]})}},2387:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(9439),s=t(2791),c=t(7948),l=t.n(c),i=t(1),r=t(188),o=t(9434),d=t(184);l().setAppElement("#root");var m=function(e){var a,t=s.useState(!1),c=(0,n.Z)(t,2),m=c[0],h=c[1],u=e.children,p=e.data,x=(0,o.v9)(r.JP);function j(){h(!1)}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"open-modal-button theme-".concat(x),onClick:function(){h(!0)},children:p}),(0,d.jsxs)(l(),{isOpen:m,onAfterOpen:function(){},onRequestClose:j,className:"modal theme-".concat(x),overlayClassName:"modal-overlay theme-".concat(x),contentLabel:"modal",children:[(0,d.jsx)("button",{className:"close-modal-button theme-".concat(x),onClick:j,children:(0,d.jsx)(i.Z,{id:"x-close",width:18,height:18})}),(a=u,s.cloneElement(a,{closeModal:j}))]})]})}}}]);
//# sourceMappingURL=971.d020fee2.chunk.js.map