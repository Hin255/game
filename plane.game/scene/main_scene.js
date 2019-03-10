class MainScene extends Scene {
    constructor() {
        super()
        this.setup()
    }

    setup() {
        this.score = 0
        this.numberOfEnemys = 10
        this.enemys = []
        this.player = new Player()
        this.sky = new Sky()
        this.bullets = []

        this.addElement(this.sky)
        this.addElement(this.player)
        this.addEnemys()

        this.eventRegister()
    }

    addEnemys() {
        for (let i = 0; i < this.numberOfEnemys; i++) {
            const enemy = new Enemy()
            this.addElement(enemy)
            this.enemys.push(enemy)
        }
    }

    addBullet() {
        let bullet = this.player.bullet()
        if (bullet) {
            this.bullets.push(bullet)
            this.addElement(bullet)
        }
    }

    update() {
        if (this.player.fired) {
            this.addBullet()
        }

        for (let i = 0; i < this.bullets.length; i++) {
            let e = this.bullets[i]
            e.move()
        }

        for (let i = 0; i < this.enemys.length; i++) {
            const e = this.enemys[i]
            e.move()
            e.reset()
        }
        // this.bullet.move()
    }

    eventRegister() {
        let self = this
        let chars = 'adwsfp'
        for (let i = 0; i < chars.length; i++) {
            const c = chars[i]
            this.registerAction(c, function() {
                switch (c) {
                    case 'a':
                        self.player.moveLeft()
                        break
                    case 'd':
                        self.player.moveRight()
                        break
                    case 'w':
                        self.player.moveUp()
                        break
                    case 's':
                        self.player.moveDown()
                        break
                    case 'f':
                        self.player.fire()
                        break
                    case 'p':
                        self.paused = !this.paused
                        break
                }
            })
        }
    }
}
