import dotenv from 'dotenv';
dotenv.config();
/*encodeURIComponent   --> when we deploy our website the deploying website(like netlify) adds some extra things to our password , encodeURIComponent prevents it */
const dbuser = encodeURIComponent(process.env.dbuser);
const dbpass = encodeURIComponent(process.env.dbpass);
console.log(dbuser,dbpass);
