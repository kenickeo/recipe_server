const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://heroku_sc8w0dv0:1q61p27jbgnjpe1ag6o6lmph6l@ds117422.mlab.com:17422/heroku_sc8w0dv0');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));





module.exports = {

    mongoose
    
};
