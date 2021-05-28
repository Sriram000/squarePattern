const firstLine = (arr) => arr.join('');

const middleLine = (val, i, arr) =>
	val + ' '.repeat(arr.length) + arr[arr.length - i - 1];

const middleLines = (arr) => arr.slice(1, -1).map(middleLine);

const lastLine = (arr) => arr.slice().reverse().join('');

const square = (arr) => [
	firstLine(arr),
	...middleLines(arr),
	lastLine(arr),
].join('\n');

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
