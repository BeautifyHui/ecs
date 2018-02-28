var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Ulog = new Schema({
    name    : String,
    pwd      : String,
    create_date : { type: Date, default: Date.now }
});
var log = mongoose.model('users', Ulog);

module.exports = log;