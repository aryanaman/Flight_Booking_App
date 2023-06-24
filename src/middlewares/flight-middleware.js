const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helpers/datetime-helpers");

function validateCreateRequest(req, res, next) {
  if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'Arrival time cannot be prior than departure time in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);   
  }
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'flightNumber is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'airplaneId is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'departureAirportId is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'arrivalAirportId is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'arrivalTime is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'departureTime is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError('price is missing in the incoming request', StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'totalSeats is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next();
}

module.exports = validateCreateRequest;