var person1 = {
    fullName: function() {
        return this.firstName+ " " +this.lastName;
    }
};
var person2 = {
    firstName = "Sudipto",
    lastName = "Shahin"
};

var x = person1.fullName.call(person2);
console.log(x);