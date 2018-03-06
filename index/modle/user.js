var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Users = new Schema({
    name    : String,
    pwd      : String,
    create_date : { type: Date, default: Date.now }
});
var user = mongoose.model('abc', Users);

module.exports = user;