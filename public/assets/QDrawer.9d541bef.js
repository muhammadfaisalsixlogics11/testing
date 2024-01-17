import{m as ge,ak as ke,T as Be,al as qe,U as xe,an as Te,aB as Ce,aY as H,d6 as Se,v as k,y as i,ap as Me,d7 as $e,z as o,B as De,a3 as Z,ar as Oe,a4 as We,D as $,aT as p,E as Le,aR as D,s as Ae,d8 as Pe}from"./index.f4591746.js";import{T as R}from"./TouchPan.5888a3fc.js";const ee=150;var Fe=ge({name:"QDrawer",inheritAttrs:!1,props:{...ke,...Be,side:{type:String,default:"left",validator:a=>["left","right"].includes(a)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:a=>["default","desktop","mobile"].includes(a),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qe,"onLayout","miniState"],setup(a,{slots:O,emit:y,attrs:N}){const f=Ae(),{proxy:{$q:v}}=f,ae=xe(a,v),{preventBodyScroll:W}=Pe(),{registerTimeout:U,removeTimeout:te}=Te(),t=Ce(Se,H);if(t===H)return console.error("QDrawer needs to be child of QLayout"),H;let L,b=null,B;const n=k(a.behavior==="mobile"||a.behavior!=="desktop"&&t.totalWidth.value<=a.breakpoint),q=i(()=>a.mini===!0&&n.value!==!0),s=i(()=>q.value===!0?a.miniWidth:a.width),u=k(a.showIfAbove===!0&&n.value===!1?!0:a.modelValue===!0),j=i(()=>a.persistent!==!0&&(n.value===!0||ie.value===!0));function E(e,l){if(le(),e!==!1&&t.animate(),d(0),n.value===!0){const r=t.instances[S.value];r!==void 0&&r.belowBreakpoint===!0&&r.hide(!1),m(1),t.isContainer.value!==!0&&W(!0)}else m(0),e!==!1&&F(!1);U(()=>{e!==!1&&F(!0),l!==!0&&y("show",e)},ee)}function K(e,l){ue(),e!==!1&&t.animate(),m(0),d(w.value*s.value),Q(),l!==!0?U(()=>{y("hide",e)},ee):te()}const{show:A,hide:x}=Me({showing:u,hideOnRouteChange:j,handleShow:E,handleHide:K}),{addToHistory:le,removeFromHistory:ue}=$e(u,x,j),C={belowBreakpoint:n,hide:x},c=i(()=>a.side==="right"),w=i(()=>(v.lang.rtl===!0?-1:1)*(c.value===!0?1:-1)),X=k(0),g=k(!1),P=k(!1),Y=k(s.value*w.value),S=i(()=>c.value===!0?"left":"right"),z=i(()=>u.value===!0&&n.value===!1&&a.overlay===!1?a.miniToOverlay===!0?a.miniWidth:s.value:0),_=i(()=>a.overlay===!0||a.miniToOverlay===!0||t.view.value.indexOf(c.value?"R":"L")>-1||v.platform.is.ios===!0&&t.isContainer.value===!0),T=i(()=>a.overlay===!1&&u.value===!0&&n.value===!1),ie=i(()=>a.overlay===!0&&u.value===!0&&n.value===!1),ne=i(()=>"fullscreen q-drawer__backdrop"+(u.value===!1&&g.value===!1?" hidden":"")),oe=i(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),G=i(()=>c.value===!0?t.rows.value.top[2]==="r":t.rows.value.top[0]==="l"),re=i(()=>c.value===!0?t.rows.value.bottom[2]==="r":t.rows.value.bottom[0]==="l"),se=i(()=>{const e={};return t.header.space===!0&&G.value===!1&&(_.value===!0?e.top=`${t.header.offset}px`:t.header.space===!0&&(e.top=`${t.header.size}px`)),t.footer.space===!0&&re.value===!1&&(_.value===!0?e.bottom=`${t.footer.offset}px`:t.footer.space===!0&&(e.bottom=`${t.footer.size}px`)),e}),de=i(()=>{const e={width:`${s.value}px`,transform:`translateX(${Y.value}px)`};return n.value===!0?e:Object.assign(e,se.value)}),ve=i(()=>"q-drawer__content fit "+(t.isContainer.value!==!0?"scroll":"overflow-auto")),ce=i(()=>`q-drawer q-drawer--${a.side}`+(P.value===!0?" q-drawer--mini-animate":"")+(a.bordered===!0?" q-drawer--bordered":"")+(ae.value===!0?" q-drawer--dark q-dark":"")+(g.value===!0?" no-transition":u.value===!0?"":" q-layout--prevent-focus")+(n.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(_.value===!0||T.value!==!0?" fixed":"")+(a.overlay===!0||a.miniToOverlay===!0?" q-drawer--on-top":"")+(G.value===!0?" q-drawer--top-padding":""))),fe=i(()=>{const e=v.lang.rtl===!0?a.side:S.value;return[[R,be,void 0,{[e]:!0,mouse:!0}]]}),me=i(()=>{const e=v.lang.rtl===!0?S.value:a.side;return[[R,J,void 0,{[e]:!0,mouse:!0}]]}),he=i(()=>{const e=v.lang.rtl===!0?S.value:a.side;return[[R,J,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function I(){we(n,a.behavior==="mobile"||a.behavior!=="desktop"&&t.totalWidth.value<=a.breakpoint)}o(n,e=>{e===!0?(L=u.value,u.value===!0&&x(!1)):a.overlay===!1&&a.behavior!=="mobile"&&L!==!1&&(u.value===!0?(d(0),m(0),Q()):A(!1))}),o(()=>a.side,(e,l)=>{t.instances[l]===C&&(t.instances[l]=void 0,t[l].space=!1,t[l].offset=0),t.instances[e]=C,t[e].size=s.value,t[e].space=T.value,t[e].offset=z.value}),o(t.totalWidth,()=>{(t.isContainer.value===!0||document.qScrollPrevented!==!0)&&I()}),o(()=>a.behavior+a.breakpoint,I),o(t.isContainer,e=>{u.value===!0&&W(e!==!0),e===!0&&I()}),o(t.scrollbarWidth,()=>{d(u.value===!0?0:void 0)}),o(z,e=>{h("offset",e)}),o(T,e=>{y("onLayout",e),h("space",e)}),o(c,()=>{d()}),o(s,e=>{d(),V(a.miniToOverlay,e)}),o(()=>a.miniToOverlay,e=>{V(e,s.value)}),o(()=>v.lang.rtl,()=>{d()}),o(()=>a.mini,()=>{a.noMiniAnimation||a.modelValue===!0&&(ye(),t.animate())}),o(q,e=>{y("miniState",e)});function d(e){e===void 0?Z(()=>{e=u.value===!0?0:s.value,d(w.value*e)}):(t.isContainer.value===!0&&c.value===!0&&(n.value===!0||Math.abs(e)===s.value)&&(e+=w.value*t.scrollbarWidth.value),Y.value=e)}function m(e){X.value=e}function F(e){const l=e===!0?"remove":t.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function ye(){b!==null&&clearTimeout(b),f.proxy&&f.proxy.$el&&f.proxy.$el.classList.add("q-drawer--mini-animate"),P.value=!0,b=setTimeout(()=>{b=null,P.value=!1,f&&f.proxy&&f.proxy.$el&&f.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function be(e){if(u.value!==!1)return;const l=s.value,r=D(e.distance.x,0,l);if(e.isFinal===!0){r>=Math.min(75,l)===!0?A():(t.animate(),m(0),d(w.value*l)),g.value=!1;return}d((v.lang.rtl===!0?c.value!==!0:c.value)?Math.max(l-r,0):Math.min(0,r-l)),m(D(r/l,0,1)),e.isFirst===!0&&(g.value=!0)}function J(e){if(u.value!==!0)return;const l=s.value,r=e.direction===a.side,M=(v.lang.rtl===!0?r!==!0:r)?D(e.distance.x,0,l):0;if(e.isFinal===!0){Math.abs(M)<Math.min(75,l)===!0?(t.animate(),m(1),d(0)):x(),g.value=!1;return}d(w.value*M),m(D(1-M/l,0,1)),e.isFirst===!0&&(g.value=!0)}function Q(){W(!1),F(!0)}function h(e,l){t.update(a.side,e,l)}function we(e,l){e.value!==l&&(e.value=l)}function V(e,l){h("size",e===!0?a.miniWidth:l)}return t.instances[a.side]=C,V(a.miniToOverlay,s.value),h("space",T.value),h("offset",z.value),a.showIfAbove===!0&&a.modelValue!==!0&&u.value===!0&&a["onUpdate:modelValue"]!==void 0&&y("update:modelValue",!0),De(()=>{y("onLayout",T.value),y("miniState",q.value),L=a.showIfAbove===!0;const e=()=>{(u.value===!0?E:K)(!1,!0)};if(t.totalWidth.value!==0){Z(e);return}B=o(t.totalWidth,()=>{B(),B=void 0,u.value===!1&&a.showIfAbove===!0&&n.value===!1?A(!1):e()})}),Oe(()=>{B!==void 0&&B(),b!==null&&(clearTimeout(b),b=null),u.value===!0&&Q(),t.instances[a.side]===C&&(t.instances[a.side]=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const e=[];n.value===!0&&(a.noSwipeOpen===!1&&e.push(We($("div",{key:"open",class:`q-drawer__opener fixed-${a.side}`,"aria-hidden":"true"}),fe.value)),e.push(p("div",{ref:"backdrop",class:ne.value,style:oe.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",a.noSwipeBackdrop!==!0&&u.value===!0,()=>he.value)));const l=q.value===!0&&O.mini!==void 0,r=[$("div",{...N,key:""+l,class:[ve.value,N.class]},l===!0?O.mini():Le(O.default))];return a.elevated===!0&&u.value===!0&&r.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(p("aside",{ref:"content",class:ce.value,style:de.value},r,"contentclose",a.noSwipeClose!==!0&&n.value===!0,()=>me.value)),$("div",{class:"q-drawer-container"},e)}}});export{Fe as Q};
