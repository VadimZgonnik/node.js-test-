let express = require('express');
let router = express.Router();
let {list, insert, update} = require('../controlers/users.conrtoller');
/* GET users listing. */
router.post('/insert', insert);
router.put('/update', update);
router.get('/', list);

module.exports = router;
