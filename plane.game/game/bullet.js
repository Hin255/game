class Bullet {
    constructor(image) {
        this.image = image
        this.x = 0
        this.y = 0
        this.speedX = 5
        this.speedY = 5
        this.fired = false
        this.alive = true

    }

    moveUp() {
        this.y -= this.speedY
    }

    kill() {
        this.alive = !this.alive
    }

    fire() {
        this.fired = true
    }

    launched() {

    }
}
