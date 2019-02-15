let express = require('express');
let router = express.Router();

module.exports.displayContactUs = (req, res, next) => {
    res.render('contact/index', { title: 'Contact Us' });
  }