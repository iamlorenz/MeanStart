//example_controller
var mongoose    = require('mongoose');

//render test page
exports.helloWorld = function(req,res){
	console.log("hello world");
	res.render('index.html');
};