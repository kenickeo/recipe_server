const {mongoose} = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const {Recipe} = require('./models/recipe');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
  });


app.post('/recipes', (req, res) => {


var recipe = new Recipe(

req.body

);

recipe.save().then((response) => {

console.log(response);
res.send(response);

}, 

(e) => {

res.status(400).send(e);

  });

});

app.get('/recipes', (req, res) => {

     

Recipe.find({}).sort( {_id: 1} ).then((response) => {
  
     var map = {};
 console.log(response[0]);
     response.forEach((item) => {

       map[item._id] = item;
 
     });
      



 if (response[0] == undefined){
   
   console.log('nothing');
   res.send('null');

 } else {

res.send(map);
  
 }


}, 

(e) => {

res.status(500).send(e);

  });

});

app.get('/recipes/:id', (req, res) => {


Recipe.findById( {_id: req.params.id}, (err, data) => {

if(err){

return res.status(500).send(err);

}


 var mapObj = {};
var active = 'active';
 mapObj[active] = data;

    

res.send(mapObj);


});


});

app.put('/recipes/:id', (req, res) => {

     
      
Recipe.where({_id: req.params.id}).update({Recipe: req.body.Recipe, Ingredients: req.body.Ingredients, Instructions: req.body.Instructions}).then((data) => {

console.log(data);



});

});

app.delete('/recipes/:id', (req, res) => {


Recipe.where({_id: req.params.id}).findOneAndDelete({Recipe: req.body.Recipe, Ingredients: req.body.Ingredients, Instructions: req.body.Instructions}).then((data) => {

res.send(data);



});


});



app.listen(port, () => {

  console.log(`Server is starting on port ${port}`);

});
