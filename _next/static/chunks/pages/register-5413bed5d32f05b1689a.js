(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{123:function(e,t,l){"use strict";l.d(t,{$:function(){return d}});var r=l(5893),a=l(1163),s=l(7294),n=l(9466),i=function(e){var t=e.onClick,l=e.children;return(0,r.jsx)("button",{onClick:t,className:"text-dark-700 dark:text-light-400 hover:text-dark-600 dark:hover:text-light-500 text-sm font-semibold block py-1 px-3",children:l})},d=function(e){var t=e.isAuthLayout,l=function(){var e=(0,s.useState)("light"),t=e[0],l=e[1],r="dark"===t?"light":"dark";return(0,s.useEffect)((function(){l(localStorage.getItem("application-theme"))}),[]),(0,s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(r),e.classList.add(t),localStorage.setItem("application-theme",t)}),[t,r]),{nextTheme:r,toggleTheme:function(){return l(r)}}}(),d=l.nextTheme,c=l.toggleTheme,o=(0,a.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"sticky ".concat(t?"":"bg-light-400 dark:bg-dark-800"," bottom-0 block py-2"),children:(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:[(0,r.jsx)("div",{className:"w-full md:w-4/12 px-4",children:(0,r.jsxs)("div",{className:"text-sm text- font-semibold py-1 text-center md:text-left",children:["Copyright \xa9 ",(new Date).getFullYear(),(0,r.jsx)("a",{href:"#",className:"text-dark-700 dark:text-light-400 hover:text-dark-600 dark:hover:text-light-500 text-sm font-semibold p-1",children:n.Zz})]})}),(0,r.jsx)("div",{className:"w-full md:w-8/12 px-4 mt-2 md:mt-0",children:(0,r.jsxs)("ul",{className:"flex flex-wrap list-none md:justify-end justify-center",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i,{children:n.Zz})}),(0,r.jsx)("li",{children:(0,r.jsx)(i,{onClick:function(){return o.push(t?"/about":"/app/about")},children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i,{onClick:c,children:"dark"===d?(0,r.jsx)("i",{className:"fas fa-moon"}):(0,r.jsx)("i",{className:"fas fa-sun"})})})]})})]})})})})}},9466:function(e,t,l){"use strict";l.d(t,{rR:function(){return a},Zz:function(){return s}});var r=l(4155),a=r.env.NEXT_PUBLIC_APP_NAME||"Admin-dashboard",s=r.env.NEXT_PUBLIC_COMPANY_NAME||"Afreet-Co";r.env.NEXT_PUBLIC_APP_NAME,r.env.NEXT_PUBLIC_DESCRIPTION},5610:function(e,t,l){"use strict";l.d(t,{Y:function(){return r}});var r=function(e){var t,l=e.split("/"),r=l[l.length-1];return((null===r||void 0===r||null===(t=r.split("?")[0])||void 0===t?void 0:t.split("-").join(" "))||"Home").replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))}},3255:function(e,t,l){"use strict";l.d(t,{g:function(){return u}});var r=l(5893),a=(l(7294),l(123)),s=l(1664),n=l(9466),i=l(1163),d=l(5610),c=l(9008),o=function(){var e=(0,i.useRouter)(),t=(0,d.Y)(e.asPath);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{children:(0,r.jsxs)("title",{children:[t," | ",n.rR]})}),(0,r.jsx)("nav",{className:"sticky top-0 w-full z-10 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",children:(0,r.jsx)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:(0,r.jsx)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"text-dark-700 dark:text-light-300  text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",children:n.rR})})})})})]})},u=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"w-screen h-screen bg-light-300 dark:bg-dark-700 bg-no-repeat bg-full overflow-auto",children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:" min-h-full w-full flex justify-center items-start pt-10",children:t}),(0,r.jsx)(a.$,{isAuthLayout:!0})]})}},5487:function(e,t,l){"use strict";l.r(t);var r=l(5893),a=(l(7294),l(3255));t.default=function(){return(0,r.jsx)(a.g,{children:(0,r.jsx)("div",{className:"w-full lg:w-4/12 px-4",children:(0,r.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-light-200 dark:bg-dark-600  border-0",children:[(0,r.jsx)("div",{className:"mb-0 p-6",children:(0,r.jsx)("div",{className:"block uppercase text-dark-800 dark:text-light-500 text-lg font-bold text-center",children:"Register"})}),(0,r.jsx)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-0",children:(0,r.jsxs)("form",{children:[(0,r.jsxs)("div",{className:"relative w-full mb-3",children:[(0,r.jsx)("label",{className:"block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Name"}),(0,r.jsx)("input",{type:"email",className:"border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Name"})]}),(0,r.jsxs)("div",{className:"relative w-full mb-3",children:[(0,r.jsx)("label",{className:"block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Email"}),(0,r.jsx)("input",{type:"email",className:"border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Email"})]}),(0,r.jsxs)("div",{className:"relative w-full mb-3",children:[(0,r.jsx)("label",{className:"block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Password"}),(0,r.jsx)("input",{type:"password",className:"border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Password"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[(0,r.jsx)("input",{id:"customCheckLogin",type:"checkbox",className:"form-checkbox border-0 rounded text-dark-700 dark:text-light-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"}),(0,r.jsxs)("span",{className:"ml-2 text-sm font-semibold text-dark-700 dark:text-light-400",children:["I agree with the"," ",(0,r.jsx)("a",{href:"#pablo",className:"text-dark-800 dark:text-light-500",onClick:function(e){return e.preventDefault()},children:"Privacy Policy"})]})]})}),(0,r.jsx)("div",{className:"text-center mt-6",children:(0,r.jsx)("button",{className:"dark:bg-dark-800 bg-light-500 text-dark-700 dark:text-light-400 dark:active:bg-dark-800 active:bg-light-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",type:"button",children:"Create Account"})})]})})]})})})}},2072:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return l(5487)}])}},function(e){e.O(0,[347,774,888,179],(function(){return t=2072,e(e.s=t);var t}));var t=e.O();_N_E=t}]);