
var car = {type: 'Fiat', model: '500', color: 'white'};

console.log("Car type: " +car.type, "\n Car model: " +car.model+ "\n Car color: " +car.color);

//  create person object
var person = {firstName: 'Shahin',
    lastName: 'Sudipto',
     age: '20',
     height: '5.5',
    
     fullName: function() {
         return this.firstName+ " " +this.lastName;
     }
    };

console.log(person.firstName+ " is " +person.age+ " yerars old and height is" +person.height);
console.log(person.fullName());


//  time
console.log("The time is: " +new Date());
console.log("Date: " +displayDate());