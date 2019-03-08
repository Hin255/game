let Ball = function (img) {
    let image = img

    let move = function () {
        if (o.fired) {
            if (o.x <= 0 || o.x >= 400 - 20) {
                o.speedX = -o.speedX
            }
            if (o.y <= 0 || o.y >= 300 - 20) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    let isAlive = function() {
        if (o.y == 300 - o.image.height) {
            o.alive = false
        }
        return o.alive
    }

    let bounce = function() {
        o.speedY *= -1
    }

    let fire = function() {
        o.fired = true
    }

    let has_point = function(x, y) {
         if (o.x + o.w >= x && o.y + o.h >= y) {
             if (o.x <= x && o.y <= y) {
                 return true
             }
         }
         return false
    }

    let o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 30,
        y: 150,
        speedX: 5,
        speedY: 5,
        move: move,
        fired: false,
        fire: fire,
        isAlive: isAlive,
        alive: true,
        bounce: bounce,
        has_point: has_point,
    }
    return o
}
