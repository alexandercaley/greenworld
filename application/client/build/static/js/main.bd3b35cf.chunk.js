(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},118:function(e,t,a){e.exports=a.p+"static/media/donkey.920876bf.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/glenCanyonPark.bb066623.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/washingtonSquare.5628756b.jpg"},131:function(e,t,a){},163:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),o=a.n(r),c=(a(97),a(3)),s=a(4),i=a(7),u=a(5),d=a(6),m=a(21),p=a.n(m),E=(a(115),a(55)),h=a.n(E),g=a(76),v=(a(118),a(119),a(16)),f=a(31),b=a(34),O=a(46),R=a.n(O),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).loginButton=function(){a.props.clickLogin(),console.log("clicked login")},a.registerButton=function(){a.props.clickRegister(),console.log("clicked register")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.login)}},{key:"render",value:function(){var e=this.props,t=e.login,a=e.register;return console.log(t),l.a.createElement("div",{className:"userAuth"},t&&l.a.createElement(v.b,{to:"/login"})||l.a.createElement(R.a,{id:"loginButton",onClick:this.loginButton},"Login",l.a.createElement(v.b,{to:"/login"})),a||l.a.createElement(R.a,{id:"registerButton",onClick:this.registerButton},"Register"))}}]),t}(n.Component),N={clickLogin:function(){return{type:"CLICKED_LOGIN"}},clickRegister:function(){return{type:"CLICKED_REGISTER"}}},_=(Object(f.b)(function(e){var t=e.userauthReducer;return{login:t.login,register:t.register}},N)(Object(b.f)(S)),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).logout=Object(g.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(localStorage),e.next=4,localStorage.removeItem("token");case 4:console.log(localStorage),console.log("Logged out"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("===Error Line 16 Navbar.js==="),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])})),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},l.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},l.a.createElement("h1",null,"Team 06")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(v.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",l.a.createElement("i",{className:"fas fa-home"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link text-white text-uppercase ml-5",to:"/post"},"Post")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link text-white text-uppercase ml-5",to:"/login"},"login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link text-white text-uppercase ml-5",to:"/register"},"register")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link text-white text-uppercase ml-5",to:"/",onClick:this.logout},"Logout")))))}}]),t}(l.a.Component)),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,this.state.data.map(function(e){var t=e.id,a=e.location,n=e.postType;return l.a.createElement("tr",{key:e,className:"row"},l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("p",null,t),l.a.createElement("img",{src:"".concat(t)}),l.a.createElement("p",null,a),l.a.createElement("p",null,n))))}))}}]),t}(n.Component),y=(a(129),a(130),a(18)),I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.error;return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rwo"}),l.a.createElement("div",{className:"container my-6"},l.a.createElement("div",{className:"row"},n?l.a.createElement("h1",{className:"text-danger text-center"},n):t.map(function(e){return l.a.createElement(w,{key:e.recipe_id,recipe:e,handleDetails:a})})))))}}]),t}(n.Component),j={image_url:"http://www.urbanbackpacker.com/wp-content/uploads/Golden-Gate-Park-Map-by-Rochelle-Carr.jpg",enviroment:["Green place","Green place","Green place","Green place"],detailpublisher:"Gerry",publisher_url:"http://closetcooking.com",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Title goes here"},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={recipe:j},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.detailpublisher,n=e.source_url,r=e.title,o=e.enviroment,c=this.props.handleIndex;return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("button",{className:"btn btn-warning text-capitalize mb-5",onClick:function(){return c(1)}},"back to home page"),l.a.createElement("img",{src:t,className:"d-block w-100",alt:"recipe"})),l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("h6",{className:"text-uppercase"},r),l.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"provided by ",a),l.a.createElement("ul",{className:"list-group mt-4"},l.a.createElement("h2",{className:"mt-3 mb-4"},"Details"),o.map(function(e,t){return l.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)}),l.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"source ",n)))))))}}]),t}(n.Component),D=a(175),A=a(176);var w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).displayPage=function(e){switch(e){case 0:return l.a.createElement(C,{id:a.state.details_id,handleIndex:a.handleIndex});case 1:return l.a.createElement(I,{recipes:a.state.data,handleDetails:a.handleDetails,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error})}},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({details_id:t,pageIndex:e})},a.state={data:[],value:"",details_id:1,pageIndex:1},a.handleChange=a.handleChange.bind(Object(y.a)(Object(y.a)(a))),a.handleSubmitS=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.value)}},{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e,t=this.props.handleDetails;return l.a.createElement("div",{className:"ProdPage"},l.a.createElement("form",{onSubmit:this.handleSubmit,class:"col-lg-6 offset-lg-3"},l.a.createElement("i",{class:"fas fa-search","aria-hidden":"true"}),l.a.createElement("input",{class:"form-control",type:"text",placeholder:"Search","aria-label":"Search",value:this.state.value,onChange:this.handleChange})),l.a.createElement(D.a,null,l.a.createElement(A.a,null,this.state.data.filter((e=this.state.value,function(t){return t.location.toLowerCase().includes(e.toLowerCase())||t.postType.toLowerCase().includes(e.toLowerCase())||t.postStatus.toLowerCase().includes(e.toLowerCase())})).map(function(e){return l.a.createElement(l.a.Fragment,{key:e.root},l.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.picture,className:"img-card-top",alt:"recipe",style:{height:"14rem"}}),l.a.createElement("div",{className:"card-body text-capitalized"},l.a.createElement("h6",null,"location: ",e.location),l.a.createElement("h6",{className:"text-warning text-slanted"},"postStatus: ",e.postStatus)),l.a.createElement("div",{className:"card-footer text-cen"},l.a.createElement("button",{type:"button",className:"btn btn-primary text-capitalize",onClick:function(){return t(0,e.id)}},"details")))))}))))}}]),t}(n.Component),F=a(81),T=a.n(F),U=(a(131),["one","two","three"]),k=(n.Component,n.Component,a(132),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoaded:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,data:t})})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement(l.a.Fragment,null,"Json API used to fetch data",l.a.createElement("ul",null,e.map(function(e){return l.a.createElement("li",{key:e.id},"Name: ",e.name," | Email: ",e.email)})))}}]),t}(n.Component));k.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"Get your News here"))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"About Us"))}}]),t}(n.Component),G=a(41),W=a(177),Y=a(179),V=a(33),X=a(48),B=a.n(X),z=a(82),H=a(83),q=(a(163),a(178)),K=a(84),J=a(180),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),e.stopPropagation(),console.log(e.target.children[0]);var t={username:e.target.children[0].children[0].children[1].value,password:e.target.children[0].children[1].children[1].value};console.log(t),p.a.post("/userauth/login",t).then(function(e){console.log(e);var t=e.data.message;if("LOGIN_SUCCESS"===t){a.props.validateStatus({USER_NOT_FOUND:!1,validated:!0,LOOGEDIN:!0,INCORRECT_USERNAME_OR_PASSWORD:!1}),localStorage.setItem("token",e.data.token),console.log(localStorage);var n="";void 0!=a.props.ROUTE?(n=a.props.ROUTE,console.log(n),console.log(a.props.history),a.props.history.push(n)):(n="/",a.props.history.push(n),console.log(n))}else if("USER_NOT_FOUND"===t){a.props.validateStatus({USER_NOT_FOUND:!0,validated:!1,LOOGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!1})}else if("INCORRECT_USERNAME_OR_PASSWORD"===t){a.props.validateStatus({USER_NOT_FOUND:!1,validated:!1,LOOGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!0})}}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("hi"),console.log(this.props.route);this.props.route;this.props.reRouteAfterCompleteLogin(this.props.route)}},{key:"render",value:function(){var e=this,t=this.props,a=t.validated,n=(t.LOOGEDIN,t.INCORRECT_USERNAME_OR_PASSWORD),r=t.USER_NOT_FOUND;return l.a.createElement("div",null,l.a.createElement(q.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"LoginForm"},l.a.createElement(q.a.Row,null,l.a.createElement(q.a.Group,{as:K.a,md:"8",controlId:"username"},l.a.createElement(q.a.Label,null,"Username"),l.a.createElement(q.a.Control,{type:"text",placeholder:"User Name"})),l.a.createElement(q.a.Group,{as:K.a,md:"8",controlId:"password"},l.a.createElement(q.a.Label,null,"Password"),l.a.createElement(q.a.Control,{type:"password",placeholder:"Password"}))),n&&l.a.createElement("p",{className:"errorHandler"},"Incorrect Username or Password"),r&&l.a.createElement("p",{className:"errorHandler"},"User not found"),l.a.createElement(J.a,{type:"submit"},"Login")))}}]),t}(n.Component),$={validateStatus:function(e){return{type:"VALIDATE",validate:e}},reRouteAfterCompleteLogin:function(e){return{type:"REDIRECT",route:e}}},Q=Object(f.b)(function(e){var t=e.loginReducer,a=t.username,n=t.password,l=t.validated,r=t.LOOGEDIN,o=t.USER_NOT_FOUND,c=t.INCORRECT_USERNAME_OR_PASSWORD,s=t.REDIRECT,i=t.ROUTE;return console.log(e.loginReducer),console.log(e.registerReducer),console.log(e),{username:a,password:n,validated:l,LOOGEDIN:r,USER_NOT_FOUND:o,INCORRECT_USERNAME_OR_PASSWORD:c,REDIRECT:s,ROUTE:i}},$)(Object(b.f)(Z)),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.postStatus,l=t.location,r=t.postType,o=t.loadedFiles;console.log("=================================="),console.log(n,l,r,o),p.a.post("/api/postings",{postStatus:n,location:l,postType:r}).then(function(e){console.log("hi")}).catch(function(e){console.log(e)}),console.log()},a.checkPostings=function(){},a.changePostStatus=function(e){var t=e.target.value;a.setState({postStatus:t})},a.changeLocation=function(e){var t=e.target.value;a.setState({location:t})},a.changePostType=function(e){var t=e.target.value;a.setState({postType:t})},a.state={postStatus:"",location:"",postType:"",loadedFiles:[],fd:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"onFileLoad",value:function(e){var t=this,a=e.currentTarget.files[0],n=new FormData;console.log(n);var l=new FileReader;n.append("image",a,a.name),this.setState({fd:n}),console.log(n),l.onload=function(){console.log("IMAGE LOADED: ",l.result);var e={data:l.result,isUploading:!1};t.addLoadedFile(e)},l.onabort=function(){alert("Reading Aborted")},l.onerror=function(){alert("Reading ERROR!")},l.readAsDataURL(a)}},{key:"addLoadedFile",value:function(e){this.setState(function(t){return{loadedFiles:[].concat(Object(G.a)(t.loadedFiles),[e])}})}},{key:"removeLoadedFile",value:function(e){this.setState(function(t){var a=t.loadedFiles;return{loadedFiles:B.a.filter(a,function(t){return t!=e})}})}},{key:"removeAllLoadedFile",value:function(){this.setState({loadedFiles:[]})}},{key:"updateLoadedFile",value:function(e,t){return this.setState(function(a){console.log("======"+a+"======");var n=Object(G.a)(a.loadedFiles);return B.a.find(n,function(a,l){a==e&&(n[l]=t)}),{loadedFiles:n}}),t}},{key:"render",value:function(){var e=this,t=localStorage.getItem("token"),a=this.state.loadedFiles;return console.log(a),l.a.createElement("div",null,null==t&&l.a.createElement("p",null," You must login before you can post anything "),null==t?l.a.createElement(Q,{route:"/post"}):l.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Type Issue"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",onChange:this.changePostStatus,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Location"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",onChange:this.changeLocation,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"post type"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" post staus",name:"post staus",type:"post staus",onChange:this.changePostType,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"inner-container",style:{display:"flex",flexDirection:"column"}},l.a.createElement("div",{className:"sub-header"},"Drag an Image"),l.a.createElement("div",{className:"draggable-container"},l.a.createElement("input",{type:"file",id:"file-browser-input",name:"file-browser-input",ref:function(t){return e.fileInput=t},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDrop:this.onFileLoad.bind(this),onChange:this.onFileLoad.bind(this)}),l.a.createElement("div",{className:"files-preview-container ip-scrollbar"},a.map(function(t,a){return l.a.createElement("div",{className:"file",key:a},l.a.createElement("img",{src:t.data}),l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"progress-bar"},t.isUploading&&l.a.createElement(W.a,null)),l.a.createElement("span",{className:"remove-btn",onClick:function(){return e.removeLoadedFile(t)}},l.a.createElement(z.Icon,{icon:H.remove,size:19}))))})),l.a.createElement("div",{className:"helper-text"},"Drag and Drop Images Here"),l.a.createElement("div",{className:"file-browser-container"},l.a.createElement(Y.a,{text:"Browse",intent:V.a.PRIMARY,minimal:!0,onClick:function(){return e.fileInput.click()}})))),l.a.createElement("br",null),l.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),te=a(14),ae=a.n(te),ne=a(40),le=a.n(ne),re=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var a=e.target.children[0].children[0].children[1].value,n=e.target.children[0].children[1].children[1].value,l=e.target.children[0].children[2].children[1].value,r=e.target.children[0].children[3].children[1].value;if(l.includes(" ")||a.includes(" ")||n.includes(" ")){return this.props.validate({validated:!1,registered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!0}),0}var o=a.split(" "),c=n.split(" "),s=l.split(" "),i=r.split(" ");if(""===o[0]||""===c[0]||""===s[0]||""===i[0])console.log(i),this.props.formNotFullfilled();else{var u={firstname:a,lastname:n,username:l,password:r};p.a.post("/userauth/register",u).then(function(e){var a=e.data.message;if("REGISTER_SUCCESS"===a){t.props.registered();t.props.history.push("/login")}else"USER_ALREADY_EXISTS"===a?console.log("user already exists"):"ERR_NO_PASSWORD"===a&&console.log("handle no password error")}).catch(function(e){console.log(e.message)})}}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.validated,n=t.isRegistered,r=t.USER_ALREADY_EXISTS,o=t.FORM_NOT_FULLFILLED,c=t.SPACE_IN_USERNAME;return l.a.createElement("div",null,!n&&l.a.createElement(ae.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"RegisterForm"},l.a.createElement(ae.a.Row,null,l.a.createElement(ae.a.Group,{as:le.a,md:"4",controlId:"firstName"},l.a.createElement(ae.a.Label,null,"First name"),l.a.createElement(ae.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),l.a.createElement(ae.a.Control.Feedback,null,"Looks good!")),l.a.createElement(ae.a.Group,{as:le.a,md:"4",controlId:"lastName"},l.a.createElement(ae.a.Label,null,"Last name"),l.a.createElement(ae.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),l.a.createElement(ae.a.Control.Feedback,null,"Looks good!")),l.a.createElement(ae.a.Group,{as:le.a,md:"8",controlId:"username"},l.a.createElement(ae.a.Label,null,"Username"),l.a.createElement(ae.a.Control,{type:"text",placeholder:"User Name"}),r&&l.a.createElement("p",{className:"errorHandler"},"User already exists")),l.a.createElement(ae.a.Group,{as:le.a,md:"8",controlId:"password"},l.a.createElement(ae.a.Label,null,"Password"),l.a.createElement(ae.a.Control,{type:"password",placeholder:"Password"}))),o&&l.a.createElement("p",{className:"errorHandler"},"Please fill out form"),c&&l.a.createElement("p",{className:"errorHandler"},"No spaces are allowed as characters"),l.a.createElement(R.a,{type:"submit"},"Register")))}}]),t}(n.Component),oe={validate:function(e){return{type:"REGISTER_VALIDATE",validate:e}},formNotFullfilled:function(){return{type:"FORM_NOT_FULLFILLED"}},registered:function(){return{type:"REGISTERED"}},userAlreadyExists:function(){return{type:"USER_ALREADY_EXISTS"}}},ce=Object(f.b)(function(e){var t=e.registerReducer,a=t.username,n=t.password,l=t.validated,r=t.isRegistered,o=t.USER_ALREADY_EXISTS,c=t.FORM_NOT_FULLFILLED,s=t.SPACE_IN_USERNAME;return console.log(e),{username:a,password:n,validated:l,isRegistered:r,USER_ALREADY_EXISTS:o,FORM_NOT_FULLFILLED:c,SPACE_IN_USERNAME:s}},oe)(re),se=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(_,null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/home",component:x}),l.a.createElement(b.a,{exact:!0,path:"/news",component:P}),l.a.createElement(b.a,{exact:!0,path:"/aboutUs",component:M}),l.a.createElement(b.a,{exact:!0,path:"/post",component:ee}),l.a.createElement(b.a,{exact:!0,path:"/showPostings",component:L}),l.a.createElement(b.a,{exact:!0,path:"/login",component:Q}),l.a.createElement(b.a,{exact:!0,path:"/register",component:ce}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(45),ue=a(23),de={username:"",password:"",validated:!1,LOOGEDIN:!1,USER_NOT_FOUND:!1,INCORRECT_USERNAME_OR_PASSWORD:!1,ROUTE:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VALIDATE":var a=t.validate,n=a.validated,l=a.LOOGEDIN,r=a.USER_NOT_FOUND,o=a.INCORRECT_USERNAME_OR_PASSWORD;return Object(ue.a)({},e,{validated:n,LOOGEDIN:l,USER_NOT_FOUND:r,INCORRECT_USERNAME_OR_PASSWORD:o});case"REDIRECT":var c=t.route;return Object(ue.a)({},e,{ROUTE:c});default:return e}},pe={username:"",password:"",validated:!1,isRegistered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_VALIDATE":var a=t.validate,n=a.validated,l=a.isRegistered,r=a.USER_ALREADY_EXISTS,o=a.FORM_NOT_FULLFILLED,c=a.SPACE_IN_USERNAME;return Object(ue.a)({},e,{validated:n,isRegistered:l,USER_ALREADY_EXISTS:r,FORM_NOT_FULLFILLED:o,SPACE_IN_USERNAME:c});case"FORM_NOT_FULLFILLED":return Object(ue.a)({},e,{FORM_NOT_FULLFILLED:!0});case"REGISTERED":return Object(ue.a)({},e,{isRegistered:!0,validated:!0});case"USER_ALREADY_EXISTS":return Object(ue.a)({},e,{USER_ALREADY_EXISTS:!0,FORM_NOT_FULLFILLED:!1});default:return e}},he={login:!1,register:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he;switch((arguments.length>1?arguments[1]:void 0).type){case"CLICKED_LOGIN":return{login:!0,register:!1};case"CLICKED_REGISTER":return{login:!1,register:!0};default:return e}},ve={postStatus:"",location:"",postType:"",loadedFiles:[],fd:""},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FORM":var a=t.fieldToChange;return console.log(a),Object(ue.a)({},e,{fieldToChange:a});case"LOAD_IMAGE":var n=t.newImage;return console.log(n),console.log([].concat(Object(G.a)(e.loadedFiles),[n])),Object(ue.a)({},e,{loadedFiles:[].concat(Object(G.a)(e.loadedFiles),[n]),fd:n});case"ADD_TO_IMAGE_LIST":var l=t.addToImageList;return console.log(l),Object(ue.a)({},e,{loadedFiles:l});case"ADD_TO_IMAGE_LIST":return Object(ue.a)({},e,{loadedFiles:[]});default:return e}},be=Object(ie.b)({loginReducer:me,registerReducer:Ee,userauthReducer:ge,postReducer:fe}),Oe=Object(ie.c)(be);o.a.render(l.a.createElement(f.a,{store:Oe},l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){e.exports=a(172)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.bd3b35cf.chunk.js.map