import E from"./CXaWgFvD.js";import{_ as I,a as U,P as K,i as W,m as P,d as h,b as D,t as w}from"./C8bXpliK.js";import{k as z,l as o,H as d,L as f,I as F,a4 as C,J as $,a3 as y,M as L,N as _,G as x,P as M,U as X,ae as Y,af as O,p as Z,i as G,y as ee,z as ae,a as re,t as H,a5 as j,V as te}from"./EBjLtFvi.js";import{_ as ie}from"./Dheurwdb.js";function ne(e,i){const a={...e};for(const r of i)delete a[r];return a}function oe(e,i,a){typeof i=="string"&&(i=i.split(".").map(n=>{const t=Number(n);return isNaN(t)?n:t}));let r=e;for(const n of i){if(r==null)return a;r=r[n]}return r!==void 0?r:a}const B={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},se={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},le=e=>Object.keys(B).reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),ze=e=>[...Object.keys(B),...Object.keys(se)].reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),de=z({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const i=U();return{dynamic:o(()=>{var r,n;return e.dynamic||((n=(r=i.ui)==null?void 0:r.icons)==null?void 0:n.dynamic)})}}});function ue(e,i,a,r,n,t){const s=E;return e.dynamic?(d(),f(s,{key:0,name:e.name},null,8,["name"])):(d(),F("span",{key:1,class:C(e.name)},null,2))}const R=I(de,[["render",ue]]),ge=z({inheritAttrs:!1,props:{...B,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(a,r,{isActive:n,isExactActive:t}){return e.exactQuery&&!W(a.query,r.query)||e.exactHash&&a.hash!==r.hash?e.inactiveClass:e.exact&&t||!e.exact&&n?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),ce=["href","aria-disabled","role","rel","target","onClick"];function fe(e,i,a,r,n,t){const s=ie;return e.to?(d(),f(s,x({key:1},e.$props,{custom:""}),{default:$(({route:g,href:p,target:u,rel:v,navigate:b,isActive:c,isExactActive:k,isExternal:q})=>[X("a",x(e.$attrs,{href:e.disabled?void 0:p,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:v,target:u,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(g,e._.provides[K]||e.$route,{isActive:c,isExactActive:k}),onClick:m=>!q&&!e.disabled&&b(m)}),[y(e.$slots,"default",L(_({isActive:e.active!==void 0?e.active:e.exact?k:c})))],16,ce)]),_:3},16)):(d(),f(M(e.as),x({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:$(()=>[y(e.$slots,"default",L(_({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const V=I(ge,[["render",fe]]),Q=(e,i,a,r,n=!1)=>{const t=Y(),s=U(),g=o(()=>{var c;const u=O(i),v=O(a),b=O(r);return P((u==null?void 0:u.strategy)||((c=s.ui)==null?void 0:c.strategy),b?{wrapper:b}:{},u||{},n?oe(s.ui,e,{}):{},v||{})}),p=o(()=>ne(t,["class"]));return{ui:g,attrs:p}};function pe({ui:e,props:i}){const a=re();if(Z("ButtonGroupContextConsumer",!0),G("ButtonGroupContextConsumer",!1))return{size:o(()=>i.size),rounded:o(()=>e.value.rounded)};let n=a.parent,t;for(;n&&!t;){if(n.type.name==="ButtonGroup"){t=G(`group-${n.uid}`);break}n=n.parent}const s=o(()=>t==null?void 0:t.value.children.indexOf(a));return ee(()=>{t==null||t.value.register(a)}),ae(()=>{t==null||t.value.unregister(a)}),{size:o(()=>(t==null?void 0:t.value.size)||i.size),rounded:o(()=>!t||s.value===-1?e.value.rounded:t.value.children.length===1?t.value.ui.rounded:s.value===0?t.value.rounded.start:s.value===t.value.children.length-1?t.value.rounded.end:"rounded-none")}}const be={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},S={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...S});const J={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},T={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...S,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...J});const Be={...J,form:"form-select",placeholder:"text-gray-400 dark:text-gray-500",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}};({...T,option:{...T.option},arrow:{...S}});const ye={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"};({...S});const l=P(h.ui.strategy,h.ui.button,be),ve=z({components:{UIcon:R,ULink:V},inheritAttrs:!1,props:{...B,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...h.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:a,attrs:r}=Q("button",H(e,"ui"),l),{size:n,rounded:t}=pe({ui:a,props:e}),s=o(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),g=o(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),p=o(()=>e.square||!i.default&&!e.label),u=o(()=>{var A,N;const m=((N=(A=a.value.color)==null?void 0:A[e.color])==null?void 0:N[e.variant])||a.value.variant[e.variant];return D(w(a.value.base,a.value.font,t.value,a.value.size[n.value],a.value.gap[n.value],e.padded&&a.value[p.value?"square":"padding"][n.value],m==null?void 0:m.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),v=o(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),b=o(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),c=o(()=>w(a.value.icon.base,a.value.icon.size[n.value],e.loading&&a.value.icon.loading)),k=o(()=>w(a.value.icon.base,a.value.icon.size[n.value],e.loading&&!s.value&&a.value.icon.loading)),q=o(()=>le(e));return{ui:a,attrs:r,isLeading:s,isTrailing:g,isSquare:p,buttonClass:u,leadingIconName:v,trailingIconName:b,leadingIconClass:c,trailingIconClass:k,linkProps:q}}});function me(e,i,a,r,n,t){const s=R,g=V;return d(),f(g,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:$(()=>[y(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),f(s,{key:0,name:e.leadingIconName,class:C(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)]),y(e.$slots,"default",{},()=>[e.label?(d(),F("span",{key:0,class:C([e.truncate?e.ui.truncate:""])},te(e.label),3)):j("",!0)]),y(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),f(s,{key:0,name:e.trailingIconName,class:C(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)])]),_:3},16,["type","disabled","class"])}const Se=I(ve,[["render",me]]),xe=P(h.ui.strategy,h.ui.container,ye),he=z({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:a}=Q("container",H(e,"ui"),xe),r=o(()=>D(w(i.value.base,i.value.padding,i.value.constrained),e.class));return{ui:i,attrs:a,containerClass:r}}});function ke(e,i,a,r,n,t){return d(),f(M(e.as),x({class:e.containerClass},e.attrs),{default:$(()=>[y(e.$slots,"default")]),_:3},16,["class"])}const qe=I(he,[["render",ke]]);export{R as _,Se as a,qe as b,S as c,pe as d,ze as e,V as f,oe as g,J as i,Be as s,Q as u};