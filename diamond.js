const diamond = function (arr) {
  const count = arr.length * 2 - 1;
	let result = '';

  for (let i = 1; i <= count; i++) {
    const charPos = arr.length - Math.abs(arr.length - i);
    const charCount = 2 * charPos - 1;
    const spaceCount = (count - charCount) / 2;
    const spaces = ' '.repeat(spaceCount);
    const characters = arr[charPos-1].repeat(charCount);
    result += spaces + characters + spaces + '\n';
  }

	return result;
}

console.log(diamond(['a', 'b']));
console.log(diamond(['a', 'b', 'c']));
console.log(diamond(['a', 'b', 'c', 'd', 'e']));
