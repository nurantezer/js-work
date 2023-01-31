//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

class Book {                              //*class ES6dan geldi
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getTitle = function () {
    //   return this.title;
    // };
  }

  //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
}

//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

console.log(book1);

//? Sub-Class tanimlamasi (Inheritance)
class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Book'un constructor'i cagrildi new dediğimde consctur çağırılıyor
    super(title, author, year); //! Book'un prototpye kopyalnmis oldu
    this.month = month;
  }
}

const mag1 = new Magazine("Kasagi", "Omer Seyfettin", 1940, "Nov");
console.log(mag1);
console.log(mag1.getSummary());

//*Motoru çizip üretiyoruz oopnin mantığı bu
//*Polimorfizimde anneden gelen özellik mesela iyi yemek yapmak çocuğa gemiş am annede olmayan tatlı,pasta özelliği 
//*eklenebiliyor bu mantık var
