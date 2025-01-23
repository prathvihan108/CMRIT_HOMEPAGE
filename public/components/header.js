// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");

//hovering of the menu items
const menuItemsLinks = document.querySelectorAll(".menu-items li");
const hoverCard = document.getElementById("hover-card");

menuToggle.addEventListener("click", () => {
	menuItems.classList.toggle("active");
	hoverCard.classList.remove("active");
});

// Video
// Show video container when button is clicked
function showVideo() {
	console.log("Video shown");
	const videoContainer = document.getElementById("video-container");
	videoContainer.style.display = "block";
}

// Click outside the video container to hide it
document.addEventListener("click", (e) => {
	if (!e.target.closest("#video-container") && !e.target.closest("button")) {
		const videoContainer = document.getElementById("video-container");
		if (videoContainer) videoContainer.style.display = "none";
	}
	// Check if the click is outside the menu items and the toggle button
	if (
		!menuItems.contains(e.target) &&
		!menuToggle.contains(e.target) &&
		!hoverCard.contains(e.target)
	) {
		menuItems.classList.remove("active");
		hoverCard.classList.remove("active");
	}
});

// Prevent hiding when clicking inside the video container
document.getElementById("video-container")?.addEventListener("click", (e) => {
	e.stopPropagation();
});

// Hover effect and the link naviagation for the navbar

// Define card content for each menu item
const cardContent = {
	about: [
		{ text: "About CMRGI", link: "/sections/about/about_cmrgi/cmrgi.html" },
		{ text: "About CMRIT", link: "#vision" },
		{ text: "News", link: "#team" },
		{ text: "Leadership", link: "#history" },
		{ text: "Faculty", link: "#leadership" },
	],
	academics: [
		{ text: "All Programs", link: "#programs" },
		{ text: "Courses", link: "#departments" },
		{ text: "Departments", link: "#resources" },
		{ text: "Scholarships", link: "#research" },
		{ text: "CMRIT industry connect", link: "#workshops" },
		{ text: "CMRIT Center Of Exellence", link: "#seminars" },
		{ text: "E-learning", link: "#library" },
	],
	admissions: [
		{ text: "Undergraduate Admissions", link: "#apply" },
		{ text: "Postgraduate Admissions", link: "#eligibility" },
		{ text: "Doctoral Programmes", link: "#fees" },
		{ text: "Study in India", link: "#scholarships" },
	],
	campus: [
		{ text: "Library", link: "#facilities" },
		{ text: "Hostel", link: "#events" },
		{ text: "Sports", link: "#clubs" },
		{ text: "Life Skills", link: "#dining" },
		{ text: "Extra Curricular Activities", link: "#accommodation" },
		{ text: "Student Clubs", link: "#sports" },
		{ text: "Cultura", link: "#transport" },
		{ text: "Security", link: "#security" },
		{ text: "Health Services", link: "#health" },
		{ text: "Alumni Meetups", link: "#alumni" },
	],
	placements: [
		{ text: "Vision and goals", link: "#companies" },
		{ text: "Career Guidence", link: "#internships" },
		{ text: "Career Fairs", link: "#career-fairs" },
		{ text: "Student Programmes", link: "#success-stories" },
		{ text: "College Resources", link: "#recruitment" },
		{ text: "Campus Hiring", link: "#workshops" },
	],
	cells: [
		{ text: "Internships", link: "#entrepreneurship" },
		{ text: "IQAC", link: "#innovation" },
		{ text: "EE & C", link: "#cultural" },
		{ text: "IIC", link: "#sports-cell" },
		{ text: "AICTE", link: "#technical" },
		{ text: "Direct varify system", link: "#literary" },
		{ text: "Academic Enhancement cells", link: "#environmental" },
		{ text: "Women Cell", link: "#community" },
		{ text: "CMRIT CICC", link: "#health-wellness" },
		{ text: "SC-ST & OBC Cell", link: "#art-design" },
		{ text: "EDC Cell", link: "#art-design" },
		{ text: "FOSS Cell", link: "#art-design" },
	],
	rnd: [
		{
			text: "Know More",
			link: "https://sites.google.com/cmrit.ac.in/research-committee",
		},
	],
	testimonials: [{ text: "Know More", link: "#student-stories" }],
	media: [
		{ text: "News", link: "#news" },
		{ text: "Events", link: "#events" },
		{ text: "Social Media", link: "#social-media" },
		{ text: "Press Releases", link: "#press-releases" },
		{ text: "Photo Gallery", link: "#photo-gallery" },
		{ text: "Video Gallery", link: "#video-gallery" },
		{ text: "Newsletters", link: "#newsletters" },
		{ text: "Blogs", link: "#blogs" },
		{ text: "Campaigns", link: "#campaigns" },
		{ text: "Media Coverage", link: "#media-coverage" },
	],
	blog: [{ text: "Visit Blogs", link: "https://www.cmrit.ac.in/blog" }],
	nirf: [
		{ text: "Rankings", link: "#rankings" },
		{ text: "Criteria", link: "#criteria" },
		{ text: "Reports", link: "#reports" },
		{ text: "Achievements", link: "#achievements" },
		{ text: "Statistics", link: "#statistics" },
		{ text: "Institution Details", link: "#details" },
		{ text: "Goals", link: "#goals" },
		{ text: "Comparisons", link: "#comparisons" },
		{ text: "Feedback", link: "#feedback" },
		{ text: "Future Plans", link: "#future-plans" },
	],
};

// Add hover listeners
menuItemsLinks.forEach((item) => {
	item.addEventListener("mouseenter", () => {
		console.log("mouse hovered");
		const type = item.getAttribute("data-card-content");
		if (cardContent[type]) {
			console.log(type);
			hoverCard.innerHTML = `
			<div class="card-header">
		<h2 class="card-title">${type.toUpperCase()}</h2>
			</div>
				<div class="grid">

					${cardContent[type]
						.map(
							(content) =>
								`<a href="${content.link}" class="card-link">${content.text}</a>`
						)
						.join("")}
				</div>`;
			hoverCard.classList.add("active");
		}
	});
});

// Add hover listeners to the hover card
hoverCard.addEventListener("mouseenter", () => {
	hoverCard.classList.add("active");
});

hoverCard.addEventListener("mouseleave", () => {
	hoverCard.classList.remove("active");
});

//handling the page redirections
