// Задание 1 к Лекции 4. Спецификация — в README.md этой папки.
export async function divideAsync(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно");
  }

  return a / b;
}
