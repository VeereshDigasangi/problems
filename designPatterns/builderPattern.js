class Address {
    constructor(street, zip) {
        this.street = street;
        this.zip = zip;
    }
}
class User {

    constructor(name, { phone = "11111", age, address } = {}) {
        //builder pattern by passing object and destructing with default values
        this.name = name
        this.phone = phone
        this.age = age
        this.address = address
    }
}

const user = new User('veeresh', { age: 11, address: new Address('Kadni', 59534) })
console.log(user);