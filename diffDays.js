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
