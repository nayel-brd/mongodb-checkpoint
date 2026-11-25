use contact
db.createCollection("contactlist")
db.contactlist.insertMany([
  { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
  { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
  { last_name: "Emilie", first_name: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { last_name: "Alex", first_name: "brown", age: 4 },
  { last_name: "Denzel", first_name: "Washington", age: 3 }
])
db.contactlist.find()
db.contactlist.findOne({ _id: ObjectId("PUT_THE_ID_HERE") })
db.contactlist.find({ age: { $gt: 18 } })
db.contactlist.find({ age: { $gt: 18 }, $or: [{ first_name: /ah/ }, { last_name: /ah/ }] })
db.contactlist.updateOne({ last_name: "Kefi", first_name: "Seif" }, { $set: { first_name: "Anis" } })
db.contactlist.deleteMany({ age: { $lt: 5 } })
db.contactlist.find()
