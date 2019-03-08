let Bullet = function(image) {
    let moveUp = function() {
        o.y -= o.speedY
    }

    let kill = function() {
        o.alive = !o.alive
    }

    let fire = function() {
        o.fired = true
    }

    let launched = function() {

    }

    let o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 50,
        y: 50,
        speedX: 5,
        speedY: 5,
        moveUp: moveUp,
        kill: kill,
        fired: false,
        fire: fire,
        alive: true,
        launched: launched,
    }
    return o
}
