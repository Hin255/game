let Paddle = function (img) {
    let image = img
    let moveLeft = function () {
        if (o.x > 0) {
            o.x -= o.speed
        }
    }

    let moveRight = function () {
        if (o.x < 400 - o.image.width) {
            o.x += o.speed
        }
    }

    let o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 100,
        y: 260,
        speed: 5,
        moveLeft: moveLeft,
        moveRight: moveRight,
    }
    return o
}
