import { fetchUserById } from "./fetchUserById.js";

// Задание 2: протестируйте успех (resolves.toEqual) и отклонение (rejects.toThrow).
// Для страховки от забытого await можно добавить expect.assertions(1).

describe("fetchUserById", () => {
  test("возвращает пользователя по id (resolves.toEqual)", async () => {
    const user = await fetchUserById(1);
    expect(user).toEqual({ id: 1, name: "Аня" });
  });

  test("несуществующий id → (rejects.toThrow)", async () => {
    await expect(fetchUserById(999)).rejects.toThrow("Пользователь не найден");
  });
});
