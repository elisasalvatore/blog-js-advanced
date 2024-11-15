// import CSS style
import "../css/style.css";

// import functions
import getData from "./api/getData";
import "./components/backToTopBtn";
import createLoadMoreBtn from "./components/loadMoreBtn";

document.addEventListener("DOMContentLoaded", () => {
	getData();
	createLoadMoreBtn();
});
