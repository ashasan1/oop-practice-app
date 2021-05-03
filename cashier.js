const Employee = require('./employee');

class Cashier extends Employee {
    constructor(name, idNumber, position, moneyCount) {
        super(name, idNumber, position);
        this.moneyCount = moneyCount;
    };
    getMoneyCount() {
        return this.moneyCount;
    }
}

module.exports = Cashier;