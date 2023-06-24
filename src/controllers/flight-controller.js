const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common")

/**
 * POST : /flights
 * req-body {
 *   flightNumber: 'UK 808', 
 *   airplaneId: 'a380',
 *   departureAirplaneId: 12,
 *   arrivalAirportId:12,
 *   arrivalTime: 11:10:00,
 *   departureTime: 9:10:00,
 *   price: 2000,
 *   boardingGate: '12A'
 *   totalSeats: 120
 * }
 */
async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats
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

// /**
//  * GET : /flights
//  * req-body {}
//  */
// async function getFlights(req, res) {
//   try {
//     const flights = await FlightService.getFlights();
//     SuccessResponse.data = flights;
//     return res
//       .status(StatusCodes.OK)
//       .json(SuccessResponse)
//   }
//   catch (error) {
//     ErrorResponse.error = error;
//     return res
//       .status(error.statusCode)
//       .json(ErrorResponse);
//   }
// }


// /**
//  * GET : /flights/:id
//  * req-body {}
//  */
// async function getFlight(req, res) {
//   try {
//     const flight = await FlightService.getFlight(req.params.id);
//     SuccessResponse.data = flight;
//     return res
//       .status(StatusCodes.OK)
//       .json(SuccessResponse)
//   }
//   catch (error) {
//     ErrorResponse.error = error;
//     return res
//       .status(error.statusCode)
//       .json(ErrorResponse);
//   }
// }

// /**
//  * GET : /flights/:id
//  * req-body {}
//  */
// async function destroyFlight(req, res) {
//   try {
//     const flight = await FlightService.destroyFlight(req.params.id);
//     SuccessResponse.data = flight;
//     return res
//       .status(StatusCodes.OK)
//       .json(SuccessResponse)
//   }
//   catch (error) {
//     ErrorResponse.error = error;
//     return res
//       .status(error.statusCode)
//       .json(ErrorResponse);
//   }
// }

// /**
//  * UPDATE : /Flights/:id
//  * req-body {}
//  */
// async function updateFlight(req, res) {
//   try {
//     const flight = await FlightService.updateFlight( {
//       modelNumber: req.body.modelNumber,
//       capacity: req.body.capacity,
//     },req.params.id);
//     SuccessResponse.data = flight;
//     return res
//       .status(StatusCodes.OK)
//       .json(SuccessResponse)
//   }
//   catch (error) {
//     ErrorResponse.error = error;
//     return res
//       .status(error.statusCode)
//       .json(ErrorResponse);
//   }
// }

module.exports = {
  createFlight,
  // getFlights,
  // getFlight,
  // destroyFlight,
  // updateFlight
};
