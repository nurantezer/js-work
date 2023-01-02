//dizi tanımlama
//1.yöntem (array Literal) tercih edilen yöntem
const isimler = ["ahmet","mehmet","ismet","saffet"]
console.log(isimler);
console.log(isimler.length);

//2.yöntem (object constructor=>yapıcı fonksiyon)
const diller = new Array("Pyhton","java","c++","js","go")
console.log(diller);

const arabalar = ["mercedes", "tofaş", "anadol","ferarari"]
console.log(arabalar[0]);
const arabam = arabalar[arabalar.length-1]
console.log(arabam);

arabalar[0] = "doğan slx"
arabalar[3] = "toros"
console.log(arabalar);

const öğrenciBilgileri = ['ahmet', 'çalı',2021-1990,arabalar]
console.log(öğrenciBilgileri);

//diziyi değiştiren metodlar
const meyveler = ["elma","armut", "muz", "kivi"]
meyveler.pop();
meyveler.push('ananas')
meyveler.shift('çilek')
console.log(meyveler);

//dizi erişim metodları
