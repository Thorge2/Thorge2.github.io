import{S as a,i as s,s as t,k as e,e as l,L as r,t as c,M as o,d as i,n,c as d,a as u,N as h,g as f,b as p,f as v,E as x,F as m,K as w,O as b,J as g}from"../../chunks/vendor-9aafa774.js";import{d as y}from"../../chunks/drugs-e98b0aa9.js";function E(a){let s,t,g,y,E,k,B,D,I,T,V,j,N,O,$,H,F,L,M,P,S,U,_,z,A,C,G,J,K,R,q=a[0].name+"",Q=a[0].price/100+"",W=a[0].description+"";return document.title=s="Drugs | "+a[0].name,{c(){t=e(),g=l("div"),y=l("div"),E=l("a"),k=r("svg"),B=r("path"),D=e(),I=l("div"),T=l("h2"),V=c(q),j=e(),N=l("div"),O=l("button"),$=c("Buy"),H=e(),F=l("div"),L=c("price: "),M=l("strong"),P=c("$"),S=c(Q),U=e(),_=l("p"),z=c(W),A=e(),C=l("div"),G=l("button"),J=c("Buy"),this.h()},l(a){o('[data-svelte="svelte-b900h9"]',document.head).forEach(i),t=n(a),g=d(a,"DIV",{class:!0});var s=u(g);y=d(s,"DIV",{class:!0});var e=u(y);E=d(e,"A",{href:!0,class:!0});var l=u(E);k=h(l,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var r=u(k);B=h(r,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),u(B).forEach(i),r.forEach(i),l.forEach(i),D=n(e),I=d(e,"DIV",{class:!0});var c=u(I);T=d(c,"H2",{class:!0});var p=u(T);V=f(p,q),p.forEach(i),j=n(c),N=d(c,"DIV",{class:!0});var v=u(N);O=d(v,"BUTTON",{class:!0});var x=u(O);$=f(x,"Buy"),x.forEach(i),v.forEach(i),c.forEach(i),H=n(e),F=d(e,"DIV",{class:!0});var m=u(F);L=f(m,"price: "),M=d(m,"STRONG",{});var w=u(M);P=f(w,"$"),S=f(w,Q),w.forEach(i),m.forEach(i),U=n(e),_=d(e,"P",{class:!0});var b=u(_);z=f(b,W),b.forEach(i),e.forEach(i),s.forEach(i),A=n(a),C=d(a,"DIV",{class:!0});var K=u(C);G=d(K,"BUTTON",{class:!0});var R=u(G);J=f(R,"Buy"),R.forEach(i),K.forEach(i),this.h()},h(){p(B,"fill-rule","evenodd"),p(B,"d","M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"),p(B,"clip-rule","evenodd"),p(k,"xmlns","http://www.w3.org/2000/svg"),p(k,"class","h-5 w-5"),p(k,"viewBox","0 0 20 20"),p(k,"fill","currentColor"),p(E,"href","/list"),p(E,"class","mb-2 block"),p(T,"class","font-bold text-5xl"),p(O,"class","bg-purple-800 text-white dark:bg-yellow-400 dark:text-black py-3 px-5 rounded-xl shadow font-semibold text-xl"),p(N,"class","hidden md:block"),p(I,"class","flex justify-between mb-4"),p(F,"class","bg-yellow-400 dark:bg-purple-800 rounded-xl py-1 px-4"),p(_,"class","p-4"),p(y,"class","w-full px-4 md:w-3/4 lg:w-1/2"),p(g,"class","flex justify-center pt-24 min-h-screen"),p(G,"class","bg-purple-800 text-white dark:bg-yellow-400 dark:text-black py-3 px-5 rounded-xl shadow font-semibold text-xl"),p(C,"class","md:hidden fixed bottom-0 right-0 p-10")},m(s,e){v(s,t,e),v(s,g,e),x(g,y),x(y,E),x(E,k),x(k,B),x(y,D),x(y,I),x(I,T),x(T,V),x(I,j),x(I,N),x(N,O),x(O,$),x(y,H),x(y,F),x(F,L),x(F,M),x(M,P),x(M,S),x(y,U),x(y,_),x(_,z),v(s,A,e),v(s,C,e),x(C,G),x(G,J),K||(R=[m(O,"click",a[2]),m(G,"click",a[3])],K=!0)},p(a,[t]){1&t&&s!==(s="Drugs | "+a[0].name)&&(document.title=s)},i:w,o:w,d(a){a&&i(t),a&&i(g),a&&i(A),a&&i(C),K=!1,b(R)}}}var k=function(a,s,t,e){return new(t||(t=Promise))((function(l,r){function c(a){try{i(e.next(a))}catch(s){r(s)}}function o(a){try{i(e.throw(a))}catch(s){r(s)}}function i(a){var s;a.done?l(a.value):(s=a.value,s instanceof t?s:new t((function(a){a(s)}))).then(c,o)}i((e=e.apply(a,s||[])).next())}))};function B({page:a}){return k(this,void 0,void 0,(function*(){return{props:{id:+a.params.id}}}))}function D(a,s,t){let e;g(a,y,(a=>t(4,e=a))),this&&this.__awaiter;let{id:l}=s;const r=e[l];return a.$$set=a=>{"id"in a&&t(1,l=a.id)},[r,l,()=>alert("This is illegal, stop it!"),()=>alert("FBI want´s to know your location")]}class I extends a{constructor(a){super(),s(this,a,D,E,t,{id:1})}}export{I as default,B as load};
