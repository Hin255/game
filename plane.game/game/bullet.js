class Bullet extends ImageSource {
    constructor() {
        super('bullet')
        this.setup()
    }

    setup() {
        this.speed = 3
        this.alive = true
    }

    position(player) {
        this.x = player.x + player.image.width / 2
        this.y = player.y
    }

    reset(palyer) {
        if (this.y < 1) {
            this.position(palyer)
        }
    }

    move() {
        this.y -= this.speed
    }

    kill() {
        this.alive = !this.alive
    }

}
