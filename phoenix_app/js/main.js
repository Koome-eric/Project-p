$(window).on("load",function() {
/*------------preloader-------------------------*/
  $(".preloader").fadeOut("slow");
});


$(document).ready(function (){
/*----------------Navbar shrink---------------------*/
$(window).on("scroll", function(){
    if($(this).scrollTop() > 90){
        $(".navbar").addClass("navbar-shrink");
    }
    else{
        $(".navbar").removeClass("navbar-shrink");
    }
});

   /*----------------------Features corousel----------------------*/
   $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});


 /*----------------------Testimonials carousel----------------------*/
 $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

/*----------------------Blogs carousel----------------------*/
 $('.blog-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});
 

/*-------------------------Page scrolling- Scrollit----------- */
$.scrollIt({
    topOffset: -50
});

/*------------------------Navbar Collapse----------------- */
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
});
/*-----------------------Toggle theme---Light and dark mode----- */
function toggleTheme(){
    if(localStorage.getItem("shala-theme") !== null){
        if(localStorage.getItem("shala-theme") === "dark"){
           $("body").addClass("dark");
        }
        else{
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
       localStorage.setItem("shala-theme","dark");
    }
    else{
       localStorage.setItem("shala-theme","light");
    }
    updateIcon();
});
function updateIcon(){
    if($("body").hasClass("dark")){
       $(".toggle-theme i").removeClass("fa-moon");
       $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}

});


/*---------------------- slider ------------------------*/

var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//image slider autoplay navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            });

         slides[i].classList.add('active');
         btns[i].classList.add('active');
         i++;

         if(slides.length == i){
             i = 0;
         }
         if(i >= slides.length){
             return;
         }
         repeater();

        }, 6000);
    }
    repeater();
}
repeat();


