const mongoose = require("mongoose");
const shoppingItemSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: new Date(),
  },
});
let shoppingItemData = mongoose.model("shoppingItemData", shoppingItemSchema);
module.exports = shoppingItemData;
