import{_ as s,r as c,o as b,a as m,L as f,ag as g,w as n,k as h,aF as d,f as B,dt as S}from"./index.f4591746.js";import{Q as _}from"./QField.b3ff45f1.js";const v={props:{modelValue:[String,Number],placeholder:{type:String,default:"0.00"},options:{type:Object,default:()=>({precision:2,minimumFractionDigits:2})},label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean},emits:["update:model-value"],methods:{onChange(l){this.$emit("update:model-value",l)}},computed:{scopedSlots(){return Object.keys(this.$slots)}}};function x(l,C,e,V,y,t){const r=c("vue-number");return b(),m(_,{class:"q-number","model-value":e.modelValue,"onUpdate:modelValue":t.onChange,label:e.label,"stack-label":e.stackLabel,hint:e.hint,"hide-hint":e.hideHint,prefix:e.prefix,suffix:e.suffix,"label-color":e.labelColor,color:e.color,"bg-color":e.bgColor,filled:e.filled,outlined:e.outlined,borderless:e.borderless,standout:e.standout,square:e.square,loading:e.loading,"label-slot":e.labelSlot,"bottom-slots":e.bottomSlots,"hide-bottom-space":e.hideBottomSpace,rounded:e.rounded,dense:e.dense,clearable:e.clearable,clearIcon:e.clearIcon,disable:e.disable,readonly:e.readonly,autofocus:e.autofocus},f({control:n(({id:o,modelValue:a,emitValue:i})=>[B(r,d({id:o,class:"q-field__input","model-value":a,"onUpdate:modelValue":u=>i(u)},e.options,{placeholder:e.placeholder}),null,16,["id","model-value","onUpdate:modelValue","placeholder"])]),_:2},[g(t.scopedSlots,o=>({name:o,fn:n(a=>[h(l.$slots,o,d(a,{props:a}))])}))]),1032,["model-value","onUpdate:modelValue","label","stack-label","hint","hide-hint","prefix","suffix","label-color","color","bg-color","filled","outlined","borderless","standout","square","loading","label-slot","bottom-slots","hide-bottom-space","rounded","dense","clearable","clearIcon","disable","readonly","autofocus"])}var k=s(v,[["render",x]]),Q=({app:l})=>{l.use(S),l.component("QNumber",k)};export{Q as default};
