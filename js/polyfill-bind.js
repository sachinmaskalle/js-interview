// let myName = printName.bind(thisObj,"City");
// myName("State");
function getName(age,city) {
    console.log(this.name.toUpperCase() + ' ,' + age + ' ,' + city);
}

let person = {
    name: 'sachin'
};


    Function.prototype.customBind = function(...args) {
        var self = this
        var restArgs = args.slice(1);

        return function(...args2) {
            self.apply(args[0],[...restArgs,...args2]);
        }
    }


let myName = getName.customBind(person,20);
console.log(myName("Bidar"));