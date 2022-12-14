/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://news.rhodes.edu/sites/news/files/styles/600x600/public/2018-11/Rhodes%20College-Beautiful%20Campus.jpg?itok=SqbUpfts',
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;