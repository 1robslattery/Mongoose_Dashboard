// Use console.log so you can know where something goes wrong (if it does).
console.log("mongoose.js is running");

//	This mongoose.js file is used to place ALL of our mongoose type actions.
//	This is required when 'modulizing' our project.
const mongoose = require("mongoose");

module.exports = function(DB_NAME) {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    require("../models/mongoosetype");
}