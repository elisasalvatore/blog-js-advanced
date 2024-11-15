let currentIndex = 0;

export default function showNArticles(data) {
	//typeof data: object
	const slicedData = Object.values(data).slice(currentIndex, currentIndex + 10);
	currentIndex += 10;

	return slicedData;
}
