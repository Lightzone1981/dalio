new Swiper('.service-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPreview: 2,
    spaceBetween: 20,
}); 

new Swiper('.projects-slider', {
 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
}); 

new Swiper('.projects__nav-slider', {
    
    slidesPerView: 3.2,
});


new Swiper('.reviews-slider', {
 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1.1,
    spaceBetween: 20,
}); 

const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {

}