enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const house = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const house2 = SpriteKind.create()
    export const Teach = SpriteKind.create()
    export const Bitches = SpriteKind.create()
    export const Cageite = SpriteKind.create()
    export const CosmicCab = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cageite, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        cage.sayText("Hello!", 2000, true)
        pause(2000)
        cage.sayText("Welcome to The Church of Cage!", 5000, true)
        ChangePlayer(cageImage, CampPeople.Cage)
    }
})
function CreateChurchOfCage () {
    cage = sprites.create(cageImage, SpriteKind.Cageite)
    cage.setPosition(80, 220)
}
function CreateBitchesCouch () {
    firstCouch = sprites.create(img`
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.house)
    firstCouch.setPosition(220, 40)
    longCouch = sprites.create(img`
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.house)
    longCouch.setPosition(240, 40)
    secondLongCouch = sprites.create(img`
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.house)
    secondLongCouch.setPosition(260, 40)
    thirdLongCouch = sprites.create(img`
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.house)
    thirdLongCouch.setPosition(280, 40)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teach, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otter.sayText("Hello!", 2000, true)
        pause(2000)
        otter.sayText("Welcome to Ottervile!", 5000, true)
        ChangePlayer(otterImage, CampPeople.Otter)
    }
})
// creates 2 trees
function Make_trees () {
    Tree0 = sprites.create(img`
        ...............cc...............
        ............ccc65c66............
        ............c6c55c76............
        ...........6cc7557c66...........
        ..........cc77777577c6..........
        .........666c677776cc66.........
        ........c7776c7c67657576........
        ........ccc666c666655666........
        ......c66cc7666667777c6766......
        .....c777c77667667767767776.....
        .....cc66cccc77c677cc666666.....
        ....c6766666c7c6767677777766....
        ...cc777666666677767777667c66...
        .666cc6677666667777777776677666.
        .67776677c676677777776677677776.
        cc6666ccc67767776777776cc7767666
        c666777667766776c776777c67776c66
        .c6777666ccc667c676cc666667776c.
        .cc6666766666cc66666666776cc666.
        ...66776c666666666677667766cccc.
        ...cc76c66766666667677667776c...
        ...6cccc677666666776777c77666...
        ......6ccc7c67767776c776cc......
        ........ccc6777c67776cc6........
        ...........cc77c67766...........
        .............6c6666.............
        ............ffeeeef.............
        ..........ffeeeeeeeef...........
        .............feeeffe............
        ..............fef...............
        ..............fef...............
        ...............f................
        `, SpriteKind.tree)
    Tree0.setPosition(110, 120)
    Tree1 = sprites.create(img`
        ...............cc...............
        ............ccc65c66............
        ............c6c55c76............
        ...........6cc7557c66...........
        ..........cc77777577c6..........
        .........666c677776cc66.........
        ........c7776c7c67657576........
        ........ccc666c666655666........
        ......c66cc7666667777c6766......
        .....c777c77667667767767776.....
        .....cc66cccc77c677cc666666.....
        ....c6766666c7c6767677777766....
        ...cc777666666677767777667c66...
        .666cc6677666667777777776677666.
        .67776677c676677777776677677776.
        cc6666ccc67767776777776cc7767666
        c666777667766776c776777c67776c66
        .c6777666ccc667c676cc666667776c.
        .cc6666766666cc66666666776cc666.
        ...66776c666666666677667766cccc.
        ...cc76c66766666667677667776c...
        ...6cccc677666666776777c77666...
        ......6ccc7c67767776c776cc......
        ........ccc6777c67776cc6........
        ...........cc77c67766...........
        .............6c6666.............
        ............ffeeeef.............
        ..........ffeeeeeeeef...........
        .............feeeffe............
        ..............fef...............
        ..............fef...............
        ...............f................
        `, SpriteKind.tree)
    Tree1.setPosition(180, 120)
}
// sets tilemap
// 
// calls trees
function Bitch () {
    Bitch1 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.Bitches)
    animation.runImageAnimation(
    Bitch1,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    200,
    true
    )
    Bitch1.setPosition(220, 40)
    BitchFood = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ........88888.......
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......8888888......
        .......8888888......
        ........88888.......
        ........fffff.......
        ....................
        ....................
        `, SpriteKind.Food)
    BitchFood.setPosition(260, 40)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bitches, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Bitch1.sayText("Hello!", 2000, true)
        pause(2000)
        Bitch1.sayText("Welcome to The Bitches Couch!", 5000, true)
        ChangePlayer(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `, CampPeople.Bitch)
    }
})
// Talk - press A and overlap with NPC and the NPC will talk
function Map () {
    tiles.setCurrentTilemap(tilemap`level2`)
    music.play(music.createSong(assets.song`song`), music.PlaybackMode.LoopingInBackground)
    Make_trees()
    CreateBitchesCouch()
    CreateChurchOfCage()
    CreateCosmicCab()
    CreateOtterSpace()
    Bitch()
    good = sprites.create(assets.image`player`, SpriteKind.Player)
    good.setPosition(80, 80)
}
// Player animation and movement. but animation is kind of broken. looks like lag
// 
// if (controller.down.isPressed()) {
// animation.runImageAnimation(
// good,
// [img`
// . . . . . . f f f f . . . . . .
// . . . . f f f 2 2 f f f . . . .
// . . . f f f 2 2 2 2 f f f . . .
// . . f f f e e e e e e f f f . .
// . . f f e 2 2 2 2 2 2 e e f . .
// . . f e 2 f f f f f f 2 e f . .
// . . f f f f e e e e f f f f . .
// . f f e f b f 4 4 f b f e f f .
// . f e e 4 1 f d d f 1 4 e e f .
// . . f e e d d d d d d e e f . .
// . . . f e e 4 4 4 4 e e f . . .
// . . e 4 f 2 2 2 2 2 2 f 4 e . .
// . . 4 d f 2 2 2 2 2 2 f d 4 . .
// . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
// . . . . . f f f f f f . . . . .
// . . . . . f f . . f f . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f . . . . . .
// . . . . f f f 2 2 f f f . . . .
// . . . f f f 2 2 2 2 f f f . . .
// . . f f f e e e e e e f f f . .
// . . f f e 2 2 2 2 2 2 e e f . .
// . f f e 2 f f f f f f 2 e f f .
// . f f f f f e e e e f f f f f .
// . . f e f b f 4 4 f b f e f . .
// . . f e 4 1 f d d f 1 4 e f . .
// . . . f e 4 d d d d 4 e f e . .
// . . f e f 2 2 2 2 e d d 4 e . .
// . . e 4 f 2 2 2 2 e d d e . . .
// . . . . f 4 4 5 5 f e e . . . .
// . . . . f f f f f f f . . . . .
// . . . . f f f . . . . . . . . .
// `,img`
// . . . . . . f f f f . . . . . .
// . . . . f f f 2 2 f f f . . . .
// . . . f f f 2 2 2 2 f f f . . .
// . . f f f e e e e e e f f f . .
// . . f f e 2 2 2 2 2 2 e e f . .
// . . f e 2 f f f f f f 2 e f . .
// . . f f f f e e e e f f f f . .
// . f f e f b f 4 4 f b f e f f .
// . f e e 4 1 f d d f 1 4 e e f .
// . . f e e d d d d d d e e f . .
// . . . f e e 4 4 4 4 e e f . . .
// . . e 4 f 2 2 2 2 2 2 f 4 e . .
// . . 4 d f 2 2 2 2 2 2 f d 4 . .
// . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
// . . . . . f f f f f f . . . . .
// . . . . . f f . . f f . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f . . . . . .
// . . . . f f f 2 2 f f f . . . .
// . . . f f f 2 2 2 2 f f f . . .
// . . f f f e e e e e e f f f . .
// . . f e e 2 2 2 2 2 2 e f f . .
// . f f e 2 f f f f f f 2 e f f .
// . f f f f f e e e e f f f f f .
// . . f e f b f 4 4 f b f e f . .
// . . f e 4 1 f d d f 1 4 e f . .
// . . e f e 4 d d d d 4 e f . . .
// . . e 4 d d e 2 2 2 2 f e f . .
// . . . e d d e 2 2 2 2 f 4 e . .
// . . . . e e f 5 5 4 4 f . . . .
// . . . . . f f f f f f f . . . .
// . . . . . . . . . f f f . . . .
// `],
// 500,
// true
// )
// }
// if (controller.up.isPressed()) {
// animation.runImageAnimation(
// good,
// [img`
// . . . . . . f f f f . . . . . .
// . . . . f f e e e e f f . . . .
// . . . f e e e f f e e e f . . .
// . . f f f f f 2 2 f f f f f . .
// . . f f e 2 e 2 2 e 2 e f f . .
// . . f e 2 f 2 f f 2 f 2 e f . .
// . . f f f 2 2 e e 2 2 f f f . .
// . f f e f 2 f e e f 2 f e f f .
// . f e e f f e e e e f e e e f .
// . . f e e e e e e e e e e f . .
// . . . f e e e e e e e e f . . .
// . . e 4 f f f f f f f f 4 e . .
// . . 4 d f 2 2 2 2 2 2 f d 4 . .
// . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
// . . . . . f f f f f f . . . . .
// . . . . . f f . . f f . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f . . . . . .
// . . . . f f e e e e f f . . . .
// . . . f e e e f f e e e f . . .
// . . . f f f f 2 2 f f f f . . .
// . . f f e 2 e 2 2 e 2 e f f . .
// . . f e 2 f 2 f f f 2 f e f . .
// . . f f f 2 f e e 2 2 f f f . .
// . . f e 2 f f e e 2 f e e f . .
// . f f e f f e e e f e e e f f .
// . f f e e e e e e e e e e f f .
// . . . f e e e e e e e e f . . .
// . . . e f f f f f f f f 4 e . .
// . . . 4 f 2 2 2 2 2 e d d 4 . .
// . . . e f f f f f f e e 4 . . .
// . . . . f f f . . . . . . . . .
// `,img`
// . . . . . . f f f f . . . . . .
// . . . . f f e e e e f f . . . .
// . . . f e e e f f e e e f . . .
// . . f f f f f 2 2 f f f f f . .
// . . f f e 2 e 2 2 e 2 e f f . .
// . . f e 2 f 2 f f 2 f 2 e f . .
// . . f f f 2 2 e e 2 2 f f f . .
// . f f e f 2 f e e f 2 f e f f .
// . f e e f f e e e e f e e e f .
// . . f e e e e e e e e e e f . .
// . . . f e e e e e e e e f . . .
// . . e 4 f f f f f f f f 4 e . .
// . . 4 d f 2 2 2 2 2 2 f d 4 . .
// . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
// . . . . . f f f f f f . . . . .
// . . . . . f f . . f f . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f . . . . . .
// . . . . f f e e e e f f . . . .
// . . . f e e e f f e e e f . . .
// . . . f f f f 2 2 f f f f . . .
// . . f f e 2 e 2 2 e 2 e f f . .
// . . f e f 2 f f f 2 f 2 e f . .
// . . f f f 2 2 e e f 2 f f f . .
// . . f e e f 2 e e f f 2 e f . .
// . f f e e e f e e e f f e f f .
// . f f e e e e e e e e e e f f .
// . . . f e e e e e e e e f . . .
// . . e 4 f f f f f f f f e . . .
// . . 4 d d e 2 2 2 2 2 f 4 . . .
// . . . 4 e e f f f f f f e . . .
// . . . . . . . . . f f f . . . .
// `],
// 500,
// true
// )
// }
// if (controller.right.isPressed()) {
// animation.runImageAnimation(
// good,
// [img`
// . . . . . . f f f f f f . . . .
// . . . . f f e e e e f 2 f . . .
// . . . f f e e e e f 2 2 2 f . .
// . . . f e e e f f e e e e f . .
// . . . f f f f e e 2 2 2 2 e f .
// . . . f e 2 2 2 f f f f e 2 f .
// . . f f f f f f f e e e f f f .
// . . f f e 4 4 e b f 4 4 e e f .
// . . f e e 4 d 4 1 f d d e f . .
// . . . f e e e 4 d d d d f . . .
// . . . . f f e e 4 4 4 e f . . .
// . . . . . 4 d d e 2 2 2 f . . .
// . . . . . e d d e 2 2 2 f . . .
// . . . . . f e e f 4 5 5 f . . .
// . . . . . . f f f f f f . . . .
// . . . . . . . f f f . . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f f f . . . .
// . . . . f f e e e e f 2 f . . .
// . . . f f e e e e f 2 2 2 f . .
// . . . f e e e f f e e e e f . .
// . . . f f f f e e 2 2 2 2 e f .
// . . . f e 2 2 2 f f f f e 2 f .
// . . f f f f f f f e e e f f f .
// . . f f e 4 4 e b f 4 4 e e f .
// . . f e e 4 d 4 1 f d d e f . .
// . . . f e e e e e d d d f . . .
// . . . . . f 4 d d e 4 e f . . .
// . . . . . f e d d e 2 2 f . . .
// . . . . f f f e e f 5 5 f f . .
// . . . . f f f f f f f f f f . .
// . . . . . f f . . . f f f . . .
// `,img`
// . . . . . . f f f f f f . . . .
// . . . . f f e e e e f 2 f . . .
// . . . f f e e e e f 2 2 2 f . .
// . . . f e e e f f e e e e f . .
// . . . f f f f e e 2 2 2 2 e f .
// . . . f e 2 2 2 f f f f e 2 f .
// . . f f f f f f f e e e f f f .
// . . f f e 4 4 e b f 4 4 e e f .
// . . f e e 4 d 4 1 f d d e f . .
// . . . f e e e 4 d d d d f . . .
// . . . . f f e e 4 4 4 e f . . .
// . . . . . 4 d d e 2 2 2 f . . .
// . . . . . e d d e 2 2 2 f . . .
// . . . . . f e e f 4 5 5 f . . .
// . . . . . . f f f f f f . . . .
// . . . . . . . f f f . . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . . . f f f f f f . . . .
// . . . . f f e e e e f 2 f . . .
// . . . f f e e e e f 2 2 2 f . .
// . . . f e e e f f e e e e f . .
// . . . f f f f e e 2 2 2 2 e f .
// . . . f e 2 2 2 f f f f e 2 f .
// . . f f f f f f f e e e f f f .
// . . f f e 4 4 e b f 4 4 e e f .
// . . f e e 4 d 4 1 f d d e f . .
// . . . f e e e 4 d d d d f . . .
// . . . . 4 d d e 4 4 4 e f . . .
// . . . . e d d e 2 2 2 2 f . . .
// . . . . f e e f 4 4 5 5 f f . .
// . . . . f f f f f f f f f f . .
// . . . . . f f . . . f f f . . .
// `],
// 500,
// true
// )
// }
// if (controller.left.isPressed()) {
// animation.runImageAnimation(
// good,
// [img`
// . . . . f f f f f f . . . . . .
// . . . f 2 f e e e e f f . . . .
// . . f 2 2 2 f e e e e f f . . .
// . . f e e e e f f e e e f . . .
// . f e 2 2 2 2 e e f f f f . . .
// . f 2 e f f f f 2 2 2 e f . . .
// . f f f e e e f f f f f f f . .
// . f e e 4 4 f b e 4 4 e f f . .
// . . f e d d f 1 4 d 4 e e f . .
// . . . f d d d d 4 e e e f . . .
// . . . f e 4 4 4 e e f f . . . .
// . . . f 2 2 2 e d d 4 . . . . .
// . . . f 2 2 2 e d d e . . . . .
// . . . f 5 5 4 f e e f . . . . .
// . . . . f f f f f f . . . . . .
// . . . . . . f f f . . . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . f f f f f f . . . . . .
// . . . f 2 f e e e e f f . . . .
// . . f 2 2 2 f e e e e f f . . .
// . . f e e e e f f e e e f . . .
// . f e 2 2 2 2 e e f f f f . . .
// . f 2 e f f f f 2 2 2 e f . . .
// . f f f e e e f f f f f f f . .
// . f e e 4 4 f b e 4 4 e f f . .
// . . f e d d f 1 4 d 4 e e f . .
// . . . f d d d e e e e e f . . .
// . . . f e 4 e d d 4 f . . . . .
// . . . f 2 2 e d d e f . . . . .
// . . f f 5 5 f e e f f f . . . .
// . . f f f f f f f f f f . . . .
// . . . f f f . . . f f . . . . .
// `,img`
// . . . . f f f f f f . . . . . .
// . . . f 2 f e e e e f f . . . .
// . . f 2 2 2 f e e e e f f . . .
// . . f e e e e f f e e e f . . .
// . f e 2 2 2 2 e e f f f f . . .
// . f 2 e f f f f 2 2 2 e f . . .
// . f f f e e e f f f f f f f . .
// . f e e 4 4 f b e 4 4 e f f . .
// . . f e d d f 1 4 d 4 e e f . .
// . . . f d d d d 4 e e e f . . .
// . . . f e 4 4 4 e e f f . . . .
// . . . f 2 2 2 e d d 4 . . . . .
// . . . f 2 2 2 e d d e . . . . .
// . . . f 5 5 4 f e e f . . . . .
// . . . . f f f f f f . . . . . .
// . . . . . . f f f . . . . . . .
// `,img`
// . . . . . . . . . . . . . . . .
// . . . . f f f f f f . . . . . .
// . . . f 2 f e e e e f f . . . .
// . . f 2 2 2 f e e e e f f . . .
// . . f e e e e f f e e e f . . .
// . f e 2 2 2 2 e e f f f f . . .
// . f 2 e f f f f 2 2 2 e f . . .
// . f f f e e e f f f f f f f . .
// . f e e 4 4 f b e 4 4 e f f . .
// . . f e d d f 1 4 d 4 e e f . .
// . . . f d d d d 4 e e e f . . .
// . . . f e 4 4 4 e d d 4 . . . .
// . . . f 2 2 2 2 e d d e . . . .
// . . f f 5 5 4 4 f e e f . . . .
// . . f f f f f f f f f f . . . .
// . . . f f f . . . f f . . . . .
// `],
// 500,
// true
// )
// }
function PLAYER () {
    scene.cameraFollowSprite(good)
    controller.moveSprite(good)
}
function CreateCosmicCab () {
    cab = sprites.create(cosmicCab, SpriteKind.CosmicCab)
    cab.setPosition(220, 220)
}
function CreateOtterSpace () {
    otter = sprites.create(otterImage, SpriteKind.Teach)
    // animation.runImageAnimation(
    // otter,
    // [img`
    // e e e . . . . e e e . . . .
    // c d d c . . c d d c . . . .
    // c b d d f f d d b c . . . .
    // c 3 b d d b d b 3 c . . . .
    // f b 3 d d d d 3 b f . . . .
    // e d d d d d d d d e . . . .
    // e d f d d d d f d e . b f b
    // f d d f d d f d d f . f d f
    // f b d d b b d d 2 f . f d f
    // . f 2 2 2 2 2 2 b b f f d f
    // . f b d d d d d d b b d b f
    // . f d f f f d f f d f f f .
    // . . f . . . f . . f . . . .
    // . . . . . . . . . . . . . .
    // `,img`
    // e e e . . . . e e e . . . .
    // c d d c . . c d d c . . . .
    // c b d d f f d d b c . . . .
    // c 3 b d d b d b 3 c . . . .
    // f b 3 d d d d 3 b f . . . .
    // e d d d d d d d d e . . . .
    // e d f d d d d f d e . b f b
    // f d d f d d f d d f . f d f
    // f b d d b b d d 2 f . f d f
    // . f 2 2 2 2 2 2 b b f f d f
    // . f b d d d d d d b b d b f
    // . f d d d d d d c d f f f .
    // . f d f f f d f f d f . . .
    // . . f . . . f . . f . . . .
    // `],
    // 200,
    // true
    // )
    otter.setPosition(60, 80)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CosmicCab, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        cab.sayText("Welcome to The Cosmic Cab!", 5000, true)
        ChangePlayer(cosmicCab, CampPeople.Cab)
    }
})
let BitchFood: Sprite = null
let Bitch1: Sprite = null
let Tree1: Sprite = null
let Tree0: Sprite = null
let thirdLongCouch: Sprite = null
let secondLongCouch: Sprite = null
let longCouch: Sprite = null
let firstCouch: Sprite = null
let otterImage: Image = null
let cageImage: Image = null
let cosmicCab: Image = null
let cab: Sprite = null
let cage: Sprite = null
let otter: Sprite = null
let good: Sprite = null
let x = 0
let y = 0
function ChangePlayer (image: Image, person: CampPeople) {
    x = good.x
    y = good.y
    //good.setImage()
    good.setImage(image);
    good.setPosition(x, y);
    checkForWin(person)
}

function checkForWin(person: CampPeople) {
    info.changeScoreBy(CampsList.foundPerson(person))
    console.log(info.score());
    if (info.score() == 4) {
        effects.confetti.startScreenEffect()
    }
}
enum CampPeople { Cage, Bitch, Otter, Cab }
class Camps {
    cage: boolean = false;
    bitch: boolean = false;
    otter: boolean = false;
    cab: boolean = false;
    constructor() { }
    public foundPerson(person: CampPeople) {
        if (person == CampPeople.Cage) {
            if (this.cage) {
                return 0;
            }
            this.cage = true;
            return 1;
        }
        if (person == CampPeople.Bitch) {
            if (this.bitch) {
                return 0;
            }
            this.bitch = true;
            return 1;
        }
        if (person == CampPeople.Otter) {
            if (this.otter) {
                return 0;
            }
            this.otter = true;
            return 1;
        }
        if (person == CampPeople.Cab) {
            if (this.cab) {
                return 0;
            }
            this.cab = true;
            return 1;
        }
        return 0;
    }
}
let CampsList = new Camps();
cosmicCab = img`
    .....................................
    .............cccccccccc..............
    ............cccccccccccc.............
    ............cccccccccccc.............
    ............cccccccccccc.............
    .......3ccccccccccccccccccccc........
    .......ccccccccccccccccccccccc.......
    ......cccccccccccccccccccccccc.......
    .....cccccccccccccccccccccccccc......
    .....cccc..................cccc......
    .....cccc..................cccc......
    ....ccccc..................ccccc.....
    ....cccc....................cccc.....
    ....cccc....................cccc.....
    ...ccccc....................acccc....
    ...cccc......................cccc....
    ...cccc......................ccccc...
    ..ccccc.......................cccc...
    ..cccc........................cccc...
    ..cccc........................cccc3..
    ccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccc
    ccccccacccccccccccccccccccccccacccccc
    ccc.....cccccccccccccccccccc.....cccc
    ccc......cccccccccccccccccc......cccc
    cc.......cccccccccccccccccc.......ccc
    ccc......cccccccccccccccccc......cccc
    ccc.....cccccccccccccccccccc.....cccc
    ccccc..cccccccccccccccccccccc...ccccc
    ccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccc
    .cccccccc..................cccccccc..
    .cccccccc..................cccccccc..
    .cccccccc..................cccccccc..
    .ccccccc....................ccccccc..
    .....................................
    `
cageImage = img`
    ................................................
    ....................bcfff.......................
    ..................dfffffffff....................
    .................ffffffffffffb..................
    ................fffcceeecfffffc.................
    ...............fffce44444eeefffc................
    ...............ffee4444444eeefff................
    ..............ffee444434444eeefff...............
    ..............ce44433dddd344eefffc..............
    .............fce44443dddd4444eefff..............
    .............fc4444ddddddd4bbeefff..............
    .............cfe44ddddddddbbbeefff..............
    .............ff444eebedbbeceeeecfc..............
    .............ff4beebbbdbbbbbbeecf...............
    .............cc4beec44d4befceeecf...............
    .............ec44eebb444bbbbbbecf...............
    .............be44dddd43b4ddd44eee...............
    .............ef443dd443be4dd34ece...............
    .............df443d3443bbbdddbecbb..............
    .............bee4ddd4bbbbedd3befbb..............
    .............44e4ddbbbbbebbdbbefeb..............
    .............dbebb33bbbbbbb3bbeeb...............
    ..............4ebbddb433bbbbbbeeb...............
    ................b4dbebdddbbbbbec................
    ................ebdb44bb4bbbebe.................
    ................dbbbdebbbbbbeb..................
    .................ebbddbbbbbbbb..................
    ..................bbbdd3bbbeb...................
    ...................ebbbddbbe....................
    ....................bbbbbbd.....................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `
otterImage = img`
    .............................
    .................dddd1.......
    ................ddddddcd.....
    ...............1dcddddd......
    ...............1ddbcddd......
    ................d1111dd......
    ................cddddd.......
    ................cddddc.......
    ................cddddc..cc...
    ...............cdddddc.cc....
    ...............c1ddddcccc....
    ...............ccdddcccc.....
    ..............ccccddcccc.....
    ..............ccccddccc......
    ..............cddcddccc......
    .............ccddcddcc.......
    .............ccddddccc.......
    ............cccddddccc.......
    ............cccdddcccc.......
    ..c.........cccccccccc.......
    ..c........cccccccccc........
    ..c........cc1ccccccc........
    ..cc.....cccfccccccc.........
    ...cc...cccfccccccc..........
    ....cc..cccccccccc...........
    ....ccccccccccccc............
    .....ccccccccccc.............
    ........cccffcc..............
    .............cc..............
    .............................
    `
Map()
// NPC animation for moving his feet and setting his position
forever(function () {
    PLAYER()
})
