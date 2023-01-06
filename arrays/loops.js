//*FOOR LOOP

//*grades'in ortalamasını hesaplayınız
const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

console.log((sum / grades.length).toFixed(2));

//*arr dizisindeki negatif ve pozitif sayıları 2 ayrı diziye kaydediniz
const arr = [-5, 15, 22, -4, 45, 78];

let negatives = [];
let positives = [];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}
console.log(negatives);
console.log(positives);
