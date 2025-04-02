const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

// Skills section
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode;
    
    // Close all skills
    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].setAttribute('data-open', 'false');
    }
    
    // Open clicked skill
    if(itemClass.getAttribute('data-open') === 'false') {
        itemClass.setAttribute('data-open', 'true');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

// Initialize skills sections as closed
document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].setAttribute('data-open', 'false');
    }
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Add click event to scroll up button
document.getElementById("scroll-up").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Fireflies Animation
function createFireflies() {
  const colors = [
    '#ff3d3d', // red
    '#ff9d00', // orange
    '#ffff00', // yellow
    '#39ff14', // neon green
    '#00ffff', // cyan
    '#ff00ff', // magenta
    '#ff69b4', // pink
    '#9400d3', // purple
    '#4169e1', // royal blue
    '#32cd32'  // lime green
  ];
  
  const container = document.querySelector('.fireflies-container');
  const numberOfFireflies = 100; // Increased number of fireflies
  
  // Clear any existing fireflies
  container.innerHTML = '';

  for (let i = 0; i < numberOfFireflies; i++) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    
    // Random position across the entire viewport
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Wider range of movement
    const floatX1 = -100 + Math.random() * 200;
    const floatY1 = -100 + Math.random() * 200;
    const floatX2 = -100 + Math.random() * 200;
    const floatY2 = -100 + Math.random() * 200;
    
    // Varied timing
    const floatDuration = 15 + Math.random() * 25;
    const floatDelay = Math.random() * -30;
    const pulseDelay = Math.random() * -2;
    
    // Random color with slight preference for warmer colors
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    firefly.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      --float-duration: ${floatDuration}s;
      --float-delay: ${floatDelay}s;
      --pulse-delay: ${pulseDelay}s;
      --float-x1: ${floatX1}px;
      --float-y1: ${floatY1}px;
      --float-x2: ${floatX2}px;
      --float-y2: ${floatY2}px;
      --firefly-color: ${color};
    `;
    
    container.appendChild(firefly);
  }
}

// Create fireflies on load and window resize
document.addEventListener('DOMContentLoaded', createFireflies);
window.addEventListener('resize', createFireflies);
