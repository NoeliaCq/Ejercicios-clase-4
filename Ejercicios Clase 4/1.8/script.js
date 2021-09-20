var $div = document.querySelector("div");

/*$div.style.height=500;
$div.style.width=500;
$div.style.background="purple";*/

$div.classList.add("square");

//h1.classList;
//devuelve script.js:9 Uncaught ReferenceError: h1 is not defined
    //at script.js:9
//esto es porque no existe el tag h1 en mi HTML

//toggle
/*function toggleClass() {
    $div.classList.toggle("square");
}

var toggle = setInterval(toggleClass, 1000);*/

//Shuffle!
var $source = document.getElementById("source");

var $destination = document.getElementById("destination");

$destination.textContent= $source.textContent;

//swap
var $swap1 = document.getElementById("swap_1");
var $swap2 = document.getElementById("swap_2");

function toggleId() {
    var textoProvisorio = $swap1.textContent;
    $swap1.textContent = $swap2.textContent;
    $swap2.textContent = textoProvisorio;
}

var swap = toggleId();


