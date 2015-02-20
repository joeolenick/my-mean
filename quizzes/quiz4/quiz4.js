var postTime = function(){
setInterval(function(){ 
	var dateTime = new Date()
	var time = dateTime.getHours()+":"+ dateTime.getMinutes()+":"+dateTime.getSeconds(); 
		console.log(time);
}, 1000);
}
postTime();