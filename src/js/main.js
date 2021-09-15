var body = document.getElementById('body');
var menu = document.getElementById('menuHamb');
var overlay = document.getElementById('menuOverlay');
var topBar = document.getElementById('topBar');
var middleBar = document.getElementById('middleBar');
var bottomBar = document.getElementById('bottomBar');

menu.addEventListener('click', function(){
  body.classList.toggle('stop-scrolling');
  menu.classList.toggle('menu_open');
  overlay.classList.toggle('overlay_open');
  topBar.classList.toggle('top-bar_rotated');
  middleBar.classList.toggle('middle-bar_rotated');
  bottomBar.classList.toggle('bottom-bar_rotated');
})

var links = document.getElementsByClassName('menu-link');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){    
    body.classList.toggle('stop-scrolling');
    menu.classList.toggle('menu_open');
    overlay.classList.toggle('overlay_open');
    topBar.classList.toggle('top-bar_rotated');
    middleBar.classList.toggle('middle-bar_rotated');
    bottomBar.classList.toggle('bottom-bar_rotated');    
  })
}

var tabs = document.getElementsByClassName('sidebar-tabs__item');

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e) {    
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('tabs-item_active');
    }
    e.target.classList.add('tabs-item_active');   
  })
}


var search = document.getElementById('search');
var searhIcon = document.getElementById('searchIcon'); 

search.addEventListener('change', function() {
  console.log("console");
  searchIcon.style.display = 'none';
})
