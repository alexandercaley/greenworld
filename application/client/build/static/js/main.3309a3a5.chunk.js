(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(70)},41:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},61:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/donkey.920876bf.jpg"},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),o=a.n(c),r=(a(41),a(3)),i=a(4),s=a(7),m=a(5),u=a(6),p=a(17),d=a.n(p),b=(a(60),a(61),a(62),a(13)),h=a(71),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,{className:"text-white",onClick:this.toggle,style:{border:"none",backgroundColor:"transparent"},id:"sigin-btn"},"Admin"))}}]),t}(l.a.Component),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},l.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},l.a.createElement("h1",null,"Team 06")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",l.a.createElement("i",{className:"fas fa-home"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/news"},"news")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/aboutUs"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/post"},"Post")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{className:"nav-link text-white text-uppercase ml-5",to:"/category"},"Category"))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-primary  my-2 my-sm-0",type:"submit"},"Search")),l.a.createElement(E,null)))}}]),t}(l.a.Component),v=a(15),g=a(8),y=a(34),j=a.n(y),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pictures:[]},a.onDrop=a.onDrop.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,{withIcon:!0,buttonText:"Upload images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.postStatus,l=t.location,c=t.postType;console.log(n,l,c),d.a.post("/api/postings",{postStatus:n,location:l,postType:c}).then(function(e){console.log("hi")}).catch(function(e){console.log(e)}),console.log()},a.changePostStatus=function(e){var t=e.target.value;a.setState({postStatus:t})},a.changeLocation=function(e){var t=e.target.value;a.setState({location:t})},a.changePostType=function(e){var t=e.target.value;a.setState({postType:t})},a.state={postStatus:"",location:"",postType:""},a.toggle=a.toggle.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Type Issue"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",onChange:this.changePostStatus,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Location"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",onChange:this.changeLocation,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"post type"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" post staus",name:"post staus",type:"post staus",onChange:this.changePostType,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"Get your News here"))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"About Us"))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault()},a.state={description:null},a.toggle=a.toggle.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Type Issue"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Location"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Zipcode"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Zipcode",name:"Zipcode",type:"zipcode",noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Discription"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Detail",name:"Zipcode",type:"zipcode",noValidate:!0}))),l.a.createElement("br",null),l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={displayMenu:!1},e.showDropdownMenu=e.showDropdownMenu.bind(Object(g.a)(Object(g.a)(e))),e.hideDropdownMenu=e.hideDropdownMenu.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"dropdown",style:{background:"red",width:"150px"}},l.a.createElement("div",{className:"button",onClick:this.showDropdownMenu}," ","Item Category ^"),this.state.displayMenu?l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"active",href:"#Plastc"},"Plastc")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Tree Fall"},"Tree Fall")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Garbage"},"Garbage ")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Water flood"},"Water flood "))):null)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).fetchData=function(){console.log("line 27"),a.loadSomeData()},a.postData=function(){console.log("here"),d.a.post("/hi",{x:"y"}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},a.state={temp:0,message:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"loadSomeData",value:function(){console.log("line 16"),d.a.get("/hi").then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(f,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",component:w}),l.a.createElement(v.a,{exact:!0,path:"/home",component:w}),l.a.createElement(v.a,{exact:!0,path:"/news",component:N}),l.a.createElement(v.a,{exact:!0,path:"/aboutUs",component:x}),l.a.createElement(v.a,{exact:!0,path:"/post",component:k}),l.a.createElement(v.a,{exact:!0,path:"/category",component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.3309a3a5.chunk.js.map