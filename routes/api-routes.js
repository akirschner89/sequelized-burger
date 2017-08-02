var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.burgers.findAll({})
    .then(function(dbburgers) {
      res.json(dbburgers);
    });
  });

  // Get route for returning burgers that are devoured
  app.get("/api/burgers/", function(req, res) {
    db.burgers.findAll({
      where: {
        devoured: true
      }
    })
    .then(function(dbburgers) {
      res.json(dbburgers);
    });
  });

  // Get rotue for retrieving a single burgers
  app.get("/api/burgers/:id", function(req, res) {
    db.burgers.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbburgers) {
      res.json(dbburgers);
    });
  });

  // burgers route for saving a new burgers
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.burgers.create({
      burger_name: req.body.name,
    })
    .then(function(dbburgers) {
      res.json(dbburgers);
    });
  });

  // DELETE route for deleting burgers
  // app.delete("/api/burgers/:id", function(req, res) {
  //   db.burgers.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbburgers) {
  //     res.json(dbburgers);
  //   });
  // });

  // PUT route for updating burgers
  app.put("/api/burgers", function(req, res) {
    db.burgers.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbburgers) {
      res.json(dbburgers);
    });
  });
};