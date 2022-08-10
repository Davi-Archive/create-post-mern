let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World')

   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
   /* res.send("Hello Express"); */
 });

app.use("/public", express.static(__dirname + "/public")); //middleware, devolve CSS da pasta public. app.use(path , caminho)

app.get("/json", (req, res)=>{
    res.json({
        message: "Hello json"
    })
    if (process.env.VAR_NAME === "allCaps") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
})

























module.exports = app;
