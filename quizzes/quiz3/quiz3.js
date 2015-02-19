var strngFin = '';
var noVowelsArray = '';

var noVowels = function(string){
	for (var i = 0; i < string.length ; i++) {
		if(	string[i].toLowerCase() != 'a' &&
			string[i].toLowerCase() != 'e' &&
			string[i].toLowerCase() != 'i' &&
			string[i].toLowerCase() != 'o' &&
			string[i].toLowerCase() != 'u' &&
			string[i].toLowerCase() != 'y'	)
			strngFin += string[i];
	}
noVowelsArray = strngFin.toString(',');
return noVowelsArray;
}


console.log(noVowels("The quick brown fox jumps over the lazy dog"));

