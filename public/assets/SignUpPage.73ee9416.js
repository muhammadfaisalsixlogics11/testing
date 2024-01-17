import{_ as C,o as h,d as _,e as r,t as a,n as D,N as U,u as M,r as g,a as $,w as m,f as o,ac as z,g as F,h as u,a4 as N,l as R,a8 as Q,aa as H,M as V,Q as k,af as j,a6 as K,ag as P,aF as x,F as S,J as O,a5 as B}from"./index.f4591746.js";import{Q as J}from"./QForm.ad0d22df.js";import{Q as X}from"./QPage.a3fc6f07.js";import{l as Y,P as G,u as q}from"./stripe.esm.91383e67.js";import{P as W}from"./PaymentMethodCard.42f1e9ef.js";import{A as Z}from"./AddressFields.18d5fcfa.js";import"./QItemLabel.e0825433.js";import"./member.bccfc6a2.js";import"./QBadge.d21ef799.js";import"./QMenu.528d1653.js";import"./selection.286bc7d5.js";import"./StateSelect.d82d81fd.js";import"./index.becf6c0c.js";import"./CitySelect.70a605d1.js";const ee=(e,t)=>t&&t.code&&t.code.includes(e),se={props:{element:String,error:Object,hasError:{type:Function,default:ee}}},te=["id"],re=r("div",{class:"error-icon"},[r("i",{class:"q-icon text-negative notranslate material-icons","aria-hidden":"true",role:"presentation"}," error ")],-1),oe={class:"error q-field__bottom--animated"};function ne(e,t,l,c,s,i){return h(),_("div",{class:D({"stripe-field":!0,"has-error":l.hasError(l.element,l.error)})},[r("div",{class:"q-field__native",id:`card-${l.element}`},null,8,te),re,r("div",oe,a(l.error.message),1)],2)}var le=C(se,[["render",ne]]);const w={base:{iconColor:"#666EE8",color:"#31325F",lineHeight:"28px",fontWeight:400,fontSize:"14px","::placeholder":{color:"#CFD7E0"}}},ie={components:{StripeField:le},props:{title:String,amount:[Number,String],btnLabel:String,processing:Boolean,pay:Boolean,add:Boolean,disabled:Boolean,dense:Boolean,hasButton:Boolean,billingDetails:Object},data(){return{loading:Boolean(this.processing),stripe:null,cardNumberElement:null,cardExpiryElement:null,cardCvcElement:null,error:{}}},emits:["failed","success","confirmed"],methods:{submit(){this.$refs["card-button"].$el.click()},confirmPaymentMethod({client_secret:e,payment_method:t}){this.loading=!0,this.stripe.confirmCardPayment(e,{setup_future_usage:"off_session",payment_method:t.id}).then(({error:c,paymentIntent:s})=>{this.loading=!1,c?(this.$emit("failed",c.message),console.log("paymentIntent",c)):(this.$emit("confirmed",s),console.log("paymentIntent",s))})}},async mounted(){const e=this.stripe=await Y(this.stripe_key),t=e.elements(),l=this.cardNumberElement=t.create("cardNumber",{style:w}),c=this.cardExpiryElement=t.create("cardExpiry",{style:w}),s=this.cardCvcElement=t.create("cardCvc",{style:w});l.mount("#card-number"),c.mount("#card-expiry"),s.mount("#card-cvc"),document.getElementById("card-button").addEventListener("click",async d=>{this.error={},this.loading=!0;const{paymentMethod:f,error:p}=await e.createPaymentMethod("card",l,{billing_details:{...this.billingDetails}});p?(console.log("paymentMethod",p),this.loading=!1,this.error=p,p.code&&["expiry","cvc","number"].includes(p.code)&&this.$emit("failed",p.message)):(this.loading=!1,console.log("paymentMethod",f),this.$emit("success",f))})},computed:{...U(M,["stripePayment"]),stripe_key(){var e,t;return(t=(e=this.stripePayment)==null?void 0:e.API_KEY)!=null?t:"pk_test_mKQ8m5rUcQoXi9sHSLXnuoKt"},label(){return this.btnLabel||this.$t("payAmount",{amount:this.$core.money(this.amount)})},paymentMethods(){return[{title:"Card",type:"card",remember:!0,redirects:!1,element:"card"},{title:"Alipay",type:"alipay"},{title:"BECS Direct Debit",type:"au_becs_debit",remember:!0,redirects:!1,element:"auBankAccount"},{title:"Bancontact",type:"bancontact",remember:!0},{title:"EPS",type:"eps",element:"epsBank"},{title:"Giropay",type:"giropay"},{title:"iDEAL",type:"ideal",remember:!0,element:"idealBank"},{title:"SEPA Debit",type:"sepa_debit",remember:!0,redirects:!1,element:"iban",options:{supportedCountries:["SEPA"]}}].map(t=>({remember:!1,redirects:!0,options:{},...t}))}},watch:{processing:{deep:!0,handler(e){this.loading=Boolean(e)}}},unmounted(){this.cardNumberElement.unmount(),this.cardExpiryElement.unmount(),this.cardCvcElement.unmount(),[document.querySelectorAll("[name^=__privateStripeMetricsController]"),document.querySelectorAll("[name^=__privateStripeController]")].forEach(t=>t.forEach(l=>{l.parentNode.removeChild(l)}))}},ae={key:0,class:"text-h6 q-mb-md"},me={class:"row q-col-gutter-lg"},ce={class:"col-xs-12 col-sm-4"},de={class:"col-xs-12 col-sm-4"},ue={class:"col-xs-12 col-sm-4"},pe={class:"col-xs-12 col-sm-4 self-end actions"};function he(e,t,l,c,s,i){const d=g("base-label"),f=g("stripe-field");return h(),$(H,{class:"stripe-custom-credit-card"},{default:m(()=>[o(z,{class:D({"q-pa-none":l.dense})},{default:m(()=>[l.title?(h(),_("div",ae,a(l.title),1)):F("",!0),r("div",me,[r("div",ce,[o(d,null,{default:m(()=>[u(a(e.$t("cardNumber")),1)]),_:1}),o(f,{element:"number",error:s.error},null,8,["error"])]),r("div",de,[o(d,null,{default:m(()=>[u(a(e.$t("expiryDate")),1)]),_:1}),o(f,{element:"expiry",error:s.error},null,8,["error"])]),r("div",ue,[o(d,null,{default:m(()=>[u(a(e.$t("cvcCardVerificationCode")),1)]),_:1}),o(f,{element:"cvc",error:s.error},null,8,["error"])]),r("div",pe,[N(o(R,{color:"primary","no-caps":"",class:"full-width",icon:"far fa-credit-card",label:i.label,loading:s.loading,disabled:l.disabled,id:"card-button",ref:"card-button"},null,8,["label","loading","disabled"]),[[Q,l.hasButton]])])])]),_:1},8,["class"])]),_:1})}var fe=C(ie,[["render",he]]);const ge="users",_e={components:{StripeCustomCard:fe,PlanCard:G,PaymentMethodCard:W,AddressFields:Z},data(){return{form:{title:"Mr",plan:null,interval:"month",terms:!1,paymentMethod:null,guard:ge},errors:{},processing:!1,isPwd1:!0,isPwd2:!0}},methods:{...V(M,["signUp","currentUser"]),...V(q,["confirm","subscribe","getPlans"]),onSubmit(){console.func("pages/SignUpPage:methods.onSubmit()",arguments),this.form.manual_payment?this.onManualPayment():this.$refs.stripeCard.submit()},onReset(){this.errors={},this.processing=!0},onSuccess({id:e,card:t}){console.func("pages/SignUpPage:methods.onSuccess()",arguments),this.onReset(),this.processing=!0;const{last4:l}=t;this.signUp(this.form).then(c=>{console.log("pages/SignUpPage:methods.signUp().then()",c),this.subscribe({plan:this.form.plan,interval:this.form.interval,payment_method:e,last_four_digit:l}).then(s=>{console.log("pages/SignUpPage:methods.signUp().then().subscribe().then()",s);const{message:i,requiresAction:d,paymentIntent:f}=s;d?this.$refs.stripeCard.confirmPaymentMethod(f):this.currentUser("users").then(()=>{this.$core.warning(i,{title:this.$t("dialog.title.success")}),this.$router.push({name:"Dashboard"}),this.processing=!1})}).catch(s=>{this.$router.push({name:"Dashboard"}),this.$core.error(s,{title:this.$t("dialog.title.error")}),this.processing=!1})}).catch(({errors:c,message:s})=>{this.processing=!1,c?this.errors=c:this.$core.error(s)})},onSelectPaymentMethod(e){console.func("pages/SignUpPage:methods.onSelectPaymentMethod()",arguments),this.form.manual_payment=e.provider==="manual"},onManualPayment(){console.func("pages/SignUpPage:methods.onManualPayment()",arguments),this.onReset(),this.processing=!0,this.signUp(this.form).then(e=>{console.log("pages/SignUpPage:methods.signUp().then()",e),this.subscribe({plan:this.form.plan,interval:this.form.interval,payment_method:"manual"}).then(t=>{console.log("pages/SignUpPage:methods.signUp().then().subscribe().then()",t);const{message:l}=t;this.currentUser("users").then(()=>{this.$core.warning(l,{title:this.$t("dialog.title.payment")}),this.$router.push({name:"Dashboard"}),this.processing=!1})}).catch(t=>{this.$router.push({name:"Dashboard"}),this.$core.error(t,{title:this.$t("dialog.title.error")}),this.processing=!1})}).catch(({errors:e,message:t})=>{this.processing=!1,e?this.errors=e:this.$core.error(t)})},onFailed(e){console.func("pages/SignUpPage:methods.onFailed()",arguments),this.$core.error(e,{title:this.$t("dialog.title.error")}),this.processing=!1},onConfirmed(e){console.func("pages/SignUpPage:methods.onConfirmed()",arguments),this.confirm({plan:this.plan.key,payment_intent:e.id}).then(({message:t})=>{this.$core.success(t,{title:this.$t("dialog.title.success")}),this.$router.push({name:"Dashboard"}),this.processing=!1}).catch(t=>{this.$router.push({name:"Dashboard"}),this.$core.error(t,{title:this.$t("dialog.title.error")}),this.processing=!1})}},computed:{...U(M,["paymentMethods"]),...U(q,["plans"]),plan(){return this.plans.find(({id:e})=>e===this.form.plan)},price(){var e,t,l;return(e=this.plan)!=null&&e.is_custom?(t=this.plan)==null?void 0:t.prices[0]:(l=this.plan)==null?void 0:l.prices.find(({interval:c})=>c===this.form.interval)},intervalLabel(){return this.$core.priceToInterval(this.price,!1,!0)},amount(){var e;return((e=this.price)==null?void 0:e.amount)||0},billingDetails(){return{name:`${this.form.first_name} ${this.form.last_name}`,email:this.form.email,phone:this.form.phone_number,address:{line1:this.form.line1,line2:this.form.line2,city:this.form.city,postal_code:this.form.postal_code}}},queryPlan(){return Number(this.$route.query.plan)},hasQueryPlan(){return Boolean(this.plans.filter(({id:e})=>e===this.queryPlan).length)},privacyUrl(){return"https://nitrofit28.coderstm.com/privacy"},termsUrl(){return"https://nitrofit28.coderstm.com/terms"}},async mounted(){await this.getPlans(),this.$nextTick(()=>{var e,t;Object.assign(this.form,{plan:this.hasQueryPlan?this.queryPlan:(e=this.plans[0])==null?void 0:e.id,interval:((t=this.$route.query)==null?void 0:t.interval)||"month",paymentMethod:this.paymentMethods[0]}),this.onSelectPaymentMethod(this.paymentMethods[0])})}},ye={class:"signup-container q-pa-xl"},be={class:"text-h5 q-mb-md"},ve={class:"row q-col-gutter-md"},Pe={class:"col-sm-12 col-xs-12"},Se={class:"text-h6"},we={class:"col-xs-12 col-sm-2"},Ue={class:"col-sm-5 col-xs-12"},Me={class:"col-sm-5 col-xs-12"},Ce={class:"col-xs-12 col-sm-12"},Ee={class:"row q-col-gutter-md"},Ve={class:"col-sm-4 col-xs-12"},ke={class:"col-sm-4 col-xs-12"},xe={class:"col-sm-12 col-xs-12"},Be={class:"col-xs-12 col-sm-12"},qe={class:"row q-col-gutter-md"},De={class:"col-sm-4 col-xs-12"},$e={class:"col-sm-4 col-xs-12"},Fe={class:"col-sm-12 col-xs-12"},Ne={class:"flex"},Qe={class:"text-h6"},Ae={class:"row q-pt-md q-col-gutter-md"},Le={key:0,class:"col-sm-12 co-xs-12 plan-actions"},Ie={class:"plan q-pa-lg"},Te={class:"text-h6"},ze={class:"info"},Re={class:"features"},He={class:"flex"},je=["innerHTML"],Ke={class:"col-sm-12 col-xs-12"},Oe={class:"row q-col-gutter-md"},Je={class:"col-sm-12 col-xs-12"},Xe={class:"text-h6"},Ye={class:"col-sm-12 col-xs-12"},Ge={class:"col-xs-12 col-sm-5 offset-sm-4"},We={class:"terms"},Ze={class:"col-sm-3 co-xs-12"};function es(e,t,l,c,s,i){const d=g("base-label"),f=g("base-select"),p=g("base-input"),A=g("address-fields"),L=g("plan-card"),I=g("payment-method-card"),T=g("stripe-custom-card"),v=g("base-btn");return h(),$(X,{class:"row flex-center items-center vertical-middle",padding:""},{default:m(()=>[r("div",ye,[r("div",be,a(e.$t("Signup Form")),1),o(J,{onSubmit:i.onSubmit},{default:m(()=>{var E;return[r("div",ve,[r("div",Pe,[r("div",Se,a(e.$t("Personal details")),1)]),r("div",we,[o(d,null,{default:m(()=>[u(a(e.$t("title")),1)]),_:1}),o(f,{modelValue:s.form.title,"onUpdate:modelValue":t[0]||(t[0]=n=>s.form.title=n),"error-message":e.$core.errorMessage("title",s.errors),error:e.$core.hasError("title",s.errors),dense:"",outlined:"",options:["Mr","Mrs","Ms","Miss","Mx","Dr","Fr","Prof"],name:"title"},null,8,["modelValue","error-message","error"])]),r("div",Ue,[o(d,null,{default:m(()=>[u(a(e.$t("firstName")),1)]),_:1}),o(p,{"error-message":e.$core.errorMessage("first_name",s.errors),error:e.$core.hasError("first_name",s.errors),placeholder:"Jone",modelValue:s.form.first_name,"onUpdate:modelValue":t[1]||(t[1]=n=>s.form.first_name=n),name:"first_name"},null,8,["error-message","error","modelValue"])]),r("div",Me,[o(d,null,{default:m(()=>[u(a(e.$t("surname")),1)]),_:1}),o(p,{"error-message":e.$core.errorMessage("last_name",s.errors),error:e.$core.hasError("last_name",s.errors),placeholder:"Done",modelValue:s.form.last_name,"onUpdate:modelValue":t[2]||(t[2]=n=>s.form.last_name=n),name:"last_name"},null,8,["error-message","error","modelValue"])]),r("div",Ce,[r("div",Ee,[r("div",Ve,[o(d,null,{default:m(()=>[u(a(e.$t("email")),1)]),_:1}),o(p,{"error-message":e.$core.errorMessage("email",s.errors),error:e.$core.hasError("email",s.errors),placeholder:"yourname@example.com",modelValue:s.form.email,"onUpdate:modelValue":t[3]||(t[3]=n=>s.form.email=n),name:"email"},null,8,["error-message","error","modelValue"])]),r("div",ke,[o(d,null,{default:m(()=>[u(a(e.$t("phoneNumber")),1)]),_:1}),o(p,{"error-message":e.$core.errorMessage("phone_number",s.errors),error:e.$core.hasError("phone_number",s.errors),placeholder:"+44 1632 960806",modelValue:s.form.phone_number,"onUpdate:modelValue":t[4]||(t[4]=n=>s.form.phone_number=n),name:"phone_number"},null,8,["error-message","error","modelValue"])])])]),r("div",xe,[o(A,{modelValue:s.form,"onUpdate:modelValue":t[5]||(t[5]=n=>s.form=n)},null,8,["modelValue"])]),r("div",Be,[r("div",qe,[r("div",De,[o(d,null,{default:m(()=>[u(a(e.$t("password")),1)]),_:1}),o(p,{modelValue:s.form.password,"onUpdate:modelValue":t[7]||(t[7]=n=>s.form.password=n),"error-message":e.$core.errorMessage("password",s.errors),error:e.$core.hasError("password",s.errors),type:s.isPwd1?"password":"text",name:"password"},{append:m(()=>[o(k,{name:s.isPwd1?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[6]||(t[6]=n=>s.isPwd1=!s.isPwd1)},null,8,["name"])]),_:1},8,["modelValue","error-message","error","type"])]),r("div",$e,[o(d,null,{default:m(()=>[u(a(e.$t("confirmPassword")),1)]),_:1}),o(p,{modelValue:s.form.password_confirmation,"onUpdate:modelValue":t[9]||(t[9]=n=>s.form.password_confirmation=n),name:"password_confirmation","error-message":e.$core.errorMessage("password_confirmation",s.errors),error:e.$core.hasError("password_confirmation",s.errors),type:s.isPwd2?"password":"text"},{append:m(()=>[o(k,{name:s.isPwd2?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[8]||(t[8]=n=>s.isPwd2=!s.isPwd2)},null,8,["name"])]),_:1},8,["modelValue","error-message","error","type"])])])]),r("div",Fe,[r("div",Ne,[r("div",Qe,a(e.$t("Select a plan")),1),o(j),o(K,{dense:"",modelValue:s.form.interval,"onUpdate:modelValue":t[10]||(t[10]=n=>s.form.interval=n),"true-value":"year","false-value":"month",label:e.$t("yearly"),name:"interval"},null,8,["modelValue","label"])]),r("div",Ae,[(h(!0),_(S,null,P(e.plans,(n,y)=>(h(),_("div",{class:"col-xs-12 col-sm-4",key:y},[o(L,x({flat:""},n,{interval:s.form.interval,"is-custom":n.is_custom,current:s.form.plan,"onUpdate:current":b=>s.form.plan=b,dense:""}),null,16,["interval","is-custom","current","onUpdate:current"])]))),128))])]),i.plan?(h(),_("div",Le,[r("div",Ie,[r("div",Te,a(e.$t("Your plan")),1),r("div",ze,a(i.plan.label)+" # "+a(e.$core.money(i.amount))+" "+a(i.intervalLabel),1),r("div",Re,[r("ul",He,[(h(!0),_(S,null,P(i.plan.features,(n,y)=>(h(),_("li",{key:y},[r("span",{innerHTML:n},null,8,je)]))),128))])])])])):F("",!0),r("div",Ke,[r("div",Oe,[r("div",Je,[r("div",Xe,a(e.$t("paymentMethod")),1)]),(h(!0),_(S,null,P(e.paymentMethods,(n,y)=>(h(),_("div",{key:y,class:"col-xs-12 col-sm-6 col-md-4"},[o(I,x({selected:s.form.paymentMethod,"onUpdate:selected":[t[11]||(t[11]=b=>s.form.paymentMethod=b),b=>i.onSelectPaymentMethod(n)]},n,{"pay-mode":""}),null,16,["selected","onUpdate:selected"])]))),128))])]),N(r("div",Ye,[o(T,{title:e.$t("cardDetails"),ref:"stripeCard",disabled:!s.form.terms,class:"pay-and-sign-up",amount:i.amount,processing:s.processing,"billing-details":i.billingDetails,flat:"",dense:"",onSuccess:i.onSuccess,onConfirmed:i.onConfirmed,onFailed:i.onFailed},null,8,["title","disabled","amount","processing","billing-details","onSuccess","onConfirmed","onFailed"])],512),[[Q,((E=s.form.paymentMethod)==null?void 0:E.provider)==="stripe"]]),r("div",Ge,[r("div",We,[o(O,{dense:"",size:"sm",modelValue:s.form.terms,"onUpdate:modelValue":t[14]||(t[14]=n=>s.form.terms=n)},{default:m(()=>[u(" I have read and agree to the "),o(v,{href:i.privacyUrl,onClick:t[12]||(t[12]=B(n=>e.$core.openURL(i.privacyUrl),["stop"])),size:"11px",type:"a",link:"",target:"_blank"},{default:m(()=>[u(" privacy policy ")]),_:1},8,["href"]),u(" and "),o(v,{href:i.termsUrl,onClick:t[13]||(t[13]=B(n=>e.$core.openURL(i.termsUrl),["stop"])),size:"11px",type:"a",link:"",target:"_blank"},{default:m(()=>[u(" terms and conditions ")]),_:1},8,["href"])]),_:1},8,["modelValue"])])]),r("div",Ze,[o(v,{style:{width:"180px"},disabled:!s.form.terms,loading:s.processing,label:e.$t("confirmPayment"),type:"submit"},null,8,["disabled","loading","label"])])])]}),_:1},8,["onSubmit"])])]),_:1})}var fs=C(_e,[["render",es]]);export{fs as default};
