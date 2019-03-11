class Enemy extends ImageSource {
    constructor() {
        super('enemy')
        this.cooldown = 20
        this.setup()
    }

    setup() {
        let x = randomBetween(0, 270)
        let y = -randomBetween(0, 200)
        this.x = x
        this.y = y
        this.speed = randomBetween(1, 4)
        this.alive = true
    }

    bullet() {
        this.cooldown = this.cooldown - 1
        if (this.cooldown == 0) {
            this.cooldown = 20
            let b = new Bullet()
            b.position(this)
            this.bullets.push(b)
            return b
        } else {
            return null
        }
    }

    position() {
        let bomb = new Bomb()
        bomb.x = this.x
        bomb.y = this.y
        return bomb
    }

    reset() {
        if (this.y > 500) {
            this.setup()
        }
    }

    kill() {
        this.alive = false
        this.setup()
    }

    move() {
        this.y += this.speed
    }
}
