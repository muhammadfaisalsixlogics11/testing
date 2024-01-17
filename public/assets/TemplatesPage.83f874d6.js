import{_ as p,M as f,N as b,r as l,o as h,a as w,w as i,f as s,a5 as k,h as C,t as _,a6 as T}from"./index.f4591746.js";import{Q as P}from"./QPage.a3fc6f07.js";import{u as r}from"./template.f845b21b.js";const v={data(){return{loading:!1,loaded:!1,pagination:{sortBy:"id",descending:!0,page:1,filter:"",advancedFilter:{},deleted:!1,rowsPerPage:15,rowsNumber:15,active:!0,loaded:!1},useTemplateStore:r()}},methods:{...f(r,["get"]),onRequest(e){console.func("admins/templates/TemplatesPage:methods.onRequest()",arguments);const{page:a,rowsPerPage:d,sortBy:c,descending:t}=e.pagination;this.pagination=e.pagination,this.loading=!0,this.get({...e.pagination,direction:t?"desc":"asc"}).then(({meta:o})=>{this.pagination.rowsNumber=o.total,this.pagination.page=a,this.pagination.rowsPerPage=d,this.pagination.sortBy=c,this.pagination.descending=t,this.pagination.loaded=!0,this.pagination.from=o.from,this.pagination.to=o.to,this.loading=!1}).catch(o=>{this.$core.error(o,{title:this.$t("dialog.title.error")})})},async actionClicked(e,a){console.func("admins/templates/TemplatesPage:methods.actionClicked()",arguments)},async toolbarClicked(e,a){console.func("admins/templates/TemplatesPage:methods.toolbarClicked()",arguments)},async rowClicked(e,a){console.func("admins/templates/TemplatesPage:methods.rowClicked()",arguments),this.$router.push({name:"Single Template",params:{id:a.id},query:{action:"edit"}})}},computed:{...b(r,["actions","rows","columns","module","toolbar","filters"]),permissions(){return[]}}};function y(e,a,d,c,t,o){const m=l("base-btn"),g=l("base-table"),u=l("base-section");return h(),w(P,{padding:""},{default:i(()=>[s(u,{flat:"",bordered:"","no-row":""},{default:i(()=>[s(g,{store:t.useTemplateStore,module:e.module,columns:e.columns,rows:e.rows,actions:e.actions,toolbar:e.toolbar,filters:e.filters,loading:t.loading,pagination:t.pagination,onRequest:o.onRequest,onActionClicked:o.actionClicked,onToolbarClicked:o.toolbarClicked,onRowClicked:o.rowClicked,"no-data-label":e.$t("templates.noData")},{"body-cell-label":i(n=>[s(m,{onClick:a[0]||(a[0]=k(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Template",params:{id:n.row.id},query:{action:"edit"}}},{default:i(()=>[C(_(n.value),1)]),_:2},1032,["to"])]),"body-cell-is_active":i(n=>[s(T,{"onUpdate:modelValue":q=>n.col.action(n.row),size:"sm",dense:"","model-value":n.row.is_active,color:"green"},null,8,["onUpdate:modelValue","model-value"])]),_:1},8,["store","module","columns","rows","actions","toolbar","filters","loading","pagination","onRequest","onActionClicked","onToolbarClicked","onRowClicked","no-data-label"])]),_:1})]),_:1})}var N=p(v,[["render",y]]);export{N as default};