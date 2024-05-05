// Error Handler Class
const HttpStatusCode = require("./constants");
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

class BaseService {
  // status, error, message, data
  constructor() {}

  get_200_success = (res, success, error, message = "Success", data = null) => {
    return res.status(HttpStatusCode.SUCCESSFUL_RESPONSES["200_OK"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }

  /************** Client error response **************/

  get_400_bad_request = (res, success, error, message = "Bad Request", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["400_BAD_REQUEST"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }

  get_401_unauthorized = (res, success, error, message = "Unauthorized", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["401_UNAUTHORIZED"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }
  
  get_403_forgidden = (res, success, error, message = "Forbidden", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["403_FORBIDDEN"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }

  get_404_not_found = (res, success, error, message = "Not Found", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["404_NOT_FOUND"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }
  get_405_method_not_allowed = (res, success, error, message = "Method Not Allowed", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["405_METHOD_NOT_ALLOWED"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }

  get_412_precondition_failed = (res, success, error, message = "Precondition Failed", data = null) => {
    return res.status(HttpStatusCode.CLIENT_ERROR["412_PRECONDITION_FAILED"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }

  /*********** Internal Server Error **********/

  get_500_internal_server_error = (res, success, error, message = "Internal Server Error", data = null) => {
    return res.status(HttpStatusCode.SERVER_ERROR["500_INTERNAL_SERVER_ERROR"]).json({
      success: success,
      error: error,
      message: message,
      data: data
    });
  }
}

module.exports = {
  ErrorHandler,
  BaseService,
}
