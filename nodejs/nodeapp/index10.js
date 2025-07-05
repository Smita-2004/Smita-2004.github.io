
// const stName = "John";
// console.log(stName);

// I/P:  node index10 Mike Amy
// O/P: Hello Mike and Amy
// const stName1 = process.argv[2] || "John";
// const stName2 = process.argv[3] || "John";
// console.log(`Hello ${stName1} and ${stName2}`);

// I/P: node index10 8081
// OP: server started on 8081

import express from 'express';
const app =express();
const port = process.argv[2] || "8080";

app.listen(port, (req,res) => {
    console.log(`server started on ${port}`);
});