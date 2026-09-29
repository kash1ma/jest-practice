import { divideAsync } from "./divideAsync.js";

// Задание 1: протестируйте асинхронную функцию через async/await и resolves/rejects.
// Не забудьте await перед expect(...).resolves / .rejects!

describe("divideAsync", () => {
  test("делит два числа (resolves / await)", async () => {
    const result = await divideAsync(10, 2);
    expect(result).toBe(5);
  });

  test("деление на ноль → промис отклоняется (rejects)", async () => {
    await expect(divideAsync(10, 0)).rejects.toThrow(
      "Деление на ноль невозможно",
    );
  });
});
