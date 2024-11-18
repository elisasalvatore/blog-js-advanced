// import CSS style
import "../css/style.css";
//import components
import "./components/backToTopBtn";
// import functions
import getData from "./api/getData";
import createLoadMoreBtn from "./components/loadMoreBtn";

window.addEventListener("load", () => {
	getData();
	createLoadMoreBtn();
});
