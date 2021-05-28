var firstLine = function (arr) {
  var k = '';
  for (var i = 0; i < arr.length; i++) {
    k = k + arr[i];
  }
  return k + '\n';
};

const lastLine = (arr) => {
	var m = '';
	for (var i = arr.length; i > 0; i--){
		m = m + arr[i - 1];
	}
	return m + '\n';
}

var spaceCount = function (space) {
	var k = '';
	for (var i = 0; i < space; i++) {
		k = k + ' ';
	}
	return k;
};

var charac = function (val, arr) {
	var k = '';
	for (var j = val; j > 0; j--) {
		k = k + arr[j - 1];
		return k;
	}
};

const middleLines = (arr) => {
	var result = '';

	var m = arr.length - 1;
	var count = arr.length - 2;
	var spaces = spaceCount(count);

	for (var i = 0; i < count; i++) {
		var firstCharacter = arr[i + 1];

		var secondCharacter = charac(m - i, arr);
		result = result + firstCharacter + spaces + secondCharacter + '\n';
	}
	return result;
}

const square = (arr) => {
	return firstLine(arr) + middleLines(arr) + lastLine(arr);
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
