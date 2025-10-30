export function successResponse(res, data, message = "Success", statusCode) {
  res.status(statusCode).json({
    success: true,
    status: statusCode,
    message: message,
    data: data,
  });
}

export function errorResponse(res, error, statusCode = 500) {
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: error.message || "An unexpected error occurred",
    error: error?.errors,
  });
}
