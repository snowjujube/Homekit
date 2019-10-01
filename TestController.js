const Gpio = require('pigpio').Gpio;

class TestController {
    constructor() {
        this.controller1 = new Gpio(20, {mode: Gpio.OUTPUT});
        this.controller2 = new Gpio(21, {mode: Gpio.OUTPUT});
    }


    light1() {
        console.log('light 1 enabled!');
        this.controller1.digitalWrite(1);
        this.controller2.digitalWrite(0);
    }

    light2() {
        console.log('light 2 enabled!');
        this.controller1.digitalWrite(0);
        this.controller2.digitalWrite(1);
    }

    close() {
        console.log('light closed');
        this.controller1.digitalWrite(0);
        this.controller2.digitalWrite(0);
    }

    debug() {
        return `gpio20:${this.controller1.digitalRead()} \n gpio21:${this.controller2.digitalRead()}`;
    }
}


module.exports = new TestController();
