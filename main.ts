input.onPinPressed(TouchPin.P0, function () {
    basic.showString("0")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("2")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("1")
})
input.temperature()
input.compassHeading()
input.lightLevel()
