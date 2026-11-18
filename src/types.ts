export interface User {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  assignedTo: number | null;
}
