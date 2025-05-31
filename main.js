const hiddenContent = document.querySelector(".hidden-content");
const viewMoreBtn = document.getElementById("more");
const viewLessBtn = document.getElementById("less");

viewMoreBtn.addEventListener("click", function () {
  hiddenContent.style.display = "flex";
  viewMoreBtn.style.display = "none";
  viewLessBtn.style.display = "inline-block";
});

viewLessBtn.addEventListener("click", function () {
  hiddenContent.style.display = "none";
  viewMoreBtn.style.display = "inline-block";
  viewLessBtn.style.display = "none";
});

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
