export function generateRandomColor() {
	let randomColor = ''

	do {
		randomColor = Math.floor(Math.random() * 16777215).toString(16)
	} while (isWhiteOrLightGray(randomColor))

	return `#${randomColor}`
}

function isWhiteOrLightGray(color) {
	const threshold = 0xCCCCCC
	const numericColor = parseInt(color, 16)
	return numericColor >= threshold
}