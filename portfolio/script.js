const roles = ['Full Stack Developer', 'Tech Enthusiast', 'Open Source Contributor'];
let typingIndex = 0, charIndex = 0;
const typingElement = document.getElementById('typing');

function typeEffect() {
  if (charIndex < roles[typingIndex].length) {
    typingElement.textContent += roles[typingIndex][charIndex++];
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = '';
      charIndex = 0;
      typingIndex = (typingIndex + 1) % roles.length;
      typeEffect();
    }, 2000);
  }
}
typeEffect();

window.addEventListener('scroll', () => {
  const scrollBtn = document.querySelector('.scroll-top');
  scrollBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});
