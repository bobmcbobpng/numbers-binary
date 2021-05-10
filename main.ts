input.onPinPressed(TouchPin.P0, function () {
    number = 0
})
input.onButtonPressed(Button.A, function () {
    number = number + 100
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showString("" + (number))
})
input.onButtonPressed(Button.AB, function () {
    number = number + 1
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.showString("" + (number))
})
input.onButtonPressed(Button.B, function () {
    number = number + 10
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showString("" + (number))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(698, music.beat(BeatFraction.Quarter))
    for (let index = 0; index < number; index++) {
        bit = 0
        x = 4
        y = 4
        while (led.point(x, y)) {
            led.unplot(x, y)
            bit += 1
            x = 4 - bit % 5
            y = 4 - Math.idiv(bit, 5)
        }
        led.plot(x, y)
    }
    basic.pause(5000)
    basic.clearScreen()
})
let y = 0
let x = 0
let bit = 0
let number = 0
let ones_value = 0
let twos_value = 0
let threes_value = 0
basic.forever(function () {
	
})
