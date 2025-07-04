// array operators

db.employees.find()
db.employees.find().skip(1)           // first not displayed
db.employees.find().limit(1)            // only 1st displayed
db.employees.find().skip(1).limit(1)   // second one display
db.employees.find({department:"IT"})
db.employees.find({department:"IT"},{_id:0,name:1})
db.employees.find(
    {department:{$eq: "IT"}},
    {_id:0,name:1,salary:1}
)


db.employees.find(
    {salary:{$gte: 3000}},  // gte : greater than or equal to
    {_id:0,name:1,salary:1}
)
  // lte : less than or equal to
db.employees.find(
    {salary:{$lte: 3000}},
    {_id:0,name:1,salary:1}
)


db.employees.find(
    {salary:{$lte: 3000},department:"IT"},
    {_id:0,name:1,salary:1}
)


db.employees.find(
    {$or: [{salary:{$lte: 3000}},{department:"IT"}]},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or: [{},{}]}
)

db.employees.find(
    {$and: [{},{}]}
)

// ne -> not equal
db.employees.find({department:{$ne:"IT"}})

