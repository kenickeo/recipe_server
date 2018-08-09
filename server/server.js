const {mongoose} = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const {Recipe} = require('./db/mongoose');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.post('/recipes', (req, res) => {


var recipe = new Recipe(

req.body

);

recipe.save().then((response) => {

console.log(response);

}, 

(e) => {

res.status(400).send(e);

  });

});

app.get('/recipes', (req, res) => {

     

Recipe.find({}).then((response) => {
   
     var map = {};

     response.forEach((item) => {

       map[item._id] = item;

     });
      


res.send(map);

}, 

(e) => {

res.status(500).send(e);

  });

});

app.put('/recipes/:id', (req, res) => {

     
      
Recipe.where({_id: req.params.id}).update({Recipe: req.body.Recipe, Ingredients: req.body.Ingredients, Instructions: req.body.Instructions}).then((data) => {

console.log(data);



});

});

app.delete('/recipes/:id', (req, res) => {


Recipe.where({_id: req.params.id}).findOneAndDelete({Recipe: req.body.Recipe, Ingredients: req.body.Ingredients, Instructions: req.body.Instructions}).then((data) => {

console.log(data);



});


});



app.listen(port, () => {

  console.log(`Server is starting on port ${port}`);

});
