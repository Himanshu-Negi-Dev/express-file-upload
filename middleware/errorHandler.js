const { CustomErrorAPI } = require("../error/CustomErrorAPI");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.statusCode).json({ errorMessage: err.errorMessage });
  }
  return res.status(500).json({ errorMessage: err.message });
}

module.exports = { errorHandler };