const middleLines = (arr) => {
	let result = '';
	const lastIndex = arr.length - 1;
	const spaces = ' '.repeat(lastIndex - 1);

	for (let i = 1; i < lastIndex; i++) {
		result += arr[i] + spaces + arr[lastIndex - i] + '\n';
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
