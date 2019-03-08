let Bullet = function(img) {
    let image = img

    let moveUp = function() {
        o.y -= o.speedY
    }

    let moveLeft = function() {
        o.x += o.speedX
    }

    let moveRight = function() {
        o.x -= o.speedX
    }

    let kill = function() {
        o.alive = !o.alive
    }


    let fire = function() {
        o.fired = true
    }

    let o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 30,
        y: 150,
        speedX: 3,
        speedY: 3,
        moveUp: moveUp,
        moveLeft: moveLeft,
        moveRight: moveRight,
        kill: kill,
        fired: false,
        fire: fire,
        alive: true,
    }
    return o
}
