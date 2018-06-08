const {User} = require('../modeles');
const {hashPass} = require('../untils/bcrypt');
const {auth} = require('../servises/userServis');

exports.login = function (req, res, next) {
    auth(req.body.email, req.body.pass)
        .then(function (user) {
            console.log(user.toObject(), 'login');
            req.session.user = user.toObject();
            // res.redirect('/')
            return  res.json({user});
        })
        .catch(next)
};

exports.list = function (req, res, next) {
    console.log(req.session)
    User.find()
        .then(function (doc) {
            res.render('index', {items: doc});
        })
        .catch(next);
};
exports.insert = function (req, res, next) {
    let item = {
        email: req.body.email,
        password: hashPass(req.body.pass),
        confirmPassword: req.body.confirmPass
    };
    console.log(item);
    let user = new User(item);
    user
        .save()
        .then((user) => {
            res.json({user});
        })
        .catch(next);
};

exports.update = function (req, res, next) {
    let id = req.body.id;

    User.findOne(id, function (err, doc) {
        if (err) {
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