const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

//apply method
person.fullName.apply(person1, ["Oslo", "Norway"]);

//call method
person.fullName.call(person1, "Oslo", "Norway");


var website = {  
  name: "Javatpoint",  
  getName: function() {  
    return this.name;  
  }  
}  
var unboundGetName = website.getName;  
var boundGetName = unboundGetName.bind(website);  
console.log(boundGetName());  