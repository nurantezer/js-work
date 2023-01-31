fetch("https://restcountries.com/v3.1/name")
.then((res) => res.json()).then((data) => renderCountry(data[0]))

fetch("https://api.github.com/users")
  .then((res) =>  res.json())
  .then((data) => showGithubUsers(data));