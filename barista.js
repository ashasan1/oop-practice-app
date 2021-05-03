const Employee = require('./employee');

class Barista extends Employee {
    constructor(name, idNumber, position, faveDrink) {
        super(name, idNumber, position);
        this.faveDrink = faveDrink
    };
    getFaveDrink() {
        return this.faveDrink
    }
}

module.exports = Barista;