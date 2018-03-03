var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Ulog = new Schema({
    name    : String,
    pwd      : String,
    goodcode :String,
    goodname :String,
	goodnum :String,
	goodprice :String,
	sort :String,
	date :String,
	sale :String,
    create_date : { type: Date, default: Date.now }
});
var log = mongoose.model('users', Ulog);

module.exports = log;