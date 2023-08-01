'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
       firstname: "John",
       lastname: "doe",
       email:"fff@gmail.cl",
       password:"gggggg",
       gendre:"male"
      },
      {
        firstname: "John2",
        lastname: "doe2",
        email:"fff2@gmail.cl",
        password:"gggggg2",
        gendre:"male"
       }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Users', null, {});
   
  }
};
