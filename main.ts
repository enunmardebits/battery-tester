input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    milivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * (3000 / 1023))
    basic.showNumber(milivolts)
    if (milivolts < 1200) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let milivolts = 0
basic.showString("Battery tester")
