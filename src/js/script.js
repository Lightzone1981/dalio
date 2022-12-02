new Swiper('.service-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
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
    
    breakpoints: {
        768: {
             slidesPerView: 5,
        }
    }
});


new Swiper('.reviews-slider', {
 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev'
    },
    slidesPerView: 1.1,
    spaceBetween: 20,
}); 

new Swiper('.blog-slider', {
	pagination: {
		 el: '.swiper-pagination',
		 clickable: true,
	},
	slidesPerView: 1,
	spaceBetween: 20,
}); 

const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {

}