import{aE as f,M as O,_ as R,r as c,o as h,a as V,w as n,f as o,ac as I,ab as T,O as E,d as P,F as B,ag as M,K as W,I as q,J as F,h as m,t as d,g as x,l as g,af as K,e as i,a4 as S,a7 as j,aD as G,a5 as k,a8 as U}from"./index.f4591746.js";import{Q as X}from"./QSelect.8c43ef08.js";import{Q as Y}from"./QPage.a3fc6f07.js";import{S as Z}from"./SkeletonSinglePage.67226046.js";import{u as $}from"./instructor.4f64d909.js";import{U as ee}from"./UrlList.907bc71f.js";import{Q as N}from"./QItemLabel.e0825433.js";import{Q as te}from"./QInnerLoading.b1d386c8.js";import{u as se}from"./class-list.72fd415c.js";import{F as oe}from"./FileSelector.9ccac642.js";import"./QField.b3ff45f1.js";import"./QChip.b97d9493.js";import"./QMenu.528d1653.js";import"./selection.286bc7d5.js";import"./rtl.b51694b1.js";import"./QSkeleton.28ea6420.js";import"./FileCard.f6c381c2.js";import"./QToolbarTitle.bb8a8489.js";import"./QToolbar.25065141.js";import"./QImg.f5d5bcf2.js";const le={data(){return{selected:f.exports.cloneDeep(this.modelValue),classes:[],current_page:1,last_page:1,loading:!1,filter:this.query}},props:{modelValue:{required:!1,type:[Array],default:()=>[]},hint:[String],query:[String],title:{type:[String],default:"selectClasses"},loadFromServer:{type:[Boolean],required:!1,default:!0}},emits:["ok","hide"],methods:{...O(se,["get"]),onLoad(t){console.func("components/ClassSelector:methods.onLoad()",arguments),this.loading=!0,this.current_page=t.page,this.get({...t,filter:this.filter,rowsPerPage:10,order:"name",descending:"asc",active:!0}).then(({data:s,meta:u})=>{const b=s.map(e=>{let r=this.selected.find(_=>_.id==e.id);return{...e,pivot:r?r.pivot:{}}});this.classes=f.exports.cloneDeep(b),this.current_page=u.current_page,this.last_page=u.last_page,this.loading=!1}).catch(()=>{this.loading=!1})},async show(){console.func("components/ClassSelector:methods.show()",arguments),this.$refs.dialog.show(),this.loadFromServer&&this.onLoad({page:this.current_page})},hide(){console.func("components/ClassSelector:methods.close()",arguments),this.$refs.dialog.hide()},onDialogHide(){console.func("components/ClassSelector:methods.onDialogHide()",arguments),this.$emit("hide")},onDone(){console.func("components/ClassSelector:methods.onDone()",arguments),this.$emit("ok",this.selected),this.hide()},onBrowse(t){console.func("components/ClassSelector:methods.onBrowse()",arguments),this.filter=t,this.onLoad({page:1})},onSelected(t){console.func("components/ClassSelector:methods.onSelected()",arguments),this.selected_classes.filter(u=>u===t.id).length?this.selected=this.selected.filter(u=>u.id!==t.id):this.selected.push(t)}},computed:{disable(){return JSON.stringify(this.selected)===JSON.stringify(this.modelValue)},selected_classes(){return this.selected.map(t=>t.id)}}},ne={class:"q-gutter-sm"};function ie(t,s,u,b,e,r){const _=c("base-input"),p=c("base-dialog");return h(),V(p,{title:t.$t(u.title),"body-class":"q-pa-none",ref:"dialog",persistent:"",onHide:r.onDialogHide,"use-separator":""},{body:n(()=>[o(I,null,{default:n(()=>[o(_,{dense:"",outlined:"",type:"text",modelValue:e.filter,"onUpdate:modelValue":[s[0]||(s[0]=a=>e.filter=a),s[1]||(s[1]=a=>r.onBrowse(a,"filter"))],clearable:"",debounce:"500",placeholder:t.$t("placeholder.searchClasses")},null,8,["modelValue","placeholder"])]),_:1}),o(T),o(E,{class:"bordered scroll",style:{"max-height":"50vh","min-height":"50vh"}},{default:n(()=>[e.loading?x("",!0):(h(!0),P(B,{key:0},M(e.classes,(a,v)=>(h(),V(W,{key:v,tag:"label"},{default:n(()=>[o(q,{style:{"min-width":"auto"},avatar:""},{default:n(()=>[o(F,{size:"sm",dense:"","model-value":r.selected_classes,"onUpdate:modelValue":D=>r.onSelected(a),val:a.id},null,8,["model-value","onUpdate:modelValue","val"])]),_:2},1024),o(q,null,{default:n(()=>[o(N,{class:"label"},{default:n(()=>[m(d(a.name),1)]),_:2},1024)]),_:2},1024),o(q,null,{default:n(()=>[o(N,{class:"label"},{default:n(()=>[m(d(a.cost),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),footer:n(()=>[o(I,{class:"bg-white flex"},{default:n(()=>[u.loadFromServer?(h(),P(B,{key:0},[o(g,{disable:e.current_page<=1||e.loading,onClick:s[2]||(s[2]=a=>r.onLoad({page:e.current_page-1>=1?e.current_page-1:1})),dense:"",round:"",flat:"",color:"primary",icon:"fal fa-angle-left"},null,8,["disable"]),o(g,{disable:e.current_page==e.last_page||e.loading,onClick:s[3]||(s[3]=a=>r.onLoad({page:e.current_page+1<=e.last_page?e.current_page+1:1})),dense:"",round:"",flat:"",color:"primary",icon:"fal fa-angle-right"},null,8,["disable"])],64)):x("",!0),o(K),i("div",ne,[S(o(g,{"no-caps":"",outline:"",label:t.$t("cancel"),color:"grey"},null,8,["label"]),[[j]]),o(g,{disable:r.disable,"no-caps":"",label:t.$t("done"),color:"primary",onClick:r.onDone},null,8,["disable","label","onClick"])])]),_:1})]),loading:n(()=>[o(te,{showing:e.loading},{default:n(()=>[o(G,{size:"50px",color:"primary"})]),_:1},8,["showing"])]),_:1},8,["title","onHide"])}var re=R(le,[["render",ie]]);const L={status:"Active",avatar:null,urls:[],is_pt:!1,is_admin:!1,insurance:!1,qualification:!1,has_onlinefolder:!1,document:!1},ae={components:{SkeletonSinglePage:Z,UrlList:ee,FileSelector:oe},data(){return{default:f.exports.cloneDeep(L),instructor:f.exports.cloneDeep(L),loaded:!1,submited:!1,classes_columns:[{name:"name",align:"left",label:this.$t("label.class"),field:"name",style:"width: 100px",sortable:!0},{name:"cost",align:"left",label:this.$t("label.cost"),field:t=>t.pivot.cost,format:t=>this.$core.money(t),sortable:!0},{name:"actions",align:"right",label:"",field:"actions"}]}},methods:{...O($,["store","show","update"]),onSubmit(t){console.func("pages/admins/instructors/InstructorPage:methods.onSubmit()",arguments),this.submited=!0,(this.creating?this.store:this.update)(this.instructor).then(({data:u,message:b})=>{this.submited=!1,this.$q.notify(b),this.instructor=u,this.default=f.exports.cloneDeep(u),this.$router.push({name:"Single Instructor",params:{id:u.id},query:{action:"edit"}})}).catch(u=>{this.submited=!1,this.$core.error(u,{title:this.$t("dialog.title.error")})})},onReset(t){console.func("pages/admins/instructors/InstructorPage:methods.onReset()",arguments),this.loaded=!1,this.$nextTick(()=>{this.instructor=f.exports.cloneDeep(this.default),this.loaded=!0})},onCancel(t){console.func("pages/admins/instructors/InstructorPage:methods.onCancel()",arguments),this.$router.go(-1)},onBrowseClass(t){console.func("pages/admins/instructors/InstructorPage:methods.onBrowseClass()",arguments),this.$q.dialog({component:re,componentProps:{query:t,modelValue:this.instructor.classes}}).onOk(s=>{console.func("pages/admins/instructors/InstructorPage:methods.onBrowseClass.onOk()",s),this.instructor.classes=s})},onRemoveClass({rowIndex:t}){console.func("pages/admins/instructors/InstructorPage:methods.onRemoveClass()",arguments),this.instructor.classes.splice(t,1)}},async mounted(){this.creating?this.loaded=!0:this.show(this.id).then(t=>{this.instructor=t,this.default=f.exports.cloneDeep(t),this.loaded=!0}).catch(t=>{this.$emit("error",t)})},computed:{edit(){return["add","edit"].includes(this.action)||this.id==="add"},creating(){return this.id==="add"},id(){return this.$route.params.id},action(){return this.$route.query.action},disable(){return this.default&&JSON.stringify(this.instructor)===JSON.stringify(this.default)},resetable(){return this.default&&JSON.stringify(this.instructor)!==JSON.stringify(this.default)}}},ue={class:"row q-col-gutter-md"},de={class:"col-xs-12 col-sm-9"},ce={class:"q-gutter-md"},me={class:"col-xs-12 col-sm-4"},pe={class:"col-xs-12 col-sm-4"},fe={class:"col-xs-12 col-sm-4"},he={class:"col-xs-12 col-sm-4"},ge={class:"col-xs-12 col-sm-2"},be={class:"col-xs-12 col-sm-2"},_e={class:"col-xs-12 col-sm-12"},Ve={class:"col-xs-12"},ve={class:"col-xs-12 col-sm-3"},ye={class:"col-xs-12"},Se={class:"col-xs-12"},we={class:"col-xs-12"},Ce={class:"col-xs-12"},qe={class:"col-xs-12"},ke={class:"col-xs-12"};function Ue(t,s,u,b,e,r){const _=c("base-page-header"),p=c("base-label"),a=c("base-input"),v=c("base-price-input"),D=c("url-list"),w=c("base-section"),J=c("base-btn"),A=c("base-table"),y=c("file-selector"),C=c("base-checkbox"),H=c("base-form"),z=c("skeleton-single-page");return h(),V(Y,{padding:""},{default:n(()=>[o(_,{class:"q-mb-md",title:r.creating?t.$t("createNew"):e.instructor.name,hint:t.$t("hint.instructor"),"no-tabs":""},null,8,["title","hint"]),e.loaded?(h(),V(H,{key:0,onSubmit:r.onSubmit,onCancel:r.onCancel,onReset:r.onReset,resetable:r.resetable,disable:r.disable,submited:e.submited},{default:n(()=>[i("div",ue,[i("div",de,[i("div",ce,[o(w,{flat:"",bordered:"",title:t.$t("generalInformation")},{default:n(()=>[i("div",me,[o(p,{required:""},{default:n(()=>[m(d(t.$t("firstName")),1)]),_:1}),o(a,{name:"first_name",modelValue:e.instructor.first_name,"onUpdate:modelValue":s[0]||(s[0]=l=>e.instructor.first_name=l)},null,8,["modelValue"])]),i("div",pe,[o(p,{required:""},{default:n(()=>[m(d(t.$t("surname")),1)]),_:1}),o(a,{name:"last_name",modelValue:e.instructor.last_name,"onUpdate:modelValue":s[1]||(s[1]=l=>e.instructor.last_name=l)},null,8,["modelValue"])]),i("div",fe,[o(p,{required:""},{default:n(()=>[m(d(t.$t("emailAddress")),1)]),_:1}),o(a,{modelValue:e.instructor.email,"onUpdate:modelValue":s[2]||(s[2]=l=>e.instructor.email=l),name:"email"},null,8,["modelValue"])]),i("div",he,[o(p,{required:""},{default:n(()=>[m(d(t.$t("phoneNumber")),1)]),_:1}),o(a,{modelValue:e.instructor.phone_number,"onUpdate:modelValue":s[3]||(s[3]=l=>e.instructor.phone_number=l),name:"phone_number",type:"tel"},null,8,["modelValue"])]),i("div",ge,[o(p,null,{default:n(()=>[m(d(t.$t("hoursPW")),1)]),_:1}),o(a,{type:"number",step:"1",min:"1",modelValue:e.instructor.hourspw,"onUpdate:modelValue":s[4]||(s[4]=l=>e.instructor.hourspw=l),name:"hourspw"},null,8,["modelValue"])]),i("div",be,[o(p,null,{default:n(()=>[m(d(t.$t("rentPW")),1)]),_:1}),o(v,{modelValue:e.instructor.rentpw,"onUpdate:modelValue":s[5]||(s[5]=l=>e.instructor.rentpw=l),name:"rentpw"},null,8,["modelValue"])]),i("div",_e,[o(p,{required:""},{default:n(()=>[m(d(t.$t("profileInfo")),1)]),_:1}),o(a,{type:"textarea",modelValue:e.instructor.description,"onUpdate:modelValue":s[6]||(s[6]=l=>e.instructor.description=l),name:"description"},null,8,["modelValue"])]),i("div",Ve,[o(D,{modelValue:e.instructor.urls,"onUpdate:modelValue":s[7]||(s[7]=l=>e.instructor.urls=l)},null,8,["modelValue"])])]),_:1},8,["title"]),o(w,{flat:"",bordered:"",title:t.$t("menus.classes"),"no-row":""},{default:n(()=>[o(a,{class:"q-mb-md",placeholder:t.$t("placeholder.searchClasses"),debounce:"500","onUpdate:modelValue":r.onBrowseClass},{after:n(()=>[o(g,{onClick:s[8]||(s[8]=l=>r.onBrowseClass("")),"no-caps":"",outline:"",padding:"9px",style:{width:"100px"},color:"primary",label:t.$t("browse")},null,8,["label"])]),_:1},8,["placeholder","onUpdate:modelValue"]),i("div",null,[o(A,{ref:"classes",columns:e.classes_columns,rows:e.instructor.classes,"hide-top":"","hide-pagination":"","rows-per-page-options":[0],"no-data-label":t.$t("classes.noData"),loaded:""},{"body-cell-name":n(l=>[o(J,{onClick:s[9]||(s[9]=k(()=>{},["stop"])),link:"",size:"12px",tag:"a",to:{name:"Single Class",params:{id:l.row.id},query:{action:"edit"}}},{default:n(()=>[m(d(l.value),1)]),_:2},1032,["to"])]),"body-cell-cost":n(l=>[o(v,{dense:"",borderless:"",onClick:s[10]||(s[10]=k(()=>{},["stop"])),modelValue:l.row.pivot.cost,"onUpdate:modelValue":Q=>l.row.pivot.cost=Q},null,8,["modelValue","onUpdate:modelValue"])]),actions:n(l=>[o(g,{onClick:k(Q=>r.onRemoveClass(l),["stop"]),size:"sm",round:"",flat:"",color:"grey",icon:"fas fa-trash-can"},null,8,["onClick"])]),_:1},8,["columns","rows","no-data-label"])])]),_:1},8,["title"])])]),i("div",ve,[o(w,{flat:"",bordered:"",title:t.$t("profileSettings")},{default:n(()=>[i("div",ye,[o(p,null,{default:n(()=>[m(d(t.$t("avatar")),1)]),_:1}),o(y,{accept:"image/*",icon:"fad fa-image","dialog-label":"uploadAvatar",hint:t.$t("hint.images",{type:"avatar"}),"load-from-server":"",modelValue:e.instructor.avatar,"onUpdate:modelValue":s[11]||(s[11]=l=>e.instructor.avatar=l),query:l=>({...l,type:"image"})},null,8,["hint","modelValue","query"])]),i("div",Se,[o(p,null,{default:n(()=>[m(d(t.$t("label.status")),1)]),_:1}),o(X,{modelValue:e.instructor.status,"onUpdate:modelValue":s[12]||(s[12]=l=>e.instructor.status=l),options:["Active","Deactive","Hold"],dense:"",outlined:""},null,8,["modelValue"])]),i("div",we,[o(F,{dense:"",modelValue:e.instructor.is_pt,"onUpdate:modelValue":s[13]||(s[13]=l=>e.instructor.is_pt=l),label:t.$t("personalTrainer")},null,8,["modelValue","label"])]),i("div",Ce,[o(C,{"no-inline":"",dense:"",modelValue:e.instructor.insurance,"onUpdate:modelValue":s[14]||(s[14]=l=>e.instructor.insurance=l)},{default:n(()=>[i("div",null,d(t.$t("insurance")),1)]),_:1},8,["modelValue"]),S(o(y,{"use-controler":"",inline:"",class:"q-mt-sm",accept:"application/pdf",icon:"fad fa-file-pdf","dialog-label":"uploadInsurance",hint:t.$t("hint.pdfs",{type:"insurance"}),"load-from-server":"",modelValue:e.instructor.insurance_file,"onUpdate:modelValue":s[15]||(s[15]=l=>e.instructor.insurance_file=l),query:l=>({...l,type:"application/pdf"})},null,8,["hint","modelValue","query"]),[[U,e.instructor.insurance]])]),i("div",qe,[o(C,{"no-inline":"",dense:"",modelValue:e.instructor.qualification,"onUpdate:modelValue":s[16]||(s[16]=l=>e.instructor.qualification=l)},{default:n(()=>[i("div",null,d(t.$t("qualification")),1)]),_:1},8,["modelValue"]),S(o(y,{"use-controler":"",inline:"",class:"q-mt-sm",accept:"application/pdf",icon:"fad fa-file-pdf","dialog-label":"uploadQualification",hint:t.$t("hint.pdfs",{type:"qualification"}),"load-from-server":"",modelValue:e.instructor.qualification_file,"onUpdate:modelValue":s[17]||(s[17]=l=>e.instructor.qualification_file=l),query:l=>({...l,type:"application/pdf"})},null,8,["hint","modelValue","query"]),[[U,e.instructor.qualification]])]),i("div",ke,[o(C,{"no-inline":"",dense:"",modelValue:e.instructor.document,"onUpdate:modelValue":s[18]||(s[18]=l=>e.instructor.document=l)},{default:n(()=>[i("div",null,d(t.$t("document")),1)]),_:1},8,["modelValue"]),S(o(y,{"use-controler":"",inline:"",class:"q-mt-sm",accept:"application/pdf",icon:"fad fa-file-pdf","dialog-label":"uploadDocument",hint:t.$t("hint.pdfs",{type:"document"}),"load-from-server":"",modelValue:e.instructor.document_file,"onUpdate:modelValue":s[19]||(s[19]=l=>e.instructor.document_file=l),query:l=>({...l,type:"application/pdf"})},null,8,["hint","modelValue","query"]),[[U,e.instructor.document]])])]),_:1},8,["title"])])])]),_:1},8,["onSubmit","onCancel","onReset","resetable","disable","submited"])):(h(),V(z,{key:1}))]),_:1})}var je=R(ae,[["render",Ue]]);export{je as default};