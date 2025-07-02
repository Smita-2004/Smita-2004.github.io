//  db.createCollection("posts")
//  db.createCollection("comments")

db.posts.insertMany([
  { _id: "p1", title: "Post 1" },
  { _id: "p2", title: "Post 2" }
])

db.comments.insertMany([
{ _id: "c1", postId: "p1", comment: "Comment1" },
{ _id: "c2", postId: "p1", comment: "Comment2" },
  { _id: "c3", postId: "p2", comment: "Comment1" },
  { _id: "c4", postId: "p2", comment: "Comment2" },
  { _id: "c5", postId: "p2", comment: "Comment3" }
])
db.comments.insertOne([
    {_id:"c6",postId:"p1", comment:"Comment3"},
])

// display post and comment together

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "postId",
      as: "comments",
    },
  },
 {$unwind:"$comments"},
  {$project:{_id:0,posts:1,"comments.comment":1}}
]);



db.createCollection("marks")

db.marks.insertMany([
    {name: "John", term:"t1", subject:"Maths", score: 98},
    {name: "John", term:"t2", subject:"Maths", score: 90},
    {name: "John", term:"t3", subject:"Maths", score: 88},
    {name: "John", term:"t1", subject:"Science", score: 92},
    {name: "John", term:"t2", subject:"Science", score: 82},
    {name: "John", term:"t3", subject:"Science", score: 82},
    {name: "Cathy", term:"t1", subject:"Maths", score: 98},
    {name: "Cathy", term:"t2", subject:"Maths", score: 98},
    {name: "Cathy", term:"t3", subject:"Maths", score: 98},
    {name: "Cathy", term:"t1", subject:"Science", score: 92},
    {name: "Cathy", term:"t2", subject:"Science", score: 82},
    {name: "Cathy", term:"t3", subject:"Science", score: 80}
]);


// db.marks.aggregate([
//   {
//     $group: {
//       _id: { name: "$name", subject: "$subject" },
//       averageScore: { $avg: "$score" }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       name: "$_id.name",
//       subject: "$_id.subject",
//       averageScore: 1
//     }
//   }
// ]);


db.marks.aggregate([
    {$group:{_id:"$name", AvgScore:{$avg:"$score"}}}
])


db.marks.aggregate([
    {$group:{_id:"$term", AvgScore:{$avg:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:"$subject", AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.marks.aggregate([
    {$group:{_id:{term:"$term",subject:"$subject"}, AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.marks.aggregate([
    {$match:{name:"John"}},
    {$group:{_id:{name:"$name",term:"$term"}, AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.createCollection("studentInfo")

db.marks.updateMany(
  {},
  { $rename: { "name": "sid" } }
)

db.studentInfo.insertOne({id:"s1",name:"John"})
db.studentInfo.insertOne({id:"s2",name:"Cathy"})
// Update "John" to "s1"
db.marks.updateMany(
  { sid: "John" },
  { $set: { sid: "s1" } }
);

// Update "Cathy" to "s2"
db.marks.updateMany(
  { sid: "Cathy" },
  { $set: { sid: "s2" } }
);

db.studentInfo.aggregate([
    {match:{name:"John"}},
    {$lookup:{from:"marks",
        localField: "id",
        foreignField:"sid",
        as:"marks",
    },
},
{$unwind:"$marks"},
{$group:{_id:{term:"$marks.term",AvgScore:{$avg:"$marks.score"}}}}
])

// show grade A to all employees

db.employees.aggregate([
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:[{$gt:["$salary",3000]},"Grade A","grade B"]}}
  }
])

// store result in another collection
// out -> stores result into another collection
db.employees.aggregate([
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["salary",2000]},
      then:"Grade A",
      else:"Grade B"
    }
    }}
  },
  {$out:"GradeWiseSalary"}
])

// db.createView("viewname","collectionName,"[query])

db.createView("salaryView","employees",[
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["salary",2000]},
      then:"Grade A",
      else:"Grade B"
    }
    }}
  },
 
])

db.salaryView.drop()

// if any changes needed in view first deop the view then run the updated query
db.createView("salaryView","employees",[
  {$project:{
    _id:0,
    name:1,
    department:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["salary",2000]},
      then:"Grade A",
      else:"Grade B"
    }
    }}
  },
 
])