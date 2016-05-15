// app/models/user.js
var mongoose = require('mongoose');

// define the schema for our sample user model
var userSchema = mongoose.Schema({

    email        : { type: String, required: true, unique: true },
    password     : { type: String, required: true },

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    //encrypt password here
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);