(this["webpackJsonpzodiac-roles-modifier-app"]=this["webpackJsonpzodiac-roles-modifier-app"]||[]).push([[86],{425:function(n,e,t){"use strict";t.r(e);var r=t(4),c=t.n(r),a=(t(171),t(201));t(106),t(173),t(172);function o(n,e,t,r,c,a,o){try{var i=n[a](o),u=i.value}catch(l){return void t(l)}i.done?e(u):Promise.resolve(u).then(r,c)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var a=n.apply(e,t);function i(n){o(a,r,c,i,u,"next",n)}function u(n){o(a,r,c,i,u,"throw",n)}i(void 0)}))}}e.default=function(n){var e=n.infuraKey,r=n.rpc,o=n.bridge,u=n.preferred,l=n.label,s=n.iconSrc,f=n.svg,d=n.networkId,p=Object(a.i)(a.c).blockPollingInterval;if(!e&&(!r||!r[d]))throw new Error('A "infuraKey" or a "rpc" object with a parameter of '.concat(d," must be included in the WalletConnect initialization object"));return{name:l||"WalletConnect",svg:f||'\n  <svg \n    height="25" \n    viewBox="0 0 40 25" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n  <path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" \n        fill="#3b99fc"/>\n  </svg>\n',iconSrc:s,wallet:function(){var n=i(c.a.mark((function n(a){var u,l,s,f,h,w,b,v,m;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4)]).then(t.bind(null,643));case 2:return u=n.sent.default,n.next=5,Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(25)]).then(t.bind(null,2250));case 5:if(l=n.sent,s=l.default,f=a.resetWalletState,h=a.networkName,w=a.getBalance,b=r&&r[d]?r[d]:"https://".concat(h(d),".infura.io/v3/").concat(e),v=u({rpcUrl:b}),!e||!r){n.next=12;break}throw new Error("WalletConnect requires  an Infura ID or a custom RPC object but not both.");case 12:return(m=new s({infuraId:e,rpc:r,chainId:d,bridge:o,pollingInterval:p})).autoRefreshOnNetworkChange=!1,m.wc.on("disconnect",(function(){f({disconnected:!0,walletName:"WalletConnect"})})),n.abrupt("return",{provider:m,interface:{name:"WalletConnect",connect:function(){return new Promise((function(n,e){m.enable().then(n).catch((function(){return e({message:"This dapp needs access to your account information."})}))}))},address:{onChange:function(n){m.send("eth_accounts").then((function(e){return e[0]&&n(e[0])})),m.on("accountsChanged",(function(e){return n(e[0])}))}},network:{onChange:function(n){m.send("eth_chainId").then(n),m.on("chainChanged",n)}},balance:{get:function(){var n=i(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m.wc._accounts[0]){n.next=2;break}return n.abrupt("return",null);case 2:return n.abrupt("return",w(v,m.wc._accounts[0]));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},disconnect:function(){m.wc.killSession(),m.stop()}}});case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:u}}}}]);
//# sourceMappingURL=86.f3fc6787.chunk.js.map