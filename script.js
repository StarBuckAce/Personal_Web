var typed = new Typed(".multiple-text",{
  strings: ["Student","ContentWriter","Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
