const mongoose = require("mongoose");
const connectionString = "mongodb+srv://Lina:0000@cluster0.denhw.mongodb.net/inmobiliaria?retryWrites=true&w=majority"

const connectMongo = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Conectado!");
        })
    }catch(err){
        console.log("Error! "+err);
    }
}

module.exports = {
    connectMongo
}