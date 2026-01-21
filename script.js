// Typing Effect
const typedText = document.querySelector(".typing");
const text = "Computer Engineering Student";
let index = 0;

function typeEffect() {
  if(index < text.length){
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuLinks.classList.toggle('open');
});




// Animate skill bars on scroll
const skillsSection = document.querySelector(".skills");
const skillFills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if(sectionTop < screenHeight - 100){
    skillFills.forEach(fill => {
      if(fill.classList.contains("cplus")) fill.style.width = "85%";
      if(fill.classList.contains("python")) fill.style.width = "70%";
      if(fill.classList.contains("html")) fill.style.width = "75%";
      if(fill.classList.contains("css")) fill.style.width = "50%";
    });
  }
});
