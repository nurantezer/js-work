const islemler = [-3000, 4500, -2200, -6000, 9000];

const islemlerToplami = () => {
    let yatirma = 0
    cekme = 0;
    for ( let i =0; i < islemler.length; i++){
        if (islemler[i] >= 0){
            yatirma += islemler[i];
        }else{
            cekme += islemler[i];
        }
    }
    return `Toplam yatirma: ${yatirma}, Toplam cekme: ${-cekme}`
}
console.log(islemlerToplami());

//* FOR-IN LOOP
//* sORU: ögrenciler dizisinde ögrenci isimleri saklanmaktadir.
//*ögrencileri aramamamizi saglayacak ve aranılan ögrenciden 
//*ne kadar sayida bulundugunu ana programa döndürecek bir
//*fonksiyonu yazınız. Eger aranılan isimde bir ögrenci yok ise 
//*fonksiyon aranılan ögrenci bulunamadı döndürmelidir.

const ögrenciler = ['ahmet', 'mehmet', 'ismet', 'saffet', 'ahmet', 'nur', 'can', 'nur', 'mehmet', 'cem'];

const ogrenciBul = function (isim){
    let sayac = 0;
    for (let i in ögrenciler){
        if (ögrenciler[i] === isim){
            sayac++;
        }
    }
    
    if (sayac === 0){
        return `${isim} bulunamadi`;
    }else{
        return `${isim}, ${sayac} adet bulundu`;
    }
}

let ogrIsim = prompt(`Ogrenci adini giriniz:`).toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));

//*FOR -OF LOOP
//*For of döngüsü, for in döngüsünün bir çok veri yapısını kapsayacak
//*sekilde güncellenmiş halidir. Bu döngüde dizi içerisindeki veriye 
//*erişirken indisleme kullanmaya gerek yoktur.

const ogrenciBulForOf = function(isim){
    let sayac = 0;
    for (let ögrenci of ögrenciler){
        ögrenci === isim ? sayac++ : null //!Ternary
        //!Short-circuit yöntemi : && => koşul doğru ise ifadeyi çalıştır.
        // ögrenci === isim && sayac++
        //!Short-circuit yöntemi: || => koşul yalnış ise ifadeyi çalıştır.
        // ögrenci === isim || sayac --;  
    }
    return !sayac ? `${isim} bulunamdi` : `${isim}, ${sayac} adet bulundu`
    // return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadı`;

}

let ogrName = prompt(`Ogrenci adini giriniz:`).toLocaleLowerCase();
console.log(ogrenciBulForOr(ogrName));