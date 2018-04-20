var express = require('express');
var app = express();
var http = require('http').Server(app).listen(80);
var upload = require('express-fileupload');

app.use(upload());

console.log('Server Started!!');
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/upload.html');
});
app.post('/', function(req, res){
	if(req.files){
	console.log(req.files);
	var file = req.files.filename,
		filename = file.name;
	file.mv("./files/"+filename, function(err){
		if(err){
		console.log(err);
		res.status(200).send("Unable to upload file");
		}else{
			res.send('Done!');
		}
		});
	}
});
