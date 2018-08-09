const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://user:pass@host:port/dbname');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function callback() {

var Recipe = mongoose.model('Recipe', {


Recipe: {

  type: String

},

Ingredients: {

  type: Array

},

Instructions: {

	type: Array
}

});

module.exports = {

    mongoose,
    Recipe

};

});

