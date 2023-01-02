// //dizi tanımlama
// //1.yöntem (array Literal) tercih edilen yöntem
// const isimler = ["ahmet","mehmet","ismet","saffet"]
// console.log(isimler);
// console.log(isimler.length);

// //2.yöntem (object constructor=>yapıcı fonksiyon)
// const diller = new Array("Pyhton","java","c++","js","go")
// console.log(diller);

// const arabalar = ["mercedes", "tofaş", "anadol","ferarari"]
// console.log(arabalar[0]);
// const arabam = arabalar[arabalar.length-1]
// console.log(arabam);

// arabalar[0] = "doğan slx"
// arabalar[3] = "toros"
// console.log(arabalar);

// const öğrenciBilgileri = ['ahmet', 'çalı',2021-1990,arabalar]
// console.log(öğrenciBilgileri);

// //diziyi değiştiren metodlar
// const meyveler = ["elma","armut", "muz", "kivi"]
// meyveler.pop();
// meyveler.push('ananas')
// meyveler.shift('çilek')
// console.log(meyveler);

// //dizi erişim metodları

//dizi tanımlama
//1.yöntem array literal-tercih edilen yöntem
const names = ["emir","oğuzhan","levent","tarik"]
console.log(names);
console.log(names.length);//(names dizisinin length propertisine erişiyoruz.
console.log(typeof names);
const emptArray = []
console.log(emptArray);

//2. yöntem (object COnstructor)
const codingLangs = new Array("c", "c++")
console.log(codingLangs);

const numbers1 =new Array(10)
console.log(numbers1);

//diziden veri okuma-yazma (indisleme)
//diziden veri okuma
const names1 = ["emir", "oğuzhan", "levent", "tarik","sabata","mehtap","rose"];
console.log(names[1]);
const tarik = names[3]
console.log(tarik);

const lastEl = names1[5]
console.log(lastEl);

//diziye veri yazma
// names1[2] = "Levent"
names1[2] = names1[2].toUpperCase()//assigning yapıldığında etki eder.
console.log(names1);

//diziler farklı veri tiplerini bir arada saklayabilir

const ageArr = [22,44,55]
const people = ["john", "varmont", new Date().getFullYear()-1990,true,ageArr]
console.log(people);

console.log(people[4]);

console.log(++people[4][1]);
console.log(people);
console.log(ageArr);

//diziyi degistiren metotlar
const cars= ["bmw","mercedes","fiat","anadol"]
console.log(cars.pop());

console.log("len:",cars.push("lexus"));
console.log(cars);

cars.unshift("toog")
console.log(cars);

console.log(cars.shift());
console.log(cars);

cars.splice(1,0,"vw")
console.log(cars);

cars.splice(3,1,"maseratti")
console.log(cars);

//dizinin tamamını ters çevirme
cars.reverse()
console.log(cars);





