let mainScene = function() {

    let images = {
        bomb: 'img/bomb.png',
        bullet: 'img/bullet.png',
        player: 'img/player.png',
        enemy: 'img/enemy.png',
    }

    let s = {
        actions: {},
        keydowns: {},
        score: 0,
        loaded: false,
        images: [],
        alive: true,
        paused: false,
        enemys: [],
    }

    s.kill = function() {
        s.alive = false
    }

    s.registerAction = function(key, callback) {
        s.actions[key] = callback
    }

    let imageByName = function(name) {
        let img = images[name]
        let image = imageFromPath(img)
        return image
    }


    let bomb_image = imageByName('bomb')
    let bullet_image = imageByName('bullet')
    let player_image = imageByName('player')
    let enemy_image = imageByName('enemy')

    let bomb = Bomb(bomb_image)
    let bullet = Bullet(bullet_image)
    let player = Player(player_image)

    for (let i = 0; i < levels.length; i++) {
        let p = levels[i]
        let enemy = Enemy(p, enemy_image)
        s.enemys.push(enemy)
    }

    s.registerAction('a', function() {
        player.moveLeft()
        bullet.moveLeft()
    })

    s.registerAction('d', function() {
        player.moveRight()
        bullet.moveRight()
    })

    s.registerAction('w', function() {
        player.moveUp()
    })

    s.registerAction('s', function() {
        player.moveDown()
    })

    s.registerAction('f', function() {
        bullet.fire()
    })

    s.registerAction('p', function() {
        s.paused = !s.paused
    })

    s.update = function() {
        if (s.alive) {
            if (s.paused) {
                return
            }
            if (bullet.fired) {
                bullet.moveUp()
            }
            for (var i = 0; i < s.enemys.length; i++) {
                let enemy = s.enemys[i]
                enemy.move()
                if (collide(enemy, bullet)) {
                    bullet.kill()
                    enemy.kill()
                } else if (collide(enemy, player)) {
                    enemy.kill()
                    player.kill
                }
            }
        }
    }

    let end = EndScene()
    s.draw = function() {
        if (s.alive) {
            drawBackground()
            drawText(s.score, 10, 495)
            for (let index = 0; index < s.enemys.length; index++) {
                const e = s.enemys[index]
                if (e.alive && collide(bullet, e)) {
                    drawImage(bomb)
                    e.kill()
                    bullet.kill()
                    s.score += 100
                } else if (e.alive) {
                    drawImage(e)
                } else if (bullet.alive) {
                    drawImage(bullet)
                }
                if (!collide(player, e)) {
                    drawImage(player)
                }
            }

        } else {
            end.draw()
        }

    }

    return s
}
