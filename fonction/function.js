// function printHello() {
//     console.log("hello");
// }
// printHello()

// function greet(firstName, lastName) {
//     console.log(`hi, ${firstName} ${lastName}`);
// }
// greet("nuran","tezer")

// function calculate(name,yob) {
//     const age =new Date().getFullYear() - yob
//     return `${name}'s age is ${age}`
// }
// const elif = calculate("elif",2000)
// console.log(elif);
// console.log(calculate("rose",1990));

// console.log(oddOrEven(76));
// function oddOrEven(num) {
//     return num % 2 ? "odd" : "even"
// }

//  const printHello =function(){
//     console.log("hello");
//  }
//  printHello()

// let oddOrEven = function(num){
//     return num % 2 === 0 ? "even" : "odd"
// }
// console.log(oddOrEven(4));

// const findBiggest = function(n1, n2, n3 = -Number.MAX_VALUE){
//     let biggest = n1
//     if(n2 >= biggest){
//         biggest = n2
//     }
//     if(n3>= biggest){
//         biggest = n3
//     }
//     return biggest
// }
// console.log(`The Biggest:${findBiggest(-5,-8,2)}`);

// const r = +prompt("r")
// const h = +prompt("h")
//  const volume = (r, h = 1) => Math.PI*r*r*h
//  console.log(`${r},${h} = Volume: ${volume(r,h).toFixed(4)}`);

// const volumeLong = (r, h) => {
//   const result = Math.PI * r * r * h
//   console.log(result)
//      return result
//  }

//  console.log(`${r}, ${h} = Volume: ${volumeLong(r, h).toExponential(4)}`)

// const calculateAge = (year) => new Date().getFullYear() - year;
// console.log("AGE:", calculateAge(1990));

// const fibo = (n) => {
//     let fib1 = 1
//     let fib2 = 1
//     let sum = 0

//     for(let i = 2; i < n; i++){
//         sum = fib1 + fib2
//         fib1 = fib2
//         fib2 = sum
//     }
//     return fib2
// }

// const n = +prompt("Please enter n:")
// if(n <= 0){
//     console.log("n should be bigger than zero");
// }else{
//     console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// }

// //*enes hoca
// function yazdir (){
//     console.log("nuran");
// }
// yazdir()

//*parametreli metot tanımlama
// function yazdir(isim, soyisim){
//     console.log(isim + " " + soyisim);
// }
// yazdir("nuran", "tezer")
// yazdir("erhan", "tezer")

// cube(5)
// cube(3)
// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

// let yas = Number(prompt("yaşınızı giriniz"))

// kontrolEt(yas);
//  function kontrolEt(yas) {
//     if(yas > 18){
//         console.log("ehliyet alabilirsiniz");
//     }else{
//         console.log("ehliyet alamazsınız");
//     }
//  }

//*geriye değer döndüren metot tanımlamak return
//*Bir değeri metodun dışarısına cıkarmak, taşımak için kullanılır.
//*Bir metodu bitiren anahtar kelimedir

// let donenDeger = cube(2);
// kareAl(donenDeger);

// function kareAl(sayi) {
//     let sonuc = sayi*sayi;
//     console.log(sonuc);
// }

// function cube(sayi) {
//     let sonuc = sayi*sayi*sayi;
//     return sonuc
// }

let metin = "Şuanda Yalova'da JAvascript eğitimi çekmekteyim.";

let harf = prompt("harf giriniz");
let sonuc = bul(harf);
alert("Harf sayısı:" + sonuc);

function bul(harf) {
    let toplam = 0;
    for(let i = 0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    
    }
     return toplam;
}