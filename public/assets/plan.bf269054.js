import{cX as r,A as n,c as s}from"./index.f4591746.js";const c=e=>[{label:e.$t("label.all"),value:null},{label:e.$t("label.active"),value:!0}],o=e=>[{label:e.$t("label.daily"),value:"day"},{label:e.$t("label.weekly"),value:"week"},{label:e.$t("label.monthly"),value:"month"},{label:e.$t("label.yearly"),value:"year"},{label:e.$t("label.custom"),value:"custom"}],u=r("plan",{getters:{module:e=>({name:"Plans",label:e.$t("modules.plans"),singular:e.$t("modules.singular.plan"),plural:e.$t("modules.plural.plans")}),columns:e=>[{name:"label",align:"left",label:e.$t("label.label"),field:"label",style:"width: 40px",sortable:!0},{name:"prices",align:"left",label:e.$t("label.prices"),field:"prices",style:"width: 40px",sortable:!1},{name:"created_at",align:"left",label:e.$t("label.createdAt"),field:"created_at",style:"width: 40px",sortable:!0},{name:"is_active",align:"left",label:e.$t("label.active"),field:"is_active",format:t=>t?"Yes":"No",style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],actions:e=>[{label:e.$t("label.edit"),module:"Finance",permission:"Plans",action:"route",route:"Single Plan",params:t=>({id:t.id}),query:t=>({action:"edit"}),icon:"fas fa-edit",deleted:!1},{label:e.$t("label.delete"),module:"Finance",permission:"Plans",action:"delete",icon:"fas fa-trash-alt",deleted:!1},{label:e.$t("label.restore"),module:"Finance",permission:"Plans",action:"restore",icon:"fas fa-trash-undo",deleted:!0}],toolbar:e=>[{title:e.$t("label.status"),action:"request",component:"base-select",dense:!0,outlined:!0,key:"active",placeholder:e.$t("placeholder.select"),optionsDense:!0,style:"width: 150px",mapOptions:!0,emitValue:!0,options:c(e),prefix:e.$t("prefix.status"),deleted:"all"},{icon:"fad fa-plus-circle",module:"Finance",permission:"Plans",action:"route",label:e.$t("label.addPlan"),params:{id:"add"},route:"Single Plan",color:"primary",deleted:"all"}],filters:e=>[],intervalOptions:o},actions:{get(e){return new Promise((t,a)=>{n.get("plans",e).then(l=>{this.setRows(l.data),t(l)}).catch(l=>{a(l)})})},store(e){return new Promise((t,a)=>{n.post("plans/store",e).then(l=>{t(l)}).catch(l=>{a(l)})})},show(e){return new Promise((t,a)=>{n.get(`plans/${e}`).then(l=>{t(l)}).catch(l=>{a(l)})})},update(e){return new Promise((t,a)=>{n.put(`plans/${e.id}`,e).then(l=>{t(l)}).catch(l=>{a(l)})})},delete(e){return new Promise((t,a)=>{n.delete(`plans/${e}/destroy`).then(l=>{t(l)}).catch(l=>{a(l)})})},deleteSelected(e){return new Promise((t,a)=>{n.delete("plans/destroy",{items:e}).then(l=>{t(l)}).catch(l=>{a(l)})})},restore(e){return new Promise((t,a)=>{n.post(`plans/${e}/restore`).then(l=>{t(l)}).catch(l=>{a(l)})})},restoreSelected(e){return new Promise((t,a)=>{n.post("plans/restore",{items:e}).then(l=>{t(l)}).catch(l=>{a(l)})})},changeActive(e){return new Promise((t,a)=>{n.post(`plans/${e.id}/change-active`).then(l=>{e.is_active=!e.is_active;const{message:i}=l;s.success(i),t(l)}).catch(l=>{s.error(l),a(l)})})}}});export{u};