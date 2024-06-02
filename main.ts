namespace SpriteKind {
    export const Star = SpriteKind.create()
}
function rightAnimation () {
    isAnimLoop = false
    if (isAnimLoop) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Monkey1`,
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Monkey1`,
        200,
        false
        )
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftButtonPressed == true) {
        leftAnimation()
    } else if (rightButtonPressed == true) {
        rightAnimation()
    } else {
        leftAnimation()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    isAnimLoop = true
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    leftAnimation()
    leftButtonPressed = true
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    isAnimLoop = true
    rightButtonPressed = false
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    isAnimLoop = true
    leftButtonPressed = false
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
})
info.onScore(10, function () {
    startCountDown = 4
    OzelGuc()
})
info.onScore(100, function () {
    startCountDown = 1
    OzelGuc()
})
function OzelGuc () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Star)
    Star1 = sprites.create(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Star)
    Star1.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rightAnimation()
    rightButtonPressed = true
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    isAnimLoop = true
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftButtonPressed == true) {
        leftAnimation()
    } else if (rightButtonPressed == true) {
        rightAnimation()
    } else {
        leftAnimation()
    }
})
info.onScore(50, function () {
    startCountDown = 2
    OzelGuc()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.createSong(assets.song`ElmaSesi`), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    Random = randint(0, 5)
    if (Random == 0) {
        pizza.setImage(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `)
    } else if (Random == 1) {
        pizza.setImage(img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `)
    } else if (Random == 2) {
        pizza.setImage(img`
            . . . . . . . e e e e . . . . . 
            . . . . . e e 4 5 5 5 e e . . . 
            . . . . e 4 5 6 2 2 7 6 6 e . . 
            . . . e 5 6 6 7 2 2 6 4 4 4 e . 
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
            e 5 e c 5 4 5 4 5 5 5 e e . . . 
            e 5 e e 5 5 5 5 5 4 e . . . . . 
            4 5 4 e 5 5 5 5 e e . . . . . . 
            . 4 5 4 5 5 4 e . . . . . . . . 
            . . 4 4 e e e . . . . . . . . . 
            `)
    } else if (Random == 3) {
        pizza.setImage(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `)
    } else if (Random == 4) {
        pizza.setImage(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `)
    } else if (Random == 5) {
        pizza.setImage(img`
            . . . . . . b b b b a a . . . . 
            . . . . b b d d d 3 3 3 a a . . 
            . . . b d d d 3 3 3 3 3 3 a a . 
            . . b d d 3 3 3 3 3 3 3 3 3 a . 
            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
            a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
            a a 3 3 3 d d d a a 4 4 4 e e . 
            . e a a a a a a 4 4 4 4 e e . . 
            . . e e b b 4 4 4 4 b e e . . . 
            . . . e e e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    info.startCountdown(startCountDown)
})
info.onScore(20, function () {
    startCountDown = 3
    OzelGuc()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Star, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 200, 200)
    sprites.destroy(Star1)
    info.startCountdown(3)
    pause(5000)
    controller.moveSprite(mySprite, withButtons, withButtons)
    info.startCountdown(5)
})
function leftAnimation () {
    isAnimLoop = false
    if (isAnimLoop) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Monkey`,
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Monkey`,
        200,
        false
        )
    }
}
let Random = 0
let Star1: Sprite = null
let rightButtonPressed = false
let leftButtonPressed = false
let isAnimLoop = false
let startCountDown = 0
let pizza: Sprite = null
let withButtons = 0
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
mySprite = sprites.create(assets.image`Maymun2`, SpriteKind.Player)
withButtons = 100
controller.moveSprite(mySprite, withButtons, withButtons)
pizza = sprites.create(assets.image`Apple`, SpriteKind.Food)
startCountDown = 5
info.setLife(3)
