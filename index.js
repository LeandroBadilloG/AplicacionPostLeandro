const express = require('express');
const app = express();
app.set('view engine', 'ejs');







app.listen(5970, ()=>{
    console.log('En linea')
});
