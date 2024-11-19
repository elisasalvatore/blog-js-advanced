// import CSS style
import "../css/style.css";
//import components
import "./components/backToTopBtn";
// import functions
import getData from "./api/getData";
import createLoadMoreBtn from "./components/loadMoreBtn";

document.addEventListener("DOMContentLoaded", () => {
	try {
		getData();
		// create and show "Load more" button after data loaded
		createLoadMoreBtn();
	} catch (error) {
		console.log(
			"🚀 ~ file: index.js:13 ~ document.addEventListener ~ error:",
			error
		);
	}
});
