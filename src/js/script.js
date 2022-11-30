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
    slidesPreview: 2,
    spaceBetween: 20,
}); 


const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {

}




   // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },