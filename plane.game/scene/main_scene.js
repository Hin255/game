class MainScene extends Scene {
    constructor() {
        super()
        this.score = 0
        this.images = {
            bomb: 'img/bomb.png',
            bullet: 'img/bullet.png',
            player: 'img/player.png',
            enemy: 'img/enemy.png',
            sky: 'img/sky.png',
            cloud: 'img/cloud.png',
        }
        this.player = new Player(this.imageByName('player'))
        this.bullet = new Bullet(this.imageByName('bullet'))
        this.bomb = new Bomb(this.imageByName('bomb'))
        this.sky = new Sky(this.imageByName('sky'))
        // this.cloud = Cloud(this.imageByName('cloud'))
        this.enemy = new Enemy(this.imageByName('enemy'))
        this.init()
    }

    init() {
        this.addElement(this.player)
        this.addElement(this.enemy)
        // this.addElement(this.cloud)
        // this.addElement(this.bullet)
        // let enemy = this.imageByName('enemy')
        // this.enemy = Enemy(enemy)

        // 主场景事件注册
        this.eventRegister()
    }

    update() {
        this.enemy.move()
    }

    eventRegister() {
        let self = this
        this.registerAction('a', function() {
            self.player.moveLeft()
        })

        this.registerAction('d', function() {
            self.player.moveRight()
        })

        this.registerAction('w', function() {
            self.player.moveUp()
        })

        this.registerAction('s', function() {
            self.player.moveDown()
        })

        this.registerAction('f', function() {
            self.bullet.fire()
        })

        this.registerAction('p', function() {
            self.paused = !this.paused
        })
    }
}
