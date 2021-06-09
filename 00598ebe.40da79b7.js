(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?o.a.createElement(m,r(r({ref:t},p),{},{components:n})):o.a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(2),o=(n(0),n(169));const i={title:"JavaScript/TypeScript Tutorial"},l={unversionedId:"javascript-tutorial",id:"javascript-tutorial",isDocsHomePage:!1,title:"JavaScript/TypeScript Tutorial",description:"This page shows off some of the differences between Lua and TypeScript. Below, you can compare Lua code side by side with the equivalent TypeScript code. If you have coded a mod in Lua before, reading through this page will probably be enough to get you started.",source:"@site/docs/javascript-tutorial.md",slug:"/javascript-tutorial",permalink:"/docs/javascript-tutorial",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/javascript-tutorial.md",version:"current",sidebar:"docs",previous:{title:"Project Directory Structure",permalink:"/docs/directory-structure"},next:{title:"Building an Example Mod",permalink:"/docs/example-mod"}},r=[{value:"Level 1 - Basic",id:"level-1---basic",children:[{value:"Comments",id:"comments",children:[]},{value:"Semi-Colons",id:"semi-colons",children:[]},{value:"Colons",id:"colons",children:[]},{value:"Variables: <code>local</code> --&gt; <code>const</code> and <code>let</code>",id:"variables-local----const-and-let",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Anonymous Functions",id:"anonymous-functions",children:[]},{value:"<code>if</code> Statements and Operators",id:"if-statements-and-operators",children:[]},{value:"<code>for</code> Statements for Counting",id:"for-statements-for-counting",children:[]},{value:"<code>for</code> Statements for Arrays",id:"for-statements-for-arrays",children:[]},{value:"<code>for</code> Statements for Key/Value Tables",id:"for-statements-for-keyvalue-tables",children:[]},{value:"<code>nil</code> --&gt; <code>null</code>",id:"nil----null",children:[]},{value:"Assignment Operators",id:"assignment-operators",children:[]},{value:"String Concatenation",id:"string-concatenation",children:[]},{value:"String Conversion",id:"string-conversion",children:[]},{value:"TypeScript Type Annotations",id:"typescript-type-annotations",children:[]}]},{value:"Level 2 - Intermediate",id:"level-2---intermediate",children:[{value:"Splitting Your Code Into Multiple Files: <code>require()</code> --&gt; <code>import</code>",id:"splitting-your-code-into-multiple-files-require----import",children:[]},{value:"Importing Global Variables",id:"importing-global-variables",children:[]},{value:"Importing Complicated Global Variables",id:"importing-complicated-global-variables",children:[]},{value:"Exporting Global Variables",id:"exporting-global-variables",children:[]},{value:"Enums",id:"enums",children:[]},{value:"Maps",id:"maps",children:[]}]}],c={rightToc:r};function p({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page shows off some of the differences between Lua and TypeScript. Below, you can compare Lua code side by side with the equivalent TypeScript code. If you have coded a mod in Lua before, reading through this page will probably be enough to get you started."),Object(o.b)("br",null),Object(o.b)("h2",{id:"level-1---basic"},"Level 1 - Basic"),Object(o.b)("br",null),Object(o.b)("h3",{id:"comments"},"Comments"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- This is a single-line comment in Lua.\n\n--[[\n\nThis is a multi-line comment in Lua.\nIt's very long.\nAnd wordy.\n\n--]]\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// This is a single-line comment in TypeScript.\n\n/*\n\nThis is a multi-line comment in TypeScript.\nIt's very long.\nAnd wordy.\n\n*/\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"semi-colons"},"Semi-Colons"),Object(o.b)("p",null,"Unlike Lua, TypeScript code should have semi-colons after every line."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nIsaac.DebugString("hello world")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nIsaac.DebugString("hello world");\n')),Object(o.b)("p",null,"But don't bother typing the semi-colons yourself - just hit ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl + s")," and the editor will automatically insert them for you. That's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prettier.io/"}),"Prettier")," doing its job."),Object(o.b)("p",null,"(In fact, you should always hit ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl + s")," periodically as you code, so that the code is constantly formatting itself. This frees you from the tedium of aligning things, breaking up long if statements, and so forth. If the file is not auto-formatting itself, then you probably need to add a bracket somewhere so that the code can properly compile.)"),Object(o.b)("br",null),Object(o.b)("h3",{id:"colons"},"Colons"),Object(o.b)("p",null,"Sometimes in Lua, you call functions with a colon, and sometimes you call them with a period. This is kind of annoying."),Object(o.b)("p",null,"In TypeScript, you just call everything with a period. Easy."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nIsaac.DebugString("hello world")\nGame():GetPlayer(0):AddMaxHearts(2)\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nIsaac.DebugString("hello world");\nGame().GetPlayer(0).AddMaxHearts(2);\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"variables-local----const-and-let"},"Variables: ",Object(o.b)("inlineCode",{parentName:"h3"},"local")," --\x3e ",Object(o.b)("inlineCode",{parentName:"h3"},"const")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"let")),Object(o.b)("p",null,"In Lua, you generally type ",Object(o.b)("inlineCode",{parentName:"p"},"local")," before declaring a variable to stop it from being turned into a global."),Object(o.b)("p",null,"In TypeScript, this isn't necessary. There are no globals variables, unless we explicitly create one."),Object(o.b)("p",null,"Furthermore, in TypeScript, there are two kinds of variable declarations: ",Object(o.b)("inlineCode",{parentName:"p"},"let")," and ",Object(o.b)("inlineCode",{parentName:"p"},"const"),".",Object(o.b)("br",null),"\n(Don't ever use ",Object(o.b)("inlineCode",{parentName:"p"},"var"),", which is only used in older JavaScript code.)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nlocal poop = "poop"\nlocal numFarts = 1\nnumFarts = numFarts + 1 -- numFarts is now equal to 2\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nconst poop = "poop"; // We use "const" because this value never changes\nlet numFarts = 1; // We use "let" because we have to modify it later\nnumFarts = numFarts + 1; // numFarts is now equal to 2\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nfunction getNumPoops() -- This is a global function\n  return 2\nend\n\nlocal function getNumFarts() -- This is a local function\n  return 3\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\n// All functions in TypeScript are local by default\nfunction getNumPoops() {\n  return 2;\n}\n")),Object(o.b)("h3",{id:"anonymous-functions"},"Anonymous Functions"),Object(o.b)("p",null,"For very small functions, it is common to type them anonymously (i.e. without a name)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nRevelations:AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, function()\n  Isaac.DebugString("Arrived on a new floor.")\nend);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// Typescript code\nRevelations.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, () => {\n  Isaac.DebugString("Arrived on a new floor.");\n});\n')),Object(o.b)("p",null,"(If this syntax looks confusing, google \"JavaScript arrow functions\" in order to get more familiar with them. But of course, you don't have to use arrow functions if you don't want to.)"),Object(o.b)("br",null),Object(o.b)("h3",{id:"if-statements-and-operators"},Object(o.b)("inlineCode",{parentName:"h3"},"if")," Statements and Operators"),Object(o.b)("p",null,"In TypeScript, you have to put parentheses around the conditions of an ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement."),Object(o.b)("p",null,"Also, the operators are a bit different:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"and")," --\x3e ",Object(o.b)("inlineCode",{parentName:"li"},"&&")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"or")," --\x3e ",Object(o.b)("inlineCode",{parentName:"li"},"||")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"==")," --\x3e ",Object(o.b)("inlineCode",{parentName:"li"},"===")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"~=")," --\x3e ",Object(o.b)("inlineCode",{parentName:"li"},"!==")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"..")," --\x3e ",Object(o.b)("inlineCode",{parentName:"li"},"+"))),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nif x == 1 and y ~= 0 then\n  -- Do something\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nif (x === 1 && y !== 0) {\n  // Do something\n}\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"for-statements-for-counting"},Object(o.b)("inlineCode",{parentName:"h3"},"for")," Statements for Counting"),Object(o.b)("p",null,"In Lua, basic ",Object(o.b)("inlineCode",{parentName:"p"},"for")," loops look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nfor i = 1, 10 do\n  -- "i" will iterate upwards from 1 to 10\nend\n')),Object(o.b)("p",null,"In TypeScript, you use the more-standard C-style syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nfor (let i = 1; i <= 10; i++) {\n  // "i" will iterate upwards from 1 to 10\n}\n')),Object(o.b)("p",null,"In Lua, you count downwards like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nfor i = 10, 1, -1 do\n  -- "i" will iterate downwards from 10 to 1\nend\n')),Object(o.b)("p",null,"In TypeScript, that would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nfor (let i = 10; i >= 1; i--) {\n  // "i" will iterate downwards from 1 to 10\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"for-statements-for-arrays"},Object(o.b)("inlineCode",{parentName:"h3"},"for")," Statements for Arrays"),Object(o.b)("p",null,"In Lua, the typical way to iterate over an array is with ",Object(o.b)("inlineCode",{parentName:"p"},"ipairs"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal gapers = Isaac.FindByType(EntityType.ENTITY_GAPER, -1, -1, false, false)\n\nfor i, gaper in ipairs(gapers) do\n  print(i)\n  gaper:Remove()\nend\n")),Object(o.b)("p",null,"In TypeScript, you have a few different options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// Typescript code\nconst gapers = Isaac.FindByType(EntityType.ENTITY_GAPER, -1, -1, false, false);\n\n// A "for of" loop is the simplest way to iterate over an array\nfor (const gaper of gapers) {\n  gaper.Remove();\n}\n\n// Or, use the "entries" method if you need the array index too\nfor (const [i, gaper] of gapers.entries()) {\n  print(i);\n  gaper.Remove();\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"for-statements-for-keyvalue-tables"},Object(o.b)("inlineCode",{parentName:"h3"},"for")," Statements for Key/Value Tables"),Object(o.b)("p",null,"In Lua, the typical way to iterate over a key/value table is with ",Object(o.b)("inlineCode",{parentName:"p"},"pairs"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\n-- Define a table of item prices\n-- (we must put "[]" around the item IDs since the table keys are numbers)\nlocal itemPrices = {\n  [CollectibleType.COLLECTIBLE_SAD_ONION] = 30,\n  [CollectibleType.COLLECTIBLE_INNER_EYE] = 40,\n  [CollectibleType.COLLECTIBLE_SPOON_BENDER] = 25,\n}\n\nfor itemID, price in pairs(itemPrices) do\n  -- Do something with "itemID" and "price"\nend\n')),Object(o.b)("p",null,"In TypeScript, you have a few different options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\n// Define an anonymous object containing item prices\nconst itemPrices = {\n  [CollectibleType.COLLECTIBLE_SAD_ONION]: 15,\n  [CollectibleType.COLLECTIBLE_INNER_EYE]: 15,\n  [CollectibleType.COLLECTIBLE_SPOON_BENDER]: 7,\n};\n\nfor (const [itemID, price] of Object.entries(itemPrices)) {\n  // Do something with "itemID" and "price"\n}\n\n// Or, if you just need the item ID, you would use the "keys()" method\nfor (const itemID of Object.keys(itemPrices)) {\n  // Do something with "itemID"\n}\n\n// Or, if you just need the price, you would use the "values()" method\nfor (const price of Object.values(itemPrices)) {\n  // Do something with "price"\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"nil----null"},Object(o.b)("inlineCode",{parentName:"h3"},"nil")," --\x3e ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nif entity.SpawnerEntity == nil then\n  -- This entity was not spawned by anything in particular\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nif (entity.SpawnerEntity === null) {\n  // This entity was not spawned by anything in particular\n}\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"assignment-operators"},"Assignment Operators"),Object(o.b)("p",null,"Lua does not have assignment operators, because it is a terrible language."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal numFarts = 1\nnumFarts = numFarts + 1 -- numFarts is now equal to 2\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nlet numFarts = 1;\nnumFarts += 1; // numFarts is now equal to 2\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"string-concatenation"},"String Concatenation"),Object(o.b)("p",null,"The way to concatenate strings is different:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nlocal poopString = "poop"\npoopString = poopString .. " modified" -- poopString is now equal to "poop modified"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// TypeScript code\nlet poopString = "poop";\npoopString += " modified"; // poopString is now equal to "poop modified"\n')),Object(o.b)("p",null,"(TypeScript uses the same operator for adding numbers and concatenating strings.)"),Object(o.b)("br",null),Object(o.b)("h3",{id:"string-conversion"},"String Conversion"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal numPoops = 3\nlocal numPoopsString = tostring(numPoops)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nconst numPoops = 3;\nconst numPoopsString = numPoops.toString();\n")),Object(o.b)("p",null,"However, in TypeScript, you probably won't need to convert variables like this very often. Most of the time, you can use string templates, which are very convenient. They are denoted by the ",Object(o.b)("code",null,"`")," character and will automatically convert any variable to a string."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nIsaac.DebugString("The current number of poops is: " .. tostring(numPoops))\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nIsaac.DebugString(`The current number of poops is: ${numPoops}`);\n")),Object(o.b)("p",null,"Or, a slightly more complicated example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- Lua code\nIsaac.DebugString("Entity found: " .. tostring(entity.Type) .. "."\n                  .. tostring(entity.Variant) .. "." .. tostring(entity.SubType))\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nIsaac.DebugString(`Entity found: ${entity.Type}.${entity.Variant}.${entity.SubType}`);\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"typescript-type-annotations"},"TypeScript Type Annotations"),Object(o.b)("p",null,"The main thing that TypeScript adds to JavaScript is type annotations. Here's a quick example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal function PostPlayerInit(player)\n  player:AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false)\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// JavaScript code\nfunction PostPlayerInit(player) {\n  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nfunction PostPlayerInit(player: EntityPlayer) {\n  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);\n}\n")),Object(o.b)("p",null,'In the TypeScript code snippet, you can see that we marked "player" as the "EntityPlayer" type by using a colon. The "EntityPlayer" type is automatically provided by the ',Object(o.b)("inlineCode",{parentName:"p"},"isaac-typescript-definitions"),' package, and corresponds to the "EntityPlayer" in the official docs. (The ',Object(o.b)("inlineCode",{parentName:"p"},"isaac-typescript-definitions")," package is automatically imported in any IsaacScript project.)"),Object(o.b)("p",null,'Once the type has been annotated, your editor will know about all of the legal methods for the "player" variable. If you make a typo on the "AddCollectible" method, the editor will immediately tell us by drawing a squiggly line underneath it.'),Object(o.b)("p",null,"When coding in TypeScript, you will need to add the type for every function argument. That way, the compiler can catch all of the bugs."),Object(o.b)("br",null),Object(o.b)("h2",{id:"level-2---intermediate"},"Level 2 - Intermediate"),Object(o.b)("br",null),Object(o.b)("h3",{id:"splitting-your-code-into-multiple-files-require----import"},"Splitting Your Code Into Multiple Files: ",Object(o.b)("inlineCode",{parentName:"h3"},"require()")," --\x3e ",Object(o.b)("inlineCode",{parentName:"h3"},"import")),Object(o.b)("p",null,"In Lua, you split your code into multiple files by using ",Object(o.b)("inlineCode",{parentName:"p"},"require()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- main.lua\nlocal postPlayerInit = require("revelations.postPlayerInit")\n\nlocal Revelations = RegisterMod("Revelations", 1)\nRevelations:AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, postPlayerInit.main);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- postPlayerInit.lua\nlocal postPlayerInit = {}\n\nfunction postPlayerInit:main(player)\n  player:AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false)\nend\n\nreturn postPlayerInit\n")),Object(o.b)("p",null,"In TypeScript, this is accomplished with ",Object(o.b)("inlineCode",{parentName:"p"},"import"),".",Object(o.b)("br",null),"\n(Don't ever use the JavaScript/TypeScript version of ",Object(o.b)("inlineCode",{parentName:"p"},"require()"),", which is only used in older JavaScript code.)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// main.ts\nimport * as postPlayerInit from "./postPlayerInit";\n\nconst Revelations = RegisterMod("Revelations", 1);\nRevelations.AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, postPlayerInit.main);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// postPlayerInit.ts\nexport function main(player: EntityPlayer) {\n  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);\n}\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"importing-global-variables"},"Importing Global Variables"),Object(o.b)("p",null,"Sometimes, your mod might need to use a global variable exported by someone else's mod. For example, you might need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"InfinityTrueCoopInterface")," global variable from the True Co-op Mod."),Object(o.b)("br",null),Object(o.b)("h4",{id:"option-1---inline-declarations"},"Option 1 - Inline Declarations"),Object(o.b)("p",null,"You can add the global declaration right before the code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nif InfinityTrueCoopInterface ~= nil then\n  -- The user has the True Co-op mod enabled, so now do something\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\ndeclare const InfinityTrueCoopInterface: null | unknown;\nif (InfinityTrueCoopInterface !== null) {\n  // The user has the True Co-op mod enabled, so now do something\n}\n")),Object(o.b)("br",null),Object(o.b)("h4",{id:"option-2---a-declaration-file"},"Option 2 - A Declaration File"),Object(o.b)("p",null,"If you need to check for ",Object(o.b)("inlineCode",{parentName:"p"},"InfinityTrueCoopInterface !== null")," in more than one place in your mod, then option 1 is bad, because you would be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"need to repeat yourself before each check"),". Instead, make a TypeScript definition file that corresponds to the variable / table."),Object(o.b)("p",null,"For example, to declare ",Object(o.b)("inlineCode",{parentName:"p"},"InfinityTrueCoopInterface"),", starting from the root of your project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the ",Object(o.b)("inlineCode",{parentName:"li"},"src/types")," directory."),Object(o.b)("li",{parentName:"ul"},"Create the ",Object(o.b)("inlineCode",{parentName:"li"},"src/types/InfinityTrueCoopInterface.d.ts")," file."),Object(o.b)("li",{parentName:"ul"},"Put the following in it:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare const InfinityTrueCoopInterface: null | unknown;\n")),Object(o.b)("p",null,"Now, your other TypeScript files will see it as a global variable without you having to do anything else."),Object(o.b)("br",null),Object(o.b)("h3",{id:"importing-complicated-global-variables"},"Importing Complicated Global Variables"),Object(o.b)("p",null,"First, see the previous section on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#importing-global-variables"}),"importing global variables"),"."),Object(o.b)("p",null,"In the True Co-op Mod, the exported global variable of ",Object(o.b)("inlineCode",{parentName:"p"},"InfinityTrueCoopInterface")," allows other mods to add new characters with the ",Object(o.b)("inlineCode",{parentName:"p"},"AddCharacter")," method. What if your mod creates a new character and you want to add it to the True Co-op Mod? If you try calling ",Object(o.b)("inlineCode",{parentName:"p"},"InfinityTrueCoopInterface.AddCharacter()"),", TypeScript will throw and error and say that it doesn't exist."),Object(o.b)("p",null,"The solution is to add the ",Object(o.b)("inlineCode",{parentName:"p"},"AddCharacter()")," method to our definition file. We need to flesh out the ",Object(o.b)("inlineCode",{parentName:"p"},"src/types/InfinityTrueCoopInterface.d.ts")," file a bit:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// The global variable exists and it is a Lua table of type TrueCoop,\n// which we will immediately define below\ndeclare const InfinityTrueCoopInterface: TrueCoop;\n\n// We declare a TrueCoop class that has as many methods as we need\n// (but for now we will only add one)\ndeclare class TrueCoop() {\n  AddCharacter(playerData: TrueCoopPlayerData)\n}\n\n// We also have to specify what the True Co-op mod expects to be passed for the\n// first argument of the "AddCharacter" method\n// This (partially) matches the documentation near the top of the "main.lua"\n// file for the True Co-op Mod\ninterface TrueCoopPlayerData {\n  Name: string;\n  Type: PlayerType;\n  SelectionGfx: string;\n  GhostCostume: NullCostumeID;\n  MaxHearts: int;\n  Hearts: int;\n  // etc.\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"exporting-global-variables"},"Exporting Global Variables"),Object(o.b)("p",null,"In Lua, some mods export functionality by using a global variable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- A Lua file in someone else\'s mod\nRevelationsVersion = "2.1" -- "RevelationsVersion" is now a global variable\n')),Object(o.b)("p",null,"In TypeScript, you just have to declare it beforehand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare let RevelationsVersion: string;\nRevelationsVersion = "2.1"; // "RevelationsVersion" is now a global variable\n')),Object(o.b)("p",null,"Building on this example, you can also expose both variables and methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class Exports() {\n  IncreaseStrength(amount: int) {\n    // [more code here]\n  }\n}\nconst exports = new Exports()\n\ndeclare let RevelationsExports: Exports;\nRevelationsExports = exports; // "RevelationsExports" is now a global variable\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"enums"},"Enums"),Object(o.b)("p",null,"In the previous ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#for-statements-for-keyvalue-tables"}),Object(o.b)("inlineCode",{parentName:"a"},"for")," loop section"),", we defined a mapping of items to prices."),Object(o.b)("p",null,"Imagine that in our mod, items can only be sold for three different prices:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"15 coins (normal)"),Object(o.b)("li",{parentName:"ul"},"30 coins (double)"),Object(o.b)("li",{parentName:"ul"},"7 coins (on sale)")),Object(o.b)("p",null,"This means that we can get even more specific with our map definition by using an ",Object(o.b)("inlineCode",{parentName:"p"},"enum"),". Unlike Lua, TypeScript has a built-in ",Object(o.b)("inlineCode",{parentName:"p"},"enum")," data type."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"enum ItemPrice {\n  Normal = 15,\n  Double = 30,\n  Sale = 7,\n}\n\n// itemPrices now only has values of ItemPrice, which is even safer than before!\nconst itemPrices = {\n  [CollectibleType.COLLECTIBLE_SAD_ONION]: ItemPrice.Normal,\n  [CollectibleType.COLLECTIBLE_INNER_EYE]: ItemPrice.Normal,\n  [CollectibleType.COLLECTIBLE_SPOON_BENDER]: ItemPrice.Sale,\n};\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"maps"},"Maps"),Object(o.b)("p",null,"In the previous ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#enums"}),"enums"),' section, we defined "itemPrices" as an anonymous object, which is roughly equivalent to a Lua table.'),Object(o.b)("p",null,"Anonymous objects are good for cases where you won't use variables to access the data. But this isn't the case for \"itemPrices\". Here, we are only specifying the prices for ",Object(o.b)("em",{parentName:"p"},"some")," of the collectibles in the game. If a collectible isn't in the list, we'll probably want to ignore it, or give it a default value, or something along those lines."),Object(o.b)("p",null,'In this example, what "itemPrices" ',Object(o.b)("em",{parentName:"p"},"really")," represents is a ",Object(o.b)("em",{parentName:"p"},"map")," of a specific item ID to a price. Unlike Lua, TypeScript has a ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," data type. So, the example would be better written like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// itemPrices has a type of "Map<CollectibleType, number>",\n// which makes much more sense than an anonymous object\nconst itemPrices = new Map([\n  [CollectibleType.COLLECTIBLE_SAD_ONION, 15],\n  [CollectibleType.COLLECTIBLE_INNER_EYE, 15],\n  [CollectibleType.COLLECTIBLE_SPOON_BENDER, 7],\n]);\nfor (const [itemID, price] of itemPrices) {\n  // Do something with "itemID" and "price"\n}\n')),Object(o.b)("p",null,"With a map, you can use all of the handy methods ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),"shown in the MDN docs")," (listed on the left side). Here's an example of using the ",Object(o.b)("inlineCode",{parentName:"p"},"get()")," method to emulate checking for a value in a Lua table:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal function pickingUpItem(player, pickingUpItemID)\n  -- If the player picked up a new item,\n  -- subtract the price of that item from their coin amount\n  local price = itemPrices[pickingUpItemID]\n  if price ~= nil then\n    player:AddCoins(price * -1)\n  end\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nfunction pickingUpItem(player: EntityPlayer, pickingUpItemID: number) {\n  // If the player picked up a new item,\n  // subtract the price of that item from their coin amount\n  const price = itemPrices.get(pickingUpItemID)\n  if (price !== undefined) {\n    player.AddCoins(price * -1)\n  }\n}\n")),Object(o.b)("p",null,"(You could also use ",Object(o.b)("inlineCode",{parentName:"p"},"price !== null")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"price !== undefined"),", which would transpile to the same thing. But comparing to undefined is more correct, since that is how you would write normal TypeScript code.)"),Object(o.b)("br",null))}p.isMDXComponent=!0}}]);