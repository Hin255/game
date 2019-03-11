class SceneText {
    constructor() {
        this.setup()
    }

    setup() {
        this.x = 20
        this.y = 490
        this.text = 0
    }

    update(text) {
        this.text += Number(text)
    }
}
