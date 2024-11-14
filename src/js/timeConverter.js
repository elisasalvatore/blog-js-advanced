export function timeConverter(UNIX_timestamp) {
	const a = new Date(UNIX_timestamp * 1000);
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	let date = a.getDate();

	if (date < 10) {
		date = "0" + date;
	}

	const time = `${year}, ${date} ${month}`;
	return time;
}
