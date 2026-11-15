import { addTask, completeTask, deleteTask, getTasks } from "./tasks.js";
import { addUser, getUsers } from "./users.js";

const user = addUser("Alex");
const task = addTask("Set up the project", user.id);

console.log("Users:", getUsers());
console.log("Tasks:", getTasks());
console.log("Completed task:", completeTask(task.id));
console.log("Deleted task:", deleteTask(task.id));
console.log("Remaining tasks:", getTasks());
