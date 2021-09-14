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