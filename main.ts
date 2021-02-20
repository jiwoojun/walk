function Startgame (num: number) {
    scene.setBackgroundColor(9)
    scene.setTile(13, img`
        f f f f f f f f f f f f f f f f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        `, false)
    scene.setTile(15, img`
        f f f f f f f f f f f f f f f f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        d d d d d d d d d d d d d d d f 
        `, false)
    scene.setTile(7, img`
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . 7 7 e e 7 7 7 7 7 . . 
        . . . . . . . e e e e . 7 . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        `, true)
    scene.setTile(14, img`
        f f f f f f f f f f f f f f f f 
        d d d d d d d d d d d d d d d f 
        d d d e e e e e e e e e e e d f 
        d d d e e e e e e e e e e e d f 
        d d d e e f f e f e e e e e d f 
        d d d e e f e e e e f e e e d f 
        d d d e f f f e f e f f f e d f 
        d d d e e f e e f e f e f e d f 
        d d d e e e e e e e e e e e d f 
        d d d e e e e e e e e e e e d f 
        d d d d d d d e e e d d d d d f 
        d d d d d d d e e e d d d d d f 
        d d d d d d d e e e d d d d d f 
        d d d d d d d e e e d d d d d f 
        d d d d d d d e e e d d d d d f 
        d d d d d d d e e e d d d d d f 
        `, true)
    Stage(num)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f d f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d f d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d f d f d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d f f f d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `],
    500,
    false
    )
})
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    if (Stageis == 1) {
        Stage(Stageis + 1)
    } else if (Stageis == 2) {
        Stage(Stageis + 1)
    } else if (Stageis == 3) {
        Stage(Stageis + 1)
    } else {
        game.over(true, effects.confetti)
    }
})
function Stage (num: number) {
    Stageis = num
    if (num == 1) {
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f e 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            d f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
    } else if (num == 2) {
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 f f f f f f f f e 
            7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 f f f f f f 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            d f f 7 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        myTile = scene.getTile(0, 7)
        scene.place(myTile, mySprite)
        myTile = scene.getTile(20, 1)
        scene.place(myTile, Duck)
    } else if (num == 3) {
        scene.setTileMap(img`
            7 7 7 f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 e 
            7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 f 
            7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 f 
            7 7 7 f f f f 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 f 
            7 7 7 7 7 7 f 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 f 7 7 7 f 
            7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 
            7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            d f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        myTile = scene.getTile(0, 7)
        scene.place(myTile, mySprite)
        myTile = scene.getTile(20, 0)
        scene.place(myTile, Duck)
    } else {
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 e 
            7 f f f f f f f f 7 f f f f f 7 f 7 7 7 f 7 7 7 7 7 7 7 7 7 7 f 
            7 f 7 7 7 7 7 7 f 7 f 7 7 7 f 7 f 7 7 7 f 7 7 7 7 7 7 7 7 7 7 f 
            7 f 7 7 7 7 7 7 f 7 f 7 7 7 f 7 f f 7 7 f f 7 7 7 7 7 7 7 7 7 f 
            7 f 7 7 f f f 7 f 7 f f 7 7 f 7 7 f 7 7 7 f 7 f f f 7 7 7 7 7 f 
            7 f f f f 7 f 7 f 7 7 f 7 7 f 7 7 f f 7 7 f f f 7 f f f f f f f 
            7 7 7 7 7 7 f 7 f 7 7 f 7 7 f 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            d f f f f f f 7 f f f f 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        myTile = scene.getTile(0, 7)
        scene.place(myTile, mySprite)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
let Duck: Sprite = null
let Stageis = 0
let myTile: tiles.Tile = null
let mySprite: Sprite = null
Startgame(1)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f d f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f f f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
myTile = scene.getTile(0, 7)
scene.place(myTile, mySprite)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
Stageis = 1
Duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f 5 5 . . . . . . . 
    . . . . 4 4 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 f f f 5 5 5 . . 
    . . . . . . 5 5 f f f 5 5 5 . . 
    . . . . . . 5 5 5 5 5 5 5 . . . 
    . . . . . . . . f . f . . . . . 
    . . . . . . . . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myTile = scene.getTile(20, 0)
scene.place(myTile, Duck)
info.setLife(50)
game.onUpdate(function () {
    if (mySprite.overlapsWith(Duck) && controller.A.isPressed()) {
        info.changeLifeBy(1)
    } else if (mySprite.overlapsWith(Duck) && !(controller.A.isPressed())) {
        info.changeLifeBy(-1)
    }
})
