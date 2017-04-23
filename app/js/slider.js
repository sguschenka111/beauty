(function() {

var swiper = new Swiper('.mobile-main-slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper2 = new Swiper('.mobile-card-shares-container', {
    pagination: '.amount1',
    paginationType: 'fraction',
    nextButton: '.next1',
    prevButton: '.prev1'
});

var swiper3 = new Swiper('.mobile-salon-reviews-container', {
    pagination: '.amount2',
    paginationType: 'fraction',
    nextButton: '.next2',
    prevButton: '.prev2'
});

var swiper4 = new Swiper('.mobile-salon-events-container', {
    pagination: '.amount3',
    paginationType: 'fraction',
    nextButton: '.next3',
    prevButton: '.prev3'
});

var swiper5 = new Swiper('.mobile-salon-news-container', {
    pagination: '.amount4',
    paginationType: 'fraction',
    nextButton: '.next4',
    prevButton: '.prev4'
});

var swiper6 = new Swiper('.mobile-salon-articles-container', {
    pagination: '.amount5',
    paginationType: 'fraction',
    nextButton: '.next5',
    prevButton: '.prev5'
});

}());