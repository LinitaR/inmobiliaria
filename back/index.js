const express = require("express");
const app = express();
const {asesores} = require("./routes/asesores");
require("./db/mongo").connectMongo();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/asesores', asesores);
//app.use('/apartamentos', apartamentos);

app.listen(3000,()=>{
    console.log("Estoy funcionando como servidor http en la ruta http://localhost:3000")
})