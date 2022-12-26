// function printHello() {
//     console.log("hello");
// }
// printHello() 

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName}`);
}
greet("nuran",'tezer')
greet("erhan" , "tezer")

const name = prompt("your name");
const surname = prompt("your surname")
greet (name, surname);
//!burda const ile atama yapmadım. Value name , surname parametresine geçirdim.Js de fonksiyonlar parametreler degiskenleri degil onların degerlerini aktarır. Bunun adı "past by value."
// ?function greet(firstName, lastName="")
// ?bir parametreyi çagirma sirasinda kullanmaz isek onun yerine default parametre atayabiliriz. Örnekteki lastName parametresi için default değer olarak ""atanmıştır