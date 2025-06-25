///////////////  arrow function   //////////////////////


// greet();   // hoisting
// function greet(){
//     console.log("Hello")
// }

// x =10 ;  
// console.log(x);
// var x;


// const greet =10;
// console.log(greet);

 
// const greet = () =>{console.log("hello")};
// greet();

//////////////// hoisting doesn't work with arrow function
// greet();
// const greet = () =>{console.log("hello")};

// const add = (a,b) =>{
//     console.log(a+b)
// }
// add(4,5)

// const add = (a,b) =>{
//  return a+b
// }
// const res = add(4,5)
// console.log(res)


const add= (...args) =>{
//  console.log(args[0])
 console.log(args)
}
add(4,5,6,7,8)