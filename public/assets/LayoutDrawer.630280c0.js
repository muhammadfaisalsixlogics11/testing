import{Q as g}from"./QToolbar.25065141.js";import{_ as m,r as f,o as s,a as i,w as r,d as b,F as k,ag as p,a4 as d,aZ as c,N as h,u as y,g as w,f as S,O as V,i as x,aF as L,k as B,e as Q}from"./index.f4591746.js";import{Q as q}from"./QDrawer.9d541bef.js";import{Q as N}from"./QExpansionItem.73f6e9a9.js";import{_ as O}from"./logo.d17bc7ed.js";const j={props:{title:{type:String,required:!0},route:{type:String,default:""},params:{type:Object,default:()=>({})},icon:{type:String,default:""},notification:[String,Number],subLinks:{type:[Object,Boolean],default:!1},exact:Boolean,dense:Boolean,rounded:Boolean},computed:{active:{get(){return this.$route.meta.base===this.route||this.$route.name===this.route},set(a){return a}}},methods:{isActive({route:a}){return[this.$route.meta.module,this.$route.meta.premission,this.$route.name].includes(a)}}};function A(a,n,e,v,u,l){const o=f("base-item");return e.subLinks?(s(),i(N,{key:0,modelValue:l.active,"onUpdate:modelValue":n[0]||(n[0]=t=>l.active=t),icon:e.icon,label:e.title,"expand-icon-class":"hidden",class:"sublinks","header-class":{"sublink-header":!0,"sublink-active":l.active,"rounded-borders":e.rounded},to:{name:e.route},dense:e.dense},{default:r(()=>[(s(!0),b(k,null,p(e.subLinks,(t,_)=>d((s(),i(o,{key:_,clickable:"",tag:"a",to:{name:t.route,params:t.params},exact:t.exact,"active-class":"active",dense:e.dense,icon:t.icon,label:t.title,notification:t.notification,"icon-space":""},null,8,["to","exact","dense","icon","label","notification"])),[[c]])),128))]),_:1},8,["modelValue","icon","label","header-class","to","dense"])):d((s(),i(o,{key:1,clickable:"",tag:"a",to:{name:e.route,params:e.params},"active-class":"active",dense:e.dense,icon:e.icon,label:e.title,notification:e.notification},null,8,["to","dense","icon","label","notification"])),[[c]])}var C=m(j,[["render",A]]);const D={components:{LinksList:C},props:{modelValue:{required:!1},sideMenus:{required:!0,type:Array},listStyle:[String,Object]},emits:["update:model-value"],data(){return{value:this.modelValue}},methods:{toggle(){this.$refs.drawer.toggle()}},computed:{...h(y,["user"])}},F=Q("img",{width:"110",src:O},null,-1);function E(a,n,e,v,u,l){const o=f("links-list");return s(),i(q,{ref:"drawer",modelValue:u.value,"onUpdate:modelValue":[n[0]||(n[0]=t=>u.value=t),n[1]||(n[1]=t=>a.$emit("update:model-value",t))],"show-if-above":"",breakpoint:1280,width:250,side:"left",class:"bg-white text-black"},{default:r(()=>[a.user&&a.$q.screen.lt.sm?(s(),i(g,{key:0,class:"flex-center q-pa-md"},{default:r(()=>[F]),_:1})):w("",!0),S(V,{class:"bg-white q-pa-md",style:x(e.listStyle)},{default:r(()=>[(s(!0),b(k,null,p(e.sideMenus,t=>(s(),i(o,L({class:"link-item",key:t.title},t,{rounded:"",dense:""}),null,16))),128))]),_:1},8,["style"]),B(a.$slots,"default")]),_:3},8,["modelValue"])}var R=m(D,[["render",E]]);export{R as L};
