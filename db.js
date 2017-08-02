var Sequelize = require('sequelize');

const sequelize = new Sequelize('seaworthy', 'root', 'banamak', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    defineModels();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const defineModels = () => {
  const Booking = require('./models/booking')(sequelize);
  console.log('syncing…');
  // force: true will drop the table if it already exists
  Booking.sync({force: true});
}

defineModels();

module.exports = sequelize;
