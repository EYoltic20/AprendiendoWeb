const express =  require('express');
const bp = require('body-parser');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
var today = new Date()
var day  = today.getDay()
var lista = []
app.use(express.static("public"))

app.get('/',(req,res)=>{
    const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    console.log(lista)
    var today = new Date()
    var day  = today.getDay()
    res.render('list',{day:dias[day],lista:lista}) 
})
app.post('/',(req,res)=>{
    const itemreq = req.body.newItem
    lista.push(itemreq)
    res.redirect("/")
})


app.listen(3000,()=>{
    console.log("puerto 3000")
})