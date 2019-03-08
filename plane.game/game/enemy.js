let Enemy = function(image) {
    let kill = function() {
        o.alive = !o.alive
    }


    let move = function() {
        o.y += o.speed
    }

    let o = {
        image: image,
        x: 50,
        y: 50,
        w: image.width,
        h: image.height,
        speed: 1,
        alive: true,
        kill: kill,
        move: move,
    }

    return o
}
