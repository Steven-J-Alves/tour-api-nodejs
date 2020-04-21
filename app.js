const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middlewares
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mouting Router
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// MIDDLEWARE: Unhandled Routes
app.all('*', (req, res, next) => {
  // To pass this err to handling error middleware (the other middleware will be skiped)
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// MIDDLEWARE: error handling
app.use(globalErrorHandler);

module.exports = app;
