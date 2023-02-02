let sayi = 123456; //*değişken adları rakam ile başlamaz.
let $sayi = 123456; //* $ veya _  ile ya da harfle başlayabilir
let _sayi = 123456;

console.error("Yanlış işlem");
console.warn("Şifre keşke daha uzun olsaydı");
// console.clear();        //*console daki herşeyi temizler

console.table({ ad: "Sezer", soyad: "Ökmen", yas: 30 });

console.time("id"); //*time ve timeEnd arasında ne kadar sürede çalıştırılmasının bittiğini verir.
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.log("Steve");
console.timeEnd("id");

//* Aritmetik Operatörler   + - * / %

let sayi1 = 10;
let sayi2 = 2;

let sonuc = sayi1 + sayi2;

sonuc = sayi1 - sayi2;
sonuc = sayi1 * sayi2;
sonuc = sayi1 / sayi2;
sonuc = sayi1 % sayi2;

let isim = "Sezer";
let soyIsim = "Ökmen";
let tamIsim = isim + soyIsim; //* + işareti stringlerde kelimeleri birleştir demektir
console.log(tamIsim);

let sayi3 = 20;
console.log(sayi3++); //* ++ ları sağ tarafına koyduğum için alt satıra geçince değer artacaktır
console.log(sayi3);
console.log(++sayi3); //* ++ ları sol tarafına koyduğum için bu satırda değer artmıştır
console.log(sayi3);

console.log(sayi1 > sayi2);
console.log(sayi1 < sayi2);
console.log(sayi1 <= sayi2);
console.log(sayi1 >= sayi2);
console.log(sayi1 != sayi2);
console.log(sayi1 == sayi2);

let yas = 30;
let stringYas = "30";
console.log(yas == stringYas);
console.log(yas === stringYas);
console.log(yas !== stringYas);

//* --Promptan aldığımız veriler stringdir.Number a çevirmemiz gerekli
//* let sayi = +prompt("Lütfen bir sayı giriniz");
//* let sayi = Number(prompt("Lütfen bir sayı giriniz"));
//* console.log(typeof sayi, sayi)

//* --Verinin tipini öğrenmek istiyorsak
console.log(typeof 5);
console.log(typeof "Steve");
console.log(typeof true);

//* --Verinin true ya da false olduğunu öğrenmek istiyorsak
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(null));

//* --Math objects
console.log(Math.PI); // 3.14...
console.log(Math.round(9.81)); // 10
console.log(Math.floor(9.81)); // 9
console.log(Math.ceil(12.01)); // 13
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20
const randNum = Math.random(); //* creates random number between 0 to 0.999999
console.log(randNum);
const num = Math.floor(Math.random() * 11); //* creates random number between 0 and 10
console.log(num);
//*Absolute value
console.log(Math.abs(-10)); //10
//*Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); //1.4142135623730951
//* Power
console.log(Math.pow(3, 2)); // 9
console.log(Math.E); // 2.718
//* Logarithm
//*Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046
//* Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));
console.log(Math.cos(0));
console.log(Math.cos(60));

//* 0. indexin yeni değeri 111 olsun
let nums = [1, 2, 3];
nums[0] = 111;
console.log(nums); // [111, 2, 3]

//* non-primitive data types --sebebini bilmiyorum
let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3];
console.log(nums1 == nums2); // false

//* primitive data types
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false

//* string concatination
let firstName = "Steve";
let lastName = "Mentor";
console.log(firstName + " " + lastName);
console.log(`${firstName}        ${lastName}`);


//* && : false arar bulamazsa son bulduğu true değeri alır
console.log(1 && 5 && "sezer" && 0 && null && 2);

//* || : true arar bulamazsa en sondaki falseyi alır çıkar
console.log(0 || null || undefined || false || 12);

function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}
// selamla("Can", "Yilmaz");
// selamla("Canan", "Ozturk");
// selamla("Ayse");
// selamla("John");

//*arrow functionlar return kullanmadan tek satırda yazılabilir
const selamla2 = (ad, soyAd = "") => console.log(`Merhaba ${ad} ${soyAd}`);
selamla2("Ahmet", "Kara");

let lion = {
  category: "carnivore",
  region: "south afrika",
  "lion-baby": "cub",
};
// console.log(lion.category); //* carnivore  // dot notation
// console.log(lion.lion-baby); //* error: ReferenceError: baby is not defined
// console.log(lion['lion-baby']); //* "cub"    // bracket notation burası önemli json yapısında bunu kullanmalıyız

//* Object destructuring
const Susan = {
  firstName1: "Susan",
  lastName1: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};
//* destructuring ile kolay bir şekilde yeni değişkenler oluşturabiliriz
const {
  firstName1,
  age,
  hobbies: { hobby1, hobby2 },
} = Susan;
console.log(firstName, age, hobby1, hobby2); //"Susan" 14 "singing"

//* Spread Operator
//* dizi veya objelerin elemanlarını ayrıştırarak başka dizi veya obje içine kopyalamayı sağlar
let pets = ["cat", "dog", "rabbits"];
let carnivorous = ["lion", "wolf", "leopard", "tiger"];
let animals = [...pets, ...carnivorous];
console.log(animals); //["cat", "dog" , "rabbits","lion", "wolf", "leopard", "tiger"]

let name = { firstName: "John", lastName: "Doe" };
let hobbies = { hobby1: "singing", hobby2: "dancing" };
let myInfo = { ...name, ...hobbies };
console.log(myInfo); //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}
