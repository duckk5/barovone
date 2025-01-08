$(document).ready(function() {

    /* 메인 배너 스와이퍼 */
    var swiper = new Swiper(".mainSwiper", {
        
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 60,

        // Infinite loop
        loop: true,
        initialSlide: 0, // 초기 슬라이드
        loopedSlides: 5, // loop 시 복제 슬라이드 수 (실제 슬라이드 개수와 동일하게 설정)

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
            }
        },
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {

            1440: {
                slidesPerView: 1.17647,  //브라우저가 1280보다 클 때
                spaceBetween: 80,
            },
        },
        
    });

    /* 카테고리 클릭 이벤트 */
    $(".categorySwiper .swiper-slide").click(function() {
        $(this).siblings(".swiper-slide").removeClass("on");
        $(this).addClass("on");

        return false;
    });


    /* 컨텐츠 스와이퍼 */
    var swiper = new Swiper(".conSwiper", {

        slidesPerView: "auto",
        spaceBetween: 35,

        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    var swiper = new Swiper(".categorySwiper", {

        slidesPerView: "auto",
        spaceBetween: 10,

        breakpoints: {

            800: {
                spaceBetween: 20,
            },
        },

    });

});