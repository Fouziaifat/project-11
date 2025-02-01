//preview.themeforest.net/item/elessi-woocommerce-ajax-wordpress-theme/full_screen_preview/20968615

// Select relevant elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuWrapper = document.querySelector(".menu-wrapper");

// Toggle the menu for mobile view
hamburgerMenu.addEventListener("click", () => {
  menuWrapper.classList.toggle("active"); // Add/remove 'active' class to show/hide menu
  hamburgerMenu.classList.toggle("open"); // Toggle the hamburger icon's appearance
});

// Close the menu when clicking outside (optional)
document.addEventListener("click", (e) => {
  if (!menuWrapper.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    menuWrapper.classList.remove("active"); // Close the menu if clicked outside
    hamburgerMenu.classList.remove("open");
  }
});

// Add sticky class to navbar on scroll
const headerPage = document.querySelector(".header-page");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerPage.classList.add("scrolled"); // Add 'scrolled' class when the page is scrolled
  } else {
    headerPage.classList.remove("scrolled"); // Remove 'scrolled' class when at the top
  }
});

// counter
document.querySelectorAll(".counter").forEach((counterEl) => {
  const target = +counterEl.dataset.num; // Get target number
  const duration = +counterEl.dataset.time; // Get total duration
  let count = 0;
  const step = Math.ceil(duration / target); // Calculate step time

  const updateCounter = setInterval(() => {
    counterEl.textContent = ++count;
    if (count >= target) clearInterval(updateCounter);
  }, step);
});

// const counterEl = document.querySelector(".counter");
// let counterNumber = 0;

// const updateCounter = setInterval(function () {
//   counterNumber++;
//   counterEl.textContent = counterNumber;
//   if (counterNumber >= 40) {
//     clearInterval(updateCounter);
//   }
// }, 1);
