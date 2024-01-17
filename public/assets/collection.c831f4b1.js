import{cX as s,A as a}from"./index.f4591746.js";const n=e=>[{label:e.$t("label.all"),value:null},{label:e.$t("label.active"),value:"Active"},{label:e.$t("label.draft"),value:"Draft"}],c=s("product/collection",{getters:{module:e=>({name:"Collections",label:e.$t("modules.collections"),singular:e.$t("modules.singular.collection"),plural:e.$t("modules.plural.collections")}),columns:e=>[{name:"name",align:"left",label:e.$t("label.name"),field:"name",style:"width: 40px",sortable:!0},{name:"slug",align:"left",label:e.$t("label.slug"),field:"slug",style:"width: 40px",sortable:!0},{name:"status",align:"left",label:e.$t("label.status"),field:"status",style:"width: 40px",sortable:!0},{name:"actions",align:"right",sortable:!1}],actions:e=>[{label:e.$t("label.edit"),permission:"Edit",action:"route",route:"Single Collection",params:l=>({id:l.id}),query:l=>({action:"edit"}),icon:"fas fa-edit",deleted:!1},{label:e.$t("label.delete"),permission:"Delete",action:"delete",icon:"fas fa-trash-alt",deleted:!1},{label:e.$t("label.restore"),permission:"Delete",action:"restore",icon:"fas fa-trash-undo",deleted:!0}],toolbar:e=>[{label:e.$t("label.trashed"),action:"request",component:"base-toggle",dense:!0,key:"deleted",checkedIcon:"delete",deleted:"all"},{title:e.$t("label.status"),action:"request",component:"base-select",dense:!0,outlined:!0,key:"active",placeholder:e.$t("placeholder.select"),optionsDense:!0,style:"width: 150px",mapOptions:!0,emitValue:!0,options:n(e),prefix:e.$t("prefix.status"),deleted:"all"},{icon:"fad fa-plus-circle",label:e.$t("label.addCollection"),permission:"New",action:"route",params:{id:"add"},route:"Single Collection",color:"primary",deleted:"all"}],filters:e=>[]},actions:{get(e){return new Promise((l,o)=>{a.get("collections",e).then(t=>{this.setRows(t.data),l(t)}).catch(t=>{o(t)})})},options(e){return new Promise((l,o)=>{a.get("collections/options",e).then(t=>{this.setRows(t.data),l(t)}).catch(t=>{o(t)})})},store(e){return new Promise((l,o)=>{a.post("collections/store",e).then(t=>{l(t)}).catch(t=>{o(t)})})},show(e){return new Promise((l,o)=>{a.get(`collections/${e}`).then(t=>{l(t)}).catch(t=>{o(t)})})},update(e){return new Promise((l,o)=>{a.put(`collections/${e.id}`,e).then(t=>{l(t)}).catch(t=>{o(t)})})},delete(e){return new Promise((l,o)=>{a.delete(`collections/${e}/destroy`).then(t=>{l(t)}).catch(t=>{o(t)})})},deleteSelected(e){return new Promise((l,o)=>{a.delete("collections/destroy",{items:e}).then(t=>{l(t)}).catch(t=>{o(t)})})},restore(e){return new Promise((l,o)=>{a.post(`collections/${e}/restore`).then(t=>{l(t)}).catch(t=>{o(t)})})},restoreSelected(e){return new Promise((l,o)=>{a.post("collections/restore",{items:e}).then(t=>{l(t)}).catch(t=>{o(t)})})},addProducts(e){return new Promise((l,o)=>{a.post(`collections/${e.id}/add-products`,{products:e.products}).then(t=>{l(t)}).catch(t=>{o(t)})})}}});export{c as u};