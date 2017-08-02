var express = require("express");
var router = express.Router();
var db = require("../models/");
// var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
  db.burgers.findAll({})
    .then(function(db) {
      res.render("index", db);
    });
});
//   db.burgers.findAll([burgers], function(dbburgers) {
        
        // console.log(hbsObject);
  //       res.render("index");
  //     // });
  //   // db.burgers.findAll({ burgers: data,  
  //   //     res.render("index", data);

  //   // // }).then(function() {
  //   // // //     res.render("index");
  //   // });
  //   // db.burgers.find({model:burgers}, function() {
  //   //   res.render("index", burgers);
  //   // // .then(function() {
  //   // //   res.render("index", data);
  //   // });



  //   // db.burgers.findAll([burgers], function() {
  //   //   res.render("index", burgers);
  // });

router.get("/", function(req, res) {
  db.burgers.findAll({ 
    where: {
        devoured: true
      }
  }).then(function(db) {
      res.render("index", db);
    });
});


router.post("/", function(req, res) {
  db.burgers.create({
      burger_name: req.body.name,
    })
    .then(function(db) {
      res.render("index", db);
    });
  // // db.burgers.create(["burger_name"], [req.body.name], function() {
  //   res.redirect("/");
  // // });
});

router.put("/:id", function(req, res) {
  db.burgers.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(db) {
      res.render("index", db);
    });
    // res.redirect("/");
  // });
});


module.exports = router;

  