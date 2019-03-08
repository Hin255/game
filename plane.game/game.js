class Game {
    constructor(fps, scene) {
        this.actions = {}
        this.keydowns = {}
        this.scene = scene
        this.fps = fps
        this.init()
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
        let self = this
        window.addEventListener('keydown', function(event) {
            //游戏事件和场景自己的按键监听事件
            self.keydowns[event.key] = true
            self.scene.keydowns[event.key] = true
        })

        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
            self.scene.keydowns[event.key] = false

        })

        this.registerAction('k', function() {
            let m = mainScene()
            self.scene = m
        })
    }

    runloop() {
        let scene_actions = Object.keys(this.scene.actions)
        for (let index = 0; index < scene_actions.length; index++) {
            const key = scene_actions[index]
            if (this.scene.keydowns[key]) {
                this.scene.actions[key]()
            }
        }
        let game_actions = Object.keys(this.actions)
        for (let index = 0; index < game_actions.length; index++) {
            const key = game_actions[index]
            if (this.keydowns[key]) {
                this.actions[key]()
            }
        }
        clearCanvas()
        this.draw()
        this.update()
            //next run loop
        this.timeOut()
    }

    timeOut() {
        let self = this
        window.setTimeout(function() {
            self.runloop()
        }, 1000 / this.fps)
    }

    run() {
        this.timeOut()
    }
}
