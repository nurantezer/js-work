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

//*FOR IN LOOP

//*SORU: student dizisinde ögrenci isimleri saklanmaktadır. Ögrencileri
//*aramamızı sağlayacak ve aranılan öğrenciden ne kadar sayıda bulunduğunu
//*ana programa döndürecek bir fonksiyonu yazınız. Eger aranılan isimde
//*bir öğrenci yok ise fonsksiyon "ogrenci bulunamadı" döndürmelidir.

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudent = (name) => {
  let counter = 0;
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }

  if (counter === 0) {
    return `${name} can not be found`;
  } else {
    return `${name} found ${counter} times`;
  }
};

console.log(findStudent("MehMet"));
console.log(findStudent("ismet"));
console.log(findStudent("feyza"));

//*  FOR OF

//*for of döngüsü, for in döngüsünün bir çok veri yapısını kapsayacak sekilde güncellenmiş halidir. Bu döngüde dizi içerisindeki veriye erişirken indisleme kullanmaya gerek yoktur.

const findStudentForOf = (name) => {
  let counter = 0;
  for (let student of students) {
    student === name.toLowerCase() && counter++;
  }
  return !counter
    ? `${name} can not be found`
    : `${name} found ${counter} times`;
};

console.log(findStudentForOf("Mehmet"));
