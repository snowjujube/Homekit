const Gpio = require('pigpio').Gpio;

class UnderLight {
    constructor() {
        this.light = new Gpio(21, {mode: Gpio.OUTPUT});
    }

    open() {
        this.light.digitalWrite(0);
        console.log(`opened GPIO PORT:21, now setup to level ${this.light.digitalRead()}`);
    }

    close() {
        this.light.digitalWrite(1);
        console.log(`closed GPIO PORT:21, now setup to level ${this.light.digitalRead()}`);
    }

    timeout() {
        // TODO
    }
}


module.exports = new UnderLight();
