function Customer(id,name) {
    // public props
    this.id = id;
    this.name = name;

    //private props
    var secretKey = 'My secret key';

    var getSecretKey = function() {
        return secretKey;
    }

    //privileged method
    this.getKey = function() {
        return getSecretKey();
    }

    // public method
    Customer.prototype.exposeKey = function() {
        return this.getKey();
    }
}

let c1 = new Customer(134,"Cisco");
//console.log(c1.name);  => CISCO
//console.log(c1.getSecretKey());  => undefined
//console.log(c1.secretKey);  => undefined
//console.log(c1.getSecretKey);  => My secret key
