
function hide(id) {
    var el= document.getElementById(id);
    if(el) {
        el.style.display="none";
    } else {
        console.error ("elementul nu exista");
    }
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");

    for(i=0;i<pages.length;i++){
        var page=pages[i];
        var id= page.id;
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display="block";

}

function initMeniu (){
    document.addEventListener('click' , function (e) {
        var link = e.target;
        if (e.target.matches('#top-menu-bar a')){
        var id= link.innerHTML.toLowerCase() ;
        showPage(id);
        }
    });
}

initMeniu ();

showPage("skills")

var skills=['html','css','js'];

var ul= document.querySelector("#skills ul");
for(i=0;i<skills.length;i++) {
    ul.innerHTML =  ul.innerHTML + "<li>" + skills[i] + "</li>";
    }