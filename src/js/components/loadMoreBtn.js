// import getData function
import getData from "../api/getData";

export default function createLoadMoreBtn() {
	const loadMoreBtn = document.createElement("button");
	const btnContainer = document.getElementById("ctn-btn");

	loadMoreBtn.classList = "loadMoreBtn";
	loadMoreBtn.textContent = "Load more";

	setTimeout(() => {
		btnContainer.appendChild(loadMoreBtn);
	}, 2000);

	loadMoreBtn.addEventListener("click", getData);
}
