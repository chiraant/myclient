import{s as dt,n as nt,r as ft,c as pt,o as ht}from"../chunks/scheduler.B8ClD4bx.js";import{S as _t,i as mt,e as n,s as E,c as r,k as R,f as x,a as L,d,l as u,g as H,h as e,m as Y,n as X,o as vt,t as Z,b as $,j as tt}from"../chunks/index.o_Xq34i8.js";import{e as rt,a as ct}from"../chunks/axios.Bvw451kA.js";import{p as bt}from"../chunks/stores.B3hbzJZs.js";function it(m,l,T){const v=m.slice();return v[1]=l[T],v}function ut(m){let l,T,v=m[1].docTitle+"",c,C,o,h=m[1].docType+"",k,B,f,D=m[1].uploadDate+"",a,g;return{c(){l=n("tr"),T=n("td"),c=Z(v),C=E(),o=n("td"),k=Z(h),B=E(),f=n("td"),a=Z(D),g=E()},l(p){l=r(p,"TR",{});var b=L(l);T=r(b,"TD",{});var M=L(T);c=$(M,v),M.forEach(d),C=x(b),o=r(b,"TD",{});var y=L(o);k=$(y,h),y.forEach(d),B=x(b),f=r(b,"TD",{});var V=L(f);a=$(V,D),V.forEach(d),g=x(b),b.forEach(d)},m(p,b){H(p,l,b),e(l,T),e(T,c),e(l,C),e(l,o),e(o,k),e(l,B),e(l,f),e(f,a),e(l,g)},p(p,b){b&1&&v!==(v=p[1].docTitle+"")&&tt(c,v),b&1&&h!==(h=p[1].docType+"")&&tt(k,h),b&1&&D!==(D=p[1].uploadDate+"")&&tt(a,D)},d(p){p&&d(l)}}}function Tt(m){let l,T="Create Document",v,c,C,o,h,k="Document",B,f,D,a,g,p,b="Upload Date",M,y,V,G,J,I,et="Submit",S,U,lt="All Documents",q,A,N,ot='<tr><th scope="col">Title</th> <th scope="col">Type</th> <th scope="col">Upload Date</th></tr>',K,O,Q,at,P=rt(m[0]),_=[];for(let t=0;t<P.length;t+=1)_[t]=ut(it(m,P,t));return{c(){l=n("h1"),l.textContent=T,v=E(),c=n("form"),C=n("div"),o=n("div"),h=n("label"),h.textContent=k,B=E(),f=n("input"),D=E(),a=n("div"),g=n("div"),p=n("label"),p.textContent=b,M=E(),y=n("input"),V=E(),G=n("br"),J=E(),I=n("button"),I.textContent=et,S=E(),U=n("h1"),U.textContent=lt,q=E(),A=n("table"),N=n("thead"),N.innerHTML=ot,K=E(),O=n("tbody");for(let t=0;t<_.length;t+=1)_[t].c();this.h()},l(t){l=r(t,"H1",{class:!0,"data-svelte-h":!0}),R(l)!=="svelte-jbgafh"&&(l.textContent=T),v=x(t),c=r(t,"FORM",{class:!0});var i=L(c);C=r(i,"DIV",{class:!0});var s=L(C);o=r(s,"DIV",{class:!0});var j=L(o);h=r(j,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(h)!=="svelte-6zs6xx"&&(h.textContent=k),B=x(j),f=r(j,"INPUT",{class:!0,id:!0,type:!0}),j.forEach(d),s.forEach(d),D=x(i),a=r(i,"DIV",{class:!0});var w=L(a);g=r(w,"DIV",{class:!0});var z=L(g);p=r(z,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(p)!=="svelte-1o83y1u"&&(p.textContent=b),M=x(z),y=r(z,"INPUT",{class:!0,id:!0,type:!0}),z.forEach(d),V=x(w),G=r(w,"BR",{}),w.forEach(d),J=x(i),I=r(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(I)!=="svelte-18c4rwj"&&(I.textContent=et),i.forEach(d),S=x(t),U=r(t,"H1",{"data-svelte-h":!0}),R(U)!=="svelte-17lkpc5"&&(U.textContent=lt),q=x(t),A=r(t,"TABLE",{class:!0});var F=L(A);N=r(F,"THEAD",{"data-svelte-h":!0}),R(N)!=="svelte-8tq9lc"&&(N.innerHTML=ot),K=x(F),O=r(F,"TBODY",{});var st=L(O);for(let W=0;W<_.length;W+=1)_[W].l(st);st.forEach(d),F.forEach(d),this.h()},h(){u(l,"class","mt-3"),u(h,"class","form-label"),u(h,"for","docTitle"),u(f,"class","form-control"),u(f,"id","docTitle"),u(f,"type","text"),u(o,"class","col"),u(C,"class","row mb-3"),u(p,"class","form-label"),u(p,"for","upload"),u(y,"class","form-control"),u(y,"id","purchaseDate"),u(y,"type","date"),u(g,"class","col"),u(a,"class","col-sm-6"),u(I,"type","button"),u(I,"class","btn btn-primary"),u(c,"class","mb-5"),u(A,"class","table")},m(t,i){H(t,l,i),H(t,v,i),H(t,c,i),e(c,C),e(C,o),e(o,h),e(o,B),e(o,f),Y(f,m[1].docTitle),e(c,D),e(c,a),e(a,g),e(g,p),e(g,M),e(g,y),Y(y,m[1].uploadDate),e(a,V),e(a,G),e(c,J),e(c,I),H(t,S,i),H(t,U,i),H(t,q,i),H(t,A,i),e(A,N),e(A,K),e(A,O);for(let s=0;s<_.length;s+=1)_[s]&&_[s].m(O,null);Q||(at=[X(f,"input",m[3]),X(y,"input",m[4]),X(I,"click",m[2])],Q=!0)},p(t,[i]){if(i&2&&f.value!==t[1].docTitle&&Y(f,t[1].docTitle),i&2&&Y(y,t[1].uploadDate),i&1){P=rt(t[0]);let s;for(s=0;s<P.length;s+=1){const j=it(t,P,s);_[s]?_[s].p(j,i):(_[s]=ut(j),_[s].c(),_[s].m(O,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=P.length}},i:nt,o:nt,d(t){t&&(d(l),d(v),d(c),d(S),d(U),d(q),d(A)),vt(_,t),Q=!1,ft(at)}}}function Dt(m,l,T){let v;pt(m,bt,D=>T(5,v=D));const c=v.url.origin;let C=[],o={docTitle:null,uploadDate:null,docType:null};ht(()=>{h()});function h(){var D={method:"get",url:c+"/api/doc",headers:{}};ct(D).then(function(a){T(0,C=a.data)}).catch(function(a){alert("Could not get documents"),console.log(a)})}function k(){var D={method:"post",url:c+"/api/doc",headers:{"Content-Type":"application/json"},data:o};ct(D).then(function(a){alert("Document created"),h()}).catch(function(a){alert("Could not create Document"),console.log(a)})}function B(){o.docTitle=this.value,T(1,o)}function f(){o.uploadDate=this.value,T(1,o)}return[C,o,k,B,f]}class xt extends _t{constructor(l){super(),mt(this,l,Dt,Tt,dt,{})}}export{xt as component};