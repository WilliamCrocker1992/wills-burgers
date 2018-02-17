var db = require("../models");
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll()
            .then(function(results) {
                var burgerKing = {
                    burger: results
                };
                res.render("index", burgerKing)
            });
    });
    app.get("/api/burger", function(req, res) {
        db.Burger.findAll()
            .then(function(results) {
                res.json(results);
            });
    });
    app.post("/api/burger", function(req, res){
      db.Burger.create ({
        burger_name: req.body.burger_name
      }).then(function(results){
        res.json(results)
      });
    });
    app.put("/api/burger/:id", function(req, res){
      db.Burger.update({
        eaten: true
      } {
        where: {id: req.params.id}
      }
      })
      .then(function (results){
        res.json(results);
        res.end();
      });
    });
}