const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link"),
  header = document.getElementById("header");

let lastScrollY = window.scrollY;

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Close menu when nav link is clicked */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/* Hide header on scroll down, show on scroll up */
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add("hidden-header");
  } else {
    // Scrolling up
    header.classList.remove("hidden-header");
  }
  lastScrollY = window.scrollY;
});
const projects = [
  {
    name: "Current Project 1",
    location: "1-2BHK",
    size: "THANE, 400023",
    image: "Audumbar.png",
    url: "Brochure/6_Audumbar_Brochure.pdf",
    section: "currentProjectsSection",
  },
  // {
  //   name: "Current Project 1",
  //   location: "2-3BHK",
  //   size: "THANE, 400023",
  //   image: "prj2.png", // Using only the image file name
  //   url: "https://example.com/project-1",
  //   section: "currentProjectsSection",
  // },
  // {
  //   name: "Current Project 1",
  //   location: "2-3BHK",
  //   size: "THANE, 400023",
  //   image: "prj3.png", // Using only the image file name
  //   url: "https://example.com/project-1",
  //   section: "currentProjectsSection",
  // },
  // {
  //   name: "Current Project 1",
  //   size: "2-3BHK",
  //   size: "THANE, 400023",
  //   image: "prj4.png", // Using only the image file name
  //   url: "https://example.com/project-1",
  //   section: "currentProjectsSection",
  // },
  {
    name: "OM Anand",
    location: "THANE, 400604",
    size: "Luiswadi Wagle Estate",
    image: "prj1.png", // Using only the image file name
    url: "/",
    section: "upcomingProjectsSection",
  },
  {
    name: "Narsinha",
    location: "THANE, 400602",
    size: "Pachpakhadi",
    image: "prj2.png", // Using only the image file name
    url: "/",
    section: "upcomingProjectsSection",
  },
  {
    name: "Shreyas",
    location: "THANE -E, 400603",
    size: "KOPARI",
    image: "prj3.png", // Using only the image file name
    url: "/",
    section: "upcomingProjectsSection",
  },
  {
    name: "SRA",
    location: "THANE, 400604",
    size: "Luiswadi Wagle Estate",
    image: "prj4.png", // Using only the image file name
    url: "/",
    section: "upcomingProjectsSection",
  },
  {
    name: "Dev Adi",
    location: "THANE, 411044",
    size: "Sainath Nagar Luiswadi",
    image: "prj5.png", // Using only the image file name
    url: "/",
    section: "upcomingProjectsSection",
  },
];

projects.forEach((project) => {
  const cardSection = document.getElementById(project.section);
  const card = document.createElement("div");
  card.classList.add("card");

  const cardForm = document.createElement("div");
  cardForm.classList.add("card_form");

  // Dynamically set the background image using the file name
  cardForm.style.backgroundImage = `url(assets/${project.image})`;

  const span = document.createElement("span");
  span.textContent = project.name;
  cardForm.appendChild(span);

  const cardData = document.createElement("div");
  cardData.classList.add("card_data");

  const dataDiv = document.createElement("div");
  dataDiv.classList.add("data");
  dataDiv.style.display = "flex";

  const textDiv = document.createElement("div");
  textDiv.classList.add("text");

  const labelM = document.createElement("label");
  labelM.classList.add("text_m");
  labelM.textContent = project.name;

  const cubeDiv = document.createElement("div");
  cubeDiv.classList.add("cube", "text_s");

  const labelFront = document.createElement("label");
  labelFront.classList.add("side", "front");
  labelFront.textContent = project.size;

  const labelTop = document.createElement("label");
  labelTop.classList.add("side", "top");
  labelTop.textContent = project.location;

  cubeDiv.appendChild(labelFront);
  cubeDiv.appendChild(labelTop);

  textDiv.appendChild(labelM);
  textDiv.appendChild(cubeDiv);

  dataDiv.appendChild(textDiv);
  cardData.appendChild(dataDiv);

  const showMoreSpan = document.createElement("span");
  showMoreSpan.title = "Show more details";
  showMoreSpan.textContent = "Show more";

  // Add click event to navigate to the project's URL if it's provided
  showMoreSpan.addEventListener("click", () => {
    if (project.url) {
      window.location.href = project.url;
    } else {
      alert("No URL provided for this project.");
    }
  });

  cardData.appendChild(showMoreSpan);

  card.appendChild(cardForm);
  card.appendChild(cardData);

  cardSection.appendChild(card);
});
