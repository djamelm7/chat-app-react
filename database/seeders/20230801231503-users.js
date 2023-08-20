'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
       firstname: "John",
       lastname: "doe",
       email:"fff@gmail.cl",
       password:bcrypt.hashSync('secret',10),
       gendre:"male",
       createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "John2",
        lastname: "doe2",
        email:"fff2@gmail.cl",
        password:"gggggg2",
        gendre:"male",
        createdAt: new Date(),
        updatedAt: new Date()
       }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Users', null, {});
   
  }
};
