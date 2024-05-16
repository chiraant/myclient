import{s as K,e as Q,u as R,g as W,f as X,c as B}from"../chunks/scheduler.D0jLBuvl.js";import{S as Y,i as Z,e as b,s as C,c as g,a as H,l as D,f as E,d,m as n,g as y,h as L,w as ee,x as te,t as ae,b as le,o as se,j as ne}from"../chunks/index.BCH3_lsL.js";import{i as ie,u as re}from"../chunks/axios.E3K1qWMS.js";import{a as oe}from"../chunks/auth.service.COKdIa8L.js";const ue=!1,ce=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce,ssr:ue},Symbol.toStringTag,{value:"Module"}));function $(r){let e,a='<a class="nav-link" aria-current="page" href="/assets">MyAssets</a>';return{c(){e=b("li"),e.innerHTML=a,this.h()},l(t){e=g(t,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-gqmdj0"&&(e.innerHTML=a),this.h()},h(){n(e,"class","nav-item")},m(t,u){y(t,e,u)},d(t){t&&d(e)}}}function F(r){let e,a='<a class="nav-link" href="/docs">MyDocuments</a>';return{c(){e=b("li"),e.innerHTML=a,this.h()},l(t){e=g(t,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1qgor6w"&&(e.innerHTML=a),this.h()},h(){n(e,"class","nav-item")},m(t,u){y(t,e,u)},d(t){t&&d(e)}}}function G(r){let e,a='<a class="nav-link" href="/persons">MyPersons</a>';return{c(){e=b("li"),e.innerHTML=a,this.h()},l(t){e=g(t,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1rfdnep"&&(e.innerHTML=a),this.h()},h(){n(e,"class","nav-item")},m(t,u){y(t,e,u)},d(t){t&&d(e)}}}function J(r){let e,a=r[1].name+"",t,u,c,o="Log Out",m,I;return{c(){e=b("span"),t=ae(a),u=C(),c=b("button"),c.textContent=o,this.h()},l(i){e=g(i,"SPAN",{class:!0});var s=H(e);t=le(s,a),s.forEach(d),u=E(i),c=g(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),D(c)!=="svelte-ha1d8x"&&(c.textContent=o),this.h()},h(){n(e,"class","navbar-text me-2"),n(c,"type","button"),n(c,"class","btn btn-primary")},m(i,s){y(i,e,s),L(e,t),y(i,u,s),y(i,c,s),m||(I=se(c,"click",oe.logout),m=!0)},p(i,s){s&2&&a!==(a=i[1].name+"")&&ne(t,a)},d(i){i&&(d(e),d(u),d(c)),m=!1,I()}}}function fe(r){let e,a,t,u="MyClient",c,o,m='<span class="navbar-toggler-icon"></span>',I,i,s,O,S,x=r[0]&&r[1].user_roles&&r[1].user_roles.includes("admin"),w,M,V,k,N,_=r[0]&&$(),v=r[0]&&F(),h=x&&G(),f=r[0]&&J(r);const P=r[3].default,p=Q(P,r,r[2],null);return{c(){e=b("nav"),a=b("div"),t=b("a"),t.textContent=u,c=C(),o=b("button"),o.innerHTML=m,I=C(),i=b("div"),s=b("ul"),_&&_.c(),O=C(),v&&v.c(),S=C(),h&&h.c(),w=C(),M=b("div"),f&&f.c(),V=C(),k=b("div"),p&&p.c(),this.h()},l(l){e=g(l,"NAV",{class:!0});var T=H(e);a=g(T,"DIV",{class:!0});var q=H(a);t=g(q,"A",{class:!0,href:!0,"data-svelte-h":!0}),D(t)!=="svelte-qlp8iz"&&(t.textContent=u),c=E(q),o=g(q,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),D(o)!=="svelte-1nsq9qc"&&(o.innerHTML=m),I=E(q),i=g(q,"DIV",{class:!0,id:!0});var j=H(i);s=g(j,"UL",{class:!0});var A=H(s);_&&_.l(A),O=E(A),v&&v.l(A),S=E(A),h&&h.l(A),A.forEach(d),w=E(j),M=g(j,"DIV",{class:!0});var U=H(M);f&&f.l(U),U.forEach(d),j.forEach(d),q.forEach(d),T.forEach(d),V=E(l),k=g(l,"DIV",{class:!0});var z=H(k);p&&p.l(z),z.forEach(d),this.h()},h(){n(t,"class","navbar-brand"),n(t,"href","/"),n(o,"class","navbar-toggler"),n(o,"type","button"),n(o,"data-bs-toggle","collapse"),n(o,"data-bs-target","#navbarNav"),n(o,"aria-controls","navbarNav"),n(o,"aria-expanded","false"),n(o,"aria-label","Toggle navigation"),n(s,"class","navbar-nav me-auto mb-2 mb-lg-0"),n(M,"class","d-flex"),n(i,"class","collapse navbar-collapse"),n(i,"id","navbarNav"),n(a,"class","container-fluid"),n(e,"class","navbar navbar-expand-lg bg-light"),n(k,"class","container mt-3")},m(l,T){y(l,e,T),L(e,a),L(a,t),L(a,c),L(a,o),L(a,I),L(a,i),L(i,s),_&&_.m(s,null),L(s,O),v&&v.m(s,null),L(s,S),h&&h.m(s,null),L(i,w),L(i,M),f&&f.m(M,null),y(l,V,T),y(l,k,T),p&&p.m(k,null),N=!0},p(l,[T]){l[0]?_||(_=$(),_.c(),_.m(s,O)):_&&(_.d(1),_=null),l[0]?v||(v=F(),v.c(),v.m(s,S)):v&&(v.d(1),v=null),T&3&&(x=l[0]&&l[1].user_roles&&l[1].user_roles.includes("admin")),x?h||(h=G(),h.c(),h.m(s,null)):h&&(h.d(1),h=null),l[0]?f?f.p(l,T):(f=J(l),f.c(),f.m(M,null)):f&&(f.d(1),f=null),p&&p.p&&(!N||T&4)&&R(p,P,l,l[2],N?X(P,l[2],T,null):W(l[2]),null)},i(l){N||(ee(p,l),N=!0)},o(l){te(p,l),N=!1},d(l){l&&(d(e),d(V),d(k)),_&&_.d(),v&&v.d(),h&&h.d(),f&&f.d(),p&&p.d(l)}}}function de(r,e,a){let t,u;B(r,ie,m=>a(0,t=m)),B(r,re,m=>a(1,u=m));let{$$slots:c={},$$scope:o}=e;return r.$$set=m=>{"$$scope"in m&&a(2,o=m.$$scope)},[t,u,o,c]}class be extends Y{constructor(e){super(),Z(this,e,de,fe,K,{})}}export{be as component,pe as universal};
