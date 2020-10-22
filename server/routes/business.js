let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let listController = require('../controllers/business');

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

/* GET Route for the Business List page */
router.get('/', listController.displayBusinessList);

/* GET Route for displaying the Add Page page - CREATE operation */
router.get('/add', requireAuth, listController.displayAddPage);

/* POST Route for processing the Add Page page - CREATE operation */
router.post('/add', requireAuth, listController.processAddPage);

/* GET Route for displaying the Edit Page page - UPDATE operation */
router.get('/edit/:id', requireAuth, listController.displayEditPage);

/* POST Route for processing the Edit Page page - UPDATE operation */
router.post('/edit/:id', requireAuth, listController.processEditPage);

/* GET Route for detetion - UPDATE operation */
router.get('/delete/:id', requireAuth, listController.processDeletion);

module.exports = router;