const router = require('koa-router')();
const BookingController = require('./controllers/booking.controller.js');
const bookingController = new BookingController();

//binds paths and functions
router
  .post('/booking', bookingController.createBooking)
  .get('/booking', bookingController.getBooking)

module.exports = router;
