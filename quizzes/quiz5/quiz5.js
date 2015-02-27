var math = function(a, b, c){
	c = c || 0;
	total = a+b+c
	console.log("Result: " + total);
	return total;
}

math(1,2);
math(1,2,3);


var math2 = function(a,b,c,d,e,f,g){
	if (b === undefined) b = 0;
	if (c === undefined) c = 0;
	if (d === undefined) d = 0;
	if (e === undefined) e = 0;
	if (f === undefined) f = 0;
	if (g === undefined) g = 0;

	total = a+b+c+d+e+f+g;
	console.log("Result2: " + total);
	return total;
}

math2(1,2);
math2(1,2,3);
math2(1,2,3,4);
math2(1,2,3,4,5);
math2(1,2,3,4,5,6);
math2(1,2,3,4,5,6,7);