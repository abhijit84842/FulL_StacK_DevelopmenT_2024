// Created Server using expressJs

// install Mongoose

- Connect with MongoDB Atlas
- Makeing Schema and Model

// CURD Operation => CREATE UPDATE READ DELETE

// Create Operation Method

- db.collection.insertOne() => It is used to insert a single document in the collection.
- db.collections.insertMany() => It is used to insert multiple documents in the collection.
- db.collections.createCollection() => It is used to create an empty collection.

// Update Opearation Method

- db.collections.findOneAndUpdate() // both nextjs and node js
- db.collections.UpdateOne() => It is used to update a single document in the collection that satisfy the given criteria.
- db.collections.updateMany() => It is used to update multiple documents in the collection that satisfy the given criteria.
- db.collections.replaceOne() => t is used to replace single document in the collection that satisfy the given criteria.

// Read Opearation Method

- db.collection.find() => It is used to retrieve documents from the collection. // both nextjs and node js
- db.collection.findOne()=> It is used to get document of single user. // both nextjs and node js

// Delete Operation Method

- db.collection.findOneAndDelete()
- db.collection.deleteOne() => It is used to delete a single document from the collection that satisfy the given criteria. // both nextjs and node js
- db.collection.deleteMany() => It is used to delete multiple documents from the collection that satisfy the given criteria. // both nextjs and node js
