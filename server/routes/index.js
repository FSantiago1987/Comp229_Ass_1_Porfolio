var fs = require('fs');
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for displaying the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for displaying the Register Page */
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
