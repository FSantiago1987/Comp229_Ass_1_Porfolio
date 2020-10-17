let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bookController = require('../controllers/book');

//helper function for guard
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add Page page - CREATE operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add Page page - CREATE operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit Page page - UPDATE operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit Page page - UPDATE operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET Route for detetion - UPDATE operation */
router.get('/delete/:id', requireAuth, bookController.processDeletion);

module.exports = router;