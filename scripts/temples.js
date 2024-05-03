const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener( 'click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});


const year = new Date();
document.querySelector('#current-year').innerHTML = year.getFullYear();
document.querySelector('#last-updated-date').innerHTML = document.lastModified;