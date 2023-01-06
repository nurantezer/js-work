// const islemler = [-3000, 4500, -2200, -6000, 9000];

// const islemlerToplami = () => {
//     let yatirma = 0
//     cekme = 0;
//     for ( let i =0; i < islemler.length; i++){
//         if (islemler[i] >= 0){
//             yatirma += islemler[i];
//         }else{
//             cekme += islemler[i];
//         }
//     }
//     return `Toplam yatirma: ${yatirma}, Toplam cekme: ${-cekme}`
// }
// console.log(islemlerToplami());

// //* FOR-IN LOOP
// //* sORU: ögrenciler dizisinde ögrenci isimleri saklanmaktadir.
// //*ögrencileri aramamamizi saglayacak ve aranılan ögrenciden
// //*ne kadar sayida bulundugunu ana programa döndürecek bir
// //*fonksiyonu yazınız. Eger aranılan isimde bir ögrenci yok ise
// //*fonksiyon aranılan ögrenci bulunamadı döndürmelidir.

// const ögrenciler = ['ahmet', 'mehmet', 'ismet', 'saffet', 'ahmet', 'nur', 'can', 'nur', 'mehmet', 'cem'];

// const ogrenciBul = function (isim){
//     let sayac = 0;
//     for (let i in ögrenciler){
//         if (ögrenciler[i] === isim){
//             sayac++;
//         }
//     }

//     if (sayac === 0){
//         return `${isim} bulunamadi`;
//     }else{
//         return `${isim}, ${sayac} adet bulundu`;
//     }
// }

// let ogrIsim = prompt(`Ogrenci adini giriniz:`).toLocaleLowerCase();
// console.log(ogrenciBul(ogrIsim));

// //*FOR -OF LOOP
// //*For of döngüsü, for in döngüsünün bir çok veri yapısını kapsayacak
// //*sekilde güncellenmiş halidir. Bu döngüde dizi içerisindeki veriye
// //*erişirken indisleme kullanmaya gerek yoktur.

// const ogrenciBulForOf = function(isim){
//     let sayac = 0;
//     for (let ögrenci of ögrenciler){
//         ögrenci === isim ? sayac++ : null //!Ternary
//         //!Short-circuit yöntemi : && => koşul doğru ise ifadeyi çalıştır.
//         // ögrenci === isim && sayac++
//         //!Short-circuit yöntemi: || => koşul yalnış ise ifadeyi çalıştır.
//         // ögrenci === isim || sayac --;
//     }
//     return !sayac ? `${isim} bulunamdi` : `${isim}, ${sayac} adet bulundu`
//     // return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadı`;

// }

// let ogrName = prompt(`Ogrenci adini giriniz:`).toLocaleLowerCase();
// console.log(ogrenciBulForOr(ogrName));

//  //*ITERATİON

//  //*dizideki her bir fiyati konsola bastiriniz

//  const fiyatlar = [100, 250, 50, 89];

//  fiyatlar.forEach(yazdir);

//  function yazdir(v){
//     console.log(v);
//  }

//  console.log(`*********************`);

//  //! Arrow function kullanılarak çözüm
//   fiyatlar.forEach((value) => console.log((value));

//   //*Fiyatlar dizisindekilerin toplamını konsola yazdırınnız

//   let toplam = 0;
//   fiyatlar.forEach((fiyat) => (toplam += fiyat));
//   console.log(`Toplam:`, toplam);

//   //!Not: forEch metodu void bir metottur.
//   //! (Yani herhangi bir değer döndürmez.)
//   console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat)));//!undefined

//   let toplam1 = 0;
//   fiyatlar.forEach((deger, indis, dizi) => {
//     toplam1 += deger;
//     console.log(`${indis}.iterasyon taplami:${toplam1}`);
//     dizi[indis] = deger +10;
//   })
//   console.log(fiyatlar);

//   //*MAP METHOD

//   //*ÖRNEK: İsimler disinin içerisindeki her ismi büyük harf olarak yeni bir diziye saklayalım

//   const isimler = ["Ahmet", "mehmet", "ismet", "SAFFET", "Can", "Canan", "Cavidan",]

//   console.log(isimler);
//   console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

//   const kucukIsimler = isimler.map((isim) => isim.toLowerCase());
//   console.log(kucukIsimler);

//   //*Örnek

//   const buyukIsimler = isimler.map((isim, i, dizi) => {
//     dizi[i] = isim.toLocaleUpperCase();//! orjinal diziyi değiştirdik.
//     return isim.toLocaleUpperCase();
//   })
//   console.log(buyukIsimler);

//*FOREACH METODU

//*Dizideki her bir fiyatı konsola bastırınız

const prices = [100, 200, 50, 89];

for (let price of prices) {
  console.log(price);
}

//*Prices dizisindekileri toplamını konsola yazdırınız

let sum = 0;
prices.forEach((price) => (sum += price));

console.log("sum:", sum);

//!forech metodu void metotttur. (herhangibir değer döndürmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined

//*prices dizisindeki her bir ara toplam değerini konsola bastırınız.
//*Ayrıca her bir fiyata %10 zam yapınız

let total = 0;
prices.forEach((p, i, arr) => {
  total += p;
  console.log(`${i + 1}.iteration: ${total}`);
  arr[i] = Math.trunc(p * 1.1);
});
console.log(prices);
