let nextTaskId = 1;
const tasks = [];

export function addTask(title, assignedTo = null) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("Task title must be a non-empty string.");
  }

  const task = {
    id: nextTaskId++,
    title: title.trim(),
    completed: false,
    assignedTo,
  };
  tasks.push(task);
  return task;
}

export function getTasks() {
  return tasks.map((task) => ({ ...task }));
}

export function completeTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return null;
  task.completed = true;
  return { ...task };
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
