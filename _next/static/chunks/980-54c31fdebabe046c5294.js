(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{8202:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var l=r(5893),a=(r(7294),function(e){var t=e.children,r=e.title;return(0,l.jsx)("div",{className:"w-full ",children:(0,l.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-light-200 dark:bg-dark-300",children:[(0,l.jsx)("div",{className:"rounded-t mb-0 px-4 py-3 border-0",children:(0,l.jsx)("div",{className:"flex flex-wrap items-center",children:(0,l.jsx)("div",{className:"relative w-full px-4 max-w-full flex-grow flex-1",children:(0,l.jsx)("h3",{className:"font-semibold text-xl text-dark-600 dark:text-light-500",children:r})})})}),(0,l.jsx)("div",{className:"block w-full overflow-x-auto",children:t})]})})})},123:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var l=r(5893),a=r(1163),s=r(7294),n=r(9466),d=function(e){var t=e.onClick,r=e.children;return(0,l.jsx)("button",{onClick:t,className:"text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold block py-1 px-3",children:r})},i=function(e){var t=e.isAuthLayout,r=function(){var e=(0,s.useState)("light"),t=e[0],r=e[1],l="dark"===t?"light":"dark";return(0,s.useEffect)((function(){r(localStorage.getItem("application-theme"))}),[]),(0,s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(l),e.classList.add(t),localStorage.setItem("application-theme",t)}),[t,l]),{nextTheme:l,toggleTheme:function(){return r(l)}}}(),i=r.nextTheme,o=r.toggleTheme,c=(0,a.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("footer",{className:"sticky ".concat(t?"":"bg-light-400 dark:bg-dark-600"," bottom-0 block py-2"),children:(0,l.jsx)("div",{className:"container mx-auto",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:[(0,l.jsx)("div",{className:"w-full md:w-4/12 px-4",children:(0,l.jsxs)("div",{className:"text-sm text- font-semibold py-1 text-center md:text-left",children:["Copyright \xa9 ",(new Date).getFullYear(),(0,l.jsx)("a",{href:"#",className:"text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold p-1",children:n.Zz})]})}),(0,l.jsx)("div",{className:"w-full md:w-8/12 px-4 mt-2 md:mt-0",children:(0,l.jsxs)("ul",{className:"flex flex-wrap list-none md:justify-end justify-center",children:[(0,l.jsx)("li",{children:(0,l.jsx)(d,{children:n.Zz})}),(0,l.jsx)("li",{children:(0,l.jsx)(d,{onClick:function(){return c.push(t?"/about":"/app/about")},children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)(d,{onClick:o,children:"dark"===i?(0,l.jsx)("i",{className:"fas fa-moon"}):(0,l.jsx)("i",{className:"fas fa-sun"})})})]})})]})})})})}},9466:function(e,t,r){"use strict";r.d(t,{rR:function(){return a},Zz:function(){return s}});var l=r(4155),a=l.env.NEXT_PUBLIC_APP_NAME||"Admin-dashboard",s=l.env.NEXT_PUBLIC_COMPANY_NAME||"Afreet-Co";l.env.NEXT_PUBLIC_APP_NAME,l.env.NEXT_PUBLIC_DESCRIPTION},5610:function(e,t,r){"use strict";r.d(t,{Y:function(){return l}});var l=function(e){var t,r=e.split("/"),l=r[r.length-1];return((null===l||void 0===l||null===(t=l.split("?")[0])||void 0===t?void 0:t.split("-").join(" "))||"Home").replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))}},1934:function(e,t,r){"use strict";r.d(t,{c:function(){return v}});var l=r(5893),a=r(7294),s=r(1163),n=r(9008),d=r(5610),i=r(9227),o=r(7211),c=r(9466),x=function(){var e=a.useState(!1),t=(0,i.Z)(e,2),r=t[0],s=t[1],n=(0,a.useRef)(),d=(0,a.useRef)(),x="text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{className:"text-dark-500 dark:text-light-400 block",href:"#",ref:n,onClick:function(e){e.preventDefault(),r?s(!1):((0,o.fi)(n.current,d.current,{placement:"bottom-end"}),s(!0))},children:(0,l.jsx)("div",{className:"items-center flex",children:(0,l.jsx)("span",{className:"w-8 h-8 text-sm text-dark-500 dark:text-light-400 border-2 uppercase border-light-200 dark:border-dark-300 bg-light-400 dark:bg-dark-600 inline-flex items-center justify-center rounded-full hover:bg-light-300 dark:hover:bg-dark-300",children:null===c.rR||void 0===c.rR?void 0:c.rR.slice(0,2)})})}),(0,l.jsxs)("div",{ref:d,className:(r?"block ":"hidden ")+"bg-light-400 dark:bg-dark-600 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",children:[(0,l.jsx)("a",{href:"#",className:x,onClick:function(e){return e.preventDefault()},children:"Profile"}),(0,l.jsx)("a",{href:"#",className:x,onClick:function(e){return e.preventDefault()},children:"Logout"})]})]})},m=function(){var e=(0,s.useRouter)(),t=(0,d.Y)(e.asPath);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.default,{children:(0,l.jsxs)("title",{children:[t," | ",c.rR]})}),(0,l.jsx)("nav",{className:"md:flex hidden sticky top-0 w-full z-10 bg-light-400 dark:bg-dark-600 shadow md:flex-row md:flex-nowrap md:justify-start  items-center p-2",children:(0,l.jsxs)("div",{className:"w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4",children:[(0,l.jsx)("div",{className:"text-dark-600 dark:text-light-400 text-sm  hidden lg:inline-block  font-semibold",children:t}),(0,l.jsx)("form",{className:"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3",children:(0,l.jsxs)("div",{className:"relative flex w-full flex-wrap items-stretch",children:[(0,l.jsx)("span",{className:"z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 py-2",children:(0,l.jsx)("i",{className:"fas fa-search"})}),(0,l.jsx)("input",{type:"text",placeholder:"Search here...",className:"border-0 px-3 py-2 placeholder-dark-400 dark:placeholder-light-300 relative bg-light-300 dark:bg-dark-500  rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-8"})]})}),(0,l.jsx)("ul",{className:"flex-col md:flex-row list-none items-center hidden md:flex",children:(0,l.jsx)(x,{})})]})})]})},h=r(1664),u=function(e){var t=e.text;return(0,l.jsx)("h6",{className:"md:min-w-full text-dark-500 dark:text-light-300 text-xs uppercase font-bold block pt-1 pb-4 no-underline",children:t})},f=function(){return(0,l.jsx)("hr",{className:"my-4 md:min-w-full border-light-400 dark:border-dark-300 "})},p=function(e){var t=e.children;return(0,l.jsx)("ul",{className:"md:flex-col md:min-w-full flex flex-col list-none",children:t})},b=function(e){var t=e.iconClass,r=e.isActive,a=e.path,s=e.text;return(0,l.jsx)("li",{className:"items-center",children:(0,l.jsx)(h.default,{href:a,children:(0,l.jsxs)("a",{className:"text-xs uppercase p-3 font-bold block text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500 \n            ".concat(r?"border border-dashed border-dark-500 dark:border-light-400":""," "),children:[(0,l.jsx)("i",{className:"".concat(t," mr-2 text-sm")})," ",s]})})})},k=[{id:1,title:"Dashboard",items:[{iconClass:"fas fa-home",orderNo:1,path:"/app/dashboard",text:"Home"},{iconClass:"fas fa-mouse",orderNo:2,path:"/app/buttons",text:"Buttons"}]},{id:2,title:"Company",items:[{iconClass:"fas fa-address-card",orderNo:1,path:"/app/about",text:"About"}]}],j=function(){var e=a.useState("hidden"),t=(0,i.Z)(e,2),r=t[0],n=t[1],d=(0,s.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("nav",{className:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-light-400 dark:bg-dark-600 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-2 px-6",children:(0,l.jsxs)("div",{className:"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto",children:[(0,l.jsx)("button",{className:"cursor-pointer  px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent opacity-50 md:hidden ",type:"button",onClick:function(){return n(" bg-light-200 dark:bg-dark-300  m-2 py-3 px-6")},children:(0,l.jsx)("i",{className:"fas fa-bars"})}),(0,l.jsx)(h.default,{href:"/app/dashboard",children:(0,l.jsx)("a",{href:"#",className:"md:block text-left md:p-2 text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",children:c.rR})}),(0,l.jsx)("ul",{className:"md:hidden items-center flex flex-wrap list-none",children:(0,l.jsx)("li",{className:"inline-block relative",children:(0,l.jsx)(x,{})})}),(0,l.jsxs)("div",{className:"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "+r,children:[(0,l.jsx)("div",{className:"md:min-w-full md:hidden block mb-4",children:(0,l.jsxs)("div",{className:"flex flex-wrap",children:[(0,l.jsx)("div",{className:"w-6/12",children:(0,l.jsx)(h.default,{href:"/",children:(0,l.jsx)("a",{href:"#",className:"md:block text-left md:p-2 text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500  mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",children:c.rR})})}),(0,l.jsx)("div",{className:"w-6/12 flex justify-end",children:(0,l.jsx)("button",{type:"button",className:"cursor-pointer text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500  opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",onClick:function(){return n("hidden")},children:(0,l.jsx)("i",{className:"fas fa-times"})})})]})}),(0,l.jsx)("form",{className:"mt-6 mb-4 md:hidden",children:(0,l.jsxs)("div",{className:"relative flex w-full flex-wrap items-stretch",children:[(0,l.jsx)("span",{className:"z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 py-2",children:(0,l.jsx)("i",{className:"fas fa-search"})}),(0,l.jsx)("input",{type:"text",placeholder:"Search here...",className:"border-0 px-3 py-2 placeholder-dark-400 dark:placeholder-light-300 relative bg-light-300 dark:bg-dark-500  rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-8"})]})}),k.map((function(e){var t=e.id,r=e.items,s=e.title;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(f,{}),(0,l.jsx)(u,{text:s}),(0,l.jsx)(p,{children:r.map((function(e){var t=e.iconClass,r=e.path,a=e.orderNo,s=e.text;return(0,l.jsx)(b,{iconClass:t,path:r,isActive:-1!==d.pathname.indexOf(r),text:s},a)}))})]},t)}))]})]})})})},g=r(123),v=function(e){var t=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{}),(0,l.jsxs)("div",{className:"md:ml-64 bg-light-300 dark:bg-dark-400 h-screen overflow-auto",children:[(0,l.jsx)(m,{}),(0,l.jsx)("div",{className:"px-4 md:px-10 py-2 md:py-5 w-full min-h-full",children:t}),(0,l.jsx)(g.$,{isAuthLayout:!1})]})]})}}}]);