---
title: Project Directory Structure
---

When you use `isaacscript init`, it will automatically load a directory with some files for you.

**You do not need to know what all of these files are for**, so if you want to dive into coding your mod, skip reading this page.

<br />

## Directories

### `project`

This is the root directory of your project. It won't actually be called `project`; it will instead be named after your mod.

If you want to track your project in [Git](https://git-scm.com/), this directory will be the root of the Git repository. (`isaacscript` does not automatically initialize a Git repository; you have to do that on your own with `git init` or `git clone`.)

<br />

### `project/.vscode`

This directory contains some stock settings that are recommended for VSCode to work properly with IsaacScript projects.

Leave this directory in place and ignore it, unless you want to customize the settings. (If you do not use VSCode, feel free to delete this directory.)

<br />

### `project/mod`

This is the source mod directory. Any files that you put here will be automatically transferred over to the mirrored directory in `mods`.

For example,

```batch
C:\Repositories\revelations\mod\image.png
```

will be copied to:

```batch
C:\Program Files (x86)\Steam\steamapps\common\The Binding of Isaac Rebirth\mods\revelations\image.png
```

<br />

### `project/node_modules`

This directory contains the dependencies for the project. (e.g. TypeScript, TypeScriptToLua, ESLint, etc.)

Leave it in place and ignore it.

More info:

- `node_modules` is generated when you type `npm install` in a directory with a `package.json` file in it.
- `isaacscript init` automatically creates a `package.json` file for you and does an `npm install` when you start a new project.
- This directory will contain a lot of files and is usually 150+ megabytes in size.
- `node_modules` are always excluded from being tracked in a Git repository.
  - There will already be an entry for `node_modules` in the `.gitignore` file installed by `isaacscript`.

<br />

### `project/src`

This is the TypeScript source directory. All of the TypeScript files for your mod should live in here.

`isaacscript init` will automatically create a `main.ts` file for you in this directory.

<br />

## Files

### `.cspell.json`

This is the configuration file for [cspell](https://github.com/streetsidesoftware/cspell), a spell-checker for code.

If VSCode incorrectly reports that a file is misspelled, you can right-click on the word and say "Add Word to Workspace Dictionaries". The word will then be recorded in this file and the squiggly line will go away.

<br />

### `.eslintrc.js`

This is the configuration file for [ESLint](https://eslint.org/), the TypeScript linter.

Normally, you should not need to touch this file, but you can edit it if you need to disable a specific linting rule.

<br />

### `.gitattributes`

This contains specific Git attributes that should be applied to this Git repository, if present. By default, it prevent Windows systems from cloning the repository with "\r\n" line endings.

<br />

### `.gitignore`

This contains a list of files that should not be added to a Git repository, if present. If you have a private file that you don't want to be committed to a repository, you can edit this file and add it.

<br />

### `isaacscript.json`

This is the configuration file for `isaacscript`.

<br />

### `LICENCE`

This is the licence for your project. By default, `isaacscript init` installs a [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html), because all code projects should include a license in them.

Feel free to change this to something else if you don't like GPLv3.

<br />

### `package.json`

This is the configuration file for [npm](https://www.npmjs.com/), the Node package manager. It contains a description of your project and a list of all of the dependencies.

In general, you should not need to touch this file. If you decide to add a new dependency (e.g. `npm install lodash --save`), then `npm` would automatically edit the `package.json` file accordingly. (Beware of adding dependencies, since [it will break tstl](gotchas.md#npm-dependencies).)

Note that normally, a TypeScript project would have "devDependencies" of TypeScript, ESLint, and so forth. However, in the IsaacScript framework, all you have to do is depend on `isaacscript`, and `isaacscript` in turn depends on everything you need. This makes things a little bit simpler for you.

(If for whatever reason you want more granularity in your dependencies, then you can instead change your package.json file to depend on `typescript`, `typescript-to-lua`, `isaac-typescript-definitions`, and so on.)

<br />

### `package-lock.json`

This is a lock file for [npm](https://www.npmjs.com/), the Node package manager.

You are not supposed to edit this file; just leave it in place so that `npm` can function correctly.

<br />

### `README.md`

This is the README file for your project, which should contain a brief description of your mod. It uses [Markdown](https://guides.github.com/features/mastering-markdown/), which is the standard format for README files.

<br />

### `tsconfig.eslint.json` and `tsconfig.json`

These are the configuration files for the [TypeScript](https://www.typescriptlang.org/) programming language. The main one is `tsconfig.json`. `tsconfig.eslint.json` extends the main one to make ESLint work properly.

Normally, you should not need to touch these files. However, you can edit `tsconfig.json` if you need to add or remove a particular compiler flag.
