# Node.js Task Manager

A small in-memory task manager built with Node.js ES modules. Tasks and users are kept in separate modules.

## Run

```sh
npm start
```

## Task operations

- `addTask(title, assignedTo?)` creates and returns a task.
- `getTasks()` returns a copy of all tasks.
- `completeTask(id)` marks a task complete and returns it, or `null` if it does not exist.
- `deleteTask(id)` removes a task and returns whether it existed.

## User operations

- `addUser(name)` creates and returns a user.
- `getUsers()` returns a copy of all users.

Data is stored in memory and resets when the program exits.
