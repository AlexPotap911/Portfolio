const darkModeBtn = document.querySelector('.dark-mode-btn');
const scrollOnProgects = document.querySelector('#projects-link');
const projects = document.querySelector('#projects');

// Checking dark mode in localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  darkModeBtn.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// Turning on dark mode by button

darkModeBtn.onclick = function () {
  darkModeBtn.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');
  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
};

// Scroll next

scrollOnProgects.addEventListener('click', (e) => {
  e.preventDefault();
  projects.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});

// Current link

// let currentLink = location.pathname;
// document.querySelectorAll(".nav__menu-list a").forEach((item) => {
//   let linkHref = item.getAttribute("href");

//   if (currentLink === linkHref) {
//     item.classList.add("nav__menu-link--active");
//   }

// });
