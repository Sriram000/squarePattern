const diamond = function (arr) {
	const colCount = arr.length * 2 - 1;
	const lines = arr.map((char, i) => {
		const charCount = 2 * i + 1;
		const spaces = ' '.repeat((colCount - charCount) / 2);

		return spaces + char.repeat(charCount) + spaces;
	})

	return [
		...lines,
		...lines.slice(0, -1).reverse(),
	].join('\n')
}

console.log(diamond(['a', 'b']));
console.log(diamond(['a', 'b', 'c']));
console.log(diamond(['a', 'b', 'c', 'd', 'e']));
