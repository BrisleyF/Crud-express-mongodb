
module.exports = function() {
    let db = require('../libs/db-connection')();
    let Schema = require('mongoose').Schema;
    var mongoose = require('mongoose');

    let task = mongoose.Schema ({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks', task);
}