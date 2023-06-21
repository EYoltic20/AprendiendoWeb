const express =  require('express');
const bp = require('body-parser');
const bodyParser = require('body-parser');
const mon =require('mongoose');
const app = express();
const url = 'mongodb://127.0.0.1:27017/todoDB';
app.set('view engine','ejs')

// Schemas
const notasSchema = new mon.Schema({
    name:{
        type:String,
        required:true
    }
})
const notasModel =  mon.model('Notas',notasSchema);

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/',async (req,res)=>{
    const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    
    var today = new Date()
    const lista = await notasModel.find({})
    var day  = today.getDay()

    res.render('list',{day:dias[day],lista:lista}) 
})


app.post('/delete',async(req,res)=>{
    try{
        const nota = req.body.checkbox
        const borrar = await notasModel.deleteOne({_id:nota})
        res.redirect("/")
    }catch(e){
        
    }

})
// async function enctontrar(){
//     const lista = await notasModel.find({})
//     const newList = lista.map((nota)=>{
//         return nota.name
//     })
//     return newList
// }


app.post('/juan',(req,res)=>{
    const itemreq = req.body.newItem
    
    if (itemreq === ""){
        res.redirect("/")
    }else{
        const nota = new notasModel({
            name: itemreq
        })
        nota.save()
        res.redirect("/")
    }
})


app.listen(3000,()=>{
    mon.connect(url);
    console.log("puerto 3000")
})