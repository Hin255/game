class MainScene extends Scene {
    constructor() {
        super()
        this.setup()
    }

    setup() {
        this.numberOfEnemys = 10
        this.enemys = []
        this.player = new Player()
        this.text = new SceneText()
        this.sky = new Sky()
        this.addAllElement()
        this.eventRegister()
        this.status()
    }

    addAllElement() {
        this.addElement(this.sky)
        this.addElement(this.player)
        this.addEnemys()
        this.addElement(this.text)
    }

    addEnemys() {
        for (let i = 0; i < this.numberOfEnemys; i++) {
            const enemy = new Enemy()
            this.addElement(enemy)
            this.enemys.push(enemy)
        }
    }

    resetEnemys() {
        for (let i = 0; i < this.enemys.length; i++) {
            let e = this.enemys[i]
            if (!e.alive) {
                e.kill()
            }
            e.move()
            e.reset()
        }
    }

    enemyAndbulletCollide() {
        for (let i = 0; i < this.enemys.length; i++) {
            let e = this.enemys[i]
            for (let i = 0; i < this.player.bullets.length; i++) {
                let b = this.player.bullets[i]
                if (collide(e, b)) {
                    this.text.update(100)
                    let bomb = e.position()
                    // this.addElement(bomb)
                    e.kill()
                }
            }
        }
    }

    updateBullets() {
        if (this.player.fired) {
            let bullet = this.player.bullet()
            if (bullet) {
                this.addElement(bullet)
                this.player.bullets.push(bullet)
            }
            for (let i = 0; i < this.player.bullets.length; i++) {
                let b = this.player.bullets[i]
                b.move()
                if (b.y < 0) {
                    // this.removeElement(b)
                }
            }
        }
    }

    status() {
        this.addStatus(this.update)
    }

    update() {
        this.resetEnemys()
        this.updateBullets()
        //检测碰撞
        this.enemyAndbulletCollide()
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
                }
            })
        }
    }
}
