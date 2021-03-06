$(function(){
 
let metroPage = $('.mobile-metro-page');

let buttonMetro = document.querySelector('.mobile-metro_js');
let buttonMetroInstance = new Hammer(buttonMetro);

let closeMetro = document.querySelector('.mobile-close_metro-js');
let closeMetroInstance = new Hammer(closeMetro);

let closeDoor = document.querySelector('.mobile-close_door-js');
let closeDoorInstance = new Hammer(closeDoor);

let closeCategories = document.querySelector('.mobile-close_categories-js');
let closeCategoriesInstance = new Hammer(closeCategories);

let closeMenu = document.querySelector('.mobile-close_menu-js');
let closeMenuInstance = new Hammer(closeMenu);

let menuMetro = document.querySelector('.mobile-metro-menu_js');
let metroMenuInstance = new Hammer(menuMetro);

let login = document.querySelector('.mobile-login_js');
let loginMenuInstance = new Hammer(login);

let buttonCategories = document.querySelector('.mobile-categories_js');
let buttonCategoriesInstance = new Hammer(buttonCategories);

let buttonMenu = document.querySelector('.mobile-menu_js');
let buttonMenuInstance = new Hammer(buttonMenu);



buttonMetroInstance.on("tap", function(ev) {
    metroPage.addClass('openMetroPage');    
});

buttonCategoriesInstance.on("tap", function(ev) {
    $('.mobile-categories-emergence').addClass('openCategoriesPage');    
});

buttonMenuInstance.on("tap", function(ev) {
    $('.mobile-menu-emergence').addClass('openMenuPage');
    $('.section-filter-blur').addClass('filter-blur');
});

loginMenuInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').addClass('openDoorPage');
    $('.section-filter-blur').addClass('filter-blur');
});

closeMetroInstance.on("tap", function(ev) {
    metroPage.removeClass('openMetroPage');
});

closeCategoriesInstance.on("tap", function(ev) {
    $('.mobile-categories-emergence').removeClass('openCategoriesPage'); 
});

closeMenuInstance.on("tap", function(ev) {
    $('.mobile-menu-emergence').removeClass('openMenuPage');
    $('.section-filter-blur').removeClass('filter-blur');
});


closeDoorInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').removeClass('openDoorPage');
    $('.section-filter-blur').removeClass('filter-blur');
});

metroMenuInstance.on("tap", function(event) {
    let target = event.target,
    ul = $('.mobile-metro-menu-2level_js');
    
    while (target != this) {
        
    if (target.tagName == 'LI') {
    let itemMenu = ul.closest(target);
    itemMenu.find('ul').toggle('normal');
    itemMenu.find('.mobile-metro-menu__arrow').toggleClass('rotate180');
    return;
    }
    
    target = target.parentNode;
    }
});

$('.mobile-metro-menu-2level_js').on('click',function(e){

    let target = e.target;

    while (target != this) {
        if (target.tagName == 'LI') {

            target.classList.toggle('mobile-metro-item_active');
            let otherItem = $('LI.mobile-metro-menu-2level__item');
            otherItem.not(target).removeClass('mobile-metro-item_active');
            return;
        }
        target = target.parentNode;
    }
});

$('.mobile-categories-list').on('click',function(e){

    let target = e.target;

    while (target != this) {
        if (target.tagName == 'LI') {

            target.classList.toggle('mobile-categories-item_active');
            target.querySelector('.mobile-categories__text').classList.toggle('mobile-categories-text_active');
            let otherItem = $('LI.mobile-categories__item');
                        
            otherItem.not(target).each(function() {
            this.querySelector('.mobile-categories__text').classList.remove('mobile-categories-text_active');
            });           
            
            otherItem.not(target).removeClass('mobile-categories-item_active');
            return;
        }
        
        target = target.parentNode;
    }
});




}());

let ViewStateChange = (function(){
      
      $('.mobile-door__item-signIn').addClass('mobile-door__item_active');
      
      let _changeState = function($this){
          let item = $this.closest('.mobile-door__item'),
              view = item.data('view'),
              viewSection = $('.mobile-form-section'),
              modificatorPrefix = '.mobile-form-section-',
              classOfViewState = modificatorPrefix + view;
          
    _changeActiveClass($this);
    viewSection.find(classOfViewState).show().siblings().hide();
    
    };
      
      let _changeActiveClass = function($this) {
          $this.closest('.mobile-door__item').addClass('mobile-door__item_active').siblings().removeClass('mobile-door__item_active');
      }
      return {
          init: function(){
              $('.mobile-door__item').on('click',function(e){
                  _changeState($(this));
              });
          }
      }
      
})(); 



$(document).ready(function(){
        ViewStateChange.init();       
}); 
   

  
  
  
  /*--------------------------------------------*/