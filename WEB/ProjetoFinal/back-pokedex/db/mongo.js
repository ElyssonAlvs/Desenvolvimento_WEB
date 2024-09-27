var mongoose = require("mongoose")
var mongoDB_URI = "mongodb://127.0.0.1:27017/pokedex"

mongoose.connect(
    mongoDB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
    }).catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });
var db = mongoose.connection

db.on("connected", () => console.log("Mongo Connected!"))
db.on("disconnected", () => console.log("Mongo Disconnected!"))
db.on("error", (error) => console.log(error))