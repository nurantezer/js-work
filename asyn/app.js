h// console.log("başladı");
// setTimeout(()=> {
//     console.log("bitti");
// },2000)

// console.log("geldi");
// setTimeout(() =>{
//     console.log("gitti");
// },3000)

// console.log("durdu");
// setTimeout(() =>{
//     console.log("yürüdü");
// },2000)

// console.log("timer started");
// let counter = 0
// let sec1 = setInterval(() =>{
//     console.log(++counter);
//     if(counter > 3){
//         clearInterval(sec1)
//         console.log("timer stoped");
//     }
// },1000)

// console.log("saymaya başla");
// let counter = 0
// let say = setInterval(() =>{
//     console.log(++counter);
//     if(counter > 5){
//         clearInterval(say)
//         console.log("sayma işlemi bitti");
//     }
// },1000)

// console.log("saydım");
// let counter = 2
// let say = setInterval(() => {
//     console.log(++counter);
//     if(counter > 10){
//         clearInterval(say)
//         console.log("saydım");
//     }
// },2000)

fetch("https://api.github.com/users").then((res) =>{
    if(!res.ok){
        throw new Error(`Somethinf went wrong: ${res.status}`)
    }
    return res.json()
})
.then((data) => showGithubUsers(data)).catch((hata) => {
    const userArticle = document.querySelector(".users")
    userArticle.innerHTML = `<h2 class="text-warning display-6>${hata}</h2>`
})
const showGithubUsers = (users) => {
    const userArticle = document.querySelector(".users")

    users.forEach((user) => {
        userArticle.innerHTML += `<h2 class="h6 text-warning">${user.login}</h2>
        <img class= "w-25 mb-4" src=${user.avatar.url} alt=""/>`
    } )
}

