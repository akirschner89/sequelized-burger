module.exports = function(sequelize, Datatypes) {
  var burgers = sequelize.define("burgers", {
      burger_name: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      devoured: {
        type: Datatypes.BOOLEAN,
        defaultValue: false
      }
  // burger_name: DataTypes.STRING,
  // devoured: DataTypes.BOOLEAN
  });
  return burgers;
};

