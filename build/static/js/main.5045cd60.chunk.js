(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(10),c=n.n(i),s=(n(18),n(3)),l=(n(19),n(2)),o=n(5),u=n.p+"static/media/hit.8c96d676.mp3",p=n.p+"static/media/miss.b9a5893c.mp3",d=n.p+"static/media/fight.15e2f926.mp3",m=n.p+"static/media/winComp.f369007a.mp3",f=n.p+"static/media/winPlayer.4834e938.mp3",b=n(0),j=r.a.createContext({}),g=j.Provider;function h(e){var t=e.children,n=Object(a.useState)(!0),r=Object(l.a)(n,2),i=r[0],c=r[1],j=Object(a.useState)("begin"),h=Object(l.a)(j,2),O=h[0],y=h[1],v=Object(a.useState)(Array(10).fill("-").map((function(){return Array(10).fill("-")}))),x=Object(l.a)(v,2),S=x[0],C=x[1],N=Object(a.useState)(Array(10).fill("-").map((function(){return Array(10).fill("-")}))),M=Object(l.a)(N,2),B=M[0],k=M[1],A=Object(a.useState)({}),T=Object(l.a)(A,2),F=T[0],R=T[1],E=Object(a.useState)(null),H=Object(l.a)(E,2),P=H[0],L=H[1],D=Object(a.useState)(null),U=Object(l.a)(D,2),X=U[0],_=U[1],q=Object(a.useState)("begin"),Y=Object(l.a)(q,2),J=Y[0],W=Y[1],I=Object(a.useState)(0),K=Object(l.a)(I,2),z=K[0],G=K[1],Q=Object(a.useState)("ru"),V=Object(l.a)(Q,2),Z=V[0],$=V[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1];Object(a.useEffect)((function(){if(z>0&&!ne){var e=JSON.stringify({playerBF:S,compBF:B});w.dispatch({type:"ADD_TURN",payload:e})}}),[z]);var re={ru:{gameTitle:"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439",arrangeShips:"\u0420\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u0435\u0439",arrangeShipsManual:"\u0412\u0440\u0443\u0447\u043d\u0443\u044e",arrangeShipsAuto:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438",remarkLBtn:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043b\u0435\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0435\u0433\u043e",remarkRBtn:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0435\u0433\u043e",playerTurn:"\u0412\u0430\u0448 \u0445\u043e\u0434!",compTurn:"\u0425\u043e\u0434 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430!",begin:"\u0414\u0430 \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u0431\u0438\u0442\u0432\u0430!",playerHits:"\u0412\u044b \u043f\u043e\u043f\u0430\u043b\u0438!",playerMissed:"\u0412\u044b \u043f\u0440\u043e\u043c\u0430\u0445\u043d\u0443\u043b\u0438\u0441\u044c!",compHits:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u043e\u043f\u0430\u043b!",compMissed:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u0440\u043e\u043c\u0430\u0445\u043d\u0443\u043b\u0441\u044f!",winPlayer:"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!".toUpperCase(),winComp:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u043e\u0431\u0435\u0434\u0438\u043b!".toUpperCase()},en:{gameTitle:"Sea Battle",arrangeShips:"Arrange Ships",arrangeShipsManual:"Manual",arrangeShipsAuto:"Automatic",remarkLBtn:"Click left mouse button on the ship to select it",remarkRBtn:"Click right mouse button on the ship to rotate it",playerTurn:"Your turn!",compTurn:"Computer turn!",begin:"Fight!",playerHits:"Hit the target!",playerMissed:"Miss the target!",compHits:"Computer Hit the target!",compMissed:"Computer Miss the target!",winPlayer:"You Win!".toUpperCase(),winComp:"Computer Win!".toUpperCase()}},ie=Object(o.a)(u),ce=Object(l.a)(ie,1)[0],se=Object(o.a)(p),le=Object(l.a)(se,1)[0],oe=Object(o.a)(d),ue=Object(l.a)(oe,1)[0],pe=Object(o.a)(m),de=Object(l.a)(pe,1)[0],me=Object(o.a)(f),fe=Object(l.a)(me,1)[0];function be(e){var t={top:e.top,bottom:e.bottom,left:e.left,right:e.right,width:e.width,height:e.height,gridCol:new Array(11).fill(0).map((function(t,n){return e.left+n*e.width/10})),gridRow:new Array(11).fill(0).map((function(t,n){return e.top+n*e.height/10}))};R(t)}return Object(a.useEffect)((function(){var e=document.querySelector(".battlefield-pad").getBoundingClientRect();!function(){for(var e=0,t=0,n=[[1,4],[2,3],[3,2],[4,1]];t<n.length;t++)for(var a=n[t],r=function(t){var n={num:e++,length:a[1]};L((function(e){return e?e.concat(n):[n]})),_((function(e){return e?e.concat(n):[n]}))},i=0;i<a[0];i++)r()}(),be(e)}),[]),Object(a.useEffect)((function(){i||be(document.querySelectorAll(".battlefield-pad")[1].getBoundingClientRect())}),[i]),Object(b.jsx)(g,{value:{arrangeShips:i,setArrangeShips:c,arrangeShipsMode:O,setArrangeShipsMode:y,playerBF:S,setPlayerBF:C,compBF:B,setCompBF:k,playerShips:P,setPlayerShips:L,compShips:X,setCompShips:_,bfCoord:F,message:re,lang:Z,setLang:$,turn:J,setTurn:W,turnNum:z,setTurnNum:G,timeMachine:ne,setTimeMachine:ae,getRnd:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e<1||e>10;)e=Math.ceil(10*Math.random());return e},playHit:ce,playMiss:le,playFight:ue,checkWinner:function(){(J.includes("comp")||"player"===J)&&(0===Object(s.a)(S).flat().filter((function(e){return e===+e})).length&&(W("winComp"),de()),0===Object(s.a)(B).flat().filter((function(e){return e===+e})).length&&(W("winPlayer"),fe()))},store:w},children:t})}var O=n(4),y=n.n(O);function v(e){var t=e.length,n=e.num,i=Object(a.useContext)(j),c=i.setPlayerShips,o=i.setCompShips,u=i.compBF,p=i.setCompBF,d=i.bfCoord,m=i.playerBF,f=i.setPlayerBF,g=i.arrangeShipsMode,h=i.getRnd,O=Object(a.useState)("auto"===g&&Math.random()>.5),v=Object(l.a)(O,2),x=v[0],S=v[1];function C(e,a,r,i){for(var l=!0,d=0;d<t;d++)try{i?(x||"-"===u[a-1][e-1+d]||(l=!1),x&&"-"!==u[a-1+d][e-1]&&(l=!1)):(x||"-"===m[a-1][e-1+d]||(l=!1),x&&"-"!==m[a-1+d][e-1]&&(l=!1))}catch(M){l=!1}if(l){for(var b=i?Object(s.a)(u):Object(s.a)(m),j=0;j<t;j++)x?b[a-1+j][e-1]=n:b[a-1][e-1+j]=n;for(var O=0;O<3;O++)for(var y=0;y<t+2;y++){var v=void 0,S=void 0;if(x?(v=a-2+y,S=e-2+O):(v=a-2+O,S=e-2+y),!(v<0||S<0||v>9||S>9)){var N=b[v][S];void 0!==N&&N!==+N&&"D"!==N&&(b[v][S]="D")}}i?(p(b),o((function(e){return e.filter((function(e){return e.num!==n}))}))):(f(b),c((function(e){return e.filter((function(e){return e.num!==n}))}))),document.onmousemove=null,r&&(r.onmouseup=null)}l||(i||"auto"!==g?i&&C(h(),h(),null,!0):C(h(),h(),null))}return Object(a.useEffect)((function(){"auto"===g&&setTimeout((function(){m.toString().includes(n)||C(h(),h(),null)}),500*n),u.toString().includes(n)||C(h(),h(),null,!0)}),[m,u]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("span",{className:"ship",id:y()(),style:x?{width:33,height:33*t}:{width:33*t,height:33},onDragStart:function(){return!1},onMouseDown:function(e){if(0===e.button){var t=e.target,n=t.getBoundingClientRect(),a=e.pageX-n.left,r=e.pageY-n.top;t.style.position="absolute",t.style.zIndex=9,i(e),document.onmousemove=function(e){return i(e)},t.onmouseup=function(e){for(var n,a,r=e.target.closest(".ship").getBoundingClientRect(),i=0;i<d.gridCol.length-1;i++)r.x>=d.gridCol[i]&&r.x<=d.gridCol[i+1]&&(n=i+1),r.y>=d.gridRow[i]&&r.y<=d.gridRow[i+1]&&(a=i+1);void 0===n||void 0===a||n<1||a<1||"auto"!==g&&C(n,a,t)}}function i(e){t.style.left=e.pageX-a+"px",t.style.top=e.pageY-r+"px"}},onContextMenu:function(e){e.preventDefault(),S((function(e){return!e}))}}),Object(b.jsx)("span",{className:"ship-margin"})]},y()())}function x(){var e=Object(a.useContext)(j),t=e.lang,n=e.message,r=e.playerShips,i=e.arrangeShipsMode,c=e.setArrangeShipsMode,s=e.setArrangeShips;return document.addEventListener("keydown",(function(e){"1"===e.key?c("manual"):"2"===e.key&&c("auto")})),Object(a.useEffect)((function(){r&&0===r.length&&c("playerReady")}),[r]),Object(a.useEffect)((function(){"playerReady"===i&&s(!1)}),[i]),Object(b.jsxs)("div",{className:"battlefield-menu",children:[("begin"===i||"manual"===i||"auto"===i)&&Object(b.jsxs)("p",{className:"battlefield-menu--title",children:[" ",n[t].arrangeShips,"en"===t&&"begin"!==i&&Object(b.jsxs)("span",{children:[": ",i]}),"ru"===t&&"manual"===i&&Object(b.jsx)("span",{children:": \u0432\u0440\u0443\u0447\u043d\u0443\u044e"}),"ru"===t&&"auto"===i&&Object(b.jsx)("span",{children:": \u0430\u0432\u0442\u043e"})]}),"manual"===i&&Object(b.jsxs)("span",{className:"battlefield-menu--remark",children:[n[t].remarkLBtn," ",Object(b.jsx)("br",{}),n[t].remarkRBtn]}),"begin"===i&&Object(b.jsxs)("ul",{className:"battlefield-menu--list",children:[Object(b.jsxs)("li",{onClick:function(){return c("manual")},children:[" 1) ",n[t].arrangeShipsManual]}),Object(b.jsxs)("li",{onClick:function(){return c("auto")},children:[" 2) ",n[t].arrangeShipsAuto]})]}),("manual"===i||"auto"===i)&&Object(b.jsx)("div",{className:"battlefield-menu--ships",children:r.map((function(e){return Object(b.jsx)(v,{length:e.length,num:e.num},y()())}))})]})}function S(e){var t=e.type,n=Object(a.useContext)(j).lang;return Object(b.jsx)("div",{className:"battlefield-"+t,children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(b.jsxs)("span",{className:"idx",style:"digits"===t?{gridColumn:e}:{gridRow:e},children:["digits"===t?e:"ru"===n&&(10!==e?String.fromCharCode(e+1039):"\u041a"),"digits"!==t&&"en"===n&&String.fromCharCode(e+64)]},y()())}))})}function C(){var e=Object(a.useContext)(j),t=e.message,n=e.bfCoord,i=e.checkWinner,c=e.lang,o=e.compBF,u=e.setCompBF,p=e.playerBF,d=e.setPlayerBF,m=e.getRnd,f=e.turn,g=e.setTurn,h=e.turnNum,O=e.setTurnNum,v=e.playHit,x=e.playMiss,S=e.playFight,C=e.store,N=e.timeMachine,M=e.setTimeMachine,w=Object(a.useState)(null),B=Object(l.a)(w,2),k=B[0],A=B[1],T=Object(a.useState)(null),F=Object(l.a)(T,2),R=F[0],E=F[1],H=document.querySelectorAll(".battlefield-pad");function P(e){for(var t,a,r=e.clientX,i=e.clientY,c=0;c<n.gridCol.length-1;c++)r>=n.gridCol[c]&&r<=n.gridCol[c+1]&&(t=c+1),i>=n.gridRow[c]&&i<=n.gridRow[c+1]&&(a=c+1);L(t,a)}function L(e,t){if(0===Object(s.a)(p).flat().filter((function(e){return e===+e})).length||0===Object(s.a)(o).flat().filter((function(e){return e===+e})).length)return i(),document.body.style.cursor="auto",void(H[1].style.cursor="pointer");if(e&&t||(e=m(),t=m()),f.includes("comp")&&null!==R){var n=Object(s.a)(p);if(n.flat().toString().includes(R)){if(Math.random()<.4){for(var a=!1,r=0;r<n.length;r++)for(var c=0;c<n[r].length;c++)if(n[r][c]===R&&!a){v(),n[r][c]="X";var l=f+y()();g(l),a=!0}return E(null),void d(n)}E(null)}}var b="player"===f?Object(s.a)(o):Object(s.a)(p),j=b[t-1][e-1];if(+j===j){if(f.includes("comp")&&E(j),b[t-1][e-1]="X",v(),"player"===f?u(b):d(b),A("player"===f?"playerHits":"compHits"),f.includes("comp")){var h=f+y()();setTimeout((function(){return g(h)}),999)}}else{if("X"===j||"*"===j){if(f.includes("comp")){var O=f+y()();g(O)}return}b[t-1][e-1]="*",x(),"player"===f?u(b):d(b),A("player"===f?"playerMissed":"compMissed"),setTimeout((function(){"player"===f?g("comp"):f.includes("comp")&&g("player")}),999)}}return Object(a.useEffect)((function(){if(!f.includes("player"))try{H.length>1&&H[1].removeEventListener("click",P)}catch(e){console.log(e)}f.includes("win")||i(),"begin"===f&&(S(),setTimeout(g.bind(null,"player"),2e3)),f.includes("player")&&(document.body.style.cursor="auto",H[1].style.cursor="pointer",H[1].addEventListener("click",P)),f.includes("comp")&&(document.body.style.cursor="wait",H[1].style.cursor="wait",L())}),[f]),Object(a.useEffect)((function(){return k&&setTimeout((function(){return A(null)}),2e3)}),[k]),Object(a.useEffect)((function(){console.log("compBF=",o),console.log("redux store=",C.getState()),!N&&O(C.getState().length+1),N&&M(!1)}),[o]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsxs)("div",{className:"time-machine--box",children:[h>1&&Object(b.jsx)("button",{className:"time-machine--back",onClick:function(){document.querySelector(".App").classList.toggle("darken"),setTimeout((function(){document.querySelector(".App").classList.toggle("darken")}),1e3),M(!0),C.dispatch({type:"TURN_BACK",payload:h-1});var e=C.getState().map((function(e){return JSON.parse(e)})),t=e[e.length-1],n=Object(s.a)(t.playerBF),a=Object(s.a)(t.compBF);d(n),u(a),O((function(e){return e-1})),"player"!==f&&g("player")},children:"\u276e"}),Object(b.jsx)("div",{className:"turn-counter",children:h})]}),Object(b.jsxs)("div",{className:"war-info",children:["begin"===f&&t[c].begin,"player"===f&&t[c].playerTurn,f.includes("comp")&&t[c].compTurn,"winComp"===f&&t[c].winComp,"winPlayer"===f&&t[c].winPlayer,"\xa0","playerHits"===k&&t[c].playerHits,"playerMissed"===k&&t[c].playerMissed,"compHits"===k&&t[c].compHits,"compMissed"===k&&t[c].compMissed]})]})}function N(){var e=Object(a.useContext)(j),t=e.message,n=e.lang,r=e.setLang,i=e.arrangeShips,c=e.playerBF,s=e.compBF;return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("button",{className:"btn-lang",onClick:function(e){e.target.classList.toggle("lang-en"),r("ru"===n?"en":"ru")}}),Object(b.jsx)("h1",{className:"app-title",children:t[n].gameTitle}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"battlefield",children:[Object(b.jsx)(S,{type:"digits"}),Object(b.jsx)(S,{type:"letters"}),Object(b.jsx)("div",{className:"battlefield-pad",children:10===c.length&&c.flat().map((function(e){return Object(b.jsx)("span",{className:+e===e?"shipEl":"D"===e?"deadarea":"X"===e?"hit":"empty",children:"*"===e&&e},y()())}))})]}),i&&Object(b.jsx)(x,{}),!i&&Object(b.jsxs)("div",{className:"battlefield battlefield--comp",children:[Object(b.jsx)(S,{type:"digits"}),Object(b.jsx)(S,{type:"letters"}),Object(b.jsx)("div",{className:"battlefield-pad",children:10===s.length&&s.flat().map((function(e){return Object(b.jsx)("span",{className:"X"===e?"hit":"empty",children:"*"===e&&e},y()())}))})]})]}),!i&&Object(b.jsx)(C,{}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("a",{className:"footer__link",href:"https://github.com/g5-freemen",children:"Made by Anton Borkovskij, 2021"})})]})}var M=n(11);var w=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_TURN"===t.type?[].concat(Object(s.a)(e),[t.payload]):"TURN_BACK"===t.type?e.filter((function(e,n){return n!==t.payload})):e}));function B(){return Object(b.jsx)(h,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(N,{})})})}c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5045cd60.chunk.js.map