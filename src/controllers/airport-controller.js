const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common")

/**
 * POST : /airports
 * req-body {modelNumber: 'airbus320', capacity: 200 }
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityId: req.body.cityId
    });
    SuccessResponse.data = airport;
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
 * GET : /airports
 * req-body {}
 */
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
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
 * GET : /airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
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
 * GET : /airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = airport;
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
 * UPDATE : /airports/:id
 * req-body {}
 */
async function updateAirport(req, res) {
  try {
    const airport = await AirportService.updateAirport( {
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityId: req.body.cityId
    },req.params.id);
    SuccessResponse.data = airport;
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
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport
};
