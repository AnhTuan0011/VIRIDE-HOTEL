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