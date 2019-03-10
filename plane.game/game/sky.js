class Sky extends ImageSource {
    constructor() {
        super('sky')
        this.setup()
    }

    setup() {
        this.x = 0
        this.y = 0
        this.speed = 5
        this.alive = true
    }
}
