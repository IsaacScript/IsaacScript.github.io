(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return l}));var a=n(265),o=n.n(a);function c(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return o.a.decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function r(e){const t="code/"+o.a.compressToEncodedURIComponent(e);window.history.replaceState({},"","#"+t)}function l(e){return"/play/#code/"+o.a.compressToEncodedURIComponent(e)}},302:function(e,t,n){"use strict";var a=n(2),o=n(205),c=n(191),r=n(234),l=n(300),i=n.n(l),s=n(351),u=n.n(s),m=n(352),d=n.n(m),p=n(416),h=n(353),g=n(0),y=n.n(g),b=n(249),f=n(303),E=n.n(f);t.a=({children:e,className:t,metastring:n=""})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(c.a)(),{prismTheme:s,mounted:m}=function(e){const[t,n]=Object(g.useState)(!1);Object(g.useEffect)((()=>{n(!0)}),[]);const{isDarkTheme:a}=Object(r.a)(),o=e.theme||h.a,c=e.darkTheme||o;return{prismTheme:a?c:o,mounted:t}}(l),{showCopied:f,handleCopyCode:w,target:k,button:N}=function(){const e=Object(g.useRef)(null),t=Object(g.useRef)(null),[n,a]=Object(g.useState)(!1);return Object(g.useEffect)((()=>{let n;return t.current&&(n=new u.a(t.current,{target:()=>e.current})),()=>{n&&n.destroy()}}),[t.current,e.current]),{showCopied:n,handleCopyCode:()=>{window.getSelection().empty(),a(!0),setTimeout((()=>a(!1)),2e3)},target:e,button:t}}(),v=e.trim(),[,T]=n.match(/title=(.+)( |$)/)||[],[,I]=n.match(/{([\d,-]+)}/)||[],C=null!=I?d.a.parse(I).filter((e=>e>0)):[];let B=t&&t.replace(/language-/,"");!B&&l.defaultLanguage&&(B=l.defaultLanguage);const O="ts"===B||"typescript"===B;return y.a.createElement(p.a,Object(a.a)({},p.b,{key:m,theme:s,code:v,language:B}),(({className:e,style:t,tokens:n,getLineProps:c,getTokenProps:r})=>y.a.createElement(y.a.Fragment,null,T&&y.a.createElement("div",{className:E.a.title},T),y.a.createElement("pre",{className:i()(e,E.a.codeBlock,T&&E.a.hasTitle)},y.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:E.a.copyButton,onClick:w},f?"Copied":"Copy"),O&&y.a.createElement(o.a,{"aria-label":"Open code on playground",className:E.a.playgroundButton,to:Object(b.b)(v),target:"_blank"},"Playground"),y.a.createElement("code",{ref:k,className:E.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=c({line:e,key:t});return C.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),y.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>y.a.createElement("span",Object(a.a)({key:t},r({token:e,key:t}))))))})))))))}},303:function(e,t,n){e.exports={codeBlock:"codeBlock_222H",hasTitle:"hasTitle_1PmY",title:"title_1twf",codeBlockLines:"codeBlockLines_3zpG",copyButton:"copyButton_ujp3",playgroundButton:"playgroundButton_3DKR"}},499:function(e,t,n){e.exports={title:"title_1uZi",heroBanner:"heroBanner_2Wl1",buttons:"buttons_2sHG",example:"example_1Bc9"}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(2),o=n(205),c=n(223),r=n(302),l=n(245),i=n(0),s=n.n(i),u=n(499),m=n.n(u);const d=[{img:"/images/items/magic_mushroom.png",title:"The Entire Isaac API, Strongly Typed",description:s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,"Code fearlessly without having to worry about making a typo."),s.a.createElement("li",null,"Mouseover any function call to see exactly what it does, saving you from opening the docs."))},{img:"/images/typescripttolua.png",title:"Powered by TypeScriptToLua",description:s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,"IsaacScript leverages the excellent ",s.a.createElement("a",{href:"https://typescripttolua.github.io/"},"TypeScriptToLua")," ","library."),s.a.createElement("li",null,"All of your favorite TypeScript features will be automatically transpiled to Lua."))}],p="\nconst deadEnts = Isaac.GetRoomEntities().filter((ent) => ent.IsDead())\n".trim(),h="\nlocal deadEnts = {}\nfor _, ent in ipairs(Isaac.GetRoomEntities()) do\n   if ent:IsDead() then\n      table.insert(deadEnts, ent)\n   end\nend\n".trim();function g({title:e,description:t,img:n}){return s.a.createElement("div",{className:"col col--6"},s.a.createElement("img",{src:n,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"20%"}}),s.a.createElement("h3",{style:{textAlign:"center"}},e),s.a.createElement("ul",null,t))}function y(){const e={textAlign:"center"};return s.a.createElement(l.a,null,s.a.createElement("header",{className:`hero ${m.a.heroBanner} container`},s.a.createElement("h1",{className:"hero__title "+m.a.title},s.a.createElement("b",null,"IsaacScript")),s.a.createElement("p",{className:"hero__subtitle"},"Write ",s.a.createElement("em",null,"Binding of Isaac: Afterbirth+")," mods with TypeScript"),s.a.createElement("div",{className:m.a.buttons},s.a.createElement(o.a,{className:"button button--outline button--success button--lg",to:Object(c.a)("docs/features")},"Why should I?"),s.a.createElement(o.a,{className:"button button--outline button--primary button--lg",to:Object(c.a)("docs/getting-started")},"Get Started"))),s.a.createElement("main",null,s.a.createElement("section",{className:"padding-vert--md container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6 "+m.a.example},s.a.createElement("h3",{style:e},"TypeScript Input"),s.a.createElement(r.a,{className:"typescript"},p)),s.a.createElement("div",{className:"col col--6 "+m.a.example},s.a.createElement("h3",{style:e},"Lua Output"),s.a.createElement(r.a,{className:"lua"},h)))),s.a.createElement("section",{className:"padding-vert--lg container"},s.a.createElement("div",{className:"row"},d.map(((e,t)=>s.a.createElement(g,Object(a.a)({key:t},e))))))))}}}]);