class Scene {
    constructor() {
        this.elements = []
        this.actions = {}
        this.keydowns = {}
        this.alive = true
        this.paused = false
        this.images = {}
    }

    init() {

    }

    addElement(element) {
        this.elements.push(element)
    }

    removeElement(element) {
        this.elements.pop(element)
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i]
            drawImage(e)
        }
    }

    update() {}

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    kill() {
        this.alive = !this.alive
    }

    pause() {
        this.paused = !this.paused
    }

}
