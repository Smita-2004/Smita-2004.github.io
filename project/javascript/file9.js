////////////////////////////  arrays   ////////////////////////

// const score = [2, 1,7, 5,3];

// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);
// const score1 = [7,8,9]
// const newScore = [...score,score1];
// console.log(newScore);



// const score = [2, 1, 7,5,3];
// score.forEach((value)=>{                    //index,whole array can be given with value
// console.log(value);
// })


// const score = [2, 1, 7,5,3];
// score.forEach((a,b,c)=>{                    
// console.log(c[b]);                             // o/p:  2,1,7,5,3
// })

// const score = [2, 1, 7,5,3];
// const newScore = score.map((value)=>{
//     // console.log(value);
//     return value+5 ;
//     // return value > 2 ;                // returns true,false
//        // return 5;         //o/p: [5,5,5,5,5]
// })
//     console.log(newScore);

// const score = [2, 1, 7,5,3];
// const newScore = score.filter((value)=>{            // returns values greater than 2
//     return value > 2 ;
// })
//     console.log(newScore);

// const score = [2, 1, 7,5,3];
// const newScore = score.find((value)=>{             // returns only one value (first match) 7
//     // return value > 2 ;
//     return value === 2;
// })
//     console.log(newScore);

const score = [2, 1, 7,5,3];
const newScore = score.reduce((sum,value)=>{
    return sum +  value ;
},0);
    console.log(newScore);