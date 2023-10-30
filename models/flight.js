const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "JFK", "LGA", "MCO"],
      default: "DEN",
    },
    arrival: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new mongoose.Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United", "JetBlue", "Delta", "Frontier"],
    },
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "JFK", "LGA", "MCO"],
      default: "DEN",
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
      required: true,
    },
    departs: {
      type: Date,
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
module.exports = mongoose.model("Flight", flightSchema);
