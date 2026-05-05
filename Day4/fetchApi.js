// QUESTION 1
fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(data => data.data.map(d => d.fact))
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

// QUESTION 2
fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => console.log(Object.keys(data.message).splice(0, 1)))
  .catch(err => console.log(err.message));

// QUESTION 3
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data.map(p => p.price).reduce((a, b) => a + b, 0)))
  .catch(err => console.log(err.message));

// QUESTION 4
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data.filter(p => p.userId === 1).length))
  .catch(err => console.log(err.message));

// QUESTION 5
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data[0].name, typeof data))
  .catch(err => console.log(err.message));

// QUESTION 6
fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=5")
  .then(res => res.json())
  .then(data => console.log(data.jokes.map(j => j.joke)))
  .catch(err => console.log(err.message));

// QUESTION 7
fetch("https://fakestoreapi.com/products/category/electronics")
  .then(res => res.json())
  .then(data => console.log(data.find(p => p.rating.rate > 4).title))
  .catch(err => console.log(err.message));

// QUESTION 8
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => console.log(data.filter(t => t.completed).length))
  .catch(err => console.log(err.message));

// QUESTION 9
fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(res => res.json())
  .then(data => console.log(data.results.map(p => p.name)))
  .catch(err => console.log(err.message));

// QUESTION 10
fetch("https://restcountries.com/v3.1/region/asia")
  .then(res => res.json())
  .then(data => console.log(data.find(c => c.name.common === "India").population))
  .catch(err => console.log(err.message));