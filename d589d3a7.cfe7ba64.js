(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(173));const i={title:"Getting Started"},o={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"isaacscript is currently only supported on Windows.",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Is IsaacScript Right for Me?",permalink:"/docs/right-for-me"},next:{title:"What is IsaacScript Doing?",permalink:"/docs/what-is-isaacscript-doing"}},c=[{value:"Instructions for Beginners",id:"instructions-for-beginners",children:[{value:"1) Open a Command Prompt",id:"1-open-a-command-prompt",children:[]},{value:"2) Install Chocolatey",id:"2-install-chocolatey",children:[]},{value:"3) Install Node.js",id:"3-install-nodejs",children:[]},{value:"4) Install Git",id:"4-install-git",children:[]},{value:"5) Install VSCode",id:"5-install-vscode",children:[]},{value:"6) Open a New Shell",id:"6-open-a-new-shell",children:[]},{value:"7) Create and Navigate to Your Project Directory",id:"7-create-and-navigate-to-your-project-directory",children:[]},{value:"8) Initialize a New Project With <code>create-isaacscript-mod</code>",id:"8-initialize-a-new-project-with-create-isaacscript-mod",children:[]},{value:"9) Open VSCode",id:"9-open-vscode",children:[]},{value:"10) Run <code>isaacscript</code>",id:"10-run-isaacscript",children:[]},{value:"11) Start Coding",id:"11-start-coding",children:[]}]},{value:"Instructions for Experts",id:"instructions-for-experts",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," is currently only supported on Windows."),Object(r.b)("p",null,"Choose one:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#instructions-for-beginners"}),"Instructions for Beginners")," (detailed)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#instructions-for-experts"}),"Instructions for Experts")," (summary)")),Object(r.b)("br",null),Object(r.b)("h2",{id:"instructions-for-beginners"},"Instructions for Beginners"),Object(r.b)("h3",{id:"1-open-a-command-prompt"},"1) Open a Command Prompt"),Object(r.b)("p",null,"Open a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/"}),"Command Prompt as an administrator"),"."),Object(r.b)("br",null),Object(r.b)("h3",{id:"2-install-chocolatey"},"2) Install Chocolatey"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://chocolatey.org/install"}),"Chocolatey")," is a package manager for Windows. If you don't have it installed already, install it by pasting in the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),'@"%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\\chocolatey\\bin"\n')),Object(r.b)("p",null,"(Installing Chocolatey is optional, but it makes everything easier. It is the defacto way to automatically install programs, so everyone should probably have Chocolatey installed on their computer.)"),Object(r.b)("br",null),Object(r.b)("h3",{id:"3-install-nodejs"},"3) Install Node.js"),Object(r.b)("p",null,"In order to program in TypeScript, we need ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js"),", a JavaScript runtime. If you don't have it installed already, install it by pasting in the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"cinst nodejs -y\n")),Object(r.b)("p",null,"(This is short form of ",Object(r.b)("inlineCode",{parentName:"p"},"choco install nodejs -y"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"-y"),' flag automatically answers "yes" to the "Are you sure" message.)'),Object(r.b)("br",null),Object(r.b)("h3",{id:"4-install-git"},"4) Install Git"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git")," is version-control software that lets you easily push your code to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/"}),"GitHub"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://about.gitlab.com/"}),"GitLab"),", and more. Handily, it also comes with a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"}),"Bash shell")," for Windows users."),Object(r.b)("p",null,"If you don't have it installed already, install it by pasting in the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"cinst git -y\n")),Object(r.b)("p",null,"(This is short form of ",Object(r.b)("inlineCode",{parentName:"p"},"choco install git -y"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"-y"),' flag automatically answers "yes" to the "Are you sure" message.)'),Object(r.b)("br",null),Object(r.b)("h3",{id:"5-install-vscode"},"5) Install VSCode"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," (or VSCode, for short) is the best editor for TypeScript. If you don't have it installed already, install it by pasting in the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"cinst vscode -y\n")),Object(r.b)("p",null,"(This is short form of ",Object(r.b)("inlineCode",{parentName:"p"},"choco install vscode -y"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"-y"),' flag automatically answers "yes" to the "Are you sure" message.)'),Object(r.b)("p",null,"VSCode is the recommended editor to use in conjunction with ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript"),", but feel free to use something else (like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jetbrains.com/webstorm/"}),"WebStorm"),") if you want."),Object(r.b)("br",null),Object(r.b)("h3",{id:"6-open-a-new-shell"},"6) Open a New Shell"),Object(r.b)("p",null,"Close the administrative shell and start either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a normal (non-administrative) Windows Command Prompt"),Object(r.b)("li",{parentName:"ul"},"a Git Bash shell (via ",Object(r.b)("inlineCode",{parentName:"li"},"Start")," --\x3e ",Object(r.b)("inlineCode",{parentName:"li"},"Git Bash"),")")),Object(r.b)("p",null,"Either one is fine, depending on what you like better."),Object(r.b)("p",null,"(Git Bash is similar to a Windows Command Prompt. For example, you can move to a different directory with ",Object(r.b)("inlineCode",{parentName:"p"},"cd [directory-name]"),", go back with ",Object(r.b)("inlineCode",{parentName:"p"},"cd .."),", and so forth. Git Bash also includes a lot of helpful Linux tools.)"),Object(r.b)("br",null),Object(r.b)("h3",{id:"7-create-and-navigate-to-your-project-directory"},"7) Create and Navigate to Your Project Directory"),Object(r.b)("p",null,"Make a new directory for your new mod / project. And then navigate to it."),Object(r.b)("p",null,"For example, in a Windows Command Prompt:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"mkdir C:\\Repositories\\revelations\ncd C:\\Repositories\\revelations\n")),Object(r.b)("p",null,"Note that your project directory should ",Object(r.b)("strong",{parentName:"p"},"not")," be a subdirectory of the ",Object(r.b)("inlineCode",{parentName:"p"},"Binding of Isaac Afterbirth+ Mods")," directory! This is because ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," will synchronize / clone your mod there automatically."),Object(r.b)("br",null),Object(r.b)("h3",{id:"8-initialize-a-new-project-with-create-isaacscript-mod"},"8) Initialize a New Project With ",Object(r.b)("inlineCode",{parentName:"h3"},"create-isaacscript-mod")),Object(r.b)("p",null,"Once you are inside your project directory, you can initialize the project with the ",Object(r.b)("inlineCode",{parentName:"p"},"create-isaacscript-mod")," helper program:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-isaacscript-mod\n")),Object(r.b)("p",null,"(This command downloads and executes the NPM package of ",Object(r.b)("inlineCode",{parentName:"p"},"create-isaacscript-mod"),".)"),Object(r.b)("p",null,"This program will ask you some questions and then populate your new directory with TypeScript and some other files that you will need."),Object(r.b)("br",null),Object(r.b)("h3",{id:"9-open-vscode"},"9) Open VSCode"),Object(r.b)("p",null,"If you don't have VSCode open already, then launch it from the start menu."),Object(r.b)("p",null,"Once open, select ",Object(r.b)("inlineCode",{parentName:"p"},"File")," --\x3e ",Object(r.b)("inlineCode",{parentName:"p"},"Open Folder"),", and open your project directory."),Object(r.b)("p",null,"Finally, start by opening up the main file for your project, which is located at ",Object(r.b)("inlineCode",{parentName:"p"},"src/main.ts"),"."),Object(r.b)("br",null),Object(r.b)("h3",{id:"10-run-isaacscript"},"10) Run ",Object(r.b)("inlineCode",{parentName:"h3"},"isaacscript")),Object(r.b)("p",null,"Start ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," in your project directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx isaacscript\n")),Object(r.b)("p",null,"The program will run forever, monitoring for changes in your project. (If you want to cancel it, you can press ",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl + C")," to return to your shell.)"),Object(r.b)("br",null),Object(r.b)("h3",{id:"11-start-coding"},"11) Start Coding"),Object(r.b)("p",null,"That's it! Now, start coding by editing the ",Object(r.b)("inlineCode",{parentName:"p"},"src/main.ts")," file."),Object(r.b)("br",null),Object(r.b)("h2",{id:"instructions-for-experts"},"Instructions for Experts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),"."),Object(r.b)("li",{parentName:"ul"},"Create a directory for your new mod project."),Object(r.b)("li",{parentName:"ul"},"In a shell, navigate to the directory."),Object(r.b)("li",{parentName:"ul"},"Invoke the helper program to bootstrap the installation of TypeScript, the Isaac API definitions, and so forth:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npx create-isaacscript-mod")))),Object(r.b)("li",{parentName:"ul"},"Invoke ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript"),", which will run forever, monitoring for changes in your project:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npx isaacscript")))),Object(r.b)("li",{parentName:"ul"},"Start coding by editing the ",Object(r.b)("inlineCode",{parentName:"li"},"src/main.ts")," file.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"I recommend using ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," as the text editor / IDE to write TypeScript with.")))),Object(r.b)("p",null,"See the next page for a short demonstration of what the IsaacScript program is doing in the background."))}s.isMDXComponent=!0}}]);