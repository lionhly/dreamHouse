console.log('hello world');
var net=require('net');
var server=net.createServer(function(socket){
	socket.setEncoding("utf8");
	socket.on('data',function(data){
		socket.write('hello');
	});
	socket.on('end',function(){
		console.log('over!');
	});
	socket.write('welcome!');
});
server.listen(49845,function(){
	console.log('server bound');
});