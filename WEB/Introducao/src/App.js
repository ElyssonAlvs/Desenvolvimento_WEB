// App.js do CRUD-EXPRESS
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("./db/mongo.connection")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var professoresRouter = require("./routes/professores")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/professores",professoresRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



/*
App.js da pasta Introducao
function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para a WEB!</h1>

    </div>
  )
}
*/
//questão do children
/*function App() {
  return (
    <div>
      <h1> Desenvolvimento de Software para a WEB!</h1>
      <hr />
      <SistemaSolar>
        <Planeta nome="Mercúrio" tipo="Rochoso" ordem="1" />
        <hr />
        <Planeta nome="Vênus" tipo="Rochoso" ordem="2" />
        <hr />
        <Planeta nome="Terra" tipo="Rochoso" ordem="3" />
        <hr />
        <Planeta nome="Marte" tipo="Rochoso" ordem="4" />
        <hr />
        <Planeta nome="Júpiter" tipo="Gasoso" ordem="5" />
        <hr />
        <Planeta nome="Saturno" tipo="Gasoso" ordem="6" />
        <hr />
        <Planeta nome="Urano" tipo="Gasoso" ordem="7" />
        <hr />
        <Planeta nome="Netuno" tipo="Gasoso" ordem="8" />
      </SistemaSolar>
    </div>
  );
}*/

export default App;
