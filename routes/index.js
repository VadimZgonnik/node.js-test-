let express = require('express');
let router = express.Router();

let {index} = require('../controlers/index.controler');
console.log(index);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});



router.post('/insert', function(req, res, next){
   let item = {
       email: req.body.email,
       password: req.body.password,
       confirmPassword: req.body.confirmPassword
   };

   let data = new User(item);
   data.save();

   res.redirect('/');
});
router.post('/update', function(req, res, next) {
    let id =req.body.id;

    User.findOne(id, function (err, doc) {
        if(err){
            console.log('error, no entry found')
        }
        doc.email = req.body.email;
        doc.password = req.body.password;
        doc.confirmPassword = req.body.confirmPassword;
        doc.save();
    });
    res.redirect('/')
});






module.exports = router;
