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
// const names = ["emir","oğuzhan","levent","tarik"]
// console.log(names);
// console.log(names.length);//(names dizisinin length propertisine erişiyoruz.
// console.log(typeof names);
// const emptArray = []
// console.log(emptArray);

//2. yöntem (object COnstructor)
// const codingLangs = new Array("c", "c++")
// console.log(codingLangs);

// const numbers1 =new Array(10)
// console.log(numbers1);

//diziden veri okuma-yazma (indisleme)
//diziden veri okuma
// const names1 = ["emir", "oğuzhan", "levent", "tarik","sabata","mehtap","rose"];
// console.log(names[1]);
// const tarik = names[3]
// console.log(tarik);

// const lastEl = names1[5]
// console.log(lastEl);

//diziye veri yazma
// names1[2] = "Levent"
// names1[2] = names1[2].toUpperCase()//assigning yapıldığında etki eder.
// console.log(names1);

//diziler farklı veri tiplerini bir arada saklayabilir

// const ageArr = [22,44,55]
// const people = ["john", "varmont", new Date().getFullYear()-1990,true,ageArr]
// console.log(people);

// console.log(people[4]);

// console.log(++people[4][1]);
// console.log(people);
// console.log(ageArr);

// //diziyi degistiren metotlar
// const cars= ["bmw","mercedes","fiat","anadol"]
// console.log(cars.pop());

// console.log("len:",cars.push("lexus"));
// console.log(cars);

// cars.unshift("toog")
// console.log(cars);

// console.log(cars.shift());
// console.log(cars);

// cars.splice(1,0,"vw")
// console.log(cars);

// cars.splice(3,1,"maseratti")
// console.log(cars);

// //dizinin tamamını ters çevirme
// cars.reverse()
// console.log(cars);

//*DİZİ ERİŞİM METODLARI

const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3];

// console.log(numbers.includes(4));
// console.log(numbers.includes("4"));

// console.log(numbers.indexOf(3));
// console.log(numbers.lastIndexOf(3));
// console.log(numbers.lastIndexOf(7));

// const strNumbers = numbers.join("-");
// console.log(strNumbers);

let data = [3, 1, 5, 7, 8, 910, 22, 3];

// data = data.sort((a, b) => b - a).join("~~ ");
// console.log(data);

console.log(numbers.toString());

const cars = ["BMW", "mercedes", "fiat", "anadol"];
console.log(cars.slice(2, 3));
console.log(cars.slice(2));

const newCars = cars.slice(3, 4);
console.log(newCars, cars);

const message = ["The weather", "is", "very", "nice"];
const now = [new Date().toLocaleString()];

const concattedMsg = message.concat(now);
console.log(concattedMsg);
