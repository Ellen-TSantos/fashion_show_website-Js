function changeActive(event) {
  let links = document.querySelectorAll(".nav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  let clickedLink = event.currentTarget;
  clickedLink.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav a");
  let currentPage = window.location.pathname;

  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
