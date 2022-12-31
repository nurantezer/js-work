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

