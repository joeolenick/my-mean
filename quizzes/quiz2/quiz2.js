// Loop version

var total = 1;
var factoral = function(num){
	for (var i = num; i > 0 ; i--){
		total = total * i;
	}
	return total;
}

var result = factoral(10);
console.log(result);

// recursive

function factoral2(x){
	if (!x) return 1;
	var product = x * factoral2(x-1);
	return product;
}


var result2 = factoral2(10);
console.log(result2);