import{m as re,v as z,y as V,z as B,aW as _e,aV as ve,ar as be,B as xe,db as ye,D as G,E as ce,dc as ke,dJ as H,a3 as oe,dx as J,dK as Y,au as Pe,dL as se,d1 as Ce,s as de,aB as Se,aY as X,d6 as qe,_ as T,r as p,o as u,a as y,w as i,f as s,e as v,t as k,h as w,l as ee,g as L,d as b,F as I,ag as K,aE as M,K as te,I as O,O as Ve,a4 as ue,aZ as we,aa as me,n as j,ac as Qe,cJ as Le,aK as E,M as ne,Q as $e,aF as De}from"./index.f4591746.js";import{Q as Z}from"./QToolbar.25065141.js";import{Q as ae}from"./QScrollArea.799dc942.js";import{Q as Oe}from"./QBadge.d21ef799.js";import{Q as ie}from"./QToolbarTitle.bb8a8489.js";import{Q as Ie}from"./QDrawer.9d541bef.js";import{Q as Te}from"./QPage.a3fc6f07.js";import{U as Ue,B as Be,A as Ee,C as Re}from"./ChangeLocation.c5b10508.js";import{C as Ae}from"./CategorySelect.35e16ead.js";import{Q as $}from"./QItemLabel.e0825433.js";import{Q as Ne}from"./QuantityInput.d7261689.js";import{P as fe}from"./ProductThumbnail.a3a6b6e5.js";import{u as ze}from"./index.cf48d36e.js";import{u as He}from"./order.da986648.js";import{C as Me}from"./CustomProduct.7a130550.js";import{Q}from"./QSkeleton.28ea6420.js";import"./QResizeObserver.2b848d0f.js";import"./QScrollObserver.6a641295.js";import"./TouchPan.5888a3fc.js";import"./touch.3df10340.js";import"./selection.286bc7d5.js";import"./member.bccfc6a2.js";import"./QMenu.528d1653.js";import"./QMarkupTable.6a375296.js";import"./QPopupEdit.9a19f090.js";import"./QSelect.8c43ef08.js";import"./QField.b3ff45f1.js";import"./QChip.b97d9493.js";import"./rtl.b51694b1.js";import"./payment-method.8a76f8c0.js";import"./AddressFields.18d5fcfa.js";import"./StateSelect.d82d81fd.js";import"./index.becf6c0c.js";import"./CitySelect.70a605d1.js";import"./location.49d6720e.js";import"./category.a86d72e1.js";import"./QImg.f5d5bcf2.js";import"./tag.393c5c6c.js";import"./collection.c831f4b1.js";const{passive:D}=ke;var je=re({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(e,{slots:o,emit:a}){const m=z(!1),t=z(!0),n=z(null),r=z(null);let f=e.initialIndex||0,l,c;const x=V(()=>"q-infinite-scroll__loading"+(m.value===!0?"":" invisible"));function d(){if(e.disable===!0||m.value===!0||t.value===!1)return;const g=H(l),S=J(l),U=se(l);e.reverse===!1?Math.round(S+U+e.offset)>=Math.round(g)&&_():Math.round(S)<=e.offset&&_()}function _(){if(e.disable===!0||m.value===!0||t.value===!1)return;f++,m.value=!0;const g=H(l);a("load",f,S=>{t.value===!0&&(m.value=!1,oe(()=>{if(e.reverse===!0){const U=H(l),he=J(l),ge=U-g;Y(l,he+ge)}S===!0?C():n.value&&n.value.closest("body")&&c()}))})}function P(){f=0}function q(){t.value===!1&&(t.value=!0,l.addEventListener("scroll",c,D)),d()}function C(){t.value===!0&&(t.value=!1,m.value=!1,l.removeEventListener("scroll",c,D),c!==void 0&&c.cancel!==void 0&&c.cancel())}function R(){if(l&&t.value===!0&&l.removeEventListener("scroll",c,D),l=Pe(n.value,e.scrollTarget),t.value===!0){if(l.addEventListener("scroll",c,D),e.reverse===!0){const g=H(l),S=se(l);Y(l,g-S)}d()}}function h(g){f=g}function A(g){g=parseInt(g,10);const S=c;c=g<=0?d:Ce(d,isNaN(g)===!0?100:g),l&&t.value===!0&&(S!==void 0&&l.removeEventListener("scroll",S,D),l.addEventListener("scroll",c,D))}function N(g){if(F.value===!0){if(r.value===null){g!==!0&&oe(()=>{N(!0)});return}const S=`${m.value===!0?"un":""}pauseAnimations`;Array.from(r.value.getElementsByTagName("svg")).forEach(U=>{U[S]()})}}const F=V(()=>e.disable!==!0&&t.value===!0);B([m,F],()=>{N()}),B(()=>e.disable,g=>{g===!0?C():q()}),B(()=>e.reverse,()=>{m.value===!1&&t.value===!0&&d()}),B(()=>e.scrollTarget,R),B(()=>e.debounce,A);let W=!1;_e(()=>{W!==!1&&l&&Y(l,W)}),ve(()=>{W=l?J(l):!1}),be(()=>{t.value===!0&&l.removeEventListener("scroll",c,D)}),xe(()=>{A(e.debounce),R(),m.value===!1&&N()});const pe=de();return Object.assign(pe.proxy,{poll:()=>{c!==void 0&&c()},trigger:_,stop:C,reset:P,resume:q,setIndex:h}),()=>{const g=ye(o.default,[]);return F.value===!0&&g[e.reverse===!1?"push":"unshift"](G("div",{ref:r,class:x.value},ce(o.loading))),G("div",{class:"q-infinite-scroll",ref:n},g)}}});const Ge={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Ke(){const{props:e,proxy:{$q:o}}=de(),a=Se(qe,X);if(a===X)return console.error("QPageSticky needs to be child of QLayout"),X;const m=V(()=>{const d=e.position;return{top:d.indexOf("top")>-1,right:d.indexOf("right")>-1,bottom:d.indexOf("bottom")>-1,left:d.indexOf("left")>-1,vertical:d==="top"||d==="bottom",horizontal:d==="left"||d==="right"}}),t=V(()=>a.header.offset),n=V(()=>a.right.offset),r=V(()=>a.footer.offset),f=V(()=>a.left.offset),l=V(()=>{let d=0,_=0;const P=m.value,q=o.lang.rtl===!0?-1:1;P.top===!0&&t.value!==0?_=`${t.value}px`:P.bottom===!0&&r.value!==0&&(_=`${-r.value}px`),P.left===!0&&f.value!==0?d=`${q*f.value}px`:P.right===!0&&n.value!==0&&(d=`${-q*n.value}px`);const C={transform:`translate(${d}, ${_})`};return e.offset&&(C.margin=`${e.offset[1]}px ${e.offset[0]}px`),P.vertical===!0?(f.value!==0&&(C[o.lang.rtl===!0?"right":"left"]=`${f.value}px`),n.value!==0&&(C[o.lang.rtl===!0?"left":"right"]=`${n.value}px`)):P.horizontal===!0&&(t.value!==0&&(C.top=`${t.value}px`),r.value!==0&&(C.bottom=`${r.value}px`)),C}),c=V(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function x(d){const _=ce(d.default);return G("div",{class:c.value,style:l.value},e.expand===!0?_:[G("div",_)])}return{$layout:a,getStickyContent:x}}var Fe=re({name:"QPageSticky",props:Ge,setup(e,{slots:o}){const{getStickyContent:a}=Ke();return()=>a(o)}});const We={components:{ProductThumbnail:fe},props:{title:String,modelValue:{type:Object,default:()=>({variants:[]})}},data(){return{product:this.modelValue,variant:null}},emits:["ok","hide"],methods:{async show(){console.func("components/shop/VariantDialog:methods.show()",arguments);const{options:e,variants:o}=this.modelValue,a=o.find(t=>t.in_stock);this.variant=a;const m={...this.modelValue,options:e.map(t=>{const n=a.options.find(r=>r.name===t.name);return{...t,value:n==null?void 0:n.value}}),price_formated:a.price_formated,variant_id:a.id,price:a.price,in_stock:a.in_stock,variants:o.map(t=>({compare_at_price:t.compare_at_price,id:t.id,in_stock:t.in_stock,media_id:t.media_id,price:t.price,price_formated:t.price_formated,thumbnail:t.thumbnail,title:t.title}))};this.product=m,this.$refs.dialog.show()},hide(){console.func("components/shop/VariantDialog:methods.close()",arguments),this.$refs.dialog.hide()},onDialogHide(){console.func("components/shop/VariantDialog:methods.onDialogHide()",arguments),this.$emit("hide")},addToCart(){console.func("components/shop/VariantDialog:methods.addToCart()",arguments),this.$emit("ok",{...this.product,default_variant:this.variant}),this.hide()},async onChangeOption(e){console.func("components/shop/VariantDialog:methods.onChangeOption()",arguments);const{options:o,variants:a}=this.product,m=o.map(n=>n.value).join(" / "),t=a.find(n=>n.title===m);this.variant=t,Object.assign(this.product,{price_formated:t.price_formated,price:t.price,variant_id:t.id,in_stock:t.in_stock})}}},Je={class:"col-xs-12 col-sm-6"},Ye={class:"col-xs-12 col-sm-6"},Xe={class:"q-gutter-y-sm"},Ze={class:"text-h5 ellipsis title"},et={class:"text-h6 price"},tt={key:0,class:"q-py-md variants row q-col-gutter-md"},ot={class:"cart"};function st(e,o,a,m,t,n){const r=p("product-thumbnail"),f=p("base-label"),l=p("base-select"),c=p("base-btn"),x=p("base-section"),d=p("base-dialog");return u(),y(d,{title:"Select Variant","body-class":"q-pa-none scroll",ref:"dialog",onHide:n.onDialogHide,"use-separator":"","hide-footer":""},{body:i(()=>[s(x,{flat:"",bordered:""},{default:i(()=>[v("div",Je,[s(r,{media:t.product.thumbnail},null,8,["media"])]),v("div",Ye,[v("div",Xe,[v("div",Ze,k(t.product.title),1),v("div",et,[w(k(t.product.price_formated)+" ",1),t.product.in_stock?L("",!0):(u(),y(ee,{key:0,size:"sm",square:"",outline:"",color:"negative",label:"SOLD OUT"}))]),t.product.has_variant?(u(),b("div",tt,[(u(!0),b(I,null,K(t.product.options,(_,P)=>(u(),b("div",{class:"variant col-sm-6 col-xs-12",key:P},[s(f,null,{default:i(()=>[w(k(_.name),1)]),_:2},1024),s(l,{ref_for:!0,ref:"variant-"+_.slug,dense:"",outlined:"",square:"",options:_.values,"map-options":"","option-label":"name","option-value":"name","emit-value":"",modelValue:_.value,"onUpdate:modelValue":[q=>_.value=q,n.onChangeOption]},null,8,["options","modelValue","onUpdate:modelValue"])]))),128))])):L("",!0),v("div",ot,[s(c,{square:"",size:"md",padding:"9px 22px",icon:"fad fa-cart-plus",class:"add-to-cart full-width",label:e.$t("addToCart"),disable:!t.product.in_stock,onClick:n.addToCart},null,8,["label","disable","onClick"])])])])]),_:1})]),_:1},8,["onHide"])}var nt=T(We,[["render",st]]);const at={components:{QuantityInput:Ne},props:{modelValue:Array},emits:["update:model-value"],methods:{onChangeQuantity(e,o){const a=this.modelValue;a[o].quantity=e,this.$emit("update:model-value",a)},onRemoveItem(e){const o=this.modelValue;o.splice(e,1),this.$emit("update:model-value",o)},clear(){this.$emit("update:model-value",[])},async addToCart(e){console.func("pages/admins/orders/PosPage:methods.addToCart()",arguments),e.has_variant?this.$q.dialog({component:nt,componentProps:{modelValue:e}}).onOk(o=>{this.addProduct(o)}):this.addProduct(e)},addCustomProduct(e){const o=this.modelValue;o.push(e),this.$emit("update:model-value",o)},addProduct(e){var f,l,c,x;const o=this.modelValue,a=(f=e==null?void 0:e.default_variant)==null?void 0:f.id,m=(l=e==null?void 0:e.default_variant)==null?void 0:l.price,t=(c=e==null?void 0:e.default_variant)==null?void 0:c.taxable,n=(x=e==null?void 0:e.default_variant)==null?void 0:x.title;let r=M.exports.findIndex(o,{product_id:e.id,variant_id:a});if(r>-1){const d=o[r];o[r]={...d,quantity:d.quantity+1}}else o.push({title:e.title,product_id:e.id,variant_id:a,variant_title:n,price:m,total:m,taxable:t,quantity:1});this.$core.debounce(()=>{this.$emit("update:model-value",o)},1e3)}},computed:{hasProduct(){return this.modelValue.length>0}}},it={class:"pos-products"},lt={class:"meta items-center flex"},rt={class:"price text-bold q-mr-md"};function ct(e,o,a,m,t,n){const r=p("quantity-input"),f=p("base-btn"),l=p("base-no-records");return u(),b("div",it,[n.hasProduct?(u(),y(Ve,{key:0,class:"q-gutter-y-sm"},{default:i(()=>[(u(!0),b(I,null,K(a.modelValue,(c,x)=>(u(),y(te,{class:"bordered",key:x},{default:i(()=>[s(O,null,{default:i(()=>[s($,null,{default:i(()=>[w(k(c.title),1)]),_:2},1024),c.variant_title!=="Default"?(u(),y($,{key:0},{default:i(()=>[w(k(c.variant_title),1)]),_:2},1024)):L("",!0),s($,null,{default:i(()=>[w(k(e.$core.money(c.price))+" x "+k(c.quantity),1)]),_:2},1024)]),_:2},1024),s(O,{side:""},{default:i(()=>[s($,null,{default:i(()=>[s(r,{style:{width:"120px"},"model-value":c.quantity,"onUpdate:modelValue":d=>n.onChangeQuantity(d,x)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),v("div",lt,[v("div",rt,k(e.$core.money(c.total)),1),s(f,{flat:"",dense:"",color:"grey",onClick:d=>n.onRemoveItem(x),icon:"fas fa-trash-can"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(u(),y(l,{key:1,icon:"fad fa-cart-shopping-fast",title:"Empty Cart",message:"Kindly choose a product from the list to add it to your cart.",height:"200px","container-style":"width: calc(100% - 100px)","icon-size":"35px"}))])}var dt=T(at,[["render",ct]]);const ut={components:{ProductThumbnail:fe},props:{title:String,price:String,thumbnail:Object,list:Boolean}},mt={key:0},ft={class:"ellipsis-2-lines text-weight-medium"},pt={class:"text-subtitle2"};function ht(e,o,a,m,t,n){const r=p("product-thumbnail");return ue((u(),y(me,{class:"product-card cursor-pointer",flat:""},{default:i(()=>[a.list?(u(),b("div",mt,[s(te,{class:"q-pa-none"},{default:i(()=>[s(O,{avatar:""},{default:i(()=>[s(r,{class:"rounded-border",ratio:1,style:{width:"70px"},media:a.thumbnail},null,8,["media"])]),_:1}),s(O,null,{default:i(()=>[s($,{lines:"1"},{default:i(()=>[w(k(a.title),1)]),_:1}),s($,{class:"text-subtitle2"},{default:i(()=>[w(k(a.price),1)]),_:1})]),_:1})]),_:1})])):(u(),b(I,{key:1},[s(O,null,{default:i(()=>[s(r,{class:"rounded-border",media:a.thumbnail},null,8,["media"])]),_:1}),v("div",ft,k(a.title),1),v("div",pt,k(a.price),1)],64))]),_:1})),[[we,void 0,"teal-3"]])}var gt=T(ut,[["render",ht]]);const _t={props:{list:Boolean,rowsPerPage:{type:Number,default:18}}},vt={class:"row q-py-md q-col-gutter-md"},bt={key:0},xt={class:"text-subtitle2"};function yt(e,o,a,m,t,n){return u(),b("div",vt,[(u(!0),b(I,null,K(a.rowsPerPage,(r,f)=>(u(),b("div",{key:f,class:j({"col-xs-12 col-lg-2 col-md-3 col-sm-3":!a.list,"col-xs-12 col-lg-4 col-md-6 col-sm-6":a.list})},[s(me,{class:"product-card cursor-pointer",flat:""},{default:i(()=>[a.list?(u(),b("div",bt,[s(te,{class:"q-pa-none"},{default:i(()=>[s(O,{avatar:""},{default:i(()=>[s(Q,{height:"70px",width:"70px",square:"",animation:"fade"})]),_:1}),s(O,null,{default:i(()=>[s($,{lines:"1"},{default:i(()=>[s(Q,{type:"text"}),s(Q,{width:"80%",type:"text"})]),_:1}),s($,{class:"text-subtitle2"},{default:i(()=>[s(Q,{width:"150px",type:"text"})]),_:1})]),_:1})]),_:1})])):(u(),b(I,{key:1},[s(Q,{height:"150px",square:"",animation:"fade"}),s(Qe,null,{default:i(()=>[s(Q,{type:"text"}),s(Q,{width:"90%",type:"text"}),v("div",xt,[s(Q,{width:"90px",type:"text"})])]),_:1})],64))]),_:1})],2))),128))])}var kt=T(_t,[["render",yt]]);const Pt={data(){return{qrcode:null,isScanning:!1}},emits:["detect"],methods:{stopScan(){this.isScanning=!1,document.removeEventListener("keypress",this.onInput),document.removeEventListener("keydown",this.onInput),this.$refs.qrScanner.blur()},onScanSuccess({target:e}){e!=null&&e.value&&this.$core.debounce(()=>{this.$emit("detect",e.value,"scanner"),this.qrcode=null},1e3)},onInput(e){this.$refs.qrScanner.focus()},startScan(){document.addEventListener("keypress",this.onInput),document.addEventListener("keydown",this.onInput),this.isScanning=!0}},beforeUnmount(){this.stopScan()}},Ct={class:"qr-code-scanner-btn"};function St(e,o,a,m,t,n){const r=p("base-tooltip"),f=p("base-btn");return u(),b("div",Ct,[ue(v("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.qrcode=l),type:"text",id:"qrScanner",ref:"qrScanner",class:"scanner",onChange:o[1]||(o[1]=(...l)=>n.onScanSuccess&&n.onScanSuccess(...l))},null,544),[[Le,t.qrcode]]),t.isScanning?(u(),y(f,{key:0,color:"negative",icon:"fas fa-barcode-read",onClick:n.stopScan,dense:"",padding:"13px",outline:""},{default:i(()=>[s(r,null,{default:i(()=>[w(k(e.$t("stopScanning")),1)]),_:1})]),_:1},8,["onClick"])):(u(),y(f,{key:1,dense:"",padding:"13px",outline:"",color:"primary",icon:"fas fa-barcode-read",onClick:n.startScan},{default:i(()=>[s(r,null,{default:i(()=>[w(k(e.$t("startScanning")),1)]),_:1})]),_:1},8,["onClick"]))])}var qt=T(Pt,[["render",St]]);const le={customer:void 0,source:"POS",contact:null,billing_address:null,collect_tax:!0,line_items:[],tax_lines:[]},Vt=E.getItem("location"),wt={components:{CategorySelect:Ae,UserSelect:Ue,PosProducts:dt,BillingDetails:Be,ProductCard:gt,ProductCardSkeleton:kt,QrCodeScannerBtn:qt},data(){return{currentPage:0,lastPage:1,rightDrawerOpen:!0,loading:!0,isGrid:!0,submited:!1,ptintingReceipt:!1,category:void 0,filter:null,latestOrder:E.has("latest-pos"),location:Vt,products:[],cart:M.exports.cloneDeep(le)}},methods:{...ne(ze,["get","barcodeProduct"]),...ne(He,["calculator","store","pos"]),onLoad(e,o){console.func("pages/admins/orders/PosPage:methods.onLoad()",arguments),this.loading=!0,setTimeout(()=>{var a;this.currentPage<this.lastPage?this.get({page:this.currentPage+1,filter:this.filter,category:this.category,location:(a=this.location)==null?void 0:a.id,rowsPerPage:18,includes:["default_variant","variants","options"]}).then(({meta:m,data:t})=>{const{last_page:n,current_page:r}=m;this.currentPage===0?this.products=t:t.forEach(f=>this.products.push(f)),this.currentPage=r,this.lastPage=n,this.loading=!1,o(r===n)}):(this.loading=!1,o(!0))},100)},onCalculator(){console.func("pages/admins/orders/PosPage:methods.onCalculator()",arguments),this.calculator({...this.cart,location:this.location}).then(e=>{Object.assign(this.cart,e)}).catch(e=>{this.$core.error(e,{title:"Error"})})},onSelectCustomer(e){if(console.func("pages/admins/orders/PosPage:methods.onSelectCustomer()",arguments),e){this.cart.collect_tax=e.collect_tax;const{email:o,phone_number:a}=e;this.cart.contact={email:o,phone_number:a};const{first_name:m,last_name:t,address:n}=e;this.cart.billing_address={...n,first_name:m,last_name:t,phone_number:a}}else this.cart.collect_tax=!0;this.onCalculator()},onCreateCustomer(){console.func("pages/admins/orders/PosPage:methods.onCreateCustomer()",arguments),this.$q.dialog({component:Ee,componentProps:{modelValue:{}}}).onOk(e=>{Object.assign(this.cart,{customer:{first_name:e.first_name,last_name:e.last_name,name:e.first_name+" "+e.last_name,phone_number:e.phone_number,email:e.email,address:{...e},collect_tax:!0,email_marketing:!0},contact:{phone_number:e.phone_number,email:e.email}})})},onAddCustomProduct(){console.func("pages/admins/orders/PosPage:methods.onAddCustomProduct()",arguments),this.$q.dialog({component:Me}).onOk(e=>{this.$refs.products.addCustomProduct(e)})},onChangeLocation(){var e;console.func("pages/admins/orders/PosPage:methods.onChangeLocation()",arguments),this.$q.dialog({component:Re,componentProps:{modelValue:(e=this.location)!=null?e:{}}}).onOk(o=>{this.location=M.exports.cloneDeep(o),E.set("location",o),this.onRefresh()})},clearCart(){console.func("pages/admins/orders/PosPage:methods.clearCart()",arguments),this.cart=M.exports.cloneDeep(le)},onRefresh(){console.func("pages/admins/orders/PosPage:methods.onRefresh()",arguments),this.currentPage=0,this.lastPage=1,this.loading=!0,this.$refs.productList.resume(),this.$refs.productList.trigger()},async printLatestReceipt(){console.func("pages/admins/orders/PosPage:methods.printLatestReceipt()",arguments);const{id:e}=E.getItem("latest-pos");this.ptintingReceipt=!0,this.pos(e).then(()=>{this.ptintingReceipt=!1}).catch(o=>{this.$core.error(o),this.ptintingReceipt=!1})},onSubmit(e){console.func("pages/admins/orders/PosPage:methods.onSubmit()",arguments),this.submited=!0,this.store({...this.cart,payment_method:e,location:this.location}).then(async({data:o})=>{this.submited=!1,E.set("latest-pos",o),this.latestOrder=!0,await this.pos(o.id),this.clearCart()}).catch(o=>{this.submited=!1,this.$core.error(o,{title:"Error"})})},onScanned(e){console.func("pages/admins/orders/PosPage:methods.onScanned()",arguments),this.barcodeProduct(e).then(o=>{const{product:a}=o;this.$refs.products.addToCart({...a,has_variant:!1,default_variant:o})}).catch(()=>{this.$q.notify({message:"Product not found using scanned barcode!",position:"bottom",color:"negative"})})}},computed:{hasCart(){return this.cart.line_items.length>0},smScreen(){return this.$q.screen.gt.sm},drawerWidth(){return this.$q.screen.xs?this.$q.screen.width:400},locationLabel(){var e,o;return(o=(e=this.location)==null?void 0:e.name)!=null?o:"Set location"},totalProducts(){var e;return(e=this.cart.line_items_quantity)!=null?e:0}}},Qt={class:"col-xs-12 col-sm-12"},Lt={class:"col-xs-12 col-sm-12"},$t={class:"row q-col-gutter-md"},Dt={key:0,class:"col-xs-12 col-sm-12"};function Ot(e,o,a,m,t,n){const r=p("base-btn"),f=p("category-select"),l=p("base-input"),c=p("qr-code-scanner-btn"),x=p("product-card"),d=p("base-no-records"),_=p("product-card-skeleton"),P=p("base-section"),q=p("user-select"),C=p("pos-products"),R=p("billing-details");return u(),y(Te,{class:"q-pa-md pos-page"},{default:i(()=>[s(P,{gutter:"md",bordered:"",dense:"",style:{height:"100%"}},{bottom:i(()=>[s(r,{link:"",color:"primary",label:"Add custom product",onClick:n.onAddCustomProduct},null,8,["onClick"]),s(r,{link:"",icon:"fas fa-location-dot",onClick:n.onChangeLocation,class:"q-ml-md",label:n.locationLabel},null,8,["onClick","label"])]),default:i(()=>[v("div",Qt,[s(Z,{class:"q-px-none pos-toolbar"},{default:i(()=>[s(r,{dense:"",padding:"13px",class:"q-mr-sm",outline:"",onClick:o[0]||(o[0]=h=>t.isGrid=!t.isGrid),icon:t.isGrid?"fas fa-grid":"fas fa-list"},null,8,["icon"]),s(f,{class:"q-mr-sm","no-add":"","use-filter":"",placeholder:"All category",style:{width:"250px"},modelValue:t.category,"onUpdate:modelValue":[o[1]||(o[1]=h=>t.category=h),n.onRefresh],clearable:""},null,8,["modelValue","onUpdate:modelValue"]),s(l,{class:"product-search",modelValue:t.filter,"onUpdate:modelValue":[o[2]||(o[2]=h=>t.filter=h),n.onRefresh],outlined:"",clearable:"",placeholder:"Search Product",debounce:"1000",dense:"",style:{width:"100%"}},{append:i(()=>[t.filter?L("",!0):(u(),y($e,{key:0,name:"fas fa-search",size:"13px"}))]),_:1},8,["modelValue","onUpdate:modelValue"]),s(c,{onDetect:n.onScanned,class:"q-ml-sm qr-scanner"},null,8,["onDetect"])]),_:1})]),v("div",Lt,[s(ae,{style:{height:"calc(100vh - 257px)"}},{default:i(()=>[s(je,{ref:"productList",onLoad:n.onLoad,offset:150},{loading:i(()=>[s(_,{"rows-per-page":18,list:!t.isGrid},null,8,["list"])]),default:i(()=>[v("div",$t,[(u(!0),b(I,null,K(t.products,(h,A)=>(u(),b("div",{key:A,class:j({"col-xs-12 col-lg-2 col-md-3 col-sm-3":t.isGrid,"col-xs-12 col-lg-4 col-md-6 col-sm-6":!t.isGrid})},[s(x,De({list:!t.isGrid,onClick:N=>e.$refs.products.addToCart(h)},h),null,16,["list","onClick"])],2))),128)),!t.products.length&&!t.loading?(u(),b("div",Dt,[s(d,{icon:"fad fa-box-open",title:"Product not found",message:"Kindly ensure the accurate product name is entered, as it might not be available in the listing. Alternatively, consider utilizing the custom item option.",height:"350px","icon-size":"75px"})])):L("",!0)])]),_:1},8,["onLoad"])]),_:1})])]),_:1}),e.$q.screen.lt.md?(u(),y(Fe,{key:0,position:"bottom-right",offset:[18,18]},{default:i(()=>[s(ee,{onClick:o[3]||(o[3]=h=>e.$refs.cartDrawer.toggle()),fab:"",icon:"fad fa-cart-plus",color:"primary"},{default:i(()=>[s(Oe,{floating:"",color:"orange","text-color":"black",label:n.totalProducts,rounded:"",style:{padding:"5px 7px","font-weight":"bold"}},null,8,["label"])]),_:1})]),_:1})):L("",!0),s(Ie,{ref:"cartDrawer","show-if-above":"",side:"right",breakpoint:768,width:n.drawerWidth,class:j({"q-py-md q-pr-md":n.smScreen})},{default:i(()=>[v("div",{class:j({"q-pa-md bg-white":!0,"rounded-border":n.smScreen}),style:{height:"100%"}},[s(Z,{class:"q-pb-sm q-px-none"},{default:i(()=>[s(ie,null,{default:i(()=>[s(q,{placeholder:"Select customer",dense:"",outlined:"",modelValue:t.cart.customer,"onUpdate:modelValue":[o[4]||(o[4]=h=>t.cart.customer=h),n.onSelectCustomer],"option-label":h=>`${h.first_name} ${h.last_name}`,disable:t.submited},null,8,["modelValue","onUpdate:modelValue","option-label","disable"])]),_:1}),s(r,{dense:"",padding:"13px",color:"primary",icon:"fas fa-user-plus",onClick:n.onCreateCustomer,disable:t.submited},null,8,["onClick","disable"]),e.$q.screen.xs?(u(),y(r,{key:0,dense:"",outline:"",padding:"13px",color:"grey",class:"q-ml-sm",icon:"fad fa-circle-xmark",onClick:o[5]||(o[5]=h=>e.$refs.cartDrawer.toggle())})):L("",!0)]),_:1}),s(ae,{style:{height:"calc(100% - 270px)"}},{default:i(()=>[s(C,{ref:"products",modelValue:t.cart.line_items,"onUpdate:modelValue":[o[6]||(o[6]=h=>t.cart.line_items=h),n.onCalculator]},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(P,{dense:"",gutter:"md",class:"q-mt-sm bg-grey-2",flat:"","no-row":""},{default:i(()=>[s(R,{ref:"billing",modelValue:t.cart,"onUpdate:modelValue":[o[7]||(o[7]=h=>t.cart=h),n.onCalculator],onMarkedPaid:n.onSubmit},null,8,["modelValue","onMarkedPaid","onUpdate:modelValue"])]),_:1}),s(Z,{class:"q-mt-sm q-px-none"},{default:i(()=>[s(ie,null,{default:i(()=>[s(ee,{padding:"10px",class:"full-width text-black",color:"secondary",label:"Place Order",loading:t.submited,disable:!n.hasCart,onClick:o[8]||(o[8]=h=>e.$refs.billing.onMarkAsPaid())},null,8,["loading","disable"])]),_:1}),t.latestOrder?(u(),y(r,{key:0,padding:"15px",dense:"",class:"q-mr-sm",icon:"fas fa-print",disable:t.submited,loading:t.ptintingReceipt,onClick:n.printLatestReceipt},null,8,["disable","loading","onClick"])):L("",!0),s(r,{padding:"15px",outline:"",class:"bg-negative",color:"white",dense:"",icon:"fas fa-cart-circle-xmark",disable:t.submited,onClick:n.clearCart},null,8,["disable","onClick"])]),_:1})],2)]),_:1},8,["width","class"])]),_:1})}var xo=T(wt,[["render",Ot]]);export{xo as default};