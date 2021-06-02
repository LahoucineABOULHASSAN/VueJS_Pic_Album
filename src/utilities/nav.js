export const displayMenu = () => {
  const nav = document.querySelector("nav");
  const navBtn = document.querySelector(".nav-btn");
  nav.classList.toggle("responsive");
  navBtn.classList.toggle("times");
  navBtn.classList.toggle("bars");
};
export const scrollTo = (elem) => {
  const sticky = document.querySelector(elem).offsetTop;
  if (sticky) {
    document.body.scrollTop = sticky; // For Safari
    document.documentElement.scrollTop = sticky;
  }
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
export const stick = () => {
  const docNav = document.querySelector(".doc-nav");
  // const menu = document.querySelector(".menu");
  // const button = document.querySelector(".to-up");
  const sticky = docNav.offsetTop;
  if (window.pageYOffset >= sticky) {
    docNav.classList.add("sticky");
  } else {
    docNav.classList.remove("sticky");
  }
  // handle to up button
  // if (window.pageYOffset >= sticky * 1.2) {
  //   button.classList.add("fix");
  // } else {
  //   button.classList.remove("fix");
  // }
};
