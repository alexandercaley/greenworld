(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/donkey.920876bf.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/b.d4e99edf.png"},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),l=a.n(o),c=(a(97),a(10)),i=a(11),s=a(13),d=a(12),u=a(14),p=a(26),m=a.n(p),E=(a(115),a(116),a(117),a(21)),g=a(30),h=a.n(g),O=a(40),f=a(16),v=a(34),R=a(42),I=a.n(R),_=function(e){return{type:"REDIRECT",route:e}},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).loginButton=function(){a.props.clickLogin(),a.props.history.push("/login"),console.log("clicked login")},a.registerButton=function(){a.props.clickRegister(),a.props.history.push("/register"),console.log("clicked register")},a.logoutButton=Object(O.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.removeItem("token");case 3:a.props.history.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])})),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("token");return console.log(),r.a.createElement("div",{className:"userAuth"},e&&r.a.createElement(I.a,{id:"loginButton",onClick:this.logoutButton},"Logout"),!e&&r.a.createElement(I.a,{id:"loginButton",onClick:this.loginButton},"Login"),!e&&r.a.createElement(I.a,{id:"registerButton",onClick:this.registerButton},"Register"))}}]),t}(n.Component),S={clickLogin:function(){return{type:"CLICKED_LOGIN"}},clickRegister:function(){return{type:"CLICKED_REGISTER"}},logout:function(){return{type:"LOGOUT"}}},N=Object(f.b)(function(e){var t=e.userauthReducer;return{login:t.login,register:t.register,LOGGEDIN:e.loginReducer.LOGGEDIN}},S)(Object(v.f)(b)),L=function(e){return console.log(e),{type:"UPDATE_DATA",data:e}},T=function(e,t){return{type:"CLICKED_ISSUE_DETAILS",tempObj:{id:e,index:t}}},y=function(e){return{type:"UPDATE_INDEX",index:e}},D=function(e){return{type:"UPDATE_HOMEPAGE",bool:e}},A=a(173),C=a(174),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).goToDetails=function(e){console.log(e);a.props.clickedItem(e),a.props.history.push("/productdetails")},a.state={somedata:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.forceUpdate(),console.log("line 35 ======"),m.a.get("/api/postings").then(function(t){console.log("=======================================");var a=t.data;if(console.log(e.props.toUpdateHomepage),1==e.props.toUpdateHomepage){e.props.updateHomepage(!1);var n=e.props,r=n.data,o=n.search;console.log(r,o);var l=r.filter(function(e){return e.issueType.toLowerCase().includes(o.toLowerCase())});e.setState({somedata:l}),console.log(l),console.log("======================================="),e.props.updateData(l),e.forceUpdate()}else e.props.updateData(a),e.setState({somedata:a}),e.forceUpdate()})}},{key:"render",value:function(){var e=this,t=(this.props.data,this.state.somedata);return r.a.createElement("div",null,r.a.createElement(A.a,{className:"mt-2"},r.a.createElement(C.a,null,r.a.createElement("div",{className:"container my-6"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"rwo"}),r.a.createElement("div",{className:"container my-6"},r.a.createElement("div",{className:"row"},t.map(function(t){return r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{onClick:function(){return e.goToDetails(t)}},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a(129),className:"img-card-top",alt:"Issue Image",style:{height:"14rem"}}),r.a.createElement("div",{className:"card-body text-capitalized"},r.a.createElement("h6",null,"Street: ",t.street),r.a.createElement("h6",null,"City: ",t.city),r.a.createElement("h6",null,"Zipcode: ",t.zipcode),r.a.createElement("h6",null,"State: ",t.state),r.a.createElement("h6",{className:"text-warning text-slanted"},"Issue Type: ",t.issueType),r.a.createElement("h6",{className:"text-warning text-slanted"},"Description: ",t.description)))))})))))))}}]),t}(n.Component),F={updateData:L,updateClickedDetails:T,handleIndex:y,updateHomepage:D,clickedItem:function(e){return{type:"CLICKED_ITEM",data:e}}},j=Object(f.b)(function(e){var t=e.homepageReducer;return{data:t.data,details_id:t.details_id,pageIndex:t.pageIndex,search:t.search,toUpdateHomepage:t.toUpdateHomepage}},F)(Object(v.f)(U)),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSearch=function(e){e.preventDefault(),a.props.updateHomepage(!0),a.forceUpdate(),m.a.get("/api/postings").then(function(e){var t=e.data;if(1==a.props.toUpdateHomepage){a.props.updateHomepage(!1);var n=a.props,r=n.data,o=n.search;console.log(r,o);var l=r.filter(function(e){return e.issueType.toLowerCase().includes(o.toLowerCase())});a.props.updateData(l),a.forceUpdate()}else a.props.updateData(t),a.setState({somedata:t}),a.forceUpdate()});a.props.history.push("/home")},a.handleChange=function(e){var t=e.target.value;console.log(t),a.props.updateSearch(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},r.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},r.a.createElement("h1",null,"Team 06")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),r.a.createElement("ul",{className:"navbar-nav m-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(E.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link text-white text-uppercase ml-5",to:{pathname:"/post",state:this.props.search}},"Post"))),r.a.createElement("form",{className:"search",onSubmit:this.handleSearch},r.a.createElement("input",{type:"text",className:"searchInput",name:"search",value:e,placeholder:"Search by",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"searchButton"},"Search",r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement(N,null)))}}]),t}(n.Component),w={updateData:L,updateClickedDetails:T,handleIndex:y,updateSearch:function(e){return{type:"UPDATE_SEARCH",input:e}},updateHomepage:D},x=Object(f.b)(function(e){var t=e.homepageReducer;return{data:t.data,details_id:t.details_id,pageIndex:t.pageIndex,search:t.search}},w)(Object(v.f)(G)),k=(a(68),a(41)),P=a(175),M=a(177),H=a(33),z=a(82),W=a(83),B=(a(69),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onFileLoad",value:function(e){var t=this,a=e.currentTarget.files[0];console.log(a);var n=new FileReader;this.props.onFileLoad(a),n.onload=function(){console.log(n.result);var e={data:n.result,isUploading:!1};t.addLoadedFile(e)},n.onabort=function(){alert("Reading Aborted")},n.onerror=function(){alert("Reading ERROR!")},n.readAsDataURL(a)}},{key:"addLoadedFile",value:function(e){this.props.addLoadedFile(e)}},{key:"removeLoadedFile",value:function(e){this.props.removeAllLoadedFile()}},{key:"render",value:function(){var e=this,t=this.props.loadedFiles;return console.log(t),r.a.createElement("div",{className:"inner-container",style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"sub-header"},"Drag an Image"),r.a.createElement("div",{className:"draggable-container"},r.a.createElement("input",{type:"file",id:"file-browser-input",name:"file-browser-input",ref:function(t){return e.fileInput=t},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDrop:this.onFileLoad.bind(this),onChange:this.onFileLoad.bind(this)}),r.a.createElement("div",{className:"files-preview-container ip-scrollbar"},t.map(function(t,a){return r.a.createElement("div",{className:"file",key:a},r.a.createElement("img",{src:t.data}),r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"progress-bar"},t.isUploading&&r.a.createElement(P.a,null)),r.a.createElement("span",{className:"remove-btn",onClick:function(){return e.removeLoadedFile(t)}},r.a.createElement(z.Icon,{icon:W.remove,size:19}))))})),r.a.createElement("div",{className:"helper-text"},"Drag and Drop Images Here"),r.a.createElement("div",{className:"file-browser-container"},r.a.createElement(M.a,{text:"Browse",intent:H.a.PRIMARY,minimal:!0,onClick:function(){return e.fileInput.click()}}))))}}]),t}(n.Component)),V={addLoadedFile:function(e){return{type:"ADD_TO_IMAGE_LIST",imageToAdd:e}},removeAllLoadedFile:function(){return{type:"REMOVE_ALL"}},onFileLoad:function(e){return{type:"LOAD_IMAGE",newImage:e}}},X=Object(f.b)(function(e){var t=e.postReducer;return{fd:t.fd,file:t.file,imageFile:t.imageFile,loadedFiles:t.loadedFiles}},V)(Object(v.f)(B)),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getLocation=Object(O.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},a.props.isLoading(),e.next=4,navigator.geolocation.getCurrentPosition(a.success,a.error,t);case 4:case"end":return e.stop()}},e)})),a.success=function(e){var t=e.coords;a.props.setGeoLocation(t),a.props.doneLoading()},a.error=function(e){a.props.errGetLocation(),console.warn("ERROR(".concat(e.code,"): ").concat(e.message))},a.handleSubmit=function(e){e.preventDefault();var t=localStorage.getItem("token");if(void 0==t||""==t)a.props.needsToLogin(),a.props.history.push("/login");else{console.log(a.props);var n=a.props,r=n.latitude,o=n.longitude,l=n.imageFile,c=n.zipcode,i=n.street,s=n.city,d=n.issueType,u=n.state,p=n.description;""!=r&&""!=o||(r=0,o=0),console.log(r,o),console.log(l);var E=localStorage.getItem("username"),g=localStorage.getItem("user_id"),h=new FormData;h.append("imageFile",l),h.append("latitude",r),h.append("longitude",o),h.append("street",i),h.append("city",s),h.append("state",u),h.append("zipcode",c),h.append("issueType",d),h.append("username",E),h.append("description",p),h.append("user_id",g),m()({method:"post",url:"/api/postings",data:h,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){console.log(e),"SUCCESS"==e.data&&a.props.history.push("/home")}).catch(function(e){console.log(e)})}},a.handleChangeInput=function(e){console.log(e.target.value);var t=Object(k.a)({},e.target.name,e.target.value);console.log(t),a.props.updateForm(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.issueType,a=e.longitude,n=e.latitude,o=e.street,l=e.city,c=e.state,i=e.zipcode,s=e.locationError,d=e.geoLocationIsLoading;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),r.a.createElement("br",null),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Select Type of Issue..."),r.a.createElement("br",null),r.a.createElement("select",{name:"issueType",value:t,onChange:this.handleChangeInput},r.a.createElement("option",{name:"",value:""}),r.a.createElement("option",{name:"Air",value:"Air"},"Air"),r.a.createElement("option",{value:"Water"},"Water"),r.a.createElement("option",{value:"Garbage"},"Garbage"),r.a.createElement("option",{value:"Hazardous Waste"},"Hazardous Waste"),r.a.createElement("option",{value:"Natural Hazard"},"Natural Hazard"),r.a.createElement("option",{value:"Other"},"Other")))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Street"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Enter Street Name...",name:"street",value:o,type:"text",onChange:this.handleChangeInput,noValidate:!0}))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"City"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Enter City...",name:"city",type:"text",value:l,onChange:this.handleChangeInput,noValidate:!0}))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"State"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Enter State...",name:"state",type:"text",value:c,onChange:this.handleChangeInput,noValidate:!0}))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"ZipCode"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Enter Zipcode...",name:"zipcode",type:"text",value:i,onChange:this.handleChangeInput,noValidate:!0}))),r.a.createElement("br",null),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Location"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.getLocation}," Add location"),r.a.createElement("br",null),""!=s&&"there was an error getting your location",r.a.createElement("br",null),d&&"Getting location...",r.a.createElement("br",null),"Longitude: ",""!=a&&a,r.a.createElement("br",null),"Latitude: ",""!=n&&n)),r.a.createElement("br",null),r.a.createElement(X,null),r.a.createElement("br",null),"Description",r.a.createElement("br",null),r.a.createElement("textarea",{name:"description",onChange:this.handleChangeInput}),r.a.createElement("br",null),r.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),K={updateForm:function(e){return{type:"UPDATE_FORM",fieldToChange:e}},setGeoLocation:function(e){return{type:"UPDATE_GEOLOCATION",location:e}},errGetLocation:function(){return{type:"ERR_GET_LOCATION"}},resetReducer:function(){return{type:"RESET_REDUCER"}},isLoading:function(){return{type:"GEO_LOCATION_LOADING"}},doneLoading:function(){return{type:"GEO_LOCATION_DONE_LOADING"}},needsToLogin:function(){return{type:"TRIED_POSTING_ISSUE"}}},Z=Object(f.b)(function(e){var t=e.postReducer;return{postStatus:t.postStatus,location:t.location,postType:t.postType,latitude:t.latitude,longitude:t.longitude,street:t.street,city:t.city,state:t.state,zipcode:t.zipcode,issueType:t.issueType,description:t.description,imageFile:t.imageFile,locationError:t.locationError,geoLocationIsLoading:t.geoLocationIsLoading}},K)(Object(v.f)(Y)),J=a(176),q=a(84),$=a(178),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),e.stopPropagation(),console.log(e.target.children[0]);var t=e.target.children[0].children[0].children[1].value,n=e.target.children[0].children[1].children[1].value,r={username:t,password:n};console.log(r),m.a.post("/userauth/login",r).then(function(e){console.log(e),console.log(a.props.ROUTE);var n=e.data.message;if("LOGIN_SUCCESS"===n){a.props.validateStatus({USER_NOT_FOUND:!1,validated:!0,LOGGEDIN:!0,INCORRECT_USERNAME_OR_PASSWORD:!1}),a.props.finishedLoggingIn(),localStorage.setItem("token",e.data.token),localStorage.setItem("user_id",e.data.result[0].id),localStorage.setItem("username",t);var r="";a.props.history.length;"/register"==a.props.ROUTE?(a.props.reRouteAfterCompleteLogin("/"),r="/",console.log(r),a.props.history.push(r)):a.props.history.goBack()}else if("USER_NOT_FOUND"===n){a.props.validateStatus({USER_NOT_FOUND:!0,validated:!1,LOGGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!1})}else if("INCORRECT_USERNAME_OR_PASSWORD"===n){a.props.validateStatus({USER_NOT_FOUND:!1,validated:!1,LOGGEDIN:!1,INCORRECT_USERNAME_OR_PASSWORD:!0})}}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(this.props.location),console.log(e.location),e.location!==this.props.location&&console.log("line 94")}},{key:"componentDidMount",value:function(){console.log("hi"),console.log(this.props.ROUTE);this.props.ROUTE}},{key:"render",value:function(){var e=this,t=this.props,a=t.validated,n=(t.LOGGEDIN,t.INCORRECT_USERNAME_OR_PASSWORD),o=t.USER_NOT_FOUND,l=t.TRIED_POSTING_ISSUE;return r.a.createElement("div",null,1==l&&"Please Login Before Posting Item",r.a.createElement(J.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"LoginForm"},r.a.createElement(J.a.Row,null,r.a.createElement(J.a.Group,{as:q.a,md:"8",controlId:"username"},r.a.createElement(J.a.Label,null,"Username"),r.a.createElement(J.a.Control,{type:"text",placeholder:"User Name"})),r.a.createElement(J.a.Group,{as:q.a,md:"8",controlId:"password"},r.a.createElement(J.a.Label,null,"Password"),r.a.createElement(J.a.Control,{type:"password",placeholder:"Password"}))),n&&r.a.createElement("p",{className:"errorHandler"},"Incorrect Username or Password"),o&&r.a.createElement("p",{className:"errorHandler"},"User not found"),r.a.createElement($.a,{type:"submit"},"Login")))}}]),t}(n.Component),ee={validateStatus:function(e){return{type:"VALIDATE",validate:e}},finishedLoggingIn:function(){return{type:"FINISHED_LOGGING_IN_AFTER_TRYING_TO_POST"}},reRouteAfterCompleteLogin:_},te=Object(f.b)(function(e){var t=e.loginReducer,a=t.username,n=t.password,r=t.validated,o=t.LOGGEDIN,l=t.USER_NOT_FOUND,c=t.INCORRECT_USERNAME_OR_PASSWORD,i=t.REDIRECT,s=t.ROUTE,d=e.postReducer.TRIED_POSTING_ISSUE;return console.log(d),console.log(e.loginReducer),console.log(e.registerReducer),console.log(e),{username:a,password:n,validated:r,LOGGEDIN:o,USER_NOT_FOUND:l,INCORRECT_USERNAME_OR_PASSWORD:c,REDIRECT:i,ROUTE:s,TRIED_POSTING_ISSUE:d}},ee)(Object(v.f)(Q)),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){localStorage.getItem("token");return r.a.createElement("div",null,r.a.createElement(Z,null))}}]),t}(n.Component),ne=a(9),re=a.n(ne),oe=a(37),le=a.n(oe),ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.reRouteAfterCompleteLogin("/register"),console.log(a.props.ROUTE)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var a=e.target.children[0].children[0].children[1].value,n=e.target.children[0].children[1].children[1].value,r=e.target.children[0].children[2].children[1].value,o=e.target.children[0].children[3].children[1].value,l=e.target.children[0].children[4].children[1].value;if(o.includes(" ")||a.includes(" ")||r.includes(" ")||n.includes(" ")){return this.props.validate({validated:!1,registered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!0}),0}var c=a.split(" "),i=n.split(" "),s=r.split(" "),d=o.split(" "),u=l.split(" ");if(""===c[0]||""===i[0]||""===s[0]||""===d[0]||""===u[0])console.log(u),this.props.formNotFullfilled();else{var p={firstname:a,lastname:n,email:r,username:o,password:l};m.a.post("/userauth/register",p).then(function(e){var a=e.data.message;if(console.log(e),"REGISTER_SUCCESS"===a){t.props.registered();t.props.history.push("/login")}else"USER_ALREADY_EXISTS"===a?(console.log("user already exists"),t.props.userAlreadyExists()):"ERR_NO_PASSWORD"===a&&console.log("handle no password error")}).catch(function(e){console.log(e.message)})}}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.validated,n=(t.isRegistered,t.USER_ALREADY_EXISTS),o=t.FORM_NOT_FULLFILLED,l=t.SPACE_IN_USERNAME;return r.a.createElement("div",null,r.a.createElement(re.a,{noValidate:!0,validated:a,onSubmit:function(t){return e.handleSubmit(t)},className:"RegisterForm"},r.a.createElement(re.a.Row,null,r.a.createElement(re.a.Group,{as:le.a,md:"4",controlId:"firstName"},r.a.createElement(re.a.Label,null,"First name"),r.a.createElement(re.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),r.a.createElement(re.a.Control.Feedback,null,"Looks good!")),r.a.createElement(re.a.Group,{as:le.a,md:"4",controlId:"lastName"},r.a.createElement(re.a.Label,null,"Last name"),r.a.createElement(re.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),r.a.createElement(re.a.Control.Feedback,null,"Looks good!")),r.a.createElement(re.a.Group,{as:le.a,md:"8",controlId:"email"},r.a.createElement(re.a.Label,null,"Email"),r.a.createElement(re.a.Control,{type:"text",placeholder:"Email"}),r.a.createElement(re.a.Control.Feedback,null,"Looks good!")),r.a.createElement(re.a.Group,{as:le.a,md:"8",controlId:"username"},r.a.createElement(re.a.Label,null,"Username"),r.a.createElement(re.a.Control,{type:"text",placeholder:"User Name"}),n&&r.a.createElement("p",{className:"errorHandler"},"User already exists")),r.a.createElement(re.a.Group,{as:le.a,md:"8",controlId:"password"},r.a.createElement(re.a.Label,null,"Password"),r.a.createElement(re.a.Control,{type:"password",placeholder:"Password"}))),o&&r.a.createElement("p",{className:"errorHandler"},"Please fill out form"),l&&r.a.createElement("p",{className:"errorHandler"},"No spaces are allowed as characters"),r.a.createElement(I.a,{type:"submit"},"Register")))}}]),t}(n.Component),ie={validate:function(e){return{type:"REGISTER_VALIDATE",validate:e}},formNotFullfilled:function(){return{type:"FORM_NOT_FULLFILLED"}},registered:function(){return{type:"REGISTERED"}},userAlreadyExists:function(){return{type:"USER_ALREADY_EXISTS"}},reRouteAfterCompleteLogin:_},se=Object(f.b)(function(e){var t=e.registerReducer,a=t.username,n=t.password,r=t.validated,o=t.isRegistered,l=t.USER_ALREADY_EXISTS,c=t.FORM_NOT_FULLFILLED,i=t.SPACE_IN_USERNAME,s=e.loginReducer.ROUTE;return console.log(e),{username:a,password:n,validated:r,isRegistered:o,USER_ALREADY_EXISTS:l,FORM_NOT_FULLFILLED:c,SPACE_IN_USERNAME:i,ROUTE:s}},ie)(ce),de=a(85),ue=a.n(de),pe=(a(168),function(e){var t=e.color,a=e.name;e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:"pin bounce",style:{backgroundColor:t,cursor:"pointer"},title:a}),r.a.createElement("div",{className:"pulse"}))}),me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.props.detailsData);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log("line 19");var e="",t="",a={},n=this.props.detailsData,o=(n.id,n.city),l=n.imageFile,c=n.issueType,i=n.latitude,s=n.longitude,d=(n.postings_created_date,n.state),u=n.street,p=n.zipcode,m=n.description;n.postType;return void 0==l?this.props.history.push("/home"):(console.log(l),e=JSON.parse(l),console.log(e),t="src/uploads/"+e.filename,console.log(t),console.log(i,s),a={lat:i,lng:s}),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{className:"img-card-top",alt:"recipe",style:{height:"14rem"}})),r.a.createElement("div",{style:{height:"50vh",width:"100%"}},r.a.createElement(ue.a,{bootstrapURLKeys:{key:"AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE"},defaultCenter:a,defaultZoom:11},r.a.createElement(pe,{lat:i,lng:s,name:"My Marker",color:"red"}))),r.a.createElement("div",{className:"card-body text-capitalized"},r.a.createElement("h6",null,"Street: ",u),r.a.createElement("h6",null,"City: ",o),r.a.createElement("h6",null,"Zipcode: ",p),r.a.createElement("h6",null,"State: ",d),r.a.createElement("h6",{className:"text-warning text-slanted"},"Issue Type: ",c),r.a.createElement("h6",{className:"text-warning text-slanted"},"Description: ",m))))))}}]),t}(n.Component);me.defaultProps={location:{lat:37.774929,lng:-122.419416},zoom:11};var Ee={updateData:L,updateClickedDetails:T,handleIndex:y},ge=Object(f.b)(function(e){console.log(e);var t=e.homepageReducer;return{data:t.data,details_id:t.details_id,pageIndex:t.pageIndex,detailsData:t.detailsData}},Ee)(Object(v.f)(me)),he=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(x,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:j}),r.a.createElement(v.a,{exact:!0,path:"/home",component:j}),r.a.createElement(v.a,{exact:!0,path:"/post",component:ae}),r.a.createElement(v.a,{exact:!0,path:"/login",component:te}),r.a.createElement(v.a,{exact:!0,path:"/register",component:se}),r.a.createElement(v.a,{exact:!0,path:"/productdetails",component:ge}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(47),fe=a(5),ve={username:"",password:"",validated:!1,LOGGEDIN:!1,USER_NOT_FOUND:!1,INCORRECT_USERNAME_OR_PASSWORD:!1,ROUTE:""},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VALIDATE":var a=t.validate,n=a.validated,r=a.LOGGEDIN,o=a.USER_NOT_FOUND,l=a.INCORRECT_USERNAME_OR_PASSWORD;return Object(fe.a)({},e,{validated:n,LOGGEDIN:r,USER_NOT_FOUND:o,INCORRECT_USERNAME_OR_PASSWORD:l});case"REDIRECT":var c=t.route;return console.log(c),Object(fe.a)({},e,{ROUTE:c});case"LOGGOUT":return Object(fe.a)({},e,{LOGGEDIN:!1});default:return e}},Ie={username:"",password:"",validated:!1,isRegistered:!1,USER_ALREADY_EXISTS:!1,FORM_NOT_FULLFILLED:!1,SPACE_IN_USERNAME:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_VALIDATE":var a=t.validate,n=a.validated,r=a.isRegistered,o=a.USER_ALREADY_EXISTS,l=a.FORM_NOT_FULLFILLED,c=a.SPACE_IN_USERNAME;return Object(fe.a)({},e,{validated:n,isRegistered:r,USER_ALREADY_EXISTS:o,FORM_NOT_FULLFILLED:l,SPACE_IN_USERNAME:c});case"FORM_NOT_FULLFILLED":return Object(fe.a)({},e,{FORM_NOT_FULLFILLED:!0});case"REGISTERED":return Object(fe.a)({},e,{isRegistered:!0,validated:!0});case"USER_ALREADY_EXISTS":return Object(fe.a)({},e,{USER_ALREADY_EXISTS:!0,FORM_NOT_FULLFILLED:!1});default:return e}},be={login:!1,register:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be;switch((arguments.length>1?arguments[1]:void 0).type){case"CLICKED_LOGIN":return{login:!0,register:!1};case"CLICKED_REGISTER":return{login:!1,register:!0};default:return e}},Ne=a(51),Le={postStatus:"",location:"",postType:"",loadedFiles:[],fd:"",file:"",latitude:"",longitude:"",street:"",city:"",state:"",zipcode:"",issueType:"",description:"",imageFile:"",locationError:!1,geoLocationIsLoading:!1,TRIED_POSTING_ISSUE:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FORM":var a=t.fieldToChange,n="",r="";for(var o in console.log(n),console.log(r),console.log(a),a)n=o,r=a[o];return Object(fe.a)({},e,Object(k.a)({},n,r));case"LOAD_IMAGE":var l=t.newImage;return Object(fe.a)({},e,{imageFile:l});case"UPDATE_GEOLOCATION":var c=t.location,i=c.latitude,s=c.longitude;return Object(fe.a)({},e,{latitude:i,longitude:s});case"ADD_TO_IMAGE_LIST":var d=t.imageToAdd;return Object(fe.a)({},e,{loadedFiles:[].concat(Object(Ne.a)(e.loadedFiles),[d])});case"ERR_GET_LOCATION":return Object(fe.a)({},e,{locationError:!0});case"ADD_TO_IMAGE_LIST":return Object(fe.a)({},e,{loadedFiles:[]});case"GEO_LOCATION_LOADING":return Object(fe.a)({},e,{geoLocationIsLoading:!0});case"GEO_LOCATION_DONE_LOADING":return Object(fe.a)({},e,{geoLocationIsLoading:!1});case"TRIED_POSTING_ISSUE":return Object(fe.a)({},e,{TRIED_POSTING_ISSUE:!0});case"FINISHED_LOGGING_IN_AFTER_TRYING_TO_POST":return Object(fe.a)({},e,{TRIED_POSTING_ISSUE:!1});case"RESET_REDUCER":return{postStatus:"",location:"",postType:"",loadedFiles:[],fd:"",file:"",latitude:"",longitude:"",street:"",city:"",state:"",zipcode:"",issueType:"",description:"",imageFile:"",locationError:"",geoLocationIsLoading:!1};default:return e}},ye={data:[],pageIndex:1,search:"",details_id:"",toUpdateHomepage:!1,detailsData:{}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DATA":var a=t.data;return Object(fe.a)({},e,{data:Object(Ne.a)(a)});case"CLICKED_ISSUE_DETAILS":var n=t.tempObj,r=n.id,o=n.index;return console.log(r,o),Object(fe.a)({},e,{details_id:r,pageIndex:o});case"UPDATE_INDEX":return Object(fe.a)({},e,{pageIndex:o});case"UPDATE_SEARCH":var l=t.input;return console.log(l),Object(fe.a)({},e,{search:l});case"UPDATE_HOMEPAGE":var c=t.bool;return console.log(c),Object(fe.a)({},e,{toUpdateHomepage:c});case"CLICKED_ITEM":return Object(fe.a)({},e,{detailsData:t.data});default:return e}},Ae=Object(Oe.b)({loginReducer:Re,registerReducer:_e,userauthReducer:Se,postReducer:Te,homepageReducer:De}),Ce=Object(Oe.c)(Ae);l.a.render(r.a.createElement(f.a,{store:Ce},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){},92:function(e,t,a){e.exports=a(169)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.a19657da.chunk.js.map