let TitleScene = function() {
    let s = {
        actions: {},
        keydowns: {},
        alive: true,
    }

    s.kill = function() {
        s.alive = false
    }

    s.draw = function() {
        drawBackground()
        drawText('按 k 开始', 150, 150)
    }

    s.update = function() {

    }


    return s
}
