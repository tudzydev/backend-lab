const person = {
    studentId: 674259009,
    firstname: 'Narongsak',
    lastname: 'Pumpasert',
    sex: 'male',
    status: 'married',
    married: true,
    subject: ['math', 'science', 'english'],
    address: {
        subdistrict: 'bang len',
        district: 'bang len',
        province: 'nakhon pathom',
        postalCode: 73130
    }
}

let subjects = person.subject;
subjects.splice(1, 1, subjects.splice(2, 1, subjects[1])[0]);

const title = person.sex === 'male' ? 'mr.' : (person.married ? 'mrs.' : 'ms.');

const data = `Student ID: ${person.studentId}
Name: ${title}${person.firstname}
Lastname: ${person.lastname},
status: ${person.status},
subject: ${subjects.join(', ')},
Address: ${person.address.subdistrict}
         ${person.address.district}
         ${person.address.province}
         ${person.address.postalCode}`;

// console.log(data);

//---------------------------------------------------//
import { PI, add, multiply, divide, subtract,calculateCircleArea, mod  } from './utils.js';

const radius = 5;
const a = 8;
const b = 9;

console.log(`PI: ${PI}`);
console.log(`Area: ${calculateCircleArea(radius)}`);
console.log(`Sum: ${add(a, b)}`);
console.log(`Multiply: ${multiply(a, b)}`);
console.log(`Divide: ${divide(a, b)}`);
console.log(`Subtract: ${subtract(a, b)}`);
console.log(`Mod: ${mod(a, b)}`);
