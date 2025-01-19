const content = document.querySelector(".content-class");

// // Dynamically load the initial page
// fetch("/src/sections/initial_page/initial.html") // Adjusted to match the Vite structure
// 	.then((response) => response.text())
// 	.then((data) => {
// 		content.innerHTML = data;

// 		// Manually add the CSS link to the document head
// 		const link = document.createElement("link");
// 		link.rel = "stylesheet";
// 		link.href = "/src/sections/initial_page/initial.css"; // Adjusted path for CSS
// 		document.head.appendChild(link);

// 		// Load or attach the JS file
// 		const script = document.createElement("script");
// 		script.src = "/src/sections/initial_page/initial.js"; // Adjusted path for JS
// 		document.body.appendChild(script);
// 	})
// 	.catch((error) => console.error("Error:", error));

// Hover effect and the link naviagation for the navbar
window.location.href = "/sections/initial_page/initial.html";
