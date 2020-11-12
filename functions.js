
function hide(id) {
    document.getElementById(id).style.display="none";
}

function showSkills () {
    document.getElementById("home").style.display="none";
    document.getElementById("languages").style.display="none";
    document.getElementById("projects").style.display="none";
    document.getElementById("skills").style.display="block";
}

function showProjects () {
    document.getElementById("home").style.display="none";
    document.getElementById("languages").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="block";
}

function showLanguages () {
     hide("home");
     hide("skills");
     hide("projects");
    document.getElementById("languages").style.display="block";
}

function showHome () {
     hide("languages");
     hide("skills");
     hide("projects");
    document.getElementById("home").style.display="block";
}

























/* var n=1;var lastPos=0;

function showMe(n){
    console.log(n);
    console.log(lastPos);
    document.getElementsByClassName("page")[n].style.display="block";
    document.getElementsByClassName("page")[lastPos].style.display="none";
    lastPos=n;
}  */