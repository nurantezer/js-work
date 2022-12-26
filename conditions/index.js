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

// //!"\r\n" Bu ifade benim alt satıra geçmemi sağlıyor.bunu bir değişkene atıyarak tekrar tekrar getirmeyi sağlayacağım.

// let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
// const yeniSatir = "\r\n" ;

// const yakitMetni = "1-Dizel"+yeniSatir
// +"2-Benzin"+yeniSatir
// +"3-LPG"+yeniSatir
// +"Yakit türünü seçiniz;";

// let YakitTipi = prompt(yakitMetni);
// if (YakitTipi == "1" || YakitTipi == "2" || YakitTipi == "3") {
//   let yakitLitresi = +prompt("Yakit litresini giriniz");
//   let bakiye = +prompt("Bakiyenizi giriniz");
//   //!string değerler gireceğim için biri tırnak içine aldım.
//   if (YakitTipi == "1") {
//     let odenecekTutar = dizel * yakitLitresi;
//     if (odenecekTutar < bakiye) {
//       bakiye = bakiye - odenecekTutar;
//       alert(
//         "Yakit alma işlemi başarili" + yeniSatir + "Kalan bakiye:" + bakiye
//       );
//     } else {
//       alert(
//         "Bakiyeniz yeterli değildir." +
//           yeniSatir +
//           "Ödenecek tutar:" +
//           odenecekTutar +
//           yeniSatir +
//           "Bakiye:" +
//           bakiye +
//           yeniSatir +
//           "Eksik Tutar:" +
//           (odenecekTutar - bakiye)
//       );
//     }
//   } else if (YakitTipi == "2") {
//   } else if (YakitTipi == "3") {
//   }
//   //burası tabiki dışarıda kalacak
// } else {
//   alert("Lütfen geçerli bir yakit türü seçiniz");
// }
//                  //!Switch-Case
// let sayi= prompt("Lütfen 1 ile 5 arasında bir sayi giriniz:");

// switch (sayi) {
//     case "1":
//         console.log("Girilen sayi 1'dir");
//         break;
//     case "2":
//         console.log("Girilen sayi 2'dir");
            // break;
//     case "3":
//         console.log("Girilen sayi 3'tür");
//     case "4":
//         console.log("Girilen sayi 4'tür");
//     case "5":
//         console.log("Girilen sayİ 5'tir");    
//     default:
//         console.log("Girilen sayi 1 ile 5 arasında olmalidir");
//         break;
// }
 /*
 1-Bakiye görüntüleme
 2-Para çekme
 3-Para yatırma
 4-Çıkış*/

// let yeniSatir= "\r\n";
// let bakiye = 1000;
// let metin = "1-Bakiye Görüntüleme"+yeniSatir+"2-Para Çekme"+yeniSatir+"3-Para Yatırma"+yeniSatir+"4-Çıkış"+yeniSatir+"Lütfen bir değer seçiniz"

// let secim = prompt(metin);
// switch (secim) {
//     case "1":
//         alert("Bakiyeniz:" + bakiye);
//         break;
//     case "2":
//         let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
//         if(cekilecekTutar<bakiye){
//             bakiye = bakiye-cekilecekTutar;
//             alert("Kalan bakiye:" +bakiye);
//         }else{
//             alert("Bakiyenizden fazla para çekemezsiniz!"+yeniSatir+"Bakiyeniz :"+bakiye + " " + "Cekilecek Tutar:" + cekilecekTutar);
//         }
//     break;
//     case "3":
//     let yatirilacakTutar = Number(prompt("Yatirilacak tutari giriniz:"));
//     bakiye = bakiye + yatirilacakTutar;
//     alert("Güncel bakiyeniz:" + bakiye);
//     break;
//     case "4":
//         console.log("Sistemnden cikis yapilmisitir");
//     break;
//     default:
//         console.log("Lütfen 1-4 arasinda değer giriniz");
//         break;
// }

/* SORULAR
1-Türkçe 40 -4 puan
2-Matematik 40
3-Sosyal Bilgiler20
4-Fen Bilimleri20
100 puanı ösym veriyor.
okul puanı nax 60 veriyor
*/
// let turkceDogru , turkceYanlis = 0;
// let matematikDogru , matematikYanlis = 0;
// let sosyalDogru , sosyalYanlis = 0;
// let fenDogru , fenYanlis = 0;
// let puan = 0
// let okulPuani = 0

// let yeniSatir = "\r\n";
// let mesaj = "Tyt Puan Hesaplama uygulamasina hosgeldiniz"+yeniSatir+"1-Puan hesapla"+yeniSatir+"2-Cikis yap";
// //  alert(mesaj);
// let secim =prompt(mesaj);
// switch (secim) {
//     case "1":
//         okulPuani = Number(prompt("Okul puaninizi giriniz:"));
//         turkceDogru =Number(prompt("Türkce dogru sayisini"));
//         turkceYalnis= Number(prompt("Turkce yalnis sayısı"));

//         matematikDogru =Number(prompt("Matematik dogru sayisini"));
//         matematikYalnis= Number(prompt("Matematik yalnis sayısı"));

//         sosyalDogru =Number(prompt("Sosyal dogru sayisini"));
//         sosyalYalnis= Number(prompt("Sosyal yalnis sayısı"));

//         fenDogru =Number(prompt("Fen dogru sayisini"));
//         fenYalnis= Number(prompt("Fen yalnis sayısı"));

//         let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
//         let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
//         let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
//         puan = (kalanDogruSayisi*4) + 100 + okulPuani;
//         alert("TYT Puaniniz:" + puan);
//         break;
//         case "2":
//             alert("Uygulamadan cikis yapildi");
//         break;
//         alert("Lütfen gecerli aralikta deger giriniz!")
//     default:
//         break;
// }

                //for//
//1 den 10 a kadar yazdıralım//
// for(let i=1 ; i<=10 ; i++){
//     console.log(i);
// }

//1 den 10 a kadar ciftleri yazdıralım
// for(let i=0 ; i<=10 ; i=i+2){
//     console.log(i);
// }

//1 den 10 a kadar tekleri yazdıralım
// for(let i=1 ; i<=10 ; i+=2){
//     console.log(i);
// }

// for(let i=1; i<=10 ; i++){
//     if(i%2==1){
//         console.log("Nuran");
//     }else{
//         console.log("Naber");
//     }
// }

//50den 1e kadar gidelim ve toplamlarını bulalım
// let toplam = 0;
// for(let i=50 ; i>=1 ; i--){
//     toplam+=i;
//     console.log(i);
// }
// console.log(`Toplam: ${toplam}`);
                 
                  //while
// let sayac = 1;
// while(sayac <=10){
//     console.log(sayac);
//     sayac++;
// }

// let sayac = 0;
// while(sayac <= 10){
//     if(sayac%2 == 0){
//         console.log(sayac);
//     }
//     sayac++;
// }

// let sayac = 1;
// while (true) {
//     console.log(sayac);
//     if(sayac == 7){
//         break;
//     }
    
//     sayac++;
    
// }

               //do While
// let sayac = 1;
// do{
// console.log(sayac);
// sayac++;
// }while(sayac <= 10);

// let yas = 23
// do{
// console.log("Ehliyet alabilirsiniz");

// }while(yas >= 25);
// // //!koşul dogru olmasada bir kere çalıştırdı.O yüzden kullanım yerini mantıklı tain etmek lazım

// let sayac = 1;
// let toplam = 0;
// do{
// if(sayac%2 == 1){
//     toplam+=sayac;
// }
// sayac++;
// }while(sayac<=20)
// console.log(`toplam: ${toplam}`);
