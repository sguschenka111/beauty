(function(){

let metroPage = $('.mobile-metro-page');

let buttonMetro = document.querySelector('.mobile-button-metro');
let buttonMetroInstance = new Hammer(buttonMetro);

let closeMetro = document.querySelector('.mobile-closeMetro_js');
let closeMetroInstance = new Hammer(closeMetro);

let menuMetro = document.querySelector('.mobile-metro-menu');
let metroMenuInstance = new Hammer(menuMetro);

let sign = document.querySelector('.mobile-door__item');

let signInstance = new Hammer(sign);



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