console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("header h1");
const langInput = document.getElementById("input");
let newList = null;
const buton = document.getElementById("btn");

const ul = document.createElement("ul");
buton.after(ul);

h1.onmouseover = function () {
  h1.style.color = "red";
};

h1.onmouseout = () => {
  h1.style.color = "black";
};

const print = () => {
  document.write("PRINT");
};

// document.getElementById("btn").onclick = () => {
//   alert("Btn clicked")
// }

buton.addEventListener("click", () => {
  console.log(langInput.value)
  !langInput.value
    ? alert("Please enter a langugage") //*boş li olmasını engelledim
    : (ul.innerHTML += `<li>${langInput.value}</li>`)
  langInput.value = "" //*her yazdığımdan sonra inputu boşaltaak
  langInput.focus() //*her enterimdan sonra input gene aktif olacak
})
//*burada butonun valusuna işem yapıyorum.Boşşsa alert verecek yoksa eklediğim değerleri-$- gösterecek

langInput.addEventListener("keydown", (event) => {
  //   console.log(event)
  //   if (event.keyCode === 13) {
  //     buton.click()
  //   }

  if (event.code === "Enter") {
    buton.click();
  }
});
//*keydown entere basıldığı anda ekler. Keyup ise entere basılıp çekildiğinde ekler.Buradaki event neyin tetilendiği
//*gösteriyor.mesela d,a, enter gibi 

window.onload = print();

window.addEventListener("load", () => {
  langInput.focus();
});

