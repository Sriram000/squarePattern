const diamond = function (arr) {
	let result = '';

	for(let i = 0; i < arr.length; i++) {
		result += arr[i] + '\n';
	}
	return result;
}

console.log(diamond(['a', 'b']));
console.log(diamond(['a', 'b', 'c']));
console.log(diamond(['a', 'b', 'c', 'd', 'e']));
