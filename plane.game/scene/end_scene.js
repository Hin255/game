let EndScene = function() {
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
        drawText('按 r 重置', 150, 150)
    }

    s.update = function() {
        
    }


    return s
}
