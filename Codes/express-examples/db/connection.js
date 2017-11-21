const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(config.dbURL);
module.exports = mongoose;