////////////////////////////  arrays   ////////////////////////

const score = [2, 1,7, 5,3];

// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);
// const score1 = [7,8,9]
// const newScore = [...score,score1];
// console.log(newScore);

// const cart ={
//     1:5,
//     5:3,

// };
// const newCart=({...cart,2:9})
// console.log(newCart)

let cart = {};
const products = [
    {id:1, name: "product1", price: 25},
    {id:2, name: "product2", price: 50},
    {id:3, name: "product3", price: 75},
];
// console.log(products[0])
function addToCart(id){
    cart = { ...cart,[id]:1};
}


addToCart(1);  
addToCart(3);  
addToCart(4);  
console.log(cart);