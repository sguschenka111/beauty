(function(){

let metroPage = $('.mobile-metro-page');

let buttonMetro = document.querySelector('.mobile-button-metro');
let buttonMetroInstance = new Hammer(buttonMetro);

let closeMetro = document.querySelector('.mobile-close_metro-js');
let closeMetroInstance = new Hammer(closeMetro);

let closeDoor = document.querySelector('.mobile-close_door-js');
let closeDoorInstance = new Hammer(closeDoor);

let closeCategories = document.querySelector('.mobile-close_categories-js');
let closeCategoriesInstance = new Hammer(closeCategories);

let menuMetro = document.querySelector('.mobile-metro-menu');
let metroMenuInstance = new Hammer(menuMetro);

let login = document.querySelector('.mobile-login');
let loginMenuInstance = new Hammer(login);

let buttonCategories = document.querySelector('.mobile-button-categories');
let buttonCategoriesInstance = new Hammer(buttonCategories);



buttonMetroInstance.on("tap", function(ev) {
    metroPage.addClass('openMetroPage');    
});

buttonCategoriesInstance.on("tap", function(ev) {
    $('.mobile-categories-emergence').addClass('openCategoriesPage');    
});

closeMetroInstance.on("tap", function(ev) {
    metroPage.removeClass('openMetroPage'); 
});

closeCategoriesInstance.on("tap", function(ev) {
    $('.mobile-categories-emergence').removeClass('openCategoriesPage'); 
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


loginMenuInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').addClass('openDoorPage');    
});

closeDoorInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').removeClass('openDoorPage'); 
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
  }());
  
  $(document).ready(function(){
        ViewStateChange.init();
  });