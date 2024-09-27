var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pokemonRouter = require('./routes/pokemon');
var pokedexRouter = require('./routes/pokedex');

var app = express(); // Inicialização da aplicação

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Disponibilizando as rotas para o cliente
app.use('/', indexRouter);
app.use('/api/pokemon', pokemonRouter);
app.use('/api/pokedex', pokedexRouter); // Certifique-se de que o pokedexRouter esteja importado

module.exports = app;
