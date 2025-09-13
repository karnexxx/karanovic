const navbarToggle = document.querySelector(".navbar-toggle")
const navbarMenu = document.querySelector(".links")
const menuLinks = document.querySelectorAll(".links a"); //

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
})

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});