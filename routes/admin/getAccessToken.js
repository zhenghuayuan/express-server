// 手动获取：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxae2fe05cdb9864f7&secret=d4624c36b6795d1d99dcf0547af5443d
var axios = require("axios")
var url = "https://api.weixin.qq.com/cgi-bin/token"
var config = require("../../config.js")
module.exports = function(req, res, next) {
	axios.get(url, {
		params: {
	    	grant_type: "client_credential",
	    	appid: config.appid,
	    	secret: config.appsecret,
		}
	})
	.then(({data})=>{
		res.json({
			code: 0,
			body: data,
			errorMsg: ""
		})
	})
	.catch(e=>{
		console.log(e)
	})
}

// axios.post(url, {
// 	username: _this.username,
// 	password: _this.password,
// 	email: _this.email
// })
// .then(({data})=>{
	
// })
// .catch((e)=>{
// 	console.log(e)
// })