let fs = require('readline-sync');
let people = [];

while (true) {
    console.log('\n1. Enter 10 people\n2. View all people\n3. View a specific person\n4. View full names and cities\n5. Delete all people\n6. Delete a specific person\n7. Exit');
    let choice = fs.question('\nChoose an option (1-7): ');

    if (choice === '1') {
        people = [];
        for (let i = 0; i < 10; i++) {
            console.log(`\nPerson ${i + 1} of 10:`);
            people.push({
                index: i + 1,
                id: fs.question('ID: '),
                fName: fs.question('First Name: '),
                lname: fs.question('Last Name: '),
                age: fs.question('Age: '),
                city: fs.question('City: ')
            });
        }
        console.log('\nSuccessfully saved 10 people!');
    } 
    else if (choice === '2') {
        if (people.length === 0) {
            console.log('No data found.');
        } else {
            console.log('All People :\n');
            people.forEach(person => {console.log(`Person ${person.index} :\nID: ${person.id} | Name: ${person.fName} ${person.lname} | Age: ${person.age} | City: ${person.city}`);});
        }
    } 
    else if (choice === '3') {
        let id = fs.question('Enter Person ID to view: ');
        let z = people.find(x => x.id === id);
        if (z) {
            console.log(`Person ${z.index} :\nID: ${z.id} | Name: ${z.fName} ${z.lname} | Age: ${z.age} | City: ${z.city}`);
        } else {
            console.log('Person not found.');
        }
    } 
    else if (choice === '4') {
        if (people.length === 0) {
            console.log('No data found.');
        } else {
            console.log('Full Names & Cities\n');
            people.forEach(person => console.log(`Person ${person.index} :\n${person.fName}${person.lname} | City: ${person.city}`));
        }
    } 
    else if (choice === '5') {
        people = [];
        console.log('All data deleted.');
    } 
    else if (choice === '6') {
        let id = fs.question('Enter Person ID to delete: ');
        let Length = people.length;
        people = people.filter(x => x.id !== id);
        people.forEach((person, index) => { person.index = index + 1; });
        if (people.length < Length){
            console.log('Person deleted.');
        } else {
            console.log('Person not found.');
        }
    } 
    else if (choice === '7') {
        break;
    }
}