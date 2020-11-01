function notFound(req, res, next) {
  const err = new Error('404 - Not found')
  err.status = 404;
  next(err);
}

function errorHandler(err, req, res, next) {
  const status = err.status || err.response && err.response.status || 500;
  if (status >= 500) {
    console.error("App error::", err.message, err.stack);
  }

  res.status(status).json({
    message: err.message || err
  })
}


module.exports = {
  notFound,
  errorHandler
}