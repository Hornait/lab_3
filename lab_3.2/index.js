const arr = [];
let max = 0;
let index = 0;
const height = prompt("Введіть висоту масива");
const length = prompt("Введіть довжину масива");

for (let i = 0; i < height; i++) {
  arr.push([]);
  for (let j = 0; j < length; j++) {
    arr[i][j] = Math.floor(Math.random() * 91) + 10;
  }
}

console.log(arr);

for (let i = 0; i < height; i++) {
  let sum = 0;
  for (let j = 0; j < length; j++) {
    sum += arr[i][j];
    if (sum > max) {
      max = sum;
      index = i;
    }
  }
  console.log(`Сума ${i + 1}-го рядка: ${sum}`);
}
console.log(`Максимальна сума елементів ${max} в рядку ${index + 1}`);
