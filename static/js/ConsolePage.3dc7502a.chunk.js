(this["webpackJsonpsendsay-api-console"]=this["webpackJsonpsendsay-api-console"]||[]).push([[1],{149:function(e,t,n){},150:function(e,t,n){},152:function(e,t,n){},194:function(e,t,n){},618:function(e,t,n){},619:function(e,t,n){},620:function(e,t,n){},626:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(9),o=n(14),c=n.n(o),i=n(25),s=n(5),u=n(12),f=function(e){return{type:s.c,payload:e}},m=function(e){return{type:s.f,value:e}},d=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.b}),r=JSON.parse(e),a={action:r.action||"[no-action]",body:e,response:""},t.prev=3,t.next=6,u.a.request(r);case 6:a.response=t.sent,a.successful=!0,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),a.successful=!1,a.response=t.t0;case 14:return t.prev=14,a.response=JSON.stringify(a.response,null,2),n(f(a)),t.finish(14);case 18:case"end":return t.stop()}}),t,null,[[3,10,14,18]])})));return function(e){return t.apply(this,arguments)}}()},b=n(24),p=n(29),v=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(""),o=Object(p.a)(l,2),c=o[0],i=o[1],s=null;Object(r.useEffect)((function(){return function(){s&&clearTimeout(s)}}),[s]);return Object(r.useEffect)((function(){for(var e=function(){a((function(e){return!e}))},t=["","webkit","moz","ms"],n="",r=0;r<t.length;r++)if("on".concat(t[r],"fullscreenchange")in document){n=t[r];break}return document.documentElement.addEventListener("".concat(n,"fullscreenchange"),e),function(){document.documentElement.removeEventListener("".concat(n,"fullscreenchange"),e)}}),[]),{openFullscreen:function(e){return e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():(i("\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u0430\u0448\u0438\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c."),void(s=setTimeout((function(){i("")}),3e3)))},closeFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},isFullscreen:n,fullscreenError:c}},h=n(70);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=a.a.createElement("g",{opacity:.8},a.a.createElement("path",{d:"M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M16 17L21 12L16 7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M21 12H9",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),y=function(e){var t=e.svgRef,n=e.title,r=O(e,["svgRef","title"]);return a.a.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,g)},_=a.a.forwardRef((function(e,t){return a.a.createElement(y,E({svgRef:t},e))}));n.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=a.a.createElement("path",{d:"M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),R=function(e){var t=e.svgRef,n=e.title,r=k(e,["svgRef","title"]);return a.a.createElement("svg",j({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,w)},x=a.a.forwardRef((function(e,t){return a.a.createElement(R,j({svgRef:t},e))}));n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=a.a.createElement("path",{d:"M1 6H4C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4V1M14 1V4C14 4.53043 14.2107 5.03914 14.5858 5.41421C14.9609 5.78929 15.4696 6 16 6H19M19 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V19M6 19V16C6 15.4696 5.78929 14.9609 5.41421 14.5858C5.03914 14.2107 4.53043 14 4 14H1",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),L=function(e){var t=e.svgRef,n=e.title,r=C(e,["svgRef","title"]);return a.a.createElement("svg",N({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,D)},S=a.a.forwardRef((function(e,t){return a.a.createElement(L,N({svgRef:t},e))})),F=(n.p,n(92)),T=(n(149),Object(l.b)(null,(function(e){return{logoutAction:function(){e(Object(b.c)())}}}))((function(e){var t=e.logo,n=e.title,r=e.userLogin,l=e.userSublogin,o=e.logoutAction,c=v(),i=c.openFullscreen,s=c.closeFullscreen,u=c.isFullscreen,f=c.fullscreenError;return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"container header__container"},a.a.createElement("div",{className:"header__logo"},a.a.createElement("img",{src:t,alt:""})),n&&a.a.createElement("h1",{className:"header__title"},n),a.a.createElement("div",{className:"header__user-info"},a.a.createElement("div",{className:"header__user-info-col header__user-login"},r),l&&a.a.createElement("div",{className:"header__user-info-col header__user-sublogin"},l)),a.a.createElement("div",{className:"header__logout"},a.a.createElement(h.a,{color:"blue",variant:"text",endIcon:_,iconHover:"stroke",onClick:function(){u&&s(),o()}},"\u0412\u044b\u0439\u0442\u0438")),a.a.createElement("div",{className:"header__toggle-fullscreen"},a.a.createElement(h.a,{color:"blue",variant:"text",iconHover:"stroke",onClick:function(){u?s():i(document.documentElement)}},u?a.a.createElement(S,null):a.a.createElement(x,null)))),f&&a.a.createElement("div",{className:"fixed-error"},a.a.createElement(F.a,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",errorText:f})))}))),A=n(90),H=n.n(A),q=n(627),P=n(629),I=(n(150),Object(r.forwardRef)((function(e,t){var n=e.isOpen,r=e.style,l=e.children;return a.a.createElement(q.a,{in:n,timeout:250,classNames:"white-dropdown_transition",unmountOnExit:!0},a.a.createElement("div",{className:"white-dropdown",style:r,ref:t},l))}))),M=n(3),z=n(78),W=n.n(z),V=n(624),B=n(115),J=n(151);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var K=a.a.createElement("circle",{cx:2,cy:2,r:2,fill:"#999999"}),Q=a.a.createElement("circle",{cx:2,cy:9,r:2,fill:"#999999"}),U=a.a.createElement("circle",{cx:2,cy:16,r:2,fill:"#999999"}),Y=function(e){var t=e.svgRef,n=e.title,r=X(e,["svgRef","title"]);return a.a.createElement("svg",G({width:4,height:18,viewBox:"0 0 4 18",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,K,Q,U)},Z=a.a.forwardRef((function(e,t){return a.a.createElement(Y,G({svgRef:t},e))})),$=(n.p,n(152),Object(l.b)(null,(function(e){return{setConsoleInputValueAction:function(t){return e(m(t))},removeRequestFromHistoryAction:function(t){return e((n=t,{type:s.d,requestBody:n}));var n},submitRequestThunkAction:function(t){return e(d(t))}}}))((function(e){var t=e.title,n=e.requestBody,l=e.successful,o=e.dropdown,s=e.scrollbarApi,u=e.transition,f=void 0===u?500:u,m=e.setConsoleInputValueAction,d=e.submitRequestThunkAction,b=e.removeRequestFromHistoryAction,v=Object(r.useRef)(null),E=Object(r.useRef)(null),O=Object(r.useRef)(null),g=Object(r.useState)(""),y=Object(p.a)(g,2),_=y[0],j=y[1],k=Object(r.useState)(!1),w=Object(p.a)(k,2),R=w[0],x=w[1],N=function(){m(n)},C=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a(n);case 3:j("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),j("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438");case 9:return e.prev=9,x(!0),O.current=setTimeout((function(){x(!1)}),2e3),e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[0,6,9,13]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){return function(){clearTimeout(O.current)}}),[O]);var D=Object(V.a)((function(e){var t=e.layerProps,r=e.isOpen,l=e.close;return a.a.createElement(o,{isOpen:r,ref:t.ref,style:Object(M.a)(Object(M.a)({},t.style),{},{left:-1===Math.sign(t.style.left)?0:t.style.left})},a.a.createElement(h.a,{color:"white-blue",textAlign:"left",fullWidth:!0,onClick:function(){N(),d(n),l()}},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),a.a.createElement(h.a,{color:"white-blue",textAlign:"left",fullWidth:!0,onClick:function(){C(),l()}},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement("div",{className:"history-label__dropdown-divider"}),a.a.createElement(h.a,{color:"white-red",textAlign:"left",fullWidth:!0,onClick:function(){!function(){var e=s.offset.x-E.current.clientWidth;s.scrollTo(e,0,f),b(n)}(),l()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}),{placement:{anchor:"BOTTOM_RIGHT",possibleAnchors:["TOP_CENTER","TOP_LEFT","TOP_RIGHT","BOTTOM_LEFT","BOTTOM_CENTER","BOTTOM_RIGHT"],autoAdjust:!0,snapToAnchor:!0,preferX:"LEFT",triggerOffset:0,SCROLLOFFSET:15},closeOnOutsideClick:!0,ResizeObserver:B.a}),L=Object(p.a)(D,2),S=L[0],F=L[1];Object(r.useEffect)((function(){F.openFromRef(E),F.close()}),[]),Object(r.useEffect)((function(){if(s){var e=function(){F.isOpen&&F.close()};return s.addListener(e),function(){s.removeListener(e)}}}),[s,F]);return a.a.createElement(a.a.Fragment,null,S,a.a.createElement("div",{ref:E,className:W()("history-label",{"history-label_successful":l,"history-label_unsuccessful":!l})},a.a.createElement("button",{className:"history-label__name-btn",type:"button",onClick:N},t),a.a.createElement("div",{className:"history-label__button"},a.a.createElement(h.a,{color:"grey-opacity",variant:"text",onClick:function(){var e=E.current.getBoundingClientRect();F.isOpen?F.close():F.open({clientRect:e,target:v.current})},ref:v},a.a.createElement(Z,null))),a.a.createElement(q.a,{in:R,timeout:250,classNames:"history-label__tooltip_transition",unmountOnExit:!0},a.a.createElement("div",{className:"history-label__tooltip"},_))))}))),ee=n(118),te=n(153),ne=n(625),re=n(622),ae=n(621),le=function(e,t){var n=Object(r.useState)(null),l=Object(p.a)(n,2),o=l[0],c=l[1],i=Object(r.useCallback)((function(e){null!==e&&c(ae.b.init(e,Object(M.a)({plugins:{invertDelta:{events:[/wheel/]}}},t)))}),[t]),s=function(e){Object(ne.a)(n,e);var t=Object(re.a)(n);function n(){return Object(ee.a)(this,n),t.apply(this,arguments)}return Object(te.a)(n,[{key:"transformDelta",value:function(e,t){return this.shouldInvertDelta(t)?{x:e.y,y:e.x}:e}},{key:"shouldInvertDelta",value:function(e){return this.options.events.some((function(t){return e.type.match(t)}))}}]),n}(ae.a);return s.pluginName="invertDelta",s.defaultOptions={events:[]},ae.b.use(s),a.a.createElement("div",{ref:i},e(o))};function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ie=a.a.createElement("path",{d:"M1 1L19 19",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round"}),se=a.a.createElement("path",{d:"M19 1L1 19",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round"}),ue=function(e){var t=e.svgRef,n=e.title,r=ce(e,["svgRef","title"]);return a.a.createElement("svg",oe({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,ie,se)},fe=a.a.forwardRef((function(e,t){return a.a.createElement(ue,oe({svgRef:t},e))})),me=(n.p,n(194),function(e){var t=e.labels,n=e.clearLabels,l=[],o=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=15,t=l.length;l.forEach((function(n){var r=n.getBoundingClientRect();e+=r.width,t-=1,n.style.left="".concat(e-r.width,"px"),n.style.zIndex=t}))}),[l]);var c=le((function(e){return a.a.createElement("div",{className:"labels-panel__inner",ref:o},a.a.createElement(q.a,{in:!t.length,timeout:500,classNames:"labels-panel__placeholder_transition",unmountOnExit:!0},a.a.createElement("h2",{className:"labels-panel__placeholder"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441:")),a.a.createElement(P.a,{component:null},t.map((function(t){var n=t.action,r=t.body,o=t.successful;return a.a.createElement(q.a,{key:r,timeout:500,classNames:"labels-panel__label_transition"},a.a.createElement("div",{className:"labels-panel__label",ref:function(e){l.push(e)}},a.a.createElement($,{title:n,requestBody:r,successful:o,dropdown:I,scrollbarApi:e,transition:500})))}))))}),{damping:.07,renderByPixels:!0});return a.a.createElement("div",{className:"labels-panel"},a.a.createElement("div",{className:"container labels-panel__container"},a.a.createElement(q.a,{in:!!t.length,timeout:500,classNames:"labels-panel__clear-btn_transition",unmountOnExit:!0},a.a.createElement("div",{className:"labels-panel__clear-btn"},a.a.createElement(h.a,{color:"blue",variant:"text",iconHover:"stroke",onClick:n},a.a.createElement(fe,null)))),c))}),de=n(623),be=n(141),pe=n(195),ve=n.n(pe),he=(n(201),n(202),n(203),n(618),function(e){var t=e.title,n=e.name,l=e.tabSize,o=void 0===l?2:l,c=e.handleChange,i=e.value,s=e.readOnly,u=void 0!==s&&s,f=e.isError,m=Object(r.useRef)(null);return a.a.createElement(be.a,{onResize:function(){m.current.editor.resize()},handleWidth:!0},a.a.createElement("div",{className:"editor"},t&&a.a.createElement("div",{className:W()("editor__title",{editor__title_error:f})},t),a.a.createElement("label",{className:W()("editor__label",{editor__label_error:f})},a.a.createElement(ve.a,{mode:"json",theme:"chrome",onChange:c,fontSize:14,width:"100%",height:"100%",tabSize:o,name:n,showGutter:!1,showPrintMargin:!1,highlightActiveLine:!1,readOnly:u,value:i,ref:m}))))});function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ge=a.a.createElement("g",{opacity:.8},a.a.createElement("path",{d:"M21 10H7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M11 6H3",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M12 14H7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M7 18H3",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ye=function(e){var t=e.svgRef,n=e.title,r=Oe(e,["svgRef","title"]);return a.a.createElement("svg",Ee({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,ge)},_e=a.a.forwardRef((function(e,t){return a.a.createElement(ye,Ee({svgRef:t},e))})),je=(n.p,n(619),Object(l.b)((function(e){return{isLoading:e.console.isFetching,serverResponse:e.console.outputValue,isServerError:e.console.isServerError,consoleRatio:e.console.ratio,inputValue:e.console.inputValue}}),(function(e){return{submitRequestThunkAction:function(t){return e(d(t))},setConsoleRatioAction:function(t){return e(function(e){return{type:s.g,ratio:e}}(t))},setConsoleInputValueAction:function(t){return e(m(t))}}}))((function(e){var t=e.isLoading,n=e.submitRequestThunkAction,l=e.serverResponse,o=e.isServerError,c=e.consoleRatio,i=e.setConsoleRatioAction,s=e.inputValue,u=e.setConsoleInputValueAction,f=Object(r.useState)(!1),m=Object(p.a)(f,2),d=m[0],b=m[1],v=function(e){var t;try{t=JSON.parse(e)}catch(n){return""}return JSON.stringify(t,null,2)};return a.a.createElement("form",{className:"console-form",onSubmit:function(e){if(e.preventDefault(),!t){var r=v(s);r?(b(!1),n(r)):b(!0)}}},a.a.createElement("div",{className:"container console-form__editor-container"},a.a.createElement(de.a,{className:"console-form__split",sizes:c,gutterAlign:"center",snapOffset:0,gutterSize:10,direction:"horizontal",cursor:"col-resize",onDragEnd:function(e){i(e)}},a.a.createElement(he,{title:"\u0417\u0430\u043f\u0440\u043e\u0441:",name:"request-input",tabSize:2,handleChange:function(e){u(e)},value:s,isError:d}),a.a.createElement(he,{title:"\u041e\u0442\u0432\u0435\u0442:",name:"request-output",tabSize:2,isError:o,value:l,readOnly:!0}))),a.a.createElement("div",{className:"console-form__footer"},a.a.createElement("div",{className:"container console-form__footer-container"},a.a.createElement(h.a,{color:"blue",type:"submit",loading:t},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),a.a.createElement("div",{className:"console-form__footer-center"},a.a.createElement(h.a,{href:"https://github.com/massadrean/",color:"grey",variant:"text","data-hover":"github.com/massadrean",rel:"noreferrer",target:"_blank"},"github.com/massadrean")),a.a.createElement(h.a,{color:"blue",variant:"text",startIcon:_e,iconHover:"stroke",onClick:function(){var e=v(s);e?(u(e),b(!1)):b(!0)}},"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))))})));n(620),t.default=Object(l.b)((function(e){return{userData:e.userData,requests:e.console.requests}}),(function(e){return{clearRequestHistoryAction:function(){return e({type:s.a})}}}))((function(e){var t=e.userData,n=e.requests,r=e.clearRequestHistoryAction;return a.a.createElement("div",{className:"console-page"},a.a.createElement(T,{logo:H.a,title:"API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430",userLogin:t.login,userSublogin:t.sublogin}),a.a.createElement(me,{labels:n,clearLabels:r}),a.a.createElement(je,null))}))},70:function(e,t,n){"use strict";var r=n(30),a=n(18),l=n(0),o=n.n(l),c=n(78),i=n.n(c),s=(n(91),Object(l.forwardRef)((function(e,t){var n,l=e.children,c=e.href,s=e.type,u=void 0===s?"button":s,f=e.color,m=e.variant,d=e.fullWidth,b=e.size,p=e.textAlign,v=e.startIcon,h=e.endIcon,E=e.iconHover,O=e.loading,g=e.disabled,y=Object(a.a)(e,["children","href","type","color","variant","fullWidth","size","textAlign","startIcon","endIcon","iconHover","loading","disabled"]),_=i()("button",(n={},Object(r.a)(n,"button_".concat(f),f),Object(r.a)(n,"button_".concat(m),m),Object(r.a)(n,"button_".concat(b),b),Object(r.a)(n,"button_icon-hover-".concat(E),E),Object(r.a)(n,"button_text-".concat(p),p),Object(r.a)(n,"button_block",d),Object(r.a)(n,"button_loading",O),Object(r.a)(n,"button_disabled",g),n));return o.a.createElement(o.a.Fragment,null,c?o.a.createElement("a",Object.assign({href:c,className:_,ref:t},y),v&&o.a.createElement("span",{className:"button__start-icon"},o.a.createElement(v,null)),o.a.createElement("span",{className:"button__inner"},l),h&&o.a.createElement("span",{className:"button__end-icon"},o.a.createElement(h,null))):o.a.createElement("button",Object.assign({type:u,className:_,disabled:g,ref:t},y),v&&o.a.createElement("span",{className:"button__start-icon"},o.a.createElement(v,null)),o.a.createElement("span",{className:"button__inner"},l),h&&o.a.createElement("span",{className:"button__end-icon"},o.a.createElement(h,null))))})));t.a=s},90:function(e,t,n){e.exports=n.p+"static/media/LOGO.97dd5a0c.svg"},91:function(e,t,n){},92:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=(n(93),Object(r.forwardRef)((function(e,t){var n=e.title,r=e.errorText,l=e.iconComponent,o=e.iconSrc;return a.a.createElement("div",{className:"error-message",ref:t},l&&a.a.createElement("div",{className:"error-message__icon"},a.a.createElement(l,null)),o&&a.a.createElement("div",{className:"error-message__icon"},a.a.createElement("img",{src:o,alt:""})),a.a.createElement("div",{className:"error-message__text"},a.a.createElement("div",{className:"error-message__title"},n),r&&a.a.createElement("div",{className:"error-message__descr"},r)))})));t.a=l},93:function(e,t,n){}}]);
//# sourceMappingURL=ConsolePage.3dc7502a.chunk.js.map