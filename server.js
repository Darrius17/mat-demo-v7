var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', function(req, res){

	var newObject = undefined;

	res.render('index', {newObject,newObject});
});