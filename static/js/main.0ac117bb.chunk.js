(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{248:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},288:function(e,t){},311:function(e,t){},313:function(e,t){},390:function(e,t){},392:function(e,t){},425:function(e,t){},430:function(e,t){},432:function(e,t){},439:function(e,t){},452:function(e,t){},475:function(e,t){},484:function(e,t){},486:function(e,t){},555:function(e,t,n){},556:function(e,t,n){},557:function(e,t,n){},559:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(31),o=n.n(s),r=(n(258),n(259),n(4)),c=n(5),l=n(9),u=n(8),p=n.p+"static/media/logo.326fdbba.png",d=(n(260),n(567)),b=n(563),y=n(568),m=(n(261),n(1)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component);function h(){document.getElementById("mint").scrollIntoView()}function f(){document.getElementById("team").scrollIntoView()}function O(){document.getElementById("roadmap").scrollIntoView()}function x(){document.getElementById("whitelist").scrollIntoView()}function g(){document.getElementById("socials").scrollIntoView()}function v(){window.open("https://opensea.io/")}var w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"header-control",children:[Object(m.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(d.a.Brand,{href:"#home",children:Object(m.jsx)("img",{src:p,width:100,height:100,alt:"logo"})}),Object(m.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(y.a,{className:"me-auto"}),Object(m.jsxs)(y.a,{children:[Object(m.jsx)(y.a.Link,{onClick:h,children:"MINT"}),Object(m.jsx)(y.a.Link,{onClick:f,children:"TEAM"}),Object(m.jsx)(y.a.Link,{onClick:O,children:"ROADMAP"}),Object(m.jsx)(y.a.Link,{onClick:g,children:"SOCIALS"}),Object(m.jsx)(y.a.Link,{onClick:x,children:"WHITELIST"}),Object(m.jsx)(y.a.Link,{onClick:v,children:"OPENSEA"})]})]})]})}),Object(m.jsx)("div",{className:"header-content"}),Object(m.jsx)("div",{})]})})}}]),n}(i.a.Component),T=n(564),C=n(565),k=(n(267),n.p+"static/media/dicklogo.9f1ffd25.png"),I=(n.p,n.p,n.p,n(268),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(m.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(m.jsxs)("div",{className:"teammember-description",children:[Object(m.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(m.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),N=(i.a.Component,n(269),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"join-community-control",id:"whitelist",children:Object(m.jsxs)(b.a,{style:{textAlign:"center"},children:[Object(m.jsxs)("div",{style:{backgroundColor:"#FF9859",border:"10px solid black",padding:10,borderRadius:20,margin:10},children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{children:"JOIN"})," OUR WHITELIST"]}),Object(m.jsx)("p",{children:"Our whitelist only has a certain amount of spots that will give users the ability to mint earlier than everyone else! Don't miss out, it's free to join the whitelist! "})]}),Object(m.jsx)("a",{href:"https://forms.gle/2kSmjoTAefDWWyMA6",children:Object(m.jsx)(j,{text:"JOIN WHITELIST"})})]})})}}]),n}(i.a.Component)),M=(n(270),n(34)),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"footer-control",id:"socials",children:Object(m.jsxs)(b.a,{className:"footer",children:[Object(m.jsx)("p",{children:"\xa92021 \xa0 DICKPIXNFT"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("a",{style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/",children:[" ",Object(m.jsx)(M.d,{size:32})]}),Object(m.jsxs)("a",{style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/",children:[" ",Object(m.jsx)(M.g,{size:32})]}),Object(m.jsxs)("a",{style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noopener noreferrer",href:"https://discord.com/",children:[" ",Object(m.jsx)(M.a,{size:32}),"   "]})]})]})})}}]),n}(i.a.Component),A=(n(271),n.p,n(251)),E=(n(272),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(m.jsxs)("div",{className:"collapse-header",children:[Object(m.jsx)("h4",{children:this.props.tag}),Object(m.jsx)("p",{children:this.props.title})]}),Object(m.jsx)(M.e,{})]}),Object(m.jsx)(A.a,{in:this.state.open,children:Object(m.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(i.a.Component)),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"0%",title:"Placeholder",content:"Welcome to the Club! Spooky Boys official public mint is revealed. The presale dates will be announced as soon as the technical aspects of our project are brought to completion."},{tag:"15%",title:"Placeholder",content:"All project holders will get airdropped a set of Spoo-keys. Also hire slayer"},{tag:"30%",title:"Placeholder",content:"Use your Spoo-keys to unlock a mystery."},{tag:"45%",title:"Placeholder",content:"Spooky boys token launch."},{tag:"60%",title:"Placeholder",content:"Staking will begin Q2 of 2022 to add increased value to all loyal Country Club members who HODL and accumulate tokens."},{tag:"75%",title:"Placeholder",content:"This game is currently being developed and will create more benefits to Country Club members through in-game contests and token accumulation."},{tag:"90%",title:"Placeholder",content:"This game is currently being developed and will create more benefits to Country Club members through in-game contests and token accumulation."},{tag:"100%",title:"Placeholder",content:"Spooky Szn will be in full swing upon release of one of the best metaversal games!"}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{children:"DICK PIX"})," ",Object(m.jsx)("br",{})," ROADMAP."]}),Object(m.jsx)("p",{className:"roadmap-description",children:"Our Roadmap outlines some of the future perks Spooky Boys Country Club members will be able to enjoy. Scroll through the course map and look over some of the ideas and concepts we wish to grow and deliver. We are constantly developing here at SBCC, so this map will also develop and evolve as more ideas are created to make our Country Club the top rated club of the Metaverse!"}),Object(m.jsx)(T.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:Object(m.jsx)(C.a,{style:{color:"black",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(e,t){return Object(m.jsx)(E,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))})})]})})}}]),n}(i.a.Component),D=(n(273),n.p+"static/media/item1.1c214071.png"),B=n.p+"static/media/item2.81e34ae6.png",U=n.p+"static/media/item3.eec91da6.png",F=(n(274),n.p+"static/media/fire.76eb30ed.png"),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"top-item",children:[Object(m.jsx)("img",{src:this.props.image,alt:"top item"}),Object(m.jsxs)("div",{className:"top-item-description",children:[Object(m.jsx)("p",{children:this.props.name}),Object(m.jsx)("h6",{children:this.props.price})]}),Object(m.jsxs)("div",{className:"top-item-bid",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(M.f,{})," HighestBid ",Object(m.jsx)("b",{children:this.props.highestBid})]}),Object(m.jsxs)("p",{children:["New Bid \xa0",Object(m.jsx)("img",{src:F,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),P=(i.a.Component,n(21)),R=n.p+"static/media/about.fdcf34f9.gif",W=(n(275),n(78)),z=n(24),H=n.n(z),K=n(91),J=n(89),Q=n.n(J),V=n(247),X=n.n(V),Y=n(248),q=n(92),G=n(249),Z=n(3),$={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(Z.a)(Object(Z.a)({},$),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(Z.a)(Object(Z.a)({},$),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(Z.a)(Object(Z.a)({},e),{},{account:t.payload.account});default:return e}},te={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(Z.a)(Object(Z.a)({},te),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},ae=Object(q.b)({blockchain:ee,data:ne}),ie=[G.a],se=Object(q.c)(q.a.apply(void 0,ie)),oe=Object(q.d)(ae,se),re=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ce=function(e){return function(){var e=Object(K.a)(H.a.mark((function e(t){var n,a,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,oe.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,oe.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,oe.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(re("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},le=function(e){return{type:"CONNECTION_FAILED",payload:e}},ue=function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(ce());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var pe=function(){var e=Object(W.b)(),t=Object(W.c)((function(e){return e.blockchain})),n=(Object(W.c)((function(e){return e.data})),Object(a.useState)("")),i=Object(P.a)(n,2),s=(i[0],i[1]),o=Object(a.useState)(!1),r=Object(P.a)(o,2),c=r[0],l=r[1],u=Object(a.useState)(0),p=Object(P.a)(u,2),d=p[0],y=p[1],j=function(){""!==t.account&&null!==t.smartContract&&e(ce(t.account))};return Object(a.useEffect)((function(){j()}),[t.account]),Object(m.jsx)("div",{className:"mint-control",id:"mint",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{md:6,xs:12,className:"mint-image",children:Object(m.jsx)("img",{src:R,alt:"mint gif"})}),Object(m.jsxs)(C.a,{md:6,xs:12,className:"mint-description",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{children:"MINT YOUR"}),"  ",Object(m.jsx)("br",{})," DICK PIX"]}),Object(m.jsx)("p",{style:{textAlign:"center"},children:'THE "BAG OF DICKS" COLLECTION GAME: 777 images are original to the collection. Images #778-#3000 are individually rendered in B&W, Gold, and 3D versions, to create a card trading game called \u201cbag of dicks". The more complete series you collect, the bigger your \u201cbag of dicks\u201d becomes. What does that mean for our holders once you\'ve "grabbed all the dicks"? More rare"Unsolicited Dick Pix" airdrops, prizes, giveaways, and other exclusive community perks.                        '}),Object(m.jsxs)("div",{className:"number-control",children:[Object(m.jsx)(M.b,{color:"white",size:40,onClick:function(){d<=0||y(d-1)}}),Object(m.jsx)("span",{id:"inputBox",children:d}),Object(m.jsx)(M.c,{color:"white",size:40,onClick:function(){d>=25||y(d+1)}})]}),""===t.account||null===t.smartContract?Object(m.jsxs)("div",{className:"flex-column",children:[Object(m.jsx)("button",{className:"ybutton",onClick:function(t){console.log("--------"),t.preventDefault(),e((console.log("--:"),function(){var e=Object(K.a)(H.a.mark((function e(t){var n,a,i,s,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return Q.a.setProvider(a),i=new X.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return s=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new Q.a(Y,"0xe9F8Ae2ddbe7b6ECc1e68699e2e9030278AeD2F0"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(ue(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(le("Change network to Ethereum.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(le("Something went wrong."));case 19:e.next=22;break;case 21:t(le("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}())),j()},children:"Connect"}),""!==t.errorMsg?Object(m.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(m.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x8815e06FC5b57Bd4d5590977a697582f19d2330e",from:t.account,value:t.web3.utils.toWei((.035*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),e(ce(t.account))}))),j()},children:c?"BUSY":"MINT"})]})]})})})},de=(n(555),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"about-control",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsxs)(C.a,{md:6,xs:12,className:"about-description",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{children:"777"})," UNIQUE",Object(m.jsx)("br",{})," DIX.",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:"2,223"})," SPECIAL",Object(m.jsx)("br",{})," DIX."]}),Object(m.jsx)("p",{children:'In the depths of the Ethereum "cock-chain" lies a Fuck Boy\'s phone with an outgoing message folder as long as a CVS receipt. You never asked to receive that unsolicited pic, but he doesn\u2019t care- he\u2019s going to send it anyway. Will it entice you to show up at his house at 2AM, laugh because you thought it was his thumb, or send it around to show all your closest friends? We hope it\u2019s the latter.'}),Object(m.jsx)("p",{children:"Dick Pix offers 777 unique, hilariously hand-drawn digital collectibles that represent community through ownership, and championing safer sex practices. This project blends nostalgic characters inspired by your favorite films, likenesses of people you know and love, and big comedic vibes to create a limited series of collectibles. The Dick Pix community enjoys sarcastic undertones, reading between the lines, and casual innuendos that bring laughter to the forefront of our philanthropic efforts. Portions of our sales are redistributed to charities and organizations that aid in STD/STI testing, family planning, and all-inclusive sexual wellness safety and education.                            "})]}),Object(m.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(m.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:R,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),be=n(250),ye=n.n(be),me=(n.p,n(556),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"meet-control",children:[Object(m.jsx)(b.a,{children:Object(m.jsxs)("header",{style:{textAlign:"center"},children:["CHECK OUT OUR ",Object(m.jsx)("br",{})," ",Object(m.jsx)("span",{children:"DIX!"})]})}),Object(m.jsxs)(ye.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix1.png",alt:"boy1"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix2.png",alt:"boy2"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix3.png",alt:"boy3"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix4.png",alt:"boy4"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix5.png",alt:"boy5"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix6.png",alt:"boy6"})})]})]})}}]),n}(i.a.Component)),je=(n(557),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"about-control",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsxs)(C.a,{md:6,xs:12,className:"about-description",style:{textAlign:"center"},children:[Object(m.jsxs)("header",{style:{textAlign:"center'"},children:[Object(m.jsx)("span",{children:"OUR"})," FOUNDER",Object(m.jsx)("br",{})]}),'Dick Pix was conceived and developed by Jen Fassino, a comedy podcaster at Jen AF and hairstylist with an extensive resume in the hair industry. Now, she\'s apparently dubbed in her NFT community as the "Queen of Dicks." You might know her best as @jenfassino on Instagram.']}),Object(m.jsx)(C.a,{md:6,xs:12,className:"image-control",children:Object(m.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:k,alt:"about gif"})})]})})})}}]),n}(i.a.Component));var he=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)(de,{}),Object(m.jsx)(me,{}),Object(m.jsx)(pe,{}),Object(m.jsx)(_,{}),Object(m.jsx)(je,{}),Object(m.jsx)(N,{}),Object(m.jsx)(S,{})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,569)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(558);o.a.render(Object(m.jsx)(W.a,{store:oe,children:Object(m.jsx)(he,{})}),document.getElementById("root")),fe()}},[[559,1,2]]]);
//# sourceMappingURL=main.0ac117bb.chunk.js.map