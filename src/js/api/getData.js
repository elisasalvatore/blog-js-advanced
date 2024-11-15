// import getArticle(id) function
import showNArticles from "../showNArticles";
import getArticle from "./getArticle";
const newstoriesURL = "https://hacker-news.firebaseio.com/v0/newstories.json";
// let currentIndex = 0;

export default async function getData() {
	await fetch(newstoriesURL)
		.then((response) => response.json())
		.then((data) => {
			// console.log("🚀 ~ file: getData.js:9 ~ .then ~ data:", data);

			// shows 10 elements from data
			const articles = showNArticles(data);

			// get article ID and call getArticle(id) function
			for (let id of articles) {
				getArticle(id);
			}
		})
		.catch((error) => {
			console.log("🚀 ~ file: getData.js:27 ~ getData ~ error:", error);
		});
}
