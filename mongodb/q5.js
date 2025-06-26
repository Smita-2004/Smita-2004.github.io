// set ->update something
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set :{salary:3000}} 
) 

db.employees.updateMany(
    {},
    {$set:{points:1}}
)

 
//  $inc -> increment
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)

// decrement
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}
)

// upsert -> insert and update
db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set: {name:"Krish",department:"HR",salary:2700}},
    {upsert: true}
);

//delete
db.employees.deleteOne({email:"krish@gmail.com"})


db.employees.deleteMany({department:"Admin"});


db.employees.find().sort({ name: 1 });

db.employees.find({}, { _id: 0, Empname: "$name" });

db.employees.updateMany(
    {}, 
    { $rename: { points: "score" } }
);

db.employees.updateMany(
    {}, 
    { $unset: { score: "" } }
);

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:7}}
)

db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}}
)

db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
)

db.employees.updateMany(
    {},
    {$pop:{location:1}}
)

db.employees.updateMany(
    {},
    {$pop:{location:-1}}
)



//  db.employees.countDocuments()