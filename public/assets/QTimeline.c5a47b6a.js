import{m as l,T as r,U as n,aU as o,y as u,D as d,E as m,s as c,dC as y}from"./index.f4591746.js";var v=l({name:"QTimeline",props:{...r,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:t}){const a=c(),i=n(e,a.proxy.$q);o(y,e);const s=u(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(i.value===!0?" q-timeline--dark":""));return()=>d("ul",{class:s.value},m(t.default))}});export{v as Q};
