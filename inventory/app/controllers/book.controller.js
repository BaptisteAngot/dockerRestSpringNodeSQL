const db = require("../models");
const Books = db.books;
const { Op } = require("sequelize");

exports.findOne = (req, res) => {
  const nom = req.params.id;
  Books.findAll({
      where: {
          nom: {
              [Op.eq]: nom
          }
      },
      attributes: ['stock']
  }).then(data => {
      if (data) {
          res.send(data);
      } else {
          res.status(404).send({
              message: `Cannot find Tutorial with nom=${nom}.`
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message: "Error retrieving Tutorial with nom=" + nom
      });
  });
};
