class Enemy extends ImageSource {
    constructor() {
        super('enemy')
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
