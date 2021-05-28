const middleLines = (arr) => {
	let result = '';
	const lastIndex = arr.length;
	const spaces = ' '.repeat(lastIndex);

	for (let i = 0; i < lastIndex; i++) {
		result += arr[i] + spaces + arr[lastIndex - i - 1] + '\n';
	}

	return result;
}

const square = (arr) => {
	const firstLine = arr.join('') + '\n';
	const lastLine = arr.slice().reverse().join('') + '\n';

	return firstLine + middleLines(arr.slice(1, -1)) + lastLine;
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
