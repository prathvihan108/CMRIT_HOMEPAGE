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
		{ text: "About CMRIT", link: "/sections/about/about_cmrit/cmrit.html" },

		{ text: "Leadership", link: "/sections/about/ledership/leadership.html" },
		{ text: "Faculty", link: "/sections/about/faculty/faculty.html" },
	],
	academics: [
		{
			text: "All Programs",
			link: "/sections/academics/programmes/programmes.html",
		},
		{ text: "Courses", link: "#departments" },
		{ text: "Departments", link: "/sections/undesigned/ud.htmls" },
		{
			text: "Scholarships",
			link: "/sections/academics/scholarships/scholarships.html",
		},

		{
			text: "CMRIT Center Of Exellence",
			link: "/sections/academics/coe/coe.html",
		},
		{
			text: "E-learning",
			link: "https://sites.google.com/cmrit.ac.in/covid-19response/details/remote-classroom",
		},
	],
	admissions: [
		{
			text: "Undergraduate Admissions",
			link: "/sections/admissions/ug/ug.html",
		},
		{
			text: "Postgraduate Admissions",
			link: "/sections/admissions/pg/pg.html",
		},
		{ text: "Doctoral Programmes", link: "/sections/admissions/dp/dp.html" },
		{
			text: "Study in India",
			link: "/sections/admissions/study_in_india/si.html",
		},
	],
	campus: [
		{ text: "Library", link: "http://203.201.63.46/library/" },
		{ text: "Hostel", link: "/sections/campus/hostel/hostel.html" },
		{ text: "Sports", link: "/sections/campus/sports/sports.html" },
		{
			text: "Life Skills",
			link: "/sections/campus/lifeskills/lifeskills.html",
		},
		{
			text: "Extra Curricular Activities",
			link: "/sections/campus/eca/eca.html",
		},
		{
			text: "Student Clubs",
			link: "https://sites.google.com/cmrit.ac.in/cmritstudentclubs/events",
		},
		{ text: "Cultura", link: "https://cmritcultura.com/" },
		{
			text: "Competation participation policy",
			link: "https://sites.google.com/cmrit.ac.in/tcem/home",
		},
	],
	placements: [
		{ text: "Career Guidence", link: "/sections/plcements/cg/cg.html" },

		{
			text: "Student Programmes",
			link: "/sections/plcements/sp/sp.html",
		},
		{ text: "College Resources", link: "/sections/plcements/cr/cr.html" },
		{ text: "Campus Hiring", link: "/sections/plcements/ch/ch.html" },
		{
			text: "Contact",
			link: "/sections/plcements/contact/contact.html",
		},
	],
	cells: [
		{
			text: "Internships",
			link: "https://sites.google.com/cmrit.ac.in/internshipcell",
		},
		{
			text: "IQAC",
			link: "https://sites.google.com/cmrit.ac.in/internalqualityassurancecell/home",
		},
		{
			text: "EE & C",
			link: "https://sites.google.com/cmrit.ac.in/eec-cell/home",
		},
		{ text: "IIC", link: "/sections/cells/iic/iic.html" },
		{ text: "AICTE", link: "/sections/cells/aicte/aicte.html" },

		{
			text: "Academic Enhancement cells",
			link: "https://sites.google.com/cmrit.ac.in/academic-enhancement-cell",
		},
		{
			text: "Women Cell",
			link: "https://sites.google.com/view/woman-cell/homey",
		},
		{
			text: "CMRIT CICC",
			link: "/sections/cells/cicc/cicc.html",
		},
		{
			text: "SC-ST & OBC Cell",
			link: "https://sites.google.com/cmrit.ac.in/sc-st-obc-cell/home",
		},
		{
			text: "EDC Cell",
			link: "https://sites.google.com/cmrit.ac.in/edc-cell/home",
		},
		{
			text: "FOSS Cell",
			link: "https://sites.google.com/cmrit.ac.in/fosscell-cmrit",
		},
	],
	rnd: [
		{
			text: "Know More",
			link: "https://sites.google.com/cmrit.ac.in/research-committee",
		},
	],
	testimonials: [
		{ text: "Alumini", link: "/sections/testinomials/tsn/tsn.html" },
	],
	media: [
		{ text: "News", link: "/sections/undesigned/ud.html" },
		{ text: "Events", link: "/sections/undesigned/ud.html" },
		{ text: "Social Media", link: "/sections/undesigned/ud.html" },
		{ text: "Press Releases", link: "/sections/undesigned/ud.htmls" },
		{ text: "Photo Gallery", link: "/sections/undesigned/ud.html" },
		{ text: "Video Gallery", link: "/sections/undesigned/ud.html" },
	],

	nirf: [{ text: "Rankings", link: "/sections/nirf/nirf.html" }],
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

//for button on the header

document.getElementById("btn-id").addEventListener("click", function () {
	window.location.href = "/sections/about/about_cmrit/cmrit.html";
});
