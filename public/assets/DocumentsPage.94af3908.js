import{Q as h}from"./QSkeleton.28ea6420.js";import{Q as p}from"./QPage.a3fc6f07.js";import{_ as g,M as b,u as k,r as n,o as s,a as v,w as d,f as o,d as t,F as r,ag as l,n as y,g as x,e as D}from"./index.f4591746.js";const C={data(){return{files:[],loaded:!1}},methods:{...b(k,["documents","readDcument"]),onLoad(){console.func("pages/users/DocumentsPage:methods.onLoad()",arguments),this.loaded=!1,this.documents().then(e=>{this.files=e,this.loaded=!0}).catch(e=>{this.$core.error(e,{title:this.$t("dialog.title.error")}),this.$router.back()})},onRead(e){console.func("pages/users/DocumentsPage:methods.onRead()",arguments),this.readDcument(e.id)}},mounted(){this.onLoad()}},P={key:0,class:"col-xs-12"};function B(e,Q,L,N,c,i){const m=n("base-page-header"),u=n("base-media-card"),_=n("base-no-records"),f=n("base-section");return s(),v(p,{padding:""},{default:d(()=>[o(m,{title:e.$t("documents"),hint:"Discover upcoming changes, exciting events, and more","no-tabs":""},null,8,["title"]),o(f,{class:"q-mt-md",flat:"",bordered:""},{default:d(()=>[c.loaded?(s(),t(r,{key:0},[(s(!0),t(r,null,l(c.files,a=>(s(),t("div",{key:a.id,class:"col-sm-2 col-xs-12"},[o(u,{class:y({unread:!a.has_read}),onClose:i.onRead,media:a},null,8,["class","onClose","media"])]))),128)),c.files.length===0?(s(),t("div",P,[o(_,{height:"calc(100vh - 250px)",icon:"fad fa-file-magnifying-glass",title:"No documents available",message:"Please check back later for updates, or feel free to reach out to our staff for any specific documents or assistance you may need."})])):x("",!0)],64)):(s(),t(r,{key:1},l(12,a=>D("div",{key:a.id,class:"col-sm-2 col-xs-12"},[o(h,{height:"52px",width:"100%",class:"main-btn",type:"QBtn"})])),64))]),_:1})]),_:1})}var V=g(C,[["render",B]]);export{V as default};
