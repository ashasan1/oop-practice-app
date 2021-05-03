const Employee = require ('./employee');
const Cashier = require ('./cashier');
const DriveThru = require ('./drivethru');
const Barista = require('./barista');

const inquirer = require('inquirer');
const fs = require('fs');

let teamMember = []; 

inquirer.prompt([
    {
        type: 'list',
        message: 'What is your employee position?',
        name: 'position',
        choices: ['Barista', 'Cashier', 'Drive-Thru'],
    }
]).then(function (response) {
    if (response.position === 'Barista') {
        makeBarista()
    } else if (response.position === 'Cashier') {
        makeCashier()
    } else if (response.position === 'Drive-Thru') {
        makeDrive()
    }
});

function makeHTML(input) {
    fs.writeFile('team.html', input, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Success!")
        }
    });
}

function makeBarista() {
inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'What is the Barista name?'
    },
    {
        type:'input',
        name: 'id',
        message: 'What is the barista id number?'
    },
    {
        type:'list',
        name: 'position',
        message: 'What is title of your position?',
        choices: ['Barista', 'Cashier', 'DriveThru']
    },
    {
        type: 'input',
        name: 'faveDrink',
        message: "What is the barista's fave drink?",
    }
]).then( function (response) {
    const name = response.name;
    const idNumber = response.id;
    const position = response.position;
    const faveDrink = response.faveDrink;
    const teamBarista = new Barista(name, idNumber,position,faveDrink);
    teamMember.push(teamBarista);
    console.log(teamMember);
    makeHTML(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamMember[0].position}</title>
    </head>
    <body>
    <div>
    <h1>${teamMember[0].name}</h1>
    <h2>${teamMember[0].position}</h2>
    <h2>${teamMember[0].idNumber}</h2>
    <h2>${teamMember[0].faveDrink}</h2>

    </div>
        
    </body>
    </html>
    `
)
});

}

function makeCashier() {
console.log('cashier');
inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'What is the Cashier name?'
    },
    {
        type:'input',
        name: 'id',
        message: 'What is the Cashier id number?'
    },
    {
        type:'list',
        name: 'position',
        message: 'What is title of your position?',
        choices: ['Barista', 'Cashier', 'DriveThru']
    },
    {
        type: 'input',
        name: 'moneyCount',
        message: "What is the Cashier's daily money Count?",
    }
]).then( function (response) {
    const name = response.name;
    const idNumber = response.id;
    const position = response.position;
    const moneyCount = response.moneyCount;
    const teamCashier = new Cashier(name, idNumber,position, moneyCount);
    teamMember.push(teamCashier);
    console.log(teamMember);
    makeHTML(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamMember[0].position}</title>
    </head>
    <body>
    <div>
    <h1>${teamMember[0].name}</h1>
    <h2>${teamMember[0].position}</h2>
    <h2>${teamMember[0].idNumber}</h2>
    <h2>${teamMember[0].moneyCount}</h2>

    </div>
        
    </body>
    </html>
    `
)
});
}

function makeDrive() {
console.log('DriveThru');
inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'What is the Drive Thru worker name?'
    },
    {
        type:'input',
        name: 'id',
        message: 'What is the Drive Thru id number?'
    },
    {
        type:'list',
        name: 'position',
        message: 'What is title of your position?',
        choices: ['Barista', 'Cashier', 'DriveThru']
    },
    {
        type: 'input',
        name: 'driveTime',
        message: "What is the drive thru response time?",
    }
]).then( function (response) {
    const name = response.name;
    const idNumber = response.id;
    const position = response.position;
    const driveTime = response.driveTime;
    const teamDrive = new DriveThru(name, idNumber,position, driveTime);
    teamMember.push(teamDrive);
    console.log(teamMember);
    makeHTML(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamMember[0].position}</title>
    </head>
    <body>
    <div>
    <h1>${teamMember[0].name}</h1>
    <h2>${teamMember[0].position}</h2>
    <h2>${teamMember[0].idNumber}</h2>
    <h2>${teamMember[0].driveTime}</h2>

    </div>
        
    </body>
    </html>
    `
)
});
}