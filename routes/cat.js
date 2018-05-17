var _ = require('lodash');
var Cat = require('../models/cat.js');

module.exports = function (app) {

    /* Create */
    app.post('/cat', function (req, res) {
        var newCat = new Cat(req.body);
        newCat.save(function (err) {
            if (err) {
                res.json({
                    info: 'error during cat create',
                    error: err
                })
            };
            res.json({
                info: 'cat created successfully'
            });
        })
    });

    /* Read */
    app.get('/cat', function (req, res) {
        Cat.find(function (err, cats) {
            if (err) {
                res.json({
                    info: 'error during finding cats',
                    error: err
                })
            };
            res.json({
                info: 'cat found successfully',
                data: cats
            });
        })
    });

    app.get('/cat/:id', function (req, res) {
        Cat.findById(req.params.id, function (err, cat) {
            if (err) {
                res.json({
                    info: 'error during finding cats',
                    error: err
                })
            };
            if (cat) {
                res.json({
                    info: 'cat found successfully',
                    data: cat
                });
            } else {
                res.json({
                    info: 'cat not found '
                })
            }
        })
    });

    /* Update */
    app.put('/cat/:id', function (req, res) {
        Cat.findById(req.params.id, function (err, cat) {
            if (err) {
                res.json({
                    info: 'error during finding cats',
                    error: err
                })
            };
            if (cat) {
                _.merge(cat, req.body);
                cat.save(function (err) {
                    if (err) {
                        res.json({
                            info: 'err during cat update',
                            error: err
                        });
                    };
                    res.json({
                        info: 'cat update successfully'
                    });
                });
            } else {
                res.json({
                    info: 'cat not found '
                })
            }
        })
    });

    /* Deleate */
    app.delete('/cat/:id', function (req, res) {
        Cat.findById(req.params.id, function (err, cat) {
            if (err) {
                res.json({
                    info: 'error during finding cats',
                    error: err
                })
            };
            res.json({
                info: 'cat removed successfully'
            });
        });
    });

}