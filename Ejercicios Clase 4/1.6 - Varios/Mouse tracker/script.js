
var $img = document.querySelector(".img");

function changePosition(img, top, left) {
    img.style.top = top + 'px';
    img.style.left = left + 'px';
}

//la imagen te sigue si moves el mouse
document.body.addEventListener("mousemove", function(info) {
    changePosition($img, info.clientY, info.clientX);   
})

//la imagen te sigue al lugar del body en el que hagas click
/*document.body.addEventListener("mousedown", function(info) {
    changePosition($img, info.clientY, info.clientX);   
})*/


