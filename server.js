// Use console.log so you can know where something goes wrong (if it does).
console.log("server.js is running");

//	The below four lines ensures the server knows we're using express (both engine and app)
//	uses a port of 8000 and creates/uses a database named mongoosetypes.
const express = require("express"),
         port = 8000,
      DB_NAME = "mongoosetypes",
          app = express();

//	The next four lines lets the server know we're parsing form data (if not used, we receive request.body undifined).
//	Also, it's allowing the server to know where (__dirname...) specific folders are for us to use.  That is, views, and static.
//	Finally, we're telling the server we're using the ejs view engine.
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//	The next couple of lines allows the server to 'require' or 'get' the database name from line 8 above and
//	know where our 'routes' will be coming from.  We're making sure we tell server.js where to get our files.
require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

//	The final preceeding two lines allows for the app to know the port our server is listening on.
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});