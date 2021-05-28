const middleLines = (arr) => {
	let result = '';
	const count = arr.length - 2;
	const spaces = ' '.repeat(count);

	for (let i = 0; i < count; i++) {
		result += arr[i + 1] + spaces + arr[count - i] + '\n';
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
