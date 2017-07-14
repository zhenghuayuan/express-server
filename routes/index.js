var express = require('express')
var router = express.Router()
var weixin = require('./admin/weixin')
var createMenu = require("./admin/createMenu")
var getAccessToken = require("./admin/getAccessToken")

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/weixins', weixin);
router.get('/weixin/createMenu', createMenu);
router.get('/weixin/getAccessToken', getAccessToken);


module.exports = router;
