// import timeConverter function
import { timeConverter } from "../timeConverter";
// import class Article
import Article from "../article";

export default async function getArticle(id) {
	const articleURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
	await fetch(articleURL)
		.then((response) => response.json())
		.then((articleObj) => {
			// get data from the article object corresponding to the ID (passed as the argument)
			const title = articleObj.title;
			const time = timeConverter(articleObj.time);
			const url = articleObj.url;

			// create an instance of the class Article for each article object fetched from the response (fetch)
			const article = new Article(title, time, url);
			// execute the method of class Article
			article.printArticle();
		})

		.catch((error) => {
			console.log("🚀 ~ file: getArticle.js:23 ~ getArticle ~ error:", error);
		});
}
