(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{1559:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(9),s=c.n(a),i=(c(45),c(40)),o=c(11),d=(c.p,c(46),c(47),c(48),c(12)),j=c(1561),u=c(1564),l=c(1565),h=c(1562),b=c(1563),m=c(1574),x=c(1566),O=c(1567),p=c(1568),f=c(1569),g=c(2),y=function(e){var t=e.cartItem,c=e.removeItem,n=e.buyNow,r=0;return t.forEach((function(e){r=parseFloat(r)+parseFloat(e.productPrice)})),Object(g.jsxs)(j.a,{fluid:!0,children:[Object(g.jsx)("h1",{className:"text-success",children:"Your Cart"}),Object(g.jsx)(h.a,{children:t.map((function(e){return Object(g.jsx)(b.a,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(l.a,{children:Object(g.jsx)("img",{height:80,src:e.tinyImage})}),Object(g.jsxs)(l.a,{className:"text-center",children:[Object(g.jsx)("div",{className:"text-primary",children:e.productName}),Object(g.jsxs)("span",{children:["price :- ",e.productPrice]}),Object(g.jsx)(m.a,{color:"danger",onClick:function(){return c(e)},children:"Remove"})]})]})},e.id)}))}),t.length>=1?Object(g.jsxs)(x.a,{className:"text-center mt-3",children:[Object(g.jsx)(O.a,{children:"Grand Total"}),Object(g.jsxs)(p.a,{children:["Your amount for ",t.length," product is ",r]}),Object(g.jsx)(f.a,{children:Object(g.jsx)(m.a,{color:"success",onClick:n,children:"pay here"})})]}):Object(g.jsx)("h1",{className:"text-warning",children:"Cart is empty"})]})},v=c(1570),w=c(1571),N=c(1572),I=function(e){var t=e.product,c=e.addInCart;return Object(g.jsxs)(x.a,{className:"mt-2 mb-1",children:[Object(g.jsx)(v.a,{top:!0,height:"250",width:"100%",src:t.smallImage}),Object(g.jsxs)(p.a,{className:"text-center",children:[Object(g.jsx)(w.a,{children:t.productName}),Object(g.jsxs)(N.a,{className:"secondary",children:["price: RS ",t.productPrice]}),Object(g.jsx)(m.a,{outline:!0,color:"success",onClick:function(){return c(t)},children:"Buy Now"})]})]})},C=c(15),k=c.n(C),P=c(38),B=c(39),S=c.n(B),E=c(1573),F=c(16),J=function(e){var t=e.addInCart,c=Object(n.useState)([]),r=Object(o.a)(c,2),a=r[0],s=r[1],i=function(){var e=Object(P.a)(k.a.mark((function e(){var t,c,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://myjson.dit.upm.es/api/bins/111i",{});case 2:t=e.sent,c=t.data,n=c.photos,r=n.map((function(e){return{smallImage:e.src.medium,tinyImage:e.src.tiny,productName:F.random.word(),productPrice:F.commerce.price(),id:Object(E.a)()}})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(g.jsxs)(j.a,{fluid:!0,children:[Object(g.jsx)("h1",{className:"text-success text-center",children:"Buy Page"}),Object(g.jsx)(u.a,{children:a.map((function(e){return Object(g.jsx)(l.a,{md:4,children:Object(g.jsx)(I,{product:e,addInCart:t})},e.id)}))})]})};var R=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(g.jsxs)(j.a,{fluid:!0,children:[Object(g.jsx)(d.a,{}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(l.a,{md:"8",children:Object(g.jsx)(J,{addInCart:function(e){-1===c.findIndex((function(t){return t.id===e.id}))?r([].concat(Object(i.a)(c),[e])):Object(d.b)("already added in cart",{type:"error"})}})}),Object(g.jsx)(l.a,{md:"4",children:Object(g.jsx)(y,{cartItem:c,removeItem:function(e){r(c.filter((function(t){return t.id!==e.id})))},buyNow:function(){r([]),Object(d.b)("Purchase Complete",{type:"success"})}})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,c){},48:function(e,t,c){}},[[1559,1,2]]]);
//# sourceMappingURL=main.8745c7bb.chunk.js.map