---
title: Features
hide_table_of_contents: true
---

They say that every programming language has some pros and some cons. However, after 4 years of programming mods in Lua for <em>The Binding of Isaac</em>, I have not found very many pros. It is incredibly easy to shoot yourself in the foot after making even the smallest typo. And it doesn't have any of the tooling that we take for granted when programming in any other modern language.

But we don't have to suffer anymore. The `isaacscript` framework allows us to program Isaac mods in TypeScript. And once you start, you will never go back. Here's a short list of features:

### <img src="/img/items/magic_mushroom.png" className="features-icon" /> The Entire Isaac API, Strongly Typed

- Code fearlessly without having to worry about making a typo or having to look at the docs.

### <img src="/img/items/marked.png" className="features-icon" /> Mouseover Documentation

- Mouseover API calls to see what they do and what parameters they expect.
- Hopefully, you will never have to open the Isaac documentation ever again. Good riddance.

### <img src="/img/items/dead_eye.png" className="features-icon" /> Better API Accuracy

- The Isaac documentation is wrong in a lot of places. Some functions are not implemented and some functions make the game crash.
- Don't bother waiting for a patch - the `isaacscript` framework fixes everything for you.

### <img src="/img/items/clockwork_assembly.png" className="features-icon" /> Automatic Mod Reloading

- Never close and reopen your game again when working on your mods.
- Never type the `luamod` console command again.
- If you use `include()` to get around bugs with `luamod` and `require()`, don't bother - that isn't needed here.

### <img src="/img/items/humbling_bundle.png" className="features-icon" /> Extra Enums

- Seamlessly utilize [community-contributed enums](https://github.com/IsaacScript/isaac-typescript-definitions/blob/main/typings/enums.unofficial.d.ts) for things that the developers forgot to include in the "enums.lua" file.

### <img src="/img/items/pencil.png" className="features-icon" /> Automatic Formatting

- Never waste time formatting a file again. Automatic file formatting with [Prettier](https://prettier.io/) comes running out-of-the-box.

### <img src="/img/items/spider_mod.png" className="features-icon" /> Automatic Linting

- Squash all the bugs and ensure code consistency with the world's best linter, [ESLint](https://eslint.org/). It comes running out-of-the-box.

### <img src="/img/items/bffs.png" className="features-icon" /> TypeScript

Enjoy all the benefits of a strongly typed language over the shit-show that is Lua:

- Never make a typo on a variable name again. Or a function name. Or an import. You get the point.
- Split code up into separate files without risking something breaking when you rename something.
- Your editor shows you the **exact** variables and functions that you can use.
- Tab-complete **everything** you type, making programming a breeze.
- Use the <code>Ctrl + .</code> hotkey to automatically import whatever the cursor is over. No more manually typing "require()" over and over.
- Use the <code>F12</code> hotkey (for "Go to Definition") to automatically jump around in your code. After using this hotkey for a while, it becomes invaluable!
- Use the <code>Shift + Alt + F12</code> hotkey (for "Find All References") to automatically find all places where a function is used. This makes refactoring easy as pie.
- And more!

<br />

There are plenty of reasons to use IsaacScript, but it isn't for everyone. Read on.
