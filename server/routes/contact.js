let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact');

// Get Contact list - READ

router.get('/', contactController.displayContactUs);



module.exports = router;
