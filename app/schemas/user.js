var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	name: {
		type: String, 
		required:true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.statics = {
	fetch: function(cb) {
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function(id, cb){
		return this
			.findOne({_id: id})
			.exec(cb)
	}
}
module.exports = UserSchema

