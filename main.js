const sidebar = document.querySelector(".sidebar");
const sidebarInner = document.querySelector(".sidebar-inner");

const openSidebarBtn = document.querySelector(".ham-menu");
const closeSidebarBtn = document.querySelector(".close-btn");

function openSidebar() {
  sidebar.classList.add("show-sidebar");
  setTimeout(() => {
    sidebarInner.style.opacity = "1";
  }, 300);
}

function closeSidebar() {
  sidebarInner.style.opacity = "0";
  setTimeout(() => {
    sidebar.classList.remove("show-sidebar");
  }, 300);
}

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);
