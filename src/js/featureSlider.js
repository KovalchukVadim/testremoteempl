const swiperFeature = new Swiper(".mySwiper1", {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".feature-right-btn",
        prevEl: ".feature-left-btn",
    },
});