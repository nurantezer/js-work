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

// const worker = {
//   name: "Can",
//   surname: "Canan",
//   age: 33,
//   languages: ["C++", "Go", "Java", "Javascript"],
//   salary: 10000,
// };
// console.log(worker);

// worker.age += 1;

// worker["languages"].forEach((lang) => console.log(lang));

// const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
// console.log(upperCaseLangs);

// worker.nationality = "T.C";
// console.log(worker);

// const person = worker;
// person.dob = 2000;
// console.log({ worker });
// console.log({ person });

// let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

//*Object Metotları

// const personel = {
//   name: "can",
//   surname: "canan",
//   dob: "1990",
//   salary: 10000,
//   job: "developer",
//   drivingLicence: false,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.dob;
//   },
//   summary: function () {
//     return `${this.name} is ${this.calculateAge()} years old.`;
//   },
// };
// console.log(personel.dob);
// console.log("age:", personel.calculateAge());
// console.log(personel.summary());

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};

//*person2'nin adını ve maaşını yazdırınız

// console.log(people);
// console.log(people.person2.name);
// console.log(people.person2.salary);

//*people objesindeki tüm salaryleri yazdırın

// for (let person in people) {
//   console.log(person);
//   console.log(people[person].salary);
//   console.log(people[person].name);
// }

// console.log(Object.keys(people));
// console.log(Object.values(people));
// console.log(Object.entries(people));

// for (let key of Object.keys(people)) {
//   console.log(key);
// }

// for (let v of Object.values(people)) {
//   console.log(v);
// }

// for (let [k, v] of Object.entries(people)) {
//   console.log("key:", k, "value:", v.job);
// }

// Object.keys(people).forEach((p) => console.log(p));
// Object.values(people).forEach((p) => console.log(p.name));

// Object.values(people)
//   .filter((p) => p.job === "developer")
//   .forEach((p) => console.log(p.dob));

// const dobs = Object.values(people)
//   .filter((p) => p.job === "developer")
//   .map((p) => p.dob);
// console.log(dobs);

// const team = [
//   { name: "josh", surname: "adams", job: "developer", age: 30 },
//   { name: "mary", surname: "bary", job: "tester", age: 22 },
//   { name: "hazel", surname: "nut", job: "developer", age: 20 },
// ];
// console.log(team);
// console.log(team[0]);

// team.push({ name: "ahmet", surname: "yılmaz", job: "developer", age: 22 });
// console.log(team);

//*team dizisindeki jobları tektek yazdırın
team.forEach((p) => console.log(p.job));

//*ageleri bir arttırarak yeni bir dizieye saklayınız
const agesIncByOne = team.map((x) => x.age + 1);
console.log(agesIncByOne);

//*name ve surnameleri birleştirip büyük harfe ceviren ve bunu fullName keyi olarak saklayan, aynı zamanda age degerlerini 5 arttırarak age keyine saklayan ve oluşan diziyi döndüren kodu yazınız

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});
console.log(teamFullName);

const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));
console.log(teamFullName);

//*teamFullName dizisindeki 30 yaşından küçük ve eşit olanların isimlerini diziye saklayınız

const teamUnder22 = teamFullName
  .fiter((p) => p.age < 30)
  .map((p) => p.fullName);
console.log(teamUnder22);
let array = "erhan tezer".split("");
console.log(array);
let ters = array.reverse();
console.log(ters);
let birles = ters.join("");
console.log(birles);

let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
// console.log(avengers.splice(2, 2, "Thor", "Hawkeye"));
// console.log(avengers);
// console.log(avengers.slice(1, 3));

let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};
console.log(fullStack.languages[0]);

for (let v in fullStack.languages) {
  console.log(v);
}

const myCar = {
  make: "ford",
  model: "Mustang",
  year: 1965,
  color: "Black",
};
myCar.age = function (current) {
  console.log(current - this.year);
};
myCar.age(new Date().getDay());
console.log(new Date().getHours());
