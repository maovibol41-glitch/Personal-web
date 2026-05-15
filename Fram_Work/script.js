// Smooth scroll for menu links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typing effect
const text = "Web Developer";
let index = 0;
const span = document.querySelector(".hero-text span");

function typingEffect() {
  if (index < text.length) {
    span.textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, 150);
  }
}

span.textContent = "";
typingEffect();

// Button click alert
document.querySelector(".btn").addEventListener("click", () => {
  alert("Welcome to my portfolio website!");
});
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-text");
  hero.style.opacity = 1;
  hero.style.transform = "translateY(0)";
});
