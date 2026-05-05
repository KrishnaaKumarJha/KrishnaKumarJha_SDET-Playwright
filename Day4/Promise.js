//Promises
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});


//setInterval Function
setInterval (() => {
    console.log("Hello after every 2 seconds");
},2000);


//setTimeout Function
setTimeout (() => {
    console.log("Hello After 3 Seconds");
},3000);