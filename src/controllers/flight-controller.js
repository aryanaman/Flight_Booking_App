const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common")

/**
 * POST : /flights
 * req-body {modelNumber: 'airbus320', capacity: 200 }
 */
async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
        flightName: req.body.flightName,
        destinationAirport: req.body.destinationAirport,
        arrivalAirport: req.body.arrivalAirport,
        price: req.body.price,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
    });
    SuccessResponse.data = flight;
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  }
  catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

/**
 * GET : /flights
 * req-body {}
 */
async function getFlights(req, res) {
  try {
    const flights = await FlightService.getFlights();
    SuccessResponse.data = flights;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  }
  catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}


/**
 * GET : /flights/:id
 * req-body {}
 */
async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.data = flight;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  }
  catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

/**
 * GET : /flights/:id
 * req-body {}
 */
async function destroyFlight(req, res) {
  try {
    const flight = await FlightService.destroyFlight(req.params.id);
    SuccessResponse.data = flight;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  }
  catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

/**
 * UPDATE : /Flights/:id
 * req-body {}
 */
async function updateFlight(req, res) {
  try {
    const flight = await FlightService.updateFlight( {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    },req.params.id);
    SuccessResponse.data = flight;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  }
  catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getFlights,
  getFlight,
  destroyFlight,
  updateFlight
};
