export const getMenu = () => {
  const navBtn = document.getElementById("nav-btn");
  const navList = document.getElementById("nav-list");

  navBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    navBtn.classList.toggle("modified");
  })
}