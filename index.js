//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Raúl Toledo',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vincent', {
        autor : 'Yo mero y que',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor : 'Lord Voldemort',
        year : new Date().getFullYear(),
        title : 'Salvador Dalí'
    });
});

app.get('/kand', (req, res)=>{
    res.render('kandisky', {
        autor : 'Gandalf el gris',
        year : new Date().getFullYear(),
        title : 'Vasili Kandinski',
        algo : "No se que poner"
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});