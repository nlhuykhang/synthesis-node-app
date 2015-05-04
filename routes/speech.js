var express = require('express');
var router = express.Router();
var flite = require('flite');
var fs = require('fs');
var returnFile = null;
var path = require('path');
var randomString = require('randomstring');


router.get('/speech', function(req, res, next) {
	var name = randomString.generate();
	flite(function(err, speech) {
		console.log(err);
		if (err) {
			res.json({
				'message': 'error!'
			})
		} else {
			speech.say(req.query.message, './public/wav/' + name + '.wav', function(err) {
				if (err) {
					res.json({
						'message': 'error!'
					})
				} else {
					console.log('write file success');
					res.send('/public/wav/' + name + '.wav');
				}
			});
		}
	});

	// fs.readFile('./public/wav/hello1.wav', function(err, data) {
	// 	if (err) {
	// 		res.json('err!');
	// 	} else {
	// 		res.send(data);
	// 	}
	// });


	// var returnFile = fs.readFileSync('./hello0.wav');
	// res.sendFile(__dirname + '/public/wav/hello' + req.query.id + '.wav');
});

module.exports = router;