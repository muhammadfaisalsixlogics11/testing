import{_ as p,M as f,N as b,r as l,o as h,a as w,w as i,f as s,a5 as k,h as C,t as _,a6 as v}from"./index.f4591746.js";import{Q as y}from"./QPage.a3fc6f07.js";import{u as r}from"./location.015275bb.js";const P={data(){return{loading:!1,loaded:!1,pagination:{sortBy:"label",descending:!1,page:1,filter:"",advancedFilter:{},deleted:!1,rowsPerPage:15,rowsNumber:15,active:null,loaded:!1},useLocationStore:r()}},methods:{...f(r,["get","changeActive"]),onRequest(o){console.func("admins/locations/LocationsPage:methods.onRequest()",arguments);const{page:a,rowsPerPage:c,sortBy:d,descending:t}=o.pagination;this.pagination=o.pagination,this.loading=!0,this.get({...o.pagination,direction:t?"desc":"asc"}).then(({meta:e})=>{this.pagination.rowsNumber=e.total,this.pagination.page=a,this.pagination.rowsPerPage=c,this.pagination.sortBy=d,this.pagination.descending=t,this.pagination.loaded=!0,this.pagination.from=e.from,this.pagination.to=e.to,this.loading=!1}).catch(e=>{this.$core.error(e,{title:this.$t("dialog.title.error")})})},async actionClicked(o,a){console.func("admins/locations/LocationsPage:methods.actionClicked()",arguments)},async toolbarClicked(o,a){console.func("admins/locations/LocationsPage:methods.toolbarClicked()",arguments)},async rowClicked(o,a){console.func("admins/locations/LocationsPage:methods.rowClicked()",arguments),this.$router.push({name:"Single Location",params:{id:a.id},query:{action:"edit"}})}},computed:{...b(r,["actions","rows","columns","module","toolbar","filters"]),permissions(){return[]}}};function L(o,a,c,d,t,e){const g=l("base-btn"),u=l("base-table"),m=l("base-section");return h(),w(y,{padding:""},{default:i(()=>[s(m,{flat:"",bordered:"","no-row":""},{default:i(()=>[s(u,{store:t.useLocationStore,module:o.module,columns:o.columns,rows:o.rows,actions:o.actions,toolbar:o.toolbar,filters:o.filters,loading:t.loading,pagination:t.pagination,onRequest:e.onRequest,onActionClicked:e.actionClicked,onToolbarClicked:e.toolbarClicked,onRowClicked:e.rowClicked,"no-data-label":o.$t("locations.noData"),"table-key":"locations"},{"body-cell-label":i(n=>[s(g,{onClick:a[0]||(a[0]=k(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Location",params:{id:n.row.id},query:{action:"edit"}}},{default:i(()=>[C(_(n.value),1)]),_:2},1032,["to"])]),"body-cell-is_active":i(n=>[s(v,{"onUpdate:modelValue":q=>o.changeActive(n.row),size:"sm",dense:"","model-value":n.row.is_active,color:"green"},null,8,["onUpdate:modelValue","model-value"])]),_:1},8,["store","module","columns","rows","actions","toolbar","filters","loading","pagination","onRequest","onActionClicked","onToolbarClicked","onRowClicked","no-data-label"])]),_:1})]),_:1})}var B=p(P,[["render",L]]);export{B as default};