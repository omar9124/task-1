const yargs = require('yargs')
const data2 = require('./data2');

yargs.command({
    command: 'add',
    describe: 'Add a new person',
    builder: {
        id: { describe: 'Person ID', demandOption: true, type: 'string' },
        fname: { describe: 'First Name', demandOption: true, type: 'string' },
        lname: { describe: 'Last Name', demandOption: true, type: 'string' },
        age: { describe: 'Age', demandOption: true, type: 'string' },
        city: { describe: 'City', demandOption: true, type: 'string' }
    },
    handler(argv) {
        data2.addPerson(argv.id, argv.fname, argv.lname, parseInt(argv.age), argv.city);
    }
});

yargs.command({
    command: 'view',
    describe: 'View all people or view a specific person by ID',
    builder: {
        id: { describe: 'Person ID', demandOption: false, type: 'string' }
    },
    handler(argv) {
        data2.viewData(argv.id);
    }
});

yargs.command({
    command: 'delete',
    describe: 'Delete a specific person by ID or all people',
    builder: {
        id: { describe: 'Person ID (optional)', demandOption: false, type: 'string' },
    },
    handler(argv) {
        data2.deleteData(argv.id, argv.all);
    }
});

yargs.command({
    command: 'names-cities',
    describe: 'View full names and cities of each person',
    handler() {
        data2.listNamesAndCities();
    }
});

yargs.parse();
