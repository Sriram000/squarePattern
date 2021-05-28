const middleLines = (arr) => {
	var result = '';
	var count = arr.length - 2;
	var spaces = ' '.repeat(count);

	for (var i = 0; i < count; i++) {
		var firstCharacter = arr[i + 1];
		var secondCharacter = arr[count - i];
		result = result + firstCharacter + spaces + secondCharacter + '\n';
	}

	return result;
}

const square = (arr) => {
	const firstLine = arr.join('') + '\n';
	const lastLine = arr.slice().reverse().join('') + '\n';

	return firstLine + middleLines(arr) + lastLine;
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
