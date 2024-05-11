import{s as yt,b as Et,n as it,r as kt,c as xt,o as Ot}from"../chunks/scheduler.B8ClD4bx.js";import{S as Lt,i as It,e as r,s as y,c as i,k as j,f as E,a as k,d as h,l as _,m as G,g as P,h as o,q as vt,n as Z,o as mt,t as tt,b as et,j as rt,p as Nt}from"../chunks/index.o_Xq34i8.js";import{e as $,a as Tt}from"../chunks/axios.Bvw451kA.js";import{p as St}from"../chunks/stores.B3hbzJZs.js";function bt(a,l,n){const s=a.slice();return s[1]=l[n],s}function Ct(a,l,n){const s=a.slice();return s[13]=l[n],s}function gt(a){let l,n=a[13]+"",s;return{c(){l=r("option"),s=tt(n),this.h()},l(c){l=i(c,"OPTION",{});var u=k(l);s=et(u,n),u.forEach(h),this.h()},h(){l.__value=a[13],G(l,l.__value)},m(c,u){P(c,l,u),o(l,s)},p:it,d(c){c&&h(l)}}}function Dt(a){let l,n,s=a[1].docTitle+"",c,u,v,d=(a[1].docType||"Not Specified")+"",I,S,m,L=a[1].uploadDate+"",D,f;return{c(){l=r("tr"),n=r("td"),c=tt(s),u=y(),v=r("td"),I=tt(d),S=y(),m=r("td"),D=tt(L),f=y()},l(x){l=i(x,"TR",{});var T=k(l);n=i(T,"TD",{});var g=k(n);c=et(g,s),g.forEach(h),u=E(T),v=i(T,"TD",{});var O=k(v);I=et(O,d),O.forEach(h),S=E(T),m=i(T,"TD",{});var Y=k(m);D=et(Y,L),Y.forEach(h),f=E(T),T.forEach(h)},m(x,T){P(x,l,T),o(l,n),o(n,c),o(l,u),o(l,v),o(v,I),o(l,S),o(l,m),o(m,D),o(l,f)},p(x,T){T&1&&s!==(s=x[1].docTitle+"")&&rt(c,s),T&1&&d!==(d=(x[1].docType||"Not Specified")+"")&&rt(I,d),T&1&&L!==(L=x[1].uploadDate+"")&&rt(D,L)},d(x){x&&h(l)}}}function At(a){let l,n="Create Document",s,c,u,v,d,I="Document Title",S,m,L,D,f,x="Document Type",T,g,O,Y="Select Type",lt,U,M,ut="Upload Date",ot,A,at,B,dt="Submit",J,V,ht="All Documents",K,H,w,ft="<tr><th>Title</th> <th>Type</th> <th>Upload Date</th></tr>",nt,R,st,pt,z=$(a[2]),b=[];for(let t=0;t<z.length;t+=1)b[t]=gt(Ct(a,z,t));let F=$(a[0]),C=[];for(let t=0;t<F.length;t+=1)C[t]=Dt(bt(a,F,t));return{c(){l=r("h1"),l.textContent=n,s=y(),c=r("form"),u=r("div"),v=r("div"),d=r("label"),d.textContent=I,S=y(),m=r("input"),L=y(),D=r("div"),f=r("label"),f.textContent=x,T=y(),g=r("select"),O=r("option"),O.textContent=Y;for(let t=0;t<b.length;t+=1)b[t].c();lt=y(),U=r("div"),M=r("label"),M.textContent=ut,ot=y(),A=r("input"),at=y(),B=r("button"),B.textContent=dt,J=y(),V=r("h1"),V.textContent=ht,K=y(),H=r("table"),w=r("thead"),w.innerHTML=ft,nt=y(),R=r("tbody");for(let t=0;t<C.length;t+=1)C[t].c();this.h()},l(t){l=i(t,"H1",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-jbgafh"&&(l.textContent=n),s=E(t),c=i(t,"FORM",{class:!0});var p=k(c);u=i(p,"DIV",{class:!0});var e=k(u);v=i(e,"DIV",{class:!0});var N=k(v);d=i(N,"LABEL",{for:!0,"data-svelte-h":!0}),j(d)!=="svelte-12oxed"&&(d.textContent=I),S=E(N),m=i(N,"INPUT",{class:!0,id:!0,type:!0}),N.forEach(h),L=E(e),D=i(e,"DIV",{class:!0});var Q=k(D);f=i(Q,"LABEL",{for:!0,"data-svelte-h":!0}),j(f)!=="svelte-1kekeuz"&&(f.textContent=x),T=E(Q),g=i(Q,"SELECT",{class:!0,id:!0});var ct=k(g);O=i(ct,"OPTION",{"data-svelte-h":!0}),j(O)!=="svelte-j4ygo4"&&(O.textContent=Y);for(let q=0;q<b.length;q+=1)b[q].l(ct);ct.forEach(h),Q.forEach(h),lt=E(e),U=i(e,"DIV",{class:!0});var W=k(U);M=i(W,"LABEL",{for:!0,"data-svelte-h":!0}),j(M)!=="svelte-1hc5xcm"&&(M.textContent=ut),ot=E(W),A=i(W,"INPUT",{class:!0,id:!0,type:!0}),W.forEach(h),e.forEach(h),at=E(p),B=i(p,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(B)!=="svelte-1ak0nw9"&&(B.textContent=dt),p.forEach(h),J=E(t),V=i(t,"H1",{"data-svelte-h":!0}),j(V)!=="svelte-17lkpc5"&&(V.textContent=ht),K=E(t),H=i(t,"TABLE",{class:!0});var X=k(H);w=i(X,"THEAD",{"data-svelte-h":!0}),j(w)!=="svelte-tc2lon"&&(w.innerHTML=ft),nt=E(X),R=i(X,"TBODY",{});var _t=k(R);for(let q=0;q<C.length;q+=1)C[q].l(_t);_t.forEach(h),X.forEach(h),this.h()},h(){_(l,"class","mt-3"),_(d,"for","docTitle"),_(m,"class","form-control"),_(m,"id","docTitle"),_(m,"type","text"),_(v,"class","col"),_(f,"for","docType"),O.__value="",G(O,O.__value),_(g,"class","form-control"),_(g,"id","docType"),a[1].docType===void 0&&Et(()=>a[5].call(g)),_(D,"class","col"),_(M,"for","uploadDate"),_(A,"class","form-control"),_(A,"id","uploadDate"),_(A,"type","date"),_(U,"class","col"),_(u,"class","row mb-3"),_(B,"type","button"),_(B,"class","btn btn-primary"),_(c,"class","mb-5"),_(H,"class","table")},m(t,p){P(t,l,p),P(t,s,p),P(t,c,p),o(c,u),o(u,v),o(v,d),o(v,S),o(v,m),G(m,a[1].docTitle),o(u,L),o(u,D),o(D,f),o(D,T),o(D,g),o(g,O);for(let e=0;e<b.length;e+=1)b[e]&&b[e].m(g,null);vt(g,a[1].docType,!0),o(u,lt),o(u,U),o(U,M),o(U,ot),o(U,A),G(A,a[1].uploadDate),o(c,at),o(c,B),P(t,J,p),P(t,V,p),P(t,K,p),P(t,H,p),o(H,w),o(H,nt),o(H,R);for(let e=0;e<C.length;e+=1)C[e]&&C[e].m(R,null);st||(pt=[Z(m,"input",a[4]),Z(g,"change",a[5]),Z(A,"input",a[6]),Z(B,"click",a[3])],st=!0)},p(t,[p]){if(p&6&&m.value!==t[1].docTitle&&G(m,t[1].docTitle),p&4){z=$(t[2]);let e;for(e=0;e<z.length;e+=1){const N=Ct(t,z,e);b[e]?b[e].p(N,p):(b[e]=gt(N),b[e].c(),b[e].m(g,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=z.length}if(p&6&&vt(g,t[1].docType),p&6&&G(A,t[1].uploadDate),p&1){F=$(t[0]);let e;for(e=0;e<F.length;e+=1){const N=bt(t,F,e);C[e]?C[e].p(N,p):(C[e]=Dt(N),C[e].c(),C[e].m(R,null))}for(;e<C.length;e+=1)C[e].d(1);C.length=F.length}},i:it,o:it,d(t){t&&(h(l),h(s),h(c),h(J),h(V),h(K),h(H)),mt(b,t),mt(C,t),st=!1,kt(pt)}}}function Bt(a,l,n){let s;xt(a,St,f=>n(7,s=f));const c=s.url.origin;let u=[],v=["Guarantee","Offer","Invoice","Order","Other"],d={docTitle:"",uploadDate:"",docType:"Other"};Ot(()=>{I()});function I(){Tt.get(c+"/api/doc").then(f=>{n(0,u=f.data)}).catch(f=>{alert("Could not get documents"),console.log(f)})}function S(){Tt.post(c+"/api/doc",d,{headers:{"Content-Type":"application/json"}}).then(f=>{alert("Document created"),I()}).catch(f=>{alert("Could not create document"),console.log(f)})}function m(){d.docTitle=this.value,n(1,d),n(2,v)}function L(){d.docType=Nt(this),n(1,d),n(2,v)}function D(){d.uploadDate=this.value,n(1,d),n(2,v)}return[u,d,v,S,m,L,D]}class Mt extends Lt{constructor(l){super(),It(this,l,Bt,At,yt,{})}}export{Mt as component};
