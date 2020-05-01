var x = screen.availHeight;
var menuHeight = document.getElementById('menuNavigation').clientHeight;
var contentPage = document.getElementById('contentPage');
if (x < menuHeight) {
    contentPage.style.minHeight = menuHeight - 200 + "px";
}else {
    contentPage.style.minHeight = x - 200 + "px";
}