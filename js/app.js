const menu = document.querySelector('#menu');
const dropdown = document.querySelector('.dropdown');

let isDropDownActive = false;

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  e.target.classList.add('swirl-in-fwd');
  dropdown.style.opacity = '1';
  console.log('ok')
  isDropDownActive = true;

  // Add event listener to close dropdown when clicking outside
  document.addEventListener('click', closeDropdown);
});

function closeDropdown(e) {
  if (!dropdown.contains(e.target)) {
    dropdown.style.opacity = '0';
    isDropDownActive = false;

    // Remove the event listener after closing the dropdown
    document.removeEventListener('click', closeDropdown);
  }
}



//https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp 
var prevScrollpos = window.scrollY || window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.scrollY || window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.social-container').style.top = "0";
  } else {
    document.querySelector('.social-container').style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
