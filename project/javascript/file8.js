/////////////////  objects   ////////////////////

// const student ={
//     name : "Smita",
//     age: 21,

// };
// console.log(student)
// console.log(student.name)
// console.log(student["name"])




//objects
// const student={
//     name:"harsh",
//     age:21,
//     city:"delhi"
// };
// console.log(student); // { name: 'harsh', age: 21, city: 'delhi' }
// console.log(student.name); // harsh
// console.log(student["age"]); // 21
// student.city="mumbai";
// console.log(student); // { name: 'harsh', age: 21, city: 'mumbai' }
// student.city="delhi";
// console.log(student); // { name: 'harsh', age: 21, city:
// delete student.city; // { name: 'harsh', age: 21 }
// console.log(student); // { name: 'harsh', age: 21 }
// delete student.age; // { name: 'harsh' }
// console.log(student); // { name: 'harsh' }

// const keys=Object.keys(student);
// console.log(keys); // [ 'name' ]
// const values=Object.values(student);
// console.log(values); // [ 'harsh' ]

const cart={
1:5,
3:1,
5:2,
};
const items=Object.keys(cart).length;
console.log(items); // 3
cart[3] =  cart[3]+1;
console.log(cart);
cart[3] =  cart[3]-1;
console.log(cart);
