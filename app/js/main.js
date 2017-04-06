(function(){

let metroPage = $('.mobile-metro-page');

let buttonMetro = document.querySelector('.mobile-button-metro');
let buttonMetroInstance = new Hammer(buttonMetro);

let closeMetro = document.querySelector('.mobile-closeMetro_js');
let closeMetroInstance = new Hammer(closeMetro);

let menuMetro = document.querySelector('.mobile-metro-menu');
let metroMenuInstance = new Hammer(menuMetro);

let signIn = document.querySelector('.mobile-door__signIn');
let signUp = document.querySelector('.mobile-door__signUp');
let loginForm = $('.mobile-login-form-section');
let registrationForm = $('.mobile-registration-section');
let signInInstance = new Hammer(signIn);
let signUpInstance = new Hammer(signUp);


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

signInInstance.on("tap", function(ev) {
console.log('вход',signUp);
if(!signIn.classList.contains('mobile-door-item_active') && signUp.classList.contains('mobile-door-item_active')) {
    signIn.addClass('mobile-door-item_active');
    signUp.removeClass('mobile-door-item_active');
    loginForm.show();
    registrationForm.hide()
}else {
   loginForm.show();
    registrationForm.hide();
    signUp.removeClass('mobile-door-item_active');
}
});
signUpInstance.on("tap", function(ev) {
console.log('рег',signUp);

if(!signUp.classList.contains('mobile-door-item_active') && signIn.classList.contains('mobile-door-item_active')){
    signUp.addClass('mobile-door-item_active');
    signIn.removeClass('mobile-door-item_active');
    loginForm.hide();
    registrationForm.show();
}else {
    loginForm.hide();
    registrationForm.show();
    signIn.removeClass('mobile-door-item_active');
}
    
});





}());

 var ViewStateChange = (function(){
      
      var _previousClass = '';
      
      var _changeState = function($this){
          var item = $this.closest('.mobile-door__item'),
              view = item.data('view'),
              listOfItems = $('#product'),
              modificatorPrefix = ' products__list_',
              classOfViewState = modificatorPrefix + view;
          
          if (_previousClass === '') {
              _previousClass = listOfItems.attr('class');
          }
          
         _changeActiveClass($this); listOfItems.attr('class',_previousClass + '' + classOfViewState);
      };
      
      var _changeActiveClass = function($this) {
          $this.closest('.sort__view-item').addClass('active')
               .siblings().removeClass('active');
      }
      return {
          init: function(){
              $('.mobile-door__item').on('click',function(e){
                  e.preventDefault();
                  _changeState($(this));
              });
          }
      }
  }());