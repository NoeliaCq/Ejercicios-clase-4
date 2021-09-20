var $div = document.querySelector("#magic")

var $bazinga = document.querySelector("img");

var $body = document.body;

var $color = document.querySelector("#color")

function ocultarImg() {
    $bazinga.style.display = "none";
}

$div.addEventListener("mouseover", ocultarImg);

function cambiarFondo(event) {
    if(event.keyCode ===13) {
        $body.style.backgroundColor = $color.value;
    }
    else if(event.keyCode ===8) {
        $body.style.backgroundColor = "white";
    }
}

$color.addEventListener("keydown", cambiarFondo);
