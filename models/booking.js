const Sequelize = require('sequelize')

const Booking = (sequelize) => {
  return sequelize.define('booking', {
    origin: {
      type: Sequelize.STRING
    },
    destination: {
      type: Sequelize.STRING
    }
  });
}

module.exports = Booking;
