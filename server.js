const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use( express.static(__dirname + '/public') );

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


 
app.get('/', function (req, res) {
    
    res.render('home',{
        name: 'juan carlos',
    });

});

app.get('/about', function (req, res) {

    res.render('about',{
        nombre: 'Simoncito bebé',
        year: 7,
        poder: 'Super guapo'
    });
      
});
 
app.listen( port,  () => {
    console.log(`Escuchando peticiones en el puerto ${port}` );
});