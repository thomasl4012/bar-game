(this.webpackJsonpbarre=this.webpackJsonpbarre||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(9),n(2)),l=(n(10),n(11),n(0)),b=function(e){var t=e.handleClick,n=e.gameState,c=e.number;e.value,e.roman;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("div",{className:"col m-2"}),Object(l.jsx)("div",{className:"col m-2",children:n?Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"I"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"V"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"X"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"L"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"C"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:t,children:"M"})]}):Object(l.jsx)("div",{className:"loose",children:Object(l.jsxs)("p",{style:{margin:"6px"},children:["you loose at number : ",Object(l.jsx)("b",{children:c})]})})})]})})};var j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1),i=Object(s.a)(a,2),j=i[0],o=i[1],u=Object(c.useState)("I"),m=Object(s.a)(u,2),d=m[0],O=m[1],h=Object(c.useState)(!0),C=Object(s.a)(h,2),v=C[0],f=C[1],x=Object(c.useState)(10),I=Object(s.a)(x,2),p=I[0],X=I[1],N=Object(c.useState)(!1),g=Object(s.a)(N,2),S=g[0],k=g[1],y=Object(c.useRef)(null);Object(c.useEffect)((function(){return y.current=setInterval((function(){return X(p-1)}),1e3),p<=0&&(r("nothing"),clearInterval(y.current),f(!1)),function(){clearInterval(y.current)}}),[p]);var L=function(e){if(isNaN(e))return NaN;for(var t=String(+e).split(""),n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],c="",r=3;r--;)c=(n[+t.pop()+10*r]||"")+c;return Array(+t.join("")+1).join("M")+c};return Object(l.jsxs)("div",{className:"App "+(S?"good":""),children:[Object(l.jsxs)("div",{children:["Time left : ",Object(l.jsx)("b",{children:p})]}),Object(l.jsx)("div",{children:"What's next element ?"}),Object(l.jsx)(b,{handleClick:function(e){clearInterval(y.current),X(10),e.preventDefault();var t=e.target.innerText;if(t!==d[0]?(f(!1),X("")):(k(!0),r(t),setTimeout((function(){return k(!1)}),200)),d.length>1){var n=d.slice(1);O(n)}else o(j+1),O(L(j+1).split(""))},gameState:v,value:n,number:j,roman:d[0]})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),o()}],[[13,1,2]]]);
//# sourceMappingURL=main.98c8a070.chunk.js.map