import{_ as r,u as c,o as t,c as o,d as e,e as a}from"./index.07a9ca35.js";const m={key:0},u={key:1},d={key:2},h={key:3},l={key:4},y={key:5},k={key:6},j={key:7},f={key:8},b={key:9},P={key:10},x={key:11},H={key:12},R={key:13},v={__name:"subPageHero",setup(w){const g="/";let s=c().path.split("/")[1],i=c().params.id;console.log(s);const _=["/assets/images/img02.jpg","/assets/images/img03.jpg","/assets/images/img04.jpg","/assets/images/img05.jpg","/assets/images/img06.jpg","/assets/images/img07.jpg","/assets/images/img09.jpg","/assets/images/img10.jpg","/assets/images/img12.jpg","/assets/images/img13.jpg","/assets/images/img14.jpg"],n=_[Math.floor(Math.random()*_.length)],p=`background-image: url('${g}images/${n}')`;return(B,I)=>(t(),o("section",{id:"subPageHero",style:p},[e(s)==="greeting"?(t(),o("p",m,"\uC778\uC0AC\uB9D0")):a("",!0),e(s)==="outline"?(t(),o("p",u,"\uAC1C\uC694")):a("",!0),e(s)==="history"?(t(),o("p",d,"\uC5F0\uD601")):a("",!0),e(s)==="certificate"?(t(),o("p",h,"\uD2B9\uD5C8/\uC778\uC99D")):a("",!0),e(s)==="path"?(t(),o("p",l,"\uC624\uC2DC\uB294 \uAE38")):a("",!0),e(s)==="cates"?(t(),o("p",y,"Products")):a("",!0),e(s)==="/cates/"+e(i)?(t(),o("p",k,"\uC81C\uD488 \uC0C1\uC138")):a("",!0),e(s)==="notice"?(t(),o("p",j,"\uACF5\uC9C0\uC0AC\uD56D")):a("",!0),e(s)==="notice_writing"?(t(),o("p",f,"\uACF5\uC9C0\uC0AC\uD56D")):a("",!0),e(s)==="news"?(t(),o("p",b,"\uBCF4\uB3C4\uC790\uB8CC")):a("",!0),e(s)==="/news_in/"+e(i)?(t(),o("p",P,"\uBCF4\uB3C4\uC790\uB8CC")):a("",!0),e(s)==="datas"?(t(),o("p",x,"\uC790\uB8CC\uC2E4")):a("",!0),e(s)==="data"?(t(),o("p",H,"\uC790\uB8CC\uC2E4")):a("",!0),e(s)==="contact"?(t(),o("p",R,"Contact Us")):a("",!0)]))}},M=r(v,[["__scopeId","data-v-f911c1a8"]]);export{M as s};