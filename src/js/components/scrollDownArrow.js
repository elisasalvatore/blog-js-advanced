const arrow = document.querySelector(".ctn-scroll-down-arrow");

function setDisplayCSSProperty() {
	if (window.innerWidth < 900 || window.scrollY > 600) {
		arrow.style.display = "none";
	} else {
		arrow.style.display = "flex";
	}
}

window.addEventListener("scroll", setDisplayCSSProperty);
