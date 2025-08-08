// Typing animation for role text
const text = document.querySelector(".text-animation span");
const roles = ["Web Developer", "Cybersecurity Student", "Programmer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex % roles.length];
  let displayed = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  text.textContent = displayed;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex++;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
