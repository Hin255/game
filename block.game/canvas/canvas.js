let canvas = document.querySelector('#id-canvas')
let context = canvas.getContext('2d')

let clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

let drawImage = function(image) {
    context.drawImage(image.image, image.x, image.y)
}

let drawText = function(text, x, y) {
    context.fillStyle = "orange"
    context.font = "20px serif"
    context.fillText(text, x, y);
}

let drawBackground = function() {
    context.fillStyle = "#015884";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
