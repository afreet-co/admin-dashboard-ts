(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{6176:function(e,t,a){"use strict";a.d(t,{z:function(){return o}});var r=a(5893),n=a(1664),i=(a(7294),a(3217)),o=function(e){var t=e.children,a=e.type,o=e.size,s=e.href,l=e.uppercase,c=e.rounded,d=e.classNames,u=e.color,m=e.onClick,f=e.disabled,p="";switch(o){case"large":p="text-base px-8 py-3 hover:shadow-md";break;case"regular":p="text-sm px-6 py-3 shadow hover:shadow-lg";break;case"small":default:p="text-xs px-4 py-2 shadow hover:shadow-md"}var h="".concat(i.S.background.baseInverted," ").concat(i.S.background.hoverDarkInverted);switch(u){case"dark":h="".concat(i.S.background.darkInverted," ").concat(i.S.background.hoverLightInverted);break;case"light":h="".concat(i.S.background.lightInverted," ").concat(i.S.background.hoverBaseInverted)}var b=f?"disabled:opacity-50 disabled:cursor-not-allowed":"",x="".concat(h," ").concat(i.S.textBaseInverted," ").concat(b," box-border font-bold rounded focus:ring ring-dark-100 dark:ring-light-400 block outline-none focus:outline-none ease-linear transition-all duration-150 ").concat(l?"uppercase":""," ").concat(c?"rounded-full":""," ").concat(p," ").concat(d||"");return(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)(n.default,{href:s,children:(0,r.jsx)("a",{className:x,children:t})}):(0,r.jsx)("button",{className:x,type:a,onClick:m,disabled:f,children:t})})}},290:function(e,t,a){"use strict";a.d(t,{i:function(){return i}});var r=a(5893),n=(a(7294),a(3217)),i=function(e){var t=e.columnNames,a=e.rows,i=e.options,o=e.boxShadow,s="align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ".concat(n.S.textBase," ").concat(n.S.border," p-2"),l="ease-linear transition-all duration-100 ".concat(n.S.background.hoverLight),c="border-t-0 align-middle border-l-0 border-r-0 whitespace-nowrap p-2";return(0,r.jsx)("div",{className:"flex flex-col min-w-0 break-words w-full p-4 h-96 overflow-auto  ".concat(o?"shadow-lg":""," rounded ").concat(n.S.background.base," ").concat(n.S.textBase),children:(0,r.jsx)("div",{className:"block w-full",children:(0,r.jsxs)("table",{className:"table-auto items-center w-full bg-transparent border-collapse",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[t.length>0&&t.map((function(e){return(0,r.jsx)("th",{className:s,children:e},e)})),i&&(0,r.jsx)("th",{className:s})]})}),(0,r.jsx)("tbody",{children:a.length>0&&a.map((function(e,a){return(0,r.jsxs)("tr",{className:l,children:[t.map((function(t){return(0,r.jsx)("td",{className:c,children:e[t]},t)})),i&&(0,r.jsx)("td",{className:"".concat(c," flex justify-end items-center w-full h-full"),children:i(e)})]},a)}))})]})})})}},1204:function(e,t,a){"use strict";a.d(t,{u:function(){return r}});var r=[{id:1,userId:6,title:"delectus aut autem",completed:"false"},{id:2,userId:8,title:"quis ut nam facilis et officia qui",completed:"false"},{id:3,userId:2,title:"fugiat veniam minus",completed:"false"},{id:4,userId:9,title:"et porro tempora",completed:"true"},{id:5,userId:2,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:"false"},{id:6,userId:7,title:"qui ullam ratione quibusdam voluptatem quia omnis",completed:"false"},{id:7,userId:4,title:"illo expedita consequatur quia in",completed:"false"},{id:8,userId:1,title:"quo adipisci enim quam ut ab",completed:"true"},{id:9,userId:9,title:"molestiae perspiciatis ipsa",completed:"false"},{id:10,userId:5,title:"illo est ratione doloremque quia maiores aut",completed:"true"},{id:11,userId:6,title:"delectus aut autem",completed:"false"},{id:12,userId:8,title:"quis ut nam facilis et officia qui",completed:"false"},{id:13,userId:2,title:"fugiat veniam minus",completed:"false"},{id:14,userId:9,title:"et porro tempora",completed:"true"},{id:15,userId:2,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:"false"},{id:16,userId:7,title:"qui ullam ratione quibusdam voluptatem quia omnis",completed:"false"},{id:17,userId:4,title:"illo expedita consequatur quia in",completed:"false"},{id:18,userId:1,title:"quo adipisci enim quam ut ab",completed:"true"},{id:19,userId:9,title:"molestiae perspiciatis ipsa",completed:"false"},{id:20,userId:5,title:"illo est ratione doloremque quia maiores aut",completed:"true"}]},7852:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(5893),n=a(8202),i=a(2618),o=a(5093);var s=a(355);function l(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(7294),d=a(3217),u=a(6176),m=(0,c.forwardRef)((function(e,t){var a=e.options,n=e.onChange,i=e.placeholder,o=e.controlId,s=e.selected,l="";switch(e.size){case"large":l="text-base px-3 py-3 hover:shadow-md";break;case"regular":l="text-sm px-3 py-3 shadow hover:shadow-lg";break;case"small":default:l="text-xs px-2 py-2 shadow hover:shadow-md"}return(0,r.jsxs)("select",{ref:t,onChange:n,className:"block ".concat(d.S.textBase," border ").concat(d.S.border," ").concat(d.S.background.light," rounded-sm shadow-sm ").concat(l," focus:ring ring-dark-100 dark:ring-light-400 outline-none focus:outline-none ease-linear transition-all duration-150"),name:o,value:s,children:[i&&(0,r.jsx)("option",{value:"",children:i}),a.map((function(e){var t=e.text,a=e.value;return(0,r.jsx)("option",{value:a,children:t},a)}))]})})),f=a(290),p=function(e){var t=e.columnNames,a=e.rows,n=e.options,i=e.boxShadow,o=function(e,t){var a=(0,c.useState)("5"),r=a[0],n=a[1],i=(0,c.useState)([]),o=i[0],s=i[1],l=(0,c.useState)(1),d=l[0],u=l[1],m=(0,c.useState)(1),f=m[0],p=m[1];(0,c.useEffect)((function(){var t=Math.ceil(e.length/+r);u(t),t<f&&p(t)}),[r]);var h=!(f-1>0),b=!(f<d);return(0,c.useEffect)((function(){s(e.slice((f-1)*+r,f*+r))}),[f,d]),{showableRows:o,onPrevClick:function(){return p((function(e){return e-1}))},onNextClick:function(){return p((function(e){return e+1}))},isNextDisabled:b,isPreviousDisabled:h,pageNumber:f,pages:d,onPageChange:function(e){return p(e)},onPageSizeChange:function(e){return n(e)},pageSize:r}}(a),s=o.isNextDisabled,p=o.isPreviousDisabled,h=o.onNextClick,b=o.onPrevClick,x=o.showableRows,g=o.pageNumber,v=o.onPageSizeChange,w=o.pages,k=o.pageSize,j=o.onPageChange;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.i,{columnNames:t,options:n,rows:x,boxShadow:i}),(0,r.jsxs)("div",{className:"".concat(d.S.background.base," flex mt-3 p-2 rounded"),children:[(0,r.jsxs)("div",{className:"flex flex-1 space-x-2 items-center",children:[(0,r.jsx)(u.z,{onClick:b,disabled:p,children:(0,r.jsx)("i",{className:"fas fa-chevron-left"})}),(0,r.jsx)(u.z,{disabled:!0,children:g}),(0,r.jsx)(u.z,{onClick:h,disabled:s,children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})}),(0,r.jsx)(m,{controlId:"page-number",options:l(new Array(w)).map((function(e,t){return{text:String(t+1),value:t+1}})),onChange:function(e){return j(+e.target.value)},selected:g}),(0,r.jsxs)("span",{className:"",children:[" of Page ",w]})]}),(0,r.jsx)(m,{controlId:"page-size",options:[{text:"5",value:"5"},{text:"10",value:"10"},{text:"15",value:"15"}],onChange:function(e){return v(e.target.value)},selected:k})]})]})},h=a(1204),b=a(1934),x=function(){return(0,r.jsxs)(b.c,{children:[(0,r.jsx)(i.X,{title:"Todo List (Paginated)"}),(0,r.jsx)(n.Z,{children:(0,r.jsx)("div",{className:"block w-full overflow-x-auto",children:(0,r.jsx)(p,{rows:h.u,columnNames:Object.keys(h.u[0])})})})]})}},7647:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/paginated-table",function(){return a(7852)}])}},function(e){e.O(0,[547,52,774,888,179],(function(){return t=7647,e(e.s=t);var t}));var t=e.O();_N_E=t}]);