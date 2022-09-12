let promoBtn = document.querySelector ('.promo__btn');
let promoBtnDs = document.querySelector('.promo__btn_ds');
let promoText = document.querySelector('.promo__text');

promoBtnDs.addEventListener('click', function(){
    promoBtnDs.classList.toggle('active');
    promoText.classList.toggle('active');
})

promoBtn.addEventListener('click', function(){
    promoBtn.classList.toggle('active');
})

let edit = document.querySelector ('.edit_btn');

edit.addEventListener('click', function(){
    company.removeAttribute('readonly');
    company.classList.toggle('active')
})

let upLine = document.querySelector('.card__border');
let statisticsMobile = document.querySelector('.card__statistics');
let statisticsBtn = document.querySelector('.btn_mb__wrapper');

statisticsBtn.addEventListener('click', function(){
    statisticsBtn.classList.toggle('active');
    statisticsMobile.classList.toggle('active');
    upLine.classList.toggle('active');
})

let upLine2 = document.querySelector('.card__border_2');
let statisticsMobile2 = document.querySelector('.card__statistics_2');
let statisticsBtn2 = document.querySelector('.btn_mb__wrapper_2');

statisticsBtn2.addEventListener('click', function(){
    statisticsBtn2.classList.toggle('active');
    statisticsMobile2.classList.toggle('active');
    upLine2.classList.toggle('active');
})

let contentClose = document.querySelector('.content');
let menuBurger = document.querySelector('.header__burger_btn');
let navbarOpen = document.querySelector('.navbar');
let titleOpen = document.querySelector('.menu_mb__title');
let headerBalanceOpen = document.querySelector('.header__balance_logout_mb');
let filterClose = document.querySelector('.wrapper_filter_mobile');

menuBurger.addEventListener('click', function(){
    navbarOpen.classList.toggle('active');
    contentClose.classList.toggle('active');
    titleOpen.classList.toggle('active');
    headerBalanceOpen.classList.toggle('active');
    filterClose.classList.toggle('active');
})