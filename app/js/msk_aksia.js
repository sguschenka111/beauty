(function(){

var scrollBar = new Swiper('.mobile-salon-nav', {
       scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0
    });
    
var slider1 = new Swiper('.mobile-slider-salon', {
    pagination: '.amount',
    paginationType: 'fraction',
    nextButton: '.next',
    prevButton: '.prev'
});

var slider2 = new Swiper('.mobile-card-shares-container', {
    pagination: '.amount2',
    paginationType: 'fraction',
    nextButton: '.next2',
    prevButton: '.prev2'
});

}());
 
   
    