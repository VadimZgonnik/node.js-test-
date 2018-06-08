const index = function(req, res, next) {
    console.log(req.session.user, '<<<<<<<');
    res.render('index', { title: 'Express', value: 'qwewqeqw' });
};

exports.index = index;
