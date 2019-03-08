let mainScene = function() {

    let images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }

    let s = {
        actions: {},
        keydowns: {},
        score: 0,
        loaded: false,
        images: [],
        alive: true,
        paused: false,
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


    let ball_image = imageByName('ball')
    let paddle_image = imageByName('paddle')
    let block_image = imageByName('block')

    let paddle = Paddle(paddle_image)

    let ball = Ball(ball_image)

    let blocks = loadLevel(1, block_image)

    let allow = false
    let mouseEvent = function() {
        canvas.addEventListener('mousedown', function(event){
            let x = event.offsetX
            let y = event.offsetY
            if(ball.has_point(x, y)) {
                allow = true
            }
        })

        canvas.addEventListener('mousemove', function(event){
            if (allow) {
                ball.x = event.offsetX
                ball.y = event.offsetY
            }
        })

        canvas.addEventListener('mouseup', function(event){
            allow = false
        })
    }

    mouseEvent()

    s.registerAction('a', function () {
        paddle.moveLeft()
    })

    s.registerAction('d', function () {
        paddle.moveRight()
    })

    s.registerAction('f', function () {
        ball.fire()
    })

    s.registerAction('p', function () {
        s.paused = !s.paused
    })

    s.update = function() {
        if (s.alive) {
            if (s.paused) {
                return
            }
            ball.move()
            if (collide(paddle, ball)) {
                ball.bounce()
            } else if (ball.y > paddle.y) {
                s.kill()
            }
        }

    }

    let end = EndScene()
    s.draw = function() {
        if(s.alive) {
            drawBackground()
            drawImage(paddle)
            drawImage(ball)
            drawText(s.score, 10, 295)
            for (let index = 0; index < blocks.length; index++) {
                const b = blocks[index]
                if (b.alive && collide(ball, b)) {
                    b.kill()
                    ball.bounce()
                    s.score += 100
                }
                if (b.alive) {
                    drawImage(b)
                }
            }
        } else {
            end.draw()
        }

    }

    return s
}
