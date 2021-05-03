const Employee = require('./employee');

class DriveThru extends Employee {
    constructor(name, idNumber, position, driveTime) {
        super(name, idNumber, position);
        this.driveTime = driveTime;
    };
    getDriveTime() {
        return this.driveTime;
    }
}

module.exports = DriveThru;