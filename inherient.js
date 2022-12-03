//ES 5
function Person(name, age) {
    this.personName = name;
    this.personAge = age;
}


// inherient
function Student(name, age, className){
    Person.call(this, name, age);
    this.className = className;
}

// inherient prototype
// Student.prototype = Object.create(Person.prototype)

const std1 = new Student('TK', 23, '5CS');
console.log(std1);

const p1 = new Person('ko thant', 20)
console.log(p1);

