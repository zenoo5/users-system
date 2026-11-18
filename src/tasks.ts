import type { Task } from "./types.js";
import { userExists } from "./users.js";

let nextTaskId = 1;
const tasks: Task[] = [];

export async function addTask(
  title: string,
  assignedTo: number | null = null,
): Promise<Task> {
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("Task title must be a non-empty string.");
  }
  if (assignedTo !== null && !(await userExists(assignedTo))) {
    throw new RangeError(`User ${assignedTo} does not exist.`);
  }

  const task: Task = {
    id: nextTaskId++,
    title: title.trim(),
    completed: false,
    assignedTo,
  };
  tasks.push(task);
  return { ...task };
}

export async function getTasks(): Promise<Task[]> {
  return tasks.map((task) => ({ ...task }));
}

export async function completeTask(id: number): Promise<Task> {
  const task = tasks.find((item) => item.id === id);
  if (!task) throw new RangeError(`Task ${id} does not exist.`);
  task.completed = true;
  return { ...task };
}

export async function deleteTask(id: number): Promise<boolean> {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
