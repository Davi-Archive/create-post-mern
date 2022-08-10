let express = require('express');
let app = express();
let bodyParser = require('body-parser');
console.log('Hello World')

app.use(bodyParser.urlencoded({extended: false}))


app.post("/name", (req, res) => {
  var string = req.body.first + " " + req.body.last
  res.json({
    name: string
  });
})


app.get("/name", (req, res)=>{
  var firstName = req.query.first;
  var lastName = req.query.last;
/*  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query; */
   res.json({
    name: `${firstName} ${lastName}`
  });
})



app.get("/:word/echo", (req, res) =>{
  const { word } = req.params;
  res.json({
    echo: word
  })
})





/* app.get("/:param1/:param2", (req, res) => {
  // Access the corresponding key in the req.params
  // object as defined in the endpoint
  var param1 = req.params.param1;
  // OR use destructuring to get multiple parameters
  var { param2, param1  } = req.params;
  // Send the req.params object as a JSON Response
  res.json(req.params);
}); */


app.get('/now', function(req, res, next){
  req.time = new Date().toString()
  next();
},function(req ,res){
  res.send({time: req.time})
});






app.use(function middleWare(req, res, next){
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next();
})

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
  })
});

module.exports = app;
