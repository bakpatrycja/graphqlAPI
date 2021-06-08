import * as Sequelize from 'sequelize';
import db from './db.js';

const Task = db.define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: Sequelize.STRING,
  parent: Sequelize.NUMBER
},{
  timestamps: false
});

export default Task;