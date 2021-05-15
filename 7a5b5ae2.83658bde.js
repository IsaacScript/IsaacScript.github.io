(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,j=p["".concat(c,".").concat(u)]||p[u]||b[u]||r;return n?o.a.createElement(j,a(a({ref:t},s),{},{components:n})):o.a.createElement(j,a({ref:t},s))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var i=n(2),o=(n(0),n(169));const r={title:"Project Directory Structure"},c={unversionedId:"directory-structure",id:"directory-structure",isDocsHomePage:!1,title:"Project Directory Structure",description:"When you use the create-isaacscript-mod tool, it will automatically load a directory with some files for you.",source:"@site/docs/directory-structure.md",slug:"/directory-structure",permalink:"/docs/directory-structure",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/directory-structure.md",version:"current",sidebar:"docs",previous:{title:"What is IsaacScript Doing?",permalink:"/docs/what-is-isaacscript-doing"},next:{title:"JavaScript/TypeScript Tutorial",permalink:"/docs/javascript-tutorial"}},a=[{value:"Directories",id:"directories",children:[{value:"<code>project</code>",id:"project",children:[]},{value:"<code>project/.vscode</code>",id:"projectvscode",children:[]},{value:"<code>project/mod</code>",id:"projectmod",children:[]},{value:"<code>project/node_modules</code>",id:"projectnode_modules",children:[]},{value:"<code>project/src</code>",id:"projectsrc",children:[]}]},{value:"Files",id:"files",children:[{value:"<code>.cspell.json</code>",id:"cspelljson",children:[]},{value:"<code>.eslintrc.js</code>",id:"eslintrcjs",children:[]},{value:"<code>.gitignore</code>",id:"gitignore",children:[]},{value:"<code>isaacscript.json</code>",id:"isaacscriptjson",children:[]},{value:"<code>LICENCE</code>",id:"licence",children:[]},{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>package-lock.json</code>",id:"package-lockjson",children:[]},{value:"<code>README.md</code>",id:"readmemd",children:[]},{value:"<code>tsconfig.eslint.json</code> and <code>tsconfig.json</code>",id:"tsconfigeslintjson-and-tsconfigjson",children:[]}]}],l={rightToc:a};function s({components:e,...t}){return Object(o.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you use the ",Object(o.b)("inlineCode",{parentName:"p"},"create-isaacscript-mod")," tool, it will automatically load a directory with some files for you."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You do not need to know what all of these files are for"),", so if you want to dive into coding your mod, skip reading this page."),Object(o.b)("br",null),Object(o.b)("h2",{id:"directories"},"Directories"),Object(o.b)("h3",{id:"project"},Object(o.b)("inlineCode",{parentName:"h3"},"project")),Object(o.b)("p",null,"This is the root directory of your project. It won't actually be called ",Object(o.b)("inlineCode",{parentName:"p"},"project"),"; it will instead be named after your mod."),Object(o.b)("p",null,"If you want to track your project in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git"),", this directory will be the root of the Git repository. (",Object(o.b)("inlineCode",{parentName:"p"},"isaacscript")," does not automatically initialize a Git repository; you have to do that on your own with ",Object(o.b)("inlineCode",{parentName:"p"},"git init")," or ",Object(o.b)("inlineCode",{parentName:"p"},"git clone"),".)"),Object(o.b)("br",null),Object(o.b)("h3",{id:"projectvscode"},Object(o.b)("inlineCode",{parentName:"h3"},"project/.vscode")),Object(o.b)("p",null,"This directory contains some stock settings that are recommended for VSCode to work properly with IsaacScript projects."),Object(o.b)("p",null,"Leave this directory in place and ignore it, unless you want to customize the settings. (If you do not use VSCode, feel free to delete this directory.)"),Object(o.b)("br",null),Object(o.b)("h3",{id:"projectmod"},Object(o.b)("inlineCode",{parentName:"h3"},"project/mod")),Object(o.b)("p",null,"This is the source mod directory. Any files that you put here will be automatically transferred over to the mirrored directory in ",Object(o.b)("inlineCode",{parentName:"p"},"mods"),"."),Object(o.b)("p",null,"For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-batch"}),"C:\\Repositories\\revelations\\mod\\image.png\n")),Object(o.b)("p",null,"will be copied to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-batch"}),"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\image.png\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"projectnode_modules"},Object(o.b)("inlineCode",{parentName:"h3"},"project/node_modules")),Object(o.b)("p",null,"This directory contains the dependencies for the project. (e.g. TypeScript, TypeScriptToLua, ESLint, etc.)"),Object(o.b)("p",null,"Leave it in place and ignore it."),Object(o.b)("p",null,"More info:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," is generated when you type ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")," in a directory with a ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file in it."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create-isaacscript-mod")," automatically creates a ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file for you and does an ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")," when you start a new project."),Object(o.b)("li",{parentName:"ul"},"This directory will contain a lot of files and is usually 150+ megabytes in size."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," are always excluded from being tracked in a Git repository.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"There will already be an entry for ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," in the ",Object(o.b)("inlineCode",{parentName:"li"},".gitignore")," file installed by ",Object(o.b)("inlineCode",{parentName:"li"},"isaacscript"),".")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"projectsrc"},Object(o.b)("inlineCode",{parentName:"h3"},"project/src")),Object(o.b)("p",null,"This is the TypeScript source directory. All of the TypeScript files for your mod should live in here."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"create-isaacscript-mod")," will automatically create a ",Object(o.b)("inlineCode",{parentName:"p"},"main.ts")," file for you in this directory."),Object(o.b)("br",null),Object(o.b)("h2",{id:"files"},"Files"),Object(o.b)("h3",{id:"cspelljson"},Object(o.b)("inlineCode",{parentName:"h3"},".cspell.json")),Object(o.b)("p",null,"This is the configuration file for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/streetsidesoftware/cspell"}),"cspell"),", a spell-checker for code."),Object(o.b)("p",null,'If VSCode incorrectly reports that a file is misspelled, you can right-click on the word and say "Add Word to Workspace Dictionaries". The word will then be recorded in this file and the squiggly line will go away.'),Object(o.b)("br",null),Object(o.b)("h3",{id:"eslintrcjs"},Object(o.b)("inlineCode",{parentName:"h3"},".eslintrc.js")),Object(o.b)("p",null,"This is the configuration file for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint"),", the TypeScript linter."),Object(o.b)("p",null,"Normally, you should not need to touch this file, but you can edit it if you need to disable a specific linting rule."),Object(o.b)("br",null),Object(o.b)("h3",{id:"gitignore"},Object(o.b)("inlineCode",{parentName:"h3"},".gitignore")),Object(o.b)("p",null,"This contains a list of files that should not be added to a Git repository, if present. If you have a private file that you don't want to be committed to a repository, you can edit this file and add it."),Object(o.b)("br",null),Object(o.b)("h3",{id:"isaacscriptjson"},Object(o.b)("inlineCode",{parentName:"h3"},"isaacscript.json")),Object(o.b)("p",null,"This is the configuration file for ",Object(o.b)("inlineCode",{parentName:"p"},"isaacscript"),"."),Object(o.b)("br",null),Object(o.b)("h3",{id:"licence"},Object(o.b)("inlineCode",{parentName:"h3"},"LICENCE")),Object(o.b)("p",null,"This is the licence for your project. By default, ",Object(o.b)("inlineCode",{parentName:"p"},"create-isaacscript-mod")," installs a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"}),"GNU General Public License v3"),", because all code projects should include a license in them."),Object(o.b)("p",null,"Feel free to change this to something else if you don't like GPLv3."),Object(o.b)("br",null),Object(o.b)("h3",{id:"packagejson"},Object(o.b)("inlineCode",{parentName:"h3"},"package.json")),Object(o.b)("p",null,"This is the configuration file for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),", the Node package manager. It contains a description of your project and a list of all of the dependencies."),Object(o.b)("p",null,"In general, you should not need to touch this file. If you decide to add a new dependency (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"npm install lodash --save"),"), then ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," would automatically edit the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file accordingly. (Beware of adding dependencies, since ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/gotchas#npm-dependencies"}),'it will break any TSTL build that uses "luaBundle"'),".)"),Object(o.b)("p",null,'Note that normally, a TypeScript project would have "devDependencies" of TypeScript, ESLint, and so forth. However, in the IsaacScript framework, all you have to do is depend on ',Object(o.b)("inlineCode",{parentName:"p"},"isaacscript"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"isaacscript")," in turn depends on everything you need. This makes things a little bit simpler for you, the end-user."),Object(o.b)("br",null),Object(o.b)("h3",{id:"package-lockjson"},Object(o.b)("inlineCode",{parentName:"h3"},"package-lock.json")),Object(o.b)("p",null,"This is a lock file for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),", the Node package manager."),Object(o.b)("p",null,"You are not supposed to edit this file; just leave it in place so that ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," can function correctly."),Object(o.b)("br",null),Object(o.b)("h3",{id:"readmemd"},Object(o.b)("inlineCode",{parentName:"h3"},"README.md")),Object(o.b)("p",null,"This is the README file for your project, which should contain a brief description of your mod. It uses ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://guides.github.com/features/mastering-markdown/"}),"Markdown"),", which is the standard format for README files."),Object(o.b)("br",null),Object(o.b)("h3",{id:"tsconfigeslintjson-and-tsconfigjson"},Object(o.b)("inlineCode",{parentName:"h3"},"tsconfig.eslint.json")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"tsconfig.json")),Object(o.b)("p",null,"These are the configuration files for the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," programming language. The main one is ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.eslint.json")," extends the main one to make ESLint work properly."),Object(o.b)("p",null,"Normally, you should not need to touch these files. However, you can edit ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," if you need to add or remove a particular compiler flag."))}s.isMDXComponent=!0}}]);