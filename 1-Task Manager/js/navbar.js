// Changing the view of header while scrolling
const handleScrolling = () => {
    const headerElement = document.querySelector('header');
    const signBtnElement = document.querySelector('.sign-up-btn');
    const loginBtnElement = document.querySelector('.login-btn');

    if(window.scrollY > 5) {
        headerElement.classList.add('bg-white');
        headerElement.classList.add('bordered-element');
        signBtnElement.classList.add('btn-blue');
        loginBtnElement.classList.add('btn-grey');
    } else {
        headerElement.classList.remove('bg-white');
        headerElement.classList.remove('bordered-element');
        signBtnElement.classList.remove('btn-blue');
        loginBtnElement.classList.remove('btn-grey');
    }
}

window.addEventListener('scroll', handleScrolling)





// Show or hide menu in small screen devices
const handleMenu = (e) => {
    const bodyelement = document.body;
    const navbarElement = document.querySelector('.top-navbar');
    const emptyElement = document.querySelector('.empty-element');

    if(e.target.classList.contains('fa-bars')) {
        navbarElement.classList.add('show');
        emptyElement.classList.add('show');
        emptyElement.classList.add('show-empty-element');
        bodyelement.classList.add('disable-scroll');
    } else {
        navbarElement.classList.remove('show');
        emptyElement.classList.remove('show');
        emptyElement.classList.remove('show-empty-element');
        bodyelement.classList.remove('disable-scroll');
    }
}

document.querySelector('.menu-bar-btn > i').addEventListener('click', handleMenu);
document.querySelector('.menu-x-btn > i').addEventListener('click', handleMenu);
document.querySelector('.empty-element').addEventListener('click', handleMenu);