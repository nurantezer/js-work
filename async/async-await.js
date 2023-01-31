const fetchCountry = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const res = await fetch(url);
    const data = await res.json();
    renderCountry(data[0]);
}

const getNews = async () => {
  const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e";
  const URL = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`;
  const res = await fetch(URL);
 const data = await res.json();
    //  console.log(data.articles)
    renderNews(data.articles);
  
};