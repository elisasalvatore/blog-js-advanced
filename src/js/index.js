// import CSS style
import "../css/style.css";
//import components
import "./components/backToTopBtn";
// import functions
import getData from "./api/getData";

document.addEventListener("DOMContentLoaded", () => {
	try {
		getData();
	} catch (error) {
		console.log(
			"🚀 ~ file: index.js:13 ~ document.addEventListener ~ error:",
			error
		);
	}
});
