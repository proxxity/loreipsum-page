// header-top__mobile
// header-wrapper__mobile
// nav-icon--active

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const navTop = document.querySelector('.header-top');
const navWrapper = document.querySelector('.header-wrapper');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    navTop.classList.toggle('header-top__mobile');
    navWrapper.classList.toggle('header-wrapper__mobile')
    document.body.classList.toggle('no-scroll');
}
