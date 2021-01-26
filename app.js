var fs=require('fs');
var express=require('express');
var exphbs=require('express-handlebars');
var ejs=require('ejs');
var todoController=require('./ToDoController.js');
var methodOverride=require('method-override');


const mongoose=require('mongoose');
var app=express();

const MongoClient=require('mongodb').MongoClient;

const dbURI="mongodb+srv://mel0n:guest@cluster0.iazpd.mongodb.net/node-crud?retryWrites=true&w=majority";

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true }) 
    .then((result)=>console.log('connected to db'))
    .catch((err)=>console.log(err));



/*
MongoClient.connect(url,(err,client)=>{


    if(err) return console.error(err);
    console.log('Connected to Database');

});

*/
//init middleware

app.use((req,res,next)=>{
    console.log("using middleware");
  
    next();
});

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs'); //set view engine




// iniitaite the app 
todoController(app);



