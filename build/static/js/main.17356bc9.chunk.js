(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),r=n.n(a),s=(n(14),n(15),n(4)),l=n(2),o=n(5),u=n.p+"static/media/hit.8c96d676.mp3",d=n.p+"static/media/miss.b9a5893c.mp3",p=n.p+"static/media/fight.15e2f926.mp3",m=n.p+"static/media/winComp.f369007a.mp3",f=n.p+"static/media/winPlayer.4834e938.mp3",j=n(0),b=c.a.createContext({}),h=b.Provider;function O(e){var t=e.children,n=Object(i.useState)(!0),c=Object(l.a)(n,2),a=c[0],r=c[1],b=Object(i.useState)("begin"),O=Object(l.a)(b,2),g=O[0],y=O[1],v=Object(i.useState)(Array(10).fill("-").map((function(){return Array(10).fill("-")}))),x=Object(l.a)(v,2),C=x[0],S=x[1],w=Object(i.useState)(Array(10).fill("-").map((function(){return Array(10).fill("-")}))),N=Object(l.a)(w,2),M=N[0],B=N[1],k=Object(i.useState)({}),F=Object(l.a)(k,2),R=F[0],T=F[1],A=Object(i.useState)(null),E=Object(l.a)(A,2),P=E[0],H=E[1],X=Object(i.useState)(null),D=Object(l.a)(X,2),L=D[0],q=D[1],Y=Object(i.useState)("begin"),I=Object(l.a)(Y,2),J=I[0],U=I[1],W=Object(i.useState)(0),_=Object(l.a)(W,2),z=_[0],G=_[1],K={playerTurn:"\u0412\u0430\u0448 \u0445\u043e\u0434!",compTurn:"\u0425\u043e\u0434 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!",begin:"\u0414\u0430 \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u0431\u0438\u0442\u0432\u0430!",playerHits:"\u0412\u044b \u043f\u043e\u043f\u0430\u043b\u0438!",playerMissed:"\u0412\u044b \u043f\u0440\u043e\u043c\u0430\u0445\u043d\u0443\u043b\u0438\u0441\u044c!",compHits:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u043e\u043f\u0430\u043b!",compMissed:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u0440\u043e\u043c\u0430\u0445\u043d\u0443\u043b\u0441\u044f!",winPlayer:"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!".toUpperCase(),winComp:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u043e\u0431\u0435\u0434\u0438\u043b!".toUpperCase()},Q=Object(o.a)(u),V=Object(l.a)(Q,1)[0],Z=Object(o.a)(d),$=Object(l.a)(Z,1)[0],ee=Object(o.a)(p),te=Object(l.a)(ee,1)[0],ne=Object(o.a)(m),ie=Object(l.a)(ne,1)[0],ce=Object(o.a)(f),ae=Object(l.a)(ce,1)[0];function re(e){var t={top:e.top,bottom:e.bottom,left:e.left,right:e.right,width:e.width,height:e.height,gridCol:new Array(11).fill(0).map((function(t,n){return e.left+n*e.width/10})),gridRow:new Array(11).fill(0).map((function(t,n){return e.top+n*e.height/10}))};T(t)}return Object(i.useEffect)((function(){var e=document.querySelector(".battlefield-pad").getBoundingClientRect();!function(){for(var e=0,t=0,n=[[1,4],[2,3],[3,2],[4,1]];t<n.length;t++)for(var i=n[t],c=function(t){var n={num:e++,length:i[1]};H((function(e){return e?e.concat(n):[n]})),q((function(e){return e?e.concat(n):[n]}))},a=0;a<i[0];a++)c()}(),re(e)}),[]),Object(i.useEffect)((function(){!1===a&&re(document.querySelectorAll(".battlefield-pad")[1].getBoundingClientRect())}),[a]),Object(j.jsx)(h,{value:{arrangeShips:a,setArrangeShips:r,arrangeShipsMode:g,setArrangeShipsMode:y,playerBF:C,setPlayerBF:S,compBF:M,setCompBF:B,playerShips:P,setPlayerShips:H,compShips:L,setCompShips:q,bfCoord:R,message:K,turn:J,setTurn:U,turnNum:z,setTurnNum:G,getRnd:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e<1||e>10;)e=Math.ceil(10*Math.random());return e},playHit:V,playMiss:$,playFight:te,checkWinner:function(){if(J.includes("comp")||J.includes("player"))return 0===Object(s.a)(C).flat().filter((function(e){return e===+e})).length&&(ie(),U("winComp")),void(0===Object(s.a)(M).flat().filter((function(e){return e===+e})).length&&(ae(),U("winPlayer")))}},children:t})}var g=n(3),y=n.n(g);function v(e){var t=e.length,n=e.num,a=Object(i.useContext)(b),r=a.setPlayerShips,o=a.setCompShips,u=a.compBF,d=a.setCompBF,p=a.bfCoord,m=a.playerBF,f=a.setPlayerBF,h=a.arrangeShipsMode,O=a.getRnd,g=Object(i.useState)("auto"===h&&Math.random()>.5),v=Object(l.a)(g,2),x=v[0],C=v[1];function S(e,i,c,a){for(var l=!0,p=0;p<t;p++)try{a?(x||"-"===u[i-1][e-1+p]||(l=!1),x&&"-"!==u[i-1+p][e-1]&&(l=!1)):(x||"-"===m[i-1][e-1+p]||(l=!1),x&&"-"!==m[i-1+p][e-1]&&(l=!1))}catch(N){l=!1}if(l){for(var j=a?Object(s.a)(u):Object(s.a)(m),b=0;b<t;b++)x?j[i-1+b][e-1]=n:j[i-1][e-1+b]=n;for(var g=0;g<3;g++)for(var y=0;y<t+2;y++){var v=void 0,C=void 0;if(x?(v=i-2+y,C=e-2+g):(v=i-2+g,C=e-2+y),!(v<0||C<0||v>9||C>9)){var w=j[v][C];void 0!==w&&w!==+w&&"D"!==w&&(j[v][C]="D")}}a?(d(j),o((function(e){return e.filter((function(e){return e.num!==n}))}))):(f(j),r((function(e){return e.filter((function(e){return e.num!==n}))}))),document.onmousemove=null,c&&(c.onmouseup=null)}l||(a||"auto"!==h?a&&S(O(),O(),null,!0):S(O(),O(),null))}return Object(i.useEffect)((function(){"auto"===h&&setTimeout((function(){m.toString().includes(n)||S(O(),O(),null)}),500*n),u.toString().includes(n)||S(O(),O(),null,!0)}),[m,u]),Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("span",{className:"ship",id:y()(),style:x?{width:33,height:33*t}:{width:33*t,height:33},onDragStart:function(){return!1},onMouseDown:function(e){if(0===e.button){var t=e.target,n=t.getBoundingClientRect(),i=e.pageX-n.left,c=e.pageY-n.top;t.style.position="absolute",t.style.zIndex=9,a(e),document.onmousemove=function(e){return a(e)},t.onmouseup=function(e){for(var n,i,c=e.target.closest(".ship").getBoundingClientRect(),a=0;a<p.gridCol.length-1;a++)c.x>=p.gridCol[a]&&c.x<=p.gridCol[a+1]&&(n=a+1),c.y>=p.gridRow[a]&&c.y<=p.gridRow[a+1]&&(i=a+1);void 0===n||void 0===i||n<1||i<1||"auto"!==h&&S(n,i,t)}}function a(e){t.style.left=e.pageX-i+"px",t.style.top=e.pageY-c+"px"}},onContextMenu:function(e){e.preventDefault(),C((function(e){return!e}))}}),Object(j.jsx)("span",{className:"ship-margin"})]},y()())}function x(){var e=Object(i.useContext)(b),t=e.playerShips,n=e.arrangeShipsMode,c=e.setArrangeShipsMode,a=e.setArrangeShips;return document.addEventListener("keydown",(function(e){"1"===e.key?c("manual"):"2"===e.key&&c("auto")})),Object(i.useEffect)((function(){t&&0===t.length&&c("playerReady")}),[t]),Object(i.useEffect)((function(){"playerReady"===n&&a(!1)}),[n]),Object(j.jsxs)("div",{className:"battlefield-menu",children:[("begin"===n||"manual"===n||"auto"===n)&&Object(j.jsxs)("p",{className:"battlefield-menu--title",children:["\u0420\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u0435\u0439","manual"===n&&Object(j.jsx)("span",{children:": \u0432\u0440\u0443\u0447\u043d\u0443\u044e"}),"auto"===n&&Object(j.jsx)("span",{children:": \u0430\u0432\u0442\u043e"})]}),"manual"===n&&Object(j.jsxs)("span",{className:"battlefield-menu--remark",children:["\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043b\u0435\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0435\u0433\u043e",Object(j.jsx)("br",{}),"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0435\u0433\u043e"]}),"begin"===n&&Object(j.jsxs)("ul",{className:"battlefield-menu--list",children:[Object(j.jsx)("li",{onClick:function(){return c("manual")},children:" 1) \u0412\u0440\u0443\u0447\u043d\u0443\u044e "}),Object(j.jsx)("li",{onClick:function(){return c("auto")},children:" 2) \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 "})]}),("manual"===n||"auto"===n)&&Object(j.jsx)("div",{className:"battlefield-menu--ships",children:t.map((function(e){return Object(j.jsx)(v,{length:e.length,num:e.num},y()())}))})]})}function C(e){var t=e.type;return Object(j.jsx)("div",{className:"battlefield-"+t,children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(j.jsx)("span",{className:"idx",style:"digits"===t?{gridColumn:e}:{gridRow:e},children:"digits"===t?e:10!==e?String.fromCharCode(e+1039):"\u041a"},y()())}))})}function S(){var e=Object(i.useContext)(b),t=e.message,n=e.bfCoord,a=e.checkWinner,r=e.compBF,o=e.setCompBF,u=e.playerBF,d=e.setPlayerBF,p=e.getRnd,m=e.turn,f=e.setTurn,h=e.turnNum,O=e.setTurnNum,g=e.playHit,v=e.playMiss,x=e.playFight,C=Object(i.useState)(null),S=Object(l.a)(C,2),w=S[0],N=S[1],M=document.querySelectorAll(".battlefield-pad");function B(e){for(var t,i,c=e.clientX,a=e.clientY,r=0;r<n.gridCol.length-1;r++)c>=n.gridCol[r]&&c<=n.gridCol[r+1]&&(t=r+1),a>=n.gridRow[r]&&a<=n.gridRow[r+1]&&(i=r+1);k(t,i)}function k(e,t){e&&t||(e=p(),t=p());var n="player"===m?Object(s.a)(r):Object(s.a)(u),i=n[t-1][e-1];if(+i===i){if(n[t-1][e-1]="X",g(),"player"===m?o(n):d(n),N("player"===m?"playerHits":"compHits"),m.includes("comp")){var c=m+y()();setTimeout((function(){f(c)}),999)}}else if("X"===i||"*"===i){if(m.includes("comp")){var a=m+y()();setTimeout((function(){f(a)}),333)}}else n[t-1][e-1]="*",v(),"player"===m?o(n):d(n),N("player"===m?"playerMissed":"compMissed"),setTimeout((function(){"player"===m?f("comp"):m.includes("comp")&&f("player")}),999)}return Object(i.useEffect)((function(){if(a(),m.includes("win"))try{M[1].removeEventListener("click",B)}catch(e){console.log(e)}else"begin"===m&&(x(),setTimeout(f.bind(null,"player"),2e3)),m.includes("player")&&(document.body.style.cursor="auto",M[1].style.cursor="pointer",M[1].addEventListener("click",B)),m.includes("comp")&&(M[1].removeEventListener("click",B),document.body.style.cursor="wait",M[1].style.cursor="wait",k())}),[m]),Object(i.useEffect)((function(){w&&setTimeout((function(){return N(null)}),2e3)}),[w]),Object(i.useEffect)((function(){return O((function(e){return e+1}))}),[r]),Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"time-machine--box",children:[h>1&&Object(j.jsx)("button",{className:"time-machine--back",onClick:function(){alert("Turn back from ",h," to prev ",h-1)},children:"\u276e"}),Object(j.jsx)("div",{className:"turn-counter",children:h})]}),Object(j.jsxs)("div",{className:"war-info",children:["begin"===m&&t.begin,m.includes("player")&&t.playerTurn,m.includes("comp")&&t.compTurn,"winComp"===m&&t.winComp,"winPlayer"===m&&t.winPlayer,"\xa0","playerHits"===w&&t.playerHits,"playerMissed"===w&&t.playerMissed,"compHits"===w&&t.compHits,"compMissed"===w&&t.compMissed]})]})}function w(){var e=Object(i.useContext)(b),t=e.arrangeShips,n=e.playerBF,a=e.compBF;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"battlefield",children:[Object(j.jsx)(C,{type:"digits"}),Object(j.jsx)(C,{type:"letters"}),Object(j.jsx)("div",{className:"battlefield-pad",children:10===n.length&&n.flat().map((function(e){return Object(j.jsx)("span",{className:+e===e?"shipEl":"D"===e?"deadarea":"X"===e?"hit":"empty",children:"*"===e&&e},y()())}))})]}),t&&Object(j.jsx)(x,{}),!t&&Object(j.jsxs)("div",{className:"battlefield battlefield--comp",children:[Object(j.jsx)(C,{type:"digits"}),Object(j.jsx)(C,{type:"letters"}),Object(j.jsx)("div",{className:"battlefield-pad",children:10===a.length&&a.flat().map((function(e){return Object(j.jsx)("span",{className:"X"===e?"hit":"empty",children:"*"===e&&e},y()())}))})]})]}),!t&&Object(j.jsx)(S,{}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("a",{className:"footer__link",href:"https://github.com/g5-freemen",children:"Made by Anton Borkovskij, 2021"})})]})}function N(){return Object(j.jsx)(O,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"app-title",children:"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"}),Object(j.jsx)(w,{})]})})}r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.17356bc9.chunk.js.map