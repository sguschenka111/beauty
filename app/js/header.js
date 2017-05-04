(function(){

let closeDoor = document.querySelector('.mobile-close_door-js');
let closeDoorInstance = new Hammer(closeDoor);

let closeMenu = document.querySelector('.mobile-close_menu-js');
let closeMenuInstance = new Hammer(closeMenu);

let login = document.querySelector('.mobile-login_js');
let loginMenuInstance = new Hammer(login);

let buttonMenu = document.querySelector('.mobile-menu_js');
let buttonMenuInstance = new Hammer(buttonMenu);

buttonMenuInstance.on("tap", function(ev) {
    $('.mobile-menu-emergence').addClass('openMenuPage');
    $('.section-filter-blur').addClass('filter-blur');
});

loginMenuInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').addClass('openDoorPage');
    $('.section-filter-blur').addClass('filter-blur');
});

closeMenuInstance.on("tap", function(ev) {
    $('.mobile-menu-emergence').removeClass('openMenuPage');
    $('.section-filter-blur').removeClass('filter-blur');
});

closeDoorInstance.on("tap", function(ev) {
    $('.mobile-door-emergence').removeClass('openDoorPage');
    $('.section-filter-blur').removeClass('filter-blur');
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