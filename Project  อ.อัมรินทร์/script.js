// ========== เข้าสู่เว็บไซต์ ==========
const enterBtn = document.getElementById('enter-site-btn');
const welcome = document.getElementById('welcome-screen');
const mainSite = document.getElementById('main-site');

enterBtn.addEventListener('click', () => {
  welcome.classList.add('hidden');
  mainSite.classList.remove('hidden');
  revealSections(); // trigger animation หลังเข้า
});

// ========== Toggle Language ==========
let currentLang = 'th';

document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'th' ? 'en' : 'th';
  const langData = currentLang === 'th' ? th : en;

  for (const key in langData) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'H1' || el.tagName === 'H2') {
        el.innerHTML = langData[key]; // รองรับ <br>
      } else {
        el.textContent = langData[key];
      }
    }
  }
});

// ========== Scroll Reveal Effect ==========
const sections = document.querySelectorAll('.section');

function revealSections() {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add('reveal');
    } else {
      section.classList.remove('reveal');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// ========== Highlight Sidebar Menu (ใหม่) ==========
const menuLinks = document.querySelectorAll('.side-menu nav ul li a');

function highlightActiveMenu() {
  let scrollPos = window.scrollY + 160;

  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;

    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveMenu);

// ========== Smooth Scroll Click Menu (นุ่มยิ่งขึ้น) ==========
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});