let Enemy = function(position, img) {
    let p = position
    let image = img

    let kill = function() {
        o.alive = !o.alive
    }


    let move = function() {
        o.y += o.speed
    }

    let o = {
        image: image,
        x: p[0],
        y: p[1],
        w: image.width,
        h: image.height,
        speed: 1,
        alive: true,
        lifes: p[2] || 1,
        kill: kill,
        move: move,
    }

    return o
}
