'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

console.log("Running in :"  + env);

let sequelize;
if (config.use_env_variable) {
  console.log("A=>",use_env_variable)
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log("B=>",config)
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.authenticate().then(value =>{
    console.log('Server Time -> '+Date())
    console.log('Database connection has been built')
}).catch(reason => console.log('Database connection failed, '+reason))

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
/* TODO use npm install helmet
    var helmet = require('helmet');
    app.use(helmet());

    Jasmine for testing
 */