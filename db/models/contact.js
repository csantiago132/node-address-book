'use strict';
module.exports = (sequelize, DataTypes) => {
  let Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  Contact.associate = () => {
    // associations can be defined here
  };
  return Contact;
};
