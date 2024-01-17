import{Q as w}from"./QBanner.ee0b01a4.js";import{Q as B}from"./QPopupProxy.f3f41f2a.js";import{M as y,_ as q,r as b,o as i,a as k,w as s,f as r,h as _,t as u,e as $,d as g,F as x,ag as P,g as N,a4 as Q,l as R,a8 as V}from"./index.f4591746.js";import{u as A}from"./member.bccfc6a2.js";import{u as M}from"./class-schedule.664e2b5a.js";const U=e=>{var c,d;let a=[];return(c=e==null?void 0:e.booking)!=null&&c.same_day_canceled?a.push("text-red text-bold"):(d=e==null?void 0:e.booking)!=null&&d.is_stand_by&&a.push("bg-amber-1"),a.join(" ")},D={props:{moduleId:[Number,String],status:{type:String,default:"active"},noAction:Boolean},data(){return{rows:[],loading:!1,pagination:{sortBy:"date_at",descending:!0,page:1,filter:"",status:this.status,deleted:!1,rowsPerPage:10,rowsNumber:10,loaded:!1}}},methods:{...y(A,["schedules"]),...y(M,["cancel"]),onRequest(e){console.func("components/UserClassSchedules:methods.onRequest()",arguments),this.pagination={...e.pagination};const{page:a,rowsPerPage:c,sortBy:d,descending:o,date:t}=e.pagination;this.loading=!0,typeof t=="object"&&t?(e.pagination.date_from=t.from,e.pagination.date_to=t.to,delete e.pagination.date):(delete e.pagination.date_from,delete e.pagination.date_to),this.schedules({...e.pagination,moduleId:this.moduleId,direction:o?"desc":"asc"}).then(({meta:n,data:h})=>{this.rows=h,this.pagination.rowsNumber=n.total,this.pagination.page=a,this.pagination.rowsPerPage=c,this.pagination.sortBy=d,this.pagination.descending=o,this.pagination.loaded=!0,this.pagination.from=n.from,this.pagination.to=n.to,this.loading=!1}).catch(n=>{this.$core.error(n,{title:this.$t("dialog.title.error")})})},onCancel({row:e}){console.func("components/UserClassSchedules:methods.onCancel()",arguments),e.loading=!0,this.cancel(e).then(()=>{e.loading=!1,e.booking.cancelable=!1}).catch(a=>{e.loading=!1})}},computed:{visibleColumns(){return this.columns.filter(e=>{if(!this.noAction&&e.name==="actions")return!0;if(e.status){if(e.status&&e.status.includes(this.pagination.status))return!0}else return!0;return!1}).map(e=>e.name)},columns(){return[{name:"date_at",align:"left",label:this.$t("label.day"),field:e=>`${e.day} - ${e.date_at_formated}`,style:"width: 40px",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}},{name:"start_at",align:"left",label:this.$t("label.time"),field:e=>`${e.time}`,classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}},{name:"class",align:"left",label:this.$t("label.class"),field:"class",format:e=>e?e.name:"",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}},{name:"location",align:"left",label:this.$t("label.location"),field:"location",format:e=>e?e.label:"",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}},{name:"instructor",align:"left",label:this.$t("label.instructor"),field:"instructor",format:e=>e?e.name:"",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}},{name:"canceled_at",align:"left",label:this.$t("label.canceledAt"),field:e=>e.booking.canceled_at,classes:U,status:["cancelled","late-cancellation"]},{name:"is_stand_by",align:"left",label:"",field:e=>e.booking.is_stand_by,format:e=>e?'<strong class="text-negative">Standby</strong>':"",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""},status:[null,"active"]},{name:"actions",align:"right",label:"",classes:e=>{var a;return(a=e.booking)!=null&&a.is_stand_by?"bg-amber-1":""}}]},toolbar(){return[{title:this.$t("label.date"),action:"request",component:"base-date-input",dense:!0,outlined:!0,key:"date",placeholder:this.$t("placeholder.select"),style:"width: 150px",prefix:this.$t("prefix.date"),deleted:"all"},{title:this.$t("label.status"),action:"request",component:"base-select",dense:!0,outlined:!0,key:"status",placeholder:this.$t("placeholder.select"),optionsDense:!0,style:"width: 180px",mapOptions:!0,emitValue:!0,options:[{label:this.$t("label.all"),value:null},{label:this.$t("label.active"),value:"active"},{label:this.$t("label.attended"),value:"attended"},{label:this.$t("label.cancelled"),value:"cancelled"},{label:this.$t("label.lateCancellation"),value:"late-cancellation"},{label:this.$t("label.noShow"),value:"noshow"}],deleted:"all",prefix:this.$t("prefix.status")}]}}},I=["innerHTML"],L={key:0,class:"q-mt-sm"},T=["href"],j={key:1};function F(e,a,c,d,o,t){const n=b("base-label"),h=b("base-btn"),v=b("base-tooltip"),C=b("base-table");return i(),k(C,{toolbar:t.toolbar,loading:o.loading,pagination:o.pagination,onRequest:t.onRequest,"no-permissions":"",columns:t.columns,rows:o.rows,"no-data-label":e.$t("classes.noBookings"),"quick-search-placeholder":e.$t("placeholder.quickSearchClasses"),"visible-columns":t.visibleColumns,"has-actions":""},{"body-cell-class":s(l=>{var m,p;return[(p=(m=l.row)==null?void 0:m.class)!=null&&p.has_description?(i(),k(h,{key:0,link:"",label:l.value},{default:s(()=>[r(B,null,{default:s(()=>[r(w,{style:{width:"350px"}},{default:s(()=>[r(n,null,{default:s(()=>[_(u(e.$t("description")),1)]),_:1}),$("span",{innerHTML:e.$core.nl2br(l.row.class.description)},null,8,I),l.row.class.urls?(i(),g("div",L,[r(n,null,{default:s(()=>[_(u(e.$t("urls")),1)]),_:1}),(i(!0),g(x,null,P(l.row.class.urls,(f,S)=>(i(),g("div",{key:S},[$("a",{href:f.url},u(f.label||f.url),9,T)]))),128))])):N("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label"])):(i(),g("span",j,u(l.value),1))]}),actions:s(l=>[Q(r(R,{color:"primary",icon:"fas fa-calendar-circle-minus",onClick:m=>t.onCancel(l),size:"sm",round:"",flat:"",loading:l.row.loading},{default:s(()=>[r(v,null,{default:s(()=>[_(u(e.$t("cancelBooking")),1)]),_:1})]),_:2},1032,["onClick","loading"]),[[V,l.row.booking.cancelable]])]),_:1},8,["toolbar","loading","pagination","onRequest","columns","rows","no-data-label","quick-search-placeholder","visible-columns"])}var J=q(D,[["render",F]]);export{J as U};