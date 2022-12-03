// // Primitive Type 
let x = 1;
let y =x;

console.log(x);
console.log(y);

x =2;
console.log(x);
console.log(y);

//boolean primitve

let ans = true;
let res = ans;

console.log(ans);
console.log(res);

ans = false;
console.log(ans);
console.log(res);

//Reference Type variable Array, Object

let name = ['ag ag', 'mg mg', 'kg kg']

let deepCopyName = [...name]
console.log("deepCopyName", deepCopyName);

deepCopyName[1] = 'su su';
console.log(deepCopyName);
console.log(name);

let copyName = name;

copyName[0] = 'Tk';

console.log(name);
console.log(copyName);


//Refrence Obj
let person = {
    name: 'Tun Tun',
    age: 23
}

let copyPerson = person;
// console.log(copyPerson)
// console.log(person);

person.name = 'Tk';
console.log(copyPerson);

// 