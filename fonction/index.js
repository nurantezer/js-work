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

// function oddOrEven(num) {
//     return num % 2 ? "ODD" : "EVEN"
// }
// const number = +prompt("please enter a number to check odd or even:");
// const oddEven = oddOrEven(number)
// console.log(`${number} is ${oddEven}`);

// const printHello = function (){
//     console.log("Hello");
// }
// printHello() //!invoke, call

// let oddOrEven = function(num){
//     return num % 2 === 0 ? "EVEN" : "ODD"
// }
// console.log(oddOrEven(5));

// const findBiggest = function (n1, n2, n3){
//     let biggest =n1
//     if(n2 >= biggest){
//         biggest = n2
//     }
    
//     if(n3 >= biggest){
//         biggest = n3
//     }
//     return biggest
// }
// console.log(`The Biggest:${findBiggest(2,1,4)}`);

// //!iç içe (nested) fonksiyon örnek olarak yaptık
// //!Örnek3: Bir fonksiyon içerisinde baska fonksiyonlar cagrılabilir
// const add =function (n1,n2){
//     return n1 + n2
// }
// const sub = function(n1,n2){
//     return n1 - n2
// }
// const div = function (n1,n2){
//     return n1 / n2
// }
// const mul = function (n1,n2){
//     return n1 * n2
// }

// //?bunu başkabir fonksiyonda çağırıyorum
//  const compute = function (n1, n2, op) {
//    let result = 0;
//    switch (op) {
//      case "+":
//        result = add(n1, n2);
//        break;
//      case "-":
//        result = sub(n1, n2);
//        break;
//      case "/":
//        result = div(n1, n2);
//        break;
//      case "*":
//        result = mul(n1, n2);
//        break;
//      default:
//        break;
//    }
//    return result;
//  };

//  console.log(compute(4, 3, "/"));
//  console.log(compute(2, 4, "*"));
//  console.log(compute(3, 1, "+"));

let sayac = 1
while (sayac<=10) {
  console.log(sayac);
  if(sayac==8){
    break;
  }
  sayac++
}
