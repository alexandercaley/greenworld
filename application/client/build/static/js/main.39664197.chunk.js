(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),o=(a(78),a(5)),s=a(6),i=a(9),u=a(7),m=a(8),p=a(21),d=a.n(p),h=(a(97),a(98),a(19)),b=a(148),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"text-white",onClick:this.toggle,style:{border:"none",backgroundColor:"transparent"},id:"sigin-btn"},"Admin"))}}]),t}(l.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},l.a.createElement("a",{className:"navbar-brand ml-5",href:"#"},l.a.createElement("h1",null,"Team 06")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-bars",style:{color:"#fff"}}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/home"},"Home",l.a.createElement("i",{className:"fas fa-home"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/ShowPostings"},"ShowPostings")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/aboutUs"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link text-white text-uppercase ml-5",to:"/post"},"Post"))),l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-primary  my-2 my-sm-0",type:"submit"},"Search")),l.a.createElement(f,null)))}}]),t}(l.a.Component),E=a(22),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/postings").then(function(t){console.log(t.data),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,this.state.data.map(function(e){var t=e.id,a=e.location,n=e.postType,c=e.postStatus,r=e.picture;return l.a.createElement("tr",{key:e,className:"row"},l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("p",null,t),l.a.createElement("img",{src:"".concat(t)}),l.a.createElement("p",null,a),l.a.createElement("p",null,n),l.a.createElement("p",null,c),l.a.createElement("p",null,r))))}))}}]),t}(n.Component),y=a(24),w=a.n(y),j=a(29),k=a(58),O=a.n(k),x=a(59),N=a.n(x),S=a(13),C=a(60),P=a.n(C),B=(a(105),["one","two","three"]),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selected:""},a._onSelect=a._onSelect.bind(Object(S.a)(Object(S.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"_onSelect",value:function(e){console.log("You selected ",e.label),this.setState({selected:e})}},{key:"render",value:function(){var e=this.state.selected,t="string"===typeof this.state.selected?this.state.selected:this.state.selected.label;return l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement("h3",null,"Flat Array Example "),l.a.createElement(P.a,{className:"",options:B,onChange:this._onSelect,value:e,placeholder:"Select an option"}),l.a.createElement("div",{className:"result"},"You selected ",l.a.createElement("h2",null," ",t))))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={displayMenu:!1},e.showDropdownMenu=e.showDropdownMenu.bind(Object(S.a)(Object(S.a)(e))),e.hideDropdownMenu=e.hideDropdownMenu.bind(Object(S.a)(Object(S.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"dropdown",style:{background:"red",width:"200px"}},l.a.createElement("div",{className:"button",onClick:this.showDropdownMenu}," ","My Setting"," "),this.state.displayMenu?l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"active",href:"#Create Page"},"Create Page")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Manage Pages"},"Manage Pages")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Create Ads"},"Create Ads")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Manage Ads"},"Manage Ads")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Activity Logs"},"Activity Logs")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Setting"},"Setting")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Log Out"},"Log Out"))):null)}}]),t}(n.Component),M=a(149),I=a(150),A=a(151),G=a(152),J=a(153),L=a(154),T=a(155),F=a(61),z=a.n(F),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoaded:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,data:t})})}},{key:"render",value:function(){var e=this.state,t=(e.isLoaded,e.data);return l.a.createElement("div",null,"Json API used to fetch data",l.a.createElement("ul",null,t.map(function(e){return l.a.createElement("li",{key:e.id},"Name: ",e.name," | Email: ",e.email)})))}}]),t}(n.Component);U.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var H=U,Z=[{recipe_id:1,image_url:"https://i.ytimg.com/vi/_opWZqyx1Uk/maxresdefault.jpg",title:"Golden gate park",publisher:" Gerry",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:2,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:3,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:4,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:5,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:6,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"}],R=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.recipe_id,c=e.publisher,r=this.props.handleDetails;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:t,className:"img-card-top",alt:"recipe",style:{height:"14rem"}}),l.a.createElement("div",{className:"card-body text-capitalized"},l.a.createElement("h6",null,a),l.a.createElement("h6",{className:"text-warning text-slanted"},"Posted by",c)),l.a.createElement("div",{className:"card-footer text-center"},l.a.createElement("button",{type:"button",className:"btn btn-primary text-capitalize",onClick:function(){return r(0,n)}},"details")))))}}]),t}(n.Component),V=a(156),W=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=(e.value,e.error);e.handleSubmit,e.handleChange;return l.a.createElement("div",null,l.a.createElement("div",{className:"container my-2"},l.a.createElement(V.a,null,l.a.createElement(V.a.Toggle,{variant:"secondary",id:"dropdown-basic"},"Filter"),l.a.createElement(V.a.Menu,null,l.a.createElement(V.a.Item,{href:"#/Park"},"Park"),l.a.createElement(V.a.Item,{href:"#/Zipcode"},"Zip code"),l.a.createElement(V.a.Item,{href:"#/city"},"city")))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rwo"}),l.a.createElement("div",{className:"container my-6"},l.a.createElement("div",{className:"row"},n?l.a.createElement("h1",{className:"text-danger text-center"},n):t.map(function(e){return l.a.createElement(R,{key:e.recipe_id,recipe:e,handleDetails:a})})))))}}]),t}(n.Component),q={f2f_url:"http://food2fork.com/view/35382",image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",ingredients:["2 jalapeno peppers, cut in half lengthwise and seeded","2 slices sour dough bread","1 tablespoon butter, room temperature","2 tablespoons cream cheese, room temperature","1/2 cup jack and cheddar cheese, shredded","1 tablespoon tortilla chips, crumbled"],publisher:"Closet Cooking",publisher_url:"http://closetcooking.com",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",title:"Jalapeno Popper Grilled Cheese Sandwich"},Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={recipe:q,modal:!1,price:" ",show:!0},a.toggle=function(){a.setState(function(e){return{modal:!e.modal}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(w.a.mark(function e(){var t,a,n,l;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.id,a="https://www.food2fork.com/api/get?key=89788ff6e01201236541b2b9b35ffb43&rId=".concat(t),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:l=e.sent,this.setState(function(e,t){return{recipe:l.recipe}},function(){}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.title,c=e.ingredients,r=this.props.handleIndex;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("button",{className:"btn btn-warning text-capitalize mb-5",onClick:function(){return r(1)}},"back to recipe list"),l.a.createElement("img",{src:t,className:"d-block w-100",alt:"recipe"})),"Deitails Section",l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("h6",{className:"text-uppercase"},n),l.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"Posted by ",a),l.a.createElement("ul",{className:"list-group mt-4"},l.a.createElement("h2",{className:"mt-3 mb-4"},"Details"),c.map(function(e,t){return l.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)})),l.a.createElement("p",{className:"text-muted text-uppercase"},"Detail goes here")))))}}]),t}(n.Component),K=function(e){var t=e.text;return l.a.createElement("div",null,t)},X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:Z,url:"https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",base_url:"https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",details_id:35375,pageIndex:1},a.displayPage=function(e){switch(e){case 0:return l.a.createElement(Y,{id:a.state.details_id,handleIndex:a.handleIndex});case 1:return l.a.createElement(W,{recipes:a.state.recipes,handleDetails:a.handleDetails,value:a.state.search,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error})}},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({details_id:t,pageIndex:e})},a.handleChange=function(e){a.setState({search:e.target.value},function(){})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.base_url,l=t.query,c=t.search;a.setState(function(){return{url:"".concat(n).concat(l).concat(c),search:""}},function(){a.getRecipes()})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getRecipes",value:function(){var e=Object(j.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:0===(a=e.sent).recipes.length?this.setState(function(){return{error:"No results match your search"}}):this.setState(function(){return{recipes:a.recipes}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"newMethod",value:function(){console.log(this.state.search)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,this.displayPage(this.state.pageIndex)),l.a.createElement(M.a,{className:"mt-2"},l.a.createElement(I.a,null,l.a.createElement(A.a,{lg:8,md:8,xs:8},l.a.createElement(G.a,{body:!0,outline:!0,color:"secondary",className:"mb-2"},l.a.createElement(H,null))),l.a.createElement(A.a,{lg:8,md:8,xs:8},l.a.createElement(G.a,{body:!0,outline:!0,color:"secondary",className:"mb-2"},l.a.createElement(D,null),l.a.createElement("br",null),l.a.createElement(_,null),l.a.createElement(h.b,{to:"/showPostings"},"Click Here to check posted items in database"),l.a.createElement("br",null))),l.a.createElement(A.a,{lg:8,md:8,xs:8},l.a.createElement(G.a,{body:!0,outline:!0,color:"secondary",className:"mb-2"},l.a.createElement("img",{src:N.a,alt:"logo",style:{width:"300px"}})," ",l.a.createElement(J.a,null,l.a.createElement(L.a,null," washington Park detail goes here")),l.a.createElement(T.a,null,l.a.createElement("small",{className:"text-muted text-center"},"Should include washington Park Map"),l.a.createElement("div",{style:{height:"50vh",width:"100%"}},l.a.createElement(z.a,{bootstrapURLKeys:{key:"AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},l.a.createElement(K,{lat:59.955413,lng:30.337844,text:"My Marker"})))))),l.a.createElement(A.a,{lg:8,md:8,xs:8},l.a.createElement(G.a,{body:!0,outline:!0,color:"secondary",className:"mb-2"},l.a.createElement("img",{src:O.a,alt:"logo",style:{width:"300px"}})," ",l.a.createElement(J.a,null,l.a.createElement(L.a,null," glenCanyonPark details goes here")),l.a.createElement(T.a,null,l.a.createElement("small",{className:"text-muted text-center"},"Should include glenCanyonPark Map")))))))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"Get your News here"))}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},"About Us"))}}]),t}(n.Component),ee=a(70),te=a.n(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={pictures:[]},a.onDrop=a.onDrop.bind(Object(S.a)(Object(S.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(te.a,{withIcon:!0,buttonText:"Upload images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}))}}]),t}(l.a.Component),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.postStatus,l=t.location,c=t.postType;console.log(n,l,c),d.a.post("/api/postings",{postStatus:n,location:l,postType:c}).then(function(e){console.log("hi")}).catch(function(e){console.log(e)}),console.log()},a.checkPostings=function(){},a.changePostStatus=function(e){var t=e.target.value;a.setState({postStatus:t})},a.changeLocation=function(e){var t=e.target.value;a.setState({location:t})},a.changePostType=function(e){var t=e.target.value;a.setState({postType:t})},a.state={postStatus:"",location:"",postType:""},a.toggle=a.toggle.bind(Object(S.a)(Object(S.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(e){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"ui form segment text-center",onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("h3",{className:"text-center text-info"},"Post Any Issue"),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Type Issue"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:"Type Issue",name:"fullname",type:"text",onChange:this.changePostStatus,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Location"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" Location",name:"name",type:"Lacation",onChange:this.changeLocation,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"post type"),l.a.createElement("br",null),l.a.createElement("input",{placeholder:" post staus",name:"post staus",type:"post staus",onChange:this.changePostType,noValidate:!0}))),l.a.createElement("br",null),l.a.createElement(ae,null),l.a.createElement("br",null),l.a.createElement("button",{className:"submit button",onClick:this.handleSubmit},"Submit Issue")))}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchData=function(){console.log("line 27"),a.loadSomeData()},a.postData=function(){console.log("here"),d.a.post("/hi",{x:"y"}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},a.state={temp:0,message:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"loadSomeData",value:function(){console.log("line 16"),d.a.get("/hi").then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(g,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/home",component:X}),l.a.createElement(E.a,{exact:!0,path:"/news",component:$}),l.a.createElement(E.a,{exact:!0,path:"/aboutUs",component:Q}),l.a.createElement(E.a,{exact:!0,path:"/post",component:ne}),l.a.createElement(E.a,{exact:!0,path:"/showPostings",component:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a.p+"static/media/glenCanyonPark.bb066623.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/washingtonSquare.5628756b.jpg"},73:function(e,t,a){e.exports=a(146)},78:function(e,t,a){},97:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.39664197.chunk.js.map