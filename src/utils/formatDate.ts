export const formatDate = (date: Date) =>
	date
		.toLocaleDateString()
		.slice(0, 10)
		.split('/')
		.map((s) => s.padStart(2, '0'))
		.toSorted((a, b) => b.length - a.length)
		.join('-');
