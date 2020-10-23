let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Business = require('../models/business');

module.exports.displayBusinessList = async (req, res, next) =>{
    try {
        let businessList = await Business.find({})
        .sort({name: 'asc'})  
        res.render('business/list', 
        {title: 'Business Contact List', 
        BusinessList: businessList, 
        displayName: req.user ? req.user.displayName: ''});
    } catch (err) {
        return console.error(err);
    }
};

module.exports.displayAddPage = (req,res, next) => {
    res.render('business/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName: ''});
};

module.exports.processAddPage = (req, res, next) => {
    let newContact = Business({
        "name": req.body.name,
        "phoneNumber": req.body.phoneNumber,
        "email": req.body.email
    });

    Business.create(newContact, (err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/business-list');
        }
    });
};

module.exports.displayEditPage = (req,res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('business/edit', 
            {title: 'Edit Contact', 
            contact: contactToEdit, 
            displayName: req.user ? req.user.displayName: ''});
        }
    });
};

module.exports.processEditPage = (req,res, next) => {
    let id = req.params.id;

    let updatedContact = Business({
        "_id": id,
        "name": req.body.name,
        "phoneNumber": req.body.phoneNumber,
        "email": req.body.email
    });

    Business.updateOne({_id:id}, updatedContact,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business list
            res.redirect('/business-list');
        }
    });
}

module.exports.processDeletion = (req,res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business list
            res.redirect('/business-list');
        }
    });
};