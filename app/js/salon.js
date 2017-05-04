
var carousel = $('.carousel').flickity({
  groupCells: true
});

let praceList = document.querySelector('.mobile-nav-prace-list_js');
let praceListInstance = new Hammer(praceList);

praceListInstance.on("tap", function(event) {
    let target = event.target,
    ul = $('.mobile-nav2-prace-list');
    
    while (target != this) {
        
    if (target.tagName == 'LI') {
    let itemMenu = ul.closest(target);
    console.log(itemMenu);
    itemMenu.find('ul').toggle('normal');
    itemMenu.find('.mobile-nav-prace__arrow').toggleClass('rotate270');
    return;
    }
    target = target.parentNode;
    }
});;

