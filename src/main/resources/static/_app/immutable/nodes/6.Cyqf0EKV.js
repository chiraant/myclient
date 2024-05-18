import{s as vt,n as ft,r as bt,c as mt,o as Nt}from"../chunks/scheduler.B2kig3xY.js";import{S as Ct,i as Et,e as o,s as g,c as r,l as U,f as T,a as P,d as p,m as s,g as w,h as e,n as R,o as K,r as gt,t as lt,b as at,j as st}from"../chunks/index.CeepxZLI.js";import{e as pt}from"../chunks/each.D6YF6ztN.js";import{a as ht}from"../chunks/axios.9PTFF6AP.js";import{p as Tt}from"../chunks/stores.CMwHErJ8.js";import{j as xt}from"../chunks/store.cPuX3XdM.js";function dt(c,l,d){const _=c.slice();return _[1]=l[d],_}function _t(c){let l,d,_=c[1].firstName+"",f,v,b,n=c[1].lastName+"",B,A,h,y=c[1].email+"",E,i;return{c(){l=o("tr"),d=o("td"),f=lt(_),v=g(),b=o("td"),B=lt(n),A=g(),h=o("td"),E=lt(y),i=g()},l(m){l=r(m,"TR",{});var N=P(l);d=r(N,"TD",{});var x=P(d);f=at(x,_),x.forEach(p),v=T(N),b=r(N,"TD",{});var V=P(b);B=at(V,n),V.forEach(p),A=T(N),h=r(N,"TD",{});var L=P(h);E=at(L,y),L.forEach(p),i=T(N),N.forEach(p)},m(m,N){w(m,l,N),e(l,d),e(d,f),e(l,v),e(l,b),e(b,B),e(l,A),e(l,h),e(h,E),e(l,i)},p(m,N){N&1&&_!==(_=m[1].firstName+"")&&st(f,_),N&1&&n!==(n=m[1].lastName+"")&&st(B,n),N&1&&y!==(y=m[1].email+"")&&st(E,y)},d(m){m&&p(l)}}}function yt(c){let l,d="Create Person",_,f,v,b,n,B="First Name",A,h,y,E,i,m="Last Name",N,x,V,L,j,nt="Email",Q,D,W,X,Z,k,ot="Submit",S,H,rt="All Persons",q,I,z,it='<tr><th scope="col">First Name</th> <th scope="col">Last Name</th> <th scope="col">Email</th></tr>',$,F,tt,ut,O=pt(c[0]),C=[];for(let t=0;t<O.length;t+=1)C[t]=_t(dt(c,O,t));return{c(){l=o("h1"),l.textContent=d,_=g(),f=o("form"),v=o("div"),b=o("div"),n=o("label"),n.textContent=B,A=g(),h=o("input"),y=g(),E=o("div"),i=o("label"),i.textContent=m,N=g(),x=o("input"),V=g(),L=o("div"),j=o("label"),j.textContent=nt,Q=g(),D=o("input"),W=g(),X=o("br"),Z=g(),k=o("button"),k.textContent=ot,S=g(),H=o("h1"),H.textContent=rt,q=g(),I=o("table"),z=o("thead"),z.innerHTML=it,$=g(),F=o("tbody");for(let t=0;t<C.length;t+=1)C[t].c();this.h()},l(t){l=r(t,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1aynzwh"&&(l.textContent=d),_=T(t),f=r(t,"FORM",{class:!0});var u=P(f);v=r(u,"DIV",{class:!0});var a=P(v);b=r(a,"DIV",{class:!0});var M=P(b);n=r(M,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),U(n)!=="svelte-11trqee"&&(n.textContent=B),A=T(M),h=r(M,"INPUT",{class:!0,id:!0,type:!0}),M.forEach(p),y=T(a),E=r(a,"DIV",{class:!0});var Y=P(E);i=r(Y,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),U(i)!=="svelte-1i4b2vc"&&(i.textContent=m),N=T(Y),x=r(Y,"INPUT",{class:!0,id:!0,type:!0}),Y.forEach(p),V=T(a),L=r(a,"DIV",{class:!0});var G=P(L);j=r(G,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),U(j)!=="svelte-13xn7a2"&&(j.textContent=nt),Q=T(G),D=r(G,"INPUT",{class:!0,id:!0,type:!0}),G.forEach(p),a.forEach(p),W=T(u),X=r(u,"BR",{}),Z=T(u),k=r(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),U(k)!=="svelte-1vx0knm"&&(k.textContent=ot),u.forEach(p),S=T(t),H=r(t,"H1",{"data-svelte-h":!0}),U(H)!=="svelte-1131w5t"&&(H.textContent=rt),q=T(t),I=r(t,"TABLE",{class:!0});var J=P(I);z=r(J,"THEAD",{"data-svelte-h":!0}),U(z)!=="svelte-1yoxm7n"&&(z.innerHTML=it),$=T(J),F=r(J,"TBODY",{});var ct=P(F);for(let et=0;et<C.length;et+=1)C[et].l(ct);ct.forEach(p),J.forEach(p),this.h()},h(){s(l,"class","mt-3"),s(n,"class","form-label"),s(n,"for","firstName"),s(h,"class","form-control"),s(h,"id","firstName"),s(h,"type","text"),s(b,"class","col-sm-6"),s(i,"class","form-label"),s(i,"for","lastName"),s(x,"class","form-control"),s(x,"id","lastName"),s(x,"type","text"),s(E,"class","col-sm-6"),s(j,"class","form-label"),s(j,"for","email"),s(D,"class","form-control"),s(D,"id","email"),s(D,"type","text"),s(L,"class","col-sm-12"),s(v,"class","row mb-3"),s(k,"type","button"),s(k,"class","btn btn-primary"),s(f,"class","mb-5"),s(I,"class","table")},m(t,u){w(t,l,u),w(t,_,u),w(t,f,u),e(f,v),e(v,b),e(b,n),e(b,A),e(b,h),R(h,c[1].firstName),e(v,y),e(v,E),e(E,i),e(E,N),e(E,x),R(x,c[1].lastName),e(v,V),e(v,L),e(L,j),e(L,Q),e(L,D),R(D,c[1].email),e(f,W),e(f,X),e(f,Z),e(f,k),w(t,S,u),w(t,H,u),w(t,q,u),w(t,I,u),e(I,z),e(I,$),e(I,F);for(let a=0;a<C.length;a+=1)C[a]&&C[a].m(F,null);tt||(ut=[K(h,"input",c[3]),K(x,"input",c[4]),K(D,"input",c[5]),K(k,"click",c[2])],tt=!0)},p(t,[u]){if(u&2&&h.value!==t[1].firstName&&R(h,t[1].firstName),u&2&&x.value!==t[1].lastName&&R(x,t[1].lastName),u&2&&D.value!==t[1].email&&R(D,t[1].email),u&1){O=pt(t[0]);let a;for(a=0;a<O.length;a+=1){const M=dt(t,O,a);C[a]?C[a].p(M,u):(C[a]=_t(M),C[a].c(),C[a].m(F,null))}for(;a<C.length;a+=1)C[a].d(1);C.length=O.length}},i:ft,o:ft,d(t){t&&(p(l),p(_),p(f),p(S),p(H),p(q),p(I)),gt(C,t),tt=!1,bt(ut)}}}function Lt(c,l,d){let _,f;mt(c,xt,i=>d(6,_=i)),mt(c,Tt,i=>d(7,f=i));const v=f.url.origin;let b=[],n={firstName:null,lastName:null,email:null};Nt(()=>{B()});function B(){var i={method:"get",url:v+"/api/person",headers:{"Content-Type":"application/json",Authorization:"Bearer "+_}};ht(i).then(function(m){d(0,b=m.data)}).catch(function(m){alert("Could not get persons"),console.log(m)})}function A(){var i={method:"post",url:v+"/api/person",headers:{"Content-Type":"application/json",Authorization:"Bearer "+_},data:n};ht(i).then(function(m){alert("Person added"),B()}).catch(function(m){alert("Could not create Person"),console.log(m)})}function h(){n.firstName=this.value,d(1,n)}function y(){n.lastName=this.value,d(1,n)}function E(){n.email=this.value,d(1,n)}return[b,n,A,h,y,E]}class jt extends Ct{constructor(l){super(),Et(this,l,Lt,yt,vt,{})}}export{jt as component};
