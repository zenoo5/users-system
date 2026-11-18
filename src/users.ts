import type { User } from "./types.js";

let nextUserId = 1;
const users: User[] = [];

export async function addUser(name: string): Promise<User> {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("User name must be a non-empty string.");
  }

  const user: User = { id: nextUserId++, name: name.trim() };
  users.push(user);
  return { ...user };
}

export async function getUsers(): Promise<User[]> {
  return users.map((user) => ({ ...user }));
}

export async function userExists(id: number): Promise<boolean> {
  return users.some((user) => user.id === id);
}
