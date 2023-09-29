function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

function scrollToTop() {
  window.scrollTo(0, 0)
}

function openNewWindow(url) {
  window.open(url, '_blank');
}