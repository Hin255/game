class Game {
    constructor(fps, scene) {
        this.actions = {}
        this.keydowns = {}
        this.scene = scene
        this.fps = fps
    }

    draw() {
        if (!this.scene.paused) {
            this.scene.draw()
        }
    }

    update() {
        if (!this.scene.paused) {
            this.scene.update()
        }
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    init() {
        let g = this
        window.addEventListener('keydown', function(event) {
            //游戏事件和场景自己的按键监听事件
            g.keydowns[event.key] = true
            g.scene.keydowns[event.key] = true
        })

        window.addEventListener('keyup', function(event) {
            g.keydowns[event.key] = false
            g.scene.keydowns[event.key] = false

        })

        this.registerAction('k', function() {
            let m = mainScene()
            g.scene = m
        })
    }

    runloop() {
        let g = this
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
        }, 1000 / this.fps)
    }

    run() {
        this.init()
        setTimeout( () => this.runloop(), 1000 / this.fps)
    }
}
