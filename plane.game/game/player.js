let Player = function(image) {
    let moveLeft = function() {
        if (o.x > 0) {
            o.x -= o.speed
        }
    }

    let moveRight = function() {
        if (o.x < 300 - o.image.width) {
            o.x += o.speed
        }
    }

    let moveUp = function() {
        if (o.y > 0) {
            o.y -= o.speed
        }
    }

    let moveDown = function() {
        if (o.y < 500 - o.image.width) {
            o.y += o.speed
        }
    }

    let kill = function() {
        o.alive = !o.alive
    }

    let o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 100,
        y: 260,
        speed: 5,
        alive: true,
        kill: kill,
        moveLeft: moveLeft,
        moveRight: moveRight,
        moveUp: moveUp,
        moveDown: moveDown,
        bullets : [],
    }
    return o
}
