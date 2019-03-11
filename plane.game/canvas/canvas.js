let canvas = document.querySelector('#id-canvas')
let context = canvas.getContext('2d')

let clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

let drawImage = function(object) {
    if ('image' in object) {
        context.drawImage(object.image, object.x, object.y)
    } else if ('text' in object) {
        context.fillStyle = "white"
        context.font = "20px serif"
        context.fillText(object.text, object.x, object.y);
    }
}

let drawBackground = function() {
    context.fillStyle = "#015884";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
