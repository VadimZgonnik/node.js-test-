let express = require('express');
let router = express.Router();
let {list, insert, update, login} = require('../controlers/users.conrtoller');
/* GET users listing. */
router.post('/insert', insert);
router.post('/login', login);
router.put('/update', update);
router.get('/', list);

module.exports = router;
