const menu = document.querySelector('.menu');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
	toggleMenu();
});
menuClosed.addEventListener('click', () => {
	toggleMenu();
});
menuOverlay.addEventListener('click', () => {
	toggleMenu();
});
// Show & Hide Toggle Menu Function
function toggleMenu() {
	menu.classList.toggle('active');
	menuOverlay.classList.toggle('active');
}


////////////////////////cookie///////////////////
const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.cookie-ok');

okEl.addEventListener('click', () => {
  cookieEl.style.display = 'none';
});

let cookies = () => {
  if (!Cookies.get('hide-cookie')) {
    setTimeout(() => {
      cookieEl.style.display = 'block';
    }, 1000);
  }

  Cookies.set('hide-cookie', 'true', {
    expires: 30
  });
}


cookies();