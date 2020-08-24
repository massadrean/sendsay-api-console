(this["webpackJsonpsendsay-api-console"]=this["webpackJsonpsendsay-api-console"]||[]).push([[2],{144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},628:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a(24),c=a(90),i=a.n(c),s=a(3),u=a(29),m=a(141),b=a(78),d=a.n(b),g=(a(144),function(e){var t=e.leftLabelText,a=e.rightLabelText,n=e.type,l=void 0===n?"text":n,o=e.name,c=e.value,i=e.handleChange,s=e.isError;return r.a.createElement("label",{className:"input-label-group"},t||a?r.a.createElement("div",{className:"input-label-group__title-row"},t&&r.a.createElement("div",{className:d()("input-label-group__title-col","input-label-group__title-left",{"input-label-group__left-text_error":s})},t),a&&r.a.createElement("div",{className:"input-label-group__title-col input-label-group__title-right"},a)):null,r.a.createElement("input",{type:l,className:d()("form-control",{"form-control_error":s}),name:o,value:c,onChange:i}))}),f=a(70),p=a(92);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=r.a.createElement("g",{opacity:.8},r.a.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"#CF2C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M8 15H16",stroke:"#CF2C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M9 9H9.01",stroke:"#CF2C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M15 9H15.01",stroke:"#CF2C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),h=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",_({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,v)},O=r.a.forwardRef((function(e,t){return r.a.createElement(h,_({svgRef:t},e))})),j=(a.p,a(145),a(146),function e(t){var a=t.handleSubmit,l=t.title,o=Object(n.useRef)(null),c=Object(n.useState)({login:"",sublogin:"",password:""}),i=Object(u.a)(c,2),b=i[0],d=i[1],_=Object(n.useState)(!1),E=Object(u.a)(_,2),v=E[0],h=E[1],j=Object(n.useState)({}),N=Object(u.a)(j,2),y=N[0],k=N[1],w=Object(n.useState)({}),x=Object(u.a)(w,2),C=x[0],L=x[1],S=Object(n.useState)(0),T=Object(u.a)(S,2),A=T[0],R=T[1];Object(n.useEffect)((function(){return e.isMounted=!0,function(){e.isMounted=!1}}),[]);var z=function(t){var a=t.target,n=a.name,r=a.value;d((function(t){var a=Object(s.a)({},t);if(a[n]=r,e.wasErrors){var l=H(a);k(l)}return a}))},H=function(e){var t={};return/^[A-Za-z0-9_@.]{4,}$/.test(e.login)||(t.login=!0),/^[A-Za-z0-9_]{0,}$/.test(e.sublogin)||(t.sublogin=!0),/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_@.?!#$%^&*()\\\-=+/|;:'",~><}{\][ ]{8,}$/.test(e.password)||(t.password=!0),t};Object(n.useEffect)((function(){o.current&&R(o.current.clientHeight)}),[C]);return r.a.createElement("form",{className:"login-form",onSubmit:function(t){t.preventDefault();var n=H(b),r=!!Object.keys(n).length;e.wasErrors=r,k(n),r||v||(h(!0),a(b).catch((function(e){L(e),h(!1)})).finally((function(){e.isMounted&&h(!1)})))}},l&&r.a.createElement("h1",{className:"login-form__title"},l),!!Object.keys(C).length&&r.a.createElement(m.a,{onResize:function(){R(o.current.clientHeight)},handleWidth:!0},r.a.createElement("div",{className:"login-form__alert",style:{height:A}},r.a.createElement(p.a,{title:"\u0412\u0445\u043e\u0434 \u043d\u0435 \u0432\u044b\u0448\u0435\u043b",errorText:JSON.stringify(C),iconComponent:O,ref:o}))),r.a.createElement("div",{className:"login-form__row"},r.a.createElement(g,{leftLabelText:"\u041b\u043e\u0433\u0438\u043d",name:"login",handleChange:z,value:b.login,isError:y.login})),r.a.createElement("div",{className:"login-form__row"},r.a.createElement(g,{leftLabelText:"\u0421\u0443\u0431\u043b\u043e\u0433\u0438\u043d",rightLabelText:"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e",name:"sublogin",handleChange:z,value:b.sublogin,isError:y.sublogin})),r.a.createElement("div",{className:"login-form__row"},r.a.createElement(g,{leftLabelText:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",handleChange:z,value:b.password,isError:y.password})),r.a.createElement("div",{className:"login-form__submit"},r.a.createElement(f.a,{color:"blue",type:"submit",disabled:!!Object.keys(y).length,loading:v},"\u0412\u043e\u0439\u0442\u0438")))});a(148),t.default=Object(l.b)(null,{requestSessionThunkAction:o.b})((function(e){var t=e.requestSessionThunkAction;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"container login-page__container"},r.a.createElement("div",{className:"login-page__inner"},r.a.createElement("div",{className:"login-page__logo"},r.a.createElement("img",{src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"login-page__form"},r.a.createElement(j,{title:"API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430",handleSubmit:function(e){return t(e)}})),r.a.createElement("div",{className:"login-page__bottom"},r.a.createElement(f.a,{href:"https://github.com/massadrean/",color:"grey",variant:"text","data-hover":"github.com/massadrean",rel:"noreferrer",target:"_blank"},"github.com/massadrean")))))}))},70:function(e,t,a){"use strict";var n=a(30),r=a(18),l=a(0),o=a.n(l),c=a(78),i=a.n(c),s=(a(91),Object(l.forwardRef)((function(e,t){var a,l=e.children,c=e.href,s=e.type,u=void 0===s?"button":s,m=e.color,b=e.variant,d=e.fullWidth,g=e.size,f=e.textAlign,p=e.startIcon,_=e.endIcon,E=e.iconHover,v=e.loading,h=e.disabled,O=Object(r.a)(e,["children","href","type","color","variant","fullWidth","size","textAlign","startIcon","endIcon","iconHover","loading","disabled"]),j=i()("button",(a={},Object(n.a)(a,"button_".concat(m),m),Object(n.a)(a,"button_".concat(b),b),Object(n.a)(a,"button_".concat(g),g),Object(n.a)(a,"button_icon-hover-".concat(E),E),Object(n.a)(a,"button_text-".concat(f),f),Object(n.a)(a,"button_block",d),Object(n.a)(a,"button_loading",v),Object(n.a)(a,"button_disabled",h),a));return o.a.createElement(o.a.Fragment,null,c?o.a.createElement("a",Object.assign({href:c,className:j,ref:t},O),p&&o.a.createElement("span",{className:"button__start-icon"},o.a.createElement(p,null)),o.a.createElement("span",{className:"button__inner"},l),_&&o.a.createElement("span",{className:"button__end-icon"},o.a.createElement(_,null))):o.a.createElement("button",Object.assign({type:u,className:j,disabled:h,ref:t},O),p&&o.a.createElement("span",{className:"button__start-icon"},o.a.createElement(p,null)),o.a.createElement("span",{className:"button__inner"},l),_&&o.a.createElement("span",{className:"button__end-icon"},o.a.createElement(_,null))))})));t.a=s},90:function(e,t,a){e.exports=a.p+"static/media/LOGO.97dd5a0c.svg"},91:function(e,t,a){},92:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(93),Object(n.forwardRef)((function(e,t){var a=e.title,n=e.errorText,l=e.iconComponent,o=e.iconSrc;return r.a.createElement("div",{className:"error-message",ref:t},l&&r.a.createElement("div",{className:"error-message__icon"},r.a.createElement(l,null)),o&&r.a.createElement("div",{className:"error-message__icon"},r.a.createElement("img",{src:o,alt:""})),r.a.createElement("div",{className:"error-message__text"},r.a.createElement("div",{className:"error-message__title"},a),n&&r.a.createElement("div",{className:"error-message__descr"},n)))})));t.a=l},93:function(e,t,a){}}]);
//# sourceMappingURL=LoginPage.35942129.chunk.js.map