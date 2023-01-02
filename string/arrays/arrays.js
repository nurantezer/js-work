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


