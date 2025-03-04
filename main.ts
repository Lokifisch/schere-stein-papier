function _3 () {
    basic.showString("Draw")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . #
        # . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (_1s2st3pa == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    if (_1s2st3pa == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (_1s2st3pa == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
}
function Winn () {
    basic.setLedColor(0x00ff00)
    music.playMelody("C5 C5 - - C5 C5 - - ", 1500)
    if (1 == Mode) {
        _()
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    _1s2st3pa += 1
    if (_1s2st3pa == 4) {
        _1s2st3pa = 1
    }
    if (_1s2st3pa == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    if (_1s2st3pa == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (_1s2st3pa == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Mode = 1 - Mode
    if (parseFloat("1") == Mode) {
        basic.showIcon(IconNames.Happy)
    }
    if (parseFloat("0") == Mode) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Gegner = randint(1, 3)
    if (_1s2st3pa == 1) {
        if (Gegner == 1) {
            Draw()
        }
        if (Gegner == 2) {
            Lose()
        }
        if (Gegner == 3) {
            Winn()
        }
    }
    if (_1s2st3pa == 2) {
        if (Gegner == 1) {
            Winn()
        }
        if (Gegner == 2) {
            Draw()
        }
        if (Gegner == 3) {
            Lose()
        }
    }
    if (_1s2st3pa == 3) {
        if (Gegner == 1) {
            Lose()
        }
        if (Gegner == 2) {
            Winn()
        }
        if (Gegner == 3) {
            Draw()
        }
    }
})
function _ () {
    basic.showString("You Win")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . # . .
        . . . . .
        . . # . .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        # . . # .
        . . . # .
        # . . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . # . .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . # . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (_1s2st3pa == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    if (_1s2st3pa == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (_1s2st3pa == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
}
function Draw () {
    basic.setLedColor(0xff8000)
    music.playMelody("F F - - F F - - ", 1500)
    if (1 == Mode) {
        _3()
    }
}
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Mode = 1 - Mode
    if (parseFloat("1") == Mode) {
        basic.showIcon(IconNames.Happy)
    }
    if (parseFloat("0") == Mode) {
        basic.showIcon(IconNames.Sad)
    }
})
function _2 () {
    basic.showString("You Lost")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . #
        . . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . # . # .
        . . . # .
        . # . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        # . # . .
        . . # . .
        # . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        . # . . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        # . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (_1s2st3pa == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    if (_1s2st3pa == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (_1s2st3pa == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
}
function Lose () {
    basic.setLedColor(0xff0000)
    music.playMelody("C C - - C C - - ", 1500)
    if (1 == Mode) {
        _2()
    }
}
let Gegner = 0
let Mode = 0
let _1s2st3pa = 0
_1s2st3pa = 1
basic.showLeds(`
    # . . . #
    . # . # .
    . # . # .
    . . # . .
    . # . # .
    `)
basic.forever(function () {
	
})
