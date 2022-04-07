const errorHandler = (err, req, res, next) => {
  console.log(err);

  let error = { ...err };
  error.message = err.message;

  res.status(error.statusCode || 500).send(`Error ${error.message}`);
};

module.exports = errorHandler;
