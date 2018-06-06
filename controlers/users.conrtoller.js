let {User} = require('../modeles');
exports.list = function (req, res, next) {
    User.find()
        .then(function (doc) {
            res.render('index', {items: doc});
        })
        .catch(next);
};
exports.insert = function(req, res, next){
    let item = {
        email: req.body.email,
        password: req.body.pass,
        confirmPassword: req.body.confirmPass
    };
    console.log(item, '<<,')
    let doc = new User(item);
    doc.save().then((user) => {
        res.json({user});
    }).catch(next);
};
exports.update = function(req, res, next) {
    let id =req.body.id;

    User.findOne(id, function (err, doc) {
        if(err){
            return next(err)
        }
        doc.email = req.body.email;
        doc.password = req.body.password;
        doc.confirmPassword = req.body.confirmPassword;
        doc.save();

        res.redirect('/')
    })
        .catch(next);

};