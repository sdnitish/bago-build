"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[734],{1734:(e,l,s)=>{s.r(l),s.d(l,{default:()=>b});var a=s(5043),t=s(3372),n=(s(2420),s(3216)),c=s(579);const u=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(149),s.e(173),s.e(763),s.e(773)]).then(s.bind(s,2638)))),h=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(951),s.e(763),s.e(776),s.e(894)]).then(s.bind(s,7894)))),j=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(763),s.e(70)]).then(s.bind(s,5237)))),o=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(763),s.e(377)]).then(s.bind(s,9810)))),i=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(591),s.e(490)]).then(s.bind(s,4860)))),x=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(763),s.e(662)]).then(s.bind(s,6989)))),p=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(951),s.e(763),s.e(776),s.e(589)]).then(s.bind(s,3589)))),r=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(99)]).then(s.bind(s,6099)))),m=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(763),s.e(664)]).then(s.bind(s,6147)))),d=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(763),s.e(507)]).then(s.bind(s,6760)))),g=(0,a.lazy)((()=>Promise.all([s.e(152),s.e(637),s.e(797),s.e(443),s.e(751),s.e(591),s.e(763),s.e(913)]).then(s.bind(s,6554))));const b=function(){const[e,l]=(0,a.useState)([]),[s,b]=(0,a.useState)([]),[S,f]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{let e=await fetch("".concat("http://localhost:3000/","products"));e=await e.json(),e.status&&l(e.products)})(),(async()=>{let e=await fetch("".concat("http://localhost:3000/","marketPlace"));e=await e.json(),e.status&&(b(e.data.locations),f(e.data.promotionalCategories))})()}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n.BV,{children:[(0,c.jsx)(n.qh,{path:"/",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(h,{})})}),(0,c.jsx)(n.qh,{path:"/services",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(x,{})})}),(0,c.jsx)(n.qh,{path:"/company-profile",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(u,{})})}),(0,c.jsx)(n.qh,{path:"/contact",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(j,{})})}),(0,c.jsx)(n.qh,{path:"/sitemap",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(o,{})})}),(0,c.jsx)(n.qh,{path:"/market-place",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(i,{})})}),(0,c.jsx)(n.qh,{path:"/product-details",element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(p,{})})}),(0,c.jsx)(n.qh,{path:"/google35da33f130a69c13.html",element:"google-site-verification: google35da33f130a69c13.html"}),e?e.map(((e,l)=>(0,c.jsx)(n.qh,{path:"/"+e.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(p,{slug:e.slug})})},l))):null,S?S.map(((l,s)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.qh,{path:"/"+l.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(r,{slug:l.slug})})},s),e?e.map(((e,s)=>(0,c.jsx)(n.qh,{path:"/"+l.slug+"/"+e.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(m,{categorySlug:l.slug,productSlug:e.slug})})},s))):null]}))):null,s?s.map(((l,s)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.qh,{path:"/"+l.parentSlug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(d,{slug:l.parentSlug})})},s),e?e.map(((e,s)=>(0,c.jsx)(n.qh,{path:"/"+l.parentSlug+"/"+e.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(g,{locationSlug:l.parentSlug,productSlug:e.slug})})},s))):null,l.cities.map(((l,s)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.qh,{path:"/"+l.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(d,{slug:l.slug})})},s),e?e.map(((e,s)=>(0,c.jsx)(n.qh,{path:"/"+l.slug+"/"+e.slug,element:(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(t.A,{count:15}),children:(0,c.jsx)(g,{locationSlug:l.slug,productSlug:e.slug})})},s))):null]})))]}))):null]})})}}}]);
//# sourceMappingURL=734.d973b40a.chunk.js.map