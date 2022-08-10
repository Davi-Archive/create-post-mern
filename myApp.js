let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World')

   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
   /* res.send("Hello Express"); */
 });

app.use("/public", express.static(__dirname + "/public")); //middleware, devolve CSS da pasta public. app.use(path , caminho)

  app.get("/json", (req, res) => {
        var response = "Hello json"
        if (process.env.MESSAGE_STYLE == "uppercase") {
          response = response.toUpperCase();
        }
        res.json({
          message: response
        });
      })
























module.exports = app;
