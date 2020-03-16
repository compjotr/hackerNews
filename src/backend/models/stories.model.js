const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema({
 
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
