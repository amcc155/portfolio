const menu = document.querySelector('#menu');
const dropdown = document.querySelector('.dropdown');
const navLinks = dropdown ? dropdown.querySelectorAll('a') : [];

function closeDropdown() {
  if (!dropdown || !menu) {
    return;
  }

  dropdown.classList.remove('dropdown-active');
  menu.setAttribute('aria-expanded', 'false');
}

function toggleDropdown(e) {
  if (!dropdown || !menu) {
    return;
  }

  e.stopPropagation();
  const isActive = dropdown.classList.toggle('dropdown-active');
  menu.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

if (menu) {
  menu.addEventListener('click', toggleDropdown);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeDropdown);
});

document.addEventListener('click', (e) => {
  if (!dropdown || !menu) {
    return;
  }

  if (!dropdown.contains(e.target) && !menu.contains(e.target)) {
    closeDropdown();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeDropdown();
  }
});

// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
let prevScrollpos = window.scrollY || window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.scrollY || window.pageYOffset;
  const socialContainer = document.querySelector('.social-container');

  if (!socialContainer) {
    return;
  }

  if (prevScrollpos > currentScrollPos || currentScrollPos < 40) {
    socialContainer.style.top = '1rem';
  } else {
    socialContainer.style.top = '-110px';
  }

  prevScrollpos = currentScrollPos;
};
