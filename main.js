const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i"); // Assuming the icon is an <i> tag inside the button
const navLinks = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
