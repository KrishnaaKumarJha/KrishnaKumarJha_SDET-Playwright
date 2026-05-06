//Using async-await

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("Data",dataId);
        resolve("Data Recieved");
        },2000);
    });
};

async function api(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

let promise = api();

//Applying Async-await to fetch api

// QUESTION 1
async function getCatFacts() {
  const res = await fetch("https://catfact.ninja/facts");
  const data = await res.json();
  console.log(data.data.map(d => d.fact));
}
getCatFacts();

// QUESTION 2
async function getDogBreeds() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();
  console.log(Object.keys(data.message).splice(0, 1));
}
getDogBreeds();

// QUESTION 3
async function getTotalPrice() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data.map(p => p.price).reduce((a, b) => a + b, 0));
}
getTotalPrice();

// QUESTION 4
async function getPostsByUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data.filter(p => p.userId === 1).length);
}
getPostsByUser();

// QUESTION 5
async function getFirstUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data[0].name, typeof data);
}
getFirstUser();

// QUESTION 6
async function getJokes() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=5");
  const data = await res.json();
  console.log(data.jokes.map(j => j.joke));
}
getJokes();

// QUESTION 7
async function getTopElectronics() {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics");
  const data = await res.json();
  console.log(data.find(p => p.rating.rate > 4).title);
}
getTopElectronics();

// QUESTION 8
async function getCompletedTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data.filter(t => t.completed).length);
}
getCompletedTodos();

// QUESTION 9
async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  console.log(data.results.map(p => p.name));
}
getPokemons();

// QUESTION 10
async function getIndiaPopulation() {
  const res = await fetch("https://restcountries.com/v3.1/region/asia");
  const data = await res.json();
  console.log(data.find(c => c.name.common === "India").population);
}
getIndiaPopulation();