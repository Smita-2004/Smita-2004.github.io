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

db.employees.insertMany([
  {empId:  ObjectId('685bbf3fd25e3d3d5e748a5f'),
    location: [ 'OH', 'LA', 'FL' ],
  },
  {
    empId:  ObjectId('685bbf5cd25e3d3d5e748a60'),
     location: [ 'TX', 'LA', 'FL' ],
  },
  {
    empId: ObjectId('685bbf5cd25e3d3d5e748a61'),
    location: [ 'TX', 'LA', 'FL' ],
  },{
    empId: ObjectId('685bca049da68fc153748a61'),
    location: [ 'TX', 'LA', 'FL' ],
  }

]);



// db.employees.aggregate([
//     {$match: {salary:{$gt:2000}}},
//     {
//         $lookup:{
//         from:"$orders" ,
//         localField:" ",
//         foreignField:"_id",
//         as:"orders"
//     },
// },
// {$unwind:"$orders"},
// {$project:{name:1,slary:1,"orders.orderValue":1}},

// ])


db.employees.aggregate([
  
    {
        $lookup:{
        from:"$emp_country" ,
        localField:"location",
        foreignField:"location",
        as:"emp_country"
    },
},
{$unwind:"$emp_country"},
{$project:{name:1,"emp_country.emp_countryValue":1}},

])


db.employees.createIndex({"email":1})
db.employees.getIndex()
db.employees.dropIndex({email:1})
db.employees.find({email:"john@gmail.com"}).explain("executionStats")


// country,name,score
// India,krish,20
// India,Krish,21
// India,krish,22
// UK,john,21
// UK,john,25
// UK,john,22
db.employees.aggregate([
    {$group:{_id:{country:"$country",name:"$name"},
total:{$sum:"$score"}}}
])
