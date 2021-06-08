import { Sequelize } from 'sequelize';

require('dotenv').config()
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env

const db = new Sequelize('postgres://'+DB_USERNAME+':'+DB_PASSWORD+'@hattie.db.elephantsql.com/'+DB_DATABASE);

export default db;