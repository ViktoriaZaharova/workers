$(document).ready(function() {

    // $(window).on('load resize', function() {
    //     if ($(window).width() < 767) {
    //         $('.menu-item-has-children .icon-arrow').on('click', function () {
    //             $(this).siblings('.submenu').slideToggle();
    //         });
    //     }
    // });



    $('.workers-slider').owlCarousel({
        items: 2,
        dots: true,
        nav: true,
        navText: ['', ''],
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            1170 : {
                items : 2
            }
        }
    });

    $('.tab-content .panel-heading .panel-title a').click(function () {
        $('.tab-content .panel-heading .panel-title a').removeClass('open');
        $(this).addClass('open');
    });

    // owl active
    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".popular-services__content");
        if (checkWidth > 767) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 766) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items : 1,
                slideSpeed : 700,
                dots: true,
                loop: true,
                nav: false,
                autoHeight:true
            });
        }
    }

    postsCarousel();
    $(window).resize(postsCarousel);
});
