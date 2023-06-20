const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightName && !req.body.arrivalAirport && !req.body.destinationAirport && !req.body.price) {
    ErrorResponse.message = "Something went wrong while creating airplane."
    ErrorResponse.error = new AppError( 'Either name, arrivalAirport, destinationAirport or price is missing in the incoming request' , StatusCodes.BAD_REQUEST);  
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next();
}

module.exports = validateCreateRequest;