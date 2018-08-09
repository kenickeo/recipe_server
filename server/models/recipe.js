
const mongoose = require('mongoose');

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

    Recipe
    
};

