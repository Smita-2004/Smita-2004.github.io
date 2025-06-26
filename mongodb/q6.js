db.employess.find(
    {salary:{$get:3000}},
    { name:true }
).limit(2).slip(1)

db.employess.find(
    {$or:[{salary:{$get:3000}},{department:"IT"}]},
    { name:true }
)
 
// pipelines
db.employees.aggregate([
    {$match:{salary:{$gt:3000}}},
    {$project:{name:1,salary:1}}
])
