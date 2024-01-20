export const formatDate = (date: Date) =>
	[date.getFullYear(), date.getMonth() + 1, date.getDate()]
		.map((n) => n.toString())
		.map((s) => s.padStart(2, '0'))
		.join('-');
