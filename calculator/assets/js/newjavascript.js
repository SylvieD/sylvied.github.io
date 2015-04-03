var npt1;
var npt2;
var opt;
var som_knp;
var deel_knp;
var versch_knp;
var verm_knp;

function som(){
    var getal1 = parseInt(npt1.value);
    var getal2 = parseInt(npt2.value);
    opt.innerHTML = getal1 + getal2;
}

function maal(){
    var getal1 = parseInt(npt1.value);
    var getal2 = parseInt(npt2.value);
    opt.innerHTML = getal1 * getal2;
}


function pageLoaded(){
    opt = document.getElementById("uitvoer");
    npt1 = document.getElementById("eersteinput");
    npt2 = document.getElementById("tweedeinput");
    som_knp = document.getElementById("optel");
    deel_knp = document.getElementById("gedeeld");
    versch_knp = document.getElementById("aftrek");
    verm_knp = document.getElementById("maal");

    som_knp.addEventListener("click", som);
    verm_knp.addEventListener("click", maal);
    
}

window.addEventListener("load", pageLoaded);