const diamondPattern = (arr) => {

var repeat = function (char, length) {
  var m = '';
  var n = char;
  for (var i = 0; i < length; i++) {
    m = m + n;
  }
  return m;
};
repeat('a', 5);
var diamond = function () {

  var columns = arr.length * 2 - 1;

  for (var i = 0; i < arr.length; i++) {
    var n = 2 * i + 1;
    var spaceCount = (columns - n) / 2;
    var spaces = repeat(' ', spaceCount);
    var characters = repeat(arr[i], 2 * i + 1);
    console.log(spaces + characters + spaces);
  }
  for (var i = arr.length - 1; i > 0; i--) {
    var n = 2 * i - 1;
    var spaceCount = (columns - n) / 2;
    var spaces = repeat(' ', spaceCount);
    var characters = repeat(arr[i - 1], 2 * i - 1);
    console.log(spaces + characters + spaces);
  }
};
return diamond();
}

diamondPattern(['a', 'b']);
diamondPattern(['a', 'b', 'c']);
diamondPattern(['a', 'b', 'c', 'd', 'e']);
