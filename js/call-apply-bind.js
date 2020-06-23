function printName(city, state) {
  console.log(this.fname + ' ' + this.lastname + ' ,' + city + ' ,' + state);
}

let p1 = {
  fname:'sachin',
  lastname: 'maskalle'
};
let p2 = {
  fname:'suraj',
  lastname: 'sheena'
};
let p3 = {
  fname:'michael',
  lastname: 'vaughn'
};

// Call , Apply
// printName.call(p2,"bidar","karnataka");
// printName.apply(p1,["mangalore","karnataka"]);

// Bind 
let myFullName = printName.bind(p3,'Baroda','Gujrath');
console.log(myFullName);