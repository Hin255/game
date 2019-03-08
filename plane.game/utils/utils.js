let log = console.log.bind(console)

let imageFromPath = function (path) {
    let image = new Image()
    image.src = path
    return image
}



let collide = function(rect1,rect2) {
    let maxX = rect1.x+rect1.image.width >= rect2.x+rect2.image.width ? rect1.x+rect1.image.width : rect2.x+rect2.image.width
    let maxY = rect1.y+rect1.image.height >= rect2.y+rect2.image.height ? rect1.y+rect1.image.height : rect2.y+rect2.image.height
    let minX = rect1.x <= rect2.x ? rect1.x : rect2.x
    let minY = rect1.y <= rect2.y ? rect1.y : rect2.y

    if(maxX - minX <= rect1.image.width+rect2.image.width && maxY - minY <= rect1.image.height+rect2.image.height){
        log('碰撞')
        return true
    }else{
        return false
    }
}

let loadLevel = function (n, img) {
    n = n - 1
    let blocks = []
    let level = levels[n]
    for (let index = 0; index < level.length; index++) {
        const p = level[index]
        b = Block(p, img)
        blocks.push(b)
    }

    return blocks
}
