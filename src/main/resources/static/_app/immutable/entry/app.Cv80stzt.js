const __vite__fileDeps=["../nodes/0.D8-OKCMh.js","../chunks/scheduler.tEsTVdbL.js","../chunks/index.ATyCX7m3.js","../chunks/store.BvkCnN22.js","../chunks/entry.DeVIZEnh.js","../chunks/auth.service.B5VZU7zV.js","../chunks/auth0-spa-js.production.esm.D13UjCU2.js","../chunks/axios.9PTFF6AP.js","../assets/0.BK2W_-xO.css","../nodes/1.BUJdUHhA.js","../chunks/stores.D0Ird9OT.js","../nodes/2.DRaV5lxY.js","../nodes/3.mC0VhYrL.js","../nodes/4.DjmGXHEF.js","../chunks/each.D6YF6ztN.js","../assets/4.B0-BmRGN.css","../nodes/5.B8bfb8Fu.js","../nodes/6.DSuf9tHc.js","../nodes/7.Bdy3Qo5d.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,j as q,o as U,b as I,t as j}from"../chunks/scheduler.tEsTVdbL.js";import{S as z,i as F,s as W,k as h,f as G,g as k,x as g,y as A,w,d as b,e as H,c as J,a as K,m as O,z as p,t as Q,b as X,j as Y,A as D,B as y,C as R,D as T,E as P,F as L}from"../chunks/index.ATyCX7m3.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},d=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const v=_[E];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),f)return new Promise((E,v)=>{u.addEventListener("load",E),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},re={};function $(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=y(s,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=y(s,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=y(s,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(b),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&b(e),n&&n.d()}}}function C(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,i,s,_;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=W(),f&&f.c(),s=h()},l(l){n.l(l),i=G(l),f&&f.l(l),s=h()},m(l,m){r[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,s,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?r[e].p(l,m):(D(),g(r[u],1,1,()=>{r[u]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(b(i),b(s)),r[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;q(i.page.notify);let l=!1,m=!1,u=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function E(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,_,r,o,f,l,m,u,i,s,E,v,B]}class oe extends z{constructor(e){super(),F(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.D8-OKCMh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>d(()=>import("../nodes/1.BUJdUHhA.js"),__vite__mapDeps([9,1,2,10,4]),import.meta.url),()=>d(()=>import("../nodes/2.DRaV5lxY.js"),__vite__mapDeps([11,1,2,5,6,3,4,7]),import.meta.url),()=>d(()=>import("../nodes/3.mC0VhYrL.js"),__vite__mapDeps([12,1,2,3,4,6]),import.meta.url),()=>d(()=>import("../nodes/4.DjmGXHEF.js"),__vite__mapDeps([13,1,2,14,10,4,7,3,6,15]),import.meta.url),()=>d(()=>import("../nodes/5.B8bfb8Fu.js"),__vite__mapDeps([16,1,2,14,7,10,4,3]),import.meta.url),()=>d(()=>import("../nodes/6.DSuf9tHc.js"),__vite__mapDeps([17,1,2,14,7,10,4,3]),import.meta.url),()=>d(()=>import("../nodes/7.Bdy3Qo5d.js"),__vite__mapDeps([18,1,2,3,4,5,6,7]),import.meta.url)],le=[],fe={"/":[2],"/account":[3],"/assets":[4],"/docs":[5],"/persons":[6],"/signup":[7]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};