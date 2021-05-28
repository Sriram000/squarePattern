const square = (arr) => [
	arr.join(''),
	...arr.slice(1, -1).map((val, i, arr) =>
		val + ' '.repeat(arr.length) + arr[arr.length - i - 1] ),
	arr.slice().reverse().join(''),
].join('\n');

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd', 'e']));
