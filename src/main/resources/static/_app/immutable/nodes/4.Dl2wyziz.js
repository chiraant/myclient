import{s as nt,e as at,n as Pe,c as Se,o as ot,f as qe,r as we}from"../chunks/scheduler.tEsTVdbL.js";import{S as it,i as rt,s as y,e as _,t as ae,f as I,c as p,a as D,l as z,d as f,b as ne,m as v,n as Y,g as O,h as o,r as De,o as x,q as Be,j as he,v as Ge,u as We}from"../chunks/index.DgfOQfiT.js";import{e as ge}from"../chunks/each.D6YF6ztN.js";import{p as ut}from"../chunks/stores.CrWdFf4T.js";import{a as re}from"../chunks/axios.9PTFF6AP.js";import{j as ft,i as ct,u as dt}from"../chunks/store.BWoSC4OR.js";import"../chunks/auth0-spa-js.production.esm.D13UjCU2.js";import"../chunks/entry.C0a98yuS.js";function Xe(t,e,s){const l=t.slice();return l[37]=e[s],l[39]=s,l}function Ye(t,e,s){const l=t.slice();return l[10]=e[s],l[40]=e,l[41]=s,l}function Je(t,e,s){const l=t.slice();return l[42]=e[s],l}function ht(t){let e,s=t[4]?"Hide Message Form":"Send a Message to the Administrator",l,c,i,a,u,b,P="Send Message",T,g,A;return{c(){e=_("button"),l=ae(s),c=y(),i=_("div"),a=_("textarea"),u=y(),b=_("button"),b.textContent=P,this.h()},l(d){e=p(d,"BUTTON",{class:!0});var r=D(e);l=ne(r,s),r.forEach(f),c=I(d),i=p(d,"DIV",{class:!0});var C=D(i);a=p(C,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),D(a).forEach(f),u=I(C),b=p(C,"BUTTON",{"data-svelte-h":!0}),z(b)!=="svelte-1i47fva"&&(b.textContent=P),C.forEach(f),this.h()},h(){v(e,"class","accordion-button svelte-o33m4w"),v(a,"class","message-textarea svelte-o33m4w"),v(a,"placeholder","Write your message here for the administrator"),v(a,"rows","4"),v(i,"class",T=qe(t[4]?"user-message-form active":"user-message-form")+" svelte-o33m4w")},m(d,r){O(d,e,r),o(e,l),O(d,c,r),O(d,i,r),o(i,a),Y(a,t[3]),o(i,u),o(i,b),g||(A=[x(e,"click",t[18]),x(a,"input",t[24]),x(b,"click",t[17])],g=!0)},p(d,r){r[0]&16&&s!==(s=d[4]?"Hide Message Form":"Send a Message to the Administrator")&&he(l,s),r[0]&8&&Y(a,d[3]),r[0]&16&&T!==(T=qe(d[4]?"user-message-form active":"user-message-form")+" svelte-o33m4w")&&v(i,"class",T)},d(d){d&&(f(e),f(c),f(i)),g=!1,we(A)}}}function _t(t){let e,s="Create Asset",l,c,i,a,u,b="Asset name",P,T,g,A,d,r,C="Purchase Date",n,E,q,j,U,F="Guarantee End",Q,M,Z,H,R="Submit",V,k;return{c(){e=_("h1"),e.textContent=s,l=y(),c=_("form"),i=_("div"),a=_("div"),u=_("label"),u.textContent=b,P=y(),T=_("input"),g=y(),A=_("div"),d=_("div"),r=_("label"),r.textContent=C,n=y(),E=_("input"),q=y(),j=_("div"),U=_("label"),U.textContent=F,Q=y(),M=_("input"),Z=y(),H=_("button"),H.textContent=R,this.h()},l(L){e=p(L,"H1",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-2752g2"&&(e.textContent=s),l=I(L),c=p(L,"FORM",{class:!0});var N=D(c);i=p(N,"DIV",{class:!0});var J=D(i);a=p(J,"DIV",{class:!0});var te=D(a);u=p(te,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),z(u)!=="svelte-irrc7u"&&(u.textContent=b),P=I(te),T=p(te,"INPUT",{class:!0,id:!0,type:!0}),te.forEach(f),J.forEach(f),g=I(N),A=p(N,"DIV",{class:!0});var ee=D(A);d=p(ee,"DIV",{class:!0});var $=D(d);r=p($,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),z(r)!=="svelte-1hiaxaq"&&(r.textContent=C),n=I($),E=p($,"INPUT",{class:!0,id:!0,type:!0}),$.forEach(f),q=I(ee),j=p(ee,"DIV",{class:!0});var oe=D(j);U=p(oe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),z(U)!=="svelte-enlo2c"&&(U.textContent=F),Q=I(oe),M=p(oe,"INPUT",{class:!0,id:!0,type:!0}),oe.forEach(f),ee.forEach(f),Z=I(N),H=p(N,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(H)!=="svelte-7ibw7x"&&(H.textContent=R),N.forEach(f),this.h()},h(){v(e,"class","mt-3"),v(u,"class","form-label"),v(u,"for","assetName"),v(T,"class","form-control"),v(T,"id","assetName"),v(T,"type","text"),v(a,"class","col"),v(i,"class","row mb-3"),v(r,"class","form-label"),v(r,"for","earnings"),v(E,"class","form-control"),v(E,"id","purchaseDate"),v(E,"type","date"),v(d,"class","col"),v(U,"class","form-label"),v(U,"for","earnings"),v(M,"class","form-control"),v(M,"id","guraranteeEnd"),v(M,"type","date"),v(j,"class","col"),v(A,"class","row mb-3"),v(H,"type","button"),v(H,"class","btn btn-primary"),v(c,"class","mb-5")},m(L,N){O(L,e,N),O(L,l,N),O(L,c,N),o(c,i),o(i,a),o(a,u),o(a,P),o(a,T),Y(T,t[10].assetName),o(c,g),o(c,A),o(A,d),o(d,r),o(d,n),o(d,E),Y(E,t[10].purchaseDate),o(A,q),o(A,j),o(j,U),o(j,Q),o(j,M),Y(M,t[10].guaranteeEnd),o(c,Z),o(c,H),V||(k=[x(T,"input",t[21]),x(E,"input",t[22]),x(M,"input",t[23]),x(H,"click",t[11])],V=!0)},p(L,N){N[0]&1024&&T.value!==L[10].assetName&&Y(T,L[10].assetName),N[0]&1024&&Y(E,L[10].purchaseDate),N[0]&1024&&Y(M,L[10].guaranteeEnd)},d(L){L&&(f(e),f(l),f(c)),V=!1,we(k)}}}function Ke(t){let e,s="Actions";return{c(){e=_("th"),e.textContent=s,this.h()},l(l){e=p(l,"TH",{scope:!0,"data-svelte-h":!0}),z(e)!=="svelte-l137bu"&&(e.textContent=s),this.h()},h(){v(e,"scope","col")},m(l,c){O(l,e,c)},d(l){l&&f(e)}}}function Qe(t){let e,s,l,c,i,a,u,b;function P(n,E){return n[10].assetState==="Unassigned"?vt:pt}let T=P(t),g=T(t),A=(t[10].assetState==="Assigned"||t[10].assetState==="InRepair")&&$e(t),d=t[10].assetState==="Assigned"&&xe(t),r=t[10].assetState==="InRepair"&&et(t),C=t[10].assetState!=="Disposed"&&tt(t);return{c(){e=_("td"),g.c(),s=y(),l=_("td"),A&&A.c(),c=y(),i=_("td"),d&&d.c(),a=y(),r&&r.c(),u=y(),b=_("td"),C&&C.c()},l(n){e=p(n,"TD",{});var E=D(e);g.l(E),E.forEach(f),s=I(n),l=p(n,"TD",{});var q=D(l);A&&A.l(q),q.forEach(f),c=I(n),i=p(n,"TD",{});var j=D(i);d&&d.l(j),a=I(j),r&&r.l(j),j.forEach(f),u=I(n),b=p(n,"TD",{});var U=D(b);C&&C.l(U),U.forEach(f)},m(n,E){O(n,e,E),g.m(e,null),O(n,s,E),O(n,l,E),A&&A.m(l,null),O(n,c,E),O(n,i,E),d&&d.m(i,null),o(i,a),r&&r.m(i,null),O(n,u,E),O(n,b,E),C&&C.m(b,null)},p(n,E){T===(T=P(n))&&g?g.p(n,E):(g.d(1),g=T(n),g&&(g.c(),g.m(e,null))),n[10].assetState==="Assigned"||n[10].assetState==="InRepair"?A?A.p(n,E):(A=$e(n),A.c(),A.m(l,null)):A&&(A.d(1),A=null),n[10].assetState==="Assigned"?d?d.p(n,E):(d=xe(n),d.c(),d.m(i,a)):d&&(d.d(1),d=null),n[10].assetState==="InRepair"?r?r.p(n,E):(r=et(n),r.c(),r.m(i,null)):r&&(r.d(1),r=null),n[10].assetState!=="Disposed"?C?C.p(n,E):(C=tt(n),C.c(),C.m(b,null)):C&&(C.d(1),C=null)},d(n){n&&(f(e),f(s),f(l),f(c),f(i),f(u),f(b)),g.d(),A&&A.d(),d&&d.d(),r&&r.d(),C&&C.d()}}}function pt(t){let e;return{c(){e=_("span")},l(s){e=p(s,"SPAN",{}),D(e).forEach(f)},m(s,l){O(s,e,l)},p:Pe,d(s){s&&f(e)}}}function vt(t){let e,s,l="select Email to assign",c,i,a,u,b,P,T=ge(t[7]),g=[];for(let r=0;r<T.length;r+=1)g[r]=Ze(Je(t,T,r));function A(){t[28].call(e,t[10])}function d(){return t[29](t[10])}return{c(){e=_("select"),s=_("option"),s.textContent=l;for(let r=0;r<g.length;r+=1)g[r].c();c=y(),i=_("button"),a=ae("Assign"),this.h()},l(r){e=p(r,"SELECT",{});var C=D(e);s=p(C,"OPTION",{"data-svelte-h":!0}),z(s)!=="svelte-zpfev4"&&(s.textContent=l);for(let E=0;E<g.length;E+=1)g[E].l(C);C.forEach(f),c=I(r),i=p(r,"BUTTON",{type:!0,class:!0});var n=D(i);a=ne(n,"Assign"),n.forEach(f),this.h()},h(){s.__value="",Y(s,s.__value),t[5][t[10].id]===void 0&&at(A),v(i,"type","button"),v(i,"class","btn btn-primary"),i.disabled=u=!t[5][t[10].id]},m(r,C){O(r,e,C),o(e,s);for(let n=0;n<g.length;n+=1)g[n]&&g[n].m(e,null);De(e,t[5][t[10].id],!0),O(r,c,C),O(r,i,C),o(i,a),b||(P=[x(e,"change",A),x(i,"click",d)],b=!0)},p(r,C){if(t=r,C[0]&128){T=ge(t[7]);let n;for(n=0;n<T.length;n+=1){const E=Je(t,T,n);g[n]?g[n].p(E,C):(g[n]=Ze(E),g[n].c(),g[n].m(e,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=T.length}C[0]&224&&De(e,t[5][t[10].id]),C[0]&224&&u!==(u=!t[5][t[10].id])&&(i.disabled=u)},d(r){r&&(f(e),f(c),f(i)),Be(g,r),b=!1,we(P)}}}function Ze(t){let e,s=t[42].email+"",l,c;return{c(){e=_("option"),l=ae(s),this.h()},l(i){e=p(i,"OPTION",{});var a=D(e);l=ne(a,s),a.forEach(f),this.h()},h(){e.__value=c=t[42].email,Y(e,e.__value)},m(i,a){O(i,e,a),o(e,l)},p(i,a){a[0]&128&&s!==(s=i[42].email+"")&&he(l,s),a[0]&128&&c!==(c=i[42].email)&&(e.__value=c,Y(e,e.__value))},d(i){i&&f(e)}}}function $e(t){let e,s,l,c,i;function a(){return t[30](t[10])}return{c(){e=_("button"),s=ae("Unassign"),this.h()},l(u){e=p(u,"BUTTON",{type:!0,class:!0});var b=D(e);s=ne(b,"Unassign"),b.forEach(f),this.h()},h(){v(e,"type","button"),v(e,"class","btn btn-warning"),e.disabled=l=t[10].assetState!=="Assigned"&&t[10].assetState!=="InRepair"},m(u,b){O(u,e,b),o(e,s),c||(i=x(e,"click",a),c=!0)},p(u,b){t=u,b[0]&192&&l!==(l=t[10].assetState!=="Assigned"&&t[10].assetState!=="InRepair")&&(e.disabled=l)},d(u){u&&f(e),c=!1,i()}}}function xe(t){let e,s="To Repair",l,c;function i(){return t[31](t[10])}return{c(){e=_("button"),e.textContent=s,this.h()},l(a){e=p(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1j17yxo"&&(e.textContent=s),this.h()},h(){v(e,"type","button"),v(e,"class","btn btn-info")},m(a,u){O(a,e,u),l||(c=x(e,"click",i),l=!0)},p(a,u){t=a},d(a){a&&f(e),l=!1,c()}}}function et(t){let e,s="Repaired",l,c;function i(){return t[32](t[10])}return{c(){e=_("button"),e.textContent=s,this.h()},l(a){e=p(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-15i7xfe"&&(e.textContent=s),this.h()},h(){v(e,"type","button"),v(e,"class","btn btn-success")},m(a,u){O(a,e,u),l||(c=x(e,"click",i),l=!0)},p(a,u){t=a},d(a){a&&f(e),l=!1,c()}}}function tt(t){let e,s="Dispose",l,c;function i(){return t[33](t[10])}return{c(){e=_("button"),e.textContent=s,this.h()},l(a){e=p(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-vl6hqu"&&(e.textContent=s),this.h()},h(){v(e,"type","button"),v(e,"class","btn btn-danger")},m(a,u){O(a,e,u),l||(c=x(e,"click",i),l=!0)},p(a,u){t=a},d(a){a&&f(e),l=!1,c()}}}function st(t){let e,s,l=t[10].assetName+"",c,i,a,u=t[10].assetState+"",b,P,T,g=t[10].purchaseDate+"",A,d,r,C=t[10].guaranteeEnd+"",n,E,q,j=(t[7].find(Z)?t[7].find(H).email:"Not Assinged")+"",U,F,Q=t[8]&&t[9].user_roles&&t[9].user_roles.includes("admin"),M;function Z(...V){return t[26](t[10],...V)}function H(...V){return t[27](t[10],...V)}let R=Q&&Qe(t);return{c(){e=_("tr"),s=_("td"),c=ae(l),i=y(),a=_("td"),b=ae(u),P=y(),T=_("td"),A=ae(g),d=y(),r=_("td"),n=ae(C),E=y(),q=_("td"),U=ae(j),F=y(),R&&R.c(),M=y()},l(V){e=p(V,"TR",{});var k=D(e);s=p(k,"TD",{});var L=D(s);c=ne(L,l),L.forEach(f),i=I(k),a=p(k,"TD",{});var N=D(a);b=ne(N,u),N.forEach(f),P=I(k),T=p(k,"TD",{});var J=D(T);A=ne(J,g),J.forEach(f),d=I(k),r=p(k,"TD",{});var te=D(r);n=ne(te,C),te.forEach(f),E=I(k),q=p(k,"TD",{});var ee=D(q);U=ne(ee,j),ee.forEach(f),F=I(k),R&&R.l(k),M=I(k),k.forEach(f)},m(V,k){O(V,e,k),o(e,s),o(s,c),o(e,i),o(e,a),o(a,b),o(e,P),o(e,T),o(T,A),o(e,d),o(e,r),o(r,n),o(e,E),o(e,q),o(q,U),o(e,F),R&&R.m(e,null),o(e,M)},p(V,k){t=V,k[0]&64&&l!==(l=t[10].assetName+"")&&he(c,l),k[0]&64&&u!==(u=t[10].assetState+"")&&he(b,u),k[0]&64&&g!==(g=t[10].purchaseDate+"")&&he(A,g),k[0]&64&&C!==(C=t[10].guaranteeEnd+"")&&he(n,C),k[0]&192&&j!==(j=(t[7].find(Z)?t[7].find(H).email:"Not Assinged")+"")&&he(U,j),k[0]&768&&(Q=t[8]&&t[9].user_roles&&t[9].user_roles.includes("admin")),Q?R?R.p(t,k):(R=Qe(t),R.c(),R.m(e,M)):R&&(R.d(1),R=null)},d(V){V&&f(e),R&&R.d()}}}function lt(t){let e,s,l=t[39]+1+"",c,i;return{c(){e=_("li"),s=_("a"),c=ae(l),i=y(),this.h()},l(a){e=p(a,"LI",{class:!0});var u=D(e);s=p(u,"A",{class:!0,href:!0});var b=D(s);c=ne(b,l),b.forEach(f),i=I(u),u.forEach(f),this.h()},h(){v(s,"class","page-link"),v(s,"href","/assets?page="+(t[39]+1)),Ge(s,"active",t[0]==t[39]+1),v(e,"class","page-item")},m(a,u){O(a,e,u),o(e,s),o(s,c),o(e,i)},p(a,u){u[0]&1&&Ge(s,"active",a[0]==a[39]+1)},d(a){a&&f(e)}}}function mt(t){let e,s,l,c,i='<label for="assetState" class="col-form-label">Asset State:</label>',a,u,b,P,T="All",g,A="Assigned",d,r="Unassigned",C,n="In Repair",E,q="Disposed",j,U,F,Q,M,Z,H,R="All Assets",V,k,L,N,J,te="Name",ee,$,oe="State",Ce,ie,Ae="Purchase Date",Ee,h,w="Guarantee End",ue,fe,Ue="Person",Ne,ye=t[8]&&t[9].user_roles&&t[9].user_roles.includes("admin"),Ie,_e,Te,pe,ce,Oe,je;function Re(m,B){if(B[0]&768&&(e=null),e==null&&(e=!!(m[8]&&m[9].user_roles&&m[9].user_roles.includes("admin"))),e)return _t;if(m[8])return ht}let ve=Re(t,[-1,-1]),X=ve&&ve(t),K=ye&&Ke(),me=ge(t[6]),G=[];for(let m=0;m<me.length;m+=1)G[m]=st(Ye(t,me,m));let be=ge(Array(t[1])),W=[];for(let m=0;m<be.length;m+=1)W[m]=lt(Xe(t,be,m));return{c(){X&&X.c(),s=y(),l=_("div"),c=_("div"),c.innerHTML=i,a=y(),u=_("div"),b=_("select"),P=_("option"),P.textContent=T,g=_("option"),g.textContent=A,d=_("option"),d.textContent=r,C=_("option"),C.textContent=n,E=_("option"),E.textContent=q,j=y(),U=_("div"),F=_("a"),Q=ae("Apply"),Z=y(),H=_("h1"),H.textContent=R,V=y(),k=_("table"),L=_("thead"),N=_("tr"),J=_("th"),J.textContent=te,ee=y(),$=_("th"),$.textContent=oe,Ce=y(),ie=_("th"),ie.textContent=Ae,Ee=y(),h=_("th"),h.textContent=w,ue=y(),fe=_("th"),fe.textContent=Ue,Ne=y(),K&&K.c(),Ie=y(),_e=_("tbody");for(let m=0;m<G.length;m+=1)G[m].c();Te=y(),pe=_("nav"),ce=_("ul");for(let m=0;m<W.length;m+=1)W[m].c();this.h()},l(m){X&&X.l(m),s=I(m),l=p(m,"DIV",{class:!0});var B=D(l);c=p(B,"DIV",{class:!0,"data-svelte-h":!0}),z(c)!=="svelte-1dnqikf"&&(c.innerHTML=i),a=I(B),u=p(B,"DIV",{class:!0});var S=D(u);b=p(S,"SELECT",{class:!0,id:!0,type:!0});var se=D(b);P=p(se,"OPTION",{"data-svelte-h":!0}),z(P)!=="svelte-1pdfkpo"&&(P.textContent=T),g=p(se,"OPTION",{"data-svelte-h":!0}),z(g)!=="svelte-93w33i"&&(g.textContent=A),d=p(se,"OPTION",{"data-svelte-h":!0}),z(d)!=="svelte-1wknmlq"&&(d.textContent=r),C=p(se,"OPTION",{"data-svelte-h":!0}),z(C)!=="svelte-8t3men"&&(C.textContent=n),E=p(se,"OPTION",{"data-svelte-h":!0}),z(E)!=="svelte-1wjl17a"&&(E.textContent=q),se.forEach(f),S.forEach(f),j=I(B),U=p(B,"DIV",{class:!0});var Le=D(U);F=p(Le,"A",{class:!0,href:!0,role:!0});var ze=D(F);Q=ne(ze,"Apply"),ze.forEach(f),Le.forEach(f),B.forEach(f),Z=I(m),H=p(m,"H1",{"data-svelte-h":!0}),z(H)!=="svelte-10ruias"&&(H.textContent=R),V=I(m),k=p(m,"TABLE",{class:!0});var ke=D(k);L=p(ke,"THEAD",{});var Me=D(L);N=p(Me,"TR",{});var le=D(N);J=p(le,"TH",{scope:!0,"data-svelte-h":!0}),z(J)!=="svelte-z0rb3w"&&(J.textContent=te),ee=I(le),$=p(le,"TH",{scope:!0,"data-svelte-h":!0}),z($)!=="svelte-66wttk"&&($.textContent=oe),Ce=I(le),ie=p(le,"TH",{scope:!0,"data-svelte-h":!0}),z(ie)!=="svelte-1euyrxw"&&(ie.textContent=Ae),Ee=I(le),h=p(le,"TH",{scope:!0,"data-svelte-h":!0}),z(h)!=="svelte-q407ge"&&(h.textContent=w),ue=I(le),fe=p(le,"TH",{scope:!0,"data-svelte-h":!0}),z(fe)!=="svelte-1e495jq"&&(fe.textContent=Ue),Ne=I(le),K&&K.l(le),le.forEach(f),Me.forEach(f),Ie=I(ke),_e=p(ke,"TBODY",{});var He=D(_e);for(let de=0;de<G.length;de+=1)G[de].l(He);He.forEach(f),ke.forEach(f),Te=I(m),pe=p(m,"NAV",{});var Ve=D(pe);ce=p(Ve,"UL",{class:!0});var Fe=D(ce);for(let de=0;de<W.length;de+=1)W[de].l(Fe);Fe.forEach(f),Ve.forEach(f),this.h()},h(){v(c,"class","col-auto"),P.__value="ALL",Y(P,P.__value),g.__value="ASSIGNED",Y(g,g.__value),d.__value="UNASSIGNED",Y(d,d.__value),C.__value="IN_REPAIR",Y(C,C.__value),E.__value="DISPOSED",Y(E,E.__value),v(b,"class","form-select"),v(b,"id","assetState"),v(b,"type","text"),t[2]===void 0&&at(()=>t[25].call(b)),v(u,"class","col-3"),v(F,"class","btn btn-primary"),v(F,"href",M="/assets?page=1&assetState="+t[2]),v(F,"role","button"),v(U,"class","col-3"),v(l,"class","row my-3"),v(J,"scope","col"),v($,"scope","col"),v(ie,"scope","col"),v(h,"scope","col"),v(fe,"scope","col"),v(k,"class","table"),v(ce,"class","pagination")},m(m,B){X&&X.m(m,B),O(m,s,B),O(m,l,B),o(l,c),o(l,a),o(l,u),o(u,b),o(b,P),o(b,g),o(b,d),o(b,C),o(b,E),De(b,t[2],!0),o(l,j),o(l,U),o(U,F),o(F,Q),O(m,Z,B),O(m,H,B),O(m,V,B),O(m,k,B),o(k,L),o(L,N),o(N,J),o(N,ee),o(N,$),o(N,Ce),o(N,ie),o(N,Ee),o(N,h),o(N,ue),o(N,fe),o(N,Ne),K&&K.m(N,null),o(k,Ie),o(k,_e);for(let S=0;S<G.length;S+=1)G[S]&&G[S].m(_e,null);O(m,Te,B),O(m,pe,B),o(pe,ce);for(let S=0;S<W.length;S+=1)W[S]&&W[S].m(ce,null);Oe||(je=x(b,"change",t[25]),Oe=!0)},p(m,B){if(ve===(ve=Re(m,B))&&X?X.p(m,B):(X&&X.d(1),X=ve&&ve(m),X&&(X.c(),X.m(s.parentNode,s))),B[0]&4&&De(b,m[2]),B[0]&4&&M!==(M="/assets?page=1&assetState="+m[2])&&v(F,"href",M),B[0]&768&&(ye=m[8]&&m[9].user_roles&&m[9].user_roles.includes("admin")),ye?K||(K=Ke(),K.c(),K.m(N,null)):K&&(K.d(1),K=null),B[0]&127968){me=ge(m[6]);let S;for(S=0;S<me.length;S+=1){const se=Ye(m,me,S);G[S]?G[S].p(se,B):(G[S]=st(se),G[S].c(),G[S].m(_e,null))}for(;S<G.length;S+=1)G[S].d(1);G.length=me.length}if(B[0]&3){be=ge(Array(m[1]));let S;for(S=0;S<be.length;S+=1){const se=Xe(m,be,S);W[S]?W[S].p(se,B):(W[S]=lt(se),W[S].c(),W[S].m(ce,null))}for(;S<W.length;S+=1)W[S].d(1);W.length=be.length}},i:Pe,o:Pe,d(m){m&&(f(s),f(l),f(Z),f(H),f(V),f(k),f(Te),f(pe)),X&&X.d(m),K&&K.d(),Be(G,m),Be(W,m),Oe=!1,je()}}}let bt=10;function gt(t,e,s){let l,c,i,a;Se(t,ft,h=>s(19,l=h)),Se(t,ut,h=>s(20,c=h)),Se(t,ct,h=>s(8,i=h)),Se(t,dt,h=>s(9,a=h));const u=c.url.origin;let b,P=0,T,g="",A=!1,d={},r=[],C=[],n={assetName:null,purchaseDate:null,guaranteeEnd:null,assetState:null,personId:null};ot(()=>{q()});function E(){let h="?pageSize="+bt+"&pageNumber="+(b-1);T&&(h+="&state="+T),re.get(`${u}/api/asset`+h,{headers:{"Content-Type":"application/json"+h,Authorization:"Bearer "+l}}).then(w=>{s(6,r=w.data.content),r.forEach(ue=>{s(5,d[ue.id]="",d),s(1,P=w.data.totalPages)})}).catch(w=>console.error("Error fetching assets",w))}function q(){re.get(u+"/api/person",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(h=>s(7,C=h.data)).catch(h=>{alert("Could not get persons"),console.log(h)})}function j(){re.post(u+"/api/asset",n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(h=>{alert("Asset created"),E()}).catch(h=>{alert("Could not create asset"),console.log(h)})}function U(h){re.put(`${u}/api/asset/${h}/unassign`,h,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(w=>{alert("Asset unassigned"),E()}).catch(w=>{alert("Failed to unassign asset"),console.log(w)})}function F(h){if(!d[h]){alert("Please select an email to assign");return}const w={assetId:h,personEmail:d[h]};re.put(`${u}/api/service/assignasset`,w,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(ue=>{alert("Asset assigned"),E()}).catch(ue=>{alert("Failed to assign asset"),console.error(ue)})}function Q(h){re.put(`${u}/api/asset/${h}/repair`,h,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(w=>{alert("Asset in in repair"),E()}).catch(w=>{alert("Failed to set assetstate to in Repair"),console.log(w)})}function M(h){re.put(`${u}/api/asset/${h}/repaired`,h,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(w=>{alert("Asset is repaired"),E()}).catch(w=>{alert("Failed to set assetstate to in Assigned"),console.log(w)})}function Z(h){re.put(`${u}/api/asset/${h}/dispose`,h,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(w=>{alert("Asset is disposed"),E()}).catch(w=>{alert("Failed to set assetstate to disposed"),console.log(w)})}function H(){const h={to:"chiraant@students.zhaw.ch",subject:"Message from User",message:g};re.post(`${u}/api/send-email`,h,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(()=>{alert("Message sent successfully!"),s(3,g=""),R()}).catch(w=>{console.error("Failed to send message:",w),alert("Failed to send message.")})}function R(){s(4,A=!A)}function V(){n.assetName=this.value,s(10,n)}function k(){n.purchaseDate=this.value,s(10,n)}function L(){n.guaranteeEnd=this.value,s(10,n)}function N(){g=this.value,s(3,g)}function J(){T=We(this),s(2,T)}const te=(h,w)=>w.id===h.personId,ee=(h,w)=>w.id===h.personId;function $(h){d[h.id]=We(this),s(5,d),s(7,C)}const oe=h=>F(h.id),Ce=h=>U(h.id),ie=h=>Q(h.id),Ae=h=>M(h.id),Ee=h=>Z(h.id);return t.$$.update=()=>{if(t.$$.dirty[0]&1572864&&l!==""){let h=c.url.searchParams;h.has("page")?s(0,b=h.get("page")):s(0,b="1"),E()}},[b,P,T,g,A,d,r,C,i,a,n,j,U,F,Q,M,Z,H,R,l,c,V,k,L,N,J,te,ee,$,oe,Ce,ie,Ae,Ee]}class yt extends it{constructor(e){super(),rt(this,e,gt,mt,nt,{},null,[-1,-1])}}export{yt as component};
