(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),o=(a(71),a(3)),i=a(4),s=a(7),m=a(5),u=a(6),p=a(21),d=a.n(p),h=(a(90),a(91),a(18)),b=a(143),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"text-white",onClick:this.toggle,style:{border:"none",backgroundColor:"transparent"},id:"sigin-btn"},"Admin"))}}]),t}(l.a.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},l.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},l.a.createElement("h1",null,"Team 06")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",l.a.createElement("i",{className:"fas fa-home"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/ShowPostings"},"ShowPostings")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/aboutUs"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/post"},"Post"))),l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-primary  my-2 my-sm-0",type:"submit"},"Search")),l.a.createElement(g,null)))}}]),t}(l.a.Component),v=a(22),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,this.state.data.map(function(e){var t=e.id,a=e.location,n=e.postType,c=e.postStatus,r=e.picture;return l.a.createElement("tr",{key:e,className:"row"},l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("p",null,t),l.a.createElement("img",{src:"".concat(t)}),l.a.createElement("p",null,a),l.a.createElement("p",null,n),l.a.createElement("p",null,c),l.a.createElement("p",null,r))))}))}}]),t}(n.Component),y=a(146),j=(a(96),a(97),a(11)),x=a(56),k=a.n(x),O=(a(98),["one","two","three"]),N=(n.Component,n.Component,a(144)),w=a(145),_=(a(99),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,data:t})})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement(l.a.Fragment,null,"Json API used to fetch data",l.a.createElement("ul",null,e.map(function(e){return l.a.createElement("li",{key:e.id},"Name: ",e.name," | Email: ",e.email)})))}}]),t}(n.Component));_.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var S=[{recipe_id:1,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"},{recipe_id:2,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"},{recipe_id:3,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"},{recipe_id:4,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"},{recipe_id:5,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"},{recipe_id:6,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg"}],C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.recipe_id,c=e.publisher,r=this.props.handleDetails;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:t,className:"img-card-top",alt:"recipe",style:{height:"14rem"}}),l.a.createElement("div",{className:"card-body text-capitalized"},l.a.createElement("h6",null,a),l.a.createElement("h6",{className:"text-warning text-slanted"},"Posted by",c)),l.a.createElement("div",{className:"card-footer text-cen"},l.a.createElement("button",{type:"button",className:"btn btn-primary text-capitalize",onClick:function(){return r(0,n)}},"details")))))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.error;return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rwo"}),l.a.createElement("div",{className:"container my-6"},l.a.createElement("div",{className:"row"},n?l.a.createElement("h1",{className:"text-danger text-center"},n):t.map(function(e){return l.a.createElement(C,{key:e.recipe_id,recipe:e,handleDetails:a})})))))}}]),t}(n.Component),D={image_url:"http://www.urbanbackpacker.com/wp-content/uploads/Golden-Gate-Park-Map-by-Rochelle-Carr.jpg",enviroment:["Green place","Green place","Green place","Green place"],publisher:"Gerry",publisher_url:"http://closetcooking.com",source_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Title goes here"},P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={recipe:D},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.source_url,c=e.title,r=e.enviroment,o=this.props.handleIndex;return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("button",{className:"btn btn-warning text-capitalize mb-5",onClick:function(){return o(1)}},"back to home page"),l.a.createElement("img",{src:t,className:"d-block w-100",alt:"recipe"})),l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("h6",{className:"text-uppercase"},c),l.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"provided by ",a),l.a.createElement("ul",{className:"list-group mt-4"},l.a.createElement("h2",{className:"mt-3 mb-4"},"Details"),r.map(function(e,t){return l.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)}),l.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"source ",n)))))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:S,url:"https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",base_url:"https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",details_id:35375,pageIndex:1},a.displayPage=function(e){switch(e){case 0:return l.a.createElement(P,{id:a.state.details_id,handleIndex:a.handleIndex});case 1:return l.a.createElement(G,{recipes:a.state.recipes,handleDetails:a.handleDetails,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error})}},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({details_id:t,pageIndex:e})},a.handleChange=function(e){a.setState({search:e.target.value},function(){})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.base_url,l=t.query,c=t.search;a.setState(function(){return{url:"".concat(n).concat(l).concat(c),search:""}},function(){a.getRecipes()})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"newMethod",value:function(){console.log(this.state.search)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,{className:"mt-2"},l.a.createElement(w.a,null,l.a.createElement("div",{className:"container my-6"},l.a.createElement(y.a,null,l.a.createElement(y.a.Toggle,{variant:"secondary",id:"dropdown-basic"},"Filter"),l.a.createElement(y.a.Menu,null,l.a.createElement(y.a.Item,{href:"#/Park"},"Park"),l.a.createElement(y.a.Item,{href:"#/Zipcode"},"Zip code"),l.a.createElement(y.a.Item,{href:"#/city"},"city")))),l.a.createElement(l.a.Fragment,null,this.displayPage(this.state.pageIndex)))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"Get your News here"))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"About Us"))}}]),t}(n.Component),W=a(64),Z=a.n(W),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pictures:[]},a.onDrop=a.onDrop.bind(Object(j.a)(Object(j.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Z.a,{withIcon:!0,buttonText:"Upload images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}))}}]),t}(l.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.postStatus,l=t.location,c=t.postType;console.log(n,l,c),d.a.post("/api/postings",{postStatus:n,location:l,postType:c}).then(function(e){console.log("hi")}).catch(function(e){console.log(e)}),console.log()},a.checkPostings=function(){},a.changePostStatus=function(e){var t=e.target.value;a.setState({postStatus:t})},a.changeLocation=function(e){var t=e.target.value;a.setState({location:t})},a.changePostType=function(e){var t=e.target.value;a.setState({postType:t})},a.state={postStatus:"",location:"",postType:""},a.toggle=a.toggle.bind(Object(j.a)(Object(j.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Type Issue"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",onChange:this.changePostStatus,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Location"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",onChange:this.changeLocation,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"post type"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" post staus",name:"post staus",type:"post staus",onChange:this.changePostType,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement(T,null),l.a.createElement("br",null),l.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).fetchData=function(){console.log("line 27"),a.loadSomeData()},a.postData=function(){console.log("here"),d.a.post("/hi",{x:"y"}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},a.state={temp:0,message:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"loadSomeData",value:function(){console.log("line 16"),d.a.get("/hi").then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(f,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/home",component:I}),l.a.createElement(v.a,{exact:!0,path:"/news",component:U}),l.a.createElement(v.a,{exact:!0,path:"/aboutUs",component:q}),l.a.createElement(v.a,{exact:!0,path:"/post",component:A}),l.a.createElement(v.a,{exact:!0,path:"/showPostings",component:E}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(140)},71:function(e,t,a){},90:function(e,t,a){},96:function(e,t,a){e.exports=a.p+"static/media/glenCanyonPark.bb066623.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/washingtonSquare.5628756b.jpg"},98:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.bf31f8ab.chunk.js.map