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
