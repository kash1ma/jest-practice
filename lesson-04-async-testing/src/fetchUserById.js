// Задание 2 к Лекции 4. Спецификация — в README.md этой папки.

// «База» пользователей — данные уже готовы, менять не нужно.
const USERS = [
  { id: 1, name: "Аня" },
  { id: 2, name: "Борис" },
];

export async function fetchUserById(id) {
  const user = USERS.find((user) => user.id === id);
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  return user;
}
