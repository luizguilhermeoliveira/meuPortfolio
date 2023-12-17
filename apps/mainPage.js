const navUl = document.querySelector("#nav-ul");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  navUl.style.display = "flex";
  navUl.style.top = "0";
}

function close() {
  navUl.style.top = "-100%";
}
