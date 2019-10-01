const rpio = require('rpio');

class TestController {
    constructor() {
        // 初始化rpio
        this.pi = rpio;
    }

    light1() {
        console.log('light 1 enabled!');
        this.pi.open(20, this.pi.OUTPUT, this.pi.HIGH);
        this.pi.open(21, this.pi.OUTPUT, this.pi.LOW);
    }

    light2() {
        console.log('light 2 enabled!');
        this.pi.open(20, this.pi.OUTPUT, this.pi.LOW);
        this.pi.open(21, this.pi.OUTPUT, this.pi.HIGH);
    }

    close() {
        console.log('light closed');
        this.pi.open(20, this.pi.OUTPUT, this.pi.LOW);
        this.pi.open(21, this.pi.OUTPUT, this.pi.LOW);
    }
}


module.exports = new TestController();
