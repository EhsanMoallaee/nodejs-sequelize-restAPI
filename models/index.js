const {Sequelize , DataTypes} = require('sequelize');
const chalk = require('chalk');
const dbConfig = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('DB connected...')
})
.catch(err => {
    console.error(chalk.red('Error : ' , err));
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize , DataTypes);
db.reviews = require('./reviewModel.js')(sequelize , DataTypes);
db.sequelize.sync({force: false})
.then(() => {
    console.log('db sync done')
})

module.exports = db;