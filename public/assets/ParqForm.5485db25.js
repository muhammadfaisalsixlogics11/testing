import{Q as x}from"./QBanner.ee0b01a4.js";import{Q as B}from"./QToolbarTitle.bb8a8489.js";import{Q as A}from"./QToolbar.25065141.js";import{aE as p,M as b,u as q,N,_ as M,r as y,o as i,a as U,w as u,e as l,f as s,h as v,t as o,d,F as g,ag as _}from"./index.f4591746.js";import{u as H}from"./member.bccfc6a2.js";const V={accept:!1,questions:[{label:"Medical questions",list:[{label:"Do you know of any reason you should not exercise or increase your physical activity",value:!1},{label:"Are you recovering from an illness, injury or operation",value:!1},{label:"Are you pregnant",value:!1},{label:"Not used to being physically active",value:!1},{label:"Do you suffer from Asthma",value:!1},{label:"Has a Doctor said that you have a heart condition and you should only do physical activity recommended by a Doctor",value:!1},{label:"When you perform physical activity, do you feel a pain in your chest",value:!1},{label:"When not performing physical activity, have you recently suffered chest pain",value:!1},{label:"Do you have bone or joint problems that may be made worse with physical activity",value:!1},{label:"Are you currently on any medication for blood pressure or a heart condition",value:!1},{label:"I am aware of other reasons why I should not take part in physical activity in a fitness centre environment",value:!1}]},{label:"Disclaimers",list:[{label:"I accept the statements below by ticking the checkbox next to each statement.",feature:!1,value:!1,required:!0},{label:"I confirm that my responses are accurate",value:!1,required:!0},{label:"If I have highlighted any health concerns detailed above I understand that I am required to discuss my exercise programme within a gym environment with my Doctor or Health Professional and to take advice on activities which are safe to participate in.",value:!1,required:!0},{label:"In the event that I have been advised to seek medical clearance prior to undertaking exercise, I agree to contact my doctor and take responsibility for obtaining written permission prior to the commencement of my exercise programme in a gym environment.",value:!1,required:!0},{label:"Should any change in my Health or unusual symptoms occur at any point, I will cease participation and inform a Doctor of these symptoms.",value:!1,required:!0},{label:"I understand that I must notify you immediately of any changes in my health.",value:!1,required:!0},{label:"Assumption of Risk: I hereby state that I have read, understood and answered honestly the questions above. I also state that I wish to participate in activities, which may include aerobic exercise, resistance exercise and stretching. I realise that my participation in these activities involves the risk of injury and even the possibility of death. Furthermore, I hereby confirm that I am voluntarily engaging in an acceptable level of exercise, which has been recommended to me",value:!1,required:!0},{label:"We assume no liability for persons who undertake physical activity. Should you be in any doubt after completing this questionnaire you agree to consult your doctor prior to undertaking physical activity.",value:!1,required:!0}]}]},P={data(){return{parq:p.exports.cloneDeep(V),default:p.exports.cloneDeep(V)}},props:{member:Object,requestParq:Boolean},emits:["done"],methods:{...b(H,["update_parq"]),...b(q,{update_request_parq:"update_parq"}),async onSubmit(e){console.func("components/ParqForm:methods.onSubmit()",arguments);let a=!0;if(this.noRequires&&await this.$core.confirm("You have ticked to one of the medical questions. Can you please confirm you can manage this area yourself and have the enquiry of your doctor to carry out exercise.").catch(()=>{a=!1}),!a)return!1;(this.requestParq?this.update_request_parq:this.update_parq)({...this.parq,id:this.member.id}).then(({message:m,data:t})=>{this.$emit("done",this.parq),this.$core.success(m),this.parq=t}).catch(m=>{this.$core.error(m,{title:this.$t("dialog.title.error")})})}},computed:{...N(q,["user"]),disable(){return!this.parq.accept||this.requires.length>0||JSON.stringify(this.parq)===JSON.stringify(this.default)},requires(){return this.parq.questions.filter(e=>e.list.filter(a=>a.required&&!a.value).length)},noRequires(){return this.parq.questions.filter(e=>e.list.filter(a=>!a.required&&a.value).length).length>0},readonly(){return"created_at"in this.parq},completedBy(){return this.parq.updated_by.admin?this.parq.updated_by.admin.name:this.$t("completedByMember")}},watch:{member:{deep:!0,handler(e){this.parq={...this.parq,...e}}}},mounted(){this.member.parq?this.parq=p.exports.cloneDeep(this.member.parq):Object.assign(this.parq,{name:this.member.name,email:this.member.email}),this.default=p.exports.cloneDeep(this.parq)}},Q={class:"q-my-md q-gutter-y-sm info"},T={class:""},j={class:"q-pt-sm row q-col-gutter-sm"},C={class:"col-xs-12"},F={class:"col-xs-12 col-sm-6"},Y={class:"col-xs-12 col-sm-6"},O={key:0},L={key:1},R={class:"q-pt-sm q-gutter-y-sm"},W=["innerHTML"];function E(e,a,I,m,t,n){const f=y("base-checkbox"),c=y("base-input"),k=y("base-form");return i(),U(k,{disable:n.disable,"no-action":n.readonly,"save-label":e.$t("submit"),cancelable:!1,class:"parq-form",onSubmit:n.onSubmit,"no-events":""},{"after-actions":u(()=>[l("div",{class:"text-right",innerHTML:e.$t("parqIConfirmedBy",{name:t.parq.name+" "})},null,8,W)]),default:u(()=>[s(x,{class:"bg-green-1"},{action:u(()=>[s(f,{readonly:n.readonly,"left-label":"",dense:"",modelValue:t.parq.accept,"onUpdate:modelValue":a[0]||(a[0]=r=>t.parq.accept=r),label:e.$t("iAccept")},null,8,["readonly","modelValue","label"])]),default:u(()=>[v(o(e.$t("parqInfo"))+" ",1)]),_:1}),l("div",Q,[l("div",T,o(e.$t("generalInformation")),1),s(c,{readonly:n.readonly,modelValue:t.parq.name,"onUpdate:modelValue":a[1]||(a[1]=r=>t.parq.name=r),placeholder:e.$t("placeholder.name")},null,8,["readonly","modelValue","placeholder"]),s(c,{readonly:n.readonly,modelValue:t.parq.email,"onUpdate:modelValue":a[2]||(a[2]=r=>t.parq.email=r),placeholder:e.$t("placeholder.emailAddress")},null,8,["readonly","modelValue","placeholder"]),l("div",j,[l("div",C,o(e.$t("emergencyContactNumber")),1),l("div",F,[s(c,{readonly:n.readonly,modelValue:t.parq.emergency_contact_name,"onUpdate:modelValue":a[3]||(a[3]=r=>t.parq.emergency_contact_name=r),placeholder:e.$t("placeholder.name")},null,8,["readonly","modelValue","placeholder"])]),l("div",Y,[s(c,{readonly:n.readonly,modelValue:t.parq.emergency_contact_phone_number,"onUpdate:modelValue":a[4]||(a[4]=r=>t.parq.emergency_contact_phone_number=r),placeholder:e.$t("placeholder.contactNumber")},null,8,["readonly","modelValue","placeholder"])])]),s(c,{readonly:n.readonly,modelValue:t.parq.allergies,"onUpdate:modelValue":a[5]||(a[5]=r=>t.parq.allergies=r),type:"textarea",placeholder:e.$t("placeholder.parqHealth")},null,8,["readonly","modelValue","placeholder"]),t.parq.updated_by?(i(),d("div",O,[l("div",null,o(e.$t("name"))+": "+o(n.completedBy),1),l("div",null,o(e.$t("date"))+": "+o(t.parq.updated_by.date_time),1)])):(i(),d("div",L,[l("div",null,o(e.$t("name"))+": "+o(e.user.name),1),l("div",null,o(e.$t("date"))+": "+o(e.$core.formatDate(new Date,"DD/MM/YYYY")),1)]))]),(i(!0),d(g,null,_(t.parq.questions,(r,w)=>(i(),d("div",{key:w},[s(A,{class:"q-my-sm bg-green-1"},{default:u(()=>[s(B,{class:"text-center text-body1"},{default:u(()=>[v(o(r.label),1)]),_:2},1024)]),_:2},1024),l("div",R,[(i(!0),d(g,null,_(r.list,(h,D)=>(i(),d("div",{key:D},[s(f,{readonly:n.readonly,modelValue:h.value,"onUpdate:modelValue":S=>h.value=S,label:h.label},null,8,["readonly","modelValue","onUpdate:modelValue","label"])]))),128))])]))),128))]),_:1},8,["disable","no-action","save-label","onSubmit"])}var Z=M(P,[["render",E]]);export{Z as P};
