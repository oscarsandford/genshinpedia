(this.webpackJsonpgenshinpedia=this.webpackJsonpgenshinpedia||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(6),n=a.n(i),l=(a(11),a(2)),r=a(3),d=a.n(r),o=a(5),b=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.genshin.dev/"+t).then((function(e){return e.ok?e.json():[]})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.genshin.dev/"+t).then((function(e){return e.ok?e.json():{}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=a(0),h=function(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(s.useEffect)((function(){j(e.type+"/"+e.article).then((function(e){i({name:e.name,rarity:e.max_rarity,bonus2:e["2-piece_bonus"],bonus4:e["4-piece_bonus"]})}))}),[e]),Object(u.jsx)("div",{className:"card mb-3",children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:"https://api.genshin.dev/"+e.type+"/"+e.article+"/flower-of-life",className:"img-fluid rounded-start",alt:"...",width:256,height:256})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:null===c||void 0===c?void 0:c.name}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsx)("u",{children:"2-piece"}),": ",null===c||void 0===c?void 0:c.bonus2]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsx)("u",{children:"4-piece"}),": ",null===c||void 0===c?void 0:c.bonus4]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{children:"\u2b50\ufe0f".repeat(void 0===(null===c||void 0===c?void 0:c.rarity)?0:c.rarity)})})]})})]})})},p=function(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(s.useEffect)((function(){j(e.type+"/"+e.article).then((function(e){i({name:e.name,rarity:e.rarity,vision:e.vision,weapon:e.weapon,nation:e.nation,affiliation:e.affiliation,birthday:new Date(e.birthday),description:e.description,constellation:e.constellation,passives:e.passiveTalents,skills:e.skillTalents,constellations:e.constellations})}))}),[e]),Object(u.jsxs)("div",{className:"card mb-3",children:[Object(u.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("button",{className:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("button",{className:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false",children:"Constellations"})}),Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("button",{className:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#skills",type:"button",role:"tab","aria-controls":"skills","aria-selected":"false",children:"Skills"})}),Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("button",{className:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#passives",type:"button",role:"tab","aria-controls":"passives","aria-selected":"false",children:"Passives"})})]}),Object(u.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[Object(u.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:null===c||void 0===c?void 0:c.name}),Object(u.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:Object(u.jsxs)("small",{children:[null===c||void 0===c?void 0:c.affiliation,", ",null===c||void 0===c?void 0:c.nation]})}),Object(u.jsx)("p",{className:"card-text",children:null===c||void 0===c?void 0:c.description}),Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-3",children:"Vision"}),Object(u.jsx)("dd",{className:"col-sm-9",children:null===c||void 0===c?void 0:c.vision}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Weapon"}),Object(u.jsx)("dd",{className:"col-sm-9",children:null===c||void 0===c?void 0:c.weapon}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Constellation"}),Object(u.jsx)("dd",{className:"col-sm-9",children:null===c||void 0===c?void 0:c.constellation}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Birthday"}),Object(u.jsx)("dd",{className:"col-sm-9",children:null===c||void 0===c?void 0:c.birthday.toDateString().slice(3,10)})]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{children:"\u2b50\ufe0f".repeat(void 0===(null===c||void 0===c?void 0:c.rarity)?0:c.rarity)})})]})}),Object(u.jsx)("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:Object(u.jsx)("div",{className:"card-body",children:null===c||void 0===c?void 0:c.constellations.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h5",{className:"card-title",children:["C",t+1,": ",e.name]}),Object(u.jsx)("p",{className:"card-text",children:e.description}),Object(u.jsx)("br",{})]})}))})}),Object(u.jsx)("div",{className:"tab-pane fade",id:"skills",role:"tabpanel","aria-labelledby":"skills-tab",children:Object(u.jsx)("div",{className:"card-body",children:null===c||void 0===c?void 0:c.skills.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{className:"card-title",children:e.name}),Object(u.jsx)("p",{className:"card-text",children:e.description}),Object(u.jsx)("br",{})]})}))})}),Object(u.jsx)("div",{className:"tab-pane fade",id:"passives",role:"tabpanel","aria-labelledby":"passives-tab",children:Object(u.jsx)("div",{className:"card-body",children:null===c||void 0===c?void 0:c.passives.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{className:"card-title",children:e.name}),Object(u.jsx)("p",{className:"card-text",children:e.description}),Object(u.jsx)("br",{})]})}))})})]})]})},m=function(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(s.useEffect)((function(){j(e.type+"/"+e.article).then((function(e){i({name:e.name,rarity:e.rarity,type:e.type,attack:e.baseAttack,substat:e.subStat,location:e.location,passivename:e.passiveName,passivedesc:e.passiveDesc})}))}),[e]),Object(u.jsx)("div",{className:"card mb-3",children:Object(u.jsx)("div",{className:"row g-0",children:Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:null===c||void 0===c?void 0:c.name}),Object(u.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:Object(u.jsx)("small",{children:null===c||void 0===c?void 0:c.type})}),Object(u.jsxs)("p",{className:"card-text",children:[null===c||void 0===c?void 0:c.attack," ATK, ",null===c||void 0===c?void 0:c.substat]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("strong",{children:[null===c||void 0===c?void 0:c.passivename,":"]})," ",null===c||void 0===c?void 0:c.passivedesc]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{children:"\u2b50\ufe0f".repeat(void 0===(null===c||void 0===c?void 0:c.rarity)?0:c.rarity)})})]})})})})},v=function(e){for(var t=e.charAt(0).toUpperCase(),a=1;a<e.length-1;a++)"-"===e[a]?a<e.length-2&&"s-"===e.substr(a+1,2)?(t+="'s",a++):(t+=" "+e[a+1].toUpperCase(),a++):t+=e[a];return t+e[e.length-1]},x=function(e){var t=Object(s.useState)([]),a=Object(l.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),d=r[0],o=r[1];Object(s.useEffect)((function(){b(e.type).then((function(e){i(e)}))}),[e]);return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(u.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:e.type}),Object(u.jsx)("select",{className:"form-select",onChange:function(e){return function(e){o(e.target.value)}(e)},children:c.map((function(e){return Object(u.jsx)("option",{value:e,children:v(e)},e)}))})]}),function(){if(""!==d){if("artifacts"===e.type)return Object(u.jsx)(h,{type:e.type,article:d});if("characters"===e.type)return Object(u.jsx)(p,{type:e.type,article:d});if("weapons"===e.type)return Object(u.jsx)(m,{type:e.type,article:d})}}()]})},O=(a(14),function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"GPSearch",children:[Object(u.jsx)(x,{type:"artifacts"}),Object(u.jsx)(x,{type:"characters"}),Object(u.jsx)(x,{type:"weapons"})]})})}),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};a(15);n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.6e49e38c.chunk.js.map