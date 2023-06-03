const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "api is live now",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
