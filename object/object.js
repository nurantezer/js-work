// const car = new Object();
// car.brand = "volvo";
// car.model = 1990;
// car.color = "egean blue";

// const car2 = new Object();
// car2.brand = "bmw";
// car2.model = 2023;
// car2.color = "red";

// console.log(car);
// console.log(car.model);
// console.log(car["color"]);

// function Personel(id, ad, maas) {
//   this.tc = id;
//   this.name = ad;
//   this.salary = maas;
// }

// const p1 = new Personel("126565", "Selim", 40000);
// console.log(p1);
// const p2 = new Personel("2344567890", "Levent", 40000);
// console.log(p2);
// const p3 = new Personel("2344567894", "Murat");
// console.log(p3);

// console.log(this);
// console.log(window.Personel);

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  languages: ["C++", "Go", "Java", "Javascript"],
  salary: 10000,
};
console.log(worker);

worker.age += 1;

worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
console.log(upperCaseLangs);
