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
        this.player = Player(this.imageByName('player'))
        this.bullet = Bullet(this.imageByName('bullet'))
        this.bomb = Bomb(this.imageByName('bomb'))
        this.sky = Sky(this.imageByName('sky'))
        // this.cloud = Cloud(this.imageByName('cloud'))
        this.enemy = Enemy(this.imageByName('enemy'))
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
        this.registerAction('a', function() {
            this.player.moveLeft()
        }.bind(this))

        this.registerAction('d', function() {
            this.player.moveRight()
        }.bind(this))

        this.registerAction('w', function() {
            this.player.moveUp()
        }.bind(this))

        this.registerAction('s', function() {
            this.player.moveDown()
        }.bind(this))

        this.registerAction('f', function() {
            this.bullet.fire()
        }.bind(this))

        this.registerAction('p', function() {
            this.paused = !this.paused
        }.bind(this))
    }
}
