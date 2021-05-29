var diamond = function (arr) {

  var columns = arr.length * 2 - 1;
	var result = '';

  for (var i = 0; i < arr.length; i++) {
    var n = 2 * i + 1;
    var spaceCount = (columns - n) / 2;
    var spaces = ' '.repeat(spaceCount);
    var characters = arr[i].repeat(n);
    result += spaces + characters + spaces + '\n';
  }
  for (var i = arr.length - 1; i > 0; i--) {
    var n = 2 * i - 1;
    var spaceCount = (columns - n) / 2;
    var spaces = ' '.repeat(spaceCount);;
    var characters = arr[i - 1].repeat(n);
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
