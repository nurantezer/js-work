const sayilar = [1,50,2,41,41,84,8,35,3];

const isimler = ['sezer','ali','hasan','ayse'];

const ogrenciler = [
    {id: 12, isim : 'sezer', yas : 30},
    {id: 22, isim : 'hasan', yas : 15},
    {id: 32, isim : 'fatma', yas : 55},
    {id: 13, isim : 'nuriye', yas : 19},
    {id: 92, isim : 'kemal', yas : 45},
    {id: 15, isim : 'mustafa', yas : 75},
    {id: 44, isim : 'ceren', yas : 30},
];
const a = sayilar.shift(); //*ilk elamanı siler -1-
console.log(a);
console.log(sayilar);
sayilar.unshift(100);//*ilk elamana ekler -100-

sayilar.pop();//*son elamanı siler
sayilar.push(200);//*sonuna elaman ekler

sayilar.slice(1, 5);//* dilimliyor yeni array getiriyor.Diziyi değiştirmedi,kopyasını oluşturdu

sayilar.splice(2, 4); //*2. ,ndexten itibaren 4 elamanı sil dedim.Diziyi değiştirdi
sayilar.splice(2,0,1111,2222) //*2.indexi silme bunları ekle
sayilar.splice(2,1,1111,2222)//*2. indexi sil bunları ekle
sayilar.splice(2,3,1111,2222)

const b = ogrenciler.find((item) => console.log(item))

const c = ogrenciler.find((kisi) => kisi.id ===92)
console.log(c);

const d = ogrenciler.find((kisi) => kisi.yas ===30);//*find metodu ilk bulduğu elemanı döndürür
//*ararken case sensetive duyarlı isimlerde mesela

const e = isimler.includes("sezer")//*içeriyor mu

const f = sayilar.forEach(function(sayi){
    console.log(sayi*2);
})
//*forEach ile dolanıyorum. Dolanırken ne yapacağımı function ile söylüyorum.Bu bana dizi vermediiii

const g = ogrenciler.filter((item) => item.id % 2 == 0);
console.log(g);

const h = sayilar.concat(isimler);
// const h = sayilar.concat("noah",isimler, 20000,"ayşe",[1,2,3]);bunları da ekler
console.log(h);

const z = sayilar.map((x) => x + 10);
console.log(z); //*Bu bana array verdi

const y = Array.from("Sezer")
console.log(y);//*stringden arraya çevirdi.Ayırdı

const v = sayilar.sort() //değer girmedim ya sayıların ilk rakamlarına göre hareket etti yani aski olarak 35,41,8 gibi
console.log(v);
const k = sayilar.sort((a,b) => a-b);
console.log(k);
// const k = sayilar.sort((a,b) => a-b).reverse();
// console.log(k); reverse de bura da ters çevirdi

const m = sayilar.reduce((a,b) => a+b);
console.log(m); //*toplama yapuyoruz maaşlar mesela
const p = ogrenciler.map((item) => item.yas).sort((x, y) => x - y);
console.log(a); //*anla burayı
