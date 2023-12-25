import{t as _,v as y,x as b,r as h,o as H,N as F,a1 as D,c as T,d as U,O as ge,P as be,R as _e,_ as ce,V as we,z as E,A as S,F as w,I as B,T as W,G,H as Y,y as C,a4 as xe,E as R,B as Ie,M as ne,K as ae,C as ye,D as ke,J as Ee}from"./entry.0b3e10ad.js";import{u as Se}from"./vue.f36acd1f.7eaaaa9b.js";import{o as g,d as Z,u as de,c as Te,l as O,H as j,t as J,p as Me,N as oe,e as ve,_ as Ne,a as Pe,b as De}from"./const.21fb53ab.js";function Fe(e,n){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Ae(e,n){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})])}function Re(e,n){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})])}var x=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(x||{});function Le(e){throw new Error("Unexpected object: "+e)}var k=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(k||{});function $e(e,n){let a=n.resolveItems();if(a.length<=0)return null;let l=n.resolveActiveIndex(),t=l??-1,r=(()=>{switch(e.focus){case 0:return a.findIndex(s=>!n.resolveDisabled(s));case 1:{let s=a.slice().reverse().findIndex((u,f,i)=>t!==-1&&i.length-f-1>=t?!1:!n.resolveDisabled(u));return s===-1?s:a.length-1-s}case 2:return a.findIndex((s,u)=>u<=t?!1:!n.resolveDisabled(s));case 3:{let s=a.slice().reverse().findIndex(u=>!n.resolveDisabled(u));return s===-1?s:a.length-1-s}case 4:return a.findIndex(s=>n.resolveId(s)===e.id);case 5:return null;default:Le(e)}})();return r===-1?l:r}function re(e,n){if(e)return e;let a=n??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function Be(e,n){let a=h(re(e.value.type,e.value.as));return H(()=>{a.value=re(e.value.type,e.value.as)}),F(()=>{var l;a.value||g(n)&&g(n)instanceof HTMLButtonElement&&!((l=g(n))!=null&&l.hasAttribute("type"))&&(a.value="button")}),a}function Q(e){if(Z.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=g(e);if(n)return n.ownerDocument}return document}function Ce({container:e,accept:n,walk:a,enabled:l}){F(()=>{let t=e.value;if(!t||l!==void 0&&!l.value)return;let r=Q(e);if(!r)return;let s=Object.assign(f=>n(f),{acceptNode:n}),u=r.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)a(u.currentNode)})}let z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),Oe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Oe||{}),He=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(He||{});function fe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(z)).sort((n,a)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER)))}var ee=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ee||{});function te(e,n=0){var a;return e===((a=Q(e))==null?void 0:a.body)?!1:de(n,{0(){return e.matches(z)},1(){let l=e;for(;l!==null;){if(l.matches(z))return!0;l=l.parentElement}return!1}})}function me(e){let n=Q(e);D(()=>{n&&!te(n.activeElement,0)&&je(e)})}var Ue=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ue||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function je(e){e==null||e.focus({preventScroll:!0})}let Ke=["textarea","input"].join(",");function Ve(e){var n,a;return(a=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Ke))!=null?a:!1}function pe(e,n=a=>a){return e.slice().sort((a,l)=>{let t=n(a),r=n(l);if(t===null||r===null)return 0;let s=t.compareDocumentPosition(r);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function We(e,n){return qe(fe(),n,{relativeTo:e})}function qe(e,n,{sorted:a=!0,relativeTo:l=null,skipElements:t=[]}={}){var r;let s=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,u=Array.isArray(e)?a?pe(e):e:fe(e);t.length>0&&u.length>1&&(u=u.filter(m=>!t.includes(m))),l=l??s.activeElement;let f=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,u.indexOf(l))-1;if(n&4)return Math.max(0,u.indexOf(l))+1;if(n&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=n&32?{preventScroll:!0}:{},p=0,c=u.length,d;do{if(p>=c||p+c<=0)return 0;let m=i+p;if(n&16)m=(m+c)%c;else{if(m<0)return 3;if(m>=c)return 1}d=u[m],d==null||d.focus(o),p+=f}while(d!==s.activeElement);return n&6&&Ve(d)&&d.select(),2}function L(e,n,a){Z.isServer||F(l=>{document.addEventListener(e,n,a),l(()=>document.removeEventListener(e,n,a))})}function Ge(e,n,a){Z.isServer||F(l=>{window.addEventListener(e,n,a),l(()=>window.removeEventListener(e,n,a))})}function Ye(e,n,a=T(()=>!0)){function l(r,s){if(!a.value||r.defaultPrevented)return;let u=s(r);if(u===null||!u.getRootNode().contains(u))return;let f=function i(o){return typeof o=="function"?i(o()):Array.isArray(o)||o instanceof Set?o:[o]}(e);for(let i of f){if(i===null)continue;let o=i instanceof HTMLElement?i:g(i);if(o!=null&&o.contains(u)||r.composed&&r.composedPath().includes(o))return}return!te(u,ee.Loose)&&u.tabIndex!==-1&&r.preventDefault(),n(r,u)}let t=h(null);L("pointerdown",r=>{var s,u;a.value&&(t.value=((u=(s=r.composedPath)==null?void 0:s.call(r))==null?void 0:u[0])||r.target)},!0),L("mousedown",r=>{var s,u;a.value&&(t.value=((u=(s=r.composedPath)==null?void 0:s.call(r))==null?void 0:u[0])||r.target)},!0),L("click",r=>{t.value&&(l(r,()=>t.value),t.value=null)},!0),L("touchend",r=>l(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ge("blur",r=>l(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function le(e){return[e.screenX,e.screenY]}function ze(){let e=h([-1,-1]);return{wasMoved(n){let a=le(n);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(n){e.value=le(n)}}}let se=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ue(e){var n,a;let l=(n=e.innerText)!=null?n:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return l;let r=!1;for(let u of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),r=!0;let s=r?(a=t.innerText)!=null?a:"":l;return se.test(s)&&(s=s.replace(se,"")),s}function Xe(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let a=e.getAttribute("aria-labelledby");if(a){let l=a.split(" ").map(t=>{let r=document.getElementById(t);if(r){let s=r.getAttribute("aria-label");return typeof s=="string"?s.trim():ue(r).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return ue(e).trim()}function Ze(e){let n=h(""),a=h("");return()=>{let l=g(e);if(!l)return"";let t=l.innerText;if(n.value===t)return a.value;let r=Xe(l).trim().toLowerCase();return n.value=t,a.value=r,r}}var Je=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Je||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{});function et(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let he=Symbol("MenuContext");function K(e){let n=_e(he,null);if(n===null){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,K),a}return n}let tt=U({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:a}){let l=h(1),t=h(null),r=h(null),s=h([]),u=h(""),f=h(null),i=h(1);function o(c=d=>d){let d=f.value!==null?s.value[f.value]:null,m=pe(c(s.value.slice()),I=>g(I.dataRef.domRef)),v=d?m.indexOf(d):null;return v===-1&&(v=null),{items:m,activeItemIndex:v}}let p={menuState:l,buttonRef:t,itemsRef:r,items:s,searchQuery:u,activeItemIndex:f,activationTrigger:i,closeMenu:()=>{l.value=1,f.value=null},openMenu:()=>l.value=0,goToItem(c,d,m){let v=o(),I=$e(c===k.Specific?{focus:k.Specific,id:d}:{focus:c},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});u.value="",f.value=I,i.value=m??1,s.value=v.items},search(c){let d=u.value!==""?0:1;u.value+=c.toLowerCase();let m=(f.value!==null?s.value.slice(f.value+d).concat(s.value.slice(0,f.value+d)):s.value).find(I=>I.dataRef.textValue.startsWith(u.value)&&!I.dataRef.disabled),v=m?s.value.indexOf(m):-1;v===-1||v===f.value||(f.value=v,i.value=1)},clearSearch(){u.value=""},registerItem(c,d){let m=o(v=>[...v,{id:c,dataRef:d}]);s.value=m.items,f.value=m.activeItemIndex,i.value=1},unregisterItem(c){let d=o(m=>{let v=m.findIndex(I=>I.id===c);return v!==-1&&m.splice(v,1),m});s.value=d.items,f.value=d.activeItemIndex,i.value=1}};return Ye([t,r],(c,d)=>{var m;p.closeMenu(),te(d,ee.Loose)||(c.preventDefault(),(m=g(t))==null||m.focus())},T(()=>l.value===0)),ge(he,p),Te(T(()=>de(l.value,{0:O.Open,1:O.Closed}))),()=>{let c={open:l.value===0,close:p.closeMenu};return j({ourProps:{},theirProps:e,slot:c,slots:n,attrs:a,name:"Menu"})}}}),nt=U({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${J()}`}},setup(e,{attrs:n,slots:a,expose:l}){let t=K("MenuButton");l({el:t.buttonRef,$el:t.buttonRef});function r(i){switch(i.key){case x.Space:case x.Enter:case x.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),D(()=>{var o;(o=g(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(k.First)});break;case x.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),D(()=>{var o;(o=g(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(i){switch(i.key){case x.Space:i.preventDefault();break}}function u(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),D(()=>{var o;return(o=g(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),et(()=>{var o;return(o=g(t.itemsRef))==null?void 0:o.focus({preventScroll:!0})})))}let f=Be(T(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var i;let o={open:t.menuState.value===0},{id:p,...c}=e,d={ref:t.buttonRef,id:p,type:f.value,"aria-haspopup":"menu","aria-controls":(i=g(t.itemsRef))==null?void 0:i.id,"aria-expanded":t.menuState.value===0,onKeydown:r,onKeyup:s,onClick:u};return j({ourProps:d,theirProps:c,slot:o,attrs:n,slots:a,name:"MenuButton"})}}}),at=U({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${J()}`}},setup(e,{attrs:n,slots:a,expose:l}){let t=K("MenuItems"),r=h(null);l({el:t.itemsRef,$el:t.itemsRef}),Ce({container:T(()=>g(t.itemsRef)),enabled:T(()=>t.menuState.value===0),accept(o){return o.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:o.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(o){o.setAttribute("role","none")}});function s(o){var p;switch(r.value&&clearTimeout(r.value),o.key){case x.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case x.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeItemIndex.value!==null){let c=t.items.value[t.activeItemIndex.value];(p=g(c.dataRef.domRef))==null||p.click()}t.closeMenu(),me(g(t.buttonRef));break;case x.ArrowDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Next);case x.ArrowUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Previous);case x.Home:case x.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.First);case x.End:case x.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Last);case x.Escape:o.preventDefault(),o.stopPropagation(),t.closeMenu(),D(()=>{var c;return(c=g(t.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case x.Tab:o.preventDefault(),o.stopPropagation(),t.closeMenu(),D(()=>We(g(t.buttonRef),o.shiftKey?X.Previous:X.Next));break;default:o.key.length===1&&(t.search(o.key),r.value=setTimeout(()=>t.clearSearch(),350));break}}function u(o){switch(o.key){case x.Space:o.preventDefault();break}}let f=Me(),i=T(()=>f!==null?(f.value&O.Open)===O.Open:t.menuState.value===0);return()=>{var o,p;let c={open:t.menuState.value===0},{id:d,...m}=e,v={"aria-activedescendant":t.activeItemIndex.value===null||(o=t.items.value[t.activeItemIndex.value])==null?void 0:o.id,"aria-labelledby":(p=g(t.buttonRef))==null?void 0:p.id,id:d,onKeydown:s,onKeyup:u,role:"menu",tabIndex:0,ref:t.itemsRef};return j({ourProps:v,theirProps:m,slot:c,attrs:n,slots:a,features:oe.RenderStrategy|oe.Static,visible:i.value,name:"MenuItems"})}}}),ot=U({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${J()}`}},setup(e,{slots:n,attrs:a,expose:l}){let t=K("MenuItem"),r=h(null);l({el:r,$el:r});let s=T(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),u=Ze(r),f=T(()=>({disabled:e.disabled,get textValue(){return u()},domRef:r}));H(()=>t.registerItem(e.id,f)),be(()=>t.unregisterItem(e.id)),F(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&D(()=>{var v,I;return(I=(v=g(r))==null?void 0:v.scrollIntoView)==null?void 0:I.call(v,{block:"nearest"})})});function i(v){if(e.disabled)return v.preventDefault();t.closeMenu(),me(g(t.buttonRef))}function o(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,e.id)}let p=ze();function c(v){p.update(v)}function d(v){p.wasMoved(v)&&(e.disabled||s.value||t.goToItem(k.Specific,e.id,0))}function m(v){p.wasMoved(v)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:v}=e,I={active:s.value,disabled:v,close:t.closeMenu},{id:N,...P}=e;return j({ourProps:{id:N,ref:r,role:"menuitem",tabIndex:v===!0?void 0:-1,"aria-disabled":v===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:o,onPointerenter:c,onMouseenter:c,onPointermove:d,onMousemove:d,onPointerleave:m,onMouseleave:m},theirProps:{...a,...P},slot:I,attrs:a,slots:n,name:"MenuItem"})}}});function rt(){const e=h(!1);H(()=>{e.value=localStorage.getItem("theme")==="dark"});const n=()=>{e.value=!e.value,localStorage.setItem("theme",e.value?"dark":"light"),a()};function a(){const l=localStorage.getItem("theme");l==="dark"||!l&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")}return{enabled:e,toggleTheme:n,setTheme:a}}const lt=()=>({scrollTop:()=>{typeof window<"u"&&window.scrollTo(0,0)}});let ie=h(0);const st=()=>({currentOffsetHeight:ie,trackNavBarPosition:n=>{const a=document.getElementById(n);ie.value=a.offsetTop}}),q=""+globalThis.__publicAssetsURL("drxiiiq-bw.png"),$=""+globalThis.__publicAssetsURL("drxiiiq-wb.png");const ut=e=>(ye("data-v-1bf6ed96"),e=e(),ke(),e),it={class:"lg:w-1/12"},ct=["src"],dt=ut(()=>b("p",null,null,-1)),vt={key:0,class:"nav-links"},ft=["data-index","href"],mt={class:"lg:w-1/12 flex items-center justify-end gap-4"},pt={class:"ml-5 flex items-center"},ht={class:"menu-button"},gt={class:"menu-item-padding"},bt=["href"],_t={__name:"NavBar",props:{showNav:{type:Boolean,default:!0}},setup(e){Se({script:[{children:`if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`}]});const{enabled:n,toggleTheme:a}=rt();let l=h(!0);const t=we(),{scrollTop:r}=lt(),{trackNavBarPosition:s,currentOffsetHeight:u}=st(),{navigation:f}=ve(),i=h(0),o=h(0),p=h(0),c=h("bg-black text-white"),d=h($),m=()=>{s("nav-bar")},v=()=>{t.path!=="/"?window.location.href="/":r()},I=P=>{ae.set(P,{opacity:0})},N=(P,A)=>{ae.to(P,{opacity:1,duration:.8,delay:P.dataset.index*.2,onComplete:A})};return F(()=>{t.path==="/"?p.value<=640?u.value>i.value+o.value/2?(c.value="bg-white text-black dark:bg-[#121212]",d.value=q):(c.value="bg-black text-white",d.value=$):u.value>i.value-o.value/2?(c.value="bg-white text-black dark:bg-[#121212]",d.value=q):(c.value="bg-black text-white",d.value=$):(c.value="bg-white text-black dark:bg-[#121212]",d.value=q),n.value&&(d.value=$)}),H(()=>{m(),window.addEventListener("scroll",m),i.value=window.innerHeight,o.value=document.getElementById("nav-bar").offsetHeight,p.value=window.innerWidth,l.value=!1}),(P,A)=>(_(),y("nav",{id:"nav-bar",class:ne(["navPadding",w(c)]),style:{height:"70px"}},[b("div",it,[E(W,{appear:"",name:"fadeIn"},{default:S(()=>[w(l)?B("",!0):(_(),y("button",{key:0,type:"button","aria-label":"Website Logo",onClick:v},[b("img",{src:w(d),width:"40",height:"40",alt:"favicon",loading:"lazy"},null,8,ct),dt]))]),_:1})]),!w(l)&&e.showNav?(_(),y("div",vt,[E(xe,{appear:"",onBeforeEnter:I,onEnter:N},{default:S(()=>[(_(!0),y(G,null,Y(w(f),(M,V)=>(_(),y("a",{key:M.id,"data-index":V,href:M.href,class:"underAnimation"},C(M.name),9,ft))),128))]),_:1})])):B("",!0),b("div",mt,[b("div",pt,[b("button",{type:"button","aria-label":"theme toggle",onClick:A[0]||(A[0]=M=>w(a)())},[E(W,{name:"fade",mode:"out-in"},{default:S(()=>[w(n)?(_(),R(w(Ae),{key:1,class:"w-5 h-5"},{default:S(()=>[Ie("Dark mode")]),_:1})):(_(),R(w(Re),{key:0,class:"w-5 h-5"}))]),_:1})])]),e.showNav?(_(),R(w(tt),{key:0,as:"div",class:"mobile-hamburger"},{default:S(()=>[b("div",ht,[E(w(nt),{"aria-label":"Menu"},{default:S(()=>[E(w(Fe))]),_:1})]),E(W,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:S(()=>[E(w(at),{class:"menu-items"},{default:S(()=>[b("div",gt,[(_(!0),y(G,null,Y(w(f),M=>(_(),R(w(ot),{key:M},{default:S(({active:V})=>[b("a",{href:M.href,class:ne([V?"bg-gray-500 text-white":"text-gray-900","group"])},C(M.name),11,bt)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})):B("",!0)])],2))}},wt=ce(_t,[["__scopeId","data-v-1bf6ed96"]]),xt={class:"footer-section"},It={class:"social-icons-and-navigation"},yt={key:0},kt=["href"],Et={href:"https://www.instagram.com/drxiiiq/","aria-label":"Instagram",target:"_blank",class:"footerIcon"},St={href:"https://www.linkedin.com/in/dirqaharaka/","aria-label":"Linkden",target:"_blank",class:"footerIcon"},Tt={href:"https://github.com/dirqaharaka","aria-label":"Github",target:"_blank",class:"footerIcon"},Mt={class:"copyright"},Nt={__name:"Footer",props:{showNav:{type:Boolean,default:!0}},setup(e){const{navigation:n}=ve(),a=new Date().getFullYear();return(l,t)=>{const r=Ne,s=Pe,u=De;return _(),y("div",xt,[b("footer",null,[b("div",It,[e.showNav?(_(),y("nav",yt,[(_(!0),y(G,null,Y(w(n),(f,i)=>(_(),y("a",{key:f.id,href:f.href,class:"footerBtn"},C(f.name),9,kt))),128))])):B("",!0),b("div",null,[b("a",Et,[E(r)]),b("a",St,[E(s)]),b("a",Tt,[E(u)])])]),b("div",Mt," © "+C(w(a))+" - Present . All rights reserved. ",1)])])}}},Pt=Nt,Dt={},Ft={class:"flex flex-col justify-between min-h-screen"};function At(e,n){const a=wt,l=Pt;return _(),y("div",Ft,[E(a),Ee(e.$slots,"default"),E(l)])}const Bt=ce(Dt,[["render",At]]);export{Bt as default};
