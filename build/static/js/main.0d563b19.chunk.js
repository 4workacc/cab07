(this.webpackJsonpcab07=this.webpackJsonpcab07||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=(n(20),n(6)),l=n(1),o=n(2),s=n(4),m=n(3),d=(n(21),n(22),n(23),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"MP_Menu"})}}]),n}(r.a.Component)),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={userId:-1},a}return Object(o.a)(n,[{key:"showCurMenuSet",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"MainPage"},"MainPage",r.a.createElement("div",{className:"MP_MainNav"},r.a.createElement("ul",{className:"MP_MainNav_HeadNav"},r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("MainPage")}},"\u0413\u0430\u043b\u043e\u045e\u043d\u0430\u0435 \u043c\u0435\u043d\u044e"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u041d\u0430\u043f\u0440\u0430\u0446\u043e\u045e\u043a\u0456")}},"\u041d\u0430\u043f\u0440\u0430\u0446\u043e\u045e\u043a\u0456"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u0413\u0443\u043b\u044c\u043d\u0456")}},"\u0413\u0443\u043b\u044c\u043d\u0456"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u0410\u043d\u0456\u043c\u0430\u0446\u044b\u0456")}},"\u0410\u043d\u0456\u043c\u0430\u0446\u044b\u0456"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u0422\u044d\u0441\u0442\u044b")}},"\u0422\u044d\u0441\u0442\u044b"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u0422\u0432\u043e\u0440\u0447\u0430\u0441\u0446\u044c")}},"\u0422\u0432\u043e\u0440\u0447\u0430\u0441\u0446\u044c"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u0421\u0442\u0440\u0430\u0442\u044d\u0433\u0456\u044f")}},"\u0421\u0442\u0440\u0430\u0442\u044d\u0433\u0456\u044f"),r.a.createElement("li",{onClick:function(t){return e.NavClickHandler("\u041c\u044b\u0441\u043b\u0435\u043d\u043d\u0435")}},"\u041c\u044b\u0441\u043b\u0435\u043d\u043d\u0435"))),r.a.createElement(d,null))}}]),n}(r.a.Component),b=n(8),v=(n(24),n(5)),g=function(e){return{type:"LOG_IN",data:{newUserId:11}}},h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).clickLPSubmit=a.clickLPSubmit.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"clickLPSubmit",value:function(){this.props.LP_tryToLogin("asd")}},{key:"LP_fetchToServer",value:function(){var e=this;fetch("https://api.example.com/items").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("input",{type:"text",id:"login",className:"fadeIn second",name:"login",placeholder:""+this.props.ss}),r.a.createElement("input",{type:"text",id:"password",className:"fadeIn third",name:"login",placeholder:"password"}),r.a.createElement("input",{type:"submit",className:"fadeIn fourth LPsubmit",value:"Log In",onClick:this.clickLPSubmit}))}}]),n}(r.a.Component),P=Object(v.b)((function(e){return{ss:e.curUserId}}),(function(e){return{LP_tryToLogin:function(t){return e(g(t))}}}))(h),k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={curPage:r.a.createElement(f,null),curSubPage:"none"},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.curPage,this.state.curSubPage)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.a.createElement(f,null),a="none";switch(e.curPage){case"LoginPage":n=r.a.createElement(P,null);break;case"MainPage":n=r.a.createElement(f,null);break;default:n=r.a.createElement(f,null)}return e.curSubPage,a="none",Object(u.a)(Object(u.a)({},t),{},{curPage:n,curSubPage:a})}}]),n}(r.a.Component),p=Object(v.b)((function(e){return{curId:e.curUserId,curPage:e.curPage,curSubPage:e.curSubPage}}))(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(9),O={curUserId:-1,curPage:"MainPage",curMenuSubPage:"MP_Menu",curSubPage:"none"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(u.a)(Object(u.a)({},e),{},{curUserId:t.data.newUserId,curPage:"MainPage"});default:return e}},C=Object(E.b)(j);i.a.render(r.a.createElement(v.a,{store:C},r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0d563b19.chunk.js.map