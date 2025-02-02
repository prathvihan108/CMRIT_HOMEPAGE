fetch("/components/header.html")
	.then((response) => response.text())
	.then((data) => {
		// Insert the header HTML
		document.getElementById("header").innerHTML = data;

		// Manually load the script referenced in the header (if any)
		const headerScript = document.createElement("script");
		headerScript.src = "/components/header.js";

		headerScript.onload = () => {
			console.log("Header script loaded successfully.");
			//scroll to the section
			const targetElement = document.getElementById("btn-id");

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		};
		document.body.appendChild(headerScript);
	});

fetch("/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		// Insert the footer HTML
		document.getElementById("footer").innerHTML = data;
	});
