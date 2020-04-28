var x = screen.availHeight;
var menuHeight = document.getElementById('menuNavigation').clientHeight;
var topHeight = document.getElementById('topArea').clientHeight;
var contentPage = document.getElementById('contentPage');
if (x < menuHeight) {
    contentPage.style.minHeight = menuHeight - topHeight + "px";
}else {
    contentPage.style.minHeight = x - topHeight + "px";
}