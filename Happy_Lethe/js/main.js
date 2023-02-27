$(function($){
    $('.bg-swicher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });
    $('.slider').slick({
        arrows:true,
        autoplay:false,
        dots: true,
        slidesToShow:4,
        infinite:true,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint: 480, 
                settings:{
                slidesToShow: 1,
                },
            },
        ],
    });
});
