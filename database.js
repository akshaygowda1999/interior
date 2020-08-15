//sql connection

var userRouter = require('./user');

//database.use('/user',userRouter);//error in this line



var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'akshaysb',      // Replace with your database username
    password: 'Akshaysb@123',      // Replace with your database password
    database: 'aks' // // Replace with your database Name
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
})



//localhost:3000

var express = require('express');
var database=express();

var bodyParser=require('body-parser');
database.use(bodyParser.urlencoded({extended: false}));
database.get('/',function(req,res){
    res.sendFile('index.html',{root: __dirname});
});

database.post('/submit-student-data',function(req,res){
    var name=req.body.name+' '+req.body.contact+''+req.body.email;
    res.send(name+'submitted successfully!');
});
database.put('/submit-student-data',function(req,res){
    res.send('PUT Request');
});
database.delete('/submit-student-data',function(req,res){
    res.send('DELETE Request');
});
var server=database.listen(3000,function(){
    console.log('nodeserver is running...');
});





module.exports=conn;


