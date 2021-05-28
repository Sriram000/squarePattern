const square = (arr) => {
	const firstLine = arr.join('');
	const middleLines = arr.slice(1, -1).map((val, i, arr) =>
		val + ' '.repeat(arr.length) + arr[arr.length - i - 1] );
	const lastLine = arr.slice().reverse().join('');

	const lines = [
		firstLine,
		...middleLines,
		lastLine,
	];

	return lines.join('\n');
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
