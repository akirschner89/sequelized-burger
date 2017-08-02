var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.PORT || 3000;
var app = express();
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");
// app.use("/", routes);

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);


db.sequelize.sync({force:true}).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});