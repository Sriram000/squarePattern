const diamond = function (arr) {
	let result = '';
	const midPoint = arr.length;
	const count = midPoint * 2 - 1;

	for(let i = 1; i <= count; i++) {
		const distance = Math.abs(midPoint - i);
		const charPos = midPoint - distance;
		const charIndex = charPos - 1;
		const charCount = charPos * 2 - 1;
		const spaceCount = (count - charCount) / 2;
		const spaces = ' '.repeat(spaceCount);
		const characters = arr[charIndex].repeat(charCount);

		result += spaces + characters + spaces + '\n';
	}

	return result;
}

console.log(diamond(['a', 'b']));
console.log(diamond(['a', 'b', 'c']));
console.log(diamond(['a', 'b', 'c', 'd', 'e']));
