// Navbar 
let menuBar = document.querySelector('#menu-bar');
// console.log(menuBar);

const showHideMenu = () => {
    let navbar = document.querySelector('#navbar');
    let msgBtn = document.querySelector('#msg-btn');
    let icon = menuBar.querySelector('.fa-solid')

    navbar.classList.toggle('active');
    msgBtn.classList.toggle('active');

    // icon.classList.contains('fa-bars ') 
    //     ?   icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark');
    //     :   icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark');
    // // console.log(navbar.classList);

    icon.classList.contains('fa-bars') 
        ? (
            icon.classList.remove('fa-bars'),
            icon.classList.add('fa-xmark')
          )
        : (
            icon.classList.add('fa-bars'),
            icon.classList.remove('fa-xmark')
          );

}

menuBar.addEventListener('click', showHideMenu);