const {User} = require('../modeles');
const {validPass} = require('../untils/bcrypt');

exports.auth = function (email, pass) {
    return new Promise((resolve, reject) => {
        User.findOne({email}, function (err, user) {
            if(!user) return reject(new Error('User not found'));

            if(!validPass(pass, user.password)) return reject(new Error('Password not correct'));
            resolve(user);
        });
    })
};
// exports.auth('vadimzgonnik95@gmail.com', '222').then(console.log);