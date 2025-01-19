function toggleWidget(widget) {
	const content = widget.querySelector(".content");
	const toggleImg = widget.querySelector(".toggleimg");

	// Toggle content visibility
	if (content.style.display === "block") {
		content.style.display = "none";
		toggleImg.src = "/src/assets/images/plus.svg"; // Replace with the plus icon
	} else {
		content.style.display = "block";
		toggleImg.src = "/src/assets/images/cross.svg"; // Replace with the minus icon
	}
}

// Optional: Add smooth transitions to content toggling
document.querySelectorAll(".content").forEach((content) => {
	content.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
	content.style.overflow = "hidden";
	content.style.maxHeight = "0";
	content.style.opacity = "0";
});

document.querySelectorAll(".widget").forEach((widget) => {
	widget.addEventListener("click", () => {
		const content = widget.querySelector(".content");
		const isVisible = content.style.maxHeight !== "0px";

		// Hide all other widgets
		document.querySelectorAll(".content").forEach((otherContent) => {
			otherContent.style.maxHeight = "0";
			otherContent.style.opacity = "0";
		});

		if (!isVisible) {
			content.style.maxHeight = content.scrollHeight + "px";
			content.style.opacity = "1";
		} else {
			content.style.maxHeight = "0";
			content.style.opacity = "0";
		}
	});
});
// Achievements scroll view
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const imageContainer = document.querySelector(".image-container");

// Define the width of an image to scroll by
let imageWidth = document.querySelector(".image-box").offsetWidth + 1; // Adding some margin for precise scrolling

// Recalculate image width on window resize
window.addEventListener("resize", () => {
	imageWidth = document.querySelector(".image-box").offsetWidth + 1;
});

// Scroll to the previous image (left)
leftArrow.addEventListener("click", () => {
	imageContainer.scrollBy({
		left: -imageWidth,
		behavior: "smooth",
	});
});
leftArrow.addEventListener("touchstart", () => {
	imageContainer.scrollBy({
		left: -imageWidth,
		behavior: "smooth",
	});
});

// Scroll to the next image (right)
rightArrow.addEventListener("click", () => {
	imageContainer.scrollBy({
		left: imageWidth,
		behavior: "smooth",
	});
});
rightArrow.addEventListener("touchstart", () => {
	imageContainer.scrollBy({
		left: imageWidth,
		behavior: "smooth",
	});
});
