const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  birthDate: Date,
  email: String,
  organization: String,
  phone: String,
  destinationCountry: String,
  departureDate: String,
  returnDate: String,
  classOfService: String,
  hotel: String,
  airline: String,
  additionalInfo: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
