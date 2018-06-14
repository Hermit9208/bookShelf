var express = require('express');
var router = express.Router();
var fs = require('fs')

module.exports = function(app) {
	router.get('/', function(req, res) {
  		res.send('Hello')
	});

	app.use('/index', router);
};
