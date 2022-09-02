let menuBtn = document.querySelector('.header__wrapper_burger');
let menu = document.querySelector('.header__burger');
let cross = document.querySelector('.burger__cross')
menuBtn.addEventListener('click', function(){
    // menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
cross.addEventListener('click', function(){
    // menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})