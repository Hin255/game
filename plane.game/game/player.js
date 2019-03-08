class Player {
    constructor(image) {
        this.image = image
        this.x = 100
        this.y = 260
        this.speed = 5
        this.alive = true
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

    kill() {
        this.alive = !this.alive
    }
}
