function setupToggle(
  viewMoreId,
  viewLessId,
  contentClass,
  displayType = "flex"
) {
  const hiddenContent = document.querySelector(contentClass);
  const viewMoreBtn = document.getElementById(viewMoreId);
  const viewLessBtn = document.getElementById(viewLessId);

  viewMoreBtn.addEventListener("click", () => {
    hiddenContent.style.display = displayType;
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block";
  });

  viewLessBtn.addEventListener("click", () => {
    hiddenContent.style.display = "none";
    viewMoreBtn.style.display = "inline-block";
    viewLessBtn.style.display = "none";
  });
}

// Call the reusable function for each section
setupToggle("more", "less", ".hidden-content");
setupToggle("more1", "less1", ".more-feedback");
setupToggle("more2", "less2", ".more-book-keeping");

//sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("show");
}

//slider
const slides = document.querySelectorAll(".testimony");
const dotContainer = document.getElementById("dotContainer");
let currentSlide = 0;

// Generate dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(autoSlide, 5000);
