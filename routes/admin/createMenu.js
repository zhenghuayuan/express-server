var axios = require("axios")
var url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token="
var config = require("../../config.js")
module.exports = function(req, res, next) {
	axios.post(url+config.access_token, {
		menu: JSON.stringify(menu)
	})
	.then(({data})=>{
		res.json({
			code: 0,
			body: data,
			errorMsg: ""
		})
	})
	.catch((e)=>{
		console.log(e)
	})
}

var menu = {
    "button": [
       	{	
           "type":"view",
           "name":"搜索",
           "url":"http://www.soso.com/"
        },
    ]
}