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

 $('.mobile-salon-nav__item').on('click',function(e){
        e.preventDefault();
        
        let item = $(this),
            contentItem = $('.mobile-salon-content'),
            itemPosition = item.data('class');
            
           contentItem.filter('.mobile-salon_' + itemPosition).add(item)
           .addClass('mobile-salon-nav__item_active')
           .siblings().removeClass('mobile-salon-nav__item_active');
        
    });
    
    $('.mobile-further-salon').on('click',function(e){
        e.preventDefault();
        $('.mobile-description-salon-content_p').css('display','block');   
        $(this).css('display','none');
    });

}());

 
   
 
   
    