const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helpers/datetime-helpers");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
      return flight; 
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      })
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

// async function getFlights() {
//   try {
//     const flights = await flightRepository.getAll();
//     return flights;
//   } catch (error) {
//     throw new AppError('Cannot fetch all the flight data', StatusCodes.INTERNAL_SERVER_ERROR)
//   }
// }

// async function getFlight(id) {
//   try {
//     const flight = await flightRepository.get(id);
//     return flight;
//   } catch (error) {
//     if (error.statusCode == StatusCodes.NOT_FOUND) {
//       throw new AppError("Flight you have requested is not found", error.statusCode);
//     }
//     throw new AppError('Cannot fetch the flight data', StatusCodes.INTERNAL_SERVER_ERROR)
//   }
// }

// async function destroyFlight(id) {
//   try {
//     const response = await flightRepository.destroy(id);
//     return response;
//   } catch (error) {
//     if (error.statusCode == StatusCodes.NOT_FOUND) {
//       throw new AppError("Flight you want to delete is not found", error.statusCode);
//     }
//     throw new AppError('Cannot fetch the flight data', StatusCodes.INTERNAL_SERVER_ERROR)
//   }
// }

// async function updateFlight(data, id) {
//   try {
//     const response = await flightRepository.update(data, id);
//     return response;
//   } catch (error) {
//     if (error.statusCode == StatusCodes.NOT_FOUND) {
//       throw new AppError("Flight you want to update is not found", error.statusCode);
//     }
//     throw new AppError('Cannot fetch the flight data', StatusCodes.INTERNAL_SERVER_ERROR)
//   }
// }

module.exports = {
  createFlight,
  // getFlights,
  // getFlight,
  // destroyFlight,
  // updateFlight
};
