const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        console.log(error)
        if (error.name == "sequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") { 
            const explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError('Cannot fetch all the cities data', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getCity(id){

    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError("City you have requested is not found", error.statusCode)
        throw new AppError("Cannot fetch the city data", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("City you want to delete is not found", error.statusCode);
    }
    throw new AppError('Cannot fetch the city data', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function updateCity(data, id) {
  try {
    const response = await cityRepository.update(data, id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("City you want to update is not found", error.statusCode);
    }
    throw new AppError('Cannot fetch the city data', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
    createCity,
    getCity,
    getCities,
    destroyCity,
    updateCity
}