// import CSS style
import "../css/style.css";
// import FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";
// import images
import "../assets/img/screenshot-blogjs.png";
//import components
import "./components/backToTopBtn";
import "./components/createHtmlTitleContent";
import "./components/scrollDownArrow";
// import functions
import getData from "./api/getData";
import createLoadMoreBtn from "./components/loadMoreBtn";

document.addEventListener("DOMContentLoaded", () => {
	try {
		getData();
		setTimeout(() => {
			createLoadMoreBtn();
		}, 2000);
	} catch (error) {
		console.log(
			"🚀 ~ file: index.js:13 ~ document.addEventListener ~ error:",
			error
		);
	}
});
