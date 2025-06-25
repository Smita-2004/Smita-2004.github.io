db.employees.find()
db.employees.find().skip(1)           // first not displayed
db.employees.find().limit(1)            // only 1st displayed
db.employees.find().skip(1).limit(1)   // second one display
db.employees.find({department:"IT"})
db.employees.find({department:"IT"},{_id:0,name:1})
db.employees.find({department:"IT"},{_id:0,name:1,salary:1})

