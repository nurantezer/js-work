const newUl = document.querySelector("ul");//*oluşturduğum liyi ulye bağlamak için seçtim
const newLi = document.createElement("li");
newLi.setAttribute("id", "steve");
newLi.setAttribute("class", "mentor");
const text = document.createTextNode("clarusway");
newLi.appendChild(text) //*yazdığım textnode bağladım içeriğin konumunu belirledim
newUl.appendChild(newLi);//*sonuna ekledim
newUl.prepend(newLi);//*başına ekledim

console.log(newLi);