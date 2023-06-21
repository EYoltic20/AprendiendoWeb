const mongoose =require('mongoose');
const assert = require("assert");


const url = 'mongodb://127.0.0.1:27017/frutasDB';

mongoose.connect(url);


const frutasSchema = mongoose.Schema({
    name: String,
     score: Number
});
const fruta = mongoose.model('Frutas',frutasSchema)

const mango = new fruta({
    name:"mango",
    score:10
});
const naranja = new fruta({
    name:"naranja",
    score:10
})
const limon = new fruta({
    name:"limon",
    score:10
})

fruta.insertMany([mango,limon,naranja],(err)=>{
    if(err){
        console.log(err)
    }
    console.log("exito")
})