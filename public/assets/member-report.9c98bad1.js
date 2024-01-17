import{M as _,N as C,_ as P,r as h,o as M,a as R,w as i,h as p,t as f,f as c,l as D,e as S,n as k,a5 as y,cX as q,c as r,A as d}from"./index.f4591746.js";import{u as w}from"./member.bccfc6a2.js";const B={props:{year:[String,Number],month:[String,Number],day:[String,Number],type:String,noResponsive:Boolean},data(){return{loading:!1,loaded:!1,pagination:{sortBy:"id",descending:!0,page:1,filter:"",advancedFilter:{},deleted:!1,rowsPerPage:15,rowsNumber:15,loaded:!1,year:this.year,month:this.month,day:this.day,type:this.type,includes:["price"],override:["includes"]},columns:[{name:"id",align:"left",label:this.$t("label.memberID"),field:"member_id_formated",style:"width: 40px",sortable:!0},{name:"name",align:"left",label:this.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"price",align:"left",label:this.$t("label.plan"),field:e=>{var t;return(t=e==null?void 0:e.price)==null?void 0:t.label},style:"width: 250px; white-space: normal",sortable:!0},{name:"starts_at",align:"left",label:this.$t("label.startsAt"),style:"width: 40px",field:"starts_at",format:e=>this.$core.formatDate(e,"DD MMM, YYYY"),sortable:!0},{name:"ends_at",align:"left",label:this.$t("label.endsAt"),style:"width: 40px",field:"ends_at",format:e=>this.$core.formatDate(e,"DD MMM, YYYY"),sortable:!0},{name:"renewal_fee",align:"left",label:this.$t("label.renewalFee"),field:"price",format:e=>this.$core.money(e==null?void 0:e.amount),style:"width: 40px",sortable:!1}],rows:[]}},methods:{..._(w,["get"]),onRequest(e){console.func("admins/members/MembersPage:methods.onRequest()",arguments);const{page:t,rowsPerPage:a,sortBy:l,descending:n}=e.pagination;this.loading=!0,this.get({...e.pagination,direction:n?"desc":"asc"}).then(({meta:o,data:m})=>{this.rows=m,this.pagination.rowsNumber=o.total,this.pagination.page=t,this.pagination.rowsPerPage=a,this.pagination.sortBy=l,this.pagination.descending=n,this.pagination.loaded=!0,this.pagination.from=o.from,this.pagination.to=o.to,this.loading=!1}).catch(o=>{this.$core.error(o,{title:this.$t("dialog.title.error")})})},onExport(){console.func("admins/members/MembersPage:methods.onExport()",arguments),this.$refs.members.onToolbarClicked({action:"export",type:"csv",method:this.get})}},computed:{...C(w,["module"])}};function N(e,t,a,l,n,o){const m=h("base-btn"),x=h("base-table");return M(),R(x,{module:e.module,columns:n.columns,rows:n.rows,loading:n.loading,pagination:n.pagination,onRequest:o.onRequest,"no-data-label":e.$t("members.noData"),"no-permissions":"","no-responsive":a.noResponsive,"hide-top":"",ref:"members"},{"header-cell-id":i(s=>[p(f(s.col.label)+" ",1),c(D,{flat:"",round:"",color:"primary",icon:"fas fa-file-csv",onClick:o.onExport,dense:"",size:"sm"},null,8,["onClick"])]),"body-cell-name":i(s=>[S("i",{class:k(`q-mr-sm q-icon fas fa-circle rag-${s.row.rag||"white"}`),style:{"font-size":"8px"},"aria-hidden":"true",role:"presentation"},null,2),c(m,{onClick:t[0]||(t[0]=y(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Member",params:{id:s.row.id},query:{action:"edit"}}},{default:i(()=>[p(f(s.value),1)]),_:2},1032,["to"])]),"body-cell-price":i(s=>{var u,g;return[c(m,{onClick:t[1]||(t[1]=y(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Plan",params:{id:(g=(u=s.row)==null?void 0:u.price)==null?void 0:g.plan_id},query:{action:"edit"}}},{default:i(()=>[p(f(s.value),1)]),_:2},1032,["to"])]}),_:1},8,["module","columns","rows","loading","pagination","onRequest","no-data-label","no-responsive"])}var z=P(B,[["render",N]]);const b="$",Y=async(e,t)=>{await r.viewPdf(t,`reports-${e}`)},$=e=>new Promise((t,a)=>{d.download("users/reports/pdf",e,{method:"post"}).then(l=>{const n=new Blob([l],{type:"application/pdf"});e.download?r.downloadBlob(`reports-${e.type}`,n):Y(e.type,l),t(l)}).catch(l=>{r.error(l,{title:store.$t("dialog.title.error")}),a(l)})}),E=q("member-report",{getters:{module:e=>({name:e.$t("modules.memberReports"),singular:e.$t("modules.singular.memberReport"),plural:e.$t("modules.plural.memberReports")}),columns:e=>[{name:"name",align:"left",label:e.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"phone",align:"left",label:e.$t("label.phone"),field:"phone",style:"width: 40px",sortable:!0},{name:"email",align:"left",label:e.$t("label.email"),field:"email",style:"width: 40px",sortable:!0},{name:"status",align:"left",label:e.$t("label.status"),field:"status",style:"width: 40px",sortable:!0},{name:"hourspw",align:"left",label:e.$t("label.hours"),field:"hourspw",format:t=>r.money(t),style:"width: 40px",sortable:!0},{name:"rentpw",align:"left",label:e.$t("label.rent"),field:"rentpw",format:t=>r.money(t),style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],reportColumns:e=>[{name:"total",field:"total",label:e.$t("label.total"),sortable:!1,align:"center",stats:!0,load:!0},{name:"rolling_total",field:"rolling_total",label:e.$t("label.rolling")+"("+b+")",format:t=>t!==void 0?r.money(t):null,sortable:!1,align:"center",stats:!1},{name:"rolling",field:"rolling",label:e.$t("label.rolling"),sortable:!1,align:"center",stats:!0,load:!0},{name:"end_date_total",field:"end_date_total",label:e.$t("label.endDate")+"("+b+")",format:t=>t!==void 0?r.money(t):null,sortable:!1,align:"center",stats:!1},{name:"end_date",field:"end_date",label:e.$t("label.endDate"),sortable:!1,align:"center",stats:!0,load:!0},{name:"free",field:"free",label:e.$t("label.free"),sortable:!1,align:"center",stats:!0,load:!0},{name:"cancelled_total",field:"cancelled_total",label:e.$t("label.cancelled")+"("+b+")",format:t=>t!==void 0?r.money(t):null,sortable:!1,align:"center",stats:!1},{name:"cancelled",field:"cancelled",label:e.$t("label.cancelled"),sortable:!1,align:"center",stats:!1,load:!0}],dailyReportColumns:e=>[{name:"id",field:"id",label:e.$t("label.day"),sortable:!1,style:"width: 15px",align:"left",stats:!1},...e.reportColumns],monthlyReportColumns:e=>[{name:"id",field:"id",label:e.$t("label.month"),sortable:!1,style:"width: 15px",align:"left",stats:!1},...e.reportColumns],yearlyReportColumns:e=>[{name:"id",field:"label",label:e.$t("label.year"),sortable:!1,style:"width: 15px",align:"left",stats:!1},...e.reportColumns],toolbar:e=>[{title:e.$t("label.date"),action:"request",component:"base-date-input",dense:!0,outlined:!0,key:"date",placeholder:e.$t("placeholder.select"),style:"width: 150px",prefix:e.$t("prefix.date"),deleted:"all",width:"6"},{tooltip:e.$t("tooltip.exportAsCsv"),icon:"fas fa-file-csv",action:"export",color:"primary",deleted:"all",type:"csv",name:"daily_reports",padding:"14px"},{tooltip:e.$t("tooltip.exportAsPdf"),icon:"fas fa-file-pdf",action:({columns:t,rows:a})=>$({type:"daily",download:!0,columns:t,rows:a}),color:"primary",deleted:"all",type:"pdf",padding:"14px"},{tooltip:e.$t("tooltip.print"),icon:"fas fa-print",action:({columns:t,rows:a})=>$({type:"daily",columns:t,rows:a}),color:"primary",deleted:"all",padding:"14px"}]},actions:{get(e){return new Promise((t,a)=>{d.get("users/reports",e).then(l=>{t(l)}).catch(l=>{a(l)})})},reportsDaily(e){return new Promise((t,a)=>{d.get("users/reports/daily",e).then(l=>{t(l)}).catch(l=>{a(l)})})},reportsMonthly(e){return new Promise((t,a)=>{d.get("users/reports/monthly",e).then(l=>{t(l)}).catch(l=>{a(l)})})},reportsYearly(e){return new Promise((t,a)=>{d.get("users/reports/yearly",e).then(l=>{t(l)}).catch(l=>{a(l)})})}}});export{z as M,E as u};