let filterFormat = document.querySelector('.filter__format_item');
let filterFormat2 = document.querySelector('.filter__format_item2');
let filterFormat3 = document.querySelector('.filter__format_item3');
let filterFormat4 = document.querySelector('.filter__format_item4');
let filterFormat5 = document.querySelector('.filter__format_item5');

filterFormat.addEventListener('click', function(){
    filterFormat.classList.toggle('active');
})
filterFormat2.addEventListener('click', function(){
    filterFormat2.classList.toggle('active');
})
filterFormat3.addEventListener('click', function(){
    filterFormat3.classList.toggle('active');
})
filterFormat4.addEventListener('click', function(){
    filterFormat4.classList.toggle('active');
})
filterFormat5.addEventListener('click', function(){
    filterFormat5.classList.toggle('active');
})

let closeFormTitle = document.querySelector('.close_title');
let filterAllFormat = document.querySelector('.filter__format_wrapper');
let sliderRange = document.querySelector('.filter__slider_range');
let closeSlideTitle = document.querySelector('.close_range_title');

closeFormTitle.addEventListener('click', function(){
    filterAllFormat.classList.toggle('active');
    closeFormTitle.classList.toggle('active');
})
closeSlideTitle.addEventListener('click', function(){
    sliderRange.classList.toggle('active');
    closeSlideTitle.classList.toggle('active');
})

let closeArticlBlog = document.querySelector('.close_title_format2');
let arcticalBtn = document.querySelector('.item__articl_btn');
let blogBtn = document.querySelector('.item__blog_btn');
let arcticalBlog = document.querySelector('.filter__artical_blog');

closeArticlBlog.addEventListener('click', function(){
    closeArticlBlog.classList.toggle('active');
    arcticalBlog.classList.toggle('active');
})
arcticalBtn.addEventListener('click', function(){
    arcticalBtn.classList.toggle('active');
})
blogBtn.addEventListener('click', function(){
    blogBtn.classList.toggle('active');
})

let filterItem = document.querySelector('.filter_item');
let views = document.querySelector('.filter__views');
let rating = document.querySelector('.filter__rating');
let er = document.querySelector('.filter__er');
let subscribers = document.querySelector('.filter__subscribers');
let price = document.querySelector('.filter__price');
let add = document.querySelector('.filter__add');
let cpv = document.querySelector('.filter__cpv');

filterItem.addEventListener('click', function(){
    views.classList.toggle('active');
})
rating.addEventListener('click', function(){
    rating.classList.toggle('active');
})
er.addEventListener('click', function(){
    er.classList.toggle('active');
})
subscribers.addEventListener('click', function(){
    subscribers.classList.toggle('active');
})
price.addEventListener('click', function(){
    price.classList.toggle('active');
})
add.addEventListener('click', function(){
    add.classList.toggle('active');
})
cpv.addEventListener('click', function(){
    cpv.classList.toggle('active');
})

let filterMobile = document.querySelector('.content__mob_filter');
let filtertOpen = document.querySelector('.wrapper_content');
let filterLine = document.querySelector('.line_filter');
let contentClose = document.querySelector('.content');
let closeFilter = document.querySelector('.filter__close');

filterMobile.addEventListener('click', function(){
    filtertOpen.classList.toggle('active');
    filterLine.classList.toggle('active');
    contentClose.classList.toggle('active');
    closeFilter.classList.toggle('active');
})
closeFilter.addEventListener('click', function(){
    filtertOpen.classList.toggle('active');
    filterLine.classList.toggle('active');
    contentClose.classList.toggle('active');
    closeFilter.classList.toggle('active');
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

let menuBurger = document.querySelector('.header__burger_btn');
let navbarOpen = document.querySelector('.navbar');
let titleOpen = document.querySelector('.menu_mb__title');
let headerBalanceOpen = document.querySelector('.header__balance_logout_mb');

menuBurger.addEventListener('click', function(){
    navbarOpen.classList.toggle('active');
    contentClose.classList.toggle('active');
    titleOpen.classList.toggle('active');
    headerBalanceOpen.classList.toggle('active');
})

$(".slider_range-er").slider({
    min: 0,
    max: 100,
    values: [0, 50],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".slider_range-input-er-left").val(ui.values[ 0 ]);   
        $(".slider_range-input-er-right").val(ui.values[ 1 ]);  
    }    
});
$(".slider_range-input-er-left").val($(".slider_range-er").slider("values", 0));
$(".slider_range-input-er-right").val($(".slider_range-er").slider("values", 1));
$(".slider_range-container-er input").change(function() {
    var input_left = $(".slider_range-input-er-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".slider_range-er").slider("option", "min"),
    where_right = $(".slider_range-er").slider("values", 1),
    input_right = $(".slider_range-input-er-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".slider_range-er").slider("option", "max"),
    where_left = $(".slider_range-er").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".slider_range-input-er-left").val(input_left); 
    $(".slider_range-input-er-right").val(input_right); 
    if (input_left != where_left) {
        $(".slider_range-er").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".slider_range-er").slider("values", 1, input_right);
    }
});

$(".slider_range-subscribers").slider({
    min: 90,
    max: 1000000,
    values: [90, 500090],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".slider_range-input-subscribers-left").val(ui.values[ 0 ]);   
        $(".slider_range-input-subscribers-right").val(ui.values[ 1 ]);  
    }    
});
$(".slider_range-input-subscribers-left").val($(".slider_range-subscribers").slider("values", 0));
$(".slider_range-input-subscribers-right").val($(".slider_range-subscribers").slider("values", 1));
$(".slider_range-container-subscribers input").change(function() {
    var input_left = $(".slider_range-input-subscribers-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".slider_range-subscribers").slider("option", "min"),
    where_right = $(".slider_range-subscribers").slider("values", 1),
    input_right = $(".slider_range-input-subscribers-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".slider_range-subscribers").slider("option", "max"),
    where_left = $(".slider_range-subscribers").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".slider_range-input-subscribers-left").val(input_left); 
    $(".slider_range-input-subscribers-right").val(input_right); 
    if (input_left != where_left) {
        $(".slider_range-subscribers").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".slider_range-subscribers").slider("values", 1, input_right);
    }
});