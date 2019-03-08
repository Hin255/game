let Block = function (position, img) {
    let p = position
    let image = img

    let kill = function() {
        o.lifes -= 1
        if (o.lifes == 0) {
            o.alive = false
        }
    }

    let has_point = function(x, y) {
         if (o.x + o.w >= x && o.y + o.h >= y) {
             if (o.x <= x && o.y <= y) {
                 return true
             }
         }
         return false
    }

    let move = function() {
        o.moved = !o.moved
    }

    let o = {
        image: image,
        x: p[0],
        y: p[1],
        w: image.width,
        h: image.height,
        alive: true,
        lifes: p[2] || 1,
        kill: kill,
        has_point: has_point,
        moved: false,
        move: move,
    }

    return o
}
