var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);  // engloba toda la aplicación

app.use(express.static('client'));

app.get('/',function(req, res){
	res.status(200).send('OK');
})


var vehicles = [
	{"id":1,"license_plate":"OMG1232","color":"black","model":"2014","type":null,"latitude":4.541333505209531,"longitude":74.57008390092872},
	{"id":2,"license_plate":"OMG1233","color":"black","model":"2014","type":null,"latitude":4.26057715065735,"longitude":74.79198449859409},
	{"id":3,"license_plate":"OMG1234","color":"black","model":"2014","type":null,"latitude":4.716350457215092,"longitude":74.20985320400037},
	{"id":4,"license_plate":"OMG1235","color":"black","model":"2014","type":null,"latitude":4.1517066703574965,"longitude":74.79068827584273},
	{"id":5,"license_plate":"OMG1235","color":"black","model":"2014","type":null,"latitude":4.1517066703574965,"longitude":74.79068827584273},
	{"id":6,"license_plate":"OMG1235","color":"black","model":"2014","type":null,"latitude":4.1517066703574965,"longitude":74.79068827584273},
];

io.on('connection',function(socket){
	console.log("Usuario con IP: "+ socket.handshake.address + " se ha conectado . . .");
	socket.emit('Vehicles', vehicles);
	socket.emit('IdVehicles', vehicles);
});	

server.listen(6677,function(){
	console.log('Servidor corriendo en:\n http://localhost:6677/');
});