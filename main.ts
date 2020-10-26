input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) > 700) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        basic.clearScreen()
    }
})
