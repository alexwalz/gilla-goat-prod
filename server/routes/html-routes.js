// *********************************************************************************
// html-routes.js
// *********************************************************************************

var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });

};