import{s as c}from"./subPageHero.5861b1de.js";import{_ as i,g as r,o as _,c as d,a as s,b as e,d as p,Q as a,w as u,C as m,F as h,p as f,f as w}from"./index.0eaf93ac.js";import{B as b}from"./breadCrumb.2f29225a.js";const o=t=>(f("data-v-91533bf7"),t=t(),w(),t),g={id:"",class:"web-common-inner common-main-section"},v={id:"newswr-detail"},x=o(()=>e("input",{type:"text",placeholder:"\uC81C\uBAA9\uC785\uB825",class:"editor-title"},null,-1)),y=o(()=>e("div",{class:"news-name-url-box"},[e("input",{type:"text",placeholder:"\uB274\uC2A4\uC0AC \uBA85",class:"c-name"}),e("input",{type:"text",placeholder:"\uB274\uC2A4 URL",class:"c-url"})],-1)),N={class:"editorWr"},k={class:"mt-20 text-center flex gap-2 justify-center"},B=o(()=>e("button",{class:"all-btn"},"\uCDE8\uC18C",-1)),C={components:{QuillEditor:a},data(){return{editorOption:{placeholder:"\uB0B4\uC6A9\uC77C \uC785\uB825\uD558\uC138\uC694",modules:{toolbar:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],["image","video"]],syntax:{highlight:t=>hljs.highlightAuto(t).value}}},content:""}}},I=Object.assign(C,{__name:"News_wr",setup(t){return(n,j)=>{const l=r("router-link");return _(),d(h,null,[s(c),e("div",g,[s(b),e("section",v,[x,y,e("div",N,[s(p(a),{options:n.editorOption,theme:"snow"},null,8,["options"])])]),e("div",k,[s(l,{to:{name:"News"}},{default:u(()=>[B]),_:1})])]),s(m)],64)}}}),F=i(I,[["__scopeId","data-v-91533bf7"]]);export{F as default};