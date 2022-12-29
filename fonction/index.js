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

// //!break tamamen kırar
// let sayac = 1
// while (sayac<=10) {
//   console.log(sayac);
//   if(sayac==8){
//     break;
//   }
//   sayac++
// }

// //!continue sayıyı kırıp geri kalanını yazdırı.
// let sayac = 0
// while (sayac<=10) {
//   sayac++
//   if(sayac>10){
//     break;
//   }
//   if(sayac==8){
//     continue;
//   }
//   console.log(sayac);
// }
//                     //!asal sayı
// let sayi = Number(prompt("lütfen bir sayı giriniz"))

// let sonuc = true
// for(let i=2; i<=Math.floor(sayi/2); i++){
//   if(sayi%i==0){
//   sonuc = false;
//   break;
//   }
// }
// if(sonuc){
//   alert(`${sayi} asaldır`)
// }else{
//   alert(`${sayi} asal değildir`)
// }

// let sayi = Number(prompt("Bir sayi giriniz"));
// let carpım =1;

// for(let i=1; i<=sayi; i++){
//   carpım*=i
// }
// console.log(`carpim: ${carpım}`);

// //!153 sayısı armstrong 153= 1*1*1+3*3*3*+5*5*5

// let sayi = prompt("sayı giriniz");
// let toplam = 0
// for(let i = 0; i<sayi.length; i++){
//   let rakam = sayi.charAt(i);
//   toplam+=rakam*rakam*rakam;
// }

// if(sayi==toplam){
//   alert("Armstrong sayısıdır");
// }else{
//   alert("Armstrong sauısı değildir");
// }

//!Parametresiz ve geriye değer döndürmeyen metor tanımlamak

// function yazdir(){
//   console.log("nuran");
// }
// yazdir();

// function topla(){
//   console.log(5+7);
// }
// topla();

// //!Parametreli method tanımlamak
// function yazdir(isim,soyisim) {
//   console.log(`${isim} ${soyisim}`);
// }
// yazdir("nuran", "tezer")
// yazdir("ali" ,"yılmaz")

// function cube(sayi) {
//   console.log(sayi*sayi*sayi);
// }
// cube(5);
// cube(3);

// let yas = Number(prompt("yasinizi giriniz"));
// function kontrolEt(yas) {
//   if(yas>18){
//     console.log("ehliyet alabilirsiniz");
//   }else{
//     console.log("ehliyet alamazsınız");
//   }
// }
// kontrolEt(yas);

let donenDeger = cube(3);
console.log(donenDeger);
kareAl(donenDeger)

function kareAl(sayi) {
  let sonuc = sayi*sayi;
  console.log(sonuc);
}

function cube(sayi) {
  let sonuc = sayi*sayi*sayi;
  return sonuc;
}