//klasik yöntrm ile string tanımlanırsa bu string bir primitive değişkendir
const str1 = `clarusway`
const str2 = ` hello`
const str3 = `world`

console.log(typeof str1);
const str4 = str1+str2;
console.log(str4);

console.log(str4.concat(str3));
const str5 = new String(`Non-primitive String`)
console.log(str5, typeof str5);
//Normaşde primitive veri tiplerinin property veya metodu olmaz. Ancak javascript otomatik olark primite stringler için object wrapper oluşturur. Bu sayade, string nesnelerine ait olan fonksiyonlar veya özellikleri primitive string ile kullalınabilir hale getir. Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//concat()-immutable
const s1 = "hello"
const s2 = "world"
const s3 = s1.concat(s2)
console.log(s3);
console.log(s3.concat("clarusway", str2, "merhaba"))
console.log(s2,s3);

//charAt
console.log(s3.charAt()); //0.indexi getirdi
console.log(s3.charAt(4));
console.log(s3.charAt(s3.length - 1));//d

//includes()- case sensetive
const word = "to be or not to be, thas is the question"
console.log(word.includes("to be"));
console.log(word.includes("That"));
console.log(word.includes("")); 
console.log(word.includes(`to be`,13)); //13ten sora to be

//indexOf() lastIndexOf() -case sensetive
const tobeIndex = word.indexOf(`or`)
console.log(tobeIndex);
console.log(word.indexOf(`be`));//baş
console.log(word.lastIndexOf(`be`));//en son
console.log(word.lastIndexOf(`BE`));//-1 bulamadığı zaman döndürüyor.

