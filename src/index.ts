import { addTask, completeTask, deleteTask, getTasks } from "./tasks.js";
import { addUser, getUsers } from "./users.js";

async function main(): Promise<void> {
  try {
    const user = await addUser("Alex");
    const task = await addTask("Set up the project", user.id);

    console.log("Users:", await getUsers());
    console.log("Tasks:", await getTasks());
    console.log("Completed task:", await completeTask(task.id));
    console.log("Deleted task:", await deleteTask(task.id));
    console.log("Remaining tasks:", await getTasks());
  } catch (error: unknown) {
    console.error("Task manager operation failed:", error);
    process.exitCode = 1;
  }
}

await main();
