import{cX as s,A as l}from"./index.f4591746.js";const i=s("group",{getters:{module:t=>({name:"Groups",label:t.$t("modules.groups"),singular:t.$t("modules.singular.group"),plural:t.$t("modules.plural.groups")}),columns:t=>[{name:"name",align:"left",label:t.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"description",align:"left",label:t.$t("label.description"),field:"description",style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],actions:t=>[{label:t.$t("label.edit"),permission:"Edit",action:"route",route:"Single Group",params:r=>({id:r.id}),query:r=>({action:"edit"}),icon:"fas fa-edit",deleted:!1},{label:t.$t("label.delete"),permission:"Delete",action:"delete",icon:"fas fa-trash-alt",deleted:!1},{label:t.$t("label.restore"),permission:"Delete",action:"restore",icon:"fas fa-trash-undo",deleted:!0}],toolbar:t=>[{icon:"fad fa-plus-circle",label:t.$t("label.addGroup"),permission:"New",action:"route",params:{id:"add"},route:"Single Group",color:"primary",deleted:"all"}],filters:t=>[]},actions:{get(t){return new Promise((r,o)=>{l.get("groups",t).then(e=>{this.setRows(e.data),r(e)}).catch(e=>{o(e)})})},store(t){return new Promise((r,o)=>{l.post("groups/store",t).then(e=>{r(e)}).catch(e=>{o(e)})})},show(t){return new Promise((r,o)=>{l.get(`groups/${t}`).then(e=>{r(e)}).catch(e=>{o(e)})})},update(t){return new Promise((r,o)=>{l.put(`groups/${t.id}`,t).then(e=>{r(e)}).catch(e=>{o(e)})})},delete(t){return new Promise((r,o)=>{l.delete(`groups/${t}/destroy`).then(e=>{r(e)}).catch(e=>{o(e)})})},deleteSelected(t){return new Promise((r,o)=>{l.delete("groups/destroy",{items:t}).then(e=>{r(e)}).catch(e=>{o(e)})})},restore(t){return new Promise((r,o)=>{l.post(`groups/${t}/restore`).then(e=>{r(e)}).catch(e=>{o(e)})})},restoreSelected(t){return new Promise((r,o)=>{l.post("groups/restore",{items:t}).then(e=>{r(e)}).catch(e=>{o(e)})})}}});export{i as u};
