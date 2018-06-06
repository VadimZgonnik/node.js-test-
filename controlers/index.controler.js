const index = function(req, res, next) {
    res.render('index', { title: 'Express', value: 'qwewqeqw' });
};

exports.index = index;
