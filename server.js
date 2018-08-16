var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");


var app = express();
var PORT = process.env.PORT || 3000;;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//module.exports = router;
