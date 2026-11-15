let nextUserId = 1;
const users = [];

export function addUser(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("User name must be a non-empty string.");
  }

  const user = { id: nextUserId++, name: name.trim() };
  users.push(user);
  return user;
}

export function getUsers() {
  return users.map((user) => ({ ...user }));
}
