# Node.js Task Manager

An in-memory task manager built with Node.js, TypeScript, and native ES modules. Its task and user operations return Promises and can be used with `async`/`await`.

## Requirements

- Node.js 20 or newer
- npm

## Install and run

```sh
npm install
npm run dev
```

Compile TypeScript to `dist/` and run the compiled app with:

```sh
npm run build
npm start
```

## Operations

- `addUser(name)` creates a user; blank names reject with a `TypeError`.
- `getUsers()` returns a copy of the users.
- `addTask(title, assignedTo?)` creates a task. Blank titles reject with a `TypeError`; assigning a task to an unknown user rejects with a `RangeError`.
- `getTasks()` returns a copy of the tasks.
- `completeTask(id)` marks a task complete and rejects with a `RangeError` if it does not exist.
- `deleteTask(id)` returns `true` when deleted and `false` when the task does not exist.

The `Task` and `User` interfaces are defined in `src/types.ts`. State is held in memory and resets when the process exits.

## Scripts

- `npm run dev` runs the TypeScript entry point with `tsx`.
- `npm run build` compiles the project.
- `npm run typecheck` checks types without emitting files.
- `npm start` runs the compiled JavaScript.

## AI use

AI assistance was used to help convert the starter JavaScript task manager to strict TypeScript ESM, implement asynchronous operations and failure handling, and update project documentation. The resulting code and commands were reviewed and verified in the repository.
