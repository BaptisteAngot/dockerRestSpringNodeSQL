module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("bookapi", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nom: {
      type: Sequelize.STRING
    },
    stock: {
      type: Sequelize.INTEGER
    }
  }, {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  });

  return Book;
};
