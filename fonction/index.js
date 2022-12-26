// function printHello() {
//     console.log("hello");
// }
// printHello() 

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName}`);
// }
// greet("nuran",'tezer')
// greet("erhan" , "tezer")

// const name = prompt("your name");
// const surname = prompt("your surname")
// greet (name, surname);
// //!burda const ile atama yapmadım. Value name , surname parametresine geçirdim.Js de fonksiyonlar parametreler degiskenleri degil onların degerlerini aktarır. Bunun adı "past by value."
// // ?function greet(firstName, lastName="")
// // ?bir parametreyi çagirma sirasinda kullanmaz isek onun yerine default parametre atayabiliriz. Örnekteki lastName parametresi için default değer olarak ""atanmıştır

// function calculate(name , yob) {
//     const age = new Date().getFullYear() - yob
//     console.log(`${name}'s age is ${age}`);
// }
// calculate("elif", 2000)
                   //!return
// function calculate(name, yob) {
//     const age = new Date().getFullYear() - yob
//     return `${name}'s age is ${age}`
// }
// const elif = calculate("elif",2000)
// console.log(elif);
// console.log(calculate("Rose",1990));

function oddOrEven(num) {
    return num % 2 ? "ODD" : "EVEN"
}
const number = +prompt("please enter a number to check odd or even:");
const oddEven = oddOrEven(number)
console.log(`${number} is ${oddEven}`);