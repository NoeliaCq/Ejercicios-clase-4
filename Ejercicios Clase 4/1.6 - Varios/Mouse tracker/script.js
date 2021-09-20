
var $img = document.querySelector("img");
var $body = document.body;

//cambia el valor del atributo pero el gif no se mueve
$body.addEventListener("mousemove", function(info) {
    console.log(info.clientX);
    console.log(info.clientY);
    $img.setAttribute("position", "absolute");
    $img.style.zIndex = 1000;
    $img.setAttribute("top", info.clientY);
    $img.setAttribute("left", info.clientX);
    
})
