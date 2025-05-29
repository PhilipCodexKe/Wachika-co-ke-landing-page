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
