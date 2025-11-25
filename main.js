const hamMenu = document.querySelector(".ham-menu");
const navItems = document.querySelector(".nav-items");

hamMenu.addEventListener("click", menuActive);

console.log(hamMenu)
console.log(navItems)

function menuActive() {
  navItems.classList.toggle("active");
}
