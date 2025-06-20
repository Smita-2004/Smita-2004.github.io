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

const cart ={
    1:5,
    5:3,

};
const newCart=({...cart,2:9})
console.log(newCart)