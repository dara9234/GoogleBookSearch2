const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// using the Schema constructor, we will create a new UserSchema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: {type:String},
  image: {type:String},
  link: {type:String},
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", bookSchema);

// exporting model Book
module.exports = Book;