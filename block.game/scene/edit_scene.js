let Edit_scene = function() {
    let s = {
        actions: {},
        keydowns: {},
        alive: true,
        positions: [],
        blocks: [],
    }

    s.kill = function() {
        s.alive = false
    }

    s.registerAction = function(key, callback) {
        s.actions[key] = callback
    }

    let block_image = imageFromPath('img/block.png')

    s.registerAction('c', function(){
        let block = Block([0, 0], block_image)
        s.blocks.push(block)
    }
    )

    drawBlock = function() {
        for (let i = 0; i < s.blocks.length; i++) {
            let block = s.blocks[i]
            drawImage(block)
        }
    }

    s.draw = function() {
        drawBackground()
        drawBlock()
    }

    s.update = function() {
    }

    let mouseEvent = function() {
        canvas.addEventListener('mousedown', function(event){
            let x = event.offsetX
            let y = event.offsetY
            for (let i = 0; i < s.blocks.length; i++) {
                let block = s.blocks[i]
                if(block.has_point(x, y)) {
                    block.move()
                    return
                }
            }
        })

        canvas.addEventListener('mousemove', function(event){
            for (let i = 0; i < s.blocks.length; i++) {
                let block = s.blocks[i]
                if(block.moved) {
                    block.x = event.offsetX
                    block.y = event.offsetY
                }
            }
        })

        canvas.addEventListener('mouseup', function(event){
            for (let i = 0; i < s.blocks.length; i++) {
                let block = s.blocks[i]
                if(block.moved) {
                    block.move()
                }
            }
        })
    }

    mouseEvent()

    return s
}
