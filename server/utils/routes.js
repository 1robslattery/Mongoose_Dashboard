// Use console.log so you can know where something goes wrong (if it does).
console.log("routes.js is running");

const Mongoosetypes = require("../controllers/mongoosetypes");

//	As with Django, the below lines are similar to the urls.py file.
//	We use these lines to tell what new methods we'll create for the app to run.
module.exports = function(app) {
    app.get("/", Mongoosetypes.index);
	app.get("/mongoosetype/new", Mongoosetypes.createnew);
    app.post("/mongoosetype", Mongoosetypes.create);
    app.get("/mongoosetype/:_id", Mongoosetypes.edit);
    app.post("/mongoosetype/:_id", Mongoosetypes.update);
    app.get("/mongoosetype/delete/:_id", Mongoosetypes.delete);
}