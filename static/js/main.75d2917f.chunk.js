(this["webpackJsonpflight-search-engine"]=this["webpackJsonpflight-search-engine"]||[]).push([[0],{14:function(e,t,r){},24:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),c=r(17),o=r.n(c),m=(r(24),r(5)),l=r(7),d=r(4),s=r(6),n=(r(14),r(18)),p=r.n(n),h=r.p+"static/media/Forward.d9052ac4.svg",g=r(0);var b=function(e){var t=e.filteredData,r=e.passengerCount;return Object(g.jsx)(g.Fragment,{children:t.map((function(e,t){return Object(g.jsx)("div",{className:"card hover mb-4",id:"ticket_card",children:Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)("div",{style:{width:"100%",fontSize:"13px",display:"flex",lineHeight:"1.5rem"},children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{style:{marginBottom:"6px",display:"flex",justifyContent:"space-between"},children:[Object(g.jsx)("span",{children:Object(g.jsxs)("h4",{children:["\u20b9 ",e.price*r]})}),Object(g.jsxs)("span",{style:{fontSize:"12px"},children:[" ",Object(g.jsxs)("b",{children:[r," P"]})]})]}),Object(g.jsx)("div",{children:Object(g.jsxs)("h5",{children:[e.from.short," ",">>"," ",e.to.short]})}),Object(g.jsx)("div",{children:e.code}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Depart:"})," ",e.departTime]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Arrive:"})," ",e.arrivalTime]})]})}),Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"40%",flexDirection:"column"},children:[Object(g.jsx)("div",{style:{height:"100px",width:"140px"},children:Object(g.jsx)("img",{src:e.flightImg,alt:"flight_img",style:{height:"100%",width:"100%"}})}),Object(g.jsx)("div",{children:Object(g.jsxs)("button",{type:"button",className:"btn btn-info",children:[" ",Object(g.jsx)("b",{children:"Book"})," "]})})]})]})})},t)}))})},f=r.p+"static/media/airplane.969b2a3d.png";var y=function(){return Object(g.jsx)("div",{className:"h-100 d-flex justify-content-center",style:{alignItems:"center"},children:Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsx)("div",{style:{height:"100px",width:"100px"},children:Object(g.jsx)("img",{src:f,alt:"logo",style:{height:"100%",width:"100%"}})})}),Object(g.jsx)("div",{className:"text-muted",style:{fontSize:"20px",fontWeight:"bold"},children:"Search for flights"})]})})})};var v=function(e){var t=e.filteredData,r=e.bookReturn,i=e.isSearchClicked,a=e.returnFilterData,c=e.passengerCount;return Object(g.jsx)("div",{className:"card",style:{height:"100%"},children:Object(g.jsx)("div",{className:"card-body",children:i||0!==t.length||0!==a.length?i&&0===t.length&&0===a.length?Object(g.jsx)("div",{className:"d-flex justify-content-center",style:{color:"red"},children:Object(g.jsx)("h3",{children:"Not Found"})}):Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"mb-4",children:Object(g.jsxs)("div",{style:{fontSize:"20px",fontWeight:"bold"},children:["Available flights"," ",Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:h,alt:"arrow",className:"ml-2"})})]})}),Object(g.jsx)("div",{children:r&&i?Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col",children:[Object(g.jsxs)("div",{style:{color:"deepskyblue",fontWeight:"bold"},children:["Departure flight",Object(g.jsx)("p",{children:t[0].depart})]}),Object(g.jsx)(b,{filteredData:t,passengerCount:c})]}),a.length>0&&a?Object(g.jsxs)("div",{className:"col",children:[Object(g.jsxs)("div",{style:{color:"deepskyblue",fontWeight:"bold"},children:["Return flight",Object(g.jsx)("p",{children:a[0].depart})]}),Object(g.jsx)(b,{filteredData:a,passengerCount:c})]}):null]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{style:{color:"deepskyblue",fontWeight:"bold"},children:["Departure flight",Object(g.jsx)("p",{children:t[0].depart})]}),Object(g.jsx)(b,{filteredData:t,passengerCount:c})]})})]}):Object(g.jsx)(y,{})})})},j=r.p+"static/media/airAsia.22c5033b.png",T=r.p+"static/media/airIndia.1dff4a8f.png",D=r.p+"static/media/emirates.2481f6c1.png",u=r.p+"static/media/Kuwait_Airways.72f39500.png",O=r.p+"static/media/qatar_Airways.4845b9de.png",B=r.p+"static/media/Saudia.ca6e0f57.png",L=r.p+"static/media/vistara.9e076750.png",Y=[{price:2500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"10.15 am",arrivalTime:"11.45 am",code:"TY-6239",flightImg:B,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:8500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"12.20 pm",arrivalTime:"1.45 pm",code:"TY-6239",flightImg:T,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:5500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"4.20 pm",arrivalTime:"6.35 pm",code:"TY-6239",flightImg:D,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:3800,depart:"2021-06-28",arrival:"2021-06-28",departTime:"7.05 pm",arrivalTime:"8.25 pm",code:"TY-6239",flightImg:u,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:7300,depart:"2021-06-28",arrival:"2021-06-28",departTime:"5.05 pm",arrivalTime:"6.25 pm",code:"TY-6239",flightImg:O,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2400,depart:"2021-06-28",arrival:"2021-06-28",departTime:"9.05 am",arrivalTime:"10.25 am",code:"TY-6239",flightImg:B,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2900,depart:"2021-06-28",arrival:"2021-06-28",departTime:"9.50 am",arrivalTime:"11.25 am",code:"TY-6239",flightImg:j,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:3500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"11.23 am",arrivalTime:"12.25 pm",code:"TY-6239",flightImg:L,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:4500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"1.25 pm",arrivalTime:"2.45 pm",code:"TY-6239",flightImg:j,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:3300,depart:"2021-06-28",arrival:"2021-06-28",departTime:"1.55 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:T,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:3400,depart:"2021-06-28",arrival:"2021-06-28",departTime:"4.05 pm",arrivalTime:"5.45 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:5100,depart:"2021-06-28",arrival:"2021-06-28",departTime:"1.23 pm",arrivalTime:"3.45 pm",code:"TY-6239",flightImg:u,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:3500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"2.33 pm",arrivalTime:"3.27 pm",code:"TY-6239",flightImg:O,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:9500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"4.19 pm",arrivalTime:"5.50 pm",code:"TY-6239",flightImg:B,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:1500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"7.33 am",arrivalTime:"8.57 am",code:"TY-6239",flightImg:L,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:6540,depart:"2021-06-28",arrival:"2021-06-28",departTime:"9.14 am",arrivalTime:"10.45 am",code:"TY-6239",flightImg:j,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:8943,depart:"2021-06-28",arrival:"2021-06-28",departTime:"11.00 am",arrivalTime:"12.30 pm",code:"TY-6239",flightImg:T,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:4578,depart:"2021-06-28",arrival:"2021-06-28",departTime:"12.45 pm",arrivalTime:"1.50 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:6712,depart:"2021-06-28",arrival:"2021-06-28",departTime:"2.05 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:u,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"3.15 pm",arrivalTime:"4.25 pm",code:"TY-6239",flightImg:O,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"4.35 pm",arrivalTime:"5.53 pm",code:"TY-6239",flightImg:B,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:3500,depart:"2021-06-28",arrival:"2021-06-28",departTime:"6.00 pm",arrivalTime:"7.20 pm",code:"TY-6239",flightImg:L,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:5500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"10.15 am",arrivalTime:"11.45 am",code:"TY-6239",flightImg:j,from:{full:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:4590,depart:"2021-06-29",arrival:"2021-06-29",departTime:"12.20 pm",arrivalTime:"1.45 pm",code:"TY-6239",flightImg:T,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"4.20 pm",arrivalTime:"6.35 pm",code:"TY-6239",flightImg:D,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:5500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"7.05 pm",arrivalTime:"8.25 pm",code:"TY-6239",flightImg:u,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"5.05 pm",arrivalTime:"6.25 pm",code:"TY-6239",flightImg:O,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:5500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"9.05 am",arrivalTime:"10.25 am",code:"TY-6239",flightImg:B,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"9.50 am",arrivalTime:"11.25 am",code:"TY-6239",flightImg:L,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"11.23 am",arrivalTime:"12.25 pm",code:"TY-6239",flightImg:L,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:6500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"1.25 pm",arrivalTime:"2.45 pm",code:"TY-6239",flightImg:j,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:4500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"1.55 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:T,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:7500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"4.05 pm",arrivalTime:"5.45 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"1.23 pm",arrivalTime:"3.45 pm",code:"TY-6239",flightImg:u,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:8500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"2.33 pm",arrivalTime:"3.27 pm",code:"TY-6239",flightImg:O,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2900,depart:"2021-06-29",arrival:"2021-06-29",departTime:"4.19 pm",arrivalTime:"5.50 pm",code:"TY-6239",flightImg:B,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:9500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"7.33 am",arrivalTime:"8.57 am",code:"TY-6239",flightImg:L,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2900,depart:"2021-06-29",arrival:"2021-06-29",departTime:"9.14 am",arrivalTime:"10.45 am",code:"TY-6239",flightImg:j,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2800,depart:"2021-06-29",arrival:"2021-06-29",departTime:"11.00 am",arrivalTime:"12.30 pm",code:"TY-6239",flightImg:T,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:6500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"12.45 pm",arrivalTime:"1.50 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"2.05 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:u,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:5500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"3.15 pm",arrivalTime:"4.25 pm",code:"TY-6239",flightImg:O,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"4.35 pm",arrivalTime:"5.53 pm",code:"TY-6239",flightImg:B,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:8500,depart:"2021-06-29",arrival:"2021-06-29",departTime:"6.00 pm",arrivalTime:"7.20 pm",code:"TY-6239",flightImg:L,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"10.15 am",arrivalTime:"11.45 am",code:"TY-6239",flightImg:j,from:{full:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:5500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"12.20 pm",arrivalTime:"1.45 pm",code:"TY-6239",flightImg:T,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"4.20 pm",arrivalTime:"6.35 pm",code:"TY-6239",flightImg:D,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:8500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"7.05 pm",arrivalTime:"8.25 pm",code:"TY-6239",flightImg:u,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"5.05 pm",arrivalTime:"6.25 pm",code:"TY-6239",flightImg:O,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:7500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"9.05 am",arrivalTime:"10.25 am",code:"TY-6239",flightImg:B,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"9.50 am",arrivalTime:"11.25 am",code:"TY-6239",flightImg:L,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:3500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"11.23 am",arrivalTime:"12.25 pm",code:"TY-6239",flightImg:j,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:6500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"1.25 pm",arrivalTime:"2.45 pm",code:"TY-6239",flightImg:T,from:{city:"Mumbai-BOM",short:"BOM"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"1.55 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:7800,depart:"2021-06-30",arrival:"2021-06-30",departTime:"4.05 pm",arrivalTime:"5.45 pm",code:"TY-6239",flightImg:u,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Mumbai-BOM",short:"BOM"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"1.23 pm",arrivalTime:"3.45 pm",code:"TY-6239",flightImg:O,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:5500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"2.33 pm",arrivalTime:"3.27 pm",code:"TY-6239",flightImg:B,from:{city:"Delhi-DEL",short:"DEl"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:2400,depart:"2021-06-30",arrival:"2021-06-30",departTime:"4.19 pm",arrivalTime:"5.50 pm",code:"TY-6239",flightImg:L,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:8900,depart:"2021-06-30",arrival:"2021-06-30",departTime:"7.33 am",arrivalTime:"8.57 am",code:"TY-6239",flightImg:j,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"9.14 am",arrivalTime:"10.45 am",code:"TY-6239",flightImg:T,from:{city:"Delhi-DEL",short:"DEL"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:6700,depart:"2021-06-30",arrival:"2021-06-30",departTime:"11.00 am",arrivalTime:"12.30 pm",code:"TY-6239",flightImg:D,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"12.45 pm",arrivalTime:"1.50 pm",code:"TY-6239",flightImg:u,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Delhi-DEL",short:"DEL"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"2.05 pm",arrivalTime:"3.10 pm",code:"TY-6239",flightImg:O,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:8300,depart:"2021-06-30",arrival:"2021-06-30",departTime:"3.15 pm",arrivalTime:"4.25 pm",code:"TY-6239",flightImg:B,from:{city:"Bangalore-BLR",short:"BLR"},to:{city:"Hyderabad-HYD",short:"HYD"}},{price:2500,depart:"2021-06-30",arrival:"2021-06-30",departTime:"4.35 pm",arrivalTime:"5.53 pm",code:"TY-6239",flightImg:L,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}},{price:8100,depart:"2021-06-30",arrival:"2021-06-30",departTime:"6.00 pm",arrivalTime:"7.20 pm",code:"TY-6239",flightImg:j,from:{city:"Hyderabad-HYD",short:"HYD"},to:{city:"Bangalore-BLR",short:"BLR"}}];r(43);var x=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),r=t[0],a=t[1],c=Object(i.useState)(1),o=Object(d.a)(c,2),n=o[0],h=o[1],b=Object(i.useState)(1e4),f=Object(d.a)(b,2),y=f[0],j=f[1],T=Object(i.useState)(!1),D=Object(d.a)(T,2),u=D[0],O=D[1],B=Object(i.useState)([]),L=Object(d.a)(B,2),x=L[0],H=L[1],M=Object(i.useState)([]),I=Object(d.a)(M,2),R=I[0],E=I[1],N=Object(i.useState)({originName:"",destination:"",departureDate:"",returnDate:"",country:""}),C=Object(d.a)(N,2),w=C[0],k=C[1],S=function(e){var t=e.target,r=t.name,i=t.value;k((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(m.a)({},r,i))}))},F=function(e){if("add"===e){if(n>=5)return;h(n+1)}else if("less"===e){if(1===n)return;h(n-1)}},W=function(e){e.currentTarget.type="date"},A=function(){var e=Y.filter((function(e){if(e&&e.from.city&&e.to.city&&e.from.city.toLowerCase().includes(w.originName.trim().toLowerCase())&&e.to.city.toLowerCase().includes(w.destination.trim().toLowerCase())&&e.depart===w.departureDate&&e.price<=y)return e}));H(e)},z=function(){var e=Y.filter((function(e){if(e&&e.from&&e.from.city&&e.from.city.toLowerCase().includes(w.destination.trim().toLowerCase())&&e.to&&e.to.city&&e.to.city.toLowerCase().includes(w.originName.trim().toLowerCase())&&e.depart===w.returnDate&&e.price<=y)return e}));E(e)};return Object(i.useEffect)((function(){j(y),A(),z()}),[y]),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"row  mt-4 ml-2 mr-2 ",children:[Object(g.jsx)("div",{className:" col-md-4 ",children:Object(g.jsxs)("div",{className:"card hover mb-4",children:[Object(g.jsx)("div",{className:"card-body",children:Object(g.jsx)("div",{className:"card ",children:Object(g.jsxs)("div",{className:"card-body m-1",children:[Object(g.jsx)("div",{className:"row ",children:Object(g.jsxs)("ul",{className:"nav-item btn-group",children:[Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{className:"nav-link ml-2 mr-0",onClick:function(){a(!1),O(!1),k((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(m.a)({},"returnDate",""))}))},children:"One Way"})}),Object(g.jsxs)("li",{children:[Object(g.jsx)(s.b,{className:"nav-link ml-0 ",onClick:function(){a(!1),O(!0)},children:"Return"})," "]})]})}),Object(g.jsxs)("div",{className:"row ",children:[Object(g.jsx)("input",{type:"text",className:"input mt-4 ",name:"originName",value:w.originName,placeholder:"Enter City Origin",onChange:S}),Object(g.jsx)("input",{type:"text",className:"input mt-4 ",name:"destination",value:w.destination,placeholder:"Enter destination City",onChange:S}),Object(g.jsx)("input",{type:"text",className:"input mt-4 ",name:"departureDate",value:w.departureDate,placeholder:"Departure date",onFocus:W,onBlur:function(e){e.currentTarget.type="text"},onChange:S}),u&&Object(g.jsx)("input",{type:"text",className:"input mt-4 ",name:"returnDate",value:w.returnDate,placeholder:"Enter return date",onFocus:W,onBlur:function(e){e.currentTarget.type="text"},onChange:S}),Object(g.jsxs)("div",{className:"d-flex justify-content-center mt-2 block",style:{alignItems:"center"},children:[Object(g.jsx)("button",{type:"button",className:"btn btn-secondary  mr-2 ml-1",onClick:function(){return F("less")},children:"-"}),Object(g.jsxs)("div",{className:"text-muted",children:["  ",n," passengers"]}),Object(g.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:function(){return F("add")},children:"+"})]}),Object(g.jsx)("button",{className:"btn outline btn-info block ml-2 mt-2 ",onClick:function(){w.bookReturn&&!w.returnDate?alert("Return date can't be empty!"):w.originName?w.destination?w.departureDate||alert("Departure date can't be empty!"):alert("Destination city can't be empty!"):alert("Origin city can't be empty!"),w.originName&&w.destination&&w.departureDate&&(a(!0),A(),u&&w.returnDate&&z()),a(!0)},children:"Search"})]})]})})}),Object(g.jsx)("div",{className:"card m-4 ",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("div",{className:"ml-2",style:{marginBottom:".7rem",fontWeight:"bold"},children:"Refine flight search"}),Object(g.jsx)("div",{className:"mb-4 mt-4 mr-4 ml-2",children:Object(g.jsx)(p.a,{minValue:0,step:100,maxValue:1e4,formatLabel:function(e){return"".concat(e)},value:y,onChange:function(e){return j(e)}})})]})})]})}),Object(g.jsx)("div",{className:"col-md-8 mb-4",children:Object(g.jsx)(v,{filteredData:x,bookReturn:u,isSearchClicked:r,returnFilterData:R,passengerCount:n})})]})})};r(47);var H=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("nav",{className:"navbar navbar-light justify-content-center hover",style:{backgroundColor:"#eee"},children:Object(g.jsxs)("div",{className:"navbar-brand",style:{fontWeight:"bold",fontSize:"30px",alignContent:"center"},children:[Object(g.jsx)("img",{src:f,width:"30",height:"30",className:"d-inline-block align-top mr-2 ml-3",alt:"plane"}),"Flight Search Engine"]})})})};var M=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(H,{}),Object(g.jsx)(s.a,{children:Object(g.jsx)(x,{})})]})},I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(t){var r=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),I()}},[[48,1,2]]]);
//# sourceMappingURL=main.75d2917f.chunk.js.map