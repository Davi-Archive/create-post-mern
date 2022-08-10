let express = require('express');
let app = express();

console.log('Hello World')

   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
   /* res.send("Hello Express"); */
 });

app.use("/public", express.static(__dirname + "/public")); //middleware, devolve CSS da pasta public. app.use(path , caminho)

app.get("/json")
    res.json({"message": "Hello json"})




























module.exports = app;
