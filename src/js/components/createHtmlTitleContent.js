// Create Header Name
const headerName = document.querySelector(".name");
const p = document.createElement("p");
headerName.appendChild(p).textContent = "Hacker News";

// Create Main Title
const scrollTitleCtn = document.querySelector(".scroll");
const h1 = document.createElement("h1");
scrollTitleCtn.appendChild(h1).textContent = "NEWSTORIES";
h1.setAttribute("data-text", "NEWSTORIES");
