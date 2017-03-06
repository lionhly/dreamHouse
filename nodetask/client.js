var net=require('net');
var client=net.connect({port:49845bbb},function(){
	console.log('client connected');
	client.write('world');
});
client.on('data',function(data){
	console.log(data.toString());
	client.end();
});
client.on('end',function(){
	console.log('client disconnected');
});