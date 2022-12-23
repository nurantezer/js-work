// console.log("hello");
// console.log(window);
// let isim = "nuran"
// console.log(typeof isim);

// let func = function(){
//     console.log("merhaba");
// }
// func(); //fonksiyonu çağırmak için bunu yapmam lazım
// console.log(typeof func);

// let a = 5;
// let b = 10;

// sonuc = a + b
// console.log(sonuc);

// console.log(5**3);

// let sayi = 11
// // sayi *= 2
// // sayi%=5
// // sayi-=3
// // sayi+=10
// // sayi/=2
// sayi**=3

// console.log(sayi);

// let yas = 20;
// let para = 3500;
// let saglikliMi = true;

// console.log(yas > 18 && para >3000 && saglikliMi === true);

// console.log(5!=3);
//  let isim = prompt("İsminizi Giriniz:")
//  console.log(isim);
//  confirm("Silmek istediğinize emin misiniz?")
//  let sonuc = confirm("Silmek istediğinize emin misiniz?");
//  console.log(sonuc);

//  let not = 51 ;
 
//  if(not>50){
//     console.log(`${not} geçtiniz`);
//  }

// let yas = Number(prompt("yaşınızı giriniz:"))
// let para = Number(prompt("Bütçeniz:"))

// if(yas >= 18 && para >= 3500 ){
//     alert("Ehliyet alabilirsiniz")
// }else{
//     alert("ehliyet alamazsınız")
    
// }

// let vize1 = Number(prompt("vize1 girin:"))
// let vize2 = Number(prompt("vize2 girin:"))
// let final = Number(prompt("final girin:"))

// let ortalama = vize1*0.3 + vize2*0.3 + final*0.4

// if(ortalama>=60){
//     alert(`geçtiniz" , ${ortalama}`)
// }else{
//     console.log(`kaldınız" , ${Math.floor(ortalama)}`);
// }

// let secilenYol = prompt("lütfen bir yol seçiniz")

// if(secilenYol == 1){
//     console.log(`${secilenYol}. yolu seçtiniz`);
// }else if(secilenYol == 2){
//     console.log(`${secilenYol}. yolu seçtiniz`);
// }else{
//     alert("Lütfen geçerli bir yol seçiniz")
// }

 
//  length verilen numaranın adedini kontrol eder.
// let ad = prompt("isminizi giriniz");
// let tckn = prompt("TCKN giriniz");

// kontrolEt(ad,tckn);

// function kontrolEt(ad , tckn) {
//     if(ad!=""){
//         if(tckn.length == 11){
//             console.log("isim ve tckn problemsiz girildi");
//         }else{
//             console.log("lütfen tcnizi 11 karakter olarak giriniz");
//         }
//     }else{
//         console.log("lütfen isim alanını boş bırakmayınız");
//     }
// }




//  !if içinde if örneği

//  let ad = prompt("isminizi giriniz");
//  let tckn = prompt("TCKN giriniz");

//  kontrolEt2(ad, tckn);

//  function kontrolEt2(ad, tckn) {
//     if(ad==""){
//         console.log("lütfen isim alanını boş bırakmayınız");
//         return;
//     }
//     if(tckn.length!=11){
//         console.log("lütfen tcnizi 11 karakter olarak giriniz");
//         return;
//     }
//     console.log("isim ve tckn problemsiz girildi");
//  }
//  // !if else : İki seçeneğin olduğu yerlerde kullanılır.
//  //!if else if else: 2 den fazla seçeneğin olduğu yerde kullanılır
//  //!if if if

// //?Beden kitle Endeksi hesaplama
// let kilo = Number(prompt("Kilonuzu giriniz"));
// let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));
// let sonuc = kilo/(boy*2);

// if(sonuc < 18.5){
//     console.log("ideal kilonun altında")
// }else if(sonuc >= 18.5 && sonuc <= 24.9){
//     console.log("ideal kilo")
// }else if(sonuc >= 25 && sonuc <= 29.9){
//     console.log("ideal kilonun üstünde");
// }else if(sonuc >= 30 && sonuc <= 39.9){
//     console.log("ideal kilonun çok üstünde obez");
// }else if(sonuc >= 40){
//     console.log("ideal kilonun çok üsütnde morbid obez");
// }
//Benzi İstasyonu
//1-Dizel : 24.53
//2-Benzin : 22.25
//3-LPG : 11.1
//Gelen müşteriden alacağımız bilgiler;
//Yakıt tipi
//Yüklenecek yakıt litresi

//!"\r\n" Bu ifade benim alt satıra geçmemi sağlıyor.bunu bir değişkene atıyarak tekrar tekrar getirmeyi sağlayacağım.

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
const yeniSatir = "\r\n" ;

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakit türünü seçiniz;";





