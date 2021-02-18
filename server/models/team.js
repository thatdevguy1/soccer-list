const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    validate: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  },
});

module.exports = mongoose.model("Team", teamSchema);
