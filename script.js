const navbar = document.getElementById("navb");
const humburger = document.getElementById("hump");

humburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  humburger.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  navbar.classList.remove("active");
  humburger.classList.remove("active");
});
