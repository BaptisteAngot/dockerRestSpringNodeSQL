module.exports = app => {
  const tutorials = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  app.use('', router);
};
