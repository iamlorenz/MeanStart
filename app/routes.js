module.exports = function(app){
  
  //load controllers
  var controller = require('./controllers/example_controller.js');

	//render index.html
	app.get('/', function(req, res){
		res.render('index.html');
	});

  app.get('/test', controller.helloWorld);
};