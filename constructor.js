// constructor function ES 5
function Person(name, age) {
    this.personName = name;
    this.personAge = age;
}
Person.prototype.getName = function(){
    return this.name;
}

const p1 = new Person('KO Thant', 23);
const p2 = new Person('KO Zee', 20);

console.log(p1);

//new keyword
//create new empty object {}
// bind this keywrod to object

