class ImageSource {
    constructor(image) {
        this.init()
        this.image = this.imageByName(image)
    }
    init() {
        this.images = {
            bomb: 'img/bomb.png',
            bullet: 'img/bullet.png',
            player: 'img/player.png',
            enemy: 'img/enemy.png',
            sky: 'img/sky.png',
            cloud: 'img/cloud.png',
        }
    }

    imageByName(name) {
        let img = this.images[name]
        let image = imageFromPath(img)
        return image
    }
}
