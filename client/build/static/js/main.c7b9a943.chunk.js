(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(142),n(25)),o=n(17),l=n(97),d=n(250),u=n(10),j=n(224),m=[{url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",text:"Top Offers"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",text:"Grocery"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",text:"Mobile"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",text:"Fashion"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",text:"Electronics"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",text:"Home"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",text:"Appliances"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",text:"Travel"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",text:"Beauty, Toys & More"}],p=["https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50"],b=n(1),f=Object(l.a)((function(e){return{component:Object(u.a)({display:"flex",justifyContent:"space-between",margin:"55px 130px 0 130px",overflowX:"overlay"},e.breakpoints.down("md"),{margin:0}),container:{padding:"12px 8px",textAlign:"center"},image:{width:64},text:{fontSize:14,fontWeight:600,fontFamily:"inherit"}}})),x=function(){var e=f();return Object(b.jsx)(d.a,{className:e.component,children:m.map((function(t){return Object(b.jsxs)(d.a,{className:e.container,children:[Object(b.jsx)("img",{src:t.url,className:e.image}),Object(b.jsx)(j.a,{className:e.text,children:t.text})]})}))})},h=n(116),g=n.n(h),O=Object(l.a)((function(e){return{container:{},image:Object(u.a)({width:"100%",height:280},e.breakpoints.down("sm"),{objectFit:"cover",height:180})}})),y=function(){var e=O();return Object(b.jsx)(g.a,{autoPlay:!0,animation:"slide",indicators:!1,navButtonsAlwaysVisible:!0,cycleNavigation:!0,className:e.container,StylesProvider:!0,navButtonsProps:{style:{color:"#494949",backgroundColor:"#FFFFFF",borderRadius:0,margin:0,width:50}},children:p.map((function(t){return Object(b.jsx)("img",{src:t,className:e.image})}))})},v=n(24),w=n(199),k=n(227),N=n(117),C=n.n(N),F=(n(173),n(118)),T={desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},S=Object(l.a)((function(e){return Object(u.a)({component:{marginTop:12,background:"#FFFFFF"},timer:{color:"#7f7f7f",marginLeft:10,display:"flex",alignItems:"center"},image:{width:"auto",height:150},text:{fontSize:14,marginTop:5},deal:{display:"flex",padding:"15px 20px"},dealText:{fontSize:22,fontWeight:600,lineHeight:"32px",marginRight:25},button:{marginLeft:"auto",backgroundColor:"#2874f0",borderRadius:2,fontSize:13},wrapper:{padding:"25px 15px"}},"timer",Object(u.a)({},e.breakpoints.down("sm"),{display:"none"}))})),I=function(e){var t=e.data,n=e.timer,a=e.title,c=S();return Object(b.jsxs)(d.a,{className:c.component,children:[Object(b.jsxs)(d.a,{className:c.deal,children:[Object(b.jsx)(j.a,{className:c.dealText,children:a}),n&&Object(b.jsxs)(d.a,{className:c.timer,children:[Object(b.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg",style:{width:24},alt:"time clock"}),Object(b.jsx)(F.a,{date:Date.now()+504e5,renderer:function(e){var t=e.hours,n=e.minutes,a=e.seconds;return Object(b.jsxs)("span",{className:c.timer,children:[t," : ",n," : ",a,"  Left"]})}})]}),Object(b.jsx)(w.a,{variant:"contained",color:"primary",className:c.button,children:"View All"})]}),Object(b.jsx)(k.a,{}),Object(b.jsx)(C.a,{swipeable:!1,draggable:!1,responsive:T,centerMode:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:1e4,keyBoardControl:!0,showDots:!1,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:t.map((function(e){return Object(b.jsx)(s.b,{to:"product/".concat(e.id),style:{textDecoration:"none"},children:Object(b.jsxs)(d.a,{textAlign:"center",className:c.wrapper,children:[Object(b.jsx)("img",{src:e.url,className:c.image}),Object(b.jsx)(j.a,{className:c.text,style:{fontWeight:600,color:"#212121"},children:e.title.shortTitle}),Object(b.jsx)(j.a,{className:c.text,style:{color:"green"},children:e.discount}),Object(b.jsx)(j.a,{className:c.text,style:{color:"#212121",opacity:".6"},children:e.tagline})]})})}))})]})},P=function(e){return Object(b.jsx)(b.Fragment,{children:!0===e.multi?Object(b.jsx)(I,Object(v.a)({},e)):""})},A=Object(l.a)((function(e){return{component:{display:"flex"},leftComponent:Object(u.a)({width:"83%"},e.breakpoints.down("md"),{width:"100%"}),rightComponent:Object(u.a)({marginTop:12,background:"#FFFFFF",width:"17%",marginLeft:10,padding:5},e.breakpoints.down("md"),{display:"none"})}})),D=function(e){var t=e.products,n=A();return Object(b.jsxs)(d.a,{className:n.component,children:[Object(b.jsx)(d.a,{className:n.leftComponent,children:Object(b.jsx)(P,{data:t,title:"Deals of the Day",timer:!0,multi:!0})}),Object(b.jsx)(d.a,{className:n.rightComponent,children:Object(b.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70",style:{width:232}})})]})},E=n(228),R=n(4),z=["https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50","https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg","https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50"],L=Object(l.a)((function(e){return{wrapper:{display:"flex",marginTop:20,justifyContent:"space-between"},image:{width:"100%"},help:Object(u.a)({},e.breakpoints.down("md"),{objectFit:"cover",height:120})}})),B=function(){var e=L();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E.a,{lg:12,sm:12,md:12,xs:12,container:!0,className:e.wrapper,children:z.map((function(t){return Object(b.jsx)(E.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(b.jsx)("img",{src:t,className:e.image})})}))}),Object(b.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50",className:Object(R.a)(e.wrapper,e.help),style:{width:"100%"}})]})},q=n(22),W=n(13),H=n.n(W),M=n(23),_="getProductsSuccess",U="getProductsFail",J="getProductDetailsRequest",G="getProductDetailSuccess",V="getProductDetailFail",Y="getProductDetailReset",X=n(38),K=n.n(X),Q=function(){return function(){var e=Object(M.a)(H.a.mark((function e(t){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Hiiiiii"),e.next=4,K.a.get("http://localhost:8000/products");case 4:n=e.sent,a=n.data,t({type:_,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:U,payload:e.t0.response});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},Z=Object(l.a)({component:{padding:10,background:"#F2F2F2"}}),$=function(){var e=Z(),t=Object(q.c)((function(e){return e.getProducts})),n=t.products,c=(t.error,Object(q.b)());return Object(a.useEffect)((function(){c(Q())}),[c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(d.a,{className:e.component,children:[Object(b.jsx)(y,{}),Object(b.jsx)(D,{products:n}),Object(b.jsx)(B,{}),Object(b.jsx)(P,{data:n,title:"Discounts for You",timer:!1,multi:!0}),Object(b.jsx)(P,{data:n,title:"Suggested Items",timer:!1,multi:!0}),Object(b.jsx)(P,{data:n,title:"Top Selection",timer:!1,multi:!0}),Object(b.jsx)(P,{data:n,title:"Recommended Items",timer:!1,multi:!0})]})]})},ee=function(){return Object(b.jsx)("p",{children:"Not Found! 404"})},te=n(15),ne=n(6),ae=n(236),ce=n(231),re=n(237),ie=n(99),se=n(239),oe=n(234),le=n(235),de=n(229),ue=n(230),je=n(249),me="http://localhost:8000",pe=function(){var e=Object(M.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.post("".concat(me,"/login"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("error while calling login API: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(M.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.post("".concat(me,"/signup"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("error while calling Signup API: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(M.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("payment api"),e.next=4,K.a.post("".concat(me,"/payment"),t);case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),xe=Object(l.a)({component:{height:"70vh",width:"90vh",maxWidth:"unset !important"},image:{backgroundImage:"url(".concat("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png",")"),background:"#2874f0",backgroundPosition:"center 85%",backgroundRepeat:"no-repeat",height:"70vh",width:"40%",padding:"45px 35px","& > *":{color:"#FFFFFF",fontWeight:600}},login:{padding:"25px 35px",display:"flex",flex:1,flexDirection:"column","& > *":{marginTop:20}},loginbtn:{textTransform:"none",background:"#FB641B",color:"#fff",height:48,borderRadius:2},requestbtn:{textTransform:"none",background:"#fff",color:"#2874f0",height:48,borderRadius:2,boxShadow:"0 2px 4px 0 rgb(0 0 0 / 20%)"},text:{color:"#878787",fontSize:12},createText:{margin:"auto 0 5px 0",textAlign:"center",color:"#2874f0",fontWeight:600,fontSize:14,cursor:"pointer"},error:{fontSize:10,color:"#ff6161",lineHeight:0,marginTop:10,fontWeight:600}}),he={username:"",password:""},ge={firstname:"",lastname:"",username:"",email:"",password:"",phone:""},Oe={view:"login",heading:"Login",subHeading:"Get access to your Orders, Wishlist and Recommendations"},ye={view:"signup",heading:"Looks like you're new here",subHeading:"Signup to get started"},ve=function(e){var t=e.open,n=e.setOpen,c=e.setAccount,r=xe(),i=Object(a.useState)(he),s=Object(te.a)(i,2),o=s[0],l=s[1],m=Object(a.useState)(ge),p=Object(te.a)(m,2),f=p[0],x=p[1],h=Object(a.useState)(!1),g=Object(te.a)(h,2),O=g[0],y=g[1],k=Object(a.useState)(Oe),N=Object(te.a)(k,2),C=N[0],F=N[1];Object(a.useEffect)((function(){y(!1)}),[o]);var T=function(e){l(Object(v.a)(Object(v.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},S=function(e){x(Object(v.a)(Object(v.a)({},f),{},Object(u.a)({},e.target.name,e.target.value)))},I=function(){var e=Object(M.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(o);case 2:e.sent?(y(!1),A(),c(o.username)):y(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(M.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(f);case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:A(),c(f.username);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){n(!1),F(Oe)};return Object(b.jsx)(de.a,{open:t,onClose:A,children:Object(b.jsx)(ue.a,{className:r.component,children:Object(b.jsxs)(d.a,{style:{display:"flex"},children:[Object(b.jsxs)(d.a,{className:r.image,children:[Object(b.jsx)(j.a,{variant:"h5",children:C.heading}),Object(b.jsx)(j.a,{style:{marginTop:20},children:C.subHeading})]}),"login"===C.view?Object(b.jsxs)(d.a,{className:r.login,children:[Object(b.jsx)(je.a,{onChange:function(e){return T(e)},name:"username",label:"Enter Email/Mobile number"}),O&&Object(b.jsx)(j.a,{className:r.error,children:"Please enter valid Email ID/Mobile number"}),Object(b.jsx)(je.a,{onChange:function(e){return T(e)},name:"password",label:"Enter Password"}),Object(b.jsx)(j.a,{className:r.text,children:"By continuing, you agree to Flipkart's Terms of Use and Privacy Policy."}),Object(b.jsx)(w.a,{className:r.loginbtn,onClick:function(){return I()},children:"Login"}),Object(b.jsx)(j.a,{className:r.text,style:{textAlign:"center"},children:"OR"}),Object(b.jsx)(w.a,{className:r.requestbtn,children:"Request OTP"}),Object(b.jsx)(j.a,{className:r.createText,onClick:function(){F(ye)},children:"New to Flipkart? Create an account"})]}):Object(b.jsxs)(d.a,{className:r.login,children:[Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"firstname",label:"Enter Firstname"}),Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"lastname",label:"Enter Lastname"}),Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"username",label:"Enter Username"}),Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"email",label:"Enter Email"}),Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"password",label:"Enter Password"}),Object(b.jsx)(je.a,{onChange:function(e){return S(e)},name:"phone",label:"Enter Phone"}),Object(b.jsx)(w.a,{className:r.loginbtn,onClick:function(){return P()},children:"Continue"})]})]})})})},we=Object(a.createContext)(null),ke=function(e){var t=e.children,n=Object(a.useState)(""),c=Object(te.a)(n,2),r=c[0],i=c[1];return Object(b.jsx)(we.Provider,{value:{account:r,setAccount:i},children:t})},Ne=n(123),Ce=n(232),Fe=n(233),Te=Object(l.a)({component:{marginTop:40},logout:{fontSize:14,marginLeft:20}}),Se=function(e){var t=e.account,n=e.setAccount,c=Object(a.useState)(!1),r=Object(te.a)(c,2),i=r[0],o=r[1],l=Te(),d=function(){o(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.b,{onClick:function(e){o(e.currentTarget)},children:Object(b.jsx)(j.a,{style:{marginTop:2},children:t})}),Object(b.jsx)(Ne.a,{anchorEl:i,open:Boolean(i),onClose:d,className:l.component,children:Object(b.jsxs)(Ce.a,{onClick:function(){d(),n("")},children:[Object(b.jsx)(Fe.a,{fontSize:"small",color:"primary"}),Object(b.jsx)(j.a,{className:l.logout,children:"Logout"})]})})]})},Ie=Object(l.a)((function(e){return{container:Object(u.a)({display:"flex"},e.breakpoints.down("sm"),{display:"block"}),wrapper:Object(u.a)({margin:"0 5% 0 auto",display:"flex","& > *":Object(u.a)({marginRight:50,textDecoration:"none",color:"#FFFFFF",fontSize:12,alignItems:"center"},e.breakpoints.down("sm"),{color:"#2874f0",alignItems:"center",display:"flex",flexDirection:"column",marginTop:10})},e.breakpoints.down("sm"),{display:"block"}),login:Object(u.a)({color:"#2874f0",background:"#FFFFFF",textTransform:"none",fontWeight:600,borderRadius:2,padding:"5px 40px",height:32,boxShadow:"none"},e.breakpoints.down("sm"),{background:"#2874f0",color:"#FFFFFF"})}})),Pe=function(){var e=Ie(),t=Object(a.useState)(!1),n=Object(te.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(we),o=i.account,l=i.setAccount,u=Object(q.c)((function(e){return e.cart})).cartItems;return Object(b.jsxs)(d.a,{className:e.wrapper,children:[o?Object(b.jsx)(Se,{account:o,setAccount:l}):Object(b.jsx)(s.b,{children:Object(b.jsx)(w.a,{className:e.login,variant:"contained",onClick:function(){r(!0)},children:"Login"})}),Object(b.jsx)(s.b,{children:Object(b.jsx)(j.a,{style:{marginTop:2},children:"More"})}),Object(b.jsxs)(s.b,{to:"/cart",className:e.container,children:[Object(b.jsx)(oe.a,{badgeContent:null===u||void 0===u?void 0:u.length,color:"secondary",children:Object(b.jsx)(le.a,{})}),Object(b.jsx)(j.a,{style:{marginLeft:10},children:"Cart"})]}),Object(b.jsx)(ve,{open:c,setOpen:r,setAccount:l})]})},Ae=n(119),De=n.n(Ae),Ee=n(251),Re=n(200),ze=Object(l.a)((function(e){return{search:{borderRadius:2,marginLeft:10,width:"38%",backgroundColor:"#fff",display:"flex"},searchIcon:{marginLeft:"auto",padding:5,display:"flex",color:"blue"},inputRoot:{fontSize:"unset",width:"100%"},inputInput:{paddingLeft:20,width:"100%"},list:{position:"absolute",color:"#000",background:"#FFFFFF",marginTop:36}}})),Le=function(){var e=ze(),t=Object(a.useState)(),n=Object(te.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!0),o=Object(te.a)(i,2),l=o[0],d=o[1],u=Object(q.c)((function(e){return e.getProducts})).products,j=Object(q.b)();return Object(a.useEffect)((function(){j(Q())}),[j]),Object(b.jsxs)("div",{className:e.search,children:[Object(b.jsx)(Ee.a,{placeholder:"Search for products, brands and more",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return function(e){r(e),d(!1)}(e.target.value)}}),Object(b.jsx)("div",{className:e.searchIcon,children:Object(b.jsx)(De.a,{})}),c&&Object(b.jsx)(ce.a,{className:e.list,hidden:l,children:u.filter((function(e){return e.title.longTitle.toLowerCase().includes(c.toLowerCase())})).map((function(e){return Object(b.jsx)(Re.a,{children:Object(b.jsx)(s.b,{to:"/product/".concat(e.id),style:{textDecoration:"none",color:"inherit"},onClick:function(){return d(!0)},children:e.title.longTitle})})}))})]})},Be=n(238),qe=Object(l.a)((function(e){return{header:{background:"#2874f0",height:55},component:{marginLeft:"12%",lineHeight:0,color:"#FFFFFF",textDecoration:"none"},logo:{width:75},container:{display:"flex"},subHeading:{fontSize:10,fontStyle:"italic"},subURL:{width:10,height:10,marginLeft:4},list:{width:250},menuButton:Object(u.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),customButtons:Object(u.a)({margin:"0 5% 0 auto"},e.breakpoints.down("sm"),{display:"none"})}})),We=Object(ne.a)({root:{minHeight:55}})(ae.a),He=function(){var e=qe(),t=Object(a.useState)(!1),n=Object(te.a)(t,2),c=n[0],r=n[1],i=function(){r(!1)};return Object(b.jsx)(re.a,{position:"fixed",className:e.header,children:Object(b.jsxs)(We,{children:[Object(b.jsx)(ie.a,{color:"inherit",className:e.menuButton,onClick:function(){r(!0)},children:Object(b.jsx)(Be.a,{})}),Object(b.jsx)(se.a,{open:c,onClose:i,children:Object(b.jsx)(d.a,{className:e.list,onClick:i,children:Object(b.jsx)(ce.a,{children:Object(b.jsx)("listItem",{button:!0,children:Object(b.jsx)(Pe,{})})})})}),Object(b.jsxs)(s.b,{to:"/",className:e.component,children:[Object(b.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",className:e.logo}),Object(b.jsxs)(d.a,{component:"span",className:e.container,children:[Object(b.jsxs)(j.a,{className:e.subHeading,children:["Explore ",Object(b.jsx)(d.a,{component:"span",style:{color:"#FFE500"},children:"Plus"})]}),Object(b.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png",className:e.subURL})]})]}),Object(b.jsx)(Le,{}),Object(b.jsx)("span",{className:e.customButtons,children:Object(b.jsx)(Pe,{})})]})})},Me=n(241),_e=n(242),Ue=n(243),Je=n(244),Ge=n(240),Ve=Object(l.a)({smallText:{fontSize:14,verticalAlign:"baseline","& > *":{fontSize:14,marginTop:10}},greyTextColor:{color:"#878787"},badge:{marginRight:10,color:"#00CC00",fontSize:15},wrapper:{display:"flex"}}),Ye=function(e){var t=e.product,n=Ve(),a=new Date((new Date).getTime()+432e6);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{children:"Available offers"}),Object(b.jsxs)(d.a,{className:n.smallText,children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Ge.a,{className:n.badge}),"Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card"]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Ge.a,{className:n.badge}),"Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply"]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Ge.a,{className:n.badge}),"Purchase this Furniture or Appliance and Get Extra \u20b9500 Off on Select ACs"]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Ge.a,{className:n.badge}),"Partner OfferExtra 10% off upto \u20b9500 on next furniture purchase"]})]}),Object(b.jsx)(Me.a,{children:Object(b.jsxs)(_e.a,{children:[Object(b.jsxs)(Ue.a,{className:n.smallText,children:[Object(b.jsx)(Je.a,{className:n.greyTextColor,children:"Delivery"}),Object(b.jsxs)(Je.a,{style:{fontWeight:600},children:["Delivery by ",a.toDateString()," | \u20b940"]})]}),Object(b.jsxs)(Ue.a,{className:n.smallText,children:[Object(b.jsx)(Je.a,{className:n.greyTextColor,children:"Warranty"}),Object(b.jsx)(Je.a,{children:"No Warranty"})]}),Object(b.jsxs)(Ue.a,{className:n.smallText,children:[Object(b.jsx)(Je.a,{className:n.greyTextColor,children:"Seller"}),Object(b.jsxs)(Je.a,{className:n.smallText,children:[Object(b.jsx)("span",{style:{color:"#2874f0"},children:"SuperComNet"}),Object(b.jsx)(j.a,{children:"GST invoice available"}),Object(b.jsx)(j.a,{children:"View more sellers starting from \u20b9329"})]})]}),Object(b.jsx)(Ue.a,{children:Object(b.jsx)(Je.a,{colSpan:2,children:Object(b.jsx)("img",{src:"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50",style:{width:390}})})}),Object(b.jsxs)(Ue.a,{className:n.smallText,children:[Object(b.jsx)(Je.a,{className:n.greyTextColor,children:"Description"}),Object(b.jsx)(Je.a,{children:t.description})]})]})})]})},Xe=n(245);function Ke(e){return function(e){return"object"===typeof e}(e)&&!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e}function Qe(e){var t=function(e){var t=e.action,n=e.params,a=document.createElement("form");return a.setAttribute("method","post"),a.setAttribute("action",t),Object.keys(n).forEach((function(e){var t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name",e),t.setAttribute("value",Ke(n[e])),a.appendChild(t)})),a}(e);document.body.appendChild(t),t.submit(),t.remove()}var Ze="addToCart",$e="removeFromCart",et=function(e,t){return function(){var n=Object(M.a)(H.a.mark((function n(a,c){var r,i;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K.a.get("http://localhost:8000/product/".concat(e));case 3:r=n.sent,i=r.data,a({type:Ze,payload:Object(v.a)(Object(v.a)({},i),{},{quantity:t})}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error while calling cart API");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()},tt=Object(l.a)((function(e){return{leftContainer:Object(u.a)({minWidth:"40%",padding:"40px 0 0 80px"},e.breakpoints.down("md"),{padding:"20px 40px"}),productImage:{padding:"15px 20px",border:"1px solid #f0f0f0",width:"95%"},button:{width:"46%",borderRadius:2,height:50},addToCart:{background:"#ff9f00",color:"#FFF"},buyNow:{background:"#fb641b",color:"#FFF"}}})),nt=function(e){var t=e.product,n=tt(),c=Object(o.f)(),r=(Object(a.useContext)(we).account,t.id),i=(t.price,t.detailUrl,t.title,Object(a.useState)(1)),s=Object(te.a)(i,2),l=s[0],u=(s[1],Object(q.b)()),j=function(){var e=Object(M.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe({amount:" ",email:"vipulgaikwad001@gmail.com"});case 2:t=e.sent,Qe({action:"https://securegw-stage.paytm.in/order/process",params:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(d.a,{className:n.leftContainer,children:[Object(b.jsx)("img",{src:t.detailUrl,className:n.productImage}),Object(b.jsx)("br",{}),Object(b.jsxs)(w.a,{onClick:function(){return u(et(r,l)),void c.push("/cart")},className:Object(R.a)(n.button,n.addToCart),style:{marginRight:10},variant:"contained",children:[Object(b.jsx)(le.a,{}),"Add to Cart"]}),Object(b.jsxs)(w.a,{onClick:function(){return j()},className:Object(R.a)(n.button,n.buyNow),variant:"contained",children:[Object(b.jsx)(Xe.a,{})," Buy Now"]})]})},at=Object(l.a)((function(e){return{component:{marginTop:55,background:"#F2F2F2"},container:Object(u.a)({background:"#FFFFFF",display:"flex"},e.breakpoints.down("md"),{margin:0}),rightContainer:{marginTop:50,"& > *":{marginTop:10}},price:{fontSize:28},smallText:{fontSize:14},greyTextColor:{color:"#878787"}}})),ct=function(e){e.history;var t=e.match,n=at(),c=Object(q.c)((function(e){return e.getProductDetails})),r=c.loading,i=c.product,s=Object(q.b)();return Object(a.useEffect)((function(){var e;i&&t.params.id!==i.id&&s((e=t.params.id,function(){var t=Object(M.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:J}),t.next=4,K.a.get("http://localhost:8000/product/".concat(e));case 4:a=t.sent,c=a.data,console.log(c),n({type:G,payload:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:V,payload:t.t0.response});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[s,i,t,r]),Object(b.jsxs)(d.a,{className:n.component,children:[Object(b.jsx)(d.a,{}),i&&Object.keys(i).length&&Object(b.jsxs)(E.a,{container:!0,className:n.container,children:[Object(b.jsx)(E.a,{item:!0,lg:4,md:4,sm:8,xs:12,children:Object(b.jsx)(nt,{product:i})}),Object(b.jsxs)(E.a,{item:!0,lg:8,md:8,sm:8,xs:12,className:n.rightContainer,children:[Object(b.jsx)(j.a,{children:i.title.longTitle}),Object(b.jsxs)(j.a,{className:Object(R.a)(n.greyTextColor,n.smallText),style:{marginTop:5},children:["8 Ratings & 1 Reviews",Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png",style:{width:77,marginLeft:20}})})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("span",{className:n.price,children:["\u20b9",i.price.cost]}),"\xa0\xa0\xa0",Object(b.jsx)("span",{className:n.greyTextColor,children:Object(b.jsxs)("strike",{children:["\u20b9",i.price.mrp]})}),"\xa0\xa0\xa0",Object(b.jsxs)("span",{style:{color:"#388E3C"},children:[i.price.discount," off"]})]}),Object(b.jsx)(Ye,{product:i})]})]})]})},rt=n(246),it=n(55),st=n(226),ot=c.a.createContext(null),lt=function(e){var t=e.children,n=Object(it.a)({overrides:{MuiDialog:{paperWidthSm:{maxWidth:"unset"}},MuiDialogContent:{root:{padding:0,"&:first-child":{paddingTop:0}}},MuiTableCell:{root:{borderBottom:0}}}});return Object(b.jsx)(ot.Provider,{children:Object(b.jsxs)(st.a,{theme:n,children:[Object(b.jsx)(rt.a,{}),t]})})},dt=n(248),ut=function(e){if(e.length>50)return e.substring(0,50)+"..."},jt=n(247),mt=Object(l.a)({component:{marginTop:30},button:{borderRadius:"50%"}}),pt=function(){var e=mt(),t=Object(a.useState)(1),n=Object(te.a)(t,2),c=n[0],r=n[1];return Object(b.jsxs)(jt.a,{className:e.component,children:[Object(b.jsx)(w.a,{className:e.button,onClick:function(){r((function(e){return e-1}))},disabled:0==c,children:"-"}),Object(b.jsx)(w.a,{disabled:!0,children:c}),Object(b.jsx)(w.a,{className:e.button,onClick:function(){r((function(e){return e+1}))},children:"+"})]})},bt=Object(l.a)({component:{borderTop:"1px solid #f0f0f0",borderRadius:0,display:"flex"},leftComponent:{margin:20,display:"flex",flexDirection:"column"},image:{height:110,width:110},mid:{margin:20},greyTextColor:{color:"#878787"},smallText:{fontSize:14},price:{fontSize:18,fontWeight:600},remove:{marginTop:20,fontSize:16}}),ft=function(e){var t=e.item,n=e.removeItemFromCart;console.log(t);var a=bt();return Object(b.jsxs)(dt.a,{className:a.component,children:[Object(b.jsxs)(d.a,{className:a.leftComponent,children:[Object(b.jsx)("img",{src:t.url,className:a.image}),Object(b.jsx)(pt,{})]}),Object(b.jsxs)(d.a,{className:a.mid,children:[Object(b.jsx)(j.a,{children:ut(t.title.longTitle)}),Object(b.jsxs)(j.a,{className:Object(R.a)(a.greyTextColor,a.smallText),style:{marginTop:10},children:["Seller:RetailNet",Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png",style:{width:50,marginLeft:10}})})]}),Object(b.jsxs)(j.a,{style:{margin:"20px 0"},children:[Object(b.jsxs)("span",{className:a.price,children:["\u20b9",t.price.cost]}),"\xa0\xa0\xa0",Object(b.jsx)("span",{className:a.greyTextColor,children:Object(b.jsxs)("strike",{children:["\u20b9",t.price.mrp]})}),"\xa0\xa0\xa0",Object(b.jsxs)("span",{style:{color:"#388E3C"},children:[t.price.discount," off"]})]}),Object(b.jsx)(w.a,{className:a.remove,onClick:function(){return n(t.id)},children:"Remove"})]})]})},xt=Object(l.a)({component:{},header:{padding:"15px 24px",background:"#fff"},greyTextColor:{color:"#878787"},container:{"& > *":{marginBottom:20,fontSize:14}},price:{float:"right"},totalAmount:{fontSize:18,fontWeight:600,borderTop:"1px dashed #e0e0e0",padding:"20px 0",borderBottom:"1px dashed #e0e0e0"}}),ht=function(e){var t=e.cartItems,n=xt(),c=Object(a.useState)(0),r=Object(te.a)(c,2),i=r[0],s=r[1],o=Object(a.useState)(0),l=Object(te.a)(o,2),u=l[0],m=l[1];Object(a.useEffect)((function(){p()}),[t]);var p=function(){var e=0,n=0;console.log(t),t.map((function(t){e+=t.price.mrp,n+=t.price.mrp-t.price.cost})),s(e),m(n)};return Object(b.jsxs)(d.a,{className:n.component,children:[Object(b.jsx)(d.a,{className:n.header,style:{borderBottom:"1px solid #f0f0f0"},children:Object(b.jsx)(j.a,{className:n.greyTextColor,children:"PRICE DETAILS"})}),Object(b.jsxs)(d.a,{className:Object(R.a)(n.header,n.container),children:[Object(b.jsxs)(j.a,{children:["Price (",null===t||void 0===t?void 0:t.length," item)",Object(b.jsxs)("span",{className:n.price,children:["\u20b9",i]})]}),Object(b.jsxs)(j.a,{children:["Discount",Object(b.jsxs)("span",{className:n.price,children:["-\u20b9",u]})]}),Object(b.jsxs)(j.a,{children:["Delivery Charges",Object(b.jsx)("span",{className:n.price,children:"\u20b940"})]}),Object(b.jsxs)(j.a,{className:n.totalAmount,children:["Total Amount",Object(b.jsxs)("span",{className:n.price,children:["\u20b9",i-u+40]})]}),Object(b.jsxs)(j.a,{style:{fontSize:16,color:"green"},children:["You will save \u20b9",u-40," on this order"]})]})]})},gt=Object(l.a)({component:{width:"80%%",height:"65vh",background:"#fff",margin:"80px 140px"},image:{width:"15%"},container:{textAlign:"center",paddingTop:70}}),Ot=function(){var e=gt();return Object(b.jsx)(d.a,{className:e.component,children:Object(b.jsxs)(d.a,{className:e.container,children:[Object(b.jsx)("img",{src:"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90",className:e.image}),Object(b.jsx)(j.a,{children:"Your cart is empty!"}),Object(b.jsx)("span",{children:"Add items to it now."})]})})},yt=Object(l.a)((function(e){return{component:Object(u.a)({padding:"30px 135px",display:"flex"},e.breakpoints.down("sm"),{padding:"15px 0"}),leftComponent:Object(u.a)({paddingRight:15},e.breakpoints.down("sm"),{marginBottom:15}),header:{padding:"15px 24px",background:"#fff"},bottom:{padding:"16px 22px",background:"#fff",boxShadow:"0 -2px 10px 0 rgb(0 0 0 / 10%)",borderTop:"1px solid #f0f0f0"},placeOrder:{display:"flex",marginLeft:"auto",background:"#fb641b",color:"#fff",borderRadius:2,width:250,height:51}}})),vt=function(e){var t=e.match,n=(e.history,yt()),c=Object(q.c)((function(e){return e.cart})).cartItems,r=Object(q.b)();Object(a.useEffect)((function(){c&&t.params.id!==c.id&&r(et(t.params.id)),console.log(c)}),[r,c,t]);var i=function(e){r(function(e){return function(t,n){console.log(e),t({type:$e,payload:e}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems))}}(e))},s=function(){var e=Object(M.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe({amount:500,email:"vipulgaikwad001@gmail.com"});case 2:t=e.sent,Qe({action:"https://securegw-stage.paytm.in/order/process",params:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:c.length?Object(b.jsxs)(E.a,{container:!0,className:n.component,children:[Object(b.jsxs)(E.a,{item:!0,lg:9,md:9,sm:12,xs:12,className:n.leftComponent,children:[Object(b.jsx)(d.a,{className:n.header,children:Object(b.jsxs)(j.a,{style:{fontWeight:600,fontSize:18},children:["My Cart (",null===c||void 0===c?void 0:c.length,")"]})}),c.map((function(e){return Object(b.jsx)(ft,{item:e,removeItemFromCart:i})})),Object(b.jsx)(d.a,{className:n.bottom,children:Object(b.jsx)(w.a,{onClick:function(){return s()},variant:"contained",className:n.placeOrder,children:"Place Order"})})]}),Object(b.jsx)(E.a,{item:!0,lg:3,md:3,sm:12,xs:12,children:Object(b.jsx)(ht,{cartItems:c})})]}):Object(b.jsx)(Ot,{})})};var wt=function(){return Object(b.jsx)(lt,{children:Object(b.jsx)(ke,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(He,{}),Object(b.jsx)(d.a,{style:{marginTop:54},children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:$}),Object(b.jsx)(o.a,{exact:!0,path:"/cart",component:vt}),Object(b.jsx)(o.a,{exact:!0,path:"/product/:id",component:ct}),Object(b.jsx)(o.a,{component:ee})]})})]})})})},kt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,253)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Nt=n(62),Ct=n(120),Ft=n(121),Tt=n(122),St=Object(Nt.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(console.log("Heyya",t.type),t.type){case Ze:var n=t.payload,a=e.cartItems.find((function(e){return e.id===n.id}));if(console.log(a),console.log(n),console.log(e.cartItems),a)return Object(v.a)(Object(v.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?n:e}))});var c=Object(v.a)(Object(v.a)({},e),{},{cartItems:[].concat(Object(Tt.a)(e.cartItems),[n])});return console.log(c),c;case $e:console.log(e.cartItems),console.log(t.payload);var r=Object(v.a)(Object(v.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});return console.log(r),r;default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{products:t.payload};case U:return{error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(console.log("Hi",t.type),t.type){case J:return{loading:!0};case G:return{loading:!1,product:t.payload};case V:return{loading:!1,error:t.payload};case Y:return{product:{}};default:return e}}}),It=[Ct.a],Pt=Object(Nt.createStore)(St,Object(Ft.composeWithDevTools)(Nt.applyMiddleware.apply(void 0,It)));i.a.render(Object(b.jsx)(q.a,{store:Pt,children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(wt,{})})}),document.getElementById("root")),kt()}},[[195,1,2]]]);
//# sourceMappingURL=main.c7b9a943.chunk.js.map