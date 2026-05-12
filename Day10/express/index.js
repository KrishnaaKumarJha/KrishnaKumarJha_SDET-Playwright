const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.json("Hello World");

});


app.get('/:name',(req,res) => {
    const name = req.params.name;
    res.json({
        message: `Hello ${name}`
    });
});

app.listen(port,()=> console.log(`App is running on port: ${port}`))