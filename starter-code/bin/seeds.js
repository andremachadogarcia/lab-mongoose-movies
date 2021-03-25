const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const celebs = [
    {
      name: 'Tom Cruise',
      occupation: 'Artist',
      catchPhrase: 'Im the best',

    },
    { 
      name: 'Arnold Schwarzenegger',
      occupation: 'Terminator',
      catchPhrase: 'Hasta la vista, baby',

    },
    {
      name: 'Jim Carrey',
      occupation: 'Comedian',
      catchPhrase: 'lol',
    },
];


mongoose
  .connect('mongodb://localhost/lab-movies', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.insertMany(celebs)
       .then(insertedCelebs => {
           console.log(`Ìnserted ${insertedCelebs.length} celebs!!` );

           mongoose.connection.close(); 
       })
       .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });