function Séquence_5 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(randint(100, 1000))
    Fermer_DEL()
    basic.pause(randint(100, 1000))
}
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
function Séquence_3 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(400)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(400)
}
function Séquence_1 () {
    pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
    pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
    basic.pause(500)
}
function Séquence_4 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
}
function Séquence_6 () {
    Fermer_DEL()
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        Fermer_DEL()
        basic.pause(100)
    }
    basic.pause(700)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        Fermer_DEL()
        basic.pause(100)
    }
    basic.pause(700)
}
input.onButtonPressed(Button.B, function () {
    if (choix == 6) {
        choix = 1
        basic.showNumber(choix)
    } else {
        choix += 1
        basic.showNumber(choix)
    }
    basic.pause(500)
    basic.clearScreen()
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
    if (interrupteur == 1) {
        if (choix == 1) {
            Séquence_1()
        } else if (choix == 2) {
            Séquence_2()
        } else if (choix == 3) {
            Séquence_3()
        } else if (choix == 4) {
            Séquence_4()
        } else if (choix == 5) {
            Séquence_5()
        } else {
            Séquence_6()
        }
    } else {
        Fermer_DEL()
    }
})
