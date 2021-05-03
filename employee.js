class Employee {
    constructor(name, idNumber, position){
        this.name = name;
        this.idNumber = idNumber;
        this.position = position;
    }
    getName() {
        return this.name;
    };
    getID() {
        return this.idNumberd;
    };
    getPosition() {
        return this.position;
    }
};

module.exports = Employee;
