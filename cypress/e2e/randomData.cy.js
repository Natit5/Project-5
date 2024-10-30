const faker = require('faker')
function generateRandomTitle() {
    return faker.lorem.words(); 
    // Generates a random title using faker.js
  }

  module.exports = {
    generateRandomTitle,
  };
