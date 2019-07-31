(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(69),a(3)),s=a(4),i=a(8),u=a(5),m=a(7),d=a(23),E=a.n(d),p=(a(88),a(44)),h=a.n(p),g=a(57),v=a(37),O=a.n(v),b=(a(91),a(10)),f=a(26),S=a(27),N=a(35),R=a.n(N),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).loginButton=function(){a.props.clickLogin(),console.log("clicked login")},a.registerButton=function(){a.props.clickRegister(),console.log("clicked register")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.login)}},{key:"render",value:function(){var e=this.props,t=e.login,a=e.register;return console.log(t),r.a.createElement("div",{className:"userAuth"},t&&r.a.createElement(b.b,{to:"/login"})||r.a.createElement(R.a,{id:"loginButton",onClick:this.loginButton},"Login",r.a.createElement(b.b,{to:"/login"})),a||r.a.createElement(R.a,{id:"registerButton",onClick:this.registerButton},"Register"))}}]),t}(n.Component),L={clickLogin:function(){return{type:"CLICKED_LOGIN"}},clickRegister:function(){return{type:"CLICKED_REGISTER"}}},y=Object(f.b)(function(e){var t=e.userauthReducer;return{login:t.login,register:t.register}},L)(Object(S.f)(_)),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logout=Object(g.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(localStorage),e.next=4,localStorage.removeItem("token");case 4:console.log(localStorage),console.log("Logged out"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("===Error Line 16 Navbar.js==="),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},r.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},r.a.createElement("h1",null,"Team 06")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav m-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/news"},"news")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/aboutUs"},"About Us")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/post"},"Post")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/category"},"Category"))," ",r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/login"},"login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/register"},"register")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/",onClick:this.logout},"Logout"))),r.a.createElement(y,null)))}}]),t}(r.a.Component),w=a(17),D=a(61),I=a.n(D),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={pictures:[]},a.onDrop=a.onDrop.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.a,{withIcon:!0,buttonText:"Upload images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}))}}]),t}(r.a.Component),A=(n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.data),r.a.createElement("div",null,this.state.data.map(function(e){var t=e.id,a=e.location;e.postType,e.postStatus,e.picture;return r.a.createElement("tr",{key:e,className:"row"},r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("img",{src:"".concat(t)}),r.a.createElement("p",null,a))))}))}}]),t}(n.Component)),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},"This is a home page"),r.a.createElement("div",null,r.a.createElement("img",{src:O.a,alt:"logo",style:{width:"200px"}})," ",r.a.createElement("img",{src:O.a,alt:"logo",style:{width:"200px"}})," "))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},"Get your News here"))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},"About Us"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.postStatus,r=t.location,l=t.postType;console.log(n,r,l),E.a.post("/api/postings",{postStatus:n,location:r,postType:l}).then(function(e){console.log("hi")}).catch(function(e){console.log(e)}),console.log()},a.checkPostings=function(){},a.changePostStatus=function(e){var t=e.target.value;a.setState({postStatus:t})},a.changeLocation=function(e){var t=e.target.value;a.setState({location:t})},a.changePostType=function(e){var t=e.target.value;a.setState({postType:t})},a.state={postStatus:"",location:"",postType:""},a.toggle=a.toggle.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),r.a.createElement("br",null),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Type Issue"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",onChange:this.changePostStatus,noValidate:!0}))),r.a.createElement("br",null),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Location"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",onChange:this.changeLocation,noValidate:!0}))),r.a.createElement("br",null),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"post type"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:" post staus",name:"post staus",type:"post staus",onChange:this.changePostType,noValidate:!0}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/showPostings"},"Click Here to check posted items in database"),r.a.createElement(C,null),r.a.createElement("br",null),r.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={displayMenu:!1},e.showDropdownMenu=e.showDropdownMenu.bind(Object(w.a)(Object(w.a)(e))),e.hideDropdownMenu=e.hideDropdownMenu.bind(Object(w.a)(Object(w.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"dropdown",style:{background:"red",width:"150px"}},r.a.createElement("div",{className:"button",onClick:this.showDropdownMenu}," ","Item Category ^"),this.state.displayMenu?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"active",href:"#Plastc"},"Plastc")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Tree Fall"},"Tree Fall")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Garbage"},"Garbage ")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Water flood"},"Water flood "))):null)}}]),t}(n.Component),M=a(114),P=a(62),G=a(115),W=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),e.stopPropagation(),console.log(e.target.children[0]);var a={username:e.target.children[0].children[0].children[1].value,password:e.target.children[0].children[1].children[1].value};console.log(a),E.a.post("/userauth/login",a).then(function(e){console.log(e);var a=e.data.message;if("LOGIN_SUCCESS"===a){t.props.validateStatus({USER_NOT_FOUND:!1,validated:!0,LOOGEDIN:!0,INCORRECT_USERNAME_OR_PASSWORD:!1}),localStorage.setItem("token",e.data.token),console.log(localStorage);console.log(t.props.history),t.props.history.push("/")}else if("USER_NOT_FOUND"===a){t.props.validateStatus({USER_NOT_FOUND:!0,validated:!1,LOOGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!1})}else if("INCORRECT_USERNAME_OR_PASSWORD"===a){t.props.validateStatus({USER_NOT_FOUND:!1,validated:!1,LOOGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!0})}}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){console.log("hi")}},{key:"render",value:function(){var e=this,t=this.props,a=t.validated,n=t.LOOGEDIN,l=t.INCORRECT_USERNAME_OR_PASSWORD,o=t.USER_NOT_FOUND;return r.a.createElement("div",null,!n&&r.a.createElement(M.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"LoginForm"},r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Group,{as:P.a,md:"8",controlId:"username"},r.a.createElement(M.a.Label,null,"Username"),r.a.createElement(M.a.Control,{type:"text",placeholder:"User Name"})),r.a.createElement(M.a.Group,{as:P.a,md:"8",controlId:"password"},r.a.createElement(M.a.Label,null,"Password"),r.a.createElement(M.a.Control,{type:"password",placeholder:"Password"}))),l&&r.a.createElement("p",{className:"errorHandler"},"Incorrect Username or Password"),o&&r.a.createElement("p",{className:"errorHandler"},"User not found"),r.a.createElement(G.a,{type:"submit"},"Login")))}}]),t}(n.Component),V={validateStatus:function(e){return{type:"VALIDATE",validate:e}}},X=Object(f.b)(function(e){var t=e.loginReducer,a=t.username,n=t.password,r=t.validated,l=t.LOOGEDIN,o=t.USER_NOT_FOUND,c=t.INCORRECT_USERNAME_OR_PASSWORD;return console.log(e),{username:a,password:n,validated:r,LOOGEDIN:l,USER_NOT_FOUND:o,INCORRECT_USERNAME_OR_PASSWORD:c}},V)(W),Y=a(13),B=a.n(Y),H=a(32),K=a.n(H),q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var a=e.target.children[0].children[0].children[1].value,n=e.target.children[0].children[1].children[1].value,r=e.target.children[0].children[2].children[1].value,l=e.target.children[0].children[3].children[1].value;if(r.includes(" ")||a.includes(" ")||n.includes(" ")){return this.props.validate({validated:!1,registered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!0}),0}var o=a.split(" "),c=n.split(" "),s=r.split(" "),i=l.split(" ");if(""===o[0]||""===c[0]||""===s[0]||""===i[0])console.log(i),this.props.formNotFullfilled();else{var u={firstname:a,lastname:n,username:r,password:l};E.a.post("/userauth/register",u).then(function(e){var a=e.data.message;if("REGISTER_SUCCESS"===a){t.props.registered();t.props.history.push("/login")}else"USER_ALREADY_EXISTS"===a?console.log("user already exists"):"ERR_NO_PASSWORD"===a&&console.log("handle no password error")}).catch(function(e){console.log(e.message)})}}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.validated,n=t.isRegistered,l=t.USER_ALREADY_EXISTS,o=t.FORM_NOT_FULLFILLED,c=t.SPACE_IN_USERNAME;return r.a.createElement("div",null,!n&&r.a.createElement(B.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"RegisterForm"},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:K.a,md:"4",controlId:"firstName"},r.a.createElement(B.a.Label,null,"First name"),r.a.createElement(B.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),r.a.createElement(B.a.Control.Feedback,null,"Looks good!")),r.a.createElement(B.a.Group,{as:K.a,md:"4",controlId:"lastName"},r.a.createElement(B.a.Label,null,"Last name"),r.a.createElement(B.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),r.a.createElement(B.a.Control.Feedback,null,"Looks good!")),r.a.createElement(B.a.Group,{as:K.a,md:"8",controlId:"username"},r.a.createElement(B.a.Label,null,"Username"),r.a.createElement(B.a.Control,{type:"text",placeholder:"User Name"}),l&&r.a.createElement("p",{className:"errorHandler"},"User already exists")),r.a.createElement(B.a.Group,{as:K.a,md:"8",controlId:"password"},r.a.createElement(B.a.Label,null,"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Password"}))),o&&r.a.createElement("p",{className:"errorHandler"},"Please fill out form"),c&&r.a.createElement("p",{className:"errorHandler"},"No spaces are allowed as characters"),r.a.createElement(R.a,{type:"submit"},"Register")))}}]),t}(n.Component),J={validate:function(e){return{type:"REGISTER_VALIDATE",validate:e}},formNotFullfilled:function(){return{type:"FORM_NOT_FULLFILLED"}},registered:function(){return{type:"REGISTERED"}},userAlreadyExists:function(){return{type:"USER_ALREADY_EXISTS"}}},z=Object(f.b)(function(e){var t=e.registerReducer,a=t.username,n=t.password,r=t.validated,l=t.isRegistered,o=t.USER_ALREADY_EXISTS,c=t.FORM_NOT_FULLFILLED,s=t.SPACE_IN_USERNAME;return console.log(e),{username:a,password:n,validated:r,isRegistered:l,USER_ALREADY_EXISTS:o,FORM_NOT_FULLFILLED:c,SPACE_IN_USERNAME:s}},J)(q),$=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(j,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/home",component:U}),r.a.createElement(S.a,{exact:!0,path:"/news",component:T}),r.a.createElement(S.a,{exact:!0,path:"/aboutUs",component:k}),r.a.createElement(S.a,{exact:!0,path:"/post",component:F}),r.a.createElement(S.a,{exact:!0,path:"/category",component:x}),r.a.createElement(S.a,{exact:!0,path:"/showPostings",component:A}),r.a.createElement(S.a,{exact:!0,path:"/login",component:X}),r.a.createElement(S.a,{exact:!0,path:"/register",component:z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(34),Z=a(29),ee={username:"",password:"",validated:!1,LOOGEDIN:!1,USER_NOT_FOUND:!1,INCORRECT_USERNAME_OR_PASSWORD:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VALIDATE":var a=t.validate,n=a.validated,r=a.LOOGEDIN,l=a.USER_NOT_FOUND,o=a.INCORRECT_USERNAME_OR_PASSWORD;return Object(Z.a)({},e,{validated:n,LOOGEDIN:r,USER_NOT_FOUND:l,INCORRECT_USERNAME_OR_PASSWORD:o});default:return e}},ae={username:"",password:"",validated:!1,isRegistered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_VALIDATE":var a=t.validate,n=a.validated,r=a.isRegistered,l=a.USER_ALREADY_EXISTS,o=a.FORM_NOT_FULLFILLED,c=a.SPACE_IN_USERNAME;return Object(Z.a)({},e,{validated:n,isRegistered:r,USER_ALREADY_EXISTS:l,FORM_NOT_FULLFILLED:o,SPACE_IN_USERNAME:c});case"FORM_NOT_FULLFILLED":return Object(Z.a)({},e,{FORM_NOT_FULLFILLED:!0});case"REGISTERED":return Object(Z.a)({},e,{isRegistered:!0,validated:!0});case"USER_ALREADY_EXISTS":return Object(Z.a)({},e,{USER_ALREADY_EXISTS:!0,FORM_NOT_FULLFILLED:!1});default:return e}},re={login:!1,register:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;switch((arguments.length>1?arguments[1]:void 0).type){case"CLICKED_LOGIN":return{login:!0,register:!1};case"CLICKED_REGISTER":return{login:!1,register:!0};default:return e}},oe=Object(Q.b)({loginReducer:te,registerReducer:ne,userauthReducer:le}),ce=Object(Q.c)(oe);o.a.render(r.a.createElement(f.a,{store:ce},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports=a.p+"static/media/donkey.920876bf.jpg"},64:function(e,t,a){e.exports=a(112)},69:function(e,t,a){},88:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.f569cc17.chunk.js.map