import{cX as A,A as f,_ as V,M as I,aE as q,N as L,r as p,o as g,a as C,w as u,f as i,K as P,I as h,a5 as y,h as j,t as v,d as S,g as w,e as d,a9 as B,l as E,F as T}from"./index.f4591746.js";import{Q as O}from"./QSelect.8c43ef08.js";import{Q as M}from"./QPage.a3fc6f07.js";import{u as U,a as x}from"./tag.393c5c6c.js";import{u as N}from"./category.a86d72e1.js";import{u as Q}from"./collection.c831f4b1.js";import{u as D}from"./location.49d6720e.js";import"./QField.b3ff45f1.js";import"./QChip.b97d9493.js";import"./QItemLabel.e0825433.js";import"./QMenu.528d1653.js";import"./selection.286bc7d5.js";import"./rtl.b51694b1.js";const R=U(),K=N(),Z=x(),z=Q(),$=D(),k=e=>[{label:e.$t("label.bestSelling"),value:"BEST_SELLING"},{label:e.$t("label.productTitleAZ"),value:"TITLE_ASC"},{label:e.$t("label.productTitleZA"),value:"TITLE_DESC"},{label:e.$t("label.lowestAvailable"),value:"AVAILABLE_ASC"},{label:e.$t("label.highestAvailable"),value:"AVAILABLE_DESC"},{label:e.$t("label.skuAZ"),value:"SKU_ASC"},{label:e.$t("label.skuZA"),value:"SKU_DESC"}],_=A("product/inventory",{getters:{module:e=>({name:"Inventories",label:e.$t("modules.inventories"),singular:e.$t("modules.singular.inventory"),plural:e.$t("modules.plural.inventories")}),columns:e=>[{name:"product",align:"left",label:e.$t("label.product"),field:"product_title",style:"width: 40px",sortable:!1},{name:"sku",align:"left",label:e.$t("label.sku"),field:t=>t.sku?t.sku:"No SKU",sortable:!1},{name:"out_of_stock_track_inventory",align:"left",label:e.$t("label.whenSoldOut"),field:t=>t.out_of_stock_track_inventory?"Continue selling":"Stop selling",sortable:!1},{name:"available",align:"center",label:e.$t("label.available"),field:t=>t.available<=0?`<span class="no-inventory">${t.available}</span>`:t.available,sortable:!1},{name:"edit_quantity",align:"left",label:e.$t("label.editQuantity"),field:"edit_quantity",style:"width: 250px",sortable:!1}],toolbar:e=>[{title:e.$t("label.location"),placeholder:"Select location",component:"base-select",filterMethod:$.get,action:"request",icon:"fas fa-map-marker-alt",key:"location",emitValue:!0,dense:!0,outlined:!0,mapOptions:!0,optionLabel:"name",optionvalue:"id",style:"min-width: 200px",deleted:"all"},{title:e.$t("label.sortBy"),action:"request",component:"base-select",dense:!0,outlined:!0,key:"sortBy",optionsDense:!0,mapOptions:!0,emitValue:!0,icon:"fas fa-sort",options:k(e),deleted:"all"},{label:e.$t("label.filters"),icon:"fas fa-sort-alt",action:"filter",color:"grey-6",outline:!0,deleted:"all"},{label:e.$t("label.viewProducts"),action:"route",route:"Products",color:"primary",deleted:"all"}],filters:e=>[{title:e.$t("label.vendor"),component:"base-select",filterMethod:R.get,placeholder:"Select vendor",mapOptions:!0,optionLabel:"name",optionvalue:"id",outlined:!0,dense:!0,clearable:!0,emitValue:!0,key:"vendor"},{title:e.$t("label.category"),component:"base-select",placeholder:"Select category",filterMethod:K.get,mapOptions:!0,optionLabel:"name",optionvalue:"id",outlined:!0,dense:!0,clearable:!0,emitValue:!0,key:"category"},{title:e.$t("label.taggedWith"),component:"base-select",placeholder:"Select tag",filterMethod:Z.get,mapOptions:!0,optionLabel:"name",optionvalue:"id",outlined:!0,dense:!0,clearable:!0,emitValue:!0,key:"tag"},{title:e.$t("label.collection"),component:"base-select",placeholder:"Select collection",filterMethod:z.get,mapOptions:!0,optionLabel:"name",optionvalue:"id",outlined:!0,dense:!0,clearable:!0,emitValue:!0,key:"collection"},{title:e.$t("label.location"),placeholder:"Select location",component:"base-select",filterMethod:$.get,mapOptions:!0,optionLabel:"name",optionvalue:"id",outlined:!0,dense:!0,clearable:!0,emitValue:!0,key:"location"},{title:e.$t("label.sortBy"),component:"base-select",dense:!0,outlined:!0,key:"sortBy",optionsDense:!0,mapOptions:!0,emitValue:!0,options:k(e)}]},actions:{get(e){return new Promise((t,n)=>{f.get("inventories",e).then(o=>{this.setRows(o.data.map(s=>({...s,adjust_type:"add",adjust_value:0,has_changed:!1}))),t(o)}).catch(o=>{n(o)})})},update(e){return new Promise((t,n)=>{f.put(`inventories/${e.id}`,e).then(o=>{t(o)}).catch(o=>{n(o)})})}}});const F={data(){return{loading:!1,loaded:!1,pagination:{sortBy:"TITLE_ASC",descending:!1,page:1,filter:"",deleted:!1,rowsPerPage:15,rowsNumber:15,loaded:!1},useInventoryStore:_()}},methods:{...I(_,["get","update"]),onRequest(e){console.func("pages/admins/products/InventoryPage:methods.onRequest()",arguments);const{page:t,rowsPerPage:n,sortBy:o,descending:s,location:r,vendor:c,category:m,tag:b,collection:a}=e.pagination;this.pagination=e.pagination,this.loading=!0,this.get({...e.pagination,vendor:c==null?void 0:c.id,category:m==null?void 0:m.id,tag:b==null?void 0:b.id,collection:a==null?void 0:a.id,location:r==null?void 0:r.id,has_adjust:!0,descending:s?"desc":"asc"}).then(({meta:l})=>{this.pagination.rowsNumber=l.total,this.pagination.page=t,this.pagination.rowsPerPage=n,this.pagination.sortBy=o,this.pagination.descending=s,this.pagination.loaded=!0,this.pagination.from=l.from,this.pagination.to=l.to,this.loading=!1}).catch(l=>{this.$emit("error",l)})},onUpdate(e){console.func("pages/admins/products/InventoryPage:methods.Update()",arguments);const t=q.exports.cloneDeep(e);t.available=t.adjust_type==="add"?parseInt(t.available)+parseInt(t.adjust_value):t.adjust_value,t.has_adjust=!0,this.update(t).then(({data:n,message:o})=>{Object.assign(e,n),this.$q.notify(o)}).catch(n=>{this.$core.error(n,{title:"Error"})})},getAvailable(e){return e.adjust_type==="add"?parseInt(e.available)+parseInt(e.adjust_value):e.adjust_value}},computed:{...L(_,["rows","module","columns","toolbar","filters"])}},H={key:0},G={class:"qtype col-auto"},W={class:"qvalue col"},X={class:"qbutton col-auto"},J=["innerHTML"],Y=d("span",{class:"q-ml-xs text-bold"},">",-1),ee={class:"q-ml-xs no-inventory"};function te(e,t,n,o,s,r){const c=p("base-thumbnail"),m=p("base-btn"),b=p("base-table");return g(),C(M,{padding:""},{default:u(()=>[i(b,{store:s.useInventoryStore,module:e.module,columns:e.columns,rows:e.rows,toolbar:e.toolbar,filters:e.filters,loading:s.loading,pagination:s.pagination,onRequest:r.onRequest,"no-data-label":e.$t("label.noInventoryAvaialble")},{"body-cell-product":u(a=>[i(P,{class:"q-pa-none",dense:""},{default:u(()=>[i(h,{avatar:""},{default:u(()=>[i(c,{size:40,media:a.row.thumbnail},null,8,["media"])]),_:2},1024),i(h,{avatar:""},{default:u(()=>{var l;return[i(m,{onClick:t[0]||(t[0]=y(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Products Variant",params:{product_id:a.row.variant.product_id,variant_id:a.row.variant_id},query:{action:"edit"}}},{default:u(()=>[j(v(a.value),1)]),_:2},1032,["to"]),a.row.variant?(g(),S("div",H,v((l=a.row.variant)==null?void 0:l.title),1)):w("",!0)]}),_:2},1024)]),_:2},1024)]),"body-cell-edit_quantity":u(a=>[d("div",{onClick:t[1]||(t[1]=y(()=>{},["stop"])),class:"edit-quantity rounded-borders row"},[d("div",G,[i(O,{dense:"",borderless:"",modelValue:a.row.adjust_type,"onUpdate:modelValue":l=>a.row.adjust_type=l,"map-options":"","emit-value":"",options:[{label:"Set",value:"set"},{label:"Add",value:"add"}]},null,8,["modelValue","onUpdate:modelValue"])]),d("div",W,[i(B,{dense:"",borderless:"",modelValue:a.row.adjust_value,"onUpdate:modelValue":[l=>a.row.adjust_value=l,l=>a.row.has_changed=!0],type:"number","input-style":"text-align: center"},null,8,["modelValue","onUpdate:modelValue"])]),d("div",X,[i(E,{flat:"",disable:!a.row.has_changed,color:a.row.has_changed?"primary":"grey",icon:"fal fa-save",style:{height:"100%"},onClick:l=>r.onUpdate(a.row)},null,8,["disable","color","onClick"])])])]),"body-cell-available":u(a=>[d("span",{innerHTML:a.value},null,8,J),a.row.available!==r.getAvailable(a.row)?(g(),S(T,{key:0},[Y,d("span",ee,v(r.getAvailable(a.row)),1)],64)):w("",!0)]),_:1},8,["store","module","columns","rows","toolbar","filters","loading","pagination","onRequest","no-data-label"])]),_:1})}var ge=V(F,[["render",te]]);export{ge as default};
