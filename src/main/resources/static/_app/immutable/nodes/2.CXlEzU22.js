import{s as ae,n as te,c as se,b as ne,r as ie}from"../chunks/scheduler.tEsTVdbL.js";import{S as re,i as oe,k as le,g as E,d as f,e as r,s as I,c as o,a as w,l as D,f as V,m as n,h as a,n as B,o as z,p as ue,t as J,b as O,j as de}from"../chunks/index.ATyCX7m3.js";import{a as ce}from"../chunks/auth.service.Bzd07wJl.js";import{i as ve,u as fe}from"../chunks/store.DrAv8jMa.js";function pe(_){let l,c,u,e,s,d="Login",b,C,i,p,h,m="Email",M,t,v,L,G="Please provide your username.",N,k,g,K="Password",S,y,U,P,Q="Please provide your password.",F,q,X='<div class="col"><button type="submit" class="btn btn-primary">Log in</button></div> <div class="col-auto"><a href="/signup">Sign up</a></div>',R,Y;return{c(){l=r("div"),c=r("div"),u=r("div"),e=r("div"),s=r("div"),s.textContent=d,b=I(),C=r("div"),i=r("form"),p=r("div"),h=r("label"),h.textContent=m,M=I(),t=r("input"),v=I(),L=r("div"),L.textContent=G,N=I(),k=r("div"),g=r("label"),g.textContent=K,S=I(),y=r("input"),U=I(),P=r("div"),P.textContent=Q,F=I(),q=r("div"),q.innerHTML=X,this.h()},l(x){l=o(x,"DIV",{class:!0});var A=w(l);c=o(A,"DIV",{class:!0});var Z=w(c);u=o(Z,"DIV",{class:!0});var $=w(u);e=o($,"DIV",{class:!0});var W=w(e);s=o(W,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-12u6jkm"&&(s.textContent=d),b=V(W),C=o(W,"DIV",{class:!0});var ee=w(C);i=o(ee,"FORM",{class:!0});var T=w(i);p=o(T,"DIV",{class:!0});var j=w(p);h=o(j,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),D(h)!=="svelte-1oly4sk"&&(h.textContent=m),M=V(j),t=o(j,"INPUT",{type:!0,class:!0,id:!0,name:!0}),v=V(j),L=o(j,"DIV",{class:!0,"data-svelte-h":!0}),D(L)!=="svelte-aqtf20"&&(L.textContent=G),j.forEach(f),N=V(T),k=o(T,"DIV",{class:!0});var H=w(k);g=o(H,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),D(g)!=="svelte-1exn9hw"&&(g.textContent=K),S=V(H),y=o(H,"INPUT",{type:!0,class:!0,id:!0,name:!0}),U=V(H),P=o(H,"DIV",{class:!0,"data-svelte-h":!0}),D(P)!=="svelte-1dk83pj"&&(P.textContent=Q),H.forEach(f),F=V(T),q=o(T,"DIV",{class:!0,"data-svelte-h":!0}),D(q)!=="svelte-vztfrq"&&(q.innerHTML=X),T.forEach(f),ee.forEach(f),W.forEach(f),$.forEach(f),Z.forEach(f),A.forEach(f),this.h()},h(){n(s,"class","card-header"),n(h,"for","username"),n(h,"class","form-label"),n(t,"type","text"),n(t,"class","form-control"),n(t,"id","username"),n(t,"name","username"),t.required=!0,n(L,"class","invalid-feedback"),n(p,"class","mb-3"),n(g,"for","password"),n(g,"class","form-label"),n(y,"type","password"),n(y,"class","form-control"),n(y,"id","password"),n(y,"name","password"),y.required=!0,n(P,"class","invalid-feedback"),n(k,"class","mb-3"),n(q,"class","row align-items-end"),n(i,"class","needs-validation"),i.noValidate=!0,n(C,"class","card-body"),n(e,"class","card"),n(u,"class","col-md-6"),n(c,"class","row justify-content-center"),n(l,"class","container mt-5")},m(x,A){E(x,l,A),a(l,c),a(c,u),a(u,e),a(e,s),a(e,b),a(e,C),a(C,i),a(i,p),a(p,h),a(p,M),a(p,t),B(t,_[0]),a(p,v),a(p,L),a(i,N),a(i,k),a(k,g),a(k,S),a(k,y),B(y,_[1]),a(k,U),a(k,P),a(i,F),a(i,q),_[8](i),R||(Y=[z(t,"input",_[6]),z(y,"input",_[7]),z(i,"submit",ue(_[5]))],R=!0)},p(x,A){A&1&&t.value!==x[0]&&B(t,x[0]),A&2&&y.value!==x[1]&&B(y,x[1])},d(x){x&&f(l),_[8](null),R=!1,ie(Y)}}}function me(_){let l,c="This is MyClient",u,e,s,d=_[4].given_name+"",b,C,i,p,h,m,M="We love to see you back here! Just as a tipp, MyClient is only useful, if you give him love and attention.";return{c(){l=r("h1"),l.textContent=c,u=I(),e=r("h3"),s=J("Welcome, "),b=J(d),C=J("!"),i=I(),p=r("br"),h=I(),m=r("p"),m.textContent=M},l(t){l=o(t,"H1",{"data-svelte-h":!0}),D(l)!=="svelte-pnbt71"&&(l.textContent=c),u=V(t),e=o(t,"H3",{});var v=w(e);s=O(v,"Welcome, "),b=O(v,d),C=O(v,"!"),v.forEach(f),i=V(t),p=o(t,"BR",{}),h=V(t),m=o(t,"P",{"data-svelte-h":!0}),D(m)!=="svelte-bkpkby"&&(m.textContent=M)},m(t,v){E(t,l,v),E(t,u,v),E(t,e,v),a(e,s),a(e,b),a(e,C),E(t,i,v),E(t,p,v),E(t,h,v),E(t,m,v)},p(t,v){v&16&&d!==(d=t[4].given_name+"")&&de(b,d)},d(t){t&&(f(l),f(u),f(e),f(i),f(p),f(h),f(m))}}}function _e(_){let l;function c(s,d){return s[3]?me:pe}let u=c(_),e=u(_);return{c(){e.c(),l=le()},l(s){e.l(s),l=le()},m(s,d){e.m(s,d),E(s,l,d)},p(s,[d]){u===(u=c(s))&&e?e.p(s,d):(e.d(1),e=u(s),e&&(e.c(),e.m(l.parentNode,l)))},i:te,o:te,d(s){s&&f(l),e.d(s)}}}function he(_,l,c){let u,e;se(_,ve,m=>c(3,u=m)),se(_,fe,m=>c(4,e=m));let s="",d="",b;function C(){b.checkValidity()&&(console.log("login"),ce.login(s,d)),b.classList.add("was-validated")}function i(){s=this.value,c(0,s)}function p(){d=this.value,c(1,d)}function h(m){ne[m?"unshift":"push"](()=>{b=m,c(2,b)})}return[s,d,b,u,e,C,i,p,h]}class xe extends re{constructor(l){super(),oe(this,l,he,_e,ae,{})}}export{xe as component};