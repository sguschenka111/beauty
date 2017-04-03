(function(){

let metroPage = $('.mobile-metro-page');

let buttonMetro = document.querySelector('.mobile-button-metro');
let buttonMetroInstance = new Hammer(buttonMetro);

let closeMetro = document.querySelector('.mobile-closeMetro_js');
let closeMetroInstance = new Hammer(closeMetro);

let menuMetro = document.querySelector('.mobile-metro-menu');
let metroMenuInstance = new Hammer(menuMetro);


buttonMetroInstance.on("tap", function(ev) {
    metroPage.addClass('openMetroPage');    
});

closeMetroInstance.on("tap", function(ev) {
    metroPage.removeClass('openMetroPage'); 
});

metroMenuInstance.on("tap", function(event) {
    let item = event.target,
        ul = $('.mobile-metro-menu-2level_js'),
        arrow = $('.mobile-metro-menu__arrow');
        
    if(item.tagName != 'SPAN') {
        return;
    }
    
    let itemMenu = ul.closest(item);
    itemMenu.children().toggle('normal');
    itemMenu.siblings(arrow).toggleClass('rotate180');
});






}());