import{n as lt,s as le,t as fe}from"./scheduler.DrKogcTQ.js";new URL("sveltekit-internal://");function ue(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function de(t){return t.split("%25").map(decodeURI).join("%25")}function he(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ft({href:t}){return t.split("#")[0]}const pe=["href","pathname","search","toString","toJSON"];function ge(t,n,e){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of pe)Object.defineProperty(a,r,{get(){return n(),t[r]},enumerable:!0,configurable:!0});return a}const me="/__data.json",_e=".html__data.json";function ye(t){return t.endsWith(".html")?t.replace(/\.html$/,_e):t.replace(/\/$/,"")+me}function we(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function ve(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const qt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(mt(t)),qt(t,n));const G=new Map;function be(t,n){const e=mt(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&G.set(e,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=ve(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function Ee(t,n,e){if(G.size>0){const a=mt(t,e),r=G.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);G.delete(a)}}return window.fetch(n,e)}function mt(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${we(...r)}"]`}return a}const ke=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Se(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Re(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ut(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=ke.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ut(c)}).join("")}).join("")}/?$`),params:n}}function Ae(t){return!/^\([^)]+\)$/.test(t)}function Re(t){return t.slice(1).split("/").filter(Ae)}function Ie(t,n,e){const a={},r=t.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){a[c.name]=l;const u=n[s+1],h=r[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Le({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Se(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Ie(f,g,a)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[r.has(s),t[s]]}}function Vt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Pt(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}const O=[];function _t(t,n=lt){let e;const a=new Set;function r(s){if(le(t,s)&&(t=s,e)){const c=!O.length;for(const l of a)l[1](),O.push(l,t);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){r(s(t))}function i(s,c=lt){const l=[s,c];return a.add(l),a.size===1&&(e=n(r,o)||lt),s(t),()=>{a.delete(l),a.size===0&&e&&(e(),e=null)}}return{set:r,update:o,subscribe:i}}var Dt;const P=((Dt=globalThis.__sveltekit_16sqq1j)==null?void 0:Dt.base)??"";var Ct;const Pe=((Ct=globalThis.__sveltekit_16sqq1j)==null?void 0:Ct.assets)??P,Te="1715331413465",Ft="sveltekit:snapshot",Gt="sveltekit:scroll",Mt="sveltekit:states",Ue="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Ht(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function yt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Tt={...J,"":J.hover};function Bt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Kt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Bt(t)}}function ht(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!a||at(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===z&&t.hasAttribute("download");return{url:e,external:r,target:a,download:o}}function W(t){let n=null,e=null,a=null,r=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)a===null&&(a=j(s,"preload-code")),r===null&&(r=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Bt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Tt[a??"off"],preload_data:Tt[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ut(t){const n=_t(t);let e=!0;function a(){e=!0,n.update(i=>i)}function r(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function xe(){const{set:t,subscribe:n}=_t(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${Pe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Te;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:a}}function at(t,n){return t.origin!==z||!t.pathname.startsWith(n)}const Ne=-1,Oe=-2,je=-3,$e=-4,De=-5,Ce=-6;function qe(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,i=!1){if(o===Ne)return;if(o===je)return NaN;if(o===$e)return 1/0;if(o===De)return-1/0;if(o===Ce)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=e[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<s.length;d+=1)u.add(r(s[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<s.length;d+=2)h.set(r(s[d]),r(s[d+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=r(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Oe&&(c[l]=r(u))}}else{const c={};a[o]=c;for(const l in s){const u=s[l];c[l]=r(u)}}return a[o]}return r(0)}const zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...zt];const Ve=new Set([...zt]);[...Ve];function Fe(t){return t.filter(n=>n!=null)}class rt{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Yt{constructor(n,e){this.status=n,this.location=e}}class wt extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const Ge="x-sveltekit-invalidated",Me="x-sveltekit-trailing-slash";function X(t){return t instanceof rt||t instanceof wt?t.status:500}function He(t){return t instanceof wt?t.text:"Internal Error"}const N=Vt(Gt)??{},B=Vt(Ft)??{},U={url:Ut({}),page:Ut({}),navigating:_t(null),updated:xe()};function vt(t){N[t]=yt()}function Be(t,n){let e=t+1;for(;N[e];)delete N[e],e+=1;for(e=n+1;B[e];)delete B[e],e+=1}function q(t){return location.href=t.href,new Promise(()=>{})}function xt(){}let ot,pt,Z,T,gt,V;const Jt=[],Q=[];let R=null;const Wt=[],Ke=[];let $=[],y={branch:[],error:null,url:null},bt=!1,tt=!1,Nt=!0,K=!1,F=!1,Xt=!1,Et=!1,kt,S,L,I,et;const M=new Set;async function an(t,n,e){var r,o;document.URL!==location.href&&(location.href=location.href),V=t,ot=Le(t),T=document.documentElement,gt=n,pt=t.nodes[0],Z=t.nodes[1],pt(),Z(),S=(r=history.state)==null?void 0:r[D],L=(o=history.state)==null?void 0:o[H],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[H]:L},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await tn(gt,e):Ze(location.href,{replaceState:!0}),Qe()}function ze(){Jt.length=0,Et=!1}function Zt(t){Q.some(n=>n==null?void 0:n.snapshot)&&(B[t]=Q.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function Qt(t){var n;(n=B[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=Q[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function Ot(){vt(S),Pt(Gt,N),Zt(L),Pt(Ft,B)}async function te(t,n,e,a){return Y({type:"goto",url:Ht(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(Et=!0)}})}async function Ye(t){if(t.id!==(R==null?void 0:R.id)){const n={};M.add(n),R={id:t.id,token:n,promise:ne({...t,preload:n}).then(e=>(M.delete(n),e.type==="loaded"&&e.state.error&&(R=null),e))}}return R.promise}async function dt(t){const n=ot.find(e=>e.exec(ae(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ee(t,n,e){var o;y=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=t.props.page,kt=new V.root({target:n,props:{...t.props,stores:U,components:Q},hydrate:e}),Qt(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(r)),tt=!0}async function nt({url:t,params:n,branch:e,status:a,error:r,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=ue(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Fe(e).map(d=>d.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},u=!I,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==r||i!==void 0&&i!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:u?l:I.data}),c}async function St({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(a,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:ge(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const A=new URL(b,e);return s&&d(A.href),A.origin===e.origin&&(b=A.href.slice(e.origin.length)),tt?Ee(b,A.href,m):be(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function jt(t,n,e,a,r,o){if(Et)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==y.params[i])return!0;for(const i of r.dependencies)if(Jt.some(s=>s(new URL(i))))return!0;return!1}function At(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Je(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&e.delete(a)}return e}function $t({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:I,constructors:[]}}}async function ne({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===t)return M.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=r,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Je(y.url,e);let _=!1;const f=l.map((p,v)=>{var x;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||jt(_,g,h,d,(x=E.server)==null?void 0:x.uses,a));return k&&(_=!0),k});if(f.some(Boolean)){try{u=await se(e,f)}catch(p){const v=await C(p,{url:e,params:a,route:{id:t}});return M.has(o)?$t({error:v,url:e,params:a,route:r}):st({status:X(p),error:v,url:e,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(p,v)=>{var it;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!jt(b,g,h,d,(it=E.universal)==null?void 0:it.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return St({loader:p[1],url:e,params:a,route:r,parent:async()=>{var Lt;const It={};for(let ct=0;ct<v;ct+=1)Object.assign(It,(Lt=await A[ct])==null?void 0:Lt.data);return It},server_data_node:At(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await A[p])}catch(v){if(v instanceof Yt)return{type:"redirect",location:v.location};if(M.has(o))return $t({error:await C(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let E=X(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof rt)k=v.body;else{if(await U.updated.check())return await q(e);k=await C(v,{params:a,url:e,route:{id:r.id}})}const x=await We(p,w,i);return x?await nt({url:e,params:a,branch:w.slice(0,x.idx).concat(x.node),status:E,error:k,route:r}):await oe(e,{id:r.id},k,E)}else w.push(void 0);return await nt({url:e,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function We(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function st({status:t,error:n,url:e,route:a}){const r={};let o=null;if(V.server_loads[0]===0)try{const l=await se(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==z||e.pathname!==location.pathname||bt)&&await q(e)}const s=await St({loader:pt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:At(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await nt({url:e,params:r,branch:[s,c],status:t,error:n,route:null})}function Rt(t,n){if(!t||at(t,P))return;let e;try{e=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const a=ae(e);for(const r of ot){const o=r.exec(a);if(o)return{id:t.pathname+t.search,invalidating:n,route:r,params:he(o),url:t}}}function ae(t){return de(t.slice(P.length)||"/")}function re({url:t,type:n,intent:e,delta:a}){let r=!1;const o=ce(y,e,t,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return K||Wt.forEach(s=>s(i)),r?null:o}async function Y({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=xt,block:u=xt}){const h=Rt(n,!1),g=re({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),K=!0,tt&&U.navigating.set(g.navigation),et=c;let f=h&&await ne(h);if(!f){if(at(n,P))return await q(n);f=await oe(n,{id:null},await C(new wt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,et!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await st({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return te(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await q(n);if(ze(),vt(d),Zt(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[D]:S+=w,[H]:L+=w,[Mt]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Be(S,L)}if(R=null,f.props.page.state=i,tt){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Ke.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){$=$.filter(v=>!w.includes(v))};w.push(p),$.push(...w)}kt.$set(f.props),Xt=!0}else ee(f,gt,!1);const{activeElement:m}=document;await fe();const b=e?e.scroll:r?yt():null;if(Nt){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&en(),Nt=!0,f.props.page&&(I=f.props.page),K=!1,t==="popstate"&&Qt(L),g.fulfil(void 0),$.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function oe(t,n,e,a){return t.origin===z&&t.pathname===location.pathname&&!bt?await st({status:a,error:e,url:t,route:n}):await q(t)}function Xe(){let t;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{a(i,2)},20)});function n(o){a(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(dt(i.target.href),e.unobserve(i.target))},{threshold:0});function a(o,i){const s=Kt(o,T);if(!s)return;const{url:c,external:l,download:u}=ht(s,P);if(l||u)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Rt(c,!1);g&&Ye(g)}else i<=h.preload_code&&dt(c.pathname)}function r(){e.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=ht(o,P);if(s||c)continue;const l=W(o);l.reload||(l.preload_code===J.viewport&&e.observe(o),l.preload_code===J.eager&&dt(i.pathname))}}$.push(r),r()}function C(t,n){if(t instanceof rt)return t.body;const e=X(t),a=He(t);return V.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function Ze(t,n={}){return t=Ht(t),t.origin!==z?Promise.reject(new Error("goto: invalid URL")):te(t,n,0)}function Qe(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(Ot(),!K){const r=ce(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Wt.forEach(i=>i(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ot()}),(n=navigator.connection)!=null&&n.saveData||Xe(),T.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Kt(e.composedPath()[0],T);if(!a)return;const{url:r,external:o,target:i,download:s}=ht(a,P);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;if(o||c.reload){re({url:r,type:"link"})?K=!0:e.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===ft(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,vt(S),t(r),!c.replace_state)return;F=!1}e.preventDefault(),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),T.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(at(i,P))return;const s=e.target,c=W(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=r==null?void 0:r.getAttribute("name");u&&l.append(u,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),Y({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[D]){const r=e.state[D];if(et={},r===S)return;const o=N[r],i=e.state[Mt]??{},s=new URL(e.state[Ue]??location.href),c=e.state[H],l=ft(location)===ft(y.url);if(c===L&&(Xt||l)){t(s),N[S]=yt(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},kt.$set({page:I})),S=r;return}const h=r-S;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:et})}else if(!F){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[D]:++S,[H]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...I,url:e}),U.page.notify()}}async function tn(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:i,form:s}){bt=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Rt(c,!1)||{});let l;try{const u=a.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=ie(f.uses)),St({loader:V.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:At(f)})}),h=await Promise.all(u),g=ot.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=await nt({url:c,params:r,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Yt){await q(new URL(u.location,location.href));return}l=await st({status:X(u),error:await C(u,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ee(l,t,!0)}async function se(t,n){var r;const e=new URL(t);e.pathname=ye(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Me,"1"),e.searchParams.append(Ge,n.map(o=>o?"1":"0").join(""));const a=await qt(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new rt(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function l(g){return qe(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=ie(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:A}=f,w=i.get(m);i.delete(m),A?w.reject(l(A)):w.fulfil(l(b))}}}})}function ie(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function en(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function ce(t,n,e,a){var c,l;let r,o;const i=new Promise((u,h)=>{r=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{an as a,U as s};
