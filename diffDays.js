const msPerDay = 1000 * 60 * 60 * 24;
const diffDays = (date1, date2) => {
	const diffTime = date1 - date2;
	const diffDays = diffTime / msPerDay;
	const diffDaysRoundedUp = Math.ceil(diffDays);

	if(diffDaysRoundedUp < -1) {
		return Math.abs(diffDaysRoundedUp) + ' days ago';
	}
	else if(diffDaysRoundedUp > 1) {
		return diffDaysRoundedUp + ' days left';
	}
	else if(diffDaysRoundedUp === 0) {
		return 'Today';
	}
	else if(diffDaysRoundedUp === -1) {
		return 'Yesterday';
	}
	else {
		return 'Tomorrow';
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
