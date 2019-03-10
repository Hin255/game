class Player extends ImageSource {
    constructor() {
        super('player')
        this.setup()
    }

    setup() {
        this.x = 100
        this.y = 450
        this.speed = 10
        this.fired = false
        this.cooldown = 20
    }

    fire() {
        this.fired = true
    }

    bullet() {
        this.cooldown = this.cooldown - 1
        if (this.cooldown == 0) {
            this.cooldown = 20
            let b = new Bullet()
            b.position(this)
            return b
        } else {
            return null
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x < 300 - this.image.width) {
            this.x += this.speed
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed
        }
    }

    moveDown() {
        if (this.y < 500 - this.image.width) {
            this.y += this.speed
        }
    }
}
