import{_ as w,t as v,v as y,x as b,a5 as U,g as H,G as O,R as $,O as K}from"./entry.0b3e10ad.js";const T={},P={viewBox:"0 0 24 24",fill:"currentColor"},B=b("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z",fill:"currentColor"},null,-1),D=[B];function J(e,t){return v(),y("svg",P,D)}const re=w(T,[["render",J]]),V={},N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},G=b("path",{d:"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"},null,-1),L=[G];function A(e,t){return v(),y("svg",N,L)}const le=w(V,[["render",A]]),W={},E={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},I=b("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"},null,-1),R=[I];function F(e,t){return v(),y("svg",E,R)}const se=w(W,[["render",F]]);function S(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let i=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,S),i}var z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(z||{}),q=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(q||{});function ge({visible:e=!0,features:t=0,ourProps:n,theirProps:i,...a}){var s;let l=C(i,n),g=Object.assign(a,{props:l});if(e||t&2&&l.static)return f(g);if(t&1){let u=(s=l.unmount)==null||s?0:1;return S(u,{0(){return null},1(){return f({...a,props:{...l,hidden:!0,style:{display:"none"}}})}})}return f(g)}function f({props:e,attrs:t,slots:n,slot:i,name:a}){var s,l;let{as:g,...u}=Q(e,["unmount","static"]),r=(s=n.default)==null?void 0:s.call(n,i),k={};if(i){let h=!1,m=[];for(let[d,c]of Object.entries(i))typeof c=="boolean"&&(h=!0),c===!0&&m.push(d);h&&(k["data-headlessui-state"]=m.join(" "))}if(g==="template"){if(r=j(r??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[h,...m]=r??[];if(!Y(h)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(o=>o.trim()).filter((o,p,M)=>M.indexOf(o)===p).sort((o,p)=>o.localeCompare(p)).map(o=>`  - ${o}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(o=>`  - ${o}`).join(`
`)].join(`
`));let d=C((l=h.props)!=null?l:{},u),c=U(h,d);for(let o in d)o.startsWith("on")&&(c.props||(c.props={}),c.props[o]=d[o]);return c}return Array.isArray(r)&&r.length===1?r[0]:r}return H(g,Object.assign({},u,k),{default:()=>r})}function j(e){return e.flatMap(t=>t.type===O?j(t.children):[t])}function C(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let i of e)for(let a in i)a.startsWith("on")&&typeof i[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(i[a])):t[a]=i[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(t,{[i](a,...s){let l=n[i];for(let g of l){if(a instanceof Event&&a.defaultPrevented)return;g(a,...s)}}});return t}function Q(e,t=[]){let n=Object.assign({},e);for(let i of t)i in n&&delete n[i];return n}function Y(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Z=0;function X(){return++Z}function ce(){return X()}function ue(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let x=Symbol("Context");var ee=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ee||{});function he(){return te()!==null}function te(){return $(x,null)}function de(e){K(x,e)}var ne=Object.defineProperty,ae=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t,n)=>(ae(e,typeof t!="symbol"?t+"":t,n),n);class ie{constructor(){_(this,"current",this.detect()),_(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let me=new ie;function pe(){return{navigation:[{id:1,name:"About",href:"/#about"},{id:2,name:"Skills",href:"/#skills"},{id:6,name:"Timeline",href:"/#timeline"},{id:3,name:"Works",href:"/#works"},{id:4,name:"Projects",href:"/#projects"},{id:5,name:"Contact",href:"/#contact"}],hobbies:[{title:"Eat Ice Cream",text:"Mood Booster :)",classBg:"bg-icecream"},{title:"Gaming",text:"To keep my mind relax",classBg:"bg-gaming"},{title:"Learning new technologies/framework",text:"To explore and expand my skillsets.",classBg:"bg-programming"},{title:"Hacking and Doing CTF ",text:"Palatform : TryHackMe, HackTheBox, PicoCTF ",classBg:"bg-hacking"}],skillWithLogo:[{imgUrl:"/logos/html5-original.svg",name:"HTML",alt:"HTML logo",width:150,height:150},{imgUrl:"/logos/css3-plain-wordmark.svg",name:"CSS",alt:"CSS logo",width:150,height:150},{imgUrl:"/logos/javascript-original.svg",name:"JavaScript",alt:"JavaScript logo",width:150,height:150},{imgUrl:"/logos/vuejs-original.svg",name:"Vue",alt:"Vue logo",width:150,height:150},{imgUrl:"/logos/nuxtjs-original.svg",name:"Nuxt",alt:"Nuxt logo",width:150,height:150},{imgUrl:"/logos/react-original.svg",name:"React",alt:"React logo",width:150,height:150},{imgUrl:"/logos/nextjs-original.svg",name:"Next",alt:"Next logo",width:150,height:150},{imgUrl:"/logos/tailwindcss-plain.svg",name:"TailwindCSS",alt:"TailwindCSS logo",width:150,height:150},{imgUrl:"/logos/nodejs-original.svg",name:"NodeJS",alt:"NodeJS logo",width:150,height:150},{imgUrl:"/logos/git-original.svg",name:"Git",alt:"Git logo",width:150,height:150},{imgUrl:"/logos/jquery-original.svg",name:"jQuery",alt:"jQuery logo",width:150,height:150},{imgUrl:"/logos/bootstrap-original.svg",name:"Bootstrap",alt:"Bootstrap logo",width:150,height:150},{imgUrl:"/logos/php-original.svg",name:"PHP",alt:"PHP logo",width:321,height:315},{imgUrl:"/logos/codeigniter-original.svg",name:"Codeigniter",alt:"Codeigniter logo",width:150,height:150},{imgUrl:"/logos/laravel-original.svg",name:"Laravel",alt:"Laravel logo",width:150,height:150},{imgUrl:"/logos/python-original.svg",name:"Python",alt:"Python logo",width:150,height:150},{imgUrl:"/logos/django-original.svg",name:"Django",alt:"Django logo",width:150,height:150},{imgUrl:"/logos/flask-original.svg",name:"Flask",alt:"Laravel logo",width:150,height:150}],projects:[{isReverse:!0,title:"Company Profile Website",titleColor:"text-white",filterColor:"bg-slate-500 mix-blend-hard-light",imageUrl:"/project-ss/djakarta-carwash.png",description:"A company profile website for car wash",techStack:["Nextjs","TailwindCSS"],isUrl:!0,urlLink:"https://www.youtube.com/watch?v=cfui2UPVuZg",githubLink:"https://github.com/dirqaharaka/djakarta-carwash-new"}],workingProjects:[{image:{src:"/work/kumala_logo.jpeg",alt:"Kumala",width:"410",height:"117",maxWidth:"max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]"},imageShowcase:[{title:"Kumala Honda DMS",src:"/work/kumala_honda.png",alt:"Kumala Honda DMS",width:"800",height:"446"},{title:"Kumala Hino DMS",src:"/work/kumala_hino.png",alt:"Kumala Hino DMS",width:"800",height:"404"},{title:"Kumala Mercedes DMS",src:"/work/kumala_mercedes.png",alt:"Kumala Mercedes DMS",width:"800",height:"637"},{title:"Kumala Marketing DMS",src:"/work/kumala_marketing.png",alt:"Kumala Marketing DMS",width:"800",height:"520"}],heading:"Kumala Group",description:`Kumala Group is a competitive company by developing mutually beneficial cooperation between leading national and international brands in various fields. 
      Kumala Group operates in the field of car sales and property business.`,teamMembers:[{name:"IT Kumala Group"}],techStack:["HTML","CSS","JavaScript","jQuery","Codeigniter 3","Mysql"],urls:[{name:"Kumala Group",link:"https://portal.kumalagroup.co.id/kmg/"}]}],timeline:[{date:"January 2023 - January 2024",title:"First Developer Role",description:"Joined Kumala Group as Junior Web Developer",link:{text:"Visit Kumala Group",url:"https://kumalagroup.co.id/"}},{date:"October 2022 - January 2023",title:"Self Taught Journey Begins",description:"Started my journey in self learning programming (web development) and join bootcamp"},{date:"February 2020 - June 2022",title:"Work as 3D Carver",description:"Began my job as a 3D Designer, CNC Machine Operator, and Carver in Hotel Kubah 9 Kendari",link:{text:"Visit Hotel Kubah 9 Kendari",url:"https://hotelkubah9.com/"}},{date:"July 2019 - February 2020",title:"Start University but not graduate 😊",description:"Not Completed my Bachelor's Degree in Informatic Engineering  at Hasanuddin University only 2 Semester"},{date:"September 2018 - July 2019",title:"Work as Cashier",description:"I work as cashier on a restaurant"},{date:"July 2016 - July 2018",title:"Start Senior High School",description:"Began my study in Public Senior High School 3 Malang",link:{text:"Visit SMAN 3 Malang",url:"https://www.sman3-malang.sch.id/"}}]}}export{he as C,ge as H,z as N,q as S,Q as T,re as _,le as a,se as b,de as c,me as d,pe as e,ee as l,ue as o,te as p,ce as t,S as u};
