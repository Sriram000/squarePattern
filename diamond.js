var diamond = function (arr) {
  var count = arr.length * 2 - 1;
	var result = '';

  for (var i = 1; i <= count; i++) {
    var charPos = arr.length - Math.abs(arr.length - i);
    var charCount = 2 * charPos - 1;
    var spaceCount = (count - charCount) / 2;
    var spaces = ' '.repeat(spaceCount);
    var characters = arr[charPos-1].repeat(charCount);
    result += spaces + characters + spaces + '\n';
  }

	return result;
}

console.log(diamond(['a', 'b']));
console.log(diamond(['a', 'b', 'c']));
console.log(diamond(['a', 'b', 'c', 'd', 'e']));
