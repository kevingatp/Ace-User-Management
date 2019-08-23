'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      ip_address: {
        type: Sequelize.STRING
      },
      is_mobile: {
        type: Sequelize.BOOLEAN
      },
      user_agent: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.INTEGER
      },
      url_current: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tokens');
  }
};