let __main = function() {

    // 准备好场景，由game来控制何时draw哪一个场景
    // 但是自己draw的逻辑由自己实现
    // 每个scene画面应该由每个scene自己完成
    let title = TitleScene()
    let game = GuaGame(20, title)
    game.run()
}

__main()
