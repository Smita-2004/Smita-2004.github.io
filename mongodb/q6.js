db.employess.find(
    {salary:{$get:3000}},
    { name:true }
).limit(2).slip(1)

db.employess.find(
    {$or:[{salary:{$get:3000}},{department:"IT"}]},
    { name:true }
)
 
// each object is called as pipelines
db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$project:{name:1,salary:1,location:1}},
    {$sort:{name:1}},                  // -1 for descending order
    {$limit: 1}
])

db.employees.aggregate([
    {$project:{name:1,salary:1,location:1}},
    
])

db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}},
)

//unwind -> display in separate line
db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"},
    
])

db.employees.aggregate([
    {$project:{_id:0,EmpName:"$name"}},
])

db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}}},
])

db.employees.aggregate([
    {$project:{name:0}},
])
 
// display group wise salary
db.employees.aggregate([
    {$group:{_id:"$department",total:{$sum:"$salary"}}}
]);

// display total salary of all department
db.employees.aggregate([
    {$group:{_id:null,total:{$sum:"$salary"}}}
]);

// db.employees.insertOne([
//   {
//    _id: ObjectId('685bbf5cd25e3d3d5e748a61'),
//    orderValue:1300,
//   },
// ]);

db.employees.aggregate([
    {$match: {salary:{$gt:2000}}},
    {
        $lookup:{
        from:"$orders" ,
        localField:" ",
        foreignField:"_id",
        as:"orders"
    },
},
{$unwind:"$orders"},
{$project:{name:1,slary:1,"orders.orderValue":1}},

])
