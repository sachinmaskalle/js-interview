function Customer(id,name,address) {
    this.id = id;
    this.name = name;
    this.address = address;
}

Customer.prototype.changeAddress = function() {
    return this.address.toUpperCase() + " India";
}

function Buyer(id,name,address,location) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.location = location;
}

Buyer.prototype = Object.create(Customer.prototype);
let buyer1 = new Buyer(123,'flipkart','Bangalore','Kormangala');
console.log(buyer1.changeAddress());

/* class Person {
    constructor(name,age,status) {
        [this.name,this.age,this.status] = arguments;
    }
    getName() {
        console.log(this.name);
    }
}

class Employee extends Person {
    constructor(name,age,status,salary) {
        super(...arguments);
        this.salary = salary;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
}

let e1 = new Employee('sachin',20,true);
console.log(e1.getName()); */