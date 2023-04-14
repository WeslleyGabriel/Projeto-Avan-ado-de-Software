var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var conteudo = document.getElementById('conteudo');
var showSidebar = true;

function openMenu(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        conteudo.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        conteudo.style.filter = '';
    }
}

function closeSidebar(){
        if(showSidebar){
            openMenu();
        }
    } 

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 800 && showSidebar){
        openMenu();
    }
});