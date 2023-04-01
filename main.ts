function Séquence_2 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (interrupteur == 1) {
        interrupteur = 0
    } else {
        interrupteur = 1
    }
})
function Séquence_1 () {
    pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
    pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    if (choix == 1) {
        choix = 2
        basic.showNumber(choix)
    } else {
        choix = 1
        basic.showNumber(choix)
    }
})
function Fermer_DEL () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let choix = 0
let interrupteur = 0
interrupteur = 0
choix = 1
basic.forever(function () {
    if (interrupteur == 1 && choix == 1) {
        Séquence_1()
    } else if (interrupteur == 1 && choix == 2) {
        Séquence_2()
    } else {
        Fermer_DEL()
    }
})
