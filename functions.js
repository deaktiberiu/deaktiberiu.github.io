
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

function showMe(n){
    console.log(n);
    console.log(lastPos);
    document.getElementsByClassName("page")[n].style.display="block";
    document.getElementsByClassName("page")[lastPos].style.display="none";
    lastPos=n;
}  