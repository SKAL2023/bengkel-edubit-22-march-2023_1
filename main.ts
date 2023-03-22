input.onButtonPressed(Button.A, function () {
    lives = -1
    basic.showNumber(lives)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(lives)
})
input.onButtonPressed(Button.B, function () {
    Hand = randint(1, 3)
    if (Hand == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let Hand = 0
let lives = 0
lives = 3
basic.forever(function () {
    if (lives < 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
