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

//startWidth(), endWith()-case sensetive
const word2 = "Salına salına sinsice :!"
console.log(word2.startsWith("sa"));
console.log(word2.startsWith("sa",7));
console.log(word2.endsWith(`!`));

//replace(searchFor, replaceWith)--immutabele
//let oku = `Oku bBaban gibi ,saf olma`;
// oku = oku.replace(`saf olma`,`akıllı ol`) let ile yeniden atama yapıp değiştirebilirim.
let oku = "Oku Baban gibi, saf olma";
console.log(oku.replace("saf olma", `akıllı ol`));
oku = oku.replace(`saf olma`, `akilli ol`)
console.log(oku);

//detaylı değiştirme alternatifleri için regex kullanılabilir
console.log(oku.replace(/AKILLI/i, `Zeki`));


//slice(beginIndex[, endIndex])
//substring(beginIndex,[, endIndex])
//substr(depreaced)
//bunlarda immutable

const veysel = "Uzun ince bir yoldayım yürüyorum gündez gece..";
const sliced = veysel.slice(33)
console.log(sliced,typeof sliced);

console.log(veysel.slice(17,30));
console.log(veysel.slice(-10));// -1 den başlıyor
console.log(veysel.slice(-23, -19));
//substring negatif index kullanmaz.
console.log(veysel.substring(17,30));

//split([sep [,limit]])
const tarkan = "gel gündüzle gece olalım";
const splited = tarkan.split(` `)//boşluklara göre ayırdı ve Arraya çevirdi.
console.log(splited, typeof splited);
const gece = splited[2]//indisleme ile değer okunabilir.
console.log(gece);

const chars =tarkan.split('')
console.log(chars);// null karakterine göre harfleri ayırarak bir char dizisi oluşturdu.

const copyTarkan = tarkan.split()
console.log(copyTarkan);//string'i array haline getirdi.tek elemanlı.

//trim()
const ramazan = "       Hoş geldin ya şehri Ramazan"
console.log(ramazan.length);
console.log(ramazan.trim().length);//boşlukları kaldırdı.