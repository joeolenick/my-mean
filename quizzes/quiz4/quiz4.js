var postTime = function(){
setInterval(function(){ 
	var dateTime = new Date()
	var h = dateTime.getHours()
	var m = dateTime.getMinutes()
	var s = dateTime.getSeconds(); 
		console.log(h +":"+m+":"+s);
}, 1000);
}
postTime();