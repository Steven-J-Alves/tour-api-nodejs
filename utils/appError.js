// All error from this class will all be operational errors
// EXAMPLE: a user creating a Tour without the required fields
class AppError extends Error {
  constructor(message, statusCode) {
    // Because message is the only params that the
    // built-in error accepts
    super(message);

    this.statusCode = statusCode;
    // Fail or Error and depends on the statusCode
    // 400 = fail; 500 =  error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // Not add this class to the stack
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
