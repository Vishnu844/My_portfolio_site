const hamburger = document.querySelector(".mobile-nav i");
const navMenu = document.querySelector(".site-nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-menu");
});

document.querySelectorAll(".nav-Link").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("mobile-menu");
  })
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } // }else{
    //     entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
