// import getData function
import getData from "../api/getData";

export default function createLoadMoreBtn() {
	const loadMoreBtn = document.createElement("button");
	const btnContainer = document.getElementById("ctn-btn");

	loadMoreBtn.classList = "loadMoreBtn";
	loadMoreBtn.textContent = "Load more";

	btnContainer.appendChild(loadMoreBtn);
	loadMoreBtn.addEventListener("click", getData);
}
