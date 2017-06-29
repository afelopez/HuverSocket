var socket = io.connect('',{'forceNew':true});

//canal de vehiculos
socket.on('Vehicles', function(data){  //funcion de callback
	render_vehicle(data);
});
function render_vehicle(data){
	var html = data.map(function(vehicle,index){
		return(`
			- placa: <strong> ${vehicle.license_plate} </strong> , modelo: ${vehicle.model}, color: ${vehicle.color},
			type: ${vehicle.type}, position: [lat:${vehicle.latitude},lng:${vehicle.longitude}]
			<br>
		`);
	}).join(' '); //pa qutar las comas
 	document.getElementById('vehicles').innerHTML = html;  // agrega al id= "vehicles"
}


//canal de id de vehiculos
socket.on('IdVehicles',function(data){
	render_id_vehicle(data);
});
function render_id_vehicle(data){
	var html = data.map(function(vehicle,index){
		return(`
			- ${vehicle.id}
			<br>
		`);
	}).join(' ');
 	document.getElementById('id_vehicles').innerHTML = html;  // agrega al id= "	"
}