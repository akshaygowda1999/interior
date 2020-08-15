var express = require('express');
var router = express.Router();
var db=require('./database');


var conn=require('./database')

router.get('/submit-student-data', function(req, res, next) {
    res.render('user');
});




router.post('/submit-student-data', function(req, res, next) {

    var name    = req.body.name;
    var email = req.body.email;
    var contact  = req.body.contact;
    var description=req.body.description;

    var sql = `INSERT INTO users (name, email, contact, description ) VALUES ('${name}', '${email}', '${contact}', ${description} )`;
    db.query(sql,function (err, data) {
        if (err) throw err;
        console.log("record inserted");
    });
    res.redirect('/user');  // redirect to user form page after inserting the data

});
module.exports = router;


























