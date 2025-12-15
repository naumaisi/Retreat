// main.js

// Highlight current page in navbar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkUrl = link.getAttribute("href");
    if (linkUrl === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Dynamic footer year
  const footerYear = document.getElementById("currentYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add('animated');
};

const hideScrollElement = (element) => {
  element.classList.remove('animated');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

