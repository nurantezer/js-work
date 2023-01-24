// const newUl = document.querySelector("ul");//*oluşturduğum liyi ulye bağlamak için seçtim
// const newLi = document.createElement("li");
// newLi.setAttribute("id", "steve");
// newLi.setAttribute("class", "mentor");
// const text = document.createTextNode("clarusway");
// newLi.appendChild(text) //*yazdığım textnode bağladım içeriğin konumunu belirledim
// newUl.appendChild(newLi);//*sonuna ekledim
// newUl.prepend(newLi);//*başına ekledim
//*create nodenin mantığında yeni bir ürün geldi bunu htmle eklemek olmaz.Ya innertext diyeceğim ya da create node
//*yapacağım

console.log(newLi);

console.log("**** CREATE NODE ****")

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p")
const text = document.createTextNode("Bu bir p elementidir.")//*yeni bir çocuk doğdu ama kayıtlı değil
newPar.appendChild(text)//*çocuğu kaydettim
console.log(newPar)

const h2 = document.querySelector(".item-list h2")
h2.after(newPar)//*create elementim htmldeki yerini tain ettim
// h2.before(newPar)

//?INPUT value
const myInput = document.getElementById("input") //? element
console.log(myInput.value) //? degerini alir.
//? id ,class

newPar.id = "par"
newPar.className = "center red" //*ekledim nodeye classta verebilirm ıd de

//? setAttribute
newPar.setAttribute("id", "para") //? alternative  diğer yol 1 pek tercih edilmiyor. id de sıkıntı yokta bazen class
//?verilirken sıkıntı olabilir.

//? classList diğer yol classlist bir alt metot içerisinde add,contains,enteries,foreach, item, keys,length,remove var
newPar.classList.add("bg-tomato", "left", "blue")  
newPar.classList.remove("left") //? left classi silindi. 

if (!newPar.classList.contains("blue")) {
  newPar.classList.add("blue");
} else {
  newPar.classList.add("orange");
}
//*classListi contains(içeriyor mu) blue yu

//? toggle
newPar.classList.toggle("white") //? white class'i yoksa ekler. Veya varsa kaldirir.toggle terslemek demek 

//? getAttribute()okuma işlemi yapar
console.log(newPar.getAttribute("class"))
console.log(newPar.getAttribute("id"))
console.log(newPar.getAttribute("name")) //?null
console.log(myInput.getAttribute("name")) //? languages
console.log(myInput.getAttribute("type")) //? text

//? alternative diğer okuma yöntemi
console.log(myInput.id)
console.log(newPar.className)

//? INNER HTML (Ciddi Guvenlik aciklari var)
const newDiv = document.createElement("div")
newDiv.id = "new-div"
document.getElementById("btn").after(newDiv)
newDiv.innerHTML += `<li id="go" class="red">Go</li>`

