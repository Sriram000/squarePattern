const msPerDay = 1000 * 60 * 60 * 24;
const namedDays = ['Yesterday', 'Today', 'Tomorrow'];
const diffDays = (date1, date2) => {
	const diffTime = date1 - date2;
	const diffDays = Math.trunc(diffTime / msPerDay);

	if(diffDays < -1 || diffDays > 1) {
		return Math.abs(diffDays) + ' days ' + (diffDays < -1 ? 'ago' : 'left');
	}
	else {
		return namedDays[diffDays + 1];
	}
}

const cases = [
	['8/13/2015', '8/15/2015', '2 days ago'],
	['8/14/2015', '8/15/2015', 'Yesterday'],
	['8/15/2015', '8/15/2015', 'Today'],
	['8/16/2015', '8/15/2015', 'Tomorrow'],
	['8/17/2015', '8/15/2015', '2 days left'],
];

cases.forEach(([start, end, expected]) => {
	const actual = diffDays(new Date(start), new Date(end));
	console.log(actual, expected, actual === expected);
});
