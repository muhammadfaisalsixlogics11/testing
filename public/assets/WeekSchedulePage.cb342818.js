import{Q as R}from"./QTimeline.c5a47b6a.js";import{Q as W}from"./QPage.a3fc6f07.js";import{M as q,_ as P,r as c,o as f,a as p,w as o,h as k,t as _,f as t,L as X,g as x,J as U,l as z,a5 as Q,aE as h,e as a,d as C,ag as J,aF as E,F as T}from"./index.f4591746.js";import{S as F}from"./SkeletonSinglePage.67226046.js";import{u as j}from"./week-schedule.d4352563.js";import{u as I}from"./member.bccfc6a2.js";import{C as L}from"./ClassAt.4fda54f4.js";import"./QSkeleton.28ea6420.js";import"./class-list.72fd415c.js";import"./instructor.4f64d909.js";import"./QInnerLoading.b1d386c8.js";const Y={props:{rows:Array,allBookings:Array,useMessage:Boolean,hasSignOff:Boolean},data(){return{columns:[{name:"sn",align:"left",label:this.$t("label.sn"),field:"sn",style:"width: 10px",sortable:!1},{name:"user",align:"left",label:this.$t("label.name"),field:"user",style:"width: 100px",sortable:!1},{name:"user_status",align:"left",label:this.$t("label.status"),field:"user",format:e=>e?e.status:"",style:"width: 100px",sortable:!1},{name:"user_email",align:"left",label:this.$t("label.email"),field:"user",format:e=>e?e.email:"",style:"width: 100px",sortable:!1},{name:"user_phone_number",align:"left",label:this.$t("label.phone"),field:"user",format:e=>e?e.phone_number:"",style:"width: 100px",sortable:!1},{name:"attendance",align:"center",label:this.$t("label.attendance"),field:"attendance",format:e=>e?"Yes":"No",style:"width: 10px",sortable:!1},{name:"actions",align:"right",label:"",field:"actions"}]}},emits:["update:rows"],methods:{...q(I,{getMember:"options"}),onRemove({rowIndex:e}){console.func("components/ClassBookings:methods.onRemove()",arguments);const n=this.rows;n.splice(e,1),this.$emit("update:rows",n)},onChange(e){console.func("components/ClassBookings:methods.onChange()",arguments),this.allBookings.filter(l=>l.user.id===e.id).length>1&&this.$core.warning(this.$t("dialog.info.alreadyBooked"))}}};function G(e,n,l,y,s,i){const b=c("base-btn"),m=c("base-select"),g=c("base-table");return f(),p(g,{ref:"bookings",rows:l.rows,columns:s.columns,"hide-top":"","hide-pagination":"","has-actions":"","rows-per-page-options":[0],"no-data-label":e.$t("bookings.noData"),loaded:""},{"body-cell-sn":o(r=>[k(_(r.rowIndex+1),1)]),"body-cell-user":o(r=>[t(m,{readonly:l.hasSignOff,"bg-color":r.row.source?"green-1":"",placeholder:e.$t("placeholder.selectMember"),dense:"",borderless:"",modelValue:r.row.user,"onUpdate:modelValue":[u=>r.row.user=u,i.onChange],"filter-method":e.getMember,"map-options":"","use-filter":"","option-label":u=>`${u.name} (${u.id})`,query:u=>({filter:u,rowsPerPage:10,option:!0,blocked:!0})},X({_:2},[r.row.user?{name:"after",fn:o(()=>[t(b,{link:"",size:"md",icon:"fas fa-arrow-up-right-from-square",color:"primary",to:{name:"Single Member",params:{id:r.row.user.id},query:{action:"edit"}}},null,8,["to"]),l.useMessage?(f(),p(b,{key:0,link:"",size:"md",class:"q-ml-sm",color:"primary",icon:"fas fa-message",to:{name:"Single Enquiry",params:{id:"add"},query:{user:r.row.user.id}}},null,8,["to"])):x("",!0)]),key:"0"}:void 0]),1032,["readonly","bg-color","placeholder","modelValue","onUpdate:modelValue","filter-method","option-label","query"])]),"body-cell-attendance":o(r=>[t(U,{disable:l.hasSignOff,dense:"",modelValue:r.row.attendance,"onUpdate:modelValue":u=>r.row.attendance=u},null,8,["disable","modelValue","onUpdate:modelValue"])]),actions:o(r=>[t(z,{disable:l.hasSignOff,onClick:Q(u=>i.onRemove(r),["stop"]),size:"sm",round:"",flat:"",color:"grey",icon:"fas fa-trash-can"},null,8,["disable","onClick"])]),_:1},8,["rows","columns","no-data-label"])}var H=P(Y,[["render",G]]);const A={is_active:!0,stand_by_bookings:[],active_bookings:[]},K=e=>h.exports.orderBy(e,["user.last_name"],["asc"]),V=e=>Object.assign(e,{active_bookings:K(e.active_bookings)}),B={user_id:null,schedule_id:null,is_stand_by:!1,attendance:!1,status:!1,source:!1,canceled_at:null},Z={components:{SkeletonSinglePage:F,ClassBookings:H,ClassAt:L},data(){return{default:h.exports.cloneDeep(A),registration:h.exports.cloneDeep(A),loaded:!1,submited:!1}},methods:{...q(j,["store","show","update","calAttendance","calCapacity","pdf","logs"]),onSubmit(e){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onSubmit()",arguments),this.submited=!0,(this.creating?this.store:this.update)(this.registration).then(({data:l,message:y})=>{this.submited=!1,this.$q.notify(y);const s=V(l);this.registration=s,this.default=h.exports.cloneDeep(s),this.$router.push({name:"Single Week Schedule",params:{id:l.id},query:{action:"edit"}})}).catch(l=>{this.submited=!1,this.$core.error(l,{title:this.$t("dialog.title.error")})})},onReset(e){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onReset()",arguments),this.loaded=!1,this.$nextTick(()=>{this.registration=h.exports.cloneDeep(this.default),this.loaded=!0})},onCancel(e){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onCancel()",arguments),this.$router.go(-1)},onMarkAsAttended(){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onMarkAsAttended()",arguments),this.registration.active_bookings=this.registration.active_bookings.map(e=>({...e,attendance:!0})),this.registration.stand_by_bookings=this.registration.stand_by_bookings.map(e=>({...e,attendance:!0})),this.onSubmit()},onAddActive(e){if(console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onAddActive()",arguments),this.activeRemaining<=0)return this.$core.warning("No bookings is available for active slot."),!1;this.registration.active_bookings.push({...B})},onAddStandby(e){if(console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onAddStandby()",arguments),this.standByRemaining<=0)return this.$core.warning("No bookings is available for standby slot."),!1;this.registration.stand_by_bookings.push({...B,is_stand_by:!0})},onViewPdf(){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onViewPdf()",arguments),this.pdf(this.registration)},onSendBulkMessage(){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onSendBulkMessage()",arguments),this.$router.push({name:"Single Enquiry",params:{id:"add"},query:{users:this.registration.active_bookings.map(e=>e.user_id).join(",")}})},onCreateNote(e){console.func("pages/admins/week-schedules/WeekSchedulePage:methods.onCreateNote()",arguments),e?(this.registration.logs.splice(0,0,h.exports.cloneDeep(e)),this.default.logs.splice(0,0,h.exports.cloneDeep(e))):this.show(this.id).then(n=>{this.registration=n,this.default=h.exports.cloneDeep(n)})}},async mounted(){this.creating?this.loaded=!0:this.show(this.id).then(e=>{var l;const n=V(e);this.$app.setTitle((l=e.class)==null?void 0:l.name),this.registration=n,this.default=h.exports.cloneDeep(n),this.loaded=!0}).catch(e=>{this.$emit("error",e)})},computed:{edit(){return["add","edit"].includes(this.action)||this.id==="add"},creating(){return this.id==="add"},id(){return this.$route.params.id},action(){return this.$route.query.action},disable(){return this.default&&JSON.stringify(this.registration)===JSON.stringify(this.default)},resetable(){return this.default&&JSON.stringify(this.registration)!==JSON.stringify(this.default)},activeRemaining(){return this.registration.capacity-this.registration.active_bookings.length},standByRemaining(){return 5-this.registration.stand_by_bookings.length},allBookings(){return this.registration.active_bookings.concat(this.registration.stand_by_bookings)}}},$={class:"row q-col-gutter-md"},ee={class:"col-xs-12 col-sm-9"},se={class:"q-gutter-md"},te={class:"col-xs-12 col-md-3 col-sm-4"},oe={class:"col-xs-12 col-md-3 col-sm-4"},ne={class:"col-xs-12 col-md-3 col-sm-4"},ie={class:"col-xs-12 col-sm-3"},ae={class:"q-gutter-md"},le={class:"col-xs-12"},re={class:"col-xs-12"},de={class:"q-gutter-sm"},ce={class:"q-gutter-y-md"},ue=a("strong",null,"Attendance: ",-1),me=a("strong",{class:"q-ml-sm"},"Capacity: ",-1),ge=a("div",null,"Admin Sign off",-1),he={key:0,class:"text-grey"},fe={class:"col-xs-12"};function be(e,n,l,y,s,i){const b=c("base-item"),m=c("base-section"),g=c("base-btn"),r=c("class-bookings"),u=c("base-note-card"),v=c("base-label"),w=c("base-input"),M=c("class-at"),N=c("base-checkbox"),O=c("base-form"),D=c("skeleton-single-page");return f(),p(W,{padding:""},{default:o(()=>[s.loaded?(f(),p(O,{key:0,onSubmit:i.onSubmit,onCancel:i.onCancel,onReset:i.onReset,resetable:i.resetable,disable:i.disable,submited:s.submited,ref:"registration"},{default:o(()=>{var S;return[a("div",$,[a("div",ee,[a("div",se,[t(m,{flat:"",bordered:"",title:`${(S=s.registration.class)==null?void 0:S.name}`,"head-class":"q-pb-sm",gutter:""},{default:o(()=>{var d;return[a("div",te,[t(b,{icon:"fad fa-chalkboard-user","no-hover":"",dense:"",label:(d=s.registration.instructor)==null?void 0:d.name},null,8,["label"])]),a("div",oe,[t(b,{icon:"fad fa-calendar-day","no-hover":"",dense:"",label:`${s.registration.date_at_formated} (${s.registration.day})`},null,8,["label"])]),a("div",ne,[t(b,{icon:"fad fa-clock","no-hover":"",dense:"",label:`${s.registration.time}`},null,8,["label"])])]}),_:1},8,["title"]),t(m,{flat:"",bordered:"",title:e.$t("activeBookingsOutOf",{count:s.registration.total_active_bookings,capacity:s.registration.capacity}),"no-row":""},{action:o(()=>[t(g,{link:"",size:"lg",color:"primary",icon:"fad fa-messages",onClick:i.onSendBulkMessage},null,8,["onClick"]),t(g,{link:"",size:"lg",class:"q-ml-sm",disable:s.registration.has_sign_off||!s.registration.bookable,color:"primary",icon:"fad fa-circle-plus",onClick:i.onAddActive},null,8,["disable","onClick"])]),bottom:o(()=>[t(g,{disable:s.registration.has_sign_off||!s.registration.bookable,color:"primary",icon:"fad fa-circle-plus",link:"",label:e.$t("addMember"),onClick:i.onAddActive},null,8,["disable","label","onClick"])]),default:o(()=>[t(r,{"all-bookings":i.allBookings,class:"q-mt-sm","use-message":"","has-sign-off":s.registration.has_sign_off,rows:s.registration.active_bookings},null,8,["all-bookings","has-sign-off","rows"])]),_:1},8,["title"]),t(m,{flat:"",bordered:"",title:e.$t("standbyBookingsOutOf",{count:s.registration.total_stand_by_bookings,capacity:5}),"no-row":""},{action:o(()=>[t(g,{link:"",size:"lg",class:"q-ml-sm",disable:s.registration.has_sign_off||!s.registration.bookable,color:"primary",icon:"fad fa-circle-plus",onClick:i.onAddStandby},null,8,["disable","onClick"])]),bottom:o(()=>[t(g,{disable:s.registration.has_sign_off||!s.registration.bookable,color:"primary",icon:"fad fa-circle-plus",link:"",label:e.$t("addStandby"),onClick:i.onAddStandby},null,8,["disable","label","onClick"])]),default:o(()=>[t(r,{"all-bookings":i.allBookings,class:"q-mt-sm","has-sign-off":s.registration.has_sign_off,rows:s.registration.stand_by_bookings},null,8,["all-bookings","has-sign-off","rows"])]),_:1},8,["title"]),t(m,{flat:"",bordered:"",title:e.$t("activities"),description:e.$t("moduleActivityDesc",{module:e.$t("modules.singular.registration")}),"no-row":"","body-class":"q-px-lg"},{default:o(()=>[t(R,{class:"comments",color:"secondary"},{default:o(()=>[t(u,{"module-action":e.logs,"module-id":s.registration.id,class:"comment",creating:"",onCreate:i.onCreateNote,"no-rag":""},null,8,["module-action","module-id","onCreate"]),(f(!0),C(T,null,J(s.registration.logs,d=>(f(),p(u,E({class:"comment",key:d.id},d,{"module-id":s.registration.id,user:d.admin}),null,16,["module-id","user"]))),128))]),_:1})]),_:1},8,["title","description"])])]),a("div",ie,[a("div",ae,[t(m,{flat:"",bordered:"",title:e.$t("remote")},{default:o(()=>[a("div",le,[t(v,null,{default:o(()=>[k(_(e.$t("link")),1)]),_:1}),t(w,{placeholder:"https://",modelValue:s.registration.remote_link,"onUpdate:modelValue":n[0]||(n[0]=d=>s.registration.remote_link=d),name:"remote_link",type:"url"},null,8,["modelValue"])]),a("div",re,[t(v,null,{default:o(()=>[k(_(e.$t("code")),1)]),_:1}),t(w,{placeholder:"XXXXXXXX-XXX",modelValue:s.registration.remote_code,"onUpdate:modelValue":n[1]||(n[1]=d=>s.registration.remote_code=d),name:"remote_code"},null,8,["modelValue"])])]),_:1},8,["title"]),t(m,{flat:"",bordered:"","no-row":"",title:e.$t("statsAndSettings")},{bottom:o(()=>[a("div",de,[t(g,{link:"",label:e.$t("markAllAttended"),onClick:i.onMarkAsAttended,icon:"fad fa-square-check"},null,8,["label","onClick"]),t(g,{link:"",icon:"fad fa-print",label:e.$t("print"),onClick:i.onViewPdf},null,8,["label","onClick"])])]),default:o(()=>[a("div",ce,[a("div",null,[ue,t(M,{"has-sign-off":s.registration.has_sign_off,value:e.calAttendance(s.registration)},null,8,["has-sign-off","value"]),k("% "),me,k(" "+_(e.calCapacity(s.registration)),1)]),a("div",null,[t(N,{dense:"",modelValue:s.registration.has_sign_off,"onUpdate:modelValue":n[2]||(n[2]=d=>s.registration.has_sign_off=d)},{default:o(()=>[ge,s.registration.has_sign_off&&s.registration.admin?(f(),C("div",he,_(s.registration.admin.name)+" on "+_(s.registration.sign_off_at),1)):x("",!0)]),_:1},8,["modelValue"])])])]),_:1},8,["title"]),t(m,{flat:"",bordered:"",title:e.$t("note")},{default:o(()=>[a("div",fe,[t(w,{placeholder:e.$t("placeholder.noteInstructor"),type:"textarea",modelValue:s.registration.note,"onUpdate:modelValue":n[3]||(n[3]=d=>s.registration.note=d),name:"note"},null,8,["placeholder","modelValue"])])]),_:1},8,["title"])])])])]}),_:1},8,["onSubmit","onCancel","onReset","resetable","disable","submited"])):(f(),p(D,{key:1}))]),_:1})}var qe=P(Z,[["render",be]]);export{qe as default};
