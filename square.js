const firstLine = (arr) => {
	return arr.join('') + '\n';
}

const lastLine = (arr) => {
	var reversed = arr.reverse();

	return reversed.join('') + '\n';
}

const middleLines = (arr) => {
	var result = '';

	var m = arr.length - 1;
	var count = arr.length - 2;
	var spaces = ' '.repeat(count);

	for (var i = 0; i < count; i++) {
		var firstCharacter = arr[i + 1];

		var secondCharacter = arr[m - i - 1];
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
