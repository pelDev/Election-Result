const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  console.log(err);

  let error = { ...err };
  error.message = err.message;

  //   // Bad ObjectId
  //   if (err.name === "CastError") {
  //     const message = `${err.resource} not found with id of ${err.value}`;

  //     error = new ErrorResponse(message, 404);
  //   }

  //   // Mongoose Duplicate key
  //   if (err.code === 11000) {
  //     const message = "Duplicate field entered";
  //     error = new ErrorResponse(message, 400);
  //   }

  //   // Mongoose Validation Error
  //   if (err.name === "ValidationError") {
  //     const message = Object.values(err.errors).map((val) => val.message);
  //     error = new ErrorResponse(message, 400);
  //   }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server error" });
};

module.exports = errorHandler;
