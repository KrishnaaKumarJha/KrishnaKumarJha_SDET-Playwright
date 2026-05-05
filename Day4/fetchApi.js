 
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Krishna " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
 