'use strict';
module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    token: DataTypes.STRING,
    user_id: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    is_mobile: DataTypes.BOOLEAN,
    user_agent: DataTypes.STRING,
    timestamp: DataTypes.INTEGER,
    url_current: DataTypes.STRING
  }, {});
  token.associate = function(models) {
    // associations can be defined here

    token.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return token;
};