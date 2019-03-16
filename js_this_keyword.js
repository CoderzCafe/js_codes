var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName+ " "+this.lastName;
    },
    myFunc: function() {
        return this;
    }
};

console.log(person.fullName());

var x = this;
console.log(x);


console.log(person.myFunc());