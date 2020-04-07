const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    // JSEND to format the response json
    status: 'sucess',
    requestAt: req.requestTime,
    // result: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'sucess',
    // data: {
    //   tour: newTour,
    // },
  });
};

exports.getTour = (req, res) => {
  // store the id from params and converte string to number
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'sucess',
  //   tour,
  // });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'sucess',
    data: null,
  });
};
