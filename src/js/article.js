export default class Article {
	constructor(title, time, url) {
		this.title = title;
		this.time = time;
		this.url = url;
	}

	printArticle() {
		// create HTML tag elements
		// --- container and div
		const articlesContainer = document.getElementById("ctn-articles");
		const articleDiv = document.createElement("div");
		// --- title
		const articleTitleDiv = document.createElement("div");
		const h2Title = document.createElement("h2");
		// --- infos detail (date and url)
		const articleDetailsDiv = document.createElement("div");
		const articleDateDiv = document.createElement("div");
		const pDate = document.createElement("p");
		const articleURLDiv = document.createElement("div");
		const pUrl = document.createElement("p");
		const aUrl = document.createElement("a");

		// set class to each tag
		articleDiv.className = "article";
		articleDetailsDiv.className = "article-details";
		articleTitleDiv.className = "title";
		articleDateDiv.className = "date";
		articleURLDiv.className = "url";

		// handling HTML element according to its class
		switch (
			articleTitleDiv.className ||
			articleDateDiv.className ||
			articleURLDiv.className
		) {
			case "title":
				h2Title.textContent = `${this.title}`;
			// break;
			case "date":
				pDate.textContent = `${this.time}`;
			// break;
			case "url":
				aUrl.textContent = "Read more";
				aUrl.setAttribute("href", `${this.url}`);
				aUrl.setAttribute("target", "_blank");
				break;
			default:
		}

		// show every element in the HTML document
		// --- container and div
		articlesContainer.appendChild(articleDiv);
		// --- title
		articleDiv.appendChild(articleTitleDiv);
		articleTitleDiv.appendChild(h2Title);
		// --- infos detail
		articleDiv.appendChild(articleDetailsDiv);
		// --- date
		articleDetailsDiv.appendChild(articleDateDiv);
		articleDateDiv.appendChild(pDate);
		// --- url
		articleDetailsDiv.appendChild(articleURLDiv);
		articleURLDiv.appendChild(pUrl);
		pUrl.appendChild(aUrl);
	}
}
