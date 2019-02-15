// controller/index.js
// Ramandeep Kaur
// 300973558
// Fep 15, 2019
let express = require('express');
let router = express.Router();

module.exports.displayContactUs = (req, res, next) => {
    res.render('contact/index', { title: 'Contact' });
  }