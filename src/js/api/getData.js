// import getArticle(id) function
import getArticle from "./getArticle";

const newstoriesURL = "https://hacker-news.firebaseio.com/v0/newstories.json";
let currentIndex = 0;

export default async function getData() {
	await fetch(newstoriesURL)
		.then((response) => response.json())
		.then((data) => {
			// console.log("🚀 ~ file: getData.js:9 ~ .then ~ data:", data);

			// shows 10 elements from data (data type: object)
			const articles = Object.values(data).slice(
				currentIndex,
				currentIndex + 10
			);
			currentIndex += 10;
			// console.log("🚀 ~ file: getData.js:23 ~ .then ~ articles:", articles);

			// get article ID and call getArticle(id) function
			for (let element of articles) {
				let id = element;
				getArticle(id);
			}
		})
		.catch((error) => {
			console.log("🚀 ~ file: getData.js:27 ~ getData ~ error:", error);
		});
}
