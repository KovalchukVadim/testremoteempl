const swiperTour = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});

// var swiperSecondTour = new Swiper(".mySwiper3", {
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     spaceBetween: 10,
//     slidesPerView: 2,
//     // autoHeight: true,
//     // freeMode: true,
//     // watchSlidesProgress: true,
// });

const swiperContainer = document.querySelector(".mySwiper2");

swiperContainer.addEventListener("mouseenter", function() {
    swiperTour.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", function() {
    swiperTour.autoplay.start();
});


// const slider = document.querySelector('.swiper-wrapper1');
// let count = 0;

// setInterval(() => {
//     if (count < 3) {
//         count++;
//     } else {
//         count = 0;
//     }
//     slider.style.transform = `translateX(-${count * 25}%)`;
// }, 2000);