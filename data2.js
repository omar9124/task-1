const fs = require("fs");

const saveData = (allData) => {
    const data = JSON.stringify(allData);
    fs.writeFileSync("data.json", data);
};

const loadInfo = () => {
    try {
        const data = fs.readFileSync("data.json").toString();
        return JSON.parse(data);
    } catch {
        return [];
    }
};


const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo();

    if (allData.length >= 10) {
        console.log("You cannot add more than 10 people.");
        return;
    }

    const DataFound = allData.find((obj) => obj.id === id);

    if (!DataFound) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        });
        saveData(allData);
        console.log(`Person added successfully! (${allData.length}/10 entries)`);
    } else {
        console.log("A person with this ID already exists.");
    }
};

const viewData = (id) => {
    const allData = loadInfo();

    if (allData.length === 0) {
        console.log("No data found.");
        return;
    }

    if (id) {
        const person = allData.find((obj) => obj.id === id);
        if (person) {
            console.log(`ID: ${person.id} | Name: ${person.fname} ${person.lname} | Age: ${person.age} | City: ${person.city}`);
        } else {
            console.log("ID NOT FOUND");
        }
    } else {
        console.log("All People:\n");
        allData.forEach((person, index) => {
            console.log(`${index + 1}. ID: ${person.id} | Name: ${person.fname} ${person.lname} | Age: ${person.age} | City: ${person.city}`);
        });
    }
};

const deleteData = (id, deleteAll) => {
    const allData = loadInfo();

    if (allData.length === 0) {
        console.log("No data available to delete.");
        return;
    }

    if (deleteAll) {
        saveData([]);
        console.log("All people deleted successfully!");
        return;
    }

    if (id) {
        const dataToKeep = allData.filter((obj) => obj.id !== id);
        if (allData.length > dataToKeep.length) {
            saveData(dataToKeep);
            console.log("Person deleted successfully!");
        } else {
            console.log("ID NOT FOUND");
        }
    }
};

const listNamesAndCities = () => {
    const allData = loadInfo();

    if (allData.length === 0) {
        console.log("No data found.");
        return;
    }

    console.log("Full Names & Cities:\n");
    allData.forEach((person, index) => {
        console.log(`${index + 1}. Full Name: ${person.fname} ${person.lname} | City: ${person.city}`);
    });
};

module.exports = {
    addPerson,
    viewData,
    deleteData,
    listNamesAndCities
};