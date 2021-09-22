var $button1 = document.querySelector("#money");
var $button2 = document.querySelector("#miami");
var $button3 = document.querySelector("#fort");

var $money = document.querySelector("#money_img");
var $miami = document.querySelector("#miami_img");
var $fort = document.querySelector("#fort_img");

$button1.addEventListener("click", function() {
    $money.classList.toggle("oculto")
})

$button2.addEventListener("click", function() {
    $miami.classList.toggle("oculto")
})

$button3.addEventListener("click", function() {
    $fort.classList.toggle("oculto")
})

var imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function() {
        this.classList.add("oculto");
    });
    
}