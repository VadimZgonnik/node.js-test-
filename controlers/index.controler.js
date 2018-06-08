const index = function(req, res, next) {
    console.log(req.session.user, '<<<<<');
    console.log(req.session, '<<<<<');
    res.render('index', { title: 'Express', value: 'qwewqeqw' });
};

exports.index = index;
