class Enemy {
    constructor(image) {
        this.image = image
        this.x = 50
        this.y = 50
        this.speed = 1
        this.alive = true
    }

    kill() {
        this.alive = !this.alive
    }


    move() {
        this.y += this.speed
    }
}
