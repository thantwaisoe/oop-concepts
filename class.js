//ES6

class Person {
  constructor(name, age) {
    this.personName = name;
    this.personAge = age;
  }
  getName(){
    return this.name;
  }
}
// const p1 = new Person('tK', 23);
// console.log(p1);

class Student extends Person{
    constructor(name, age, className){
        super(name, age);
        this.className = className;
    }
    getStudentInfo(grade){
        return `Student name ${this.personName} ${grade}`
    }
    changeStdName(changeName){
        this.personName = changeName;
    }

}

const std1 = new Student('Tk', 23, '5CS');
console.log(std1);
std1.changeStdName('Zee')
console.log(std1);