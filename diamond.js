var repeat = function (char, length) {
  var m = '';
  var n = char;
  for (var i = 0; i < length; i++) {
    m = m + n;
  }
  return m;
};

var diamond = function (arr) {

  var columns = arr.length * 2 - 1;
	var result = '';

  for (var i = 0; i < arr.length; i++) {
    var n = 2 * i + 1;
    var spaceCount = (columns - n) / 2;
    var spaces = repeat(' ', spaceCount);
    var characters = repeat(arr[i], 2 * i + 1);
    result += spaces + characters + spaces + '\n';
  }
  for (var i = arr.length - 1; i > 0; i--) {
    var n = 2 * i - 1;
    var spaceCount = (columns - n) / 2;
    var spaces = repeat(' ', spaceCount);
    var characters = repeat(arr[i - 1], 2 * i - 1);
    result += spaces + characters + spaces + '\n';
  }
	return result;
}

const diamondPattern = (arr) => {
	return diamond(arr);
}

console.log(diamondPattern(['a', 'b']));
console.log(diamondPattern(['a', 'b', 'c']));
console.log(diamondPattern(['a', 'b', 'c', 'd', 'e']));
