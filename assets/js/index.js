$(function () {
    $('body').addClass('loaded');
    $(".mobile-menu-search").hide()
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    $('.dropdown-submenu a.test').on("mouseover", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    function fixMenu() {
        let imgHeight = $(".header-img").height();
        if ($(window).scrollTop() > imgHeight) {
            $(".menu-section").css({ position: "fixed", top: "0" });
        } else {
            $(".menu-section").css({ position: "sticky", top: "0" });
        }
    }

    fixMenu();

    $(window).scroll(function () {
        fixMenu();
    })

    function makeResponsive() {
        if ($(window).width() < 400) {
            $('.col-item').removeClass('col-6');
            $('.col-item').addClass('col-12');
        } else {
            $('.col-item').addClass('col-6');
            $('.col-item').removeClass('col-12');
        }
    }

    makeResponsive();

    $(window).resize(function () {
        fixMenu();
        makeResponsive();
    })

});

