const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();

class Address {
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newAddress = new Address();

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = newAddress;
    }
}
const newCompany = new Company();

app.get("/api/users/new", (req, res) => {
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompany);
});

app.get("/api/company/new", (req, res) => {
    res.json([newUser, newCompany]);
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);