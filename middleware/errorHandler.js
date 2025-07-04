const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;

  res.status(statusCode);

  const errorResponse = {
    Title: "Error",
    Message: err.message || "An error occurred",
  };

  // Customize title based on status code
  switch (statusCode) {
    case 400:
      errorResponse.Title = "Bad Request";
      break;
    case 401:
      errorResponse.Title = "Unauthorized";
      break;
    case 403:
      errorResponse.Title = "Forbidden";
      break;
    case 404:
      errorResponse.Title = "Not Found";
      break;
    case 405:
      errorResponse.Title = "Method Not Allowed";
      break;
    case 409:
      errorResponse.Title = "Conflict";
      break;
    case 422:
      errorResponse.Title = "Unprocessable Entity";
      break;
    case 429:
      errorResponse.Title = "Too Many Requests";
      break;
    case 500:
      errorResponse.Title = "Internal Server Error";
      break;
    case 502:
      errorResponse.Title = "Bad Gateway";
      break;
    case 503:
      errorResponse.Title = "Service Unavailable";
      break;
    case 504:
      errorResponse.Title = "Gateway Timeout";
      break;
    default:
      errorResponse.Title = "Unexpected Error";
      break;
  }
  
  res.json(errorResponse);
};

module.exports = errorHandler;