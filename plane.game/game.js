let GuaGame = function(fps, scene) {

    let g = {
        actions: {},
        keydowns: {},
        scene: scene,
    }

    window.addEventListener('keydown', function(event) {
        //游戏时间和场景自己的事件
        g.keydowns[event.key] = true
        g.scene.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
        g.scene.keydowns[event.key] = false

    })

    g.draw = function() {
        if (!g.paused) {
            g.scene.draw()
        }
    }

    g.update = function() {
        if (!g.paused) {
            g.scene.update()
        }
    }

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    g.registerAction('k', function() {
        g.scene.kill()
        let m = mainScene()
        g.scene = m
    })

    g.registerAction('r', function() {
        if (!g.scene.alive) {
            let t = TitleScene()
            g.scene = t
        }
    })

    g.runloop = function() {
        let scene_actions = Object.keys(g.scene.actions)
        for (let index = 0; index < scene_actions.length; index++) {
            const key = scene_actions[index]
            if (g.scene.keydowns[key]) {
                g.scene.actions[key]()
            }
        }
        let game_actions = Object.keys(g.actions)
        for (let index = 0; index < game_actions.length; index++) {
            const key = game_actions[index]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }

        clearCanvas()
        g.draw()
        g.update()
            //next run loop
        setTimeout(function() {
            g.runloop()
        }, 1000 / fps)
    }

    g.run = function() {
        setTimeout(function() {
            g.runloop()
        }, 1000 / fps)
    }

    return g
}
