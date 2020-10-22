let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
},
{
    collection: "contacts"
}
);

module.exports = mongoose.model('Business', businessModel);