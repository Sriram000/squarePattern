var firstLine = function (arr) {
  var k = '';
  for (var i = 0; i < arr.length; i++) {
    k = k + arr[i];
  }
  return k;
};

const lastLine = (arr) => {
	var m = '';
	for (var i = arr.length; i > 0; i--){
		m = m + arr[i - 1];
	}
	console.log(m);
}

const middleLines = (arr) => {
	var spaceCount = function (space) {
		var k = '';
		for (var i = 0; i < space; i++) {
			k = k + ' ';
		}
		return k;
	};

	var charac = function (val) {
		var k = '';
		for (var j = val; j > 0; j--) {
			k = k + arr[j - 1];
			return k;
		}
	};

	var m = arr.length - 1;
	var count = arr.length - 2;
	var spaces = spaceCount(count);

	for (var i = 0; i < count; i++) {
		var firstCharacter = arr[i + 1];

		var secondCharacter = charac(m - i);
		console.log(firstCharacter + spaces + secondCharacter);
	}

}

const square = (arr) => {
	console.log(firstLine(arr));
	middleLines(arr);
	lastLine(arr);
}


square(['a', 'b']);
square(['a', 'b', 'c']);
square(['a', 'b', 'c', 'd', 'e']);
