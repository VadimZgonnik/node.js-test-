const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashPass = (pass) => bcrypt.hashSync(String(pass), saltRounds);

exports.validPass = (pass, hash) => bcrypt.compareSync(String(pass), hash);

