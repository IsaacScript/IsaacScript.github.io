(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||b[m]||o;return n?i.a.createElement(h,r(r({ref:t},s),{},{components:n})):i.a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},532:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},533:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/green_candle-773038e3176466980936619fc81b442e.png"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(2),i=(n(0),n(169));const o={title:"Building an Example Mod"},l={unversionedId:"example-mod",id:"example-mod",isDocsHomePage:!1,title:"Building an Example Mod",description:"This is a tutorial that shows off how to code a simple mod with IsaacScript. Our goal will be to create a new passive item in the game called the Green Candle.",source:"@site/docs/example-mod.md",slug:"/example-mod",permalink:"/docs/example-mod",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/example-mod.md",version:"current",sidebar:"docs",previous:{title:"JavaScript/TypeScript Tutorial",permalink:"/docs/javascript-tutorial"},next:{title:"Refactoring an Example Mod",permalink:"/docs/refactoring-mod"}},r=[{value:"0) Unpack the Games Resources",id:"0-unpack-the-games-resources",children:[]},{value:"1) Initializing the Project",id:"1-initializing-the-project",children:[]},{value:"2) Create the Image for the Item",id:"2-create-the-image-for-the-item",children:[]},{value:"3) Create the Entry For the Item in <code>items.xml</code>",id:"3-create-the-entry-for-the-item-in-itemsxml",children:[]},{value:"4) Create the Entry for the Item in <code>itempools.xml</code>",id:"4-create-the-entry-for-the-item-in-itempoolsxml",children:[]},{value:"5) Start Coding the Effect",id:"5-start-coding-the-effect",children:[]},{value:"6) Get the ID for the Green Candle Item",id:"6-get-the-id-for-the-green-candle-item",children:[]},{value:"7) Add a New Callback",id:"7-add-a-new-callback",children:[]},{value:"8) Getting the Number of Green Candles",id:"8-getting-the-number-of-green-candles",children:[]},{value:"9) Looping Over All the Enemies in a Room",id:"9-looping-over-all-the-enemies-in-a-room",children:[]},{value:"10) Applying the Poison",id:"10-applying-the-poison",children:[]},{value:"11) Detect Invulnerable Enemies and Add a Random Chance",id:"11-detect-invulnerable-enemies-and-add-a-random-chance",children:[]},{value:"12) Done!",id:"12-done",children:[]}],c={rightToc:r};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a tutorial that shows off how to code a simple mod with IsaacScript. Our goal will be to create a new passive item in the game called the ",Object(i.b)("em",{parentName:"p"},"Green Candle"),"."),Object(i.b)("br",null),Object(i.b)("h2",{id:"0-unpack-the-games-resources"},"0) Unpack the Games Resources"),Object(i.b)("p",null,"Most modders will have already done this, but just in case you haven't, you should run the game's unpacker. This is located at ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ResourceExtractor\\ResourceExtractor.exe"),"."),Object(i.b)("p",null,"Doing this allows you to see all of the vanilla assets and how the directory structure is laid out."),Object(i.b)("br",null),Object(i.b)("h2",{id:"1-initializing-the-project"},"1) Initializing the Project"),Object(i.b)("p",null,"For this tutorial, we will be using ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Repositories\\green-candle")," as the directory for our mod."),Object(i.b)("p",null,"In a Windows command prompt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-batch"}),"mkdir C:\\Repositories\\green-candle\ncd C:\\Repositories\\green-candle\nnpx create-isaacscript-mod --use-current-dir --save-slot=1 --vscode\nnpx isaacscript\n")),Object(i.b)("p",null,"At this point, the skeleton for our mod is in place, and IsaacScript is running in the background. We can now begin working."),Object(i.b)("br",null),Object(i.b)("h2",{id:"2-create-the-image-for-the-item"},"2) Create the Image for the Item"),Object(i.b)("p",null,"First, we will set up the image for how the item will appear in-game. We'll use this image: ",Object(i.b)("img",{alt:"Green Candle",src:n(532).default})),Object(i.b)("p",null,'Most images for a mod should be placed in a "resources" subdirectory. (This corresponds to how things are organized in ',Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources"),".)"),Object(i.b)("p",null,"For our purposes, we will need to copy ",Object(i.b)("a",{target:"_blank",href:n(533).default},"the Green Candle image")," to ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Repositories\\green-candle\\mod\\resources\\gfx\\items\\collectibles\\green_candle.png"),'. (You will need to create the "resources", "gfx", "items", and "collectibles" directories, since they won\'t exist yet.)'),Object(i.b)("p",null,'Notice that this path corresponds to the "real" items graphics directory of ',Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources\\gfx\\items\\collectibles\\"),". Under the hood, the game will merge the two directories when you enable the mod."),Object(i.b)("br",null),Object(i.b)("h2",{id:"3-create-the-entry-for-the-item-in-itemsxml"},"3) Create the Entry For the Item in ",Object(i.b)("inlineCode",{parentName:"h2"},"items.xml")),Object(i.b)("p",null,'Next, we need to tell the game that the new item should exist. This is done by adding a new entry to the "items.xml" file.'),Object(i.b)("p",null,'New entries for things go in the "content" subdirectory. Make a blank file at ',Object(i.b)("inlineCode",{parentName:"p"},"C:\\Repositories\\green-candle\\mod\\content\\items.xml"),'. (You will need to create the "content" directory, since it won\'t exist yet.)'),Object(i.b)("p",null,"In this file, add the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<items gfxroot="gfx/items/" version="1">\n  <passive description="Mass poison" gfx="green_candle.png" name="Green Candle" />\n</items>\n')),Object(i.b)("p",null,"Now, the item will exist in the game, and you can give it to yourself with the console command of ",Object(i.b)("inlineCode",{parentName:"p"},"giveitem green candle"),"."),Object(i.b)("p",null,'Notice that this file is in the same format as the "real" items.xml file located at ',Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources\\items.xml"),". Under the hood, the game will merge the contents of your little items.xml file with the big items.xml file when you enable the mod."),Object(i.b)("br",null),Object(i.b)("h2",{id:"4-create-the-entry-for-the-item-in-itempoolsxml"},"4) Create the Entry for the Item in ",Object(i.b)("inlineCode",{parentName:"h2"},"itempools.xml")),Object(i.b)("p",null,"Even though the item exists in the game, it is not yet present in any of the item pools. This means that players will never randomly discover your item as they play the game."),Object(i.b)("p",null,"So, let's add the item to the ",Object(i.b)("em",{parentName:"p"},"Treasure Room")," pool. Make a blank file at ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Repositories\\green-candle\\mod\\content\\itempools.xml")," and add the following to it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<ItemPools>\n  <Pool Name="treasure">\n    <Item Name="Green Candle" Weight="1" DecreaseBy="1" RemoveOn="0.1"/>\n  </Pool>\n</ItemPools>\n')),Object(i.b)("p",null,'Here, we use values for "Weight", "DecreaseBy", and "RemoveOn" that match what is used for all of the other items in the Treasure Room pool. (You can see this if you open the "real" itempools.xml file at ',Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources\\items.xml"),".)"),Object(i.b)("p",null,"Now, the item will sometimes randomly appear for players when they enter a Treasure Room!"),Object(i.b)("br",null),Object(i.b)("h2",{id:"5-start-coding-the-effect"},"5) Start Coding the Effect"),Object(i.b)("p",null,"Right now, if players pick up your item, it won't actually do anything. This is where the Lua code comes in."),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Repositories\\green-candle\\src\\main.ts"),', which contains the TypeScript code that will be transpiled to the "main.lua" file and read by the game.'),Object(i.b)("p",null,"The bootstrapper created a skeleton of a mod for us. As you can see on line 13, it calls the ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.DebugString()")," function when the ",Object(i.b)("inlineCode",{parentName:"p"},"MC_POST_GAME_STARTED")," callback is fired."),Object(i.b)("p",null,"(",Object(i.b)("inlineCode",{parentName:"p"},"Isaac")," is a global class provided by the game with helpful methods on it. ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.DebugString()")," simply writes something to the log.txt file, which is located at ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Users\\james\\Documents\\My Games\\Binding of Isaac Repentance\\log.txt"),".)"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MC_POST_GAME_STARTED")," callback is useful for initializing things at the start of every run or making the player start with some novel ability. For our purposes, we don't need it, so we can remove lines 11 through 17."),Object(i.b)("p",null,"Besides that, we can see that the bootstrapper created an ",Object(i.b)("inlineCode",{parentName:"p"},"isaacScriptInit()")," function for us. This is good to keep at the top of our mod, because it fixes a bug in error messages."),Object(i.b)("p",null,"Let's start by fixing the capitalization on line 9:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const greenCandle = RegisterMod("Green Candle", 1);\n')),Object(i.b)("p",null,"And fixing the capitalization on line 20:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'Isaac.DebugString("The Green Candle mod is initialized.");\n')),Object(i.b)("br",null),Object(i.b)("h2",{id:"6-get-the-id-for-the-green-candle-item"},"6) Get the ID for the Green Candle Item"),Object(i.b)("p",null,'When the game loads a new item, it assigns it an item ID. These IDs start at 730 and count upwards. (729 is the item ID of the final vanilla item, "Decap Attack", so the first available ID for mods is 730.)'),Object(i.b)("p",null,"The item ID that the Green Candle gets will depend on how many other custom modded items that we have loaded. So, in order to write code for the Green Candle, we have to ask the game what the current ID is and store it for later."),Object(i.b)("p",null,"In order to do this, we need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.GetItemIdByName()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const greenCandleItemID = Isaac.GetItemIdByName("Green Candle");\n')),Object(i.b)("p",null,"Put this below the line that registers the mod."),Object(i.b)("br",null),Object(i.b)("h2",{id:"7-add-a-new-callback"},"7) Add a New Callback"),Object(i.b)("p",null,"We want the Green Candle to have a random chance to poison every enemy in the room on every frame. So, we need code to run on every frame, and that means we need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"MC_POST_UPDATE")," callback."),Object(i.b)("p",null,"Add the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'function postUpdate() {\n  Isaac.DebugString("A game frame just passed!");\n}\n\n// Register callbacks\ngreenCandle.AddCallback(ModCallbacks.MC_POST_UPDATE, postUpdate);\n')),Object(i.b)("p",null,"Now, we can run the mod and confirm that this code makes tons of messages in the log.txt file at the rate of 30 times a second."),Object(i.b)("br",null),Object(i.b)("h2",{id:"8-getting-the-number-of-green-candles"},"8) Getting the Number of Green Candles"),Object(i.b)("p",null,"Let's get rid of the ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.DebugString()")," call and set up a new function for applying the green candle effect:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function postUpdate() {\n  checkApplyGreenCandleEffect();\n}\n\nfunction checkApplyGreenCandleEffect() {\n  // TODO - Fill this in\n}\n")),Object(i.b)("p",null,"Since Isaac is a co-op game, it is possible that up to 4 players could all have the Green Candle at the same time. We want our mod to work properly in multiplayer, so we have to loop over all the players."),Object(i.b)("p",null,"To start with, we get a variable for the current game by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"Game()"),", which is a global variable provided for us, similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac")," class. Once we have the game object, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"GetNumPlayers()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function checkApplyGreenCandleEffect() {\n  const game = Game();\n  const numPlayers = game.GetNumPlayers();\n  for (let i = 1; i <= numPlayers; i++) {\n    // TODO - Check if the player has Green Candle\n  }\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.GetPlayer()")," method allows us to get a specific player object. Once we have that, we can check to see if they have the Green Candle by using the ",Object(i.b)("inlineCode",{parentName:"p"},"HasCollectible()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function checkApplyGreenCandleEffect() {\n  const game = Game();\n  const numPlayers = game.GetNumPlayers();\n  for (let i = 1; i <= numPlayers; i++) {\n    const player = Isaac.GetPlayer(i);\n    if (player !== null && player.HasCollectible(greenCandleItemID)) {\n      applyGreenCandleEffect(player)\n    }\n  }\n}\n\nfunction applyGreenCandleEffect(player: EntityPlayer) {\n  // TODO\n}\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"9-looping-over-all-the-enemies-in-a-room"},"9) Looping Over All the Enemies in a Room"),Object(i.b)("p",null,"Every enemy in the room should have a chance of being poisoned. So, we need to loop over all enemies in the room with ",Object(i.b)("inlineCode",{parentName:"p"},"Isaac.GetRoomEntities()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function applyGreenCandleEffect(player: EntityPlayer) {\n  for (const entity of Isaac.GetRoomEntities()) {\n    if (shouldApplyGreenCandleEffectToEntity(entity)) {\n      // TODO - Apply poison\n    }\n  }\n}\n\nfunction shouldApplyGreenCandleEffectToEntity(entity: Entity) {\n  // TODO - Return true or false based on a random chance\n  return true;\n}\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"10-applying-the-poison"},"10) Applying the Poison"),Object(i.b)("p",null,"Adding the poison is done with the ",Object(i.b)("inlineCode",{parentName:"p"},"AddPoison")," method. However, notice that your IDE will give you an error if you try to supply the player as the source:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function applyGreenCandleEffect(player: EntityPlayer) {\n  for (const entity of Isaac.GetRoomEntities()) {\n    if (shouldApplyGreenCandleEffectToEntity(entity)) {\n      // The source is the player\n      // The duration is 100 frames\n      // The damage is equal to the player's damage stat\n      entity.AddPoison(player, 100, player.Damage)\n      // (this shows an error in the IDE because AddPoison expects an EntityRef)\n    }\n  }\n}\n")),Object(i.b)("p",null,"TypeScript saves the day, telling us that we actually need to feed the function an entity reference. This is accomplished by simply casting the player as an ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRef"),'. (The "EntityRef()" function is a global.)'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"entity.AddPoison(EntityRef(player), 100, player.Damage)\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"11-detect-invulnerable-enemies-and-add-a-random-chance"},"11) Detect Invulnerable Enemies and Add a Random Chance"),Object(i.b)("p",null,"Now, let's fill in the ",Object(i.b)("inlineCode",{parentName:"p"},"shouldApplyGreenCandleEffectToEntity()")," function."),Object(i.b)("p",null,"First, we also need to check to see if the entity is supposed to be damaged by using the ",Object(i.b)("inlineCode",{parentName:"p"},"IsVulnerableEnemy()")," method."),Object(i.b)("p",null,"(Some enemies, like Stonies, are supposed to be invincible, so it would be a bug in our mod if the poison effect actually applied to them.)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'function shouldApplyGreenCandleEffectToEntity(entity: Entity) {\n  // "math.random(500)" generates a random number between 1 and 500\n  // This is a 1 / 500 chance, or 0.2%\n  return entity.IsVulnerableEnemy() && math.random(500) === 1;\n}\n')),Object(i.b)("p",null,"Notice here that we use Lua's ",Object(i.b)("inlineCode",{parentName:"p"},"math.random()")," function, which is available to use in TypeScript thanks to the underlying TypeScriptToLua library that is currently loaded. (If you don't like using Lua libraries for whatever reason, you could also use the equivalent JavaScript version, which is ",Object(i.b)("inlineCode",{parentName:"p"},"Math.floor(Math.random() * 10) + 1"),". It would transpile to the same thing.)"),Object(i.b)("br",null),Object(i.b)("h2",{id:"12-done"},"12) Done!"),Object(i.b)("p",null,"The mod is now complete. It looks like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// Define imports\nimport isaacScriptInit from "./isaacScriptInit";\n\n// Initialize some IsaacScript-specific functions\nisaacScriptInit();\n\n// Register the mod\n// (which will make it show up in the list of mods on the mod screen in the main menu)\nconst greenCandle = RegisterMod("greenCandle", 1);\n\n// Mod variables\nconst greenCandleItemID = Isaac.GetItemIdByName("Green Candle");\n\n// Define callback functions\nfunction postUpdate() {\n  checkApplyGreenCandleEffect();\n}\n\nfunction checkApplyGreenCandleEffect() {\n  const game = Game();\n  const numPlayers = game.GetNumPlayers();\n  for (let i = 1; i <= numPlayers; i++) {\n    const player = Isaac.GetPlayer(i);\n    if (player !== null && player.HasCollectible(greenCandleItemID)) {\n      applyGreenCandleEffect(player);\n    }\n  }\n}\n\nfunction applyGreenCandleEffect(player: EntityPlayer) {\n  for (const entity of Isaac.GetRoomEntities()) {\n    if (shouldApplyGreenCandleEffectToEntity(entity)) {\n      entity.AddPoison(EntityRef(player), 100, player.Damage);\n    }\n  }\n}\n\nfunction shouldApplyGreenCandleEffectToEntity(entity: Entity) {\n  // "math.random(500)" generates a random number between 1 and 500\n  // This is a 1 / 500 chance, or 0.2%\n  return entity.IsVulnerableEnemy() && math.random(500) === 1;\n}\n\n// Register callbacks\ngreenCandle.AddCallback(ModCallbacks.MC_POST_UPDATE, postUpdate);\n\n// Print an initialization message to the "log.txt" file\nIsaac.DebugString("The Green Candle mod is initialized.");\n')))}s.isMDXComponent=!0}}]);