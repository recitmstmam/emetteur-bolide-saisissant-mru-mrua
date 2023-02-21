pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Fentes += 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Go") {
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
        debute = 2
    } else {
        basic.showIcon(IconNames.No)
        debute = 0
    }
})
let f2 = 0
let f1 = 0
let Fentes = 0
let debute = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
debute = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    while (debute == 2) {
        f1 = Fentes
        if (f1 > f2) {
            radio.sendNumber(Fentes)
        }
        f2 = f1
        basic.pause(10)
    }
})
