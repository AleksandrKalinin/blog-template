var body = document.getElementById('body');
var menu = document.getElementById('menuHamb');
var overlay = document.getElementById('menuOverlay');
var topBar = document.getElementById('topBar');
var middleBar = document.getElementById('middleBar');
var bottomBar = document.getElementById('bottomBar');
var tabsWrap = document.getElementById('tabsWrap');

var toggleMenu = function() {
  body.classList.toggle('stop-scrolling');
  menu.classList.toggle('menu_open');
  overlay.classList.toggle('overlay_open');
  topBar.classList.toggle('top-bar_rotated');
  middleBar.classList.toggle('middle-bar_rotated');
  bottomBar.classList.toggle('bottom-bar_rotated');	
}

menu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu)

var tabs = document.getElementsByClassName('sidebar-tabs__item');

tabsWrap.addEventListener('click', function(event) {
	if (event.target.classList.contains('sidebar-tabs__item')) {
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('tabs-item_active');
		}
		event.target.classList.add('tabs-item_active');
	}
});
