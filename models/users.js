'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    hash_password: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_phone_num: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    is_suspend: DataTypes.BOOLEAN
  }, {});
    user.associate = function(models) {
    // associations can be defined here

    user.hasOne(models.Token, {
      foreignKey: 'user_id',
      as: 'token'
    })
  };
  return user;
};