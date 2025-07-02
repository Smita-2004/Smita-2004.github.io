db.employees.find({name:{$regex:"a"}}) 

db.employees.find({name:{$regex:"Cathy"}}) 

db.employees.find({name:{$regex:"Cathy",$options:"i"}}) 

// ^C -> names begin with C will appear
db.employees.find({name:{$regex:"^C",$options:"i"}}) 

// Y& -> ends with Y
db.employees.find({name:{$regex:"y$",$options:"i"}}) 
