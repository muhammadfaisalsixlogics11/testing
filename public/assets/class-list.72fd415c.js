import{cX as r,A as a,c as i}from"./index.f4591746.js";const n=e=>[{label:e.$t("label.all"),value:null},{label:e.$t("label.active"),value:!0}],d=r("class-list",{getters:{module:e=>({name:"Classes",label:e.$t("modules.classes"),singular:e.$t("modules.singular.class"),plural:e.$t("modules.plural.classes")}),columns:e=>[{name:"name",align:"left",label:e.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"capacity",align:"left",label:e.$t("capacity"),field:"capacity",style:"width: 40px",sortable:!0},{name:"description",align:"left",label:e.$t("label.description"),field:"description",style:"width: 300px; white-space: normal",sortable:!0},{name:"is_active",align:"left",label:e.$t("label.active"),field:"is_active",format:s=>s?"Yes":"No",style:"width: 40px",sortable:!0},{name:"has_description",align:"left",label:e.$t("label.showDescription"),field:"has_description",format:s=>s?"Yes":"No",style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],actions:e=>[{label:e.$t("label.edit"),permission:"Edit",action:"route",route:"Single Class",params:s=>({id:s.id}),query:s=>({action:"edit"}),icon:"fas fa-edit",deleted:!1},{label:e.$t("label.delete"),permission:"Delete",action:"delete",icon:"fas fa-trash-alt",deleted:!1},{label:e.$t("label.restore"),permission:"Delete",action:"restore",icon:"fas fa-trash-undo",deleted:!0}],toolbar:e=>[{title:e.$t("label.status"),action:"request",component:"base-select",dense:!0,outlined:!0,key:"active",placeholder:e.$t("placeholder.select"),optionsDense:!0,style:"width: 150px",mapOptions:!0,emitValue:!0,options:n(e),prefix:e.$t("prefix.status"),deleted:"all"},{tooltip:e.$t("tooltip.exportAsCsv"),icon:"fas fa-file-csv",action:"export",color:"primary",deleted:"all",type:"csv"},{icon:"fad fa-plus-circle",label:e.$t("label.addClass"),permission:"New",action:"route",params:{id:"add"},route:"Single Class",color:"primary",deleted:"all"}],filters:e=>[]},actions:{get(e){return new Promise((s,l)=>{a.get("class-lists",e).then(t=>{this.setRows(t.data),s(t)}).catch(t=>{l(t)})})},options(e){return new Promise((s,l)=>{a.get("class-lists/options",e).then(t=>{this.setRows(t.data),s(t)}).catch(t=>{l(t)})})},store(e){return new Promise((s,l)=>{a.post("class-lists/store",e).then(t=>{s(t)}).catch(t=>{l(t)})})},show(e){return new Promise((s,l)=>{a.get(`class-lists/${e}`).then(t=>{s(t)}).catch(t=>{l(t)})})},update(e){return new Promise((s,l)=>{a.put(`class-lists/${e.id}`,e).then(t=>{s(t)}).catch(t=>{l(t)})})},delete(e){return new Promise((s,l)=>{a.delete(`class-lists/${e}/destroy`).then(t=>{s(t)}).catch(t=>{l(t)})})},deleteSelected(e){return new Promise((s,l)=>{a.delete("class-lists/destroy",{items:e}).then(t=>{s(t)}).catch(t=>{l(t)})})},restore(e){return new Promise((s,l)=>{a.post(`class-lists/${e}/restore`).then(t=>{s(t)}).catch(t=>{l(t)})})},restoreSelected(e){return new Promise((s,l)=>{a.post("class-lists/restore",{items:e}).then(t=>{s(t)}).catch(t=>{l(t)})})},changeActive(e){return new Promise((s,l)=>{a.post(`class-lists/${e.id}/change-active`).then(t=>{e.is_active=!e.is_active;const{message:c}=t;i.success(c),s(t)}).catch(t=>{i.error(t),l(t)})})},changeHasDescription(e){return new Promise((s,l)=>{a.post(`class-lists/${e.id}/change-has-description`).then(t=>{e.has_description=!e.has_description;const{message:c}=t;i.success(c),s(t)}).catch(t=>{i.error(t),l(t)})})}}});export{d as u};