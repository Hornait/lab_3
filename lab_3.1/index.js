const arr = [];
const height = prompt("Введіть висоту масива");
const length = prompt("Введіть довжину масива");

for (let i = 0; i < height; i++) {
  arr.push([]);
  for (let j = 0; j < length; j++) {
    arr[i][j] = +prompt(
      `Введіть елемент ${i + 1}-го рядка та ${j + 1}-го стовпця`
    );
  }
}

console.log(arr);

for (let i = 0; i < height; i++) {
  let sum = 0;
  for (let j = 0; j < length; j++) {
    sum += arr[i][j];
  }
  console.log(`Сума ${i + 1}-го рядка: ${sum}`);
}

for (let i = 0; i < length; i++) {
  let sum = 0;
  for (let j = 0; j < height; j++) {
    sum += arr[j][i];
  }
  console.log(`Сума ${i + 1}-го стовпця: ${sum}`);
}
