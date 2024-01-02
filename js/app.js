const menu = document.querySelector('#menu')
const dropdown = document.querySelector('.dropdown')
let isDropDownActive

menu.addEventListener('click', (e) => {
    e.target.classList.add('swirl-in-fwd')

    dropdown.style.display = 'block'
    isDropDownActive = true
})

if (isDropDownActive) {
    console.log('active')
    document.addEventListener('click', () => {
        dropdown.style.display = 'none'
        isDropDownActive = false;

    })
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
