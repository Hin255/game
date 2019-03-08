class Scene {
    constructor() {
        this.elements = []
        this.actions = {}
        this.keydowns = {}
        this.alive = true
        this.paused = false
        this.images = {}
    }

    addElement(element) {
        this.elements.push(element)
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i]
            drawImage(e)
        }
    }

    update() {
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    imageByName(name) {
        let img = this.images[name]
        let image = imageFromPath(img)
        return image
    }

    kill() {
        this.alive = !this.alive
    }

    pause() {
        this.paused = !this.paused
    }

}
