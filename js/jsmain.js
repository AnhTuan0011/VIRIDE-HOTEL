$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $('.homelist').addClass('active');
    }
    else {
        $('.homelist').removeClass('active');
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.navbar-nav').addClass('test');
    }
    else {
        $('.navbar-nav').removeClass('test');
    }
})

$(document).ready(function() {
    $('.toggle').click(function() {
        $('ul.navbar-nav').slideToggle();
    });
})

// 

$(document).ready(function() {
    $('.slide__st__rooms').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items: 1
            },
            991:{
                items: 2
            },
            1300:{
                items: 2
            }
        }
    })
})


