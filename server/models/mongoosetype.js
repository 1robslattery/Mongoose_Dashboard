// Use console.log so you can know where something goes wrong (if it does).
console.log("mongoosetype.js is running");

//	We need to let this .js file know what a mongoose is so, we 'require' or 'get' it.
const mongoose = require("mongoose");

//	The below information allows for us to create the attributes of what ever we wish to create.
//	This is like a template for our objects.  This is also where we apply required fields.
const MongooseSchema = new mongoose.Schema({
    species: {
        type: String,
        required: true,
        minlength: [3, "Species name must contain 4 characters or more"]
    },
    color: {
        type: String,
        required: true,
		minlength: [3, "Species name must contain 4 characters or more"]
    },
    age: {
        type: Number,
        required: true
    },
}, {timestamps: true});

mongoose.model("Mongoosetype", MongooseSchema);