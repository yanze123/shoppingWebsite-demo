var user = require('../models/user.js')

//signup
exports.register = function(req, res){
	var _user = req.body.user
	User.findOne({name: _user.name}, function(err, user){
		if (err) {
			console.log(err)
		}
		if (user) {
			req.session.error = "用户名已存在"
			res.send(500)
		}
		else {
			user = new User(_user)
			user.save(function(err, user){
				if(err){
					console.log(err)
				}
				req.session.error = "用户名创建成功！"
				res.send(200)
			})
		}
	})
}