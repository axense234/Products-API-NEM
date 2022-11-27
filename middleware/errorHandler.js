const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(200).json({ err });
};

module.exports = errorHandlerMiddleware;
