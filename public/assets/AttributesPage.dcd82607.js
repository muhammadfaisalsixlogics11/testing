import{Q as b}from"./QPage.a3fc6f07.js";import{_ as p,M as f,N as h,r as s,o as w,a as k,w as i,f as r,a5 as C,h as A,t as P}from"./index.f4591746.js";import{u as c}from"./attribute.e1521021.js";const _={data(){return{loading:!1,loaded:!1,selected:[],pagination:{sortBy:"name",descending:!1,page:1,filter:"",advancedFilter:{},deleted:!1,rowsPerPage:15,rowsNumber:15,loaded:!1}}},methods:{...f(c,["get"]),onRequest(e){console.func("pages/admins/attributes/AttributesPage.vue:methods.onRequest()",arguments);const{page:t,rowsPerPage:l,sortBy:d,descending:a}=e.pagination;this.loading=!0,this.pagination=e.pagination,this.get({...e.pagination,descending:a?"desc":"asc"}).then(({meta:o})=>{this.pagination.rowsNumber=o.total,this.pagination.page=t,this.pagination.rowsPerPage=l,this.pagination.sortBy=d,this.pagination.descending=a,this.pagination.loaded=!0,this.pagination.from=o.from,this.pagination.to=o.to,this.loading=!1}).catch(o=>{this.$emit("error",o)})},async actionClicked(e,t){console.func("pages/admins/attributes/AttributesPage.vue:methods.actionClicked()",arguments)},async toolbarClicked(e,t){console.func("pages/admins/attributes/AttributesPage.vue:methods.toolbarClicked()",arguments)},async rowClicked(e,t){console.func("pages/admins/attributes/AttributesPage.vue:methods.rowClicked()",arguments),this.$router.push({name:"Single Attribute",params:{id:t.id},query:{action:"edit"}})}},computed:{...h(c,["actions","rows","columns","module","toolbar","filters"])}};function v(e,t,l,d,a,o){const u=s("base-btn"),g=s("base-table"),m=s("base-section");return w(),k(b,{padding:""},{default:i(()=>[r(m,{flat:"",bordered:"","no-row":""},{default:i(()=>[r(g,{ref:"attribute",store:"attribute",module:e.module,columns:e.columns,rows:e.rows,actions:e.actions,toolbar:e.toolbar,loading:a.loading,pagination:a.pagination,onRequest:o.onRequest,selection:"multiple",onActionClicked:o.actionClicked,onToolbarClicked:o.toolbarClicked,onRowClicked:o.rowClicked,"no-data-label":e.$t("label.noAttributeAvaialble"),selected:a.selected,"onUpdate:selected":t[1]||(t[1]=n=>a.selected=n)},{"body-cell-name":i(n=>[r(u,{onClick:t[0]||(t[0]=C(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Attribute",params:{id:n.row.id},query:{action:"edit"}}},{default:i(()=>[A(P(n.value),1)]),_:2},1032,["to"])]),_:1},8,["module","columns","rows","actions","toolbar","loading","pagination","onRequest","onActionClicked","onToolbarClicked","onRowClicked","no-data-label","selected"])]),_:1})]),_:1})}var B=p(_,[["render",v]]);export{B as default};