export const displayMenu = () => {
  const nav = document.querySelector("nav");
  const navBtn = document.querySelector(".nav-btn");
  nav.classList.toggle("responsive");
  navBtn.classList.toggle("times");
  navBtn.classList.toggle("bars");
};
export const scrollTo = (elem) => {
  const sticky = document.querySelector(elem).offsetTop;
  document.body.scrollTop = sticky; // For Safari
  document.documentElement.scrollTop = sticky;
};
export const isActive = (event) => {
  const navLinks = document.querySelectorAll(".about-tag");
  navLinks.forEach((elem) => {
    if (elem === event.target || elem === event.target.parentElement) {
      elem.classList.add("active-tag");
    } else {
      elem.classList.remove("active-tag");
    }
  });
};
export const isDocNavActive = (event) => {
  const navLinks = document.querySelectorAll(".doc-nav-item");
  navLinks.forEach((elem) => {
    if (elem === event.target || elem === event.target.parentElement) {
      elem.classList.add("doc-nav-active");
    } else {
      elem.classList.remove("doc-nav-active");
    }
  });
};
